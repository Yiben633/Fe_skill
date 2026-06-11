---
name: ichiki-109-barcode-portfolio-ui
description: Build 1:09 Ichiki-style monochrome illustrator portfolio interfaces. Use when creating IBM Plex Mono and Libre Barcode 128 portfolio pages, Japanese creator websites, OS-like dialog window hero sections, inset rounded viewport frames, dark/light theme toggles, right-top digital clocks, barcode headings, blinking cursor titles, filterable works indexes, pickup work cards, profile/contact pages, dashed cross decorations, canvas/grid placeholders, custom scrollbars, hamburger overlays, and swup-like page transitions.
---

# 1:09 Barcode Portfolio UI

Use this skill to recreate the design language learned from the pasted 1:09 Portfolio HTML/CSS and font snippets. The style is monochrome, technical, playful, and OS-like: IBM Plex Mono everywhere, Libre Barcode labels, an inset viewport frame, tiny controls, dark/light theme switching, dialog-window cards, grid/canvas decorations, filterable works, and a clock fixed at `1:09`.

## Design DNA

- Use a monochrome base with only image/color accents inside artwork thumbnails.
- Treat the viewport like an app window: fixed outer frame, rounded inner border, and content scrolling inside.
- Use `IBM Plex Mono` for almost all text and `Libre Barcode 128` as decorative duplicate labels.
- Pair large uppercase section headings with a blinking underscore cursor.
- Add top navigation as a small bordered capsule with an active highlight behind the current item.
- Add a right-top utility area with two theme dots and a digital clock.
- Use OS-style dialog boxes for hero images, profile stickers, floating notices, and service panels.
- Use thin 1px borders, dashed crossing lines, grid/canvas placeholders, and small arrow buttons.
- Keep spacing based on outside padding and a 12-column grid on desktop, 6 columns on mobile.

## Fonts

Use Google Fonts when network fonts are allowed:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Libre+Barcode+128&display=swap">
```

Fallback stack:

```css
--font-ibm: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
--font-ja: "Hiragino Kaku Gothic ProN", "Hiragino Sans", system-ui, sans-serif;
--font-barcode: "Libre Barcode 128", system-ui;
```

## Core Tokens

```css
:root {
  --padding-outside: 20px;
  --padding-content: 3.5rem;
  --global-header-height: 4.5rem;
  --global-footer-holo-height: 6.09375rem;
  --grid-columns: 12;
  --font-size-small: .75rem;
  --font-size-base-ja: .875rem;
  --font-size-base-en: .9375rem;
  --font-size-h3: 1.1875rem;
  --font-size-medium: 1.525rem;
  --font-size-large: 2.1375rem;
  --font-size-h2: 3.5625rem;
  --font-size-barcode: 3rem;
  --line-height: 1.75;
  --color-white-1: #fff;
  --color-white-2: #f3f3ff;
  --color-white-3: #a4a4a4;
  --color-black-1: #000;
  --color-black-2: #101016;
  --color-black-3: #565656;
  --color-bg: var(--color-white-2);
  --color-text: var(--color-black-2);
  --color-border: var(--color-black-3);
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-out-quint: cubic-bezier(.22, 1, .36, 1);
  --ease-base-material: ease-out;
  --duration-hover-material: .1s;
}

:root[data-theme="dark"] {
  --color-bg: var(--color-black-2);
  --color-text: var(--color-white-1);
  --color-border: var(--color-white-3);
}

@media (max-width: 768px) {
  :root {
    --padding-outside: 15px;
    --padding-content: .875rem;
    --global-header-height: 2.5rem;
    --global-footer-holo-height: 3.75rem;
    --grid-columns: 6;
    --font-size-small: .625rem;
    --font-size-base-ja: .78125rem;
    --font-size-base-en: .8125rem;
    --font-size-h2: 2.625rem;
    --font-size-barcode: 2.25rem;
  }
}
```

## Layout Recipe

1. Set `html` and `body` to `overflow: hidden`; create an inner wrapper with `height: 100svh` and `overflow-y: auto`.
2. Draw an outer frame fixed over the viewport. Use either SVG masks or CSS pseudo-elements for an inset rounded rectangle.
3. Add fixed header inside the frame: logo left, nav capsule centered, social buttons right on desktop.
4. Add right-top utility cluster: two tiny round theme buttons plus `1:09` clock.
5. Add a mobile hamburger button and full-screen menu overlay.
6. Hero: large heading, barcode duplicate, image/window dialogs, grid/canvas decoration, and stacked floating dialogs.
7. Works page: heading + barcode, filter radios, count, and responsive works list.
8. Profile/contact pages: heading + barcode, text blocks, dashed cross/grid decoration, window cards, and bordered form fields.
9. Footer: bordered top line, social links, credits, barcode label, and optional holo/canvas strip.

## Component Patterns

### Heading With Cursor And Barcode

```html
<div class="mono-heading">
  <h1>Works</h1>
  <span class="barcode" aria-hidden="true">myWorks</span>
</div>
```

```css
.mono-heading h1 {
  display: flex;
  font-family: var(--font-ibm);
  font-size: var(--font-size-h2);
  line-height: 1;
  text-transform: uppercase;
}

.mono-heading h1::after {
  content: "_";
  animation: cursorBlink 1s infinite step-start;
}

.barcode {
  font-family: var(--font-barcode);
  font-size: var(--font-size-barcode);
  line-height: 1;
  user-select: none;
  pointer-events: none;
}
```

### Pill Arrow Link

```css
.pill-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5em;
  padding: .25em 1.2em .3em;
  border: 1px solid var(--color-border);
  border-radius: 100vh;
  color: var(--color-text);
  background: var(--color-bg);
  transition: background-color .1s ease-out, color .1s ease-out;
}

.pill-link:hover,
.pill-link[data-invert="true"] {
  color: var(--color-bg);
  background: var(--color-text);
  border-color: var(--color-text);
}
```

### Dialog Window

```css
.dialog-box {
  border: 1px solid var(--color-border);
  border-radius: .375rem;
  background: var(--color-bg);
  overflow: hidden;
}

.dialog-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 1.8rem;
  padding: 0 .75rem;
  border-bottom: 1px solid var(--color-border);
}

.dialog-close {
  width: .8rem;
  height: .8rem;
  border: 1px solid var(--color-border);
  border-radius: 50%;
}
```

### Works Filter

```html
<label class="filter-chip"><input type="radio" name="type" checked> all</label>
<label class="filter-chip"><input type="radio" name="type"> commission</label>
```

```css
.filter-chip {
  display: inline-flex;
  align-items: center;
  height: 1.75rem;
  padding: 0 .9rem;
  border: 1px solid var(--color-border);
  border-radius: 100vh;
  cursor: pointer;
}

.filter-chip:has(input:checked) {
  color: var(--color-bg);
  background: var(--color-text);
  border-color: var(--color-text);
}
```

## Motion Rules

- Blinking cursor uses `step-start` at `1s`.
- Swup-like transitions fade page content to opacity `0`.
- Dialogs can scale from `.8` to `1` and fade in over `.12s` with `var(--ease-out-quint)`.
- Header active indicator translates between nav items.
- Clock colon blinks with `step-end`.
- Theme switches should invert variables, not duplicate component styles.

## Responsive Rules

- Desktop uses 12 columns; mobile uses 6.
- Hide desktop nav and social links below `768px`; show hamburger overlay.
- Reduce outer padding from `20px` to `15px`.
- Reduce content padding to `.875rem`.
- Works cards should become 2 columns or 1 column depending title length.
- Keep the outer frame visible on mobile, but reduce border radius and header height.

## Demo

See `ai/demos/ichiki-109-barcode-portfolio-ui/` for a static implementation with theme toggle, framed viewport, barcode headings, dialog windows, filterable works cards, custom scrollbar, and contact form.
