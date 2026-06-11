---
name: wepresent-immersive-time-capsule-ui
description: Build WePresent/WeTransfer-style immersive editorial time-capsule experiences. Use when creating fullscreen interactive art or story pages, Marina Abramovic Traces-inspired interfaces, fixed WebGL wallpaper apps, no-scroll narrative landing screens, enter or skip intro panels, sound/headphones prompts, red full-screen menus, object info overlays, quote and artwork overview panels, custom glowing cursors, mute/read-more controls, and cinematic archival digital exhibition interfaces.
---

# WePresent Immersive Time Capsule UI

Use this skill to recreate the design language learned from the pasted WePresent/WeTransfer time-capsule interface. The style is a fullscreen, no-scroll, editorial art experience: black 3D stage, hidden system cursor, glowing red custom cursor, sparse fixed controls, centered intro copy, red menu overlay, and compact object information panels.

## Design DNA

- Treat the page as a locked viewport application, not a document page.
- Use a black or near-black stage with a fixed wallpaper/canvas layer behind all UI.
- Hide the default cursor on pointer devices and replace it with a soft red glowing cursor.
- Keep UI at the screen edges: logo top-left, menu top-right, read-more bottom-center, mute bottom-right.
- Use high-contrast white text and a vivid red accent, especially for menus and cursor glow.
- Pair clean grotesk text with a delicate italic serif highlight for artist names or emotional phrases.
- Make intro states feel ceremonial: centered uppercase copy, enter button, headphones/sound hint, optional skip.
- Keep information panels compact, absolute/fixed, and object-focused; use reveal/extended states.

## Tokens

```css
:root {
  --trace-bg: #000;
  --trace-fg: #fff;
  --trace-red: #fd4344;
  --trace-dim: rgba(0, 0, 0, 0.62);
  --trace-line: rgba(255, 255, 255, 0.35);
  --trace-soft: rgba(255, 255, 255, 0.72);
  --trace-ui-padding: 20px;
  --trace-font: "FaktProBlond", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --trace-medium: "FaktProMedium", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --trace-serif: "GTAlpinaStandardThinItalic", Georgia, serif;
}

@media (min-width: 720px) {
  :root { --trace-ui-padding: 25px; }
}

@media (min-width: 1200px) {
  :root { --trace-ui-padding: 35px; }
}
```

## Base Shell

Use a fixed viewport and disable browser gestures that break immersion.

```css
html,
body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  background: var(--trace-bg);
}

body {
  overflow: hidden;
  cursor: none;
  color: var(--trace-fg);
  font-family: var(--trace-font);
  user-select: none;
  overscroll-behavior: none;
}

we-wallpaper,
.wallpaper {
  display: block;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
```

On touch devices or reduced-motion contexts, restore a normal cursor and simplify animation.

## Wallpaper Stage

Build the main scene as a fixed black 3D/canvas layer. WebGL, Three.js, canvas, video, or image sequences can all work as long as the scene fills the viewport.

```css
.wrapper-3d {
  position: fixed;
  inset: 0;
  z-index: 0;
  background: #000;
  overflow: hidden;
}

.wrapper-3d canvas,
.wrapper-3d video,
.wrapper-3d img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Intro Panel

The intro is centered, uppercase, and restrained. It should sit over the stage before the user enters.

```css
.intro-text-panel-3d {
  position: fixed;
  inset: 0;
  z-index: 5;
  display: grid;
  place-items: center;
  padding: var(--trace-ui-padding);
  background: rgba(0, 0, 0, 0.72);
  text-align: center;
}

.intro-text-panel-3d .body {
  max-width: 550px;
  font-family: var(--trace-medium);
  font-size: clamp(18px, 2.1vw, 24px);
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.alpina {
  font-family: var(--trace-serif);
  font-style: italic;
  text-transform: none;
  letter-spacing: 0;
}
```

Use a simple enter button and a small headphones hint below it.

## Edge Controls

Use fixed controls with minimal styling.

```css
.site-logo {
  position: fixed;
  top: var(--trace-ui-padding);
  left: var(--trace-ui-padding);
  z-index: 4;
  width: 28vw;
  min-width: 180px;
  max-width: 340px;
}

.open-menu {
  position: fixed;
  top: var(--trace-ui-padding);
  right: var(--trace-ui-padding);
  z-index: 8;
  width: 40px;
  height: 24px;
  border: 0;
  background: transparent;
  color: inherit;
}

.open-menu span {
  display: block;
  height: 2px;
  margin-bottom: 7px;
  background: currentColor;
  transition: width 180ms ease;
}

.open-menu span:nth-child(2) { width: 80%; }
.open-menu span:nth-child(3) { width: 60%; }
.open-menu:hover span { width: 100%; }

.read-more {
  position: fixed;
  left: 50%;
  bottom: var(--trace-ui-padding);
  z-index: 4;
  transform: translateX(-50%);
  opacity: 0.7;
  font-family: var(--trace-medium);
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.mute-button {
  position: fixed;
  right: var(--trace-ui-padding);
  bottom: var(--trace-ui-padding);
  z-index: 4;
}
```

## Red Menu Overlay

The main menu is a fixed red panel that enters from above. Keep text white, large, and editorial.

```css
.main-menu {
  position: fixed;
  inset: 0;
  top: -100%;
  z-index: 7;
  display: grid;
  align-items: end;
  padding: var(--trace-ui-padding);
  background: var(--trace-red);
  color: #fff;
  transition: top 520ms cubic-bezier(0.76, 0, 0.24, 1);
}

.main-menu.is-open {
  top: 0;
}

.main-menu nav {
  display: grid;
  gap: 0.2em;
  font-family: var(--trace-medium);
  font-size: clamp(42px, 9vw, 116px);
  line-height: 0.9;
  text-transform: uppercase;
}
```

## Object Info Panel

Use an expandable object panel for quotes, provenance, and overview data.

```css
.pain-menu {
  position: fixed;
  left: var(--trace-ui-padding);
  bottom: calc(var(--trace-ui-padding) + 54px);
  z-index: 4;
  width: min(420px, calc(100vw - var(--trace-ui-padding) * 2));
  color: #fff;
}

.pain-menu .panel {
  display: none;
  padding: 18px;
  border: 1px solid var(--trace-line);
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(12px);
}

.pain-menu.extended .panel {
  display: block;
}

.pain-menu .quote {
  font-family: var(--trace-serif);
  font-size: clamp(24px, 4vw, 42px);
  line-height: 1.05;
}

.pain-menu .overview {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px 16px;
  margin-top: 18px;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

## Custom Cursor

Use a fixed, pointer-events-none cursor with a red halo. Scale or fade it on hover states.

```css
.cursor {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 14px;
  height: 14px;
  pointer-events: none;
  transform: translate3d(-50%, -50%, 0);
  mix-blend-mode: screen;
}

.cursor .circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--trace-red);
  box-shadow: rgb(253, 67, 68) 0 0 28.6px 9.5px;
}

@media (hover: none), (pointer: coarse) {
  body { cursor: auto; }
  .cursor { display: none; }
}
```

## Implementation Checklist

- Lock the viewport and prevent document scrolling.
- Put the immersive scene in a fixed full-screen layer.
- Keep all persistent UI as edge controls above the scene.
- Use red only as a strong accent: cursor, menu, key active states.
- Give intro, video splash, and object panels their own z-index layers.
- Use real buttons for controls and accessible labels even when the visual UI is minimal.
- Provide reduced-motion and touch fallbacks.
- Never let overlay text exceed the viewport on mobile; keep panels width-constrained.
