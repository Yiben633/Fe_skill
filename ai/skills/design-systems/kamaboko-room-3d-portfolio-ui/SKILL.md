---
name: kamaboko-room-3d-portfolio-ui
description: Build Kamaboko Room-style 3D personal portfolio interfaces. Use when creating pastel Japanese portfolio rooms, Montserrat/Noto Sans JP typography, light/dark pastel theme toggles, fixed WebGL/Three.js room backgrounds, loading progress bars, character-by-character hero typography, split Japanese/English title compositions, long scrollytelling margins, side-aware section background panels, mini modal scrollbars, section hero words like about me/my works/contact/finally, decorative dot clusters, numbered sections, clone-text hover links, slim custom scrollbars, and gentle creative-coding portfolio pages.
---

# Kamaboko Room 3D Portfolio UI

Use this skill to recreate the design language learned from the Kamaboko Room portfolio source. The interface feels like a soft interactive room: pastel theme tokens, fixed 3D/canvas background, character-by-character type, long scroll pacing, large section hero labels, sliding background panels, and gentle UI controls.

## Design DNA

- Make the portfolio feel like entering a personal room, not a standard resume page.
- Keep the page pastel, soft, and friendly, with a 3D room or canvas scene sitting behind content.
- Use long scroll spacing so each section gets a staged reveal.
- Animate text by splitting it into individual spans and moving characters independently.
- Use section panels that enter from the left or right and carry their own mini scrollbar.
- Keep sections simple: `about me`, `my works`, `contact`, `finally`.
- Use small decorative dots/circles around section titles for an illustrated, playful tone.
- Include a theme switch that physically slides its handle between light and dark.

## Font Setup

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet">
```

```css
:root {
  font-family: Montserrat, "Noto Sans JP", sans-serif;
}
```

## Core Tokens

```css
:root {
  --line-height: 1.75;
  --padding-side: 1.875rem;
  --z-index-global-header: 1000;
  --z-index-sp-menu: 2000;
  --z-index-loading: 99999;
  --color-white: #ffffff;
  --color-black: #323232;
  --color-cream: #fbf4e4;
  --color-pink: #eaa1ac;
  --color-blue: #95abe5;
  --color-green: #7bd0ad;
  --color-navy: #5b6eb3;
  --color-bg: var(--color-cream);
  --color-text: var(--color-black);
  --color-primary: var(--color-pink);
  --color-secondary: var(--color-green);
  --color-tertiary: var(--color-blue);
  --color-bg-finally: var(--color-pink);
  --color-text-finally: var(--color-cream);
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-out-quint: cubic-bezier(.22, 1, .36, 1);
  --ease-back: cubic-bezier(.38, 1.8, .51, .96);
  --ease-out: cubic-bezier(.33, .25, .07, .97);
  --ease-base-transform: var(--ease-out-expo);
  --ease-base-material: ease-out;
  --duration-base-material: .3s;
  --duration-base-transform: .8s;
}

:root[data-theme="dark"] {
  --color-bg: var(--color-navy);
  --color-text: var(--color-cream);
  --color-primary: var(--color-cream);
  --color-secondary: var(--color-cream);
  --color-tertiary: var(--color-cream);
  --color-bg-finally: color-mix(in srgb, var(--color-bg), var(--color-black) 15%);
  --color-text-finally: var(--color-text);
}
```

## Layout Recipe

1. Loading overlay: full screen, `background-color: var(--color-bg)`, centered progress bar with primary-colored fill.
2. Fixed WebGL/canvas room: full viewport, z-index behind all content, ideally a room model such as `room.glb`.
3. Theme toggle: fixed top-right, light icon, pill switch, dark icon, handle translates in dark mode.
4. Opening hero: full viewport, greeting line, Japanese/main title left-lower, English title block right-upper.
5. Character split: wrap each character in spans with `--index`, hidden overflow, translate from `100%` on reveal.
6. Scroll cue: centered bottom arrow, visible after hero intro.
7. Long margin blocks: use 3000-4000px spacer zones between section triggers for scrollytelling pacing.
8. Section hero: large English phrase, section number, three decorative dots.
9. Section content: soft panel with heading, paragraphs, and optional clone-text link button.
10. Section backgrounds: fixed sliding panels tied to each section with `data-side="left"` or `right`, plus a small internal scrollbar.
11. Custom scrollbar: slim 12px fixed rail on desktop; hide on mobile.

## Theme Toggle Pattern

```css
.theme-toggle {
  position: fixed;
  top: 48px;
  right: 48px;
  z-index: 100;
  display: flex;
  align-items: center;
  transition: color var(--duration-base-material) var(--ease-base-material),
    opacity var(--duration-base-material) var(--ease-base-material);
}

.theme-body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 28px;
  margin: 0 16px;
  border-radius: 999px;
  background: var(--color-primary);
  filter: drop-shadow(0 0 3px color-mix(in srgb, var(--color-text), transparent 86%));
}

.theme-handle {
  width: 20px;
  height: 20px;
  transform: translate3d(-12px,0,0);
  transition: transform var(--duration-base-transform) var(--ease-base-transform);
}

[data-theme="dark"] .theme-handle {
  transform: translate3d(12px,0,0);
}
```

## Character Text Reveal

```css
.split-line {
  display: flex;
  align-items: flex-end;
  height: 2em;
  overflow: hidden;
  line-height: 1.2;
}

.split-line span {
  display: inline-block;
  transform: translate3d(0,100%,0);
  transition: transform .8s var(--ease-out-expo);
  transition-delay: calc(var(--index) * 35ms);
}

.is-visible .split-line span {
  transform: translate3d(0,0,0);
}
```

## Section Hero

```css
.section-hero {
  position: sticky;
  top: 20vh;
  display: grid;
  place-items: center;
  min-height: 55vh;
  pointer-events: none;
}

.section-hero h2 {
  position: relative;
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 800;
  letter-spacing: .03em;
  text-transform: lowercase;
}

.section-hero .number {
  position: absolute;
  right: 12%;
  bottom: 20%;
  font-size: 1rem;
}
```

## Clone Hover Link

```css
.clone-link {
  display: inline-grid;
  overflow: hidden;
  border: 2px solid currentColor;
  border-radius: 999px;
}

.clone-link-inner {
  display: grid;
}

.clone-link .base,
.clone-link .clone {
  grid-area: 1 / 1;
  display: inline-flex;
  gap: .35em;
  padding: .8rem 1.2rem;
  transition: transform .8s var(--ease-out-expo);
}

.clone-link .clone {
  transform: translateY(110%);
}

.clone-link:hover .base {
  transform: translateY(-110%);
}

.clone-link:hover .clone {
  transform: translateY(0);
}
```

## Responsive Notes

- Mobile root font size can become viewport-based around `4.2666666667vw`.
- Theme toggle moves to `top: 20px; right: max(22px, 4%)`.
- Opening title Japanese size drops from `64px` to `36px`.
- English title drops from `36px` to `24px`.
- Long spacer blocks reduce from `4000px` to `3000px`.
- Custom scrollbar is hidden below `768px`.

## Demo Files

Static demo:

`ai/demos/kamaboko-room-3d-portfolio-ui/index.html`

