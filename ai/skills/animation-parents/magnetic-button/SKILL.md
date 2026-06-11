---
name: magnetic-button
description: Frontend guidance for magnetic buttons, pointer attraction, hover-follow CTAs, cursor-aware buttons, playful landing page interactions, and branded pointer micro-interactions.
---

# Magnetic Button

Use magnetic buttons for special CTAs in creative, campaign, portfolio, or branded landing pages. Do not apply this effect to every button in a dense product UI.

## Learned Patterns From Pasted Templates

- Pointer AI landing page: pointer-aware motion can become a brand signature when used on a small number of CTAs.
- Waitlist and SaaS landing pages: magnetic motion can make the primary CTA feel polished, but forms and secondary links should stay stable.
- Interactive portfolio pages: combine magnetic buttons with custom cursor only when click precision remains strong.

## Motion Rules

- Move the visual layer lightly, usually 4-16px.
- Let inner text/icon move less than the outer wrapper for a tactile feel.
- Reset quickly and smoothly on pointer leave.
- Do not change the layout box or real hit target.
- Disable or simplify on touch devices.

## Implementation Notes

- Use transforms instead of `top`/`left`.
- Calculate pointer offset from the element center.
- Clamp movement so the button does not run away from the pointer.
- Keep normal hover and focus states when motion is disabled.

## Accessibility And QA

- Keyboard focus must be clear without pointer motion.
- Respect reduced motion.
- Verify hit target accuracy, text sharpness, and mobile fallback.
- Avoid this effect on destructive actions or compact toolbars.
