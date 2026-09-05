# Portfolio redesign validation

Validated on 5 September 2026 against the production build using Chrome 152.0.7977.82 (headless, Linux). No deployment was performed.

## Build and interaction checks

- `npm run build`: passed (TypeScript and Vite).
- `npm run lint`: passed.
- `git diff --check`: passed.
- Homepage, LMS, and KonectGo checked at 360, 390, 768, 1024, and 1440 CSS pixels: no horizontal overflow; all images loaded after scrolling; menu visibility matched the breakpoint.
- Desktop and mobile screenshots inspected for hierarchy, photo framing, screenshot proportions, and text clipping. Original product captures are preserved; small UI text is readable through the full-size dialog rather than the thumbnail.
- Keyboard: hidden menu skipped, Escape closes the menu and restores the trigger, skip link is the first target and focuses main content.
- Gallery: modal opens with focus on Close; background is modal/inert; Escape returns focus to the screenshot trigger; full-size view supports horizontal panning on mobile.
- Routing: project clicks reset scroll and focus the new heading; Back/Forward, direct project URLs, missing slug, unknown slug, and other-project filtering passed.
- Ctrl/Cmd-click is not intercepted by the application. Contact destinations match the existing email, GitHub, and LinkedIn data.
- Reduced motion disables smooth scrolling and animated transforms. Four repeated animated project switches left a single current page and the correct heading focus. No JavaScript runtime exceptions occurred in the browser test.

## Mobile performance sample — initial redesign baseline

Production preview at `127.0.0.1:4173`, 390 × 844 viewport, device scale factor 1, CPU throttled 4×, network limited to 1.6 Mbps download / 750 Kbps upload with 150ms latency. Browser cache disabled; each navigation sampled for 10 seconds. Normal motion enabled. Manrope and Sora loaded successfully.

| Run | First contentful paint | Largest contentful paint | Cumulative layout shift |
| --- | --- | --- | --- |
| 1 | 1.044s | 1.588s | 0.000215 |
| 2 | 0.984s | 1.476s | 0.000215 |
| 3 | 1.092s | 1.648s | 0.000215 |

Median LCP: **1.588s**. These are local lab observations from Chrome PerformanceObserver, not Lighthouse scores or production field measurements. Network connections may be reused between runs. Real devices, hosting, caching, and font delivery can change results; INP was not measured.

## Image size comparison

Original files remain available. Byte sizes below compare originals with the largest delivered WebP variants; mobile also has smaller variants.

| Asset | Original | WebP | Reduction |
| --- | ---: | ---: | ---: |
| Portrait | 1,906,970 B | 52,164 B | 97.3% |
| LMS | 1,027,983 B | 129,442 B | 87.4% |
| KonectGo | 811,130 B | 159,110 B | 80.4% |

Combined: 3,746,083 B → 340,716 B, approximately **90.9% smaller**. The social preview is a separate 1200 × 630 PNG.

## Color and remaining publishing configuration

Calculated text contrast on the background / surface respectively:

- Primary text: 14.44:1 / 12.73:1.
- Secondary text: 8.69:1 / 7.66:1.
- Accent: 9.52:1 / 8.39:1.

This checks the interface text palette, not the text embedded in original project screenshots, and is not a complete accessibility certification. Safari, Firefox, and physical mobile devices were not tested.

The production domain is not available yet. Before publishing, make `og:image` absolute and add `og:url` in `index.html`. Project claims remain limited to the repository content; no new metrics, testimonials, demos, or repository destinations were invented.

## Expressive motion revision

The follow-up revision removes the location badge and hero card, introduces a two-line name reveal (900ms with stagger), a photo wipe, and more visible project hover feedback. Initial entrance animations are no longer suppressed by the page transition wrapper. The earlier performance samples above predate this animation revision and should not be treated as measurements of its longer entrance sequence.

Revision checks passed: build, lint, five viewport widths without overflow, removal of the hero location badge, measured name-transform change during entrance, visible project hover arrow on a browser configured with a fine pointer, project navigation, and static reduced-motion rendering. No runtime exceptions were observed. Desktop and mobile hero screenshots were visually inspected again.

## Technology and social styling restoration

Build and lint passed. At 390px and 1440px, browser checks confirmed that all local technology SVGs load, the marquee moves without page overflow, pause/resume works, and both social icons and the LinkedIn blue background render. Reduced motion shows a single wrapped static list. No browser runtime exceptions were observed.

Follow-up: removed the pause control and hover/focus pause rules as requested. The strip now runs continuously under normal motion settings; reduced motion still renders a static list. Build, lint, and diff checks passed for this change.
