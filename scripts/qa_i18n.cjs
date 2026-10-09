// End-to-end localization checks against the actual static production pages.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'first-aid-game/qa-output/i18n');
fs.mkdirSync(output, {recursive:true});
const widths = [1440,1200,1024,768,430,375];
const routes = ['index.html','about.html','courses/program-1.html','courses/program-2.html'];
const report = {layouts:[], checks:[], errors:[], brokenAssets:[], remainingVietnamese:[]};
const url = process.env.GHME_URL || 'http://127.0.0.1:4173/';
const catalog = JSON.parse(fs.readFileSync(path.join(root,'assets/i18n/catalog.json'),'utf8'));
const originalValues = Object.values(catalog).map(entry=>entry.vi).filter(text=>/[À-ỹ]/.test(text));
async function audit(page, language) {
  assert.equal(await page.locator('html').getAttribute('lang'),language);
  assert.deepEqual(await page.evaluate(()=>GHMEI18n.missingKeys),[]);
  const mismatches = await page.evaluate(language => {
    const result=[];
    function inspect(scope) {
      scope.querySelectorAll('[data-i18n], [data-i18n-attrs], template').forEach(el=>{
        if(el.tagName==='TEMPLATE') {inspect(el.content);return;}
        const nodes=[...el.childNodes].filter(n=>n.nodeType===3);
        (el.dataset.i18n||'').split(';').filter(Boolean).forEach(slot=>{
          const [index,key]=slot.split(':');
          if(nodes[index]?.textContent.trim()!==GHME_TRANSLATIONS[language][key]) result.push(key);
        });
        (el.dataset.i18nAttrs||'').split(';').filter(Boolean).forEach(slot=>{
          const [attr,key]=slot.split(':');
          // Stateful menu labels are updated by their own existing event handlers.
          if(el.getAttribute(attr)!==GHME_TRANSLATIONS[language][key] && !el.matches('.menu-toggle,.course-menu')) result.push(key);
        });
      });
    }
    inspect(document);return result;
  },language);
  assert.deepEqual(mismatches,[],'All marked copy, templates and attributes localized');
  if(language==='en') {
    const leftovers=await page.evaluate(originalValues=>{
      const found=[];
      function inspect(scope) {
        const walker=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT);
        let node;
        while(node=walker.nextNode()) {
          if(node.parentElement?.closest('script,style')) continue;
          const value=node.textContent.replace(/\s+/g,' ').trim();
          if(originalValues.includes(value) && value!=='×' && !value.startsWith('Trí Thiện') && !value.startsWith('68 Nguyễn Huệ')) found.push(value);
        }
        scope.querySelectorAll('template').forEach(el=>inspect(el.content));
      }
      inspect(document.body);return [...new Set(found)];
    },originalValues);
    assert.deepEqual(leftovers,[],'No untranslated Vietnamese copy');
  }
}
async function overflow(page,label) {
  const result=await page.evaluate(()=>({page:document.documentElement.scrollWidth>innerWidth+1, dialogs:[...document.querySelectorAll('dialog[open]')].some(d=>d.scrollWidth>d.clientWidth+1)}));
  assert.equal(result.page,false,'No page overflow '+label);
  assert.equal(result.dialogs,false,'No dialog overflow '+label);
}
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  const page=await browser.newPage();
  page.on('pageerror',e=>report.errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});
  page.on('response',r=>{if(r.status()>=400)report.brokenAssets.push(r.url());});
  await page.goto(url);
  assert.equal(await page.locator('html').getAttribute('lang'),'vi','First visit defaults to VI');
  await page.locator('[data-language=en]').click();
  assert.equal(await page.evaluate(()=>localStorage.getItem('ghmeLanguage')),'en');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('lang'),'en','Reload persists preference');
  for(const language of ['vi','en']) {
   await page.evaluate(language=>GHMEI18n.setLanguage(language),language);
   for(const route of routes) {
    await page.goto(url+route);
    await page.evaluate(()=>document.fonts.ready);
    await audit(page,language);
    assert.equal(await page.locator('.language-switch').count(),1,'Single switch per page');
    assert.equal(await page.locator(`[data-language=${language}]`).getAttribute('aria-pressed'),'true');
    for(const width of widths) {
     await page.setViewportSize({width,height:width<576?812:1000});
     await overflow(page,`${language}/${route}/${width}`);
     const overlaps=await page.locator('header').first().evaluate(header=>{
       const search=header.querySelector('#search-form');
       const nav=header.querySelector('.header-navigation nav');
       const action=header.querySelector('.header-consultation');
       if(!search||!nav||!action||innerWidth<1100)return false;
       const s=search.getBoundingClientRect(),n=nav.getBoundingClientRect(),a=action.getBoundingClientRect();
       return n.right>s.left+1 || s.right>a.left+1;
     });
     assert.equal(overlaps,false,'Header controls do not overlap');
     await page.screenshot({animations:'disabled',path:path.join(output,`${language}-${route.replace(/[/.]/g,'-')}-${width}.png`)});
     report.layouts.push({language,route,width,status:'PASS'});
    }
    if(route==='index.html' || route==='about.html') {
     const section=page.locator('.experts');
     await section.locator('[data-experts-tab=leadership]').click();
     await section.locator('[data-expert-id]').filter({visible:true}).first().click();
     await audit(page,language);
     await overflow(page,'expert profile');
     await section.locator('.experts__close').click();
     await section.locator('[data-experts-tab=instructors]').click();
     await page.locator('#experts-search').fill('no matching person');
     assert.equal(await section.locator('.experts__empty').isVisible(),true);
     await page.locator('.experts__reset').click();
     await page.locator('#experts-specialty').selectOption('Nhãn khoa');
     assert.equal(await section.locator('.experts__card:visible').count(),1);
     await page.locator('#experts-specialty').selectOption('');
    }
    if(route==='index.html') {
     for(const width of widths) {
      await page.setViewportSize({width,height:width<576?812:1000});
      await page.evaluate(()=>scrollTo(0,0));
      if(width<1100) await page.locator('.menu-toggle').click();
      await page.locator('[aria-controls=course-dropdown]').click();
      if(width<1100) await page.locator('[aria-controls=header-bpec]').click();
      await overflow(page,'courses dropdown');
      await page.keyboard.press('Escape');
      if(width<1100) await page.keyboard.press('Escape');
      await page.locator('[data-product-detail=aed]').click();
      await overflow(page,'product details');
      await audit(page,language);
      await page.locator('.product-dialog__close').click();
     }
     await page.locator('#search').fill(language==='en'?'emergency':'cấp cứu');
     await page.locator('#search-form').dispatchEvent('submit');
     assert.ok(await page.locator('#dialog-content a').count()>0,'Search uses translated course data');
     await page.locator('.dialog-done').click();
     await page.locator('[data-info=privacy]').first().click();
     assert.match(await page.locator('#dialog-title').innerText(),language==='en'?/Privacy/:/Chính sách/);
     await page.evaluate(()=>GHMEI18n.setLanguage(GHMEI18n.language==='en'?'vi':'en'));
     assert.match(await page.locator('#dialog-title').innerText(),language==='en'?/Chính sách/:/Privacy/);
     await page.locator('.dialog-done').click();
     await page.evaluate(language=>GHMEI18n.setLanguage(language),language);
     await page.locator('[data-product-category=kits]').click();
     await page.locator('[data-product-kit=personal]').click();
     await page.locator('[data-product-consult=personal]').click();
     assert.equal(await page.locator('[name=need]').inputValue(),'Tư vấn sản phẩm');
     assert.match(await page.locator('[name=message]').inputValue(),language==='en'?/I would like/:/Tôi muốn/);
     await page.locator('[name=message]').fill((await page.locator('[name=message]').inputValue())+'\nUser-entered note');
     await page.evaluate(()=>GHMEI18n.setLanguage(GHMEI18n.language==='en'?'vi':'en'));
     assert.match(await page.locator('[name=message]').inputValue(),language==='en'?/Tôi muốn/:/I would like/);
     assert.match(await page.locator('[name=message]').inputValue(),/User-entered note/);
     await page.evaluate(language=>GHMEI18n.setLanguage(language),language);
     const form=page.locator('#consultation-form');
     await form.locator('[name=name]').fill('QA Person');
     await form.locator('[name=organization]').fill('QA Company');
     await form.locator('[name=phone]').fill('0908123456');
     await form.locator('[name=email]').fill('invalid');
     assert.match(await form.locator('[name=email]').evaluate(el=>el.validationMessage),language==='en'?/valid email/:/email hợp lệ/);
     await form.locator('[name=email]').fill('qa@example.com');
     await form.locator('[name=region]').selectOption('Hà Nội');
     await form.locator('[name=consent]').check();
     assert.equal(await form.evaluate(el=>el.checkValidity()),true,'Localized valid form');
     await form.locator('[type=submit]').click();
     assert.match(await form.locator('.form-status').innerText(),language==='en'?/has not been sent/:/chưa được gửi/);
    }
   }
  }
  await page.goto(url+'courses/program-1.html');
  await page.locator('[data-language=en]').click();
  await page.locator('.course-consult').click();
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  assert.equal(await page.locator('[name=need]').inputValue(),'Cấp cứu ngoại viện cơ bản (BPEC)');
  assert.equal(await page.locator('[name=need]').evaluate(el=>el.validity.customError),false);
  report.checks.push('VI default; client-side switch; reload/navigation persistence; marked copy and templates; title/meta/accessibility; expert profiles, tabs, filters, empty state; dropdowns; product dialogs/consultation; English search; form validation/success; program preselection');
  assert.deepEqual(report.errors,[],'No console/page errors');
  assert.deepEqual(report.brokenAssets,[],'No failed assets');
  report.status='PASS';
 } catch(error) {report.status='FAIL';report.failure=error.stack;throw error;}
 finally {fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2));await browser.close();console.log(JSON.stringify({status:report.status,layouts:report.layouts.length,errors:report.errors,failure:report.failure},null,2));}
})().catch(()=>process.exitCode=1);
