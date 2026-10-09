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

Login, English, products, news, policies, terms and homepage FAQ show explicit prototype dialogs pending real content. Course card CTAs open the corresponding detail page; detail-page consultation CTAs return to the homepage with the appropriate form option selected. No consultation data is sent or stored; the success message explicitly says so. Typeface: Be Vietnam Pro, loaded from Google Fonts with an Arial fallback.

## Course details (7 October 2026)

- `courses/program-1.html`: Basic Pre-hospital Emergency Care (BPEC), with six curriculum topics and practical learning objectives.
- `courses/program-2.html`: Health Education – Doctor Talk, with ten health topics for office professionals and corporate teams.
- Program content and photos follow the supplied GHME company introduction. Schedules, fees and arrangements direct visitors to consultation. Former demo routes `program-3.html` through `program-7.html` redirect to the current program section.
- `scripts/build_courses.py`: shared template and program profiles. Run `python scripts/build_courses.py` after changing homepage card copy or the profiles. The script generates the two detail pages without changing homepage links; Python is unnecessary for deployment.
- `assets/css/course.css` and `assets/js/course.js`: responsive layout, sticky consultation panel, mobile CTA/navigation and native disclosure panels.
- Consultation links pass the card ID as `?program=program-1#consultation` or `?program=program-2#consultation`; the homepage selects the matching option. Unknown IDs are ignored.

## Homepage expert directory (9 October 2026)

The `#certificates` section uses portrait cards, search by name and a specialty
filter. Its initial presentation follows the grid: 4 columns / 8 cards at
1200px and above, 3 / 6 at 1024–1199px, 2 / 4 at 768–1023px, and 1 / 2 below
768px. The tall phone cards make two an appropriate compact introduction.
An outline “Xem thêm chuyên gia” button reveals every matching profile without
pagination; “Thu gọn” restores the limit for the current viewport and keeps
the button at the same screen position. Each tab retains its expanded state
across resizing and tab changes; changing search or specialty resets it.
Featured profiles that match the current filters remain in the initial set.
All cards and biographies stay in the HTML; without JavaScript they are all
visible. The shared behavior also applies to `about.html#team`.

Edit `assets/data/experts.json`, then run `python scripts/build_experts.py` to
regenerate only this section. Counts and specialty options derive from data.
`assets/css/experts.css` and `assets/js/experts.js` handle layout and interaction.
Responsive view-more browser QA and screenshots are under
`docs/design-reference/experts/responsive-view-more/`. The older concept and
portrait-card QA artifacts are retained under their original directories.

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
