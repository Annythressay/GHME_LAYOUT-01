const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  for (const width of [1440, 1200, 1024, 768, 430, 375]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(process.env.GAME_URL || 'http://127.0.0.1:4173/');
    const trigger = page.locator('.game-trigger');
    await trigger.waitFor({ state: 'attached' });
    const result = await trigger.evaluate(el => {
      const animations = el.getAnimations({ subtree: true });
      animations.forEach(a => a.pause());
      const box = () => { const r = el.getBoundingClientRect(); return [r.x, r.y, r.width, r.height]; };
      animations.forEach(a => a.currentTime = 3000);
      const baseline = box();
      let bounded = true;
      let contained = true;
      for (const time of [0, 2700, 3800, 4650, 5200, 18800, 19800, 22000, 60000]) {
        animations.forEach(a => a.currentTime = time);
        const r = el.getBoundingClientRect();
        bounded &&= r.left >= 0 && r.right <= innerWidth && r.bottom <= innerHeight + 10;
        const text = el.lastElementChild.getBoundingClientRect();
        for (const part of el.querySelectorAll('.signal-waves i, .game-trigger-icon, .signal-glow')) {
          const b = part.getBoundingClientRect();
          contained &&= b.left >= r.left && b.right < text.left && b.top >= r.top && b.bottom <= r.bottom;
        }
      }
      const loops = animations.filter(a => a.effect.getTiming().iterations === Infinity);
      const rest = box();
      const waves = animations.filter(a => a.animationName === 'signal-wave');
      const delays = waves.map(a => a.effect.getTiming().delay);
      animations.forEach(a => a.currentTime = 6000);
      const resting = [...el.querySelectorAll('.signal-waves i')].every(w => getComputedStyle(w).opacity === '0');
      animations.forEach(a => a.currentTime = 4250);
      return { count: animations.length, loops: loops.length, delays, resting, contained, baseline, rest, bounded, pulse: getComputedStyle(el).getPropertyValue('--trigger-pulse').trim(), overflow: document.documentElement.scrollWidth > innerWidth };
    });
    assert.equal(result.count, 11);
    assert.equal(result.loops, 7);
    assert.deepEqual(result.delays, [3750, 3900, 4050, 3750, 3900, 4050]);
    assert.equal(result.resting, true);
    assert.equal(result.contained, true, 'signal stays inside pill and clear of text');
    assert.deepEqual(result.baseline, result.rest);
    assert.equal(result.bounded, true);
    assert.equal(result.overflow, false);
    assert.equal(result.pulse, width <= 767 ? '1.015' : '1.022');
    await trigger.screenshot({ path: `first-aid-game/qa-output/signal-${width}.png` });
    await trigger.hover();
    assert.equal(await trigger.evaluate(el => el.getAnimations({ subtree: true }).filter(a => a.animationName).length), 7);
    await page.mouse.move(0, 0);
    await trigger.focus();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Shift+Tab');
    assert.equal(await trigger.evaluate(el => el.matches(':focus-visible')), true);
    await page.keyboard.press('Enter');
    await page.locator('dialog[open]').waitFor();
    await page.getByRole('button', { name: 'Để sau', exact: true }).click();
    assert.equal(await trigger.evaluate(el => el.getRootNode().activeElement === el), true);
    await page.screenshot({ path: `first-aid-game/qa-output/trigger-${width}.png` });
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  const trigger = page.locator('.game-trigger');
  await trigger.waitFor();
  await trigger.hover();
  assert.equal(await trigger.evaluate(el => getComputedStyle(el).transform), 'none');
  assert.equal(await trigger.evaluate(el => el.getAnimations({ subtree: true }).length), 0);
  await trigger.click();
  await page.locator('dialog[open]').waitFor();
  assert.deepEqual(errors, []);
  console.log('PASS: six widths, staggered signal and rest, waves inside pill and clear of text, no overflow, keyboard, open/close, reduced motion, no console errors.');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
