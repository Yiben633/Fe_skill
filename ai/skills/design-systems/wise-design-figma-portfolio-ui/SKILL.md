---
name: wise-design-figma-portfolio-ui
description: Build Wise Design-style Figma portfolio microsites. Use when creating white/green brand portfolio pages, Figma Sites exports, layered reset CSS, Inter/Wise Sans typography, fixed glass pill navigation, Inspiration/Direction segmented navs, rounded asset carousel galleries, active media tiles, bottom progress scrubbers, pause/play carousel controls, safe-area-aware social links, vertical text rotators, accessibility bypass links, object-cover video/image tiles, reduced-motion marquee behavior, and crisp interactive design showcases inspired by wise.design.
---

# Wise Design Figma Portfolio UI

Use this skill to recreate the design language learned from the pasted Wise Design/Figma Sites output. The UI is crisp, product-like, and kinetic: white canvas, Wise green accents, blurred pill navigation, fixed controls, horizontally scrolling rounded assets, subtle metadata, and careful accessibility/reduced-motion behavior.

## Design DNA

- Keep the base canvas white, clipped, and full viewport height.
- Use Inter for UI text and a heavy Wise-like sans for bold brand moments.
- Use Wise greens: dark green for active controls, bright green for selected text, pale green for blurred glass.
- Prefer small precise UI over large marketing sections: nav pills, tiny social links, scrubbers, and metadata.
- Use fixed/sticky controls with high z-index so carousel content moves behind them.
- Use media tiles with `object-fit: cover`, `overflow: hidden`, and large `64px` corner radii.
- Use horizontal overflow and carousel strips instead of card grids.
- Use `env(safe-area-inset-bottom)` for bottom-left/bottom-right controls.
- Include bypass links and reduced-motion handling.
- In Figma-exported contexts, scope resets under `#container` or `.tailwind` to avoid leaking.

## Tokens

```css
:root {
  --wise-bg: #ffffff;
  --wise-ink: #0e0f0c;
  --wise-green-dark: #163300;
  --wise-green-active: #223d0d;
  --wise-green-bright: #9fe870;
  --wise-glass-green: rgba(226, 246, 213, .6);
  --wise-soft-control: rgba(62, 59, 7, .07);
  --wise-soft-control-hover: rgba(62, 59, 7, .14);
  --wise-muted: rgba(0, 0, 0, .55);
  --wise-media-bg: #f0f0f0;
  --wise-radius-pill: 294.118px;
  --wise-radius-small: 6.667px;
  --wise-radius-media: 64px;
  --wise-blur-nav: 20px;
  --wise-safe-bottom: calc(env(safe-area-inset-bottom, 0px) + var(--safe-bottom-visual-viewport-overlap, 68px));
  --wise-ui-font: Inter, system-ui, sans-serif;
  --wise-heavy-font: "Wise Sans", Inter, system-ui, sans-serif;
}
```

## Layered Reset

Figma Sites exports use CSS layers for reset, utilities, components, and overrides. Keep the same idea when adapting the style.

```css
@layer figreset, figutils, components, utilities;

@layer figreset {
  :root {
    font-family: var(--wise-ui-font);
    --100dvw: 100vw;
    --100dvh: 100vh;
  }

  @supports (width: 100dvw) {
    :root {
      --100dvw: 100dvw;
      --100dvh: 100dvh;
    }
  }

  html {
    width: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    background: none;
    padding: 0;
    text-align: left;
  }
}
```

## Accessibility Bypass Link

```css
.bypass-link {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
}

.bypass-link:focus-within {
  opacity: 1;
  z-index: 10000;
}

.bypass-link > a {
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 12px;
  pointer-events: auto;
}
```

## Fixed Glass Navigation

Use a tiny top bar, centered segmented pill, logo left, pause/play right.

```css
.wise-topbar {
  position: fixed;
  inset: 0 0 auto;
  z-index: 9999;
  pointer-events: none;
  max-height: 120px;
}

.wise-topbar__inner {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  pointer-events: auto;
}

.wise-mark {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: var(--wise-radius-small);
  color: var(--wise-green-dark);
}

.wise-segmented {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: var(--wise-radius-pill);
  background: var(--wise-glass-green);
  backdrop-filter: blur(var(--wise-blur-nav));
}

.wise-segmented a {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 23px;
  border-radius: var(--wise-radius-pill);
  font: 600 16px / 1.5 var(--wise-ui-font);
  letter-spacing: -.176px;
  white-space: nowrap;
}

.wise-segmented a.is-active {
  background: var(--wise-green-active);
  color: var(--wise-green-bright);
}

.wise-icon-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--wise-soft-control);
  color: var(--wise-green-dark);
  cursor: pointer;
}

.wise-icon-button:hover {
  box-shadow: inset 0 0 0 100px var(--wise-soft-control-hover);
}
```

## Asset Carousel

Use data attributes for active metadata and large rounded media capsules.

```html
<section class="wise-carousel" aria-label="Selected work">
  <article class="wise-asset is-active" data-asset-title="Wise Business Illustrations" data-asset-description="Grown-up, but never boring.">
    <div class="wise-asset__media"></div>
  </article>
  <article class="wise-asset" data-asset-title="NASDAQ Listing" data-asset-description="Campaign system and launch assets.">
    <div class="wise-asset__media"></div>
  </article>
</section>
```

```css
.wise-carousel {
  height: var(--100dvh);
  min-height: 800px;
  display: flex;
  align-items: center;
  gap: 24px;
  overflow-x: auto;
  overflow-y: clip;
  padding: 120px 16vw;
  scroll-snap-type: x mandatory;
}

.wise-asset {
  position: relative;
  flex: 0 0 auto;
  width: 160px;
  height: 120px;
  overflow: visible;
  will-change: height;
  transform-origin: center center;
  backface-visibility: hidden;
  scroll-snap-align: center;
}

.wise-asset.is-wide {
  width: 213.333px;
}

.wise-asset.is-square {
  width: 120px;
}

.wise-asset__media {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: var(--wise-radius-media);
  background: var(--wise-media-bg);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .04), 0 4px 6px -4px rgba(0, 0, 0, .04);
}

.wise-asset__media img,
.wise-asset__media video,
.wise-asset__media .visual {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
}

.wise-asset.is-active {
  width: min(72vw, 780px);
  height: min(58vh, 520px);
}
```

## Bottom Controls And Metadata

```css
.wise-bottom-left,
.wise-bottom-right {
  position: fixed;
  bottom: var(--wise-safe-bottom);
  z-index: 20;
  font: 400 12px / 1.4 var(--wise-ui-font);
}

.wise-bottom-left {
  left: 16px;
  width: min(24rem, calc(100vw - 32px));
}

.wise-bottom-right {
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  text-align: right;
}

.wise-scrubber {
  position: fixed;
  left: 50%;
  bottom: 24px;
  z-index: 25;
  transform: translateX(-50%);
  width: 160px;
  height: 9px;
  border-radius: 50px;
  background: rgba(0, 0, 0, .08);
  overflow: hidden;
  cursor: pointer;
}

.wise-scrubber__thumb {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 35px;
  border-radius: 999px;
  background: rgb(31, 41, 55);
  will-change: transform, width;
}
```

## Vertical Text Rotator

Use this for localised signature text such as "Designed by Wise".

```css
@keyframes vertical-text-rotator-slide {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -100%, 0);
  }
}

.vertical-text-rotator {
  position: relative;
  width: 100%;
  height: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vertical-text-rotator__track {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  will-change: transform;
}

.vertical-text-rotator__track--moving {
  animation: vertical-text-rotator-slide 1000ms cubic-bezier(.22, 1, .36, 1) both;
}

.vertical-text-rotator__item {
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  font: 400 12px / 1.4 var(--wise-ui-font);
  color: #000;
}

@media (prefers-reduced-motion: reduce) {
  .vertical-text-rotator__track {
    animation: none;
  }
}
```

## Marquee Utility

```css
.marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width, 100%);
}

.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover, running);
}

.marquee-container:active div {
  animation-play-state: var(--pause-on-click, running);
}

.marquee-container:focus-within > * {
  animation-play-state: paused !important;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width, 100%);
  display: flex;
  align-items: center;
  animation: scroll var(--duration, 20s) linear var(--delay, 0s) var(--iteration-count, infinite);
}

@keyframes scroll {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
  }
}
```

## QA Checklist

- Bypass link appears on keyboard focus and has z-index above fixed controls.
- Top navigation stays usable while carousel scrolls underneath.
- Active carousel item expands without breaking neighboring media tiles.
- Media uses object-cover and rounded 64px capsules.
- Bottom controls use safe-area insets and do not overlap browser bars.
- Pause/play toggles carousel animation state and updates `aria-label`.
- Scrubber thumb reflects active asset index.
- Vertical text rotator disables animation under reduced motion.
