# GHME frontend prototype

Static HTML/CSS/JavaScript rebuilt from the 10 approved PNG references in this folder. No framework, build step, backend, or form submission service.

## Run

Serve this directory with any static server, for example `python -m http.server 4173`, then open http://localhost:4173.

## Edit

- `index.html`: all visible copy, September 2026 schedules, contact details, partner names, and form options.
- `assets/css/styles.css`: brand variables, components, section layouts, responsive rules (1199/991/767/575).
- `assets/js/main.js`: menu, search, schedule dialog, package selection, native form validation and local success state.
- `assets/images/`: individual WebP crops of photographic and brand assets. No section screenshot is used to replace HTML UI.

## Assets and content requiring replacement/approval

The BPEC and Doctor Talk photos are original embedded photographs extracted from page 4 of the supplied GHME company introduction PDF; see `assets/images/programs/README.md`. Other original image files were unavailable when the prototype was created; reference-derived assets still need owner review or higher-resolution replacements where appropriate. Hero background and decorative details are conservative CSS approximations. Contact team photo is a cropped decorative image hidden on tablet/mobile. The two sample certificate images are visual references only, not independently verified accreditation claims. Partner relationships and the contact details (0904 123 456 / lienhe@ghme.vn) are reproduced from the screenshots and require owner verification before public operation.

Login, news, policies, terms and homepage FAQ show explicit prototype dialogs pending real content. Course card CTAs open the corresponding detail page; detail-page consultation CTAs return to the homepage with the appropriate form option selected. No consultation data is sent or stored; the success message explicitly says so. Typeface: Be Vietnam Pro, loaded from Google Fonts with an Arial fallback.

## Vietnamese / English (10 October 2026)

The homepage, About page, both course details and embedded first-aid challenge
share a compact `VI | EN` control in the top header. Vietnamese is the first-visit
default. A choice is saved as `localStorage.ghmeLanguage` and survives reloads,
page navigation and the five legacy redirects. Switching is client-side.

- `assets/i18n/catalog.json`: authoritative bilingual website copy, including
  program/product cards, expert specialties/biographies, metadata and dynamic UI.
- `assets/i18n/vi.js` / `en.js`: generated browser dictionaries.
- `assets/js/language.js`: early preference read before first paint.
- `assets/js/i18n.js`: direct text-slot/attribute updates, template localization,
  form validation and the `ghme:languagechange` event. Text slots use
  `data-i18n="0:copy.Home"`; attributes use
  `data-i18n-attrs="aria-label:copy.GhmeHome"`. Inline icons/links are preserved.
- `assets/css/i18n.css`: switch states/focus and first-load flash prevention.
- `first-aid-game/src/messages.js`, `i18n.jsx`, `questions.en.js`: React UI
  catalog, context and English question counterparts. IDs, correct answer indices,
  answer order and Red Cross source references remain shared.

After editing copy or adding a catalog entry, run `python scripts/build_i18n.py`.
The existing course/expert generators also run this step automatically, so
regenerating content preserves localization and switches. After React edits,
run `npm --prefix first-aid-game run build`. No runtime dependency was added.
Translation keys fall back to Vietnamese; unknown keys return the caller's
fallback or an empty string. Storage-blocked browsing retains the current
language in memory. Document language, title and meta description update together.

QA: `node scripts/qa_i18n.cjs`, `node scripts/qa_game_i18n.cjs` and
`node scripts/qa_i18n_preferences.cjs`. Set `NODE_PATH` or `PLAYWRIGHT_MODULE` to
an available Playwright runtime. Evidence is generated under
`first-aid-game/qa-output/i18n/`. See `docs/bilingual-report.md` for coverage,
responsive results and original images that still contain Vietnamese text.

## Course details (7 October 2026)

- `courses/program-1.html`: Basic Pre-hospital Emergency Care (BPEC), with six curriculum topics and practical learning objectives.
- `courses/program-2.html`: Health Education – Doctor Talk, with ten health topics for office professionals and corporate teams.
- Program content and photos follow the supplied GHME company introduction. Schedules, fees and arrangements direct visitors to consultation. Former demo routes `program-3.html` through `program-7.html` redirect to the current program section.
- `scripts/build_courses.py`: shared template and program profiles. Run `python scripts/build_courses.py` after changing homepage card copy or the profiles. The script generates the two detail pages without changing homepage links; Python is unnecessary for deployment.
- `assets/css/course.css` and `assets/js/course.js`: responsive layout, sticky consultation panel, mobile CTA/navigation and native disclosure panels.
- Consultation links pass the card ID as `?program=program-1#consultation` or `?program=program-2#consultation`; the homepage selects the matching option. Unknown IDs are ignored.

## Homepage expert directory (10 October 2026)

The `#certificates` section uses portrait cards, search by name and a specialty
filter. Numbered pagination with Previous/Next keeps the current responsive
limits: 4 columns / 8 cards per page at 1200px and above, 3 / 6 at
1024–1199px, 2 / 4 at 768–1023px, and 1 / 2 below 768px. Each tab remembers
its page; search or specialty changes return to page one. Pages are clamped
when resizing changes their total. Pagination is hidden for zero or one page.
All cards and biographies stay in the HTML; without JavaScript they are all
visible. The shared behavior also applies to `about.html#team`.

Edit `assets/data/experts.json`, then run `python scripts/build_experts.py` to
regenerate only the homepage section. Counts and specialty options derive
from data. `assets/css/experts.css` and `assets/js/experts.js` handle layout
and interaction. `scripts/qa_experts.cjs` checks pagination, profiles, filters,
keyboard access and responsive layout. Latest screenshots and browser QA:
`docs/design-reference/experts/restored-pagination/`.

## About GHME

`about.html` presents the company, its three service areas, training approach, leaders/advisor and partners using the supplied GHME company introduction. `assets/css/about.css` contains the scoped page styles; `assets/js/about.js` handles mobile navigation. Homepage and course navigation link to this page; the footer's teaching-expert link opens `about.html#team`.

Original profile photographs and logos are in `assets/images/about/`; see its README for page provenance. About-page contact details follow profile page 18. Edit the page copy directly; no build step is needed.

About-page browser QA (7 October 2026): 1440, 1024, 390 and 320px layouts without horizontal page overflow; source photos/logos loaded; mobile menu and Escape, section links and homepage entry verified. Local asset/anchor checks and JavaScript syntax checks passed.

## QA (17 September 2026)

Local Microsoft Edge / Playwright: 1440, 1366, 1024, 768, 390, 375 widths. No horizontal overflow, broken image, or JavaScript runtime error. Verified mobile navigation, schedule dialog, course selection, search, required fields, invalid email rejection, consent requirement, and valid form success. Desktop and mobile screenshots visually reviewed. Images were fully loaded before screenshot inspection.

## Vercel

Ready for a static deployment: framework preset Other, no build command, output directory `.`. Run `npx vercel` for preview or `npx vercel --prod` after Vercel authentication. `.vercelignore` excludes the full reference screenshots from deployment while retaining them locally. No Git repository or existing Vercel project configuration was present. Vercel CLI 59.20.0 `whoami` returned `loggedIn: false`, `reason: login_required`; the account owner must run `npx vercel login` before deployment can proceed. No deployment URL exists yet.

## Integrated first-aid challenge (19 September 2026)

The homepage now loads the React mini-game through `assets/first-aid/game.js` into an isolated Shadow DOM. Run `npm --prefix first-aid-game run build` after game source edits; the generated assets are included for static hosting. The launcher uses a finite CSS attention sequence and opens the invitation on activation, and the final course CTA goes to the existing `#programs` section. See `first-aid-game/README.md` for implementation and integrated browser QA.
