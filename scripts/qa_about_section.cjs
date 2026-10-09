// Local visual QA. Set PLAYWRIGHT_MODULE to the installed Playwright directory.
// Run before editing with ABOUT_QA_PHASE=before, then rerun with phase=after.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const phase = process.env.ABOUT_QA_PHASE || 'after';
const output = process.env.ABOUT_QA_OUTPUT || path.resolve(__dirname, '../docs/design-reference/about-us');
const url = process.env.ABOUT_QA_URL || 'http://127.0.0.1:4173/';
fs.mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const results = [], errors = [], failedAssets = [];
  try {
    const page = await browser.newPage();
    // Optional read-only snapshot routes allow recapturing the pre-edit layout.
    if (phase === 'before' && process.env.ABOUT_QA_BASELINE) {
      await page.route('**/*', route => {
        const pathname = new URL(route.request().url()).pathname;
        const file = pathname === '/' || pathname === '/index.html' ? 'index.html.before'
          : pathname === '/assets/css/styles.css' ? 'assets_css_styles.css.before' : null;
        return file ? route.fulfill({ body: fs.readFileSync(path.join(process.env.ABOUT_QA_BASELINE, file)), contentType: file.endsWith('html.before') ? 'text/html' : 'text/css' }) : route.continue();
      });
    }
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('requestfailed', r => failedAssets.push({ url: r.url(), reason: r.failure()?.errorText }));
    page.on('response', r => { if (r.status() >= 400) failedAssets.push({ url: r.url(), status: r.status() }); });
    for (const width of [1440, 1024, 768, 390]) {
      await page.setViewportSize({ width, height: width < 576 ? 844 : 1000 });
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const section = page.locator('section.activities.decorated');
      await section.scrollIntoViewIfNeeded();
      await section.locator('img').evaluateAll(imgs => Promise.all(imgs.map(i => i.decode())));
      const result = await section.evaluate(s => {
        const box = e => { const r = e.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; };
        return {
          viewport: innerWidth,
          pageOverflow: document.documentElement.scrollWidth > innerWidth,
          sectionOverflow: s.scrollWidth > s.clientWidth,
          section: box(s),
          brokenImages: [...s.querySelectorAll('img')].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
          images: [...s.querySelectorAll('img')].map(i => {
            const style = getComputedStyle(i), rendered = box(i);
            return { src: i.getAttribute('src'), natural: [i.naturalWidth, i.naturalHeight], rendered,
              content: [rendered.width - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth), rendered.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth)],
              objectFit: style.objectFit };
          }),
          intro: s.querySelector('.ghme-about__intro') && box(s.querySelector('.ghme-about__intro')),
          visual: s.querySelector('.ghme-about__visual') && box(s.querySelector('.ghme-about__visual')),
          ctas: [...s.querySelectorAll('a')].map(a => ({ text: a.innerText, href: a.getAttribute('href'), box: box(a) })),
          sectionOrder: [...document.querySelectorAll('main > section')].map(e => e.id),
          followsBanner: s.previousElementSibling?.classList.contains('hero'),
          fontsLoaded: document.fonts.check('600 16px "Be Vietnam Pro"'),
          iconFontLoaded: document.fonts.check('900 16px "Font Awesome 7 Free"'),
        };
      });
      assert.equal(result.pageOverflow, false, `Page overflow at ${width}`);
      assert.equal(result.brokenImages.length, 0);
      if (phase === 'after') {
        assert.equal(result.sectionOverflow, false, `Section overflow at ${width}`);
        assert.equal(await section.locator('.ghme-about__services > li').count(), 3);
        assert.equal(result.ctas.length, 2);
        assert.equal(await section.locator('.activity-grid').count(), 0);
        assert.equal(result.ctas[0].href, 'about.html');
        assert.equal(result.ctas[1].href, '#programs');
        assert.ok(result.ctas.every(a => a.box.height >= 44));
        for (const im of result.images) {
          assert.ok(Math.abs(im.content[0] / im.content[1] - im.natural[0] / im.natural[1]) < .015, 'Preserve full photo aspect ratio');
          assert.ok(im.rendered.width <= im.natural[0], 'Do not upscale source photographs');
        }
        assert.equal(result.followsBanner, true, 'Selected section immediately after Hero');
        if (width >= 1024) assert.ok(result.intro.x > result.visual.x + result.visual.width);
        else assert.ok(result.visual.y > result.intro.y + result.intro.height);
      }
      await section.screenshot({ path: path.join(output, `${phase}-${width}.png`), animations: 'disabled', style: '.skip-link, #ghme-first-aid { visibility: hidden !important; }' });
      if ([1440, 390].includes(width)) {
        await section.evaluate(s => window.scrollTo({ top: s.offsetTop, behavior: 'instant' }));
        await page.screenshot({ path: path.join(output, `${phase}-${width}-viewport.png`), animations: 'disabled' });
      }
      if (phase === 'after') {
        await section.locator('a[href="#programs"]').click();
        await page.waitForFunction(() => location.hash === '#programs' && Math.abs(document.getElementById('programs').getBoundingClientRect().top - 20) < 3);
        await section.locator('a[href="about.html"]').click();
        assert.equal(new URL(page.url()).pathname, '/about.html');
        assert.ok(await page.locator('h1').isVisible());
      }
      results.push(result);
    }
    if (phase === 'after') {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(url + '#activities', { waitUntil: 'networkidle' });
      assert.equal(await page.locator('.ghme-about').evaluate(s => getComputedStyle(s.querySelector('.ghme-about__primary')).transitionDuration), '0s');
      await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' });
      await page.evaluate(() => document.querySelector('.ghme-about__primary').focus());
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement.getAttribute('href')), '#programs');
      await page.keyboard.press('Enter');
      await page.waitForFunction(() => location.hash === '#programs');
      // The editorial section remains readable without JavaScript.
      const noJS = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
      await noJS.goto(url + '#activities');
      assert.equal(await noJS.locator('.ghme-about__services > li').count(), 3);
      assert.equal(await noJS.locator('.ghme-about a').count(), 2);
      await noJS.close();
    }
    const report = { phase, browser: 'Microsoft Edge / Playwright', results, errors: [...new Set(errors)], failedAssets };
    fs.writeFileSync(path.join(output, `${phase}-qa.json`), JSON.stringify(report, null, 2) + '\n');
    assert.equal(errors.length, 0, 'Console/runtime errors');
    assert.equal(failedAssets.length, 0, 'Failed assets');
    console.log(JSON.stringify({ phase, widths: results.map(r => r.viewport), consoleErrors: errors, failedAssets }, null, 2));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
