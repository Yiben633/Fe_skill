---
name: vercel-ship-geist-conference-ui
description: Build Vercel Ship-style Geist conference and launch-event interfaces. Use when creating dark conference landing pages, developer event pages, agent/platform launch pages, monochrome Vercel-like design systems, Geist typography systems, Geist Mono metadata, Geist Pixel Square/Circle display headlines, oversized city/date lists, sponsor logo grids, ticket CTAs, badge systems, drawer/modals, cookie banners, crop overlays, spinner/loading states, and precise token-driven SaaS event UI.
---

# Vercel Ship Geist Conference UI

Use this skill to recreate the design language learned from the Vercel Ship 26 conference source. The style is a precise dark event interface built on Geist typography, strict monochrome tokens, huge pixel display text, compact mono metadata, rounded Geist buttons, sponsor grids, city/date lists, and subtle modal/drawer systems.

## Design DNA

- Use dark theme first: black/near-black surfaces with crisp white and gray type.
- Build around a Geist-style typography stack: sans for UI, mono for metadata, pixel display for event hero and city lists.
- Use oversized pixel headings with tight or negative tracking.
- Keep UI controls small, exact, and token-driven: 32px, 40px, and 48px heights.
- Use rounded badges and buttons with subtle borders, not decorative shadows.
- Combine marketing impact with developer product precision.
- Treat sponsors, schedule rows, and city links as grid systems with thin borders.
- Use subtle hover states: gray alpha backgrounds, opacity shifts, and color fade.
- Add accessible skip links, visually hidden text, focus rings, and reduced-motion support.

## Font System

Source fonts observed:

- `Geist`: primary variable sans, weights `100 900`.
- `geistMonoFont`: primary mono variable font.
- `GeistPixelSquare`: pixel square display, weight `500`.
- `GeistPixelCircle`: pixel circle display, weight `500`.

Use the stack below when the actual files are unavailable:

```css
:root {
  --font-sans: Geist, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  --font-mono: "Geist Mono", "SFMono-Regular", "Roboto Mono", Menlo, Monaco, Consolas, monospace;
  --font-pixel-square: "GeistPixelSquare", "Geist Mono", monospace;
  --font-pixel-circle: "GeistPixelCircle", "Geist Mono", monospace;
}
```

Use `font-pixel-circle` for huge city/date rows and footer headings. Use `font-pixel-square` for hero labels, badges, and stage-like title fragments. Keep body copy in `font-sans`.

## Core Tokens

```css
:root {
  --ship-bg-100: #000000;
  --ship-bg-200: #0a0a0a;
  --ship-bg-300: #111111;
  --ship-fg-1000: #ffffff;
  --ship-fg-900: #ededed;
  --ship-gray-700: #a1a1a1;
  --ship-gray-500: #666666;
  --ship-gray-300: #333333;
  --ship-gray-200: #222222;
  --ship-alpha-200: rgba(255, 255, 255, .08);
  --ship-alpha-400: rgba(255, 255, 255, .16);
  --ship-blue: #0070f3;
  --ship-accent-bg: #333333;
  --ship-radius: 6px;
  --ship-radius-lg: 12px;
  --ship-header-height: 92px;
  --ship-focus-ring: 0 0 0 2px #000, 0 0 0 4px #fff;
}
```

## Layout Recipe

1. Header: fixed or sticky, `92px` tall, black translucent background, Vercel-like mark, mono nav, ticket CTA.
2. Hero: full viewport or near-full viewport, centered, huge pixel headline, city/date metadata, ticket badge.
3. Product/event promise: short sans paragraph, max width around `640px`.
4. CTA row: primary white button, secondary outline/dark button, both rounded `6px` or pill.
5. Stage/schedule section: bordered cards in a grid with mono time labels and sans speaker text.
6. Sponsors: logo grid with uniform `140px` cells and subtle hover background.
7. Next stops/cities: full-width list, pixel-circle type, row borders, dates in nested spans.
8. Footer: monochrome links, uppercase mono legal copy, small social buttons.
9. Optional overlays: bottom drawer, modal, cookie banner, crop overlay, or spinner using Geist tokens.

## Component Patterns

### Pixel Hero

```html
<section class="ship-hero">
  <span class="ship-badge">Ship 26 / New York City</span>
  <h1>Build, deploy, and scale agents.</h1>
  <p>One day of product launches, technical sessions, and live demos.</p>
</section>
```

```css
.ship-hero h1 {
  font-family: var(--font-pixel-square);
  font-size: clamp(3.2rem, 12vw, 11rem);
  line-height: .86;
  letter-spacing: -.05em;
  text-wrap: balance;
  -webkit-text-stroke: .02rem currentColor;
}
```

### Geist Button

```css
.geist-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: background .15s, color .15s, border-color .15s, transform .15s;
}

.geist-button.primary {
  background: var(--ship-fg-1000);
  color: var(--ship-bg-100);
}

.geist-button.secondary {
  border: 1px solid var(--ship-alpha-400);
  background: var(--ship-bg-300);
  color: var(--ship-fg-1000);
}
```

### Badge

```css
.ship-badge {
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: var(--ship-fg-1000);
  color: var(--ship-bg-100);
  font-size: 12px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
```

### City List

```css
.city-row {
  display: flex;
  align-items: center;
  min-height: clamp(90px, 16vw, 180px);
  border-top: 1px solid var(--ship-gray-200);
  font-family: var(--font-pixel-circle);
  font-size: clamp(2.25rem, 9vw, 8rem);
  line-height: 1.05;
  letter-spacing: -.04em;
  transition: color .1s, border-color .1s;
}

.city-list:hover .city-row:not(:hover) {
  color: var(--ship-gray-300);
}
```

### Drawer And Modal

- Use `position: fixed`.
- Bottom drawer on mobile, centered modal on desktop.
- Animate with `cubic-bezier(.32, .72, 0, 1)`.
- Overlay uses `rgba(0, 0, 0, .7)`.
- Modal surface uses `--ship-bg-300`, `12px` radius, and a 1px gray border.

### Spinner

Use segmented opacity animation rather than a heavy loader:

```css
.spinner-line {
  animation: spinner-opacity 1.2s linear infinite;
  background: var(--ship-gray-700);
  border-radius: var(--ship-radius);
}

@keyframes spinner-opacity {
  0% { opacity: 1; }
  100% { opacity: .15; }
}
```

## Interaction Rules

- Use `:focus-visible` rings on links and buttons.
- Use hover background `rgba(255,255,255,.08)` for secondary controls.
- Use city-list hover dimming to direct focus.
- Keep motion short: `.1s` to `.2s` for hovers, `.35s` to `.5s` for overlays.
- Respect `prefers-reduced-motion`.
- For crop tools, use marching-ants selection with a dark page overlay and rule-of-thirds lines.

## Responsive Rules

- Use mobile-first grids; expand to multi-column sponsor and agenda grids after `768px`.
- Keep hero text large but readable: clamp down below `480px`.
- Sponsor boxes stay fixed-height around `120-140px`.
- City rows remain full width with borders; allow long city names to wrap.
- Drawers become full-width bottom sheets on small screens.

## Demo

Reference demo files:

- `ai/demos/vercel-ship-geist-conference-ui/index.html`
- `ai/demos/vercel-ship-geist-conference-ui/styles.css`
- `ai/demos/vercel-ship-geist-conference-ui/script.js`
