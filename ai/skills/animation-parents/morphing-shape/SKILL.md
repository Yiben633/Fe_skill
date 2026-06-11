---
name: morphing-shape
description: Frontend guidance for SVG path morphing, clip-path morphs, blob/shape transitions, globe-to-map transforms, mask reveals, branded loaders, and shape-driven hero visuals.
---

# Morphing Shape

Use this skill when a visual needs to transform between shapes, states, or symbolic forms. Morphing works best as a brand or storytelling device, not as decoration behind dense text.

## Learned Patterns From Pasted Templates

- Globe To Map Transform: use morphing to turn a 3D/global concept into a flat map or interface state; keep the transformation legible and tied to the product story.
- KATACHI and unusual hero concepts: shape motion can carry identity when the rest of the UI stays restrained.
- Image Encryption: mask and reveal effects can communicate transformation, privacy, or processing.
- v0 icon or branded marks: small SVG morphs can work as loaders or transition accents.

## Patterns

- SVG path morph between compatible paths.
- Clip-path or mask morph for image/video reveals.
- Border-radius/blob morph for soft branded shapes.
- 3D-to-2D state transition with opacity, scale, rotation, and projection changes.
- Shape-to-icon transition for loaders, empty states, or section dividers.

## Implementation Notes

- Ensure SVG paths have compatible point structures or use a morphing helper.
- For globe-to-map transitions, avoid pretending projection math is exact unless it is; visual continuity is enough for brand storytelling.
- Keep text outside the morphing layer unless the type itself is the animation target.
- Use transform and opacity alongside path morphing to hide small interpolation artifacts.
- Provide a static final state for reduced motion.

## QA

- Check that the source and target shapes are recognizable.
- Confirm the morph does not cover content or create layout shift.
- Test mobile performance and reduced-motion fallback.
- Avoid endless high-contrast loops in reading areas.
