---
name: v0-dark-template-homepage
description: Build v0-style dark template marketplace and AI app builder homepage interfaces. Use when creating dark Vercel/v0-inspired landing pages, template galleries, integration icon strips, design-mode showcases, theme swatches, mobile mockups, hover preview overlays, skeleton masked previews, browse-all CTAs, and community template card grids.
---

# v0 Dark Template Homepage

Use this skill to recreate the design language learned from the pasted v0 homepage/template marketplace markup. The style is dark-first, product-led, compact, and gallery-heavy: a direct hero, prompt/search input, integration icons, theme strips, mobile mockups, and community template cards with subtle hover overlays.

Demo reference: `ai/demos/v0-dark-template-homepage/index.html`.

## Design DNA

- Start with a dark page (`color-scheme: dark`) and high-contrast white text.
- Keep the first viewport focused on the product action: prompt, build, browse, or fork templates.
- Use restrained Vercel/v0-like grays, thin borders, compact nav, and low-radius controls.
- Make visual content concrete: app screenshots, generated preview panels, theme swatches, integration icons, or device mockups.
- Prefer repeatable gallery systems over decorative hero art.
- Use motion sparingly: hover overlay fades, slow marquee rows, gooey sync dots, or skeleton shimmer.
- Keep cards stable with fixed aspect ratios so preview images and hover buttons never resize the layout.

## Visual Tokens

```css
:root {
  color-scheme: dark;
  --v0-bg: #050505;
  --v0-surface: #0f0f10;
  --v0-surface-2: #171719;
  --v0-surface-3: #202024;
  --v0-text: #f5f5f5;
  --v0-muted: #a1a1aa;
  --v0-dim: #71717a;
  --v0-border: rgba(255, 255, 255, .12);
  --v0-border-strong: rgba(255, 255, 255, .2);
  --v0-blue: #3b82f6;
  --v0-green: #22c55e;
  --v0-pink: #ec4899;
  --v0-yellow: #eab308;
  --v0-radius: 8px;
  --v0-radius-lg: 16px;
}
```

Use a Geist/Inter/system sans stack:

```css
body {
  margin: 0;
  font-family: Geist, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--v0-bg);
  color: var(--v0-text);
}
```

## Layout Recipe

1. Sticky dark nav: small wordmark, plain nav links, compact auth/actions.
2. Hero: literal product/category headline, short copy, and a prompt/search bar as the primary surface.
3. Integration strip: 10-12 square or circular icons in muted dark tiles.
4. Showcase band: design-mode panels, theme swatches, template rows, or mobile mockup.
5. Template marketplace: responsive 1/2/3 column card grid.
6. Skeleton/fade preview: masked placeholder cards behind "browse all" or loading sections.
7. Feature cards: 2-3 rounded cards for build, publish, sync, or mobile preview.

## Template Card Pattern

Use this for community template cards.

```html
<article class="template-card" data-category="ai">
  <a class="template-preview" href="#" aria-label="View Image Generation Playground">
    <div class="preview-art preview-ai"></div>
    <span class="preview-overlay">
      <span class="view-button">View Details</span>
    </span>
  </a>
  <div class="template-meta">
    <span class="avatar">AI</span>
    <div class="template-copy">
      <h3>Image Generation Playground</h3>
      <p>5.9k uses &middot; 666 likes</p>
    </div>
  </div>
</article>
```

```css
.template-card {
  min-width: 0;
}

.template-preview {
  aspect-ratio: 16 / 9;
  border: 1px solid var(--v0-border);
  border-radius: var(--v0-radius);
  overflow: hidden;
  position: relative;
  display: block;
  background: var(--v0-surface);
}

.preview-overlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,.26), rgba(64,64,64,.32));
  transition: opacity .18s ease;
}

.template-preview:hover .preview-overlay,
.template-preview:focus-visible .preview-overlay {
  opacity: 1;
}
```

Card footer rules:

- Put avatar, title, and metrics outside the image preview.
- Keep title to one or two lines; use muted text for uses and likes.
- Use a hover overlay for the action instead of adding a large permanent CTA.
- Do not nest cards inside cards; only the template item itself is a card.

## Integration Icons

Use a compact strip/cloud when showing supported tools.

```html
<div class="integration-strip" aria-label="Supported integrations">
  <span class="integration-icon">N</span>
  <span class="integration-icon">PG</span>
  <span class="integration-icon">AI</span>
</div>
```

```css
.integration-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.integration-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid var(--v0-border);
  border-radius: 12px;
  background: linear-gradient(180deg, var(--v0-surface-2), var(--v0-surface));
  color: var(--v0-muted);
}
```

## Theme Swatches And Mobile Mockups

- Theme swatches should be small, fixed-size panels with 3-5 color bars.
- Mobile mockups should have a real device frame, speaker slot, and visible app content.
- Keep mockups unframed inside their section; avoid placing a card inside another card.
- Use varied accent colors so the dark interface does not collapse into one hue.

## Skeleton Mask Preview

Use this when implying more templates below a CTA or during loading.

```css
.skeleton-mask {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  mask: linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%);
}

.skeleton-card {
  aspect-ratio: 16 / 9;
  border-radius: var(--v0-radius);
  background: linear-gradient(90deg, #151518, #24242a, #151518);
  background-size: 220% 100%;
  animation: skeleton-shift 1.8s linear infinite;
}
```

## Gooey Sync Visual

For repo sync/build animations, use SVG filter blur plus color matrix, then animate a few small circles. Always provide a reduced-motion fallback.

```html
<svg class="gooey-filter" aria-hidden="true">
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" />
  </filter>
</svg>
```

## Responsive Rules

- Marketplace grid: 1 column on mobile, 2 on tablet, 3 on wide desktop.
- Hero copy max-width: 720-820px.
- Keep nav actions compact; hide secondary links on narrow screens.
- Do not scale font size with viewport width. Use clamp only for block width/height, not typography.
- Keep text inside buttons short: "Build", "Browse", "View Details", "Fork".

## QA Checklist

- Preview cards keep a stable 16:9 ratio.
- Hover/focus overlay is keyboard accessible.
- Template search/filter does not collapse card dimensions.
- Mobile view has no overlapping nav, hero, or card text.
- `prefers-reduced-motion` stops marquee, skeleton, and gooey animations.
