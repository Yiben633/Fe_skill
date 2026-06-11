---
name: grandson-creative-studio-ui
description: Build grandson-style editorial creative studio portfolio interfaces. Use when creating blue-gray art direction websites, minimal Japanese creative studio homepages, Pill Gothic 900MG display typography, Adobe Garamond Pro body serif layouts, huge centered wordmarks, fixed sparse navigation, floating category portals for creation/portrait/beauty/about, arrow-over-image links, clipped thumbnail gallery rows, category filters, fullscreen image viewers, line-reveal text, WebGL/canvas background layers, custom scrollbars, and mobile full-screen menus.
---

# Grandson Creative Studio UI

Use this skill to recreate the design language learned from the pasted grandson creative studio HTML/CSS and Typekit snippets. The style is quiet, editorial, and image-led: blue-gray background, white text, huge soft display lettering, serif narrative text, floating category portals, clipped image thumbnails, minimal fixed nav, and slow line-reveal motion.

## Design DNA

- Use a muted blue-gray canvas, usually `#717c82`, with white text.
- Keep the interface sparse: few borders, few buttons, little chrome.
- Make the first viewport feel like an art-directed poster rather than a conventional landing page.
- Use a huge lowercase wordmark centered in the viewport.
- Float category sections across the viewport instead of stacking cards in a regular grid.
- Pair each category with a small parenthetical label, category text, an oversized white arrow, and a clipped image reveal.
- Use long serif paragraphs for the studio statement.
- Use gallery pages with large title text, small category filters, image strips, and fullscreen lightbox viewing.
- Keep hover interactions subtle: opacity drop, brightness reduction, arrow translation.

## Typography

Primary Typekit kit from pasted text:

```html
<link rel="stylesheet" href="https://use.typekit.net/hvo1cpv.css">
```

Core font roles:

```css
--font-ja: "dnp-shuei-mincho-pr6n", serif;
--font-en: "adobe-garamond-pro", Georgia, serif;
--font-display: "pill-gothic-900mg", "Arial Narrow", sans-serif;
--font-body: var(--font-en), var(--font-ja), serif;
```

- Use `pill-gothic-900mg` for logo, navigation, page titles, gallery item titles, and section names.
- Use `adobe-garamond-pro` and Japanese Mincho fallback for statement and descriptive body text.
- Body text scale is slightly enlarged: `--font-scale-body: 1.05`.

## Core Tokens

```css
:root {
  --line-height: 1.5;
  --padding-side: 30;
  --grid-gap: 18;
  --z-index-global-header: 1000;
  --z-index-sp-menu: 2000;
  --z-index-screen: 3000;
  --z-index-loading: 99999;
  --font-ja: "dnp-shuei-mincho-pr6n", serif;
  --font-en: "adobe-garamond-pro", Georgia, serif;
  --font-display: "pill-gothic-900mg", "Arial Narrow", sans-serif;
  --font-body: var(--font-en), var(--font-ja), serif;
  --font-scale-body: 1.05;
  --color-white: #fff;
  --color-black: #000;
  --color-bg: #717c82;
  --color-text: #fff;
  --color-blue: #394d72;
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-out-quint: cubic-bezier(.22, 1, .36, 1);
  --ease-base-transform: var(--ease-out-expo);
  --ease-base-material: linear;
  --duration-base-transform: .8s;
  --duration-base-material: .2s;
  --duration-hover-material: .06s;
  --opacity-hovered: .6;
  --brightness-hovered: .8;
}

@media (max-width: 768px) {
  :root {
    --grid-gap: 6;
    --padding-side: 15;
    font-size: min(4.1025641026vw, 16px);
  }
}
```

## Layout Recipe

1. Global canvas: fixed full viewport canvas or CSS background layer behind content.
2. Fixed header: logo left, small horizontal nav right/center, mobile hamburger at top right.
3. Mobile menu: full-screen overlay using the same background color, large lowercase links, current item inverted.
4. Home hero: huge lowercase `grandson` wordmark centered, short statement underneath or alongside.
5. Floating section portals: absolute sections positioned by viewport units for `creation`, `portrait`, and `beauty`.
6. Category portal content: large section title, small parenthetical label, category lines, arrow button, and clipped image.
7. About block: long serif statement with every line wrapped for line-reveal animation.
8. Gallery page: title, filters aligned to the right, article list, title + thumbnail strip per work.
9. Fullscreen viewer: fixed overlay, black backdrop at `.9` opacity, snap-scrolling image slides, close button top-right.
10. Custom scrollbar: right-side slim track and thumb, hidden on mobile.

## Component Patterns

### Fixed Header

```css
.studio-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-global-header);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.125rem calc(var(--padding-side) * .0625rem) 0;
  font-family: var(--font-display);
}
```

### Floating Category Portal

```html
<section class="portal portal-creation">
  <h2><span>creation</span></h2>
  <span class="portal-small">(creation)</span>
  <p>art,<br>advertising</p>
  <a class="portal-link" href="#">
    <span class="portal-arrow">-></span>
    <span class="portal-image"></span>
  </a>
</section>
```

```css
.portal {
  position: absolute;
  width: min(30rem, 38vw);
}

.portal h2 {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: .9;
}

.portal-image {
  display: block;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  overflow: hidden;
}

.portal-link:hover .portal-image {
  filter: brightness(var(--brightness-hovered));
}
```

### Gallery Filter

```css
.category-filter {
  display: flex;
  justify-content: flex-end;
  gap: .25rem;
}

.category-filter label {
  padding: 1px calc(var(--grid-gap) * .03125rem) 0;
}

.category-filter input:checked + label {
  background: var(--color-text);
  color: var(--color-bg);
}
```

### Article Thumbnail Strip

```css
.article-link {
  display: block;
  width: 100%;
  font-family: var(--font-display);
}

.thumbs {
  display: flex;
  gap: calc(var(--grid-gap) * .0625rem);
}

.thumb-item {
  flex: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

## Motion Rules

- Line reveal: wrap each line in an overflow-hidden span; animate inner span from `translateY(100%)` to `0`.
- Section portals can be translated with viewport units to create a drifting poster layout.
- Hover links: opacity `.6`.
- Hover thumbnails: `filter: brightness(.8)`.
- Hover arrows: translate x by about `.3125rem`.
- Page transitions: fade `#swup` opacity to `0` during route animation.

## Responsive Rules

- At `768px`, reduce `--padding-side` to `15` and `--grid-gap` to `6`.
- Replace fixed desktop nav with hamburger/full-screen menu.
- Stack gallery section metadata and content vertically.
- Reduce title sizes: page titles around `3rem`, pager titles around `1.6875rem`.
- Make thumbnail strips scroll or stack when titles become long.

## Demo

See `ai/demos/grandson-creative-studio-ui/` for a static demo with:

- Fixed minimal header and mobile menu
- Huge wordmark hero
- Floating creation/portrait/beauty portals
- Serif statement block
- Gallery with category filters
- Clipped thumbnail strips
- Fullscreen image viewer
- Custom right scrollbar
