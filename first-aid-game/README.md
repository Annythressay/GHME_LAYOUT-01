# GHME — 4 Phút Thời Gian Vàng

React 19 + Vite + Tailwind CSS v4 + Lucide. The original 10-question dataset and local training illustrations are retained. The game now mounts into the real static GHME homepage.

## Run and build

From the repository root:

```sh
npm --prefix first-aid-game install
npm --prefix first-aid-game run build
python -m http.server 4173
```

Open http://127.0.0.1:4173/. The build writes the self-contained ES module and local images into `assets/first-aid/`. These files are included for the existing no-build static deployment. Rebuild after changing source. Vite's `emptyOutDir` is limited to this generated directory.

For isolated source development: `npm --prefix first-aid-game run dev`. Open the URL printed by Vite. The standalone development page has a animated manual launcher, but the real website background is visible only on the integrated static homepage.

## Integration

`index.html` includes `#ghme-first-aid` and `assets/first-aid/game.js`. The entry creates an open Shadow DOM containing React and compiled Tailwind CSS, preventing preflight/utilities from changing the host website. Production image URLs resolve relative to the bundled module; subdirectory hosting is supported.

The host uses its existing font. No backend, form, login, analytics or new UI framework was added.

## Experience

- The launcher enters after 2.5 seconds (450ms), rests 600ms, then plays a 900ms heartbeat, 400ms duration emphasis and 700ms pill pulse. One heartbeat/pulse reminder follows after 13 seconds of rest. Hover, focus or activation cancels the pill/text attention for this mount. The icon independently repeats a CSS heartbeat/signal cycle every 4.8s: about 1.6s activity, then 3.2s rest. Three mirrored CSS border arcs stagger by 150ms over a soft pink glow; the Lucide heart is 32px desktop / 28px mobile. Signal motion pauses while the game is open. No automatic modal opening or JavaScript attention timers. Reduced motion shows the launcher immediately without movement.
- Entry → quiz → per-answer feedback → result. Replay retains the existing readiness intro. Entry and replay intro have no active timer.
- Entry CTA “Thử 4 phút” calls the existing start action directly, opening question 1 at 04:00. On replay, “Sẵn sàng, bắt đầu” starts the new attempt.
- Selection does not disclose correctness. Confirm locks the answer; feedback includes the correct answer, explanation and original source link. A separate Next action advances exactly one question.
- Progress measures confirmed questions, from 0/10 to 10/10. Timer remains navy, turning orange below 60 seconds.
- Timeout immediately shows a calm result. Unconfirmed choices do not count. All 10 explanations remain available in review.
- Result: score, answered count, elapsed time, encouraging copy and complete answer review. Tiers: 0–4 build foundations, 5–7 basic knowledge, 8–10 good foundations. An incomplete timed-out attempt gets neutral review copy instead of a tier judgement.
- Course CTA closes the game, focuses and scrolls to the existing homepage `#programs` section. Standalone development links to `../#programs`.
- Replay returns to intro with fresh state; timer starts only after readiness is confirmed again.
- Close/Escape during quiz opens a confirmation. Continue retains progress; Exit discards the attempt. Timer continues while confirmation is open.
- Dismissal/completion session markers remain recorded; the invitation opens only through the launcher.

## State and accessibility

`game.js` owns screen, current question, selection, confirmation, hints, responses, remaining time, deadline and exit confirmation through a reducer. Score is derived from confirmed responses and question data. Feedback is derived from the confirmed selection; it is not stored redundantly.

Only the quiz has a 250 ms interval, with cleanup on completion, exit and unmount. An absolute deadline and visibility-change synchronization prevent background-tab drift. StrictMode is retained for source development.

Native modal dialogs make the background inert. Explicit Tab/Shift+Tab wrapping keeps focus inside each dialog, including nested exit confirmation. Escape is handled at the top dialog. Question/result headings receive focus; closing restores the prior element or launcher. Body overflow and padding are restored exactly, and scrollbar compensation prevents layout jump. Backdrop clicks cannot activate the underlying website. Reduced-motion settings suppress transitions.

## Components and modified files

New components:
- `src/components/GameDialog.jsx`: modal lifecycle, body scroll lock, focus restoration and keyboard trap; also used for exit confirmation.
- `src/components/GameIntro.jsx`: invitation and ready-to-start introduction.

Updated:
- `src/App.jsx`: launcher, session frequency, orchestration, timer lifecycle and course navigation.
- `src/game.js`: centralized reducer.
- `src/main.jsx`: isolated widget mount.
- `src/components/Header.jsx`: brand, answered progress, timer.
- `src/components/Situation.jsx`: existing local visual and training context.
- `src/components/Question.jsx`: answers, local hint, feedback and next action.
- `src/components/Results.jsx`: educational result, tiers, review, course CTA, replay.
- `src/styles.css`: entry, overlay, responsive layouts and Shadow DOM border defaults.
- `vite.config.js`: static-site widget build.
- `qa-browser.cjs`: integrated production-browser QA.
- `.gitignore`: local QA screenshots excluded.
- This README, repository README and root `index.html`.
- Generated `assets/first-aid/game.js` and nine images.

`questions.js` and package dependencies are unchanged. Existing images are AI-generated illustrations according to the original project documentation, not documented real training events. No random web images were added. The four-minute duration is a game mechanic, not a universal clinical threshold.

## QA — 19 September 2026

Production bundle on the real homepage, Microsoft Edge headless with Playwright:
- 1440, 1200, 1024, 768, 430 and 375 px, across entry, intro, quiz, feedback and result: no page/modal horizontal overflow; images decode successfully.
- An additional 375 × 667 viewport keeps the entry dialog within the viewport; internal scrolling is allowed where needed.
- Delayed invitation, dismissal, reload suppression, manual reopening, entry/replay intro without countdown, entry CTA starts directly at 04:00.
- Keyboard radio selection, initial disabled confirmation, optional hint, deferred feedback, locked answers, next-question reset and answered progress.
- All 10 questions, expected 9/10 score, complete review, replay, timeout excluding unconfirmed selection and timer frozen after completion.
- Escape and nested exit confirmation, continuing and exiting, focus wrapping in both directions, restored focus, backdrop isolation and restored body scrolling.
- Course CTA navigates and focuses the real programs section.
- Exactly one game interval while playing; zero after completion or exit.
- No console errors or page errors in the tested flow.

Run a static server on port 4173, then:

```sh
node first-aid-game/qa-browser.cjs
```

Requires Playwright (set `PLAYWRIGHT_MODULE` to an existing installation) and Microsoft Edge. `GAME_URL` overrides the homepage URL. The script uses a controlled clock and saves 30 screenshots in ignored `first-aid-game/qa-output/`. This is browser QA, not a screen-reader or clinical-content audit.

## Selected design: Concept 04 — Micro Challenge

Entry is a small bottom-right invitation. No photograph, caption, benefits or privacy block. Copy: GHME · 4 PHÚT THỜI GIAN VÀNG; static 04:00 / thời lượng; 10 tình huống. Bạn sẽ xử trí thế nào?; Thử 4 phút; Để sau. The existing 44px close control remains.

Desktop: 480 × 289px, right/bottom offsets 40px (24px on tablet). Mobile offsets: 12px with safe-area support. Measured size: 406 × 260 at 430px; 351 × 260 at 375px. Backdrop opacity .32; 300ms/10px entrance, honoring reduced motion.

The 2000ms delay, session keys, focus trap, Escape, scroll locking and restoration are unchanged. Entry duration is static text, not a timer or live region. Thử 4 phút invokes the existing start action, opening the quiz at 04:00. Questions, reducer, scoring, feedback and result calculations are unchanged.

Changed for Concept 04: src/components/GameIntro.jsx, entry-only rules in src/styles.css, qa-browser.cjs, this README and rebuilt assets/first-aid/game.js.

Production browser QA passes at 1440, 1200, 1024, 768, 430 and 375px. No entry internal scrolling or horizontal overflow at tested sizes; no console/page errors. Verified static duration after 20 seconds, keyboard Enter start, full quiz/result/replay/timeout flow, session dismissal, focus wrapping and timer cleanup.
