---
name: lottie-svg-anim
description: Frontend guidance for Lottie animation, SVG animation, animated icons, vector motion, playback control, branded loaders, v0-style icon motion, empty states, and lightweight UI feedback.
---

# Lottie SVG Anim

Use Lottie or SVG animation when the motion is vector-based, lightweight, and tied to a clear UI moment such as onboarding, empty states, loaders, icons, or short feedback.

## Learned Patterns From Pasted Templates

- v0 icon: branded marks can animate as loaders or transition accents if the loop is short and subtle.
- Sign in with Vercel: icon animation should support the auth action, not distract from it.
- Image Generation Playground and AI tools: small vector loaders can communicate processing without large skeleton screens.
- SaaS landing pages: animated illustrations should reinforce the product concept and stop competing with copy.

## Patterns

- Animated icon on hover, success, error, or loading.
- Lottie illustration for onboarding or empty state.
- SVG stroke draw for logos, paths, or diagrams.
- Masked SVG reveal for brand marks.
- Playback controlled by hover, viewport entry, or state change.

## Implementation Notes

- Prefer inline SVG for simple icon motion and Lottie for complex illustration exported from design tools.
- Keep animation assets compressed and avoid huge JSON payloads.
- Expose state with text as well as animation.
- Pause loops when offscreen or when the tab is hidden.
- Use static SVG fallback for reduced motion or failed asset load.

## QA

- Test asset load failure, dark mode, reduced motion, and high contrast.
- Confirm icons remain recognizable at small sizes.
- Avoid rapid flashing and endless distracting loops.
