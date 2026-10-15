# Accessibility Audit and Implementation Report
## Project: Open Page — Accessible Information Portal

### 1. Scope and audit method
This project reviews a fictional blog landing page for common accessibility barriers. The source code was inspected for semantic structure, keyboard access, focus visibility, accessible labels, dynamic status announcements, responsive reflow, colour choices, and reduced-motion preferences. This is a source-level review, not a claim of certified WCAG conformance. Run Lighthouse Accessibility or WAVE in a browser and record the actual score/findings before saying an automated audit was completed.

### 2. Specific implementation evidence
- **Landmarks and headings:** `index.html` uses `header`, `nav`, `main`, `section`, `article`, and `footer`. The hero has the page's primary `h1`; article, topics, and about areas have `h2` headings. `aria-labelledby` connects key sections to their headings.
- **Skip link:** The first focusable link is `<a class="skip-link" href="#main-content">`. In `styles.css`, it is positioned above the viewport until `:focus` moves it to `top: 12px`. This lets keyboard users skip repeated navigation.
- **Mobile navigation state:** The menu button declares `aria-expanded="false"` and `aria-controls="primary-nav"`. In `script.js`, `setMenuOpen()` updates the `aria-expanded` value and toggles the `is-open` CSS class together. Navigation closes after a link is selected and when the viewport is wider than 620px.
- **Search labelling and status:** The search input has a visible programmatic association through `<label class="visually-hidden" for="search-input">`. The form uses `role="search"`. The result message uses `role="status"`, `aria-live="polite"`, and `aria-atomic="true"` so assistive technology can be informed of updates without an abrupt interruption.
- **Filtering behaviour:** The `filterCards()` function checks the article's visible text and `data-keywords`, toggles each card's `hidden` property, updates the result count, and reveals the no-results message when the match count is zero. Both the form `submit` event and input `input` event trigger filtering.
- **Focus and controls:** `styles.css` provides a 3px `:focus-visible` outline with offset for keyboard focus. The UI uses native anchors, buttons, search inputs, and semantic time elements rather than click handlers on generic containers.
- **Reflow and reduced motion:** CSS media queries at 820px and 620px change the grids and navigation for narrower viewports. The `prefers-reduced-motion: reduce` rule disables smooth scrolling and greatly reduces animation/transition duration.
- **Defensive behaviour:** JavaScript checks whether required navigation and search elements exist before attaching handlers and logs a console warning if a component cannot be initialised.

### 3. Standards rationale
These choices support WCAG principles of perceivability, operability, understandability, and robustness. Semantic landmarks and labels improve structure for assistive technologies. Keyboard focus and skip navigation support operability. Live status updates communicate search changes. Responsive layouts, readable contrast choices, and reduced-motion support address different user needs. ARIA is applied to expose state and live updates where native HTML alone does not convey the interaction.

### 4. Manual test plan and evidence to record
Run these tests in a browser and fill in the actual observations before final submission:
| Test | Procedure | Expected result | Actual result |
|---|---|---|---|
| Skip link | Press Tab immediately after page load, then Enter | Link becomes visible and focus moves to main content | Record after testing |
| Menu state | At <=620px, activate Menu twice | Navigation opens/closes; `aria-expanded` switches true/false | Record after testing |
| Menu link | Open mobile menu and select Articles | Page moves to Articles and menu closes | Record after testing |
| Search match | Type `design` | Matching article remains and status reports count | Record after testing |
| No results | Type `zzzz-no-match` | Cards hide and no-results message appears | Record after testing |
| Keyboard focus | Tab through controls | Focus indicator remains visible | Record after testing |
| Reflow | Test 375px, 768px, and 1280px viewport widths and 200% zoom | Content remains readable without unintended horizontal overflow | Record after testing |
| Automated audit | Run Lighthouse Accessibility or WAVE | Record actual findings; fix confirmed issues | Record after testing |

### 5. Limitations and next steps
Source-level review cannot establish full WCAG conformance. Colour contrast should be checked with a contrast analyser, and the page should be tested with a keyboard, automated accessibility tool, and (if available) a screen reader. Record only test results that were actually observed. The project is a static demonstration and does not include full article pages or a backend.
