---
name: particle-system
description: Frontend guidance for canvas particles, WebGL particles, interactive visual fields, constellation effects, data/AI themed backgrounds, dashboard ambience, and celebratory particle bursts.
---

# Particle System

Use particle systems as a controlled visual layer. They can make a hero or creative scene feel alive, but they can also become noisy, heavy, and distracting.

## Learned Patterns From Pasted Templates

- Futuristic Dashboard and cyberpunk dashboard designs: use particles or grid fields only as restrained ambience behind high-level visuals, not behind dense tables.
- AI platform and agentic landing pages: constellation or network particles can communicate systems, agents, and data flow.
- Image Generation Playground: particles can indicate generation or processing, but should not replace clear loading states.
- Energy drink or campaign pages: particles can be expressive when performance and readability are protected.

## Design Rules

- Limit particle count by viewport size and device capability.
- Keep motion slow around text.
- Use palette, opacity, and blur with restraint.
- Avoid dense particles behind body copy or controls.
- Pause or reduce the system when offscreen.

## Performance

- Use canvas or WebGL for many particles.
- Avoid hundreds of DOM nodes.
- Pause when the tab is hidden.
- Reduce count and effects on mobile.
- Watch FPS, battery impact, and bundle cost.

## Accessibility And QA

- Respect reduced motion and provide a static fallback.
- Avoid flashing or strobe effects.
- Decorative particles should not receive focus or screen reader output.
- Test dark/light backgrounds, mobile, and low-end devices.
