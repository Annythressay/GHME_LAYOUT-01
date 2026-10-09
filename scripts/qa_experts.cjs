// Browser QA for the GHME expert directory and conditional pagination.
// Set PLAYWRIGHT_MODULE to a bundled Playwright directory if needed.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const sourceData = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/experts.json'), 'utf8'));
const instructors = sourceData.profiles.filter(p => p.category.includes('instructor'));
const output = process.env.EXPERTS_QA_OUTPUT || path.join(os.tmpdir(), 'ghme-experts-directory-qa');
const url = process.env.EXPERTS_URL || 'http://127.0.0.1:4173/';
fs.mkdirSync(output, { recursive: true });
const shots = { animations: 'disabled', style: '.skip-link, #ghme-first-aid { visibility: hidden !important; }' };

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [], failedAssets = [], results = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('response', r => { if (r.status() >= 400) failedAssets.push(r.url()); });
    page.on('requestfailed', r => failedAssets.push(r.url()));
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator('.experts');
    const grid = section.locator('#experts-instructor-grid');
    const tabs = section.getByRole('tab');
    const search = section.locator('#experts-search');
    const filter = section.locator('#experts-specialty');
    const pagination = section.locator('.experts__pagination');
    const dialog = section.locator('#expert-dialog');
    const visibleCount = () => grid.locator('.experts__card:visible').count();
    assert.equal(await tabs.count(), 2);
    for (const card of await section.locator('.experts__card').all()) {
      const id = await card.getAttribute('data-profile');
      const featured = sourceData.profiles.find(p => p.id === id).category.includes('medical-advisor');
      assert.equal(await card.evaluate(c => c.classList.contains('experts__card--featured')), featured);
      assert.equal(await card.locator('.experts__advisor-tag').count(), Number(featured));
      assert.equal(await card.evaluate(c => getComputedStyle(c).borderTopColor), featured ? 'rgb(229, 138, 75)' : 'rgb(220, 230, 241)');
      assert.equal(await card.locator('img').getAttribute('alt'), `Chân dung ${await card.getAttribute('data-name')}`);
      assert.equal(await card.locator('button[aria-label][aria-haspopup="dialog"][aria-controls="expert-dialog"]').count(), 2);
    }
    assert.equal(await visibleCount(), 8);
    assert.equal(await pagination.isVisible(), true, '12 profiles span pages of eight and four');
    assert.equal(await pagination.getByRole('button', { name: '‹ Trước', exact: true }).isDisabled(), true);
    assert.deepEqual(await grid.locator('.experts__card:visible').evaluateAll(cs => cs.map(c => c.dataset.profile)), instructors.slice(0, 8).map(p => p.id));
    await pagination.getByRole('button', { name: 'Trang 2', exact: true }).click();
    assert.equal(await visibleCount(), 4);
    assert.deepEqual(await grid.locator('.experts__card:visible').evaluateAll(cs => cs.map(c => c.dataset.profile)), instructors.slice(8, 12).map(p => p.id));
    assert.equal(await pagination.getByRole('button', { name: 'Sau ›', exact: true }).isDisabled(), true);
    assert.ok((await section.locator('#experts-count').innerText()).includes('9–12 / 12'));
    await section.locator('img:visible').evaluateAll(imgs => Promise.all(imgs.map(i => i.decode())));
    await section.screenshot({ ...shots, path: path.join(output, 'directory-page-2-1440.png') });
    await pagination.getByRole('button', { name: 'Trang 1', exact: true }).click();
    for (const width of [1440, 1200, 1024, 768, 430, 375]) {
      const pageSize = width >= 1200 ? 8 : width >= 1024 ? 6 : width >= 768 ? 4 : 2;
      await page.setViewportSize({ width, height: width < 576 ? 844 : 1000 });
      await tabs.nth(0).click();
      await pagination.getByRole('button', { name: 'Trang 1', exact: true }).click();
      await section.locator('img:visible').evaluateAll(imgs => Promise.all(imgs.map(i => i.decode())));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'page overflow at ' + width);
      assert.equal(await section.evaluate(s => s.scrollWidth > s.clientWidth), false, 'section overflow at ' + width);
      assert.deepEqual(await section.locator('img:visible').evaluateAll(imgs => imgs.filter(i => !i.complete || !i.naturalWidth).map(i => i.src)), []);
      assert.deepEqual(await section.locator('img:visible').evaluateAll(imgs => imgs.filter(i => i.clientWidth > i.naturalWidth || i.clientHeight > i.naturalHeight).map(i => i.src)), []);
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      const layout = await grid.locator('.experts__card:visible').evaluateAll(cards => {
        const rects = cards.map(c => c.getBoundingClientRect());
        return { columns: new Set(rects.map(r => Math.round(r.x))).size, rows: new Set(rects.map(r => Math.round(r.y))).size, overflow: cards.filter(c => c.scrollWidth > c.clientWidth + 1).length };
      });
      assert.equal(layout.columns, width >= 1200 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1);
      assert.equal(await visibleCount(), pageSize);
      assert.equal(layout.rows, Math.ceil(pageSize / layout.columns));
      assert.equal(layout.overflow, 0);
      for (const pageNumber of [1, 2]) {
        await pagination.getByRole('button', { name: `Trang ${pageNumber}`, exact: true }).click();
        await page.mouse.move(0, 0);
        await page.waitForTimeout(250);
        const geometry = await grid.locator('.experts__card:visible').evaluateAll(cards => {
          const rows = new Map();
          const heights = cards.map(card => {
            const rect = card.getBoundingClientRect();
            const key = Math.round(rect.y);
            const baseline = card.querySelector('.experts__card-actions').getBoundingClientRect().bottom;
            rows.set(key, [...(rows.get(key) || []), baseline]);
            const image = card.querySelector('img');
            const photo = card.querySelector('.experts__photo');
            const style = getComputedStyle(image);
            return { height: rect.height, imageHeight: photo.clientHeight, fit: style.objectFit, position: style.objectPosition,
              overflow: card.scrollWidth > card.clientWidth + 1,
              croppedName: card.querySelector('h4').clientHeight > parseFloat(getComputedStyle(card.querySelector('h4')).lineHeight) * 2 + 1 };
          });
          return { heights, aligned: [...rows.values()].every(values => Math.max(...values) - Math.min(...values) < 1) };
        });
        assert.ok(Math.max(...geometry.heights.map(c => c.height)) - Math.min(...geometry.heights.map(c => c.height)) < 1, `equal card heights ${width}, page ${pageNumber}`);
        assert.equal(geometry.aligned, true, 'actions share a baseline per row');
        for (const card of geometry.heights) {
          assert.equal(card.fit, 'cover');
          assert.equal(card.position, '50% 0%');
          assert.equal(card.overflow, false);
          assert.equal(card.croppedName, false);
          assert.ok(card.imageHeight / card.height >= .44 && card.imageHeight / card.height <= .51, 'portrait ratio');
        }
        await section.locator('img:visible').evaluateAll(imgs => Promise.all(imgs.map(i => i.decode())));
        await section.screenshot({ ...shots, path: path.join(output, `cards-${width}-page-${pageNumber}.png`) });
      }
      const seen = [];
      for (let number = 1; number <= Math.ceil(instructors.length / pageSize); number++) {
        await pagination.getByRole('button', { name: `Trang ${number}`, exact: true }).click();
        seen.push(...await grid.locator('.experts__card:visible').evaluateAll(cards => cards.map(c => c.dataset.profile)));
      }
      assert.deepEqual(seen, instructors.map(profile => profile.id), 'all pages preserve order with no duplicate or missing experts');
      assert.equal(await pagination.getByRole('button', { name: 'Sau ›', exact: true }).isDisabled(), true);
      await pagination.getByRole('button', { name: 'Trang 1', exact: true }).click();
      await section.screenshot({ ...shots, path: path.join(output, 'directory-' + width + '.png') });
      if ([1440, 430].includes(width)) {
        for (const profile of instructors) {
          const profilePage = Math.floor(instructors.indexOf(profile) / pageSize) + 1;
          await pagination.getByRole('button', { name: `Trang ${profilePage}`, exact: true }).click();
          const buttons = grid.locator(`[data-expert-id="${profile.id}"]`);
          assert.equal(await buttons.count(), 2);
          for (const button of await buttons.all()) {
            await page.keyboard.press('Tab');
            await button.focus();
            assert.equal(await button.evaluate(b => getComputedStyle(b).outlineStyle), 'solid');
            await page.keyboard.press('Enter');
            assert.equal(await dialog.evaluate(d => d.open), true);
            assert.equal(await dialog.locator('#expert-dialog-title').textContent(), profile.name);
            assert.ok((await dialog.innerText()).includes(profile.academicTitle));
            assert.ok((await dialog.innerText()).includes(profile.specialty));
            assert.equal(await dialog.locator('img').getAttribute('src'), profile.portraitImage);
            await dialog.locator('img').evaluate(i => i.decode());
            assert.equal(await dialog.evaluate(d => d.scrollWidth > d.clientWidth + 1), false);
            await page.keyboard.press('Tab');
            assert.equal(await page.evaluate(() => document.activeElement.closest('dialog')?.id), 'expert-dialog');
            await page.keyboard.press('Escape');
            await dialog.waitFor({ state: 'hidden' });
            assert.equal(await button.evaluate(b => b === document.activeElement), true);
          }
        }
      }
      results.push({ width, pageSize, ...layout, responsive: 'PASS' });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await tabs.nth(0).click();
    await pagination.getByRole('button', { name: 'Trang 1', exact: true }).click();
    // A fresh viewport keeps pointer checks independent of responsive scrolling.
    const hoverPage = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    hoverPage.on('pageerror', e => errors.push(e.message));
    await hoverPage.goto(url);
    await hoverPage.evaluate(() => document.fonts.ready);
    const hoverCard = hoverPage.locator('#experts-instructor-grid .experts__card--featured');
    const textAction = hoverCard.locator('.experts__profile-button');
    const circleAction = hoverCard.locator('.experts__profile-circle');
    await textAction.hover();
    await hoverPage.waitForFunction(e => Math.abs(new DOMMatrix(getComputedStyle(e).transform).m41 - 3) < .01, await textAction.locator('.experts__profile-arrow').elementHandle());
    await hoverPage.waitForFunction(e => Math.abs(new DOMMatrix(getComputedStyle(e).transform).m42 + 3) < .01, await hoverCard.elementHandle());
    assert.equal(await hoverCard.evaluate(e => getComputedStyle(e).borderTopColor), 'rgb(229, 138, 75)');
    await circleAction.hover();
    await hoverPage.waitForFunction(e => Math.abs(new DOMMatrix(getComputedStyle(e).transform).m41 - 2) < .01, await circleAction.locator('i').elementHandle());
    await hoverPage.close();
    const featuredCard = grid.locator('.experts__card--featured');
    const savedCopy = await featuredCard.locator('.experts__card-copy').innerHTML();
    await featuredCard.evaluate(card => {
      card.querySelector('h4').textContent = 'Tên chuyên gia rất dài để kiểm tra bố cục nhiều dòng trên các thiết bị';
      card.querySelector('.experts__academic').textContent = 'Bác sĩ, Thạc sĩ, Chuyên khoa II, Chuyên gia đào tạo và nghiên cứu';
      card.querySelector('.experts__specialty span').textContent = 'Chuyên môn rất dài để kiểm tra khả năng xuống dòng và giữ nguyên vị trí các nút';
    });
    for (const width of [1200, 375]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      const stress = await grid.locator('.experts__card:visible').evaluateAll(cards => ({
        heights: cards.map(c => c.getBoundingClientRect().height),
        overflow: cards.some(c => c.scrollWidth > c.clientWidth + 1),
      }));
      assert.ok(Math.max(...stress.heights) - Math.min(...stress.heights) < 1, 'long content preserves equal heights');
      assert.equal(stress.overflow, false);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    }
    await featuredCard.locator('.experts__card-copy').evaluate((e, html) => { e.innerHTML = html; }, savedCopy);
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.waitForFunction(() => document.querySelectorAll('#experts-instructor-grid .experts__card:not([hidden])').length === 8);
    await search.fill('  NGUYỄN HỒNG TRƯỜNG  ');
    assert.equal(await visibleCount(), 1, 'search ignores case, accents and outer spaces');
    await search.fill('');
    await filter.selectOption('Hồi sức tích cực');
    assert.equal(await visibleCount(), 2, 'specialty filter');
    await search.fill('khong co chuyen gia nay');
    assert.equal(await visibleCount(), 0);
    assert.equal(await section.locator('.experts__empty').isVisible(), true);
    await section.locator('.experts__reset').click();
    assert.equal(await visibleCount(), 8);
    assert.equal(await search.evaluate(i => document.activeElement === i), true);
    await filter.selectOption('Hồi sức tích cực');
    await tabs.nth(1).click();
    assert.equal(await filter.isVisible(), false);
    assert.equal(await section.locator('#experts-leadership .experts__card:visible').count(), 3);
    assert.deepEqual(await section.locator('#experts-leadership .experts__card').evaluateAll(cs => cs.map(c => c.dataset.profile)), sourceData.leadershipDisplayIds);
    for (const width of [1440, 375]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.mouse.move(0, 0);
      await page.waitForTimeout(250);
      const heights = await section.locator('#experts-leadership .experts__card:visible').evaluateAll(cards => cards.map(c => c.getBoundingClientRect().height));
      assert.ok(Math.max(...heights) - Math.min(...heights) < 1);
      await section.locator('img:visible').evaluateAll(imgs => Promise.all(imgs.map(i => i.decode())));
      await section.screenshot({ ...shots, path: path.join(output, `leadership-${width}.png`) });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.waitForFunction(() => document.querySelectorAll('#experts-leadership .experts__card:not([hidden])').length === 3);
    for (const id of sourceData.leadershipDisplayIds) {
      const profile = sourceData.profiles.find(p => p.id === id);
      await section.locator(`#experts-leadership [data-expert-id="${id}"]`).first().click();
      assert.ok((await dialog.innerText()).includes(profile.position));
      for (const paragraph of profile.fullBiography) assert.ok((await dialog.innerText()).includes(paragraph));
      await section.locator('.experts__close').click();
      await dialog.waitFor({ state: 'hidden' });
    }
    await tabs.nth(0).click();
    assert.equal(await visibleCount(), 2, 'specialty choice retained when returning');
    await filter.selectOption('');
    await tabs.nth(0).focus();
    await page.keyboard.press('ArrowRight');
    assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true');
    await page.keyboard.press('Home');
    assert.equal(await tabs.nth(0).getAttribute('aria-selected'), 'true');
    await page.keyboard.press('End');
    assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true');
    await page.keyboard.press('ArrowLeft');
    assert.equal(await tabs.nth(0).getAttribute('aria-selected'), 'true');
    await grid.locator('button').first().click();
    await page.mouse.click(2, 2);
    await dialog.waitFor({ state: 'hidden' });
    assert.equal(await page.evaluate(() => document.documentElement.style.overflow), '');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await grid.locator('.experts__card').first().evaluate(c => getComputedStyle(c).transitionDuration), '0s');
    assert.equal(await page.locator('#partners').count(), 1);
    assert.equal(await page.locator('#programs').count(), 1);
    await page.locator('#ghme-first-aid .game-trigger').click();
    assert.equal(await page.locator('#ghme-first-aid dialog[open]').count(), 1);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#ghme-first-aid dialog[open]').count(), 0);

    // Inject extra profiles only into this test response, never production data.
    const synthetic = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    synthetic.on('pageerror', e => errors.push(e.message));
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    const firstCard = html.match(/<article class="experts__card(?: experts__card--featured)?"[\s\S]*?<\/article>/)[0];
    const extraCards = Array.from({ length: 13 }, (_, i) => firstCard
      .replace(/data-profile="[^"]+"/, `data-profile="qa-person-${i + 13}"`)
      .replace(/data-name="[^"]+"/, `data-name="QA Person ${i + 13}"`)
      .replace(/<h4[^>]*>[^<]+<\/h4>/, `<h4 class="experts__card-name">QA Person ${i + 13}</h4>`)).join('\n');
    const start = html.indexOf('id="experts-instructor-grid"');
    const end = html.indexOf('\n            </div>', start);
    assert.ok(start > 0 && end > start);
    await synthetic.route(url, route => route.fulfill({ contentType: 'text/html', body: html.slice(0, end) + extraCards + html.slice(end) }));
    await synthetic.goto(url);
    const sg = synthetic.locator('#experts-instructor-grid');
    const sn = synthetic.locator('.experts__pagination');
    const sc = synthetic.locator('#experts-count');
    const sv = () => sg.locator('.experts__card:visible').count();
    assert.equal(await sv(), 8);
    assert.ok((await sc.innerText()).includes('1–8 / 25'));
    assert.equal(await sn.getByRole('button', { name: '‹ Trước', exact: true }).isDisabled(), true);
    await sn.getByRole('button', { name: 'Trang 2', exact: true }).click();
    assert.equal(await sv(), 8);
    assert.ok((await sc.innerText()).includes('9–16 / 25'));
    assert.equal(await sn.locator('[aria-current="page"]').evaluate(b => b === document.activeElement), true);
    await sn.getByRole('button', { name: 'Sau ›', exact: true }).click();
    assert.equal(await sv(), 8);
    assert.ok((await sc.innerText()).includes('17–24 / 25'));
    await sn.getByRole('button', { name: 'Trang 4', exact: true }).click();
    assert.equal(await sv(), 1);
    assert.ok((await sc.innerText()).includes('25–25 / 25'));
    assert.equal(await sn.getByRole('button', { name: 'Sau ›', exact: true }).isDisabled(), true);
    await sn.getByRole('button', { name: '‹ Trước', exact: true }).click();
    assert.equal(await sv(), 8);
    await synthetic.getByRole('tab').nth(1).click();
    assert.equal(await sn.isVisible(), false);
    await synthetic.getByRole('tab').nth(0).click();
    assert.equal(await sn.locator('[aria-current="page"]').innerText(), '3');
    await synthetic.locator('#experts-search').fill('QA Person');
    assert.equal(await sv(), 8);
    assert.ok((await sc.innerText()).includes('1–8 / 13'));
    await sn.getByRole('button', { name: 'Trang 2', exact: true }).click();
    assert.equal(await sv(), 5);
    await synthetic.locator('#experts-search').fill('Nguyễn Hồng Trường');
    assert.equal(await sv(), 1);
    assert.equal(await sn.isVisible(), false);
    await synthetic.locator('#experts-search').fill('');
    await synthetic.locator('#experts-specialty').selectOption('Hồi sức tích cực');
    assert.equal(await sv(), 8);
    assert.ok((await sc.innerText()).includes('1–8 / 15'));
    await sn.getByRole('button', { name: 'Trang 2', exact: true }).click();
    assert.equal(await sv(), 7);
    await synthetic.locator('#experts-specialty').selectOption('Nhãn khoa');
    assert.equal(await sv(), 1);
    assert.equal(await sn.isVisible(), false);
    await synthetic.locator('#experts-specialty').selectOption('');
    await synthetic.locator('.experts').screenshot({ ...shots, path: path.join(output, 'pagination-25-test-only.png') });
    await synthetic.setViewportSize({ width: 320, height: 844 });
    assert.equal(await synthetic.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, 'pagination mobile overflow');
    await synthetic.close();

    const fallback = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
    await fallback.goto(url);
    assert.equal(await fallback.locator('.experts__card:visible').count(), 15);
    assert.equal(await fallback.locator('.experts__directory-header').isVisible(), false);
    assert.equal(await fallback.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await fallback.close();
    assert.deepEqual(errors, [], 'browser errors');
    assert.deepEqual(failedAssets, [], 'failed assets');
    const report = { browser: await browser.version(), results, cardHeightsAndActionBaselines: 'PASS', longContent: 'PASS', featuredState: 'PASS', portraitFit: 'PASS', hoverAndFocus: 'PASS', filters: 'PASS', pagination25Profiles: 'PASS', profiles: 'PASS', keyboard: 'PASS', fallback: 'PASS', reducedMotion: 'PASS', errors, failedAssets };
    fs.writeFileSync(path.join(output, 'qa-results.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
