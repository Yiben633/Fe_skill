---
name: infinite-media-scroll
description: Frontend guidance for infinite scrolling images, marquee galleries, looping media strips, auto-scrolling logo/image rails, continuous testimonial tracks, and seamless carousel loops.
---

# Infinite Media Scroll

Use this skill when a visual rail should loop continuously, such as image strips, logo clouds, template previews, testimonial cards, or gallery teasers.

## Learned Patterns From Pasted Templates

- Infinite Scrolling Images: duplicate the media set, animate the track, and hide the reset point.
- Template/gallery pages: use stable aspect ratios and predictable card widths so the loop never jumps.
- Portfolio galleries: pause or slow the loop when the user hovers, focuses, or opens media.

## Implementation Notes

- Duplicate content at least once and animate from `0` to `-50%` when both halves match.
- Use `transform: translate3d(...)` on the track.
- Set fixed item dimensions or responsive aspect ratios.
- Avoid lazy-loading only the second duplicated half; both halves must render before the loop is visible.
- Provide manual controls if the carousel contains important or actionable content.

## Accessibility And QA

- Respect `prefers-reduced-motion` by stopping the loop or showing a static grid.
- Pause on hover and focus for readable/actionable cards.
- Do not auto-scroll form controls or primary navigation.
- Check the seam at desktop and mobile widths.
- Confirm images have useful alt text when content is meaningful.
