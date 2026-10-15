# Week 3 — Accessibility and UX Improvements

## Project overview
Open Page is a fictional blog/information portal built with semantic HTML5, CSS3, and vanilla JavaScript. It demonstrates accessible navigation, article search, keyboard focus, and responsive layout patterns.

## Files
- `index.html` — semantic content, navigation, article cards, search form
- `styles.css` — contrast-conscious colours, focus states, responsive breakpoints, reduced-motion support
- `script.js` — menu state management and live article filtering
- `accessibility-report.md` — implementation evidence, audit method, test cases, and limitations

## Run locally
Extract the ZIP and open `index.html` in a modern browser. No package installation or build step is required.

## Try the interactions
1. Press Tab after page load. The “Skip to main content” link should become visible.
2. Activate the Menu button at a mobile viewport. Check that navigation appears and `aria-expanded` changes.
3. Search for `design`, `technology`, or `learning`.
4. Search for a word that does not appear to trigger the no-results message.
5. Select a topic link and confirm the search is populated and results update.

## Audit status
The source has been reviewed against common WCAG 2.2 AA and WAI-ARIA practices. The report contains manual test cases, but automated Lighthouse/WAVE and screen-reader results must be recorded only after running those tests in your own browser.
