---
name: scroll-progress
description: Frontend guidance for reading progress bars, section progress, scroll-linked indicators, active-heading navigation, pinned story progress, and long landing-page progress cues.
---

# Scroll Progress

Use scroll progress when the user benefits from knowing where they are inside a long article, case study, dashboard narrative, or scroll-driven landing page. Progress is a secondary signal; it should not cover navigation or become the only way to move around.

## Learned Patterns From Pasted Templates

- Long SaaS and marketing templates: show restrained top progress or active-section navigation for dense pages.
- Scroll storytelling pages: pair pinned sections with a section/dot indicator so the user understands how much remains.
- Infinite Scrolling Images: do not show page progress for decorative infinite loops; show progress only for finite content.
- Simple Parallax Sticky Footer Landing: progress should reach 100% at the real end of content, including the sticky footer reveal.

## Patterns

- Top reading progress bar.
- Sticky sidebar active-heading progress.
- Dot/step progress for section-based storytelling.
- Circular progress for small containers or cards.
- Progress tied to active section, chapter, or route state.

## Behavior

- Compute progress from real scrollable content height.
- Update via `transform: scaleX()` or CSS variables for smooth rendering.
- Recalculate when lazy images, dynamic content, or font loading changes height.
- Keep indicators below safe areas and away from fixed nav overlap.
- Use intersection observers for active sections instead of fragile scroll pixel thresholds when possible.

## Accessibility And QA

- If decorative, hide the progress bar from screen readers.
- If meaningful, expose `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- Do not make progress the only navigation affordance.
- Confirm the value reaches 0% at the top and 100% at the real bottom.
- Test mobile, zoomed text, lazy-loaded media, and browser back/forward scroll restoration.
