---
name: eco-stablecoin-network-ui
description: Build Eco-style programmable money and stablecoin infrastructure pages. Use when creating dark fintech/Web3 landing pages, stablecoin network sites, cross-chain payments pages, developer infrastructure product pages, Webflow-style smooth scroll pages, frosted nav dropdowns, globe/video hero sections, split-text about sections, Routes/Permit3/programmable transaction cards, Linear-inspired lightboxes, separators, dot-matrix feature illustrations, benefit columns, company logo grids, use-case grids, logo marquees, CTA footers, and newsletter forms for blockchain products.
---

# Eco Stablecoin Network UI

Use this skill to recreate the design language learned from the Eco Webflow landing page: a dark, polished stablecoin infrastructure site with a globe-like hero, huge centered headlines, frosted navigation, programmable money product cards, and motion inspired by Lenis, GSAP, ScrollTrigger, and SplitText.

## Design DNA

- Lead with programmable money, stablecoin movement, cross-chain routing, execution, solvers, and developer infrastructure.
- Use a dark navy/black foundation with bright primary accent and soft white text.
- Make the hero cinematic: large globe/video background, dark overlay, centered giant headline, subtle social icons.
- Keep navigation compact, glassy, and product-led with dropdown panels for Products, Solutions, and Resources.
- Use large split-text reveal sections for category-defining statements.
- Present products as infrastructure primitives: Routes, Programmable Addresses, Programmable Transactions, Permit3, Sauce, Crowd Liquidity.
- Use cards with alternating image/content positions for "build with Eco" or use-case sections.
- Add product-system details from the pasted Linear-like CSS: full-screen image lightboxes, separator variants, embedded tweet cards, perspective feature diagrams, benefits columns, dot-matrix canvas texture, and compact company logo tiles.
- Include logo strips or marquee-like investor/customer rows.
- End with a footer CTA: "Unlock truly programmable money movement" and a newsletter email input.

## Tokens

```css
:root {
  --eco-black: #05070d;
  --eco-navy: #0f111a;
  --eco-panel: #121827;
  --eco-panel-soft: rgba(255, 255, 255, 0.08);
  --eco-white: #ffffff;
  --eco-white-secondary: rgba(255, 255, 255, 0.68);
  --eco-white-tertiary: rgba(255, 255, 255, 0.42);
  --eco-primary: #8dff6a;
  --eco-blue: #7b8cff;
  --eco-cyan: #7ef6ff;
  --eco-border: rgba(255, 255, 255, 0.14);
  --eco-ease: cubic-bezier(0.65, 0.01, 0.05, 0.99);

  --color-bg-primary: #0f1011;
  --color-bg-secondary: #151719;
  --color-bg-tertiary: #1c1f23;
  --color-text-primary: #f6f7f8;
  --color-text-tertiary: rgba(246, 247, 248, 0.62);
  --color-text-quaternary: rgba(246, 247, 248, 0.38);
  --color-border-primary: rgba(255, 255, 255, 0.16);
  --color-border-secondary: rgba(255, 255, 255, 0.08);
  --color-border-translucent: rgba(255, 255, 255, 0.12);
  --color-border-translucent-strong: rgba(255, 255, 255, 0.2);
  --color-line-tertiary: rgba(255, 255, 255, 0.1);
  --radius-rounded: 999px;
  --layer-dialog-overlay: 90;
  --layer-dialog: 100;
  --homepage-padding-inset: clamp(1.5rem, 4vw, 4rem);
  --shadow-low: 0 16px 50px rgba(0, 0, 0, 0.32);
  --font-regular: Inter, Arial, sans-serif;
  --font-weight-normal: 400;
  --color-alpha: 255;
}
```

## Base Shell

```css
body {
  margin: 0;
  color: var(--eco-white);
  background: var(--eco-black);
  font-family: Inter, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overscroll-behavior-y: none;
}

::selection {
  background: var(--eco-primary);
  color: var(--eco-black);
  text-shadow: none;
}

input,
textarea,
select {
  appearance: none;
  border-radius: 0;
  background-image: none;
  caret-color: var(--eco-primary);
}

.section {
  position: relative;
  z-index: 1;
  padding: clamp(5rem, 9vw, 9rem) 0;
}

.container {
  width: min(1180px, calc(100vw - 2rem));
  margin-inline: auto;
}
```

## Navigation Pattern

The source uses Webflow nav plus a GSAP menu overlay. Recreate the behavior with a `data-nav` state, a `.scrim`, and a menu clip variable.

```html
<header class="nav">
  <a class="brand" href="#">eco</a>
  <nav class="nav_middle" data-nav="closed">
    <a class="nav_link" href="#">Products</a>
    <a class="nav_link" href="#">Solutions</a>
    <a class="nav_link" href="#">Docs</a>
  </nav>
  <button class="nav_menu" data-menu-toggle aria-label="Toggle menu">
    <span class="nav_menu-line cc-top"></span>
    <span class="nav_menu-line cc-bottom"></span>
  </button>
</header>
<div class="scrim"></div>
```

```css
.nav {
  position: fixed;
  top: 1rem;
  left: 50%;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100vw - 2rem));
  transform: translateX(-50%);
}

.nav_middle {
  --menu-clip: 100%;
  display: flex;
  gap: 0.5rem;
  padding: 0.45rem;
  border: 1px solid var(--eco-border);
  border-radius: 999px;
  background: rgba(15, 17, 26, 0.72);
  backdrop-filter: blur(18px);
  clip-path: inset(0 var(--menu-clip) 0 0 round 999px);
  transition: clip-path 0.8s var(--eco-ease);
}

.nav_middle[data-nav="open"] {
  --menu-clip: 0%;
}

.scrim {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: none;
  background: rgba(0, 0, 0, 0.62);
}
```

## Button Pattern

Use an arrow double-stack inside `.btn_right` with a gradient glow. On hover, slide the two arrows to imply forward movement.

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 3rem;
  padding: 0 1rem 0 1.2rem;
  border: 1px solid var(--eco-border);
  border-radius: 999px;
  color: var(--eco-white);
  background: rgba(255, 255, 255, 0.08);
  text-decoration: none;
}

.btn_right {
  position: relative;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 50%;
  background: var(--eco-primary);
  color: var(--eco-black);
}

.btn_gradient {
  position: absolute;
  inset: -30%;
  z-index: -1;
  background: radial-gradient(circle, var(--eco-primary), transparent 65%);
  filter: blur(12px);
}
```

## Hero Recipe

- Full viewport or 110vh dark section.
- Background video/globe simulation behind a `.dark-layer`.
- Big centered headline such as `Move Money Smarter`.
- Supporting line: `Leading stablecoin companies use Eco to make money movement more programmable than ever before.`
- Add social icons or small links around the hero, but keep them quiet.

## Split Text Section

Use a tall sticky white or light section after the hero. Animate characters or words in while the user scrolls.

```html
<section class="about section white-bg">
  <div class="about_sticky">
    <p class="h1 split-text">Build stablecoin products without building stablecoin infrastructure.</p>
  </div>
</section>
```

## Product Cards

Use a 3-card row for core primitives.

- Routes: real-time stablecoin sends and swaps.
- Programmable Addresses: wallet addresses that settle on your terms.
- Programmable Transactions: all-or-nothing execution for complex onchain flows.

## Use-Case Cards

Use alternating media/content cards for:

- Exchange any asset, any chain.
- Simplify onchain UX.
- Program perfect execution.
- AI Agents.
- DeFi Protocols.
- Payment Platforms and PSPs.
- Solvers and Market Makers.
- Stablecoin Issuers.
- Treasury and Yield Managers.
- Wallets and Consumer Apps.

## Linear-Like Utility Components

Use these components when the page needs a more technical product-system layer.

### Lightbox

Use a wrapper around any image, card, or diagram with `data-lightbox-src`. Hide the source wrapper while the overlay is open so the transition can feel like the media expanded.

```html
<button class="lightbox_wrapper" data-lightbox-src="diagram.png" type="button">
  <img src="diagram.png" alt="Routing diagram">
</button>
<div class="lightbox_overlay" hidden></div>
<div class="lightbox_lightbox" hidden>
  <div><img alt=""></div>
</div>
```

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
  object-fit: contain;
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

### Separator Variants

Use `data-orientation="horizontal"` or `vertical`, then add one variant class: `separator-glass`, `separator-skeuo`, `separator-fading`, or `separator-border`.

```css
.separator {
  background: var(--color-line-tertiary);
  border-radius: var(--radius-rounded);
  flex-shrink: 0;
}

.separator[data-orientation="horizontal"] {
  width: 100%;
  height: 1px;
  --direction: to right;
}

.separator[data-orientation="vertical"] {
  width: 1px;
  align-self: stretch;
  --direction: to bottom;
}

.separator-glass {
  background: rgba(180, 188, 208, 0.1);
}

.separator-skeuo {
  background: var(--color-bg-primary);
  box-shadow: 0 1px 0 var(--color-border-secondary);
}

.separator-fading {
  --color: rgba(var(--color-alpha), var(--color-alpha), var(--color-alpha), 0.1);
  background: linear-gradient(var(--direction), transparent, var(--color) 50%, transparent);
}

.separator-border {
  background: var(--color-border-primary);
}
```

### Tweet Theme Card

For testimonial or social proof embeds, wrap the embed in `.tweet-theme` and set tweet CSS variables on the child card. If using a plain fallback card, keep the same spacing and border tokens.

### Perspective Feature Illustration

Place SVG-like loaders or dot grids inside a `.feature-agents-wrapper` with `perspective: 1000px`. Put loader elements absolutely and apply transforms like `rotateX(60deg) rotateY(3deg) scale(.85) rotate(43deg)` to create the isometric product-console feel.

### Benefits Row

Use `.benefits` with three or four `.benefit` children. Each item gets a right border, inset padding, fixed tall height on desktop, and bottom-aligned copy. On mobile, switch to horizontally scrollable cards sized around `328px x 440px`.

### Dot Matrix Tool

Use `.dot-matrix-tool` as a relative full-size wrapper with a canvas absolutely inset and pointer events disabled. Draw tiny low-alpha dots or scanlines in JS for subtle depth.

### Company Logo Tiles

Use a container-query-friendly logo tile: `48px` square by default, `72px` square when the parent container is narrow, dark fill, 4px radius, and `object-fit: contain` for the mark.

## Footer CTA

Use a dark footer with a large orb graphic, centered CTA text, two buttons, a newsletter card, and compact social/legal links.

## Motion Guidance

- Use Lenis-style smooth scrolling only when the app can handle it.
- Use GSAP/SplitText-style effects for hero and about copy, but provide readable static fallback.
- Respect `prefers-reduced-motion`.
- Avoid disabling pointer events on iframes unless smooth scroll is active.

## QA Checklist

- Keep crypto copy concrete and developer-focused.
- Do not overload the hero with too many buttons; "Start Building" and "Read Docs" are enough.
- Mobile nav must lock body scroll while open.
- Dropdowns need visible text hierarchy: product name plus one-line description.
- Use cards and code-like visual motifs instead of generic finance stock imagery.
- Newsletter form must have a real label or accessible placeholder.

## Demo Reference

A static reusable demo lives at `ai/demos/eco-stablecoin-network-ui/`. Open `index.html` directly to inspect the layout and copy the HTML/CSS/JS patterns.
