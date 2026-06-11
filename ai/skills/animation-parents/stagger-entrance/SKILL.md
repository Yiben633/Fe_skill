---
name: stagger-entrance
description: Frontend guidance for staggered reveals, cascading card grids, list entrances, feed animation, gallery item choreography, logo cloud reveals, and parent-child motion variants.
---

# Stagger Entrance

Use staggered entrance when a group of related items should appear with rhythm. The goal is to guide scanning, not make users wait for content.

## Learned Patterns From Pasted Templates

- Template gallery cards: reveal cards in small batches, not one-by-one across a long grid.
- Interactive Portfolio Gallery with Hover Video Cards: stagger the initial gallery entrance, then keep hover motion responsive and independent.
- SaaS landing pages and waitlist pages: stagger proof points, logos, features, or pricing bullets subtly.
- Dashboard templates: avoid decorative stagger for dense operational tables; use it only for first-load summaries.

## Timing

- Delay per item: 40-100ms.
- Duration per item: 250-550ms.
- Distance: 8-32px.
- For more than 8-10 items, reduce delay or reveal by row/batch.
- Keep total group entrance under about 800ms for practical UI.

## Motion Patterns

- Fade + translateY as the default.
- Scale in for icons, avatars, or compact badges.
- Slide from side for menus and drawers.
- Row-based reveal for image galleries.
- Parent variants for Framer Motion lists.

## Accessibility And QA

- Respect `prefers-reduced-motion`.
- Render content in the DOM before animation starts.
- Do not stagger long reading text character-by-character.
- Confirm order follows natural reading order.
- Verify no layout shift and no late appearance of critical actions.
