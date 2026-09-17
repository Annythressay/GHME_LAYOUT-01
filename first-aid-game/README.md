# GHME — 4 Phút Thời Gian Vàng

Standalone React + Tailwind CSS v4 + Lucide React mini-game. The existing static website is unchanged.

## Run

```sh
cd first-aid-game
npm install
npm run dev
```

Open the local URL printed by Vite. Production: `npm run build`; preview: `npm run preview`.

## Integrate into an existing React application

Install `react`, `react-dom`, `lucide-react`, `tailwindcss`, and the Tailwind adapter for your bundler. This project uses `@tailwindcss/vite` in `vite.config.js`.

Copy `src/App.jsx`, `src/components/`, `src/questions.js`, `src/game.js`, and `src/styles.css`; import the stylesheet and render `<App />`. Merge the Tailwind theme with the host app's theme as appropriate. Copy `public/images/` to the host's public asset directory. Asset paths are relative to the game page; update them for a nested client-side route.

## Behavior

- 10 single-choice sample questions. Selecting does not show correctness; confirmation locks the answer and reveals an explanation.
- Hints are optional. Correctness alone determines the score. Unconfirmed answers are not counted when time expires.
- The 240-second timer starts on mount and uses an absolute deadline, including time spent in a background tab. Expiry shows the result automatically; replay resets every state.
- Keyboard: Tab, arrow keys for native radio choices, Space to select, Enter/Space on buttons. The next question/result receives heading focus.
- State exists only in memory. Reloading starts a fresh game; no backend or personal-data collection.
- Source links are attached to each explanation in `questions.js`. This is a knowledge exercise, not proof of competence or certification. The 4-minute duration is a game mechanic, not a universal clinical threshold.
- Images are the existing AI-generated GHME training illustrations, copied as local WebP assets. They illustrate training, not documented events or step-by-step clinical technique.

## Files

`App.jsx`: composition and timer lifecycle. `game.js`: state transitions. `questions.js`: editable content and sources. `components/`: header/progress/timer, situation, question/feedback, result/review.

## Verification

`npm run build` passes. Browser QA in Microsoft Edge passes at 1440, 1200, 1024, 768, 430 and 375 pixels with no horizontal overflow, broken images or console errors. Verified initial disabled confirmation, hint, keyboard selection, deferred feedback, locked answers, all 10 questions, 9/10 scoring, review, restart, deadline timeout, exclusion of unconfirmed answers and timer stopping after completion.

To rerun `qa-browser.cjs`, start the dev server on port 5173 and provide Playwright through `PLAYWRIGHT_MODULE` (or install it locally), then run `node qa-browser.cjs`. `GAME_URL` can override the tested URL. Microsoft Edge must be installed. The script uses a controlled clock to verify expiry without waiting four real minutes.
