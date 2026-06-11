---
name: westlake-architectural-products-ui
description: Build Westlake Royal/Eldorado Stone-style architectural product pages. Use when creating stone veneer, roofing, siding, building product catalogs, sample-order pages, inspiration galleries, dealer locators, utility headers, product mega menus with image cards, pill filters, Select2-like controls, dual-ring loading overlays, and warm neutral corporate product interfaces.
---

# Westlake Architectural Products UI

## Overview

Use this skill to recreate the design language learned from the pasted Westlake Royal/Eldorado Stone HTML and CSS. The interface is a polished architectural product catalog: warm gray surfaces, thin Museo-style headings, navy actions, utility-heavy header navigation, image-card mega menus, product filters, stone veneer cards, inspiration overlays, and soft corporate footers.

## Design DNA

- Keep the page premium but practical: large architectural headings, clear product paths, and catalog density.
- Use warm off-white and gray surfaces instead of pure white everywhere.
- Make navy the primary action color; reserve it for CTAs, active filters, links, and spinner rings.
- Prefer thin, airy headings with generous line-height and compact body copy.
- Use large rounded corners from 8px to 32px, especially on image cards and modals.
- Pair product photography or stone-like textures with crisp white cards and restrained borders.
- Build headers with a utility row, brand mark, search, account/location actions, and a desktop nav.
- Use mega menus as image-backed cards with title overlays and simple arrow affordances.
- For loading states, use a fixed translucent white overlay and a dual-ring spinner.

## Visual Tokens

```css
:root {
  --color-primary: #003087;
  --color-primary-hover: #001547;
  --color-background: #f9f8f6;
  --color-surface: #ffffff;
  --color-surface-warm: #f4f3ef;
  --color-border: #eae7e0;
  --color-border-strong: #d6cfc1;
  --color-text: #211f1c;
  --color-muted: #75797f;
  --color-cool: #eceDEE;
  --backdrop-blur: blur(20px);
  --backdrop-blur-bg: rgba(255, 255, 255, .64);
  --radius-xs: .8rem;
  --radius-sm: 1.2rem;
  --radius-md: 1.6rem;
  --radius-lg: 2rem;
  --radius-xl: 3.2rem;
  --shadow-soft: 0 2.4rem 6rem rgba(33, 31, 28, .1);
}
```

Use a Museo Sans-like stack:

```css
body {
  font-family: "Museo Sans", "Avenir Next", "Segoe UI", Arial, sans-serif;
  color: var(--color-text);
  background: var(--color-background);
}

.heading {
  font-weight: 300;
  letter-spacing: 0;
}
```

## Layout Recipe

1. Utility strip: small links for favorites, location, language, and professional resources.
2. Primary header: brand logo, centered desktop nav, search and account icon buttons.
3. Mega menu: warm white dropdown with image-card product categories and a featured CTA column.
4. Hero or page header: oversized thin headline, short copy, navy CTA, secondary outline CTA.
5. Product navigator: search input, pill filters, Select2-like dropdowns, and active count.
6. Product grid: stone-texture cards with favorite buttons, material metadata, and sample-order CTAs.
7. Inspiration gallery: large image tiles with dark overlay copy on hover or focus.
8. Footer: warm gray band, brand links, professionals/resources columns, newsletter or locator CTA.
9. Loading overlay: full viewport translucent white layer with dual-ring spinner.

## Header And Mega Menu

```html
<header class="site-header">
  <div class="header__utilities">
    <a href="#">Favorites</a>
    <a href="#">Find a dealer</a>
    <a href="#">English</a>
  </div>
  <div class="header__main">
    <a class="brand" href="#">Eldorado Stone</a>
    <nav class="desktop-nav">
      <a href="#">Products</a>
      <a href="#">Inspiration</a>
      <a href="#">Resources</a>
      <a href="#">Professionals</a>
    </nav>
    <button class="button button--icon" aria-label="Search">/</button>
  </div>
  <div class="menu-dropdown">
    <a class="card-styled card-styled--menu" href="#">
      <span class="card-styled__image stone-warm"></span>
      <span class="card-styled__title">Stone and Brick</span>
    </a>
  </div>
</header>
```

```css
.site-header {
  background: rgba(255, 255, 255, .9);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: var(--backdrop-blur);
}

.header__utilities,
.header__main {
  max-width: 118rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__utilities {
  min-height: 3.6rem;
  font-size: 1.2rem;
  color: var(--color-muted);
}

.brand {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}

.menu-dropdown {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.6rem;
  padding: 2rem;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
}

.card-styled--menu {
  min-height: 16rem;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  color: #fff;
}

.card-styled__image {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #c7b49b, #776a5f 48%, #e4ddd0);
}

.card-styled__title {
  position: absolute;
  left: 1.6rem;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 1;
  font-size: 2rem;
  font-weight: 300;
}
```

## Buttons, Pills, And Controls

```css
.button {
  min-height: 4.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  padding: 0 2rem;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.button--primary {
  background: var(--color-primary);
  color: #fff;
}

.button--primary:hover {
  background: var(--color-primary-hover);
}

.button--secondary {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.button--tertiary {
  color: var(--color-primary);
  background: transparent;
}

.button--icon {
  width: 4.8rem;
  padding: 0;
  border-color: var(--color-border);
  border-radius: 50%;
}

.pill {
  min-height: 3.8rem;
  padding: 0 1.6rem;
  border: 1px solid var(--color-border-strong);
  border-radius: 99rem;
  background: var(--color-surface);
  color: var(--color-text);
}

.pill[aria-pressed="true"] {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: #fff;
}
```

## Product Card Pattern

```html
<article class="product-card">
  <button class="favorite" aria-label="Save product">+</button>
  <div class="product-card__media stone-cool"></div>
  <div class="product-card__body">
    <p class="eyebrow">Stone veneer</p>
    <h3>Cliffstone Whitebark</h3>
    <p>Clean linear stone with soft cream, tan, and charcoal variation.</p>
    <a class="button button--secondary" href="#">Order sample</a>
  </div>
</article>
```

Use consistent card heights. Product names and metadata should never resize the card on hover.

## Loading Overlay

Convert nested CSS snippets into plain CSS before shipping:

```css
.loading-circle {
  position: fixed;
  inset: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, .6);
}

.loading-circle svg {
  animation: lds-dual-ring 1.2s linear infinite;
}

.loading-circle .lds-dual-ring,
.mfp-ajax-holder .mfp-preloader {
  position: absolute;
  left: 50%;
  top: 50%;
  display: inline-block;
  width: 6.4rem;
  height: 6.4rem;
  transform: translate(-50%, -50%);
}

.loading-circle .lds-dual-ring::after,
.mfp-ajax-holder .mfp-preloader::after {
  content: "";
  display: block;
  width: 4.6rem;
  height: 4.6rem;
  margin: .1rem;
  border: .5rem solid var(--color-primary);
  border-color: var(--color-primary) transparent var(--color-primary) transparent;
  border-radius: 50%;
  animation: lds-dual-ring 1.2s linear infinite;
}

.loading-circle-fullscreen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  background: rgba(255, 255, 255, .7);
}

.loading-circle-fullscreen svg {
  animation: spin 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .loading-circle svg,
  .loading-circle .lds-dual-ring::after,
  .loading-circle-fullscreen svg {
    animation: none;
  }
}
```

## Responsive Guidance

- Collapse the mega menu into a stacked category list below 900px.
- Keep product cards at two columns on tablet and one column on narrow phones.
- Preserve readable button sizes; icon buttons should remain 44px or larger.
- Keep the utility strip short on mobile; hide optional links before wrapping the brand row.
- Use `aspect-ratio` on media tiles so loading, hover, and favorite states do not shift layout.

## Quality Checklist

- Header utility links, nav links, and search/account controls are present.
- Product filters include active pill states and at least one dropdown-like control.
- Product cards have texture/image areas, metadata, favorite action, and sample CTA.
- Loading overlay can be shown without changing the page layout underneath.
- Colors stay warm-neutral plus navy; avoid blue/purple gradient-heavy styling.
- Text and buttons fit on mobile without overlap.
