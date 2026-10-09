# GHME — 4 phút thời gian vàng

Interactive first-aid training widget built with React 19, Vite, Tailwind CSS v4 and Lucide. The widget runs inside an open Shadow DOM on the existing GHME website.

## Run and build

From the repository root:

```sh
npm --prefix first-aid-game install
npm --prefix first-aid-game run build
python -m http.server 4173
```

Open http://127.0.0.1:4173/ and use the existing “Thử thách sơ cứu 4 phút” launcher. For isolated source development, run `npm --prefix first-aid-game run dev`.

The established build writes the ES module and local images into `assets/first-aid/`. Rebuild after editing React source. No homepage, website stylesheet, external launcher design or hosting changes are needed.

## October 2026 presentation redesign

The entry and replay screens share one typography-led opening: game title, 10 situations, short description and Start action, with an existing training photograph on desktop. Start now opens the participant popup on the first attempt in a page visit. Name and phone are required; email is optional. The duration remains static until valid form submission. Replay in the same visit reuses the in-memory participant details.

The quiz is an open editorial composition: a large situation photograph and caption beside the question and four full-width decision choices. The header contains GHME, confirmed-question progress, a quiet timer and Close. Below 820px, the photo precedes the question and choices. The mobile header remains visible, including Close, while the modal scrolls.

Selection uses navy. After confirmation, the correct answer has a subtle green state and a wrong selected answer uses soft orange. Border, padding and icon slots retain identical geometry across states. Inline hints and feedback share a reserved learning region, keeping the primary action stable.

Feedback presents status, explanation, “Điều cần nhớ” and the original Red Cross reference. It only reformats existing explanation sentences and hints; no clinical content was added.

Results use a navy score hero with light text, green strengths, orange review topics and contrasting selected/correct answers. A direct review action scrolls to and focuses the review heading. Results prioritize the score and elapsed time, followed by actual question categories. “Bạn làm tốt” includes categories with all their questions correct; “Bạn nên xem lại” includes categories with wrong or unconfirmed answers. Wrong/unconfirmed answers appear first, with the user's choice, correct answer and expandable explanation. A toggle reveals all ten answers. The course CTA and replay follow the learning review.

Screens share navy, white, very light blue, restrained orange, one type family, consistent controls and 200–220ms motion. Reduced-motion settings disable animation.

## Participant information

`ParticipantForm.jsx` validates a trimmed name, a 9–15 digit phone number (common international formatting is accepted), and an optional email. Errors are associated with their inputs; the first invalid field receives focus. The popup supports keyboard focus containment, Escape and focus restoration. No quiz timer runs while the form is open.

The website has no customer submission API. The form explicitly identifies this as a preview: participant details remain in React memory for the current page visit only; they are not sent to GHME, persisted in browser storage, or stored on a server. A production API/CRM destination is still required for real customer collection.

## Preserved behavior

- `src/game.js`, `src/questions.js` and `src/main.jsx` remain unchanged.
- Timer: 240 seconds, absolute deadline, one 250ms interval while playing, visibility synchronization and cleanup.
- Scoring: only confirmed responses count; hints do not change scoring.
- Selection, confirmation, progress, hints, response history, timeout and replay still use the existing reducer.
- Dismissal and completion markers use the existing sessionStorage keys and in-memory fallback.
- Launcher markup, interaction handlers, heartbeat and signal CSS are retained.
- Shadow DOM integration, image paths and the production build workflow are retained.
- Native modal dialogs, focus containment, Escape, nested exit confirmation, focus restoration, inert background and scroll locking remain intact.
- Course CTA closes the modal and focuses the existing homepage `#programs` section.

## Source organization

- `src/App.jsx`: existing state orchestration with revised presentation composition.
- `src/components/GameIntro.jsx`: opening and replay intro.
- `src/components/Header.jsx`: compact progress/timer header and Close.
- `src/components/Situation.jsx`: situation number, image and caption.
- `src/components/Question.jsx`: decision choices, inline aid and stable action.
- `src/components/Feedback.jsx`: educational feedback presentation.
- `src/components/Results.jsx`: score, category summary, filtered review and final CTA.
- `src/components/GameDialog.jsx`: existing modal/focus behavior with configurable dialog title and styling for the participant popup.
- `src/components/ParticipantForm.jsx`: pre-challenge customer details and validation.
- `src/styles.css`: complete modal visual system; existing launcher CSS preserved.
- `assets/first-aid/game.js`: rebuilt generated production bundle.

## QA

Run against the static server using an available Playwright installation:

```sh
node first-aid-game/qa-redesign.cjs
node first-aid-game/qa-trigger.cjs
```

If Playwright is not installed locally, set `NODE_PATH` to a runtime containing it, or set `PLAYWRIGHT_MODULE` to its absolute module path. Tests launch installed Microsoft Edge headlessly.

Verified widths: **1440, 1200, 1024, 768, 430 and 375px**. Desktop screenshots use 1000px height; quiz fitting is additionally checked at 1440×900. Phone tests use 812px height with an additional 375×667 check.

The redesign suite additionally checks form validation, optional email, keyboard focus, cancellation and timer gating. The redesign suite covers all ten questions at all six widths, radio-keyboard selection, inline hints, correct and incorrect feedback, progress, disabled/locked states, stable option and action geometry, 7/10 and 10/10 results, wrong-answer review, all-results toggle, replay, timeout, unconfirmed selections, session markers, CTA navigation, timer cleanup, Escape/exit, intro focus wrapping, restored focus, modal titles, mobile Close while scrolling and reduced motion.

Final result: **PASS**. No page/dialog horizontal overflow and **0 console/page errors**. The measured maximum action movement was less than 0.001px (browser floating-point geometry); option heights remained unchanged. No duplicated timer.

The unchanged launcher suite also verifies animation counts, staggered signal waves, containment, rest periods, all six widths, keyboard activation, focus restoration and reduced motion.

Screenshots and machine-readable evidence: `qa-output/redesign/` and `qa-output/redesign/report.json` (ignored generated output). `qa-redesign.cjs` is the current full-flow suite. The older `qa-browser.cjs` retains assertions for the superseded compact-entry design and is preserved as historical work.
