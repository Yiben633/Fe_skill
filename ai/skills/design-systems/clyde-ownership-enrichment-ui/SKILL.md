---
name: clyde-ownership-enrichment-ui
description: Build Clyde-style ecommerce ownership enrichment landing pages. Use when creating product protection SaaS sites, extended warranty pages, product registration funnels, customer lifetime value marketing pages, Studio Freight inspired ecommerce B2B pages, gradient marquee sections, 12-column editorial grids, rounded product mosaics, animated pill buttons, benefit strips, stepped card explainers, logo/testimonial panels, and compact prefooter CTAs.
---

# Clyde Ownership Enrichment UI

Use this skill to recreate the design language learned from the Clyde source: a polished ecommerce SaaS landing page for product protection and ownership enrichment, with editorial typography, warm gradients, smooth motion, rounded product cards, and a strong 12-column grid.

## Design DNA

- Lead with ownership, revenue, lifetime value, product protection, registration, claims, warranties, and ecommerce integrations.
- Pair a practical SaaS message with expressive editorial typography.
- Use Oldschool Grotesk-like sans text for UI/body and Recoleta-like serif for warm headline accents.
- Build around a responsive 4-column mobile grid and 12-column desktop grid.
- Use large fluid viewport-based type, but clamp demo implementations for safer responsive behavior.
- Mix light-grey sections with dark-grey panels; use yellow, orange, and purple as animated gradient accents.
- Keep cards rounded, softly shadowed, and slightly tactile.
- Use marquee bands, gradient text hover states, and stepped explainer cards to make dense B2B content feel alive.
- Product visuals should feel like ecommerce UI snapshots, warranty widgets, receipt cards, claims screens, and product registration panels.

## Tokens

```css
:root {
  --font-recoleta: "Recoleta", Georgia, serif;
  --font-oldschool: "Oldschool Grotesk", Arial, sans-serif;
  --font-oldschool-compact: "Oldschool Grotesk Compact", Arial Narrow, sans-serif;
  --white: #ffffff;
  --black: #000000;
  --light-grey: #f6f6f4;
  --dark-grey: #151515;
  --card-grey: #262626;
  --purple: #df91f7;
  --yellow: #feed7a;
  --orange: #ff8400;
  --gradient-horizontal: linear-gradient(90deg, var(--yellow) 0%, var(--orange) 48.96%, var(--purple) 100%);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
}
```

## Grid System

```css
:root {
  --layout-columns-count: 4;
  --layout-columns-gap: 2.6666666667vw;
  --layout-margin: 5.3333333333vw;
  --layout-width: calc(100vw - (2 * var(--layout-margin)));
}

@media (min-width: 800px) {
  :root {
    --layout-columns-count: 12;
    --layout-columns-gap: 1.7361111111vw;
    --layout-margin: 3.4722222222vw;
  }
}

.layout-block,
.layout-grid {
  max-width: var(--layout-width);
  margin-left: auto;
  margin-right: auto;
}

.layout-grid {
  display: grid;
  grid-template-columns: repeat(var(--layout-columns-count), minmax(0, 1fr));
  gap: var(--layout-columns-gap);
}
```

## Typography

```css
.h2 {
  font-family: var(--font-oldschool);
  font-size: clamp(3rem, 9.583vw, 9rem);
  line-height: 1;
  letter-spacing: -0.03em;
}

.h2-alt {
  font-family: var(--font-recoleta);
  font-size: clamp(3rem, 9.583vw, 9rem);
  line-height: 1;
  letter-spacing: -0.03em;
}

.p {
  font-family: var(--font-oldschool);
  font-size: clamp(1rem, 1.041vw, 1.25rem);
  line-height: 1.6;
}

.p-eyebrow {
  font-family: var(--font-oldschool-compact);
  font-size: clamp(0.75rem, 0.833vw, 1rem);
  line-height: 1.8;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
```

Use the serif face for a single phrase or second line inside a big headline, not for every heading.

## Theme Pattern

```css
.theme-dark {
  --theme-primary: #000000;
  --theme-secondary: #f6f6f4;
  --theme-tertiary: rgba(38, 38, 38, 0.6);
  --theme-card: #262626;
  --theme-hover: #262626;
  --theme-box-shadow: 0 8.867px 9.458px rgba(0, 0, 0, 0.1),
    inset 0 0.637px 3.821px hsla(0, 0%, 100%, 0.25);
}

.theme-light {
  --theme-primary: #f6f6f4;
  --theme-secondary: #000000;
  --theme-tertiary: #ffffff;
  --theme-card: #ffffff;
  --theme-hover: #f0f0ed;
}
```

## Button Pattern

```html
<a class="clyde-button" href="#">
  <span class="clyde-button__inner">Request a demo</span>
</a>
```

```css
.clyde-button {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 999px;
  background: var(--theme-tertiary);
  white-space: nowrap;
}

.clyde-button__inner {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1.4rem;
}

@media (hover: hover) {
  .clyde-button__inner::after {
    position: absolute;
    inset: -2%;
    z-index: -1;
    background: var(--gradient-horizontal);
    filter: blur(15px);
    opacity: 0;
    transform: translateY(40%);
    transition: 0.6s opacity var(--ease-out-expo);
    content: "";
  }

  .clyde-button:hover .clyde-button__inner::after {
    opacity: 0.8;
    animation: clyde-button-glow 4s linear infinite;
  }
}
```

## Marquee Patterns

- Use `.marquee` for partner logos, benefit chips, integration names, or proof points.
- Duplicate the row content so the loop feels continuous.
- Use inverted marquee on alternating rows.

```css
.marquee {
  display: flex;
  overflow: hidden;
}

.marquee__inner {
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: clyde-marquee var(--duration, 22s) linear infinite;
}

@keyframes clyde-marquee {
  from { transform: translate3d(calc(var(--offset, 2rem) * -1), 0, 0); }
  to { transform: translate3d(calc(-50% - var(--offset, 2rem)), 0, 0); }
}
```

## Hero Recipe

1. Use a dark hero with a subtle gradient background image or animated canvas.
2. Put the editorial headline on the left or centered using 12-column placement.
3. Add a round/orb product visualization near the headline.
4. Show 3 small step cases such as checkout, registration, and claims.
5. Fade in partner logos below the hero copy.
6. Use split-character animation only for major hero headlines.

## Product Mosaic

The asset mosaic uses three columns with uneven widths: `1fr .52fr 1fr`. Use mixed aspect ratios and one phone-like column to create an ecommerce product-gallery feel.

```css
.asset-mosaic {
  position: relative;
  min-height: 70vw;
}

.asset-mosaic__inner {
  display: grid;
  grid-template-columns: 1fr 0.52fr 1fr;
  gap: var(--layout-columns-gap);
}

.asset-mosaic__asset {
  overflow: hidden;
  border-radius: 1.111vw;
  transition: 0.6s opacity var(--ease-out-expo);
}
```

## Stepped Card

- Use a large rounded dark card with an image area and content area.
- Include a vertical or horizontal progress indicator.
- Change slides on click or scroll progress.
- Animate visible slide content upward with opacity.
- For mobile, convert to stacked accordion steps.

## Prefooter CTA

Use a rounded panel with image on one side and copy/CTA on the other. Keep the CTA direct: `Request a Demo`, `See Plans`, or `Talk to Sales`.

## QA Checklist

- Do not let massive viewport type overlap product cards on mobile.
- Keep all card radii consistent: larger on mobile, tighter on desktop.
- Provide reduced-motion fallbacks for marquee, gradient hover, and stepped-card transitions.
- Product mosaic assets need stable aspect ratios to avoid layout shift.
- Keep business copy precise: product protection, registration, claims, checkout, post-purchase, lifetime value.

## Demo Reference

A static reusable demo lives at `ai/demos/clyde-ownership-enrichment-ui/`. Open `index.html` directly to inspect the layout and copy the patterns.
