---
name: canva-editor-ui-system
description: Build Canva-style editor and app interface systems. Use when creating Canva-inspired design editors, compact creation panels, inspector sidebars, tokenized SaaS UI, 320px asset cards, modal overlays with blur or dark scrim, bottom snackbars, chip inputs, rounded icon buttons, selection outlines, gradient headings, upload/preview cards, toolbar controls, template galleries, and responsive editor workspace layouts using Canva Sans-like typography.
---

# Canva Editor UI System

Use this skill to recreate the design language learned from the pasted Canva CSS chunks. The source is a dense app UI system: token-heavy variables, Canva Sans typography, compact 8px spacing, rounded controls, 320px preview panels, editor overlays, focus/hover field states, chip inputs, bottom snackbars, and selection rectangles over a design canvas.

## Design DNA

- Treat the screen as an app workspace, not a marketing page.
- Use tokenized colors and radii; avoid hardcoding many one-off values.
- Build compact controls with 8px and 16px spacing.
- Use `Canva Sans`, then Noto/System fallbacks.
- Keep side panels narrow: 320px is a common preview/card width, with 408px, 432px, 480px, and 600px for dialogs.
- Use soft neutral surfaces with purple/blue accents: Canva purple `#8b3dff`, link blue `#3d8bff`, warning amber `#fdbd68`, cyan gradients.
- Use rounded rectangles for controls and circular 40px icon buttons.
- Show states clearly: hover border, focus border, error border, disabled opacity/cursor, selection outlines.
- Place snackbars and helper bars at the bottom with safe-area-aware padding.

## Tokens

```css
:root {
  --canva-bg: #f1f3f5;
  --canva-surface: #ffffff;
  --canva-elevated: #ffffff;
  --canva-muted: #f6f7f8;
  --canva-border: #d9dce1;
  --canva-border-hover: #b7bdc8;
  --canva-focus: #8b3dff;
  --canva-text: #0d1216;
  --canva-subtle: #667085;
  --canva-disabled: #a5adba;
  --canva-purple: #8b3dff;
  --canva-blue: #3d8bff;
  --canva-warning: #fdbd68;
  --canva-cyan: #abeeee;
  --canva-radius-sm: 4px;
  --canva-radius: 8px;
  --canva-radius-lg: 16px;
  --canva-pill: 999px;
  --canva-shadow: 0 8px 24px rgba(64, 79, 109, 0.16);
  --canva-font: "Canva Sans", "Noto Sans Variable", "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
}
```

## Base App Shell

```css
html {
  font-size: 62.5%;
}

body {
  margin: 0;
  width: 100%;
  min-height: 100vh;
  font-family: var(--canva-font);
  font-size: 1.4rem;
  background: var(--canva-bg);
  color: var(--canva-text);
  touch-action: manipulation;
  -webkit-overflow-scrolling: touch;
}

button,
input,
textarea,
select {
  font: inherit;
}

[tabindex],
button {
  -webkit-tap-highlight-color: transparent;
}
```

## Editor Layout

Use a full-height app with top bar, compact left rail, canvas stage, and right inspector.

```css
.editor-shell {
  height: 100vh;
  display: grid;
  grid-template-rows: 56px 1fr;
  overflow: hidden;
}

.editor-body {
  min-height: 0;
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr) minmax(280px, 320px);
}

.toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--canva-surface);
  border-bottom: 1px solid var(--canva-border);
}

.rail,
.inspector {
  min-height: 0;
  background: var(--canva-surface);
  border-right: 1px solid var(--canva-border);
}

.inspector {
  border-right: 0;
  border-left: 1px solid var(--canva-border);
  overflow: auto;
}

.canvas-stage {
  position: relative;
  min-width: 0;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: #eef0f4;
}
```

Stack panels on mobile and keep the canvas visible.

## Icon Buttons

```css
.icon-button {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: rgba(64, 79, 109, 0.06);
  color: var(--canva-text);
}

.icon-button:hover {
  background: rgba(64, 79, 109, 0.12);
}

.icon-button:focus-visible {
  outline: 2px solid var(--canva-focus);
  outline-offset: 2px;
}
```

## Input And Chip Field

The source uses field wrappers with background, border, hover/focus/error states, wrapping chips, and hidden native input chrome.

```css
.field {
  background: var(--canva-surface);
  border: 1px solid var(--canva-border);
  border-radius: var(--canva-radius);
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 12px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.field:hover {
  border-color: var(--canva-border-hover);
}

.field:focus-within {
  border-color: var(--canva-focus);
  box-shadow: 0 0 0 1px var(--canva-focus) inset;
}

.field.is-error {
  border-color: #e25c5c;
}

.field.is-disabled {
  color: var(--canva-disabled);
  background: #eef0f3;
  cursor: not-allowed;
}

.field input {
  min-width: 8px;
  width: 100%;
  border: 0;
  outline: 0;
  color: inherit;
  background: transparent;
}

.chip-field {
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  max-width: 200px;
  height: 28px;
  padding: 0 8px;
  border-radius: var(--canva-radius);
  background: rgba(64, 79, 109, 0.08);
  white-space: nowrap;
}
```

## Panels And Preview Cards

Use fixed practical widths and center preview content.

```css
.panel-section {
  padding: 16px;
}

.preview-card {
  width: 320px;
  max-width: 100%;
  max-height: 320px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid var(--canva-border);
  border-radius: var(--canva-radius-lg);
  background: var(--canva-surface);
}

.media-thumb {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: var(--canva-radius);
  background: linear-gradient(135deg, #abeeee, #8b3dff);
}

.helper-card {
  border-radius: var(--canva-radius);
  background: #f7f4ff;
  padding: 16px;
  position: relative;
}
```

## Gradient Headings

```css
.gradient-title {
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.gradient-title span {
  display: block;
  color: transparent;
  background: linear-gradient(to bottom right, #0097a0, #5a32fa, #7d2ae8);
  background-clip: text;
  -webkit-background-clip: text;
  filter: drop-shadow(0 0 4px #fff);
}
```

## Selection Box

Use an absolute overlay with a purple outline and translucent fill.

```css
.selection-layer {
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
}

.selection-box {
  position: absolute;
  border: 1px solid var(--canva-purple);
  box-sizing: border-box;
  contain: strict;
  will-change: transform;
}

.selection-box::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: var(--canva-purple);
  opacity: 0.15;
}
```

## Modal Overlay

The source uses fixed overlays, optional dark scrims, optional blur, content that enters with translate/scale, and safe-area padding.

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  background: rgba(16, 18, 25, 0.7);
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ease-in-out;
}

.modal-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

.modal {
  width: min(432px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  padding: 32px;
  border-radius: var(--canva-radius-lg);
  background: var(--canva-surface);
  box-shadow: var(--canva-shadow);
  transform: translateY(24px) scale(0.94);
  transition: transform 0.2s cubic-bezier(0, 0, 0.13, 1);
}

.modal-overlay.is-open .modal {
  transform: translateY(0) scale(1);
}
```

## Bottom Snackbar

```css
.snackbar-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32px;
  z-index: 5;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.snackbar {
  pointer-events: all;
  width: calc(100% - 16px);
  max-width: 670px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  border-radius: var(--canva-radius-lg);
  background: var(--canva-surface);
  box-shadow: var(--canva-shadow);
  transform: translateY(110%);
  transition: transform 0.3s ease-out;
}

.snackbar.is-visible {
  transform: translateY(0);
}
```

## Build Checklist

- Use real form controls, buttons, and labels; do not make fake controls with divs.
- Preserve focus states with visible outlines or inset focus borders.
- Use compact widths: 160px for small logos/actions, 320px for previews, 408px/432px for dialogs, 480px for wider popovers.
- Use `pointer-events: none` on canvas selection overlays and bottom overlay containers; enable it only on the actual snackbar.
- Add disabled states with `cursor: not-allowed` and opacity around 0.45.
- Use safe-area padding for fixed overlays on mobile.
- Keep editor panes `min-height: 0` so internal scroll containers work.
- Disable or shorten motion for `prefers-reduced-motion`.
