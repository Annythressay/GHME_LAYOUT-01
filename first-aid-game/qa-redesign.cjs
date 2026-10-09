// Production browser QA for the complete modal redesign.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  const output = path.join(__dirname, 'qa-output', 'redesign');
  fs.mkdirSync(output, { recursive: true });
  await page.clock.install({ time: new Date('2026-10-09T08:00:00Z') });
  await page.clock.pauseAt(new Date('2026-10-09T08:00:00Z'));
  await page.addInitScript(() => {
    window.gameIntervals = new Set();
    const set = window.setInterval, clear = window.clearInterval;
    window.setInterval = (fn, delay, ...args) => { const id = set(fn, delay, ...args); if (delay === 250) window.gameIntervals.add(id); return id; };
    window.clearInterval = id => { window.gameIntervals.delete(id); return clear(id); };
  });
  await page.goto(process.env.GAME_URL || 'http://127.0.0.1:4173/');
  const widget = page.locator('#ghme-first-aid');
  const button = name => widget.getByRole('button', { name, exact: true });
  const dimensions = [1440, 1200, 1024, 768, 430, 375];
  const metrics = {};
  const heights = width => width <= 430 ? 812 : 1000;
  async function settle() { await page.clock.runFor(260); }
  async function geometry() {
    return widget.locator('.decision').evaluate(d => ({
      buttonTop: d.querySelector('.decision-primary').getBoundingClientRect().top - d.getBoundingClientRect().top,
      choices: [...d.querySelectorAll('.answer-option')].map(el => Math.round(el.getBoundingClientRect().height * 100) / 100),
      feedbackHeight: d.querySelector('.feedback')?.getBoundingClientRect().height,
      learningHeight: d.querySelector('.learning-space').getBoundingClientRect().height,
    }));
  }
  async function inspect(screen, screenshots = true) {
    const values = {};
    for (const width of dimensions) {
      await page.setViewportSize({ width, height: heights(width) });
      await page.evaluate(() => document.fonts.ready);
      await widget.locator('img').evaluateAll(images => Promise.all(images.map(i => i.decode())));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'page overflow ' + screen + width);
      const dialog = await widget.locator('dialog[open]').first().evaluate(d => ({
        overflow: d.scrollWidth > d.clientWidth + 1,
        width: Math.round(d.getBoundingClientRect().width),
        height: Math.round(d.getBoundingClientRect().height),
        title: d.querySelector('#' + d.getAttribute('aria-labelledby'))?.textContent,
      }));
      assert.equal(dialog.overflow, false, 'dialog overflow ' + screen + width);
      assert.ok(dialog.title, 'dialog has an accessible title ' + screen);
      if (await widget.locator('.decision').count()) values[width] = await geometry();
      if (screenshots) {
        await widget.locator('dialog[open]').first().evaluate(d => d.scrollTop = 0);
        await page.screenshot({ animations: 'disabled', path: path.join(output, screen + '-' + width + '.png') });
        metrics[width] = { ...metrics[width], [screen]: dialog };
      }
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    return values;
  }
  await page.clock.runFor(5100);
  assert.equal(await widget.locator('dialog[open]').count(), 0, 'only manual launch');
  await widget.locator('.game-trigger').click();
  await settle();
  await inspect('intro');
  assert.equal(await widget.getByRole('timer').count(), 0, 'intro has no live timer');
  await page.clock.fastForward(20000);
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0);
  await button('Để sau').focus();
  await page.keyboard.press('Tab');
  assert.equal(await button('Đóng').evaluate(el => el.getRootNode().activeElement === el), true);
  await page.keyboard.press('Shift+Tab');
  assert.equal(await button('Để sau').evaluate(el => el.getRootNode().activeElement === el), true);
  await page.mouse.click(5, 500);
  assert.equal(await widget.locator('dialog[open]').count(), 1, 'background is inert');
  await button('Để sau').click();
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  assert.equal(await widget.locator('.game-trigger').evaluate(el => el.getRootNode().activeElement === el), true);
  assert.equal(await page.evaluate(() => sessionStorage.getItem('ghmeFirstAidGameDismissed')), 'true');
  await page.reload();
  await page.clock.runFor(3000);
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  await widget.locator('.game-trigger').click();
  await settle();
  await button('Bắt đầu thử thách').focus();
  await page.keyboard.press('Enter');
  await settle();
  assert.equal(await widget.locator('.participant-dialog').count(), 1);
  assert.equal(await widget.getByRole('timer').count(), 0);
  await page.clock.fastForward(20000);
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0, 'form does not start timer');
  for (const width of dimensions) {
    await page.setViewportSize({ width, height: heights(width) });
    assert.equal(await widget.locator('.participant-dialog').evaluate(d => d.scrollWidth > d.clientWidth + 1), false, 'form overflow ' + width);
    await page.screenshot({ animations: 'disabled', path: path.join(output, 'participant-' + width + '.png') });
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await button('Vào thử thách').focus();
  await page.keyboard.press('Tab');
  assert.equal(await button('Đóng form thông tin').evaluate(el => el.getRootNode().activeElement === el), true, 'form focus wraps');
  await page.keyboard.press('Escape');
  assert.equal(await widget.locator('.participant-dialog').count(), 0);
  assert.equal(await widget.locator('dialog[open]').count(), 1);
  assert.equal(await button('Bắt đầu thử thách').evaluate(el => el.getRootNode().activeElement === el), true, 'form restores focus');
  await button('Bắt đầu thử thách').click();
  await settle();
  await button('Vào thử thách').click();
  assert.equal(await widget.locator('.field-error').count(), 2, 'required fields block start');
  assert.equal(await widget.getByRole('timer').count(), 0);
  await widget.locator('#participant-name').fill('Người kiểm thử');
  await widget.locator('#participant-phone').fill('123');
  await widget.locator('#participant-email').fill('invalid-email');
  await button('Vào thử thách').click();
  assert.equal(await widget.locator('.field-error').count(), 2, 'invalid phone and email rejected');
  await widget.locator('#participant-phone').fill('0901234567');
  await widget.locator('#participant-email').fill('');
  await button('Vào thử thách').click();
  assert.equal(await widget.locator('.participant-dialog').count(), 0, 'valid form with optional empty email starts game');
  assert.equal(await widget.getByRole('timer').innerText(), '04:00');
  await settle();
  assert.equal(await button('Xác nhận đáp án').isDisabled(), true);
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 1);
  const selections = [1, 1, 2, 3, 1, 1, 0, 3, 0, 1];
  const correctAnswers = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];
  let maximumMovement = 0;
  for (let i = 0; i < 10; i++) {
    assert.equal(await widget.locator('.answer-option').count(), 4);
    assert.equal(await button('Xác nhận đáp án').isDisabled(), true);
    assert.equal(await widget.locator('.question-heading').evaluate(el => el.getRootNode().activeElement === el), true, 'heading focus ' + i);
    const before = await inspect(i === 0 ? 'quiz' : 'quiz-' + (i + 1), i === 0);
    if (i === 0) {
      await button('Cần một gợi ý?').click();
      assert.equal(await widget.locator('.hint-content').innerText(), 'Bắt đầu bằng việc nhận biết tình trạng của người cần giúp đỡ.');
      const hinted = await inspect('hint');
      for (const width of dimensions) assert.ok(Math.abs(hinted[width].buttonTop - before[width].buttonTop) < 1, 'hint action stays fixed');
      await widget.getByRole('radio').nth(0).focus();
      await page.keyboard.press('ArrowRight');
      assert.equal(await widget.getByRole('radio').nth(1).isChecked(), true);
      assert.equal(await widget.locator('.feedback').count(), 0, 'selection does not reveal answers');
    } else {
      await widget.locator('.answer-option').nth(selections[i]).click();
    }
    const selected = await inspect('selected', false);
    for (const width of dimensions) assert.deepEqual(selected[width].choices, before[width].choices, 'selection height stays fixed');
    await button('Xác nhận đáp án').click();
    await settle();
    const correct = selections[i] === correctAnswers[i];
    assert.equal(await widget.locator('.feedback-correct').count(), correct ? 1 : 0);
    assert.equal(await widget.locator('.answer-option.is-correct').count(), 1);
    assert.equal(await widget.getByRole('radio').nth(0).isDisabled(), true);
    assert.equal(await widget.locator('.feedback-takeaway strong').innerText(), 'Điều cần nhớ');
    const after = await inspect(correct ? 'correct-feedback' : 'incorrect-feedback', i === 0 || i === 1);
    for (const width of dimensions) {
      assert.deepEqual(after[width].choices, before[width].choices, 'confirmation choice height ' + (i + 1) + '/' + width);
      const movement = Math.abs(after[width].buttonTop - before[width].buttonTop);
      maximumMovement = Math.max(maximumMovement, movement);
      assert.ok(movement < 1, 'confirmation action moves ' + movement + 'px on q' + (i + 1) + '/' + width);
    }
    assert.equal(await widget.getByRole('progressbar').getAttribute('aria-valuenow'), String(i + 1));
    if (i === 1) {
      const toSeconds = s => +s.slice(0, 2) * 60 + +s.slice(3);
      const time = toSeconds(await widget.getByRole('timer').innerText());
      await page.clock.runFor(10000);
      assert.equal(toSeconds(await widget.getByRole('timer').innerText()), time - 10);
      await page.keyboard.press('Escape');
      await settle();
      await widget.getByRole('heading', { name: 'Bạn muốn dừng thử thách?' }).waitFor();
      assert.equal(await widget.locator('dialog[open]').count(), 2);
      await page.keyboard.press('Escape');
      assert.equal(await widget.locator('.exit-dialog').count(), 0);
      assert.equal(await page.evaluate(() => window.gameIntervals.size), 1);
    }
    await button(i === 9 ? 'Xem kết quả' : 'Câu tiếp theo').click();
    await settle();
  }
  assert.match(await widget.locator('.result-score').innerText(), /7\s*\/\s*10/);
  assert.equal(await widget.locator('.review-row').count(), 3, 'default only wrong answers');
  assert.equal(await widget.locator('.revisit-list li').count(), 3, 'metadata summary');
  assert.equal(await page.evaluate(() => sessionStorage.getItem('ghmeFirstAidGameCompleted')), 'true');
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0, 'timer cleared on result');
  await inspect('result');
  await widget.locator('summary').first().click();
  assert.equal(await widget.locator('details[open]').count(), 1);
  await inspect('review');
  await button('Xem toàn bộ kết quả').click();
  assert.equal(await widget.locator('.review-row').count(), 10);
  await button('Chỉ xem các câu cần ôn lại').click();
  assert.equal(await widget.locator('.review-row').count(), 3);
  await button('Làm lại thử thách').click();
  await settle();
  assert.equal(await widget.getByRole('timer').count(), 0);
  await button('Bắt đầu thử thách').click();
  await settle();
  assert.equal(await widget.getByRole('timer').innerText(), '04:00');
  assert.equal(await widget.getByRole('progressbar').getAttribute('aria-valuenow'), '0');
  assert.equal(await widget.getByRole('radio', { checked: true }).count(), 0);
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 1, 'one timer on replay');
  await widget.locator('.answer-option').nth(0).click();
  await page.clock.fastForward(240001);
  assert.equal(await widget.locator('.result-hero .section-label').textContent(), 'Hết 4 phút');
  assert.match(await widget.locator('.result-score').innerText(), /0\s*\/\s*10/);
  assert.equal(await widget.locator('.review-row').count(), 10, 'unconfirmed answers do not count');
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0);
  await inspect('timeout', false);
  await widget.getByRole('link', { name: 'Khám phá khóa học sơ cấp cứu' }).click();
  await page.clock.runFor(50);
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'programs');
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  await widget.locator('.game-trigger').click();
  await settle();
  await button('Bắt đầu thử thách').click();
  await settle();
  for (let i = 0; i < 10; i++) {
    await widget.locator('.answer-option').nth(correctAnswers[i]).click();
    await button('Xác nhận đáp án').click();
    await button(i === 9 ? 'Xem kết quả' : 'Câu tiếp theo').click();
    await settle();
  }
  assert.match(await widget.locator('.result-score').innerText(), /10\s*\/\s*10/);
  assert.equal(await widget.locator('.review-row').count(), 0);
  assert.equal(await widget.locator('.review-empty').isVisible(), true);
  await inspect('perfect-result', false);
  await button('Làm lại thử thách').click();
  await settle();
  await button('Bắt đầu thử thách').click();
  await settle();
  // The primary desktop design also fits a 900px-high viewport.
  await page.setViewportSize({ width: 1440, height: 900 });
  assert.equal(await widget.locator('dialog').evaluate(d => d.scrollHeight > d.clientHeight + 1), false, '1440x900 quiz fits');
  await page.setViewportSize({ width: 375, height: 667 });
  assert.equal(await widget.locator('dialog').evaluate(d => d.scrollWidth > d.clientWidth + 1), false);
  await widget.locator('.decision-primary').scrollIntoViewIfNeeded();
  assert.equal(await widget.locator('.close-game').evaluate(el => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight; }), true, 'mobile close stays visible while scrolling');
  await widget.getByRole('button', { name: 'Đóng thử thách' }).click();
  await settle();
  await button('Thoát thử thách').click();
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0);
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await widget.locator('.game-trigger').click();
  assert.equal(await widget.locator('dialog').evaluate(d => getComputedStyle(d).animationName), 'none');
  assert.deepEqual(errors, []);
  const report = { passed: true, viewports: dimensions, fullFlow: true, allQuestionsAtAllWidths: true, maximumActionMovement: maximumMovement, errors, metrics, screenshots: output };
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
