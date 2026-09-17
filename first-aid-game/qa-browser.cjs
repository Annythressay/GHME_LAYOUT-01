// Local browser QA. Set PLAYWRIGHT_MODULE if Playwright is not installed in this project.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const os = require('node:os');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
  await page.clock.install({ time: new Date('2026-09-18T08:00:00Z') });
  await page.clock.pauseAt(new Date('2026-09-18T08:00:00Z'));
  await page.goto(process.env.GAME_URL || 'http://127.0.0.1:5173/');
  await page.evaluate(() => document.fonts.ready);
  await page.locator('aside img').evaluate(i => i.decode());
  assert.equal(await page.getByRole('timer').innerText(), '04:00');
  assert.equal(await page.getByRole('button', { name: 'Xác nhận đáp án' }).isDisabled(), true);
  const screenshots = [];
  for (const width of [1440, 1200, 1024, 768, 430, 375]) {
    await page.setViewportSize({ width, height: 1000 });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `overflow ${width}`);
    assert.equal(await page.locator('img').evaluateAll(images => images.some(i => !i.complete || !i.naturalWidth)), false);
    if ([1440, 375].includes(width)) {
      const file = path.join(os.tmpdir(), `ghme-game-${width}.png`);
      await page.screenshot({ path: file, fullPage: true });
      screenshots.push(file);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole('button', { name: 'Gợi ý', exact: true }).click();
  assert.equal(await page.getByText('Một gợi ý cho bạn').isVisible(), true);
  // Real keyboard navigation through native radio inputs.
  await page.getByRole('radio').nth(0).focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getByRole('radio').nth(1).isChecked(), true);
  assert.equal(await page.getByText('Chưa chính xác', { exact: true }).count(), 0);
  await page.getByRole('button', { name: 'Xác nhận đáp án' }).click();
  assert.equal(await page.getByText('Chưa chính xác', { exact: true }).isVisible(), true);
  assert.equal(await page.getByRole('radio').nth(0).isDisabled(), true);
  await page.screenshot({ path: path.join(os.tmpdir(), 'ghme-game-feedback.png'), fullPage: true });
  await page.getByRole('button', { name: 'Tiếp theo', exact: true }).click();
  assert.equal(await page.getByRole('progressbar').getAttribute('aria-valuenow'), '2');
  assert.equal(await page.getByRole('button', { name: 'Xác nhận đáp án' }).isDisabled(), true);
  // Finish all questions; one wrong answer gives 9/10.
  const correct = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];
  for (let i = 1; i < 10; i++) {
    await page.locator('.answer-option').nth(correct[i]).click();
    assert.equal(await page.getByRole('radio').nth(correct[i]).isChecked(), true);
    await page.getByRole('button', { name: 'Xác nhận đáp án' }).click();
    assert.equal(await page.getByText('Chính xác!', { exact: true }).isVisible(), true);
    await page.getByRole('button', { name: i === 9 ? 'Xem kết quả' : 'Tiếp theo', exact: true }).click();
  }
  assert.equal(await page.getByRole('heading', { name: 'Bạn đã hoàn thành thử thách!' }).isVisible(), true);
  assert.equal(await page.locator('details').count(), 10);
  assert.match(await page.locator('main').innerText(), /9\s*\/\s*10/);
  await page.screenshot({ path: path.join(os.tmpdir(), 'ghme-game-results.png'), fullPage: true });
  await page.getByRole('button', { name: 'Thử lại từ đầu' }).click();
  assert.equal(await page.getByRole('timer').innerText(), '04:00');
  assert.equal(await page.getByRole('progressbar').getAttribute('aria-valuenow'), '1');
  await page.locator('.answer-option').nth(0).click();
  await page.clock.fastForward(240_001);
  assert.equal(await page.getByRole('heading', { name: '4 phút đã kết thúc' }).isVisible(), true);
  assert.match(await page.locator('main').innerText(), /0\s*\/\s*10/);
  const frozenTimer = await page.getByRole('timer').innerText();
  await page.clock.fastForward(10_000);
  assert.equal(await page.getByRole('timer').innerText(), frozenTimer);
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ passed: true, viewports: [1440, 1200, 1024, 768, 430, 375], scenarios: ['initial disabled', 'hint', 'keyboard selection', 'deferred feedback', 'answer lock', 'all 10 questions', 'score', 'review', 'restart', 'deadline timeout', 'unconfirmed excluded', 'timer stops'], screenshots, errors }, null, 2));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
