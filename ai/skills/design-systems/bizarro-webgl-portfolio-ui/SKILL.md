---
name: bizarro-webgl-portfolio-ui
description: Build Bizarro/Luis Bizarro-style creative technologist portfolio pages. Use when creating black-and-white WebGL portfolio sites, creative developer case-study pages, canvas-rendered text/media layouts, huge logo lockups, four-column uppercase headers, FK Grotesk-like typography, Lenis-style smooth scroll shells, project headers with oversized See CTAs, 3D/WebGL project galleries, brand/client lists, awards/contact blocks, and minimal monochrome experimental portfolios.
---

# Bizarro WebGL Portfolio UI

Use this skill to recreate the design language learned from the pasted Luis Bizarro creative technologist site. The style is stark, technical, and portfolio-first: black background, white FK Grotesk-style type, fixed WebGL/canvas layer, masked DOM text/media via `data-gl-*`, huge responsive logo, and large project case-study sections.

## Design DNA

- Use black as the only page background and white as the main ink.
- Keep the page raw and typographic: very few colors, no soft card shadows, no decorative gradients except inside simulated media.
- Use a custom Grotesk look. If `FK Grotesk Neue` is not available, fall back to `Arial Narrow`, `Arial`, or a condensed sans.
- Build a fixed canvas layer for WebGL/noise/ripple rendering. Hide it on mobile if performance is a concern.
- Mark renderable text/media with `data-gl-text`, `data-gl-media`, and `data-gl-background` hooks.
- Use huge negative letter-spacing headlines and uppercase labels.
- Keep edges sharp but slightly softened with `5px` radius.
- Use one-pixel scrollbars and inverted text selection.
- Use project sections as full case-study modules: tall bordered header, huge title, large paragraph, oversized "See" CTA, then one or more 16:9 or square media panels.

## Core Tokens

```css
:root {
  --bz-bg: #000;
  --bz-fg: #fff;
  --bz-muted: rgba(255, 255, 255, 0.62);
  --bz-line: rgba(255, 255, 255, 0.34);
  --bz-radius: 5px;
  --bz-gap: 2.5rem;
  --bz-gap-mobile: 1rem;
  --bz-font: "FK Grotesk Neue", "Arial Narrow", Arial, sans-serif;
}
```

## Base Shell

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: var(--bz-font);
  font-size: 0.5208333333vw;
  overflow: hidden auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  margin: 0;
  color: var(--bz-fg);
  background: var(--bz-bg);
  line-height: 1;
}

canvas.webgl-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  transform: translateZ(0);
}

@media (max-width: 768px) {
  html { font-size: 3.125vw; }
  canvas.webgl-layer { visibility: hidden; }
}
```

## WebGL Hook Pattern

Use data hooks even if the demo uses a normal DOM fallback. They make the markup easy to upgrade to Three.js or a custom WebGL text/media renderer later.

```html
<p data-gl-text="uppercase" data-gl-text-active>Creative Technologist</p>
<img data-gl-media="/photo.jpg" data-gl-media-active src="/photo.jpg" alt="">
<header data-gl-background data-gl-text-active>...</header>
```

Desktop WebGL versions can set DOM text/media transparent while the canvas renders the actual glyphs and media:

```css
@media (min-width: 769px) {
  [data-gl-media][data-gl-media-active] { opacity: 0; }
  [data-gl-text][data-gl-text-active] { color: rgba(0, 0, 0, 0); }
}
```

If no WebGL renderer is present, do not apply the transparency rule.

## Header Recipe

- Full viewport header: `height: 100vh; height: 100svh`.
- Four top columns inside an absolute wrapper at `2.5rem` from top/left.
- Title is around `5rem`, year around `8rem`, symbol around `4.2rem`.
- Huge logo sits absolute at the bottom with aspect ratio close to `2940 / 567`.
- On mobile, place the wrapper as a bordered vertical panel and rotate the logo 90 degrees down the left edge.

```css
.header {
  position: relative;
  width: 100%;
  height: 100svh;
  font-size: 1.8rem;
  text-transform: uppercase;
}

.header__wrapper {
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 5rem);
}

.header__logo {
  position: absolute;
  left: 2.5rem;
  bottom: 2.5rem;
  width: calc(100% - 5rem);
  aspect-ratio: 2940 / 567;
  font-size: 0;
}
```

## About Section

- Outer margin: `2.5rem` desktop, `1rem` mobile.
- Introduction text: `6rem`, `letter-spacing: -0.25rem`, each paragraph starts with `margin-top: 1em`.
- Content split: two 50% columns with `2.5rem` gap.
- Left side: 3-column contact/social/location text at `2.4rem`.
- Right side: square portrait/media with 5px radius, then brand list with `4rem` body type.
- On mobile: stack columns in reverse, hide third information column, remove manual `<br>` line breaks.

## Project Section

Use each project as an isolated case-study module.

```html
<section class="project">
  <header class="project__header" data-gl-background data-gl-text-active>
    <div class="project__header__content">
      <p class="project__header__information" data-gl-text="uppercase">Studio</p>
      <h3 class="project__header__title" data-gl-text="uppercase">Apple<br>Vision Pro</h3>
      <p class="project__header__description" data-gl-text>Short case-study description.</p>
    </div>
    <a class="project__header__link" href="#">
      <span class="project__header__link__text" data-gl-text="uppercase">See *</span>
    </a>
  </header>
  <div class="project__content">
    <figure class="project__media"><img class="project__media__image" src="..." alt=""></figure>
    <figure class="project__media project__media--50">...</figure>
  </div>
</section>
```

```css
.project {
  margin: 2.5rem;
}

.project__header {
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 59rem;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
}

.project__header__title {
  font-size: 5rem;
  letter-spacing: -0.25rem;
  text-transform: uppercase;
}

.project__header__description {
  margin-top: auto;
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: -0.25rem;
}

.project__header__link__text {
  display: inline-block;
  font-size: 10rem;
  letter-spacing: -0.25rem;
}

.project__content {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.project__media {
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 1080;
  overflow: hidden;
  border-radius: 5px;
}

.project__media--50 {
  width: calc(50% - 1.25rem);
  aspect-ratio: 1;
}
```

## Interaction And Motion

- Use Lenis-like classes if smooth scroll is enabled: `html.lenis`, `.lenis-smooth`, `.lenis-stopped`.
- Keep scrolling natural if no smooth scroll library exists.
- Use hover only for links and project CTAs: underline, invert, or brief background fade.
- Use a small custom cursor or canvas ripple only on desktop.
- Respect `prefers-reduced-motion`.

## Responsive Rules

- Mobile breakpoint: `768px`.
- Use `html { font-size: 3.125vw; }` on mobile.
- Header wrapper becomes a bordered vertical panel.
- Logo rotates 90 degrees and uses viewport height as width.
- About content stacks column-reverse.
- Project header becomes a vertical bordered card.
- Project media gap drops from `2.5rem` to `1rem`; half media remains two columns if space allows.

## QA Checklist

- Do not use colorful SaaS gradients or rounded cards unless they are inside media placeholders.
- Keep all page chrome black and white.
- Ensure text remains visible when WebGL is absent.
- Avoid importing remote videos in reusable demos; use local placeholders or CSS-generated media.
- Project descriptions should be concrete technical contributions, not generic portfolio copy.
- Canvas must be pointer-events none and should not cover interactive links.

## Demo Reference

A static reusable demo lives at `ai/demos/bizarro-webgl-portfolio-ui/`. Open `index.html` directly to inspect the layout and copy the HTML/CSS/JS patterns.
