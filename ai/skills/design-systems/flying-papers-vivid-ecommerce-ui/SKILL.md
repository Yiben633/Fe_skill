---
name: flying-papers-vivid-ecommerce-ui
description: Build Flying Papers-style vivid ecommerce and community pages. Use when creating colorful cannabis/rolling-paper brand sites, playful ecommerce homepages, age-gated lifestyle storefronts, variable typography hero sections, stretched display headlines, masked menu labels, peeking illustrated mascot headers, product category grids for cones/rolls/grinders/tips/papers, scenario storytelling sections, promo cards, affiliate/referral banners, and Storyblok/Next.js-inspired colorful shop layouts.
---

# Flying Papers Vivid Ecommerce UI

## Overview

Use this skill to recreate the design language learned from the Flying Papers home page text. The style is vivid, playful, ecommerce-ready, and community-led: bright color pairings, huge stretched typography, illustrated product category worlds, age-gate overlays, masked menu text, and scenario sections that feel like small animated posters.

## Design DNA

- Make the page feel like a colorful ticket into a global lifestyle/shop community.
- Use saturated two-color section pairings instead of neutral SaaS palettes.
- Lead with oversized variable display typography that can stretch, compress, and stack.
- Pair playful product illustrations with compact mono labels and simple shop CTAs.
- Keep ecommerce pathways obvious: category blocks, "Explore products", "Shop all", promo cards, affiliate/gift banners.
- Use age confirmation for regulated or age-sensitive storefront contexts.
- Prefer expressive motion-ready layouts: masked menu labels, peeking mascot/logo, floating product shapes, scroll poster sections.

## Core Tokens

```css
:root {
  --fp-red: #c94245;
  --fp-off-white: #f9f5f2;
  --fp-soft-pink: #f8c1ba;
  --fp-soft-yellow: #f9cc73;
  --fp-yellow: #f4ed36;
  --fp-magenta: #ac4f98;
  --fp-dark-violet: #61609a;
  --fp-green: #b5c995;
  --fp-soft-blue: #a7b5cc;
  --fp-ink: #261918;
  --fp-display: "ObviouslyVariable", "DegularDisplay-Black", Impact, sans-serif;
  --fp-body: "DegularVariable", "DegularDisplay-Regular", Arial, sans-serif;
  --fp-mono: "bergen_monoregular", "Courier New", monospace;
}
```

Use these colors as swappable pairs per section:

- Hero/category: `--fp-soft-pink` background, `--fp-red` text, `--fp-off-white` panels.
- Scenario sleep: `--fp-soft-yellow` with `--fp-magenta`.
- Scenario transcend: `--fp-dark-violet` with `--fp-soft-pink`.
- Scenario third-eye: `--fp-green` with `--fp-magenta`.
- Scenario nothing-box: `--fp-soft-pink` with `--fp-red`.
- Roundup CTA: `--fp-soft-blue` with `--fp-yellow`.

## Typography Recipe

Use one display family with aggressive stretch and weight, one readable body family, and one mono utility family.

```css
.fp-display {
  font-family: var(--fp-display);
  font-weight: 900;
  font-stretch: 190%;
  font-variation-settings: "wght" 900, "wdth" 190;
  line-height: .78;
  letter-spacing: 0;
}

.fp-display-wide {
  font-stretch: 360%;
  font-variation-settings: "wght" 820, "wdth" 360;
}

.fp-kicker {
  font-family: var(--fp-mono);
  font-size: .75rem;
  letter-spacing: .08em;
  text-transform: uppercase;
}
```

Keep hero and scenario headlines huge but constrained with `clamp()` so they fit mobile screens. Do not use negative letter spacing.

## Component Patterns

### Age Gate

Use a full-screen or top-layer confirmation panel before shopping content. Keep copy short, colorful, and clear.

```html
<section class="age-gate" data-age-gate>
  <div class="age-card">
    <p class="fp-kicker">Legal age confirmation</p>
    <h2>Ready to fly?</h2>
    <button data-confirm-age>I am 21+</button>
  </div>
</section>
```

### Masked Menu Button

The menu label should feel animated. Stack two identical labels and slide them on hover/open.

```css
.menu-mask {
  height: 1em;
  overflow: hidden;
}

.menu-mask span {
  display: block;
  transition: transform .28s ease;
}

.menu-button:hover .menu-mask span,
.menu-button.is-open .menu-mask span {
  transform: translateY(-100%);
}
```

### Header And Mascot

- Use fixed top navigation with a left menu button, centered or peeking logo/mascot, and right cart/shop action.
- Mascot/logo can peek from above the header or sit behind the nav layer.
- Keep labels mono and compact; make the brand mark expressive.

### Category Product Blocks

Use five category cards: Pre-rolled cones, Paper Rolls, Grinders, Filter Tips, Rolling Papers.

- Place a simple product illustration in the middle.
- Use oversized display labels or stacked display text.
- Add an overlay CTA: "Explore products".
- Include a global "Shop all" button after the grid.

### Scenario Poster Sections

Create tall panels with one giant question, a mono context label, and a motion placeholder.

Recommended text set:

- "How about a good night while actually sleeping?"
- "How about transcending the power of now, right now?"
- "Consider looking for some third eye perspective?"
- "Care to spend the evening in the nothing box?"
- "Ever wondered what it sounds like to lie down?"

Each scenario should use its own color pair and illustration slug concept: sleeping, transcend, third eye, nothing box, laying down.

### Roundup CTA

Use the source-like pair:

```html
<section class="roundup">
  <p class="fp-kicker">Wherever you want to go</p>
  <h2>Flying Papers is your ticket to get there</h2>
</section>
```

Pair `--fp-soft-blue` with `--fp-yellow`, and add a walking/celebration illustration placeholder.

### Promo Cards

Build three colorful offer cards:

- "Gift a $5 Discount" with magenta/green.
- "Become a Flying Papers affiliate" with dark violet/soft pink.
- "Win an Ibiza Holiday" with red/soft yellow.

Keep cards broad, loud, and clickable, with compact mono details.

## Implementation Notes

- For real projects, replace CSS shape illustrations with brand SVGs, Lottie/canvas loops, or optimized images.
- Use `font-stretch` and `font-variation-settings`, but provide durable fallback fonts.
- Avoid medical or consumption claims. Keep copy community/shop/lifestyle oriented.
- Keep age-gate state accessible and focusable.
- For mobile, let panels stack and reduce display text with `clamp()`.
- Use `text-wrap: balance` for poster headings where supported.

## Demo

See the reusable static demo at `ai/demos/flying-papers-vivid-ecommerce-ui/`.
