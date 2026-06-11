---
name: scroll-reveal
description: Detailed guidance for viewport-based reveal animation, fade-up sections, slide-in media, reveal groups, Intersection Observer, Framer Motion whileInView, GSAP reveal, and reduced-motion fallbacks.
---

# Scroll Reveal

Use scroll reveal when elements should appear as they enter the viewport. A good reveal is almost invisible: smooth, purposeful, and never required to understand the content.

## Learned Patterns From Pasted Templates

- SaaS and marketing pages: reveal hero support copy, feature cards, logo clouds, and testimonials with short fade-up motion.
- Template galleries: reveal rows or small batches so large grids do not take too long.
- Waitlist Hero Section: keep the form visible quickly; do not delay the primary input behind reveal timing.
- Simple Parallax Sticky Footer Landing: combine reveal with parallax only for section endings or final CTAs.

## Main Patterns

- Fade up: default for text blocks, cards, and small sections.
- Slide in: useful for media, split layouts, and editorial sections.
- Stagger group: useful for grids, timelines, project cards, and logos.
- Subtle scale: useful for icons, avatars, and compact metrics.
- Mask reveal: use sparingly for headlines or strong visuals.

## Suggested Values

- Distance: 12-32px for most UI.
- Duration: 300-650ms.
- Stagger delay: 40-100ms per item.
- Threshold: 0.12-0.2.
- Root margin: `0px 0px -10% 0px` to reveal before the element reaches the center.

## Accessibility And QA

- With `prefers-reduced-motion`, remove transforms and show content immediately or with a light fade.
- Content must be readable if JavaScript has not run yet.
- Do not animate every character in long body copy.
- Test fast scroll, slow scroll, mobile, and the final elements near the page bottom.
- Ensure stagger does not make important items appear too late.
