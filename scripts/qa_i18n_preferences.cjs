const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const result={};
 try {
  const page=await browser.newPage();
  await page.addInitScript(()=>{
   localStorage.setItem('ghmeLanguage','en');
   window.qaFirstPaint=[];
   function sample(){
    if(document.body && getComputedStyle(document.body).visibility==='visible' && document.querySelector('#hero-title'))window.qaFirstPaint.push({lang:document.documentElement.lang,text:document.querySelector('#hero-title').textContent});
    if(window.qaFirstPaint.length<10)requestAnimationFrame(sample);
   }requestAnimationFrame(sample);
  });
  await page.goto('http://127.0.0.1:4173/');
  await page.waitForFunction(()=>window.qaFirstPaint.length>=2);
  const frames=await page.evaluate(()=>window.qaFirstPaint);
  assert.ok(frames.every(frame=>frame.lang==='en' && frame.text.includes('CONSULTING')),'Saved EN has no visible Vietnamese frame');
  result.firstVisibleEnglishFrames=frames.length;
  await page.locator('[data-language=vi]').focus();
  await page.keyboard.press('Enter');
  assert.equal(await page.locator('html').getAttribute('lang'),'vi');
  assert.equal(await page.locator('[data-language=vi]').evaluate(el=>el===document.activeElement),true);
  assert.ok((await page.locator('.consent').innerText()).includes('chính sách riêng tư của GHME.'));
  await page.locator('[data-language=en]').focus();
  await page.keyboard.press('Space');
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  assert.ok((await page.locator('.consent').innerText()).includes("GHME's privacy policy."));
  result.keyboardSwitch='PASS';
  // A genuine navigation via the existing about link retains the preference.
  await page.locator('.header-nav-link[href^="about"]').click();
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  await page.goto('http://127.0.0.1:4173/courses/program-7.html');
  await page.waitForURL('**/index.html#programs');
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  result.navigationAndLegacyRedirect='PASS';
  // Test an unknown key with an explicit readable fallback.
  assert.equal(await page.evaluate(()=>GHMEI18n.t('missing-test-key',{fallback:'Fallback'})),'Fallback');
  result.missingKeyFallback='PASS';
  const blocked=await browser.newPage();
  const errors=[];blocked.on('pageerror',error=>errors.push(error.message));
  await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError');}});});
  await blocked.goto('http://127.0.0.1:4173/');
  assert.equal(await blocked.locator('html').getAttribute('lang'),'vi');
  await blocked.locator('[data-language=en]').click();
  assert.equal(await blocked.locator('html').getAttribute('lang'),'en');
  await blocked.locator('#ghme-first-aid .game-trigger').click();
  assert.match(await blocked.locator('#ghme-first-aid .opening-actions .button-primary').innerText(),/Start/);
  await blocked.locator('#ghme-first-aid .opening-actions .button-primary').click();
  await blocked.locator('#ghme-first-aid .participant-form [type=submit]').click();
  assert.equal(await blocked.locator('#ghme-first-aid .field-error').count(),2);
  assert.match(await blocked.locator('#participant-name-error').innerText(),/Please enter/);
  await blocked.evaluate(()=>GHMEI18n.setLanguage('vi'));
  assert.match(await blocked.locator('#participant-name-error').innerText(),/Vui lòng/);
  await blocked.evaluate(()=>GHMEI18n.setLanguage('en'));
  assert.match(await blocked.locator('#participant-name-error').innerText(),/Please enter/);
  result.liveParticipantValidation='PASS';
  assert.deepEqual(errors,[]);
  result.storageBlockedFallback='PASS';
  result.status='PASS';
 }finally{fs.writeFileSync(path.resolve(__dirname,'../first-aid-game/qa-output/i18n/preferences-report.json'),JSON.stringify(result,null,2));console.log(result);await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1});
