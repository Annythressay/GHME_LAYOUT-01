// Verify both languages against the rebuilt, integrated Shadow DOM game.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const output=path.resolve(__dirname,'../first-aid-game/qa-output/i18n');
const widths=[1440,1200,1024,768,430,375], correct=[0,1,2,3,0,1,2,3,0,1];
const report={flows:[],errors:[],timerDuration:240};
const url=process.env.GHME_URL||'http://127.0.0.1:4173/';
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 try {
  for(const language of ['vi','en'])for(const width of widths) {
   const page=await browser.newPage({viewport:{width,height:width<576?812:1000}});
   page.on('pageerror',e=>report.errors.push(e.message));
   page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text());});
   await page.clock.install({time:new Date('2026-10-10T00:00:00Z')});
   await page.clock.pauseAt(new Date('2026-10-10T00:00:00Z'));
   await page.addInitScript(language=>{
    localStorage.setItem('ghmeLanguage',language);
    window.qaIntervals=new Set();
    const set=window.setInterval,clear=window.clearInterval;
    window.setInterval=(fn,delay,...args)=>{const id=set(fn,delay,...args);if(delay===250)window.qaIntervals.add(id);return id;};
    window.clearInterval=id=>{window.qaIntervals.delete(id);return clear(id);};
   },language);
   await page.goto(url);
   const game=page.locator('#ghme-first-aid');
   async function inspect(screen,shot=true) {
    assert.equal(await game.locator('dialog[open]').first().evaluate(d=>d.scrollWidth>d.clientWidth+1),false,`${language}/${width}/${screen} overflow`);
    if(language==='en')assert.equal(await game.evaluate(host=>/[À-ỹ]/.test(host.shadowRoot.textContent.replace(host.shadowRoot.querySelector('style').textContent,''))),false,'No Vietnamese copy in English game');
    if(shot)await page.screenshot({animations:'disabled',path:path.join(output,`${language}-game-${screen}-${width}.png`)});
   }
   await page.clock.runFor(5100);
   await game.locator('.game-trigger').click();
   await page.clock.runFor(260);
   await inspect('intro');
   await game.locator('.opening-actions .button-primary').click();
   await page.clock.runFor(260);
   await inspect('participant');
   await game.locator('.participant-form [type=submit]').click();
   assert.equal(await game.locator('.field-error').count(),2);
   assert.equal(await page.evaluate(()=>window.qaIntervals.size),0,'Form has no timer');
   await game.locator('#participant-name').fill('QA Participant');
   await game.locator('#participant-phone').fill('0908123456');
   await game.locator('#participant-email').fill('invalid');
   await game.locator('.participant-form [type=submit]').click();
   assert.equal(await game.locator('.field-error').count(),1);
   await game.locator('#participant-email').fill('');
   await game.locator('.participant-form [type=submit]').click();
   await page.clock.runFor(260);
   assert.equal(await game.getByRole('timer').innerText(),'04:00');
   assert.equal(await page.evaluate(()=>window.qaIntervals.size),1);
   await inspect('quiz');
   await game.locator('.hint-toggle').click();
   assert.ok((await game.locator('#question-hint').innerText()).length>15);
   await inspect('hint');
   for(let index=0;index<10;index++) {
    const selected=index<3?(correct[index]+1)%4:correct[index];
    await game.locator('.answer-option').nth(selected).click();
    const geometry=()=>game.locator('.decision-primary').evaluate(button=>button.getBoundingClientRect().top-button.closest('.decision').getBoundingClientRect().top);
    const before=await geometry();
    await game.locator('.decision-primary').click();
    const after=await geometry();
    assert.ok(Math.abs(before-after)<2,'Feedback does not move primary action');
    assert.equal(await game.locator('.feedback').count(),1);
    assert.equal(await game.locator('.answer-option.is-correct').count(),1);
    await inspect(index===0?'feedback':'question-'+index,index===0);
    await game.locator('.decision-primary').click();
    await page.clock.runFor(260);
   }
   assert.match(await game.locator('.result-score').innerText(),/7\s*\/\s*10/);
   assert.equal(await page.evaluate(()=>window.qaIntervals.size),0,'Results clear the timer');
   await inspect('result');
   assert.equal(await game.locator('.review-row').count(),3);
   await game.locator('.review-toggle').click();
   assert.equal(await game.locator('.review-row').count(),10);
   await game.locator('.review-row details').first().locator('summary').click();
   await inspect('review',false);
   await game.locator('.result-next-actions button').click();
   await page.clock.runFor(260);
   await game.locator('.opening-actions .button-primary').click();
   assert.equal(await game.locator('.participant-dialog').count(),0,'Replay reuses in-memory participant');
   await page.clock.runFor(260);
   assert.equal(await game.getByRole('timer').innerText(),'04:00');
   await game.locator('.training-header .close-game').click();
   await inspect('exit');
   await game.locator('.exit-actions .button-primary').click();
   await page.clock.fastForward(240000);
   assert.equal(await game.locator('.result-score').count(),1,'Timeout leads to results');
   assert.equal(await page.evaluate(()=>window.qaIntervals.size),0,'Timeout clears timer');
   await game.locator('.result-next-actions a').click();
   assert.equal(await game.locator('dialog[open]').count(),0);
   assert.equal(await page.evaluate(()=>sessionStorage.getItem('ghmeFirstAidGameCompleted')),'true');
   report.flows.push({language,width,score:'7/10',questions:10,status:'PASS'});
   await page.close();
  }
  assert.deepEqual(report.errors,[]);report.status='PASS';
 }catch(error){report.status='FAIL';report.failure=error.stack;throw error;}
 finally{fs.writeFileSync(path.join(output,'game-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();}
})().catch(()=>process.exitCode=1);
