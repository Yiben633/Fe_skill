---
name: godly-infinite-inspiration-grid-ui
description: Build Godly-style web design inspiration indexes and spatial gallery interfaces. Use when creating curated website inspiration boards, infinite draggable canvas grids, floating glass navigation pills, superellipse rounded controls, card overlays with project names and external links, filter/reset controls, Inter or Tailwind-like neutral UI systems, translucent chrome, hover-scale website preview cards, video badges, and pan/zoom gallery experiences.
---

# Godly Infinite Inspiration Grid UI

Use this skill to recreate the design language learned from the pasted Godly inspiration index. The style is a full-viewport spatial gallery rather than a normal feed: a white canvas, floating translucent controls, draggable website-preview cards, and tiny overlays that appear only when the user hovers a card.

## Design DNA

- Treat the page as an interactive canvas, not a stacked document.
- Use a clean white background with black text and neutral translucent chrome.
- Keep the interface minimal: fixed brand/nav at top left, action at top right, filters at bottom center, reset at bottom right.
- Use Inter or a similar modern sans stack with tight, utility-like sizing.
- Make website cards feel physical: fixed-size preview rectangles, hover scale, soft shadow, and labels floating over the media.
- Prefer rounded pills and superellipse-like controls. Approximate superellipse corners with high border radius and soft shadows when native support is unavailable.
- Hide metadata until hover; the preview image or gradient should carry the main visual weight.

## Visual Tokens

```css
:root {
  --godly-bg: #ffffff;
  --godly-text: #000000;
  --godly-muted: rgba(64, 64, 64, .72);
  --godly-glass: rgba(115, 115, 115, .78);
  --godly-glass-strong: rgba(82, 82, 82, .86);
  --godly-glass-soft: rgba(245, 245, 245, .74);
  --godly-focus: #2dd4bf;
  --godly-card-w: 360px;
  --godly-card-h: 225px;
  --godly-cell-w: 424px;
  --godly-cell-h: 289px;
  --godly-pill-radius: 999px;
  --godly-superellipse: 22px;
  --godly-shadow: 0 18px 36px rgba(0, 0, 0, .16);
  --godly-font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

## Layout Recipe

1. Full viewport root with `overflow: hidden` and a white background.
2. Fixed top-left control group: circular logo button plus a pill nav with two links.
3. Fixed top-right action pill such as Subscribe, Submit, or Save.
4. Full-screen `role="application"` pan surface with `touch-action: none`.
5. Absolute world layer centered at `50% 50%`; move it with `translate3d(x, y, 0)`.
6. Website cards placed in a repeated grid using fixed cell dimensions.
7. Fixed bottom-center filter pill with a small keyboard-hint chip.
8. Fixed bottom-right reset control that recenters the world.

## Infinite Canvas Pattern

Use a finite repeated card set that behaves like an infinite board. Keep the interaction deterministic and lightweight.

```js
const state = { x: 0, y: 0, drag: false, startX: 0, startY: 0, originX: 0, originY: 0 };

surface.addEventListener("pointerdown", (event) => {
  state.drag = true;
  state.startX = event.clientX;
  state.startY = event.clientY;
  state.originX = state.x;
  state.originY = state.y;
  surface.setPointerCapture(event.pointerId);
});

surface.addEventListener("pointermove", (event) => {
  if (!state.drag) return;
  state.x = state.originX + event.clientX - state.startX;
  state.y = state.originY + event.clientY - state.startY;
  world.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
});
```

## Card Pattern

- Cell: `424px x 289px`; preview card: `360px x 225px`.
- Card media uses `object-fit: cover`, a generated gradient, or real website screenshot.
- Hover scales to `1.08-1.1` and raises shadow without changing layout.
- Bottom-left label: translucent dark pill, white text, hidden until hover.
- Bottom-right external-link button: 28px circle, hidden until hover.
- Optional top-right video badge: 24px circle with a play glyph.
- Use `pointer-events: auto` on cards and disable drag start from interactive buttons.

```css
.godly-card {
  position: relative;
  width: var(--godly-card-w);
  height: var(--godly-card-h);
  overflow: hidden;
  border-radius: var(--godly-superellipse);
  background: #f5f5f5;
  transition: transform .15s ease, box-shadow .15s ease;
}

.godly-card:hover {
  z-index: 5;
  transform: scale(1.1);
  box-shadow: var(--godly-shadow);
}

.godly-card:hover .godly-card-control {
  opacity: 1;
  transform: translateY(0);
}
```

## Floating Chrome

- Use `position: fixed` and high z-index.
- Use `backdrop-filter: blur(14px)` on neutral translucent backgrounds.
- Controls should be small, pill-shaped, and icon-friendly.
- Focus states need a visible teal ring; do not rely on hover alone.

## Responsive Notes

- On screens below 720px, reduce card size to about `280px x 175px` and cell size to about `328px x 226px`.
- Keep fixed controls within safe padding and allow top nav pills to shrink.
- Bottom filter remains visible; reset may become a compact icon-only button.
- Avoid body scrolling unless the interaction is intentionally disabled.

## Reuse Checklist

- The first viewport must show cards immediately, not a marketing hero.
- The canvas should drag with mouse and touch.
- Hover overlays must not resize the card or shift the grid.
- Reset recenters the world.
- Keyboard focus is visible on all floating controls and card actions.
- Text remains short enough to fit in rounded pills on mobile.
