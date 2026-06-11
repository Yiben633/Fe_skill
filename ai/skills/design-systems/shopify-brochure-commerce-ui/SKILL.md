---
name: shopify-brochure-commerce-ui
description: Build Shopify-inspired brochure commerce landing pages and navigation systems. Use when creating ecommerce SaaS homepages, dark sticky brochure headers, multi-level mega menus, Shopify-style store/checkout/AI assistant feature cards, PolySans and IBM Plex Mono typography, green-on-black commerce visuals, responsive mobile nav overlays, rounded media cards, checkout conversion panels, and app-store style product marketing sections.
---

# Shopify Brochure Commerce UI

Use this skill to recreate the design patterns learned from the pasted Shopify brochure HTML/CSS. The style is polished ecommerce infrastructure marketing: dark header surfaces, high-contrast green accents, dense mega menus, rounded media cards, product proof panels, and editorial typography that shifts between friendly sans and technical mono.

## Design DNA

- Lead with commerce confidence: clear CTA, high contrast, product proof, and operational details.
- Use a sticky global header that can run in light or dark color mode.
- Build nav as a brochure-kit system: level-1 links, hover/focus mega menu, mobile checkbox/drawer behavior, and delayed reveal animations.
- Use deep black/green surfaces for premium commerce sections.
- Use bright commerce green sparingly for eyebrows, stats, active states, and progress indicators.
- Use rounded media cards with subtle glow, borders, hover zoom, and dark overlays.
- Mix large friendly display type with small technical mono labels.
- Favor practical ecommerce artifacts: checkout window, order cards, store builder cards, product network panels, assistant prompts, payment badges, and global market chips.

## Core Tokens

```css
:root {
  --shop-bg: #02090a;
  --shop-panel: #051517;
  --shop-panel-2: #0e0e10;
  --shop-border: #1a292c;
  --shop-text: #ffffff;
  --shop-muted: #a1a1aa;
  --shop-green: #36f4a4;
  --shop-green-soft: #cbf4d8;
  --shop-ink: #18181b;
  --shop-paper: #f3fcf4;
  --shop-radius-lg: 24px;
  --shop-radius-md: 16px;
  --shop-header-height: 72px;
  --shop-margin: clamp(20px, 5vw, 90px);
  --font-base: Inter, Helvetica, Arial, sans-serif;
  --font-display: PolySans, Inter, Helvetica, Arial, sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
}
```

Use `PolySans` for main display copy if available. Use `IBM Plex Mono` for labels, pills, and technical metrics. Use system fallbacks in demos to avoid external dependencies.

## Header Pattern

Use a 72px sticky header with dark and light modes. Dark mode starts transparent or black, then gains a solid background when open or scrolled.

```html
<header class="bk-header" data-color-mode="dark">
  <nav class="bk-nav">
    <a class="brand" href="#">shopframe</a>
    <button class="mobile-toggle" type="button">Menu</button>
    <ul class="level1">
      <li class="level1-item">
        <button type="button">Why commerce</button>
        <div class="level2-wrapper">...</div>
      </li>
    </ul>
    <a class="trial-button" href="#">Start free trial</a>
  </nav>
</header>
```

```css
.bk-header {
  position: sticky;
  top: 0;
  z-index: 50;
  height: var(--shop-header-height);
  color: var(--shop-text);
}

.bk-header::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: var(--shop-bg);
  opacity: 0;
  transition: opacity .2s ease;
}

.bk-header.is-open::after,
.bk-header.is-scrolled::after {
  opacity: 1;
}
```

## Mega Menu Pattern

Desktop mega menus should feel like product shelves:

- Dark full-width panel under the header.
- Left grid of 3 media cards with image/video blocks, title, description, and arrow reveal.
- Right aside with "Built into every store" label and two compact product cards.
- Reveal with opacity and translate transitions; stagger content slightly.
- Mobile turns each level into a full-screen drawer with a back row and stacked cards.

```css
.mega-panel {
  position: absolute;
  top: var(--shop-header-height);
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 40px;
  padding: 40px var(--shop-margin);
  background: var(--shop-bg);
  border-top: 1px solid var(--shop-border);
  transform: translateY(-18px);
  opacity: 0;
  pointer-events: none;
  transition: transform .3s cubic-bezier(.2, .8, .2, 1), opacity .25s ease;
}

.level1-item:hover .mega-panel,
.level1-item:focus-within .mega-panel {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}
```

## Hero Pattern

Use dark commerce surfaces with one bold promise and an inspectable product visual.

- Background: `#02090a` or near-black.
- Eyebrow: mono uppercase in `--shop-green`.
- Headline: very large, tight, rounded sans.
- CTA: light or green pill button.
- Visual: checkout/storefront/admin card with nested panels and shadow.

## Feature Cards

Use cards to show product capability, not decoration.

- Rounded 16-24px.
- Dark card background: `#051517` or `#0e0e10`.
- Border: `#19272a`.
- Optional pseudo glow: blurred green/blue radial ellipse behind content.
- Media image/video should crop with `object-fit: cover` and hover scale to `1.08-1.25`.
- Keep title 16-20px and body 14px muted.

## Commerce Visual Components

Use these reusable blocks:

- Checkout card: payment rows, "express checkout" strip, total row, trust badge.
- Sidekick assistant: black prompt card with green assistant response and action pills.
- Global markets chips: country/currency chips in a wrapping grid.
- Conversion stat: big percentage, mono label, thin divider.
- Store builder panel: product card grid with price tags and drag handles.

## Responsive Rules

- Desktop: header nav inline, mega panel absolute below header, media grid columns.
- Tablet: reduce header gaps and card grid spacing.
- Mobile: hide inline nav, show full-screen drawer, stack mega cards, keep CTA visible.
- Use `100dvh` for drawers and `overflow-y: auto` for level panels.

## Interaction Rules

- Header becomes solid on scroll.
- Mega menu opens on hover and keyboard focus on desktop.
- Mobile menu toggles with a button; close on Escape.
- Media cards can zoom on hover, but layout must not shift.
- Respect `prefers-reduced-motion`.

## QA Checklist

- Header remains sticky and readable on dark/light backgrounds.
- Mega menu is reachable by keyboard and stays open on focus.
- Mobile drawer scrolls without body bleed.
- Cards keep text readable over dark backgrounds.
- CTA contrast passes visually in both dark and light modes.
- Demo does not depend on external images or fonts to render.
