---
name: ohzi-immersive-3d-studio-ui
description: Build OHZI-style immersive 3D interactive studio websites. Use when creating dark fullscreen WebGL or Three.js studio pages, entertainment brand activation sites, 3D interactive hero canvases, glass buttons and cursors, Montserrat-based futuristic typography, fixed logo/volume/menu headers, animated section title letters, blurred section description panels, cube loaders with progress bars, internal products modals, newsletter modals, contact forms with budget pills, case-study overlays, and SEO fallback hidden data for canvas-first sites.
---

# OHZI Immersive 3D Studio UI

Use this skill to recreate the design language learned from the OHZI Interactive Studio source: a dark, fullscreen, canvas-first interface for immersive web experiences, with glass UI controls layered over a WebGL scene.

## Design DNA

- Treat the 3D/canvas scene as the main screen, not as a framed preview.
- Use a near-black background, white typography, and Montserrat-style geometric text.
- Keep the page locked to `100vh` with hidden overflow for immersive landing states.
- Add a fixed header with logo, company wordmark, volume control, and desktop/mobile menu buttons.
- Use glass surfaces with subtle white highlights, inset shine, and a rounded 20px radius.
- Use uppercase, spaced button labels and active press states.
- Animate section titles as separate letters so hero text can be revealed per-character.
- Keep descriptive copy in blurred panels that float over the canvas.
- Include hidden SEO fallback content for canvas-first pages.
- Use modals for internal products, newsletter signup, contact, and case-study overlays.

## Visual Tokens

```css
:root {
  --ohzi-bg: #111111;
  --ohzi-text: #ffffff;
  --ohzi-muted: #949494;
  --ohzi-scrollbar: #707070;
  --ohzi-glass-fill: #ffffff0d;
  --ohzi-glass-highlight: #ffffffbf;
  --ohzi-glass-shadow: 0 8px 16px #1113;
  --ohzi-radius: 1.25rem;
  --ohzi-transition: 0.3s;
}
```

## Base Shell

```css
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
}

@media (min-width: 1920px) {
  html { font-size: 20px; }
}

@media (min-width: 2560px) {
  html { font-size: 30px; }
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100vh;
  touch-action: pan-x pan-y;
}

body {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: var(--ohzi-text);
  background: var(--ohzi-bg);
  font-family: Montserrat, Arial, sans-serif;
}

a {
  color: var(--ohzi-text);
  text-decoration: none;
}

.hidden,
div.hidden,
a.hidden,
h2.hidden {
  display: none;
  pointer-events: none;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

::placeholder {
  color: var(--ohzi-muted);
}
```

## Glass Surface

Use `.glass` on buttons, modals, product cards, cursors, and floating panels. Keep the filter SVG in the document if using the original liquid-glass distortion.

```html
<svg class="svg-definitions" aria-hidden="true">
  <filter id="btn-glass">
    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
    <feColorMatrix in="blur" type="matrix"
      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -8" />
  </filter>
</svg>
```

```css
.glass {
  position: relative;
  border-radius: var(--ohzi-radius);
  box-shadow: var(--ohzi-glass-shadow);
  will-change: transform, filter;
}

.glass::before,
.glass::after {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  content: "";
}

.glass::before {
  z-index: -1;
  -webkit-backdrop-filter: blur(0.625rem);
  backdrop-filter: blur(0.625rem);
}

.glass::after {
  background-color: var(--ohzi-glass-fill);
  box-shadow: inset 0.03125rem 0.03125rem var(--ohzi-glass-highlight),
    inset 0 0 0.3125rem var(--ohzi-glass-highlight);
}

.black .glass::after {
  background-color: #1111110d;
  box-shadow: 0.00625rem 0.00625rem #50505080,
    inset 0 0 0.3125rem #50505080;
}
```

## Buttons And Cursor

```css
.button {
  cursor: pointer;
  user-select: none;
}

.button:hover {
  opacity: 0.8;
}

.button:active {
  opacity: 1;
  transform: scale(0.95);
}

.button__primary {
  padding: 0.9375rem 1.375rem;
  border: 0.0625rem solid #fff;
  font-weight: 600;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  transition: background-color var(--ohzi-transition), transform var(--ohzi-transition);
}

.button__primary:hover {
  background-color: #fff6;
  opacity: 1;
}

.cursor {
  position: fixed;
  top: -1.875rem;
  left: -1.875rem;
  z-index: 9999;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 999px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ohzi-transition);
  will-change: transform;
}

.cursor::before {
  filter: url("#btn-glass");
}
```

Disable the custom cursor on touch-heavy mobile layouts or whenever pointer precision is unavailable.

## Canvas And Section Layout

```html
<main class="canvas-container">
  <canvas id="scene"></canvas>
</main>

<section class="section section--hero">
  <h1 class="section__title" aria-label="Explore OHZI">
    <span class="section__title-letter">E</span>
    <span class="section__title-letter">X</span>
    <span class="section__title-letter">P</span>
  </h1>

  <article class="section__description glass">
    <div class="section__background"></div>
    <h2>We make brands worth exploring.</h2>
    <p>Build immersive, high-performance browser experiences with nothing to download.</p>
  </article>
</section>
```

```css
.canvas-container {
  position: absolute;
  inset: 0;
  display: flex;
  width: 100%;
  height: 100%;
}

.canvas-container canvas {
  width: 100%;
  height: 100%;
}

.section {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
}

.section.hidden {
  display: none;
  opacity: 0;
}

.section__title {
  display: flex;
  gap: 1.5rem;
  user-select: none;
}

.section__title-letter {
  will-change: transform, opacity;
}

.section__description {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  max-width: 37.5rem;
  padding: 1.25rem;
}

.section__background {
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  -webkit-backdrop-filter: blur(0.625rem);
  backdrop-filter: blur(0.625rem);
}
```

## Header Pattern

```html
<header class="header">
  <a class="header__left" href="#">
    <span class="header__logo">O</span>
    <span class="header__company-name">OHZI</span>
  </a>
  <nav class="header__right">
    <button class="volume-icon glass button" aria-label="Toggle sound"></button>
    <button class="header__menu header__menu--desktop glass button" aria-label="Open menu"></button>
    <button class="header__menu header__menu--mobile glass button" aria-label="Open mobile menu"></button>
  </nav>
</header>
```

Keep the header simple and icon-led. Use the menu controls to open product, newsletter, contact, or case-study overlays.

## Modal System

Use a shared fixed `.modal` wrapper, then specialize the body.

```css
.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: #0009;
}

.modal__container {
  width: min(70rem, 90vw);
  max-height: 80dvh;
  overflow: auto;
  padding: 1.5rem;
}

.modal__close {
  display: grid;
  place-items: center;
  margin-left: auto;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  color: #fff;
  background: transparent;
}
```

### Internal Products

- Title: `OHZI PRODUCTS`.
- Use a 1-column mobile grid and 2-column desktop grid.
- Product cards use a 16:9 visual, uppercase name, and a hover glow.
- Example products from the source: The Lab, Wishfultree, Bdaycake, Ohziverse.

### Newsletter

- Split image/content on desktop.
- Use a short title such as `Stay Connected with OHZI`.
- Include an email field, submit button, and thank-you state.

### Contact

- Use fields for full name, email, and deadline.
- Use budget pills: `Not sure yet`, `USD 30K`, `USD 30k - 100k`, `USD +100k`.
- Highlight the selected pill with a glass border and brighter fill.

## Loader

```css
.loader {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: center;
  background: #111;
}

.loader__cube {
  width: 4rem;
  height: 4rem;
  border: 1px solid #fff8;
  animation: ohzi-spin 1.2s linear infinite;
}

.loader__progress-bar {
  width: min(18rem, 70vw);
  height: 0.25rem;
  overflow: hidden;
  border-radius: 999px;
  background: #ffffff24;
}

.loader__progress-bar-fill {
  width: 0;
  height: 100%;
  background: #fff;
}

@keyframes ohzi-spin {
  to { transform: rotate(360deg); }
}
```

## Accessibility And QA

- Include a hidden `.data` or `.seo-fallback` block with real headings and links for canvas-heavy pages.
- Do not leave core content only inside WebGL.
- Respect `prefers-reduced-motion` by pausing particles, cursor effects, and title letter loops.
- Make modal close buttons keyboard reachable and close on Escape.
- Keep focus styles visible on glass buttons and form fields.
- Test the fullscreen canvas on desktop and mobile; it must not render blank.
- Ensure modals scroll internally when content exceeds `80dvh`.

## Demo Reference

A reusable static demo lives at `ai/demos/ohzi-immersive-3d-studio-ui/`. Open `index.html` directly to inspect the layout and copy the HTML/CSS/JS patterns.
