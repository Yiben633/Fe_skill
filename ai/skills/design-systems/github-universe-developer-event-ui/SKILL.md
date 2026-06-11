---
name: github-universe-developer-event-ui
description: Build GitHub Universe-style developer event pages. Use when creating conference landing pages, GitHub-flavored event sites, Mona Sans and Hubot Sans interfaces, bordered grid layouts, developer fair hero sections, subdomain nav bars, agenda schedules, pricing or pass cards, arcade/game modal overlays, cursor trail character animations, WebGL-like hero/footer visuals, testimonial quote sections, and playful software-event marketing pages.
---

# GitHub Universe Developer Event UI

Use this skill to recreate the design language learned from the pasted GitHub Universe 2026 HTML/CSS. The style combines Primer/GitHub ergonomics with a playful developer-event world: Mona Sans typography, pale green-gray canvas, 2px grid borders, green primary CTAs, monospaced metadata, colorful agenda accents, arcade modal overlays, and cursor trails made of tiny code characters.

## Design DNA

- Use a pale green-gray page background, black text, GitHub green accents, and strong 2px borders.
- Keep the layout structured like a product/event system: sticky subdomain nav, max-width content rails, divided sections, and clear CTAs.
- Use Mona Sans for body/UI, Hubot Sans for alternate display moments, and Mona Sans Mono for metadata, times, code-like labels, and ticker text.
- Build sections as bordered grids instead of floating cards.
- Favor square or lightly rounded controls; reserve large rounded shapes for game/arcade modals.
- Add playful software flavor with code syntax labels, ASCII cursor trails, arcade panels, pixel/block visuals, and WebGL-like canvases.
- Respect `prefers-reduced-motion`; animated trails, reveal transitions, and WebGL fallback art must stop or simplify.

## Core Tokens

```css
:root {
  --site-max-width: 1280px;
  --site-bg: #e9edec;
  --site-panel: #f2f5f3;
  --site-text: #1f2328;
  --site-muted: #57606a;
  --site-border: #b6bfb8;
  --site-green: #08872b;
  --site-green-dark: #0d6731;
  --site-yellow: #b6a132;
  --site-purple: #583af7;
  --site-orange: #b04b00;
  --site-pink: #f73678;
  --site-spacing: clamp(20px, 3vw, 32px);
  --font-sans: "Mona Sans", "MonaSansFallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  --font-display: "Hubot Sans", "Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  --font-mono: "Mona Sans Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
```

Use system fallbacks if the variable fonts are not available. Keep font weights in the 400-650 range to mimic Mona/Hubot variable-font behavior.

## Page Shell

```css
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--site-text);
  background: var(--site-bg);
  font-family: var(--font-sans);
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  text-wrap: pretty;
}

.page {
  position: relative;
  overflow-x: hidden;
}

.section-content {
  overflow: hidden;
  padding: 0 var(--site-spacing);
}

@media (min-width: 1280px) {
  .section-content {
    max-width: var(--site-max-width);
    margin: 0 auto;
    border-left: 2px solid var(--site-border);
    border-right: 2px solid var(--site-border);
  }
}

.section-divider {
  border: 0;
  border-top: 2px solid var(--site-border);
}
```

## Typography

```css
.narrow-heading {
  font-family: var(--font-display);
  font-weight: 650;
  font-stretch: 88%;
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.mono-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
```

## Navigation

Use a sticky subdomain navigation with border-bottom and blocky CTA areas. Desktop nav items have large top padding, a left border, and a green underline on hover.

```css
.site-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: var(--site-bg);
  border-bottom: 2px solid var(--site-border);
}

.nav-inner {
  max-width: var(--site-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: stretch;
  border-left: 2px solid var(--site-border);
  border-right: 2px solid var(--site-border);
}

.nav-link {
  display: flex;
  align-items: flex-end;
  padding: 38px 16px 18px;
  border-left: 2px solid var(--site-border);
  font-weight: 500;
  text-decoration: none;
  position: relative;
}

.nav-link:hover {
  background: var(--site-panel);
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--site-green);
  opacity: 0;
}

.nav-link:hover::after {
  opacity: 1;
}
```

## Buttons

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  padding: 12px 16px;
  border: 2px solid var(--site-border);
  border-radius: 0;
  color: var(--site-text);
  background: #fff;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
}

.button-primary {
  color: #fff;
  background: var(--site-green);
  border-color: var(--site-green);
}

.button-primary:hover {
  background: var(--site-green-dark);
  border-color: var(--site-green-dark);
}
```

## Hero

Use a two-column hero on desktop. The visual cell is a WebGL/canvas-like mona or block scene; the text cell has a top and left border.

```css
.hero {
  display: grid;
  gap: 24px;
}

@media (min-width: 1012px) {
  .hero {
    grid-template-columns: 1fr minmax(420px, 700px);
  }

  .hero-copy {
    border-top: 2px solid var(--site-border);
    border-left: 2px solid var(--site-border);
  }
}

.hero-copy {
  padding: var(--site-spacing);
}

.hero-title {
  font-size: clamp(48px, 9vw, 128px);
  line-height: 0.92;
}

.hero-visual {
  min-height: 360px;
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid var(--site-border);
}
```

## Agenda

Agenda rows use a colored 2px top rule per day and a mono time column.

```css
.agenda-day {
  --accent-color: var(--site-green);
  --accent-border: #86ea8d;
  position: relative;
  padding: var(--site-spacing);
  border-top: 2px solid var(--accent-border);
}

@media (min-width: 1012px) {
  .agenda-day {
    display: grid;
    grid-template-columns: 0.66fr 1fr;
    gap: var(--site-spacing);
  }
}

.agenda-time {
  display: block;
  color: var(--accent-color);
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
```

Cycle accents: yellow, green, purple, orange, pink.

## Tickets And Pricing

Tickets use tab buttons above a divided pricing panel. The selected tab has white background, green top border, and a filled radio dot.

```css
.ticket-tabs {
  display: flex;
}

.ticket-tab {
  flex: 1;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--site-spacing) var(--site-spacing) 12px;
  border: 2px solid var(--site-border);
  border-right: 0;
  border-bottom: 0;
  background: var(--site-panel);
  text-align: left;
}

.ticket-tab:last-child {
  border-right: 2px solid var(--site-border);
}

.ticket-tab::after {
  content: "";
  width: 10px;
  height: 10px;
  border: 1.5px solid var(--site-muted);
  border-radius: 50%;
}

.ticket-tab.is-selected {
  background: #fff;
  border-top-color: var(--site-green);
}

.ticket-tab.is-selected::after {
  background: var(--site-green);
  border-color: var(--site-green);
}

.ticket-panel {
  display: grid;
  border-top: 2px solid var(--site-border);
}

@media (min-width: 1012px) {
  .ticket-panel {
    grid-template-columns: 1fr 1fr;
  }
}
```

## Arcade Modal

Arcade/game overlays use a dark fixed dialog and a large centered wrapper. On tall desktop screens the wrapper becomes an 80% width 1280/720 capsule with `border-radius: 50% / 4%`.

```css
.arcade-dialog {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  background: #1d2029f5;
}

.arcade-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: #1c1d1f;
}

@media (min-width: 768px) and (min-height: 800px) {
  .arcade-wrapper {
    width: 80%;
    max-width: 1280px;
    height: auto;
    aspect-ratio: 1280 / 720;
    border-radius: 50% / 4%;
  }
}

.arcade-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 50%;
  color: #fff;
  background: #191f1b;
}
```

## Cursor Trail

Use small fixed blocks with code characters, colorful backgrounds, and `pointer-events: none`. Trail blocks should follow the pointer with staggered easing.

```css
.cursor-trail-block {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 20px;
  height: 20px;
  pointer-events: none;
  display: grid;
  place-items: center;
  font-family: var(--font-mono);
  font-size: 9px;
  text-align: center;
  opacity: 0;
}

@media (hover: none), (pointer: coarse) {
  .cursor-trail-block {
    display: none;
  }
}
```

## Motion Rules

- Animate section rules with `scaleX` from left when the section enters.
- Reveal content with small `translateY(80px-120px)` and opacity, only on desktop.
- Cursor trail, blinking type cursor, and WebGL-like canvases are decorative; disable them for reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## Build Checklist

- Include `sr-only` text for icon-only controls.
- Keep section rails aligned and bordered consistently.
- Use mono uppercase for dates, times, status labels, and code-like CTAs.
- Use green for primary registration CTAs; use yellow/green/purple/orange/pink for agenda accents.
- Make ticket tabs operable with buttons and `aria-selected`.
- Make arcade modal dismissible with Escape and a visible close button.
- Keep all decorative WebGL/cursor trail layers `aria-hidden="true"`.
