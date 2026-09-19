// Browser QA against the real static GHME website and production widget.
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
  const output = path.join(__dirname, 'qa-output');
  fs.mkdirSync(output, { recursive: true });
  await page.clock.install({ time: new Date('2026-09-19T08:00:00Z') });
  await page.clock.pauseAt(new Date('2026-09-19T08:00:00Z'));
  await page.addInitScript(() => {
    window.gameIntervals = new Set();
    const set = window.setInterval, clear = window.clearInterval;
    window.setInterval = (fn, delay, ...args) => { const id = set(fn, delay, ...args); if (delay === 250) window.gameIntervals.add(id); return id; };
    window.clearInterval = id => { window.gameIntervals.delete(id); return clear(id); };
  });
  await page.goto(process.env.GAME_URL || 'http://127.0.0.1:4173/');
  const widget = page.locator('#ghme-first-aid');
  const button = name => widget.getByRole('button', { name, exact: true });
  await widget.locator('.game-trigger').waitFor({ state: 'attached' });
  await page.clock.runFor(3000);
  await widget.locator('.game-trigger').waitFor();
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  await page.clock.runFor(2100);
  assert.equal(await widget.locator('dialog[open]').count(), 0, 'invitation waits for user interaction');
  await widget.locator('.game-trigger').click();
  await widget.locator('dialog[open]').waitFor();
  const entrySizes = [];
  const dimensions = [1440, 1200, 1024, 768, 430, 375];
  async function inspect(screen) {
    for (const width of dimensions) {
      await page.setViewportSize({ width, height: width <= 430 ? 812 : 1000 });
      await page.evaluate(() => document.fonts.ready);
      await widget.locator('img').evaluateAll(images => Promise.all(images.map(i => i.decode())));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'page overflow ' + screen + width);
      assert.equal(await widget.locator('dialog[open]').first().evaluate(d => d.scrollWidth > d.clientWidth + 1), false, 'dialog overflow ' + screen + width);
      if (screen === 'entry') {
        const size = await widget.locator('.entry-dialog').evaluate(d => ({
          width: Math.round(d.getBoundingClientRect().width),
          height: Math.round(d.getBoundingClientRect().height),
          scroll: d.scrollHeight > d.clientHeight + 1,
          closeSize: d.querySelector('.close-game').getBoundingClientRect().width,
        }));
        entrySizes.push({ viewport: width, ...size });
        assert.equal(size.scroll, false, 'entry fits without scrolling at ' + width);
        assert.equal(size.closeSize, 44);
        assert.equal(await page.evaluate(() => window.gameIntervals.size), 0);
      }
      await page.screenshot({ animations: 'disabled', path: path.join(output, screen + '-' + width + '.png') });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  await inspect('entry');
  await button('Để sau').focus();
  await page.keyboard.press('Tab');
  assert.equal(await button('Đóng').evaluate(el => el.getRootNode().activeElement === el), true, 'focus wraps inside dialog');
  await page.keyboard.press('Shift+Tab');
  assert.equal(await button('Để sau').evaluate(el => el.getRootNode().activeElement === el), true, 'reverse focus wraps');
  await page.mouse.click(5, 500);
  assert.equal(await widget.locator('dialog[open]').count(), 1, 'backdrop cannot click through');
  await page.setViewportSize({ width: 375, height: 667 });
  assert.equal(await widget.locator('dialog').evaluate(d => d.getBoundingClientRect().bottom <= innerHeight), true);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.clock.fastForward(20000);
  assert.equal(await widget.getByRole('timer').count(), 0);
  assert.equal(await widget.locator('.micro-duration > span').innerText(), '04:00');
  await button('Để sau').click();
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  assert.equal(await widget.locator('.game-trigger').evaluate(el => el.getRootNode().activeElement === el), true);
  await page.reload();
  await page.clock.runFor(3000);
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  await widget.locator('.game-trigger').click();
  await button('Thử 4 phút').focus();
  await page.keyboard.press('Enter');
  assert.equal(await widget.getByRole('timer').innerText(), '04:00');
  assert.equal(await button('Xác nhận đáp án').isDisabled(), true);
  await inspect('quiz');
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 1, 'one game timer');
  await button('Gợi ý').click();
  assert.equal(await widget.getByText('Một gợi ý cho bạn').isVisible(), true);
  await widget.getByRole('radio').nth(0).focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await widget.getByRole('radio').nth(1).isChecked(), true);
  assert.equal(await widget.getByText('Chưa chính xác', { exact: true }).count(), 0);
  await button('Xác nhận đáp án').click();
  assert.equal(await widget.getByText('Chưa chính xác', { exact: true }).isVisible(), true);
  assert.equal(await widget.getByRole('radio').nth(0).isDisabled(), true);
  await inspect('feedback');
  await button('Tiếp theo').click();
  assert.equal(await widget.getByRole('progressbar').getAttribute('aria-valuenow'), '1');
  assert.equal(await button('Xác nhận đáp án').isDisabled(), true);
  await page.clock.runFor(10000);
  assert.equal(await widget.getByRole('timer').innerText(), '03:50');
  await button('Đóng thử thách').click();
  await widget.getByRole('heading', { name: 'Bạn muốn dừng thử thách?' }).waitFor();
  await page.keyboard.press('Escape');
  assert.equal(await widget.locator('.exit-dialog').count(), 0);
  const correct = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1];
  for (let i = 1; i < 10; i++) {
    await widget.locator('.answer-option').nth(correct[i]).click();
    await button('Xác nhận đáp án').click();
    await button(i === 9 ? 'Xem kết quả' : 'Tiếp theo').click();
  }
  assert.match(await widget.locator('main').innerText(), /9\s*\/\s*10/);
  assert.equal(await widget.locator('details').count(), 10);
  assert.equal(await page.evaluate(() => sessionStorage.getItem('ghmeFirstAidGameCompleted')), 'true');
  await inspect('result');
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0, 'timer cleared after completion');
  await button('Làm lại thử thách').click();
  await inspect('intro');
  await page.clock.fastForward(20000);
  assert.equal(await widget.getByRole('timer').count(), 0);
  await button('Sẵn sàng, bắt đầu').click();
  assert.equal(await widget.getByRole('timer').innerText(), '04:00');
  await widget.locator('.answer-option').nth(0).click();
  await page.clock.fastForward(240001);
  await widget.getByRole('heading', { name: 'Hết 4 phút' }).waitFor();
  assert.match(await widget.locator('main').innerText(), /0\s*\/\s*10/);
  await page.clock.fastForward(10000);
  assert.equal(await widget.getByRole('timer').innerText(), '00:00');
  await widget.getByRole('link', { name: 'Khám phá khóa học sơ cấp cứu' }).click();
  await page.clock.runFor(50);
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  assert.equal(await page.evaluate(() => document.activeElement.id), 'programs');
  assert.equal(await page.evaluate(() => document.body.style.overflow), '');
  await widget.locator('.game-trigger').click();
  await button('Thử 4 phút').click();
  await page.keyboard.press('Escape');
  await button('Thoát thử thách').click();
  assert.equal(await page.evaluate(() => window.gameIntervals.size), 0, 'timer cleared on exit');
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  await page.reload();
  await page.clock.runFor(3000);
  assert.equal(await widget.locator('dialog[open]').count(), 0);
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ passed: true, viewports: dimensions, entrySizes, screens: ['entry','intro','quiz','feedback','result'], errors, screenshots: output }, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
