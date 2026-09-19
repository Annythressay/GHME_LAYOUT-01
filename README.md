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

All raw images were unavailable. The logo, hero illustration, city imagery, program photos, activity photos, certificates and partner logos are crops of the supplied references; replace with original high-resolution files. Hero background and decorative details are conservative CSS approximations. Contact team photo is a cropped decorative image hidden on tablet/mobile. The two sample certificate images are visual references only, not independently verified accreditation claims. Partner relationships and the contact details (0904 123 456 / lienhe@ghme.vn) are reproduced from the screenshots and require owner verification before public operation.

Login, English, products, news, policies, terms and homepage FAQ show explicit prototype dialogs pending real content. Course card CTAs open the corresponding detail page; detail-page consultation CTAs return to the homepage with the appropriate form option selected. No consultation data is sent or stored; the success message explicitly says so. Typeface: Be Vietnam Pro, loaded from Google Fonts with an Arial fallback.

## Course details — Concept 02 (19 September 2026)

- `courses/program-1.html` through `courses/program-7.html`: static detail pages with unique titles and descriptions. The young-family sample is `courses/program-2.html`.
- `scripts/build_courses.py`: shared page template. It reads the existing `.program-card` content from `index.html`, generates all seven pages, and updates their entry links. Run `python scripts/build_courses.py` after changing card content or the template; do not edit the generated pages directly. Python is only needed to regenerate files, not for deployment.
- `assets/css/course.css`: scoped desktop 68/32 layout, sticky consultation panel, tablet flow, and mobile bottom CTA. Short desktop windows allow the panel to scroll within the viewport.
- `assets/js/course.js`: mobile navigation and current-section indicator. Core content, links, and native disclosure panels work without JavaScript.
- Consultation links pass a known card ID as `?program=program-2#consultation`. `assets/js/main.js` checks it against actual cards before selecting the form option; unknown IDs are ignored.

Content remains limited to the current cards. Session allocation, prerequisites, fees, course-specific schedules, trainers, materials, and certification are marked pending. Existing low-resolution images remain explicitly labelled as illustrations; replace with approved high-resolution course photos when available. No backend or public deployment is included.

Browser QA: Edge at 1440, 1024, 768, 390, and 320px; all seven detail/consultation flows, correct form preselection, unknown program ID, native accordion keyboard activation, mobile menu/Escape, mobile CTA, sticky panel position, no horizontal overflow, no broken loaded images, no page errors, and readable static content without JavaScript.

## QA (17 September 2026)

Local Microsoft Edge / Playwright: 1440, 1366, 1024, 768, 390, 375 widths. No horizontal overflow, broken image, or JavaScript runtime error. Verified mobile navigation, schedule dialog, course selection, search, required fields, invalid email rejection, consent requirement, and valid form success. Desktop and mobile screenshots visually reviewed. Images were fully loaded before screenshot inspection.

## Vercel

Ready for a static deployment: framework preset Other, no build command, output directory `.`. Run `npx vercel` for preview or `npx vercel --prod` after Vercel authentication. `.vercelignore` excludes the full reference screenshots from deployment while retaining them locally. No Git repository or existing Vercel project configuration was present. Vercel CLI 59.20.0 `whoami` returned `loggedIn: false`, `reason: login_required`; the account owner must run `npx vercel login` before deployment can proceed. No deployment URL exists yet.

## Integrated first-aid challenge (19 September 2026)

The homepage now loads the React mini-game through `assets/first-aid/game.js` into an isolated Shadow DOM. Run `npm --prefix first-aid-game run build` after game source edits; the generated assets are included for static hosting. The launcher uses a finite CSS attention sequence and opens the invitation on activation, and the final course CTA goes to the existing `#programs` section. See `first-aid-game/README.md` for implementation and integrated browser QA.
