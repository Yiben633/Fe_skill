---
name: counter-animation
description: Frontend guidance for count-up numbers, animated stats, KPI reveal, odometer effects, dashboard metric updates, social proof numbers, and numeric motion in landing pages or apps.
---

# Counter Animation

Use counter animation when numbers need a polished reveal without weakening trust. The animation must always end on the real value, preserve formatting, and avoid noisy repeated playback.

## Learned Patterns From Pasted Templates

- SaaS landing pages and AI platform pages: animate proof metrics once when they enter the viewport.
- Dashboard templates: use short delta transitions for live metrics instead of long count-up animations.
- Template cards with views/likes/users: keep compact tabular numbers stable; animate only when the value changes meaningfully.
- Waitlist pages: use counters for signups, seats, or milestones only when the number is credible and clearly labeled.

## Behavior

- Trigger when the stat first enters the viewport or when fresh data arrives.
- Duration: 600-1500ms for first reveal; 150-400ms for live updates.
- Format during animation with commas, currency, percent, suffixes, and units.
- Prevent repeated playback when users scroll away and back.
- Use tabular numbers or fixed-width containers to avoid layout jump.

## Variants

- Count-up with easing.
- Odometer digit roll.
- Abbreviated values such as `12.4k`.
- Delta flash for dashboard updates.
- Progress completion moment for onboarding or upload flows.

## Accessibility And QA

- Screen readers should receive the final value, not every animation frame.
- With reduced motion, show the final number immediately or use a gentle fade.
- Do not rely on color or motion alone to indicate a metric changed.
- Verify final values, units, rounding, negative values, decimals, and layout stability.
