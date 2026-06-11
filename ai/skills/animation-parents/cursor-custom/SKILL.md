---
name: cursor-custom
description: Frontend guidance for custom cursors, cursor trails, hover cursor states, pointer-follow effects, interactive portfolio cursors, hover video gallery cursors, and branded pointer interactions.
---

# Cursor Custom

Use a custom cursor only when the experience is creative, media-led, or game-like enough to justify it. The cursor must not reduce click accuracy, readability, or keyboard accessibility.

## Learned Patterns From Pasted Templates

- Interactive Portfolio Gallery with Hover Video Cards: change cursor state over media cards, optionally showing "play", "view", or directional intent.
- Pointer AI landing page: use pointer-follow effects as a brand moment, not as global app chrome.
- 3D Keyboard Chat: pointer state can imply drag, press, or orbit when interacting with 3D controls.
- Gallery and portfolio templates: disable custom cursor on touch devices and preserve native focus styles.

## Rules

- Do not replace the cursor across dense operational apps.
- Keep the native pointer as fallback and maintain real hit targets.
- Turn off custom cursor on touch and coarse-pointer devices.
- Do not cover text, small controls, or form fields.
- Respect `prefers-reduced-motion`.

## Behavior

- Follow pointer with transform, not layout positioning.
- Use light easing, but keep the cursor close enough to feel precise.
- Change state for links, buttons, draggable areas, videos, and disabled controls.
- For cursor trails, cap node count and opacity; trails should be decorative and cheap.
- Keep hover/click states available even when the custom cursor is disabled.

## Accessibility And QA

- Keyboard users must not depend on cursor-only feedback.
- Test form fields, text selection, iframes, modals, and drag interactions.
- Confirm pointer events do not block clicks.
- Verify performance on lower-end laptops and mobile fallback behavior.
