---
name: hover-media-gallery
description: Frontend guidance for hover video cards, interactive portfolio galleries, media previews, pointer-aware gallery cards, image/video card reveals, and gallery hover micro-interactions.
---

# Hover Media Gallery

Use this skill when cards in a gallery preview video, images, metadata, or actions on hover/focus. The gallery should feel responsive while still working for touch and keyboard users.

## Learned Patterns From Pasted Templates

- Interactive Portfolio Gallery with Hover Video Cards: reveal or autoplay muted previews on hover, keep metadata scan-friendly, and support click-through to detail pages.
- Template galleries: card hover overlays should not obscure the title or create accidental clicks.
- Portfolio templates: combine a small image movement, preview playback, and cursor state only when each adds clarity.

## Interaction Patterns

- Hover video preview with muted inline playback.
- Image scale or pan within a fixed aspect-ratio frame.
- Metadata/action overlay with accessible focus behavior.
- Pointer-follow highlight or custom cursor state.
- Card-to-detail shared transition.

## Implementation Notes

- Never resize the card on hover; animate inner media only.
- Use `playsInline`, muted previews, and explicit controls for full playback.
- Preload cautiously; avoid loading many videos at once.
- On touch devices, use tap-to-open or visible actions instead of hover-only UI.
- Keep overlay contrast high and text unobstructed.

## Accessibility And QA

- Keyboard focus must reveal the same actions as hover.
- Respect reduced motion and data-saving preferences.
- Confirm videos stop when cards leave hover/focus or scroll out of view.
- Test dense grids, mobile layouts, and slow connections.
