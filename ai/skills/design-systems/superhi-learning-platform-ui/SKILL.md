---
name: superhi-learning-platform-ui
description: Build SuperHi-style pastel learning platform pages and components. Use when creating online course homepages, creative education landing pages, pastel rounded panels, pale-blue gradient heroes, glass modals, details/summary accordions, site banners, CTA split panels, press/article carousels, number counters, mono number indicators, steps/breadcrumb indicators, glass footers, and CSS token systems with spacing, panel, color, typography, radius, elevation, motion, and backdrop blur variables.
---

# SuperHi Learning Platform UI

Use this skill to recreate the SuperHi design language learned from the pasted Next.js/CSS-module snippets. The system is friendly, rounded, pastel, and component-driven: large soft panels, pale-blue hero gradients, glass overlays, modular spacing tokens, mono indicators, and simple interaction states.

## Design DNA

- Build with CSS variables first: spacing, color, panel background, panel color, radius, glass blur, timing, and easing.
- Use rounded panels around `24px`; nested media/cards use `8px` or `16px`.
- Prefer pastel surfaces: pale blue, blue, yellow, green, pink, red.
- Keep typography soft but crisp: display headings with slight negative letter spacing, body text with comfortable line height, mono for counters and small indicators.
- Use `text-wrap: balance` or `pretty` for hero and CTA copy.
- Use glass backdrops for modal and footer surfaces.
- Use native `details`/`summary` for accordions and rotate a plus icon to 45deg when open.
- Use full-screen modal content on small screens; switch to fit-content centered dialog above `40rem`.
- Use panel variables: `--panel-background`, `--panel-color`, `--panel-inset`, and `--panel-border-radius`.

## Tokens

```css
:root {
  --color-white: #ffffff;
  --color-grey-90: #24242a;
  --color-grey-70: #6c6d75;
  --color-blue: #2727e6;
  --color-blue-30: #dfe7ff;
  --color-blue-50: #2727e6;
  --color-blue-60: #1717a8;
  --color-pale-blue-40: #edf5ff;
  --color-pale-blue-50: #dbeeff;
  --color-yellow-30: #fff5bf;
  --color-yellow-50: #ffdf56;
  --color-green-50: #28aa74;
  --color-pink-50: #ffb7da;
  --color-red-30: #ffd6d2;
  --glass-color: rgba(255, 255, 255, .64);
  --glass-blur: 18px;
  --space-4: .25rem;
  --space-8: .5rem;
  --space-16: 1rem;
  --space-24: 1.5rem;
  --space-32: 2rem;
  --space-40: 2.5rem;
  --space-48: 3rem;
  --space-64: 4rem;
  --space-80: 5rem;
  --header-safe-area-top: 5rem;
  --panel-internal-inset: var(--space-24);
  --panel-border-radius: var(--space-24);
  --elevation-medium: 0 18px 60px rgba(39, 39, 230, .16);
  --timing-fade: 180ms;
  --timing-movement: 320ms;
  --easing-fade: ease;
  --easing-movement: cubic-bezier(.2, .8, .2, 1);
  --font-family-disp: "Helvetica Neue", Arial, sans-serif;
  --font-family-text: Arial, sans-serif;
  --font-family-mono: "IBM Plex Mono", "Courier New", monospace;
  --font-size-h1: clamp(3.2rem, 8vw, 7.5rem);
  --font-size-h2: clamp(2.4rem, 6vw, 5rem);
  --font-size-h3: clamp(1.7rem, 3vw, 2.7rem);
  --font-size-body-large: 1.25rem;
  --font-size-body: 1rem;
  --font-size-caption: .85rem;
}
```

## Panel Base

```css
.panel {
  background-color: var(--panel-background, var(--color-white));
  color: var(--panel-color, var(--color-grey-90));
  border-radius: var(--panel-border-radius, var(--space-24));
  padding: var(--panel-inset, var(--space-24));
  box-shadow: var(--panel-elevation, none);
}

.panel--elevated {
  --panel-elevation: var(--elevation-medium);
}

.panel--blue {
  --panel-background: var(--color-blue-30);
  --panel-color: var(--color-blue-60);
}

.panel--yellow {
  --panel-background: var(--color-yellow-50);
}

.panel--green {
  --panel-background: var(--color-green-50);
  --panel-color: var(--color-white);
}
```

## Hero Pattern

```css
.Hero_default {
  position: relative;
  padding-top: var(--header-safe-area-top);
  background-image: linear-gradient(to bottom, var(--color-white), var(--color-pale-blue-40));
  width: 100vw;
  overflow-x: clip;
}

.HeroSizer_default {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-64) 0;
}

@media (min-width: 56rem) {
  .HeroSizer_default {
    aspect-ratio: 16 / 9;
    padding: var(--space-32) 0 var(--space-64);
    height: 100%;
    max-height: 80vh;
    margin: 0 auto;
  }
}

.Hero_group {
  position: relative;
  z-index: 1;
  margin: 0 auto;
  text-align: center;
  display: grid;
  gap: var(--space-40);
}

.Hero_textGroup {
  display: grid;
  gap: var(--space-16);
  text-align: center;
}

.Hero_group h1 {
  max-width: 12ch;
  text-wrap: pretty;
  margin: 0 auto;
}

.Hero_group p {
  max-width: 40ch;
  text-wrap: pretty;
  margin: 0 auto;
}

.Hero_buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-16);
  flex-wrap: wrap;
}
```

## Modal

```css
.Modal_dialogWrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  overflow-y: scroll;
  z-index: 10000;
}

.Modal_dialogBackground {
  position: absolute;
  inset: 0;
  background-color: color-mix(in srgb, transparent, var(--color-grey-90));
  backdrop-filter: blur(var(--glass-blur));
}

.Modal_dialog {
  position: relative;
  all: unset;
  margin: auto;
  z-index: 2;
}

.Modal_dialogContents {
  padding: 2rem;
  background-color: #fff;
  position: absolute;
  inset: 0;
  border-radius: var(--space-24);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 40rem) {
  .Modal_dialogContents {
    margin: var(--space-24);
    position: relative;
    width: fit-content;
  }
}

.Modal_dialogClose {
  position: absolute;
  right: var(--space-24);
  top: var(--space-24);
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.VisuallyHidden_hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

## Business CTA Split

```css
.BusinessCTA_panel {
  --panel-background: var(--color-blue-30);
  --panel-color: var(--color-blue-60);
}

.BusinessCTA_split {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-32);
}

.BusinessCTA_textGroup {
  display: grid;
  gap: var(--space-32);
  text-wrap: balance;
  align-content: start;
}

.BusinessCTA_illustration {
  display: grid;
  gap: var(--space-32);
}

.BusinessCTA_illustration span {
  justify-self: end;
}

@media (min-width: 56rem) {
  .BusinessCTA_split {
    grid-template-columns: 1fr 1fr;
  }

  .BusinessCTA_illustration {
    justify-self: end;
  }
}
```

## Accordion

```css
.Accordion_default {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.Accordion_default details {
  background-color: var(--panel-background, var(--color-white));
  color: var(--panel-color, var(--color-grey-90));
  border-radius: var(--space-24);
  scroll-margin: var(--header-safe-area-top);
}

.Accordion_default summary {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Accordion_summaryGroup {
  padding: var(--space-16) var(--space-24);
}

.Accordion_summaryCross {
  flex: 0 0 auto;
  padding-right: var(--space-24);
}

.Accordion_summaryCross svg {
  height: 2em;
  transition: transform var(--timing-movement) var(--easing-movement);
}

.Accordion_default details[open] .Accordion_summaryCross svg {
  transform: rotate(45deg);
}

.Accordion_default summary::-webkit-details-marker,
.Accordion_default summary::marker {
  display: none;
  content: "";
}

.Accordion_reveal {
  padding: 0 var(--space-24) var(--space-24);
}
```

## Site Banner And Steps

```css
.SiteBanner {
  --background-color: var(--color-blue-50);
  --background-hover: var(--color-blue-60);
  background-color: var(--background-color);
  color: var(--color-white);
  position: relative;
  z-index: 10000;
}

.SiteBanner a {
  display: block;
  height: 2rem;
  color: currentColor;
}

.SiteBanner a span {
  display: inline-block;
  padding: var(--space-8) var(--space-32);
  position: relative;
}

.SiteBanner a span::before {
  content: "";
  width: .75em;
  height: .75em;
  background-color: var(--background-hover);
  border-radius: 50px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

.Steps_steps {
  --breadcrumb-color: var(--color-grey-70);
  display: flex;
  flex-wrap: wrap;
  gap: .5em 1.5em;
  align-items: center;
  color: var(--breadcrumb-color);
  font-size: var(--font-size-caption);
}

.Steps_number {
  display: inline-block;
  border: 1px solid var(--breadcrumb-color);
  border-radius: 50em;
  font-family: var(--font-family-mono);
  font-size: .85em;
  line-height: 1.35;
  height: 1.5em;
  min-width: 1.5em;
  text-align: center;
}

.Steps_isHighlighted {
  --breadcrumb-color: var(--color-grey-90);
}

.Steps_isHighlighted .Steps_number {
  background-color: var(--breadcrumb-color);
  color: var(--color-white);
}
```

## Press Cards And Indicators

```css
.AboutPress_default {
  background-color: var(--color-yellow-30);
  padding: var(--space-32) 0;
  width: 100vw;
}

.AboutPress_article {
  width: 20em;
  flex: 0 0 auto;
  --panel-background: var(--color-white);
  --panel-inset: var(--space-16);
  --panel-border-radius: var(--space-16);
}

.AboutPress_article figure {
  aspect-ratio: 16 / 9;
  margin: 0 0 var(--space-16);
}

.AboutPress_article figure img,
.AboutPress_article figure .media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--space-8);
}

.NumberIndicator_default {
  background-color: var(--color-blue);
  color: var(--color-white);
  font-family: var(--font-family-mono);
  letter-spacing: 0;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 1.3em;
  min-width: 1.3em;
  padding: 0 .25em;
  height: 1.3em;
  text-align: center;
  border-radius: 500px;
}
```

## QA Checklist

- Modal is full-screen on mobile and fit-content centered above `40rem`.
- Close buttons have visually hidden labels.
- Accordions use native `details` and remove default markers.
- Panel text contrast is checked for pastel and saturated surfaces.
- Hero copy uses `text-wrap: pretty` or `balance`.
- Site banner can close without shifting other fixed layers unexpectedly.
- Number counters preserve layout by hiding original text and placing the counter absolutely.
- Reduced motion avoids unnecessary animated counters or marquee movement.
