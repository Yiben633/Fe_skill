---
name: page-transition
description: Frontend guidance for route transitions, view transitions, enter/exit animation, shared layout transitions, modal-to-page motion, split-screen auth transitions, and dynamic frame layout changes.
---

# Page Transition

Use page transitions to make navigation feel continuous. They should never hide slow loading, break browser history, or delay important content for decoration.

## Learned Patterns From Pasted Templates

- DynamicFrameLayout: animate layout frame changes with shared bounds, stable aspect ratios, and content that does not jump.
- Modern Animated Sign Up/Sign In Page with Split-Screen Design: use paired enter/exit motion for auth panels while keeping forms immediately focusable.
- Recreate UI from Screenshot and template galleries: use shared card-to-detail motion when opening a preview.
- Portfolio templates: route transitions can be more expressive, but keep scroll restoration and focus management clear.

## Patterns

- Fade/slide route transition.
- Shared element transition for card-to-detail, image preview, or modal-to-page flows.
- Split-screen panel swap for auth/onboarding.
- Wipe or mask transition only when it fits the brand.
- Dynamic frame resize for galleries, previews, or layout builders.

## Timing

- Exit: 120-250ms.
- Enter: 180-400ms.
- Shared layout resize: 250-550ms depending on distance.
- Keep total navigation feedback short; primary content should appear quickly.

## Implementation Notes

- Preserve URL, history, and scroll restoration semantics.
- Move focus to the main heading or first meaningful control after navigation.
- Use stable dimensions for frames and preview cards to prevent layout shift.
- Separate loading states from page transitions.
- For View Transitions API, provide a non-supporting-browser fallback.

## Accessibility And QA

- Respect `prefers-reduced-motion`.
- Do not trap keyboard focus during transitions.
- Test back/forward navigation, direct URL entry, form focus, and mobile viewport changes.
- Confirm transitions do not mask errors or delayed data.
