---
name: interactive-3d-scene
description: Frontend guidance for interactive 3D UI scenes, Three.js hero scenes, 3D keyboard/chat interactions, orbit/drag controls, WebGL product visuals, and 3D-to-2D interface moments.
---

# Interactive 3D Scene

Use this skill when the interface needs an interactive 3D object, scene, or hero experience. Prefer Three.js or React Three Fiber for real 3D work instead of hand-rolling projection and interaction logic.

## Learned Patterns From Pasted Templates

- 3D Keyboard Chat: use 3D controls when they are part of the product metaphor; support pointer, keyboard, and touch fallbacks.
- Globe To Map Transform: combine 3D scene motion with a clear 2D interface state when the user needs to inspect information.
- Futuristic dashboards and AI platform pages: 3D can create a strong first impression, but operational content should stay flat and readable.

## Design Rules

- Make the main 3D scene full-bleed or clearly integrated, not trapped in a decorative preview card.
- Keep controls obvious: drag, orbit, press, or hover states should be discoverable.
- Do not place critical text inside the canvas unless there is an HTML fallback.
- Use real lighting, camera framing, and responsive sizing; avoid blank or cropped canvases.

## Implementation Notes

- Use Three.js or React Three Fiber for rendering, controls, and asset management.
- Clamp camera movement and pointer effects so the object remains framed.
- Pause or reduce animation when offscreen or when the tab is hidden.
- Provide lower-quality settings for mobile and reduced-motion users.
- Verify canvas pixels render after assets load.

## QA

- Check desktop and mobile screenshots for nonblank canvas, correct framing, and no UI overlap.
- Test pointer, touch, keyboard, and reduced-motion paths.
- Confirm WebGL failure fallback is present.
- Watch bundle size and asset load cost.
