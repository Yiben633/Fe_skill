---
name: panzoo-fictional-world-portfolio-ui
description: Build Panzoo-style fictional-world designer portfolio interfaces. Use when creating electric-blue Japanese creator portfolios, vivid pop art direction sites, TT Globs display headings, Zen Maru Gothic rounded body typography, Aoboshi One accent titles, hot pink accent systems, mascot/dog loading screens, centered-logo headers, full-screen mobile menus, large cloth/mascot key visuals, works cards with slow thumbnail zoom, goods physics collage layouts, neon green hover outlines, eye/contact footers, long arrow More links, and slim custom scrollbars.
---

# Panzoo Fictional World Portfolio UI

Use this skill to recreate the design language learned from the Panzoo portfolio source. The interface feels like a playful fictional-world designer portfolio: electric blue stage, white type, hot pink accents, rounded Japanese typography, chunky display headings, mascot objects, moving loading motifs, floating goods, and tactile hover states.

## Design DNA

- Lead with a saturated electric blue full-page background and high-contrast white text.
- Add hot pink as the main accent for small labels, outlines, badges, and callouts.
- Use neon green only for sharp hover feedback on goods or interactive cutouts.
- Make the site feel like a toy box or fictional-world archive, not a corporate portfolio.
- Use oversized display headings and simple section names such as `Profile`, `Works`, `Goods`, `Contact`.
- Keep content blocks sparse but visually loud: big type, strong negative space, floating objects.
- Let decorative items overlap the grid as if they are physical stickers, cards, toys, or mascot parts.

## Typography

Use this stack when external fonts are available:

```html
<link rel="stylesheet" href="https://use.typekit.net/iyl0tii.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Zen+Maru+Gothic:wght@400;500&display=swap" rel="stylesheet">
```

```css
:root {
  --font-ja: "Zen Maru Gothic", system-ui, sans-serif;
  --font-en: "Aoboshi One", Georgia, serif;
  --font-en-display: "tt-globs", Georgia, serif;
}
```

- `tt-globs`: main display headings, large logo-like words, playful section titles.
- `Zen Maru Gothic`: body copy, navigation, card labels, friendly rounded UI text.
- `Aoboshi One`: secondary English title accents when a softer serif personality is needed.
- Keep display heading weight light, around `300`, and use large sizes.

## Core Tokens

```css
:root {
  --line-height: 1.6;
  --padding-side: 4.5rem;
  --grid-gap: 1.125rem;
  --z-index-global-header: 1000;
  --z-index-sp-menu: 2000;
  --z-index-loading: 99999;
  --font-ja: "Zen Maru Gothic", system-ui, sans-serif;
  --font-en: "Aoboshi One", Georgia, serif;
  --font-en-display: "tt-globs", Georgia, serif;
  --color-white: #fff;
  --color-black: #000;
  --color-blue: #0000df;
  --color-pink: #ff0080;
  --color-green: #00ff46;
  --color-bg: var(--color-blue);
  --color-text: var(--color-white);
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-out-quint: cubic-bezier(.22, 1, .36, 1);
  --duration-transform-base: .8s;
}

@media (max-width: 768px) {
  :root {
    --padding-side: 1.875rem;
    --grid-gap: .75rem;
  }
}

@media (max-width: 576px) {
  :root {
    --padding-side: 1.25rem;
  }
}
```

## Layout Recipe

1. Loading overlay: full viewport blue background, animated progress symbol, moving mascot or dog-like chip, and playful loading label.
2. Fixed header: full-width, pointer-events disabled on wrapper, pointer-events enabled on logo/menu, right-aligned navigation on desktop.
3. Mobile menu: compact header height, menu toggle, full-screen blue overlay, large stacked links.
4. Key visual: huge blue stage with a central mascot/logo composition, sticker shapes, pink badges, and white display text.
5. Sections: use `Profile`, `Works`, `Goods`, and `Contact` in a simple vertical flow.
6. Works: grid/list of project cards with image-like panels, date, title, subtitle, and slow thumbnail zoom on hover.
7. More link: text plus a very long arrow line that stretches across the row.
8. Goods: relative physics area with absolute floating product cards/cutouts, varied rotations, and neon green hover borders.
9. Footer: oversized contact link, eye motifs with moving pupils, compact social/shop links.
10. Custom scrollbar: slim fixed track on desktop, hidden on mobile.

## Header Pattern

```css
.pz-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-global-header);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 5.625rem;
  padding: 0 2rem;
  pointer-events: none;
}

.pz-header > * {
  pointer-events: auto;
}

.pz-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-en-display);
  font-weight: 300;
}
```

## Section Heading

```css
.pz-heading {
  display: block;
  font-family: var(--font-en-display);
  font-size: clamp(2.5rem, 7vw, 4.1875rem);
  font-weight: 300;
  line-height: .9;
  letter-spacing: 0;
}
```

## Works Card Pattern

```css
.pz-work-card {
  display: block;
  color: inherit;
  text-decoration: none;
}

.pz-work-thumb {
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.35);
  border-radius: 1.25rem;
}

.pz-work-thumb-inner {
  aspect-ratio: 4 / 3;
  transition: transform 4s var(--ease-out-expo);
}

.pz-work-card:hover .pz-work-thumb-inner {
  transform: scale(1.08);
}
```

## Goods Physics Collage

```css
.pz-goods-physics {
  position: relative;
  width: 100vw;
  height: 80vh;
  margin-inline: calc(var(--padding-side) * -1);
}

.pz-good {
  position: absolute;
  width: calc(var(--sqrt-aspect, 1) * 15.625rem);
  transform: translate(var(--x), var(--y)) rotate(var(--r));
  border: 2px solid transparent;
  transition: border-color .2s linear, transform .8s var(--ease-out-expo);
  will-change: transform;
}

.pz-good:hover {
  border-color: var(--color-green);
}
```

## Motion Notes

- Loading progress can rotate or scale repeatedly before fading out.
- Works thumbnails use a slow 4-second zoom so hover feels like a living poster.
- Goods can drift with CSS animation or JS pointer parallax, but keep collision/physics optional.
- Footer pupils may follow pointer movement for a playful contact moment.
- Respect reduced motion by disabling long animations and using static transforms.

## Responsive Rules

- At tablet size, reduce side padding and shrink header height to around `4rem`.
- On narrow screens, stack works cards to one column and make goods cutouts smaller.
- The key visual can rotate or crop theatrically on mobile, but keep text readable.
- Hide the slim custom scrollbar below `768px`.
- Keep tappable controls at least 44px high in the mobile menu.

## Demo Files

A reusable static demo is available at:

`ai/demos/panzoo-fictional-world-portfolio-ui/index.html`

