---
name: text-split-animate
description: Frontend guidance for split text animation, line reveal, word reveal, character motion, kinetic typography, scramble text, masked headlines, and editorial hero text entrances.
---

# Text Split Animate

Use split text animation for short, high-impact text such as a hero headline, section title, logo wordmark, or loading title. Do not split long paragraphs or important instructional copy.

## Learned Patterns From Pasted Templates

- An unusual hero: animated type can be the primary hero moment if the layout remains readable.
- Brutalist and futuristic SaaS landing pages: use sharp line or word reveals instead of soft decorative motion.
- Waitlist Hero Section: a quick headline reveal can create polish without delaying the signup form.
- Modern Gen Z Energy Drink Landing Page: energetic type motion can work for campaign pages, but should stop quickly.

## Patterns

- Line reveal for multi-line headlines.
- Word reveal for short sentences.
- Character reveal for logos, labels, or very short phrases.
- Mask reveal for editorial polish.
- Scramble text only when it matches the brand and does not block comprehension.

## Implementation Notes

- Preserve semantic headings and readable DOM text.
- Avoid breaking screen reader pronunciation; use an accessible full-text label when needed.
- Recalculate line splits after font load and viewport changes.
- Keep animated text within fixed or measured containers to avoid clipping.
- Pair with scroll reveal only when the combined delay stays short.

## Accessibility And QA

- With reduced motion, show the final text immediately.
- Test mobile wrapping, font loading, zoom, and localization.
- Ensure the headline is not hidden from crawlers or assistive tech.
- Avoid flashing, jitter, and long character-by-character delays.
