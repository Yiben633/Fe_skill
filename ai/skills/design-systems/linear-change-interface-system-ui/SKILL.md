---
name: linear-change-interface-system-ui
description: Build Linear-style dark product, editorial, and change-campaign pages. Use when creating Linear-inspired marketing pages, dark SaaS product pages, issue-tracker/editorial layouts, cinematic "change" pages, tokenized component systems, lightbox zoom images, separator variants, tweet/embed cards, benefit columns, dot-matrix canvas illustrations, 3D grid-loader accents, company logo blocks, rounded article shells, and calm high-precision interface sections.
---

# Linear Change Interface System UI

Use this skill to recreate the design language learned from Linear page/component CSS: precise dark interfaces, tokenized colors, subtle separators, editorial content shells, zoomable imagery, dot-matrix/canvas illustrations, and cinematic product storytelling.

## Design DNA

- Keep the interface calm, dark, restrained, and precise.
- Use tokenized CSS variables for color, layers, radii, shadows, borders, and homepage spacing.
- Pair Inter-like product text with iA Quattro or Redaction-inspired editorial display typography.
- Use small radii: 4px, 5px, 6px, and 8px. Avoid overly bubbly SaaS cards.
- Prefer hairline borders, translucent borders, low shadows, and fading separators.
- Build product sections with measured grids, figure layers, canvas/dot illustrations, and subtle perspective transforms.
- Use lightbox image zoom for detailed visuals.
- Use content shells for blog/docs/editorial pages: sidebar/content grid, rounded primary panel, prose max-width.
- Use benefits columns with tall cards and top-anchored figures.
- Respect `prefers-reduced-motion` and keep interactions functional without JS.

## Core Tokens

```css
:root {
  --color-bg-primary: #08090a;
  --color-bg-secondary: #0f1011;
  --color-bg-tertiary: #17181a;
  --color-text-primary: #f7f8f8;
  --color-text-secondary: #c6c8cc;
  --color-text-tertiary: #8b8f98;
  --color-text-quaternary: #626873;
  --color-border-primary: rgba(255, 255, 255, 0.12);
  --color-border-secondary: rgba(255, 255, 255, 0.08);
  --color-border-translucent: rgba(180, 188, 208, 0.12);
  --color-border-translucent-strong: rgba(180, 188, 208, 0.2);
  --color-line-tertiary: rgba(255, 255, 255, 0.08);
  --color-alpha: 255;
  --radius-rounded: 999px;
  --shadow-low: 0 8px 30px rgba(0, 0, 0, 0.28);
  --font-regular: Inter, Arial, sans-serif;
  --font-mono-display: "iA Quattro", "SFMono-Regular", Consolas, monospace;
  --font-redaction: Georgia, serif;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --layer-dialog-overlay: 1000;
  --layer-dialog: 1001;
  --homepage-padding-inset: 48px;
  --homepage-outer-padding: 24px;
  --homepage-max-width: 1344px;
}
```

## Lightbox

Use the lightbox for product screenshots, editorial visuals, and feature illustrations.

```css
.lightbox_overlay {
  position: fixed;
  inset: 0;
  z-index: var(--layer-dialog-overlay);
  background: var(--color-bg-primary);
}

.lightbox_lightbox {
  position: fixed;
  inset: 0;
  z-index: var(--layer-dialog);
  cursor: zoom-out;
  transition: width 0.4s ease-out, height 0.4s ease-out;
}

.lightbox_lightbox > div {
  position: absolute;
}

.lightbox_lightbox img {
  width: 100%;
  height: 100%;
}

.lightbox_wrapper {
  position: relative;
  line-height: 0;
  cursor: zoom-in;
}

.lightbox_wrapper[data-hidden="true"] {
  visibility: hidden;
}
```

## Separator Variants

```css
.separator {
  flex-shrink: 0;
  border-radius: var(--radius-rounded);
  background: var(--color-line-tertiary);
}

.separator[data-orientation="horizontal"] {
  width: 100%;
  height: 1px;
  --direction: to right;
}

.separator[data-orientation="vertical"] {
  align-self: stretch;
  width: 1px;
  --direction: to bottom;
}

.separator--glass {
  background: rgba(180, 188, 208, 0.1);
}

.separator--skeuo {
  background: var(--color-bg-primary);
  box-shadow: 0 1px 0 var(--color-border-secondary);
}

.separator--fading {
  --color: rgba(var(--color-alpha), var(--color-alpha), var(--color-alpha), 0.1);
  background: linear-gradient(var(--direction), transparent, var(--color) 50%, transparent);
}

.separator--border {
  background: var(--color-border-primary);
}
```

## Tweet Or Embed Card

```css
.tweet-theme {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tweet-theme > div {
  box-shadow: var(--shadow-low);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-regular);
  font-size: 15px;
  line-height: 22px;
}
```

## Benefits Section

```css
.benefits {
  padding-left: var(--homepage-padding-inset);
  padding-right: var(--homepage-padding-inset);
}

.benefit {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 468px;
  padding-left: var(--homepage-padding-inset);
  padding-right: var(--homepage-padding-inset);
  border-right: 1px solid var(--color-border-translucent-strong);
}

.benefit p {
  max-width: 368px;
  text-wrap: balance;
}

.benefit:last-of-type {
  border-right: none;
  padding-right: 0;
}

.benefit:first-of-type {
  padding-left: 0;
}

.benefit_figure {
  position: absolute;
  top: 0;
  left: var(--homepage-padding-inset);
}

.benefit:first-of-type > .benefit_figure {
  left: 0;
}
```

Mobile can become carousel cards:

```css
.benefits_carouselCard {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 328px;
  height: 440px;
  padding: 0 24px 28px;
  border: 1px solid var(--color-border-translucent);
  border-radius: 8px;
  background: #0f1011;
}
```

## Dot Matrix Tool

```css
.dot-matrix {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.dot-matrix canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
```

Use canvas for subtle field illustrations, not as core content. Keep headings and copy in real HTML.

## Content Shell

Use this for blog, docs, changelog, and editorial pages.

```css
.page_layout {
  --padding: 112px;
  --offset: 10px;
  min-height: 100%;
  padding-top: var(--header-height);
  background: var(--color-bg-secondary);
  text-wrap: pretty;
}

.page_wrapper {
  position: relative;
  width: 100%;
  max-width: var(--homepage-max-width);
  margin: 0 auto;
  padding-left: var(--homepage-outer-padding);
  padding-right: var(--homepage-outer-padding);
}

.page_gridLayout {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.page_content {
  position: relative;
  width: 100%;
  border: 1px solid var(--color-border-primary);
  border-radius: 5px;
  background: var(--color-bg-primary);
  box-shadow: 0 43px 26px rgba(0, 0, 0, 0.02), 0 19px 19px rgba(0, 0, 0, 0.03), 0 5px 11px rgba(0, 0, 0, 0.03);
}

.page_contentInner {
  --py: calc(var(--header-height) - var(--offset));
  --px: var(--padding);
  --prose-max-width: 680px;
  min-height: 100vh;
  padding: var(--py) var(--px) 72px;
}

.page_contentInner h1,
.page_contentInner h2,
.page_contentInner h3,
.page_contentInner p {
  max-width: var(--prose-max-width);
}
```

## Change Campaign Page

The Linear change page uses off-white, black split sections, Redaction/iA typography, step-like title reveal, glitch/adornment layers, and two-column sections.

```css
.change_content {
  --off-white: #f2f1eb;
  position: relative;
  isolation: isolate;
  background: var(--off-white);
}

.change_intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(80vh - var(--header-height));
  padding: 64px var(--page-padding-right) 64px var(--page-padding-left);
  background: var(--color-bg-primary);
}

.change_intro h1 {
  animation: change_reveal 4s steps(10) forwards;
  text-align: center;
  line-height: 0.8;
  font-size: clamp(32px, 18vw, 128px);
}

.change_sections {
  background: linear-gradient(to right, black 0, black 50%, var(--off-white) 50%, var(--off-white) 100%);
}

.change_section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

## Company Logo Block

```css
.company-logo {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  background: var(--color-text-primary);
}

.company-logo img,
.company-logo span {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
```

## QA Checklist

- Preserve contrast across dark and off-white sections.
- Keep separator hairlines crisp at 1px.
- Lightbox must close on click and Escape.
- Use real HTML content under canvas or illustration layers.
- Keep benefits cards equal-height and stable.
- Avoid huge rounded cards; Linear radii are controlled and small.
- Prefer subtle transform/opacity changes over loud animations.

## Demo Reference

A static reusable demo lives at `ai/demos/linear-change-interface-system-ui/`. Open `index.html` directly to inspect the layout and copy the HTML/CSS/JS patterns.
