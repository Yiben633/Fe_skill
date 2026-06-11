---
name: scroll-animation
description: Frontend guidance for scroll-triggered animation, Lenis smooth scroll, Framer Motion scroll effects, parallax sections, sticky footer reveals, pinned storytelling, infinite image strips, and section entrance choreography.
---

# Scroll Animation

Use this skill when a page needs motion driven by scroll position or viewport entry. Keep scroll effects readable, reversible, and fast; the animation should clarify the page rhythm instead of trapping the user.

## Learned Patterns From Pasted Templates

- Modern energy drink landing page with Lenis Smooth Scroll and Framer Motion: use smooth scrolling only when the page is visual/editorial and the native feel remains predictable.
- Simple Parallax Sticky Footer Landing: reveal a footer or final CTA through depth, but keep the footer reachable with normal scroll.
- Infinite Scrolling Images: create a horizontal or vertical media loop with duplicated content, fixed item sizes, and pause-on-hover when interactive.
- Interactive Portfolio Gallery with Hover Video Cards: combine scroll reveal for the gallery grid with hover motion handled by the media/card skill.
- Waitlist Hero Section and SaaS landing pages: use subtle section entrance and progress cues instead of heavy pinned narratives.

## Pattern Selection

- Fade/slide reveal: default for copy, cards, images, and section blocks.
- Stagger: use for repeated cards, logos, timelines, and feature grids.
- Parallax: use sparingly on media/background layers, not on core reading text.
- Sticky/pinned panels: use only when the story needs a fixed stage; avoid long pinned sequences on mobile.
- Infinite media strip: use for social proof, gallery previews, image walls, or brand texture.

## Implementation Notes

- Prefer transforms and opacity; avoid animating layout properties during scroll.
- For Framer Motion, use `whileInView`, `useScroll`, and `useTransform` with conservative ranges.
- For Lenis, keep keyboard, anchor links, and reduced-motion behavior intact.
- For infinite strips, duplicate the item array, set stable dimensions, and animate the track, not individual layout.
- Recalculate scroll-linked measurements when lazy images, fonts, or dynamic content load.

## Timing

- Reveal distance: 12-40px for most UI.
- Duration: 300-700ms for entrance effects.
- Stagger: 40-120ms per item, shorter for large groups.
- Parallax strength: subtle, usually 5-15% of the visual height.
- Infinite strip speed: slow enough to inspect media; pause or slow on hover/focus when cards are actionable.

## Accessibility And QA

- Respect `prefers-reduced-motion`; disable smooth scroll, parallax, and long scroll-linked motion when requested.
- Content must remain visible and understandable if JavaScript fails.
- Do not trap scroll or hide essential information behind animation timing.
- Test slow scroll, fast scroll, mobile viewport, keyboard navigation, anchor links, and browser back/forward.
- Confirm no layout shift when revealed elements enter.
