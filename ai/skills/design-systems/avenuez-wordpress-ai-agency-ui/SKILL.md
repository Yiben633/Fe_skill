---
name: avenuez-wordpress-ai-agency-ui
description: Build Avenue Z-style WordPress/Astra/Spectra agency pages and plugins. Use when creating Avenue Z marketing pages, AI summarize widgets, frosted floating CTA pills, rainbow hover rings, dark summary panels, Inter/Avenir typography, blue strong highlights, underlined headline emphasis, glass quote cards, Spectra sticky containers, Outermost icon blocks, WP social icon blocks, Spectra login forms, full-bleed Astra containers, filtered work galleries, and WordPress block utility styling.
---

# Avenue Z WordPress AI Agency UI

Use this skill to recreate the design language learned from the Avenue Z WordPress/Astra/Spectra CSS. The style is a polished agency interface: dark futuristic surfaces, high-contrast editorial typography, blue emphasis, glass quote cards, WordPress block compatibility, and a frosted floating AI summarize widget.

## Design DNA

- Build on WordPress block semantics where possible: `wp-block-*`, `uagb-*`, `spectra-*`, `outermost-*`.
- Use a dark agency page base with Inter-like body text and Avenir-like UI controls.
- Let headings be large and responsive with `clamp()`, then color important `strong` words blue.
- Use a hand-drawn or gradient underline under key emphasized headline phrases.
- Use glass cards for quotes, summaries, and overlay panels.
- Keep plugin widgets self-contained and strongly scoped because Astra/Spectra themes may add broad focus, button, and link styles.
- Use `!important` only for fixed plugin UI placement and defensive overrides against theme focus states.
- Support reduced motion for hover, loading, and panel transitions.

## Tokens

```css
:root {
  --az-blue: #4271d5;
  --az-blue-dark: #244fae;
  --az-dark: #08090d;
  --az-ink: #101114;
  --az-white: #ffffff;
  --az-muted: rgba(255, 255, 255, .68);
  --az-line: rgba(138, 138, 138, .6);
  --az-glass: rgba(120, 120, 120, .1);
  --az-panel: rgba(10, 10, 15, .92);
  --az-radius: 16px;
  --az-shadow: 0 18px 60px rgba(0, 0, 0, .32);
}
```

## Astra Page Base

Use this base for full-bleed Astra/Spectra pages.

```css
html.scroll-beh {
  scroll-behavior: smooth;
  scroll-padding-top: 120px;
}

html.overflow-hid {
  overflow-y: hidden;
}

body.hide-nav .astra-advanced-hook-243,
body.hide-nav .mobile-menu-trigger,
.footer-2025-nav-menu {
  display: none !important;
}

body,
p,
li {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 165%;
}

#content .ast-container {
  width: 90%;
  max-width: 1360px;
  padding: 0;
}

.site .site-content .uagb-container-inner-blocks-wrap {
  width: 90% !important;
}

.alignfull {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

h1 {
  font-size: clamp(42px, 5.972vw, 86px);
  line-height: .94;
}

h2 {
  font-size: clamp(38px, 4.722vw, 68px);
  line-height: 1;
}

h3 {
  font-size: clamp(34px, 3.472vw, 50px);
  line-height: 1.08;
}

h4 {
  font-size: clamp(24px, 1.948vw, 30px);
  line-height: 1.16;
}

#content h2 strong,
#content h3 strong,
.h2-big h2 strong {
  color: var(--az-blue);
  font-weight: inherit;
}

.h2-big h2 {
  font-size: clamp(42px, 5.6vw, 86px);
}

.h2-big strong {
  position: relative;
  display: inline-block;
}

.h2-big strong::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -.12em;
  height: .16em;
  border-radius: 99px;
  background: linear-gradient(90deg, transparent, var(--az-blue), transparent);
  opacity: .9;
}
```

## Quote Glass Card

Use this for testimonials, pull quotes, agency proof points, and summary callouts.

```css
.wp-block-quote {
  position: relative;
  margin: 60px 0 0;
  padding: 39px 30px;
  border: 1px solid var(--az-line);
  border-radius: var(--az-radius);
  background: var(--az-glass);
  box-shadow: var(--az-shadow);
  backdrop-filter: blur(13px);
}

.wp-block-quote::before {
  content: "\"";
  position: absolute;
  top: -33px;
  left: 30px;
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--az-blue);
  color: var(--az-white);
  font-size: 42px;
  line-height: 1;
}

.wp-block-quote p {
  margin: 0;
  font-size: clamp(20px, 2vw, 30px);
  line-height: 150%;
}

.wp-block-quote cite {
  display: block;
  margin-top: 18px;
  color: var(--az-muted);
  font-size: 16px;
  font-style: normal;
}
```

## Outermost Icon Block

Use this when recreating WordPress Outermost icon blocks. Rotation and flipping should compose through CSS variables.

```css
.wp-block-outermost-icon-block {
  display: flex;
  line-height: 0;
}

.wp-block-outermost-icon-block.has-border-color {
  border: none;
}

.wp-block-outermost-icon-block .has-icon-color svg,
.wp-block-outermost-icon-block.has-icon-color svg {
  color: currentColor;
}

.wp-block-outermost-icon-block .has-icon-color:not(.has-no-icon-fill-color) svg,
.wp-block-outermost-icon-block.has-icon-color:not(.has-no-icon-fill-color) svg {
  fill: currentColor;
}

.wp-block-outermost-icon-block .icon-container {
  box-sizing: border-box;
}

.wp-block-outermost-icon-block a,
.wp-block-outermost-icon-block svg {
  width: 100%;
  height: 100%;
  transition: transform .1s ease-in-out;
}

.wp-block-outermost-icon-block a:hover {
  transform: scale(1.1);
}

.wp-block-outermost-icon-block svg {
  transform:
    rotate(var(--outermost--icon-block--transform-rotate, 0deg))
    scaleX(var(--outermost--icon-block--transform-scale-x, 1))
    scaleY(var(--outermost--icon-block--transform-scale-y, 1));
}

.wp-block-outermost-icon-block .rotate-90,
.wp-block-outermost-icon-block.rotate-90 {
  --outermost--icon-block--transform-rotate: 90deg;
}

.wp-block-outermost-icon-block .rotate-180,
.wp-block-outermost-icon-block.rotate-180 {
  --outermost--icon-block--transform-rotate: 180deg;
}

.wp-block-outermost-icon-block .rotate-270,
.wp-block-outermost-icon-block.rotate-270 {
  --outermost--icon-block--transform-rotate: 270deg;
}

.wp-block-outermost-icon-block .flip-horizontal,
.wp-block-outermost-icon-block.flip-horizontal {
  --outermost--icon-block--transform-scale-x: -1;
}

.wp-block-outermost-icon-block .flip-vertical,
.wp-block-outermost-icon-block.flip-vertical {
  --outermost--icon-block--transform-scale-y: -1;
}

.wp-block-outermost-icon-block .flip-vertical.flip-horizontal,
.wp-block-outermost-icon-block.flip-vertical.flip-horizontal {
  --outermost--icon-block--transform-scale-x: -1;
  --outermost--icon-block--transform-scale-y: -1;
}
```

## Spectra Sticky Container

Use this for Spectra/UAGB sticky blocks. Toggle `uagb-position__sticky--stuck` when the element should be fixed, and `uagb-position__sticky--restricted` at the boundary of a parent container.

```css
body .wp-block-uagb-container.uagb-position__sticky {
  transition-property: top, bottom;
  transition-duration: 250ms;
  transition-timing-function: ease;
}

body .wp-block-uagb-container.uagb-position__sticky--stuck {
  position: fixed;
  margin: 0 !important;
}

body .wp-block-uagb-container.uagb-position__sticky--restricted {
  position: absolute;
  margin: 0 !important;
}
```

## Floating AI Summarize Widget

Use this for a self-contained Avenue Z-style summarize plugin. The button stays dark across hover and focus so Astra button rules do not turn it blue.

```html
<button class="avenuez-ai-summarize-button avenuez-ai-summarize-button--floating" aria-expanded="false">
  <span class="avenuez-ai-summarize-button__icon">AI</span>
  <span>Summarize</span>
</button>

<section class="avenuez-ai-panel" hidden>
  <header class="avenuez-ai-panel__header">
    <strong>AI summary</strong>
    <button type="button" class="avenuez-ai-panel__close">Close</button>
  </header>
  <p>Condense the current article into clear bullets and next actions.</p>
</section>
```

```css
.avenuez-ai-summarize-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5em;
  border: 1px solid rgba(255, 255, 255, .24);
  border-radius: 44px;
  font-family: Avenir, Inter, Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.avenuez-ai-summarize-button--floating,
.avenuez-ai-summarize-button--floating:hover,
.avenuez-ai-summarize-button--floating:focus {
  position: fixed !important;
  right: 24px;
  bottom: 24px;
  z-index: 99000;
  min-height: 62px;
  padding: 18px 40px;
  overflow: hidden;
  isolation: isolate;
  background-color: rgba(0, 0, 0, .6) !important;
  color: #fff !important;
  box-shadow: 0 10px 35px rgba(0, 0, 0, .28);
  backdrop-filter: blur(10px);
  font-size: 18px;
  font-weight: 800;
  line-height: 22px;
}

.avenuez-ai-summarize-button--floating > * {
  position: relative;
  z-index: 1;
}

.avenuez-ai-summarize-button--floating::before {
  content: "";
  position: absolute;
  inset: -2px;
  z-index: 0;
  opacity: 0;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 238, 0, .88), transparent 28%),
    radial-gradient(circle at 58% 4%, rgba(0, 229, 255, .75), transparent 32%),
    linear-gradient(100deg, #5f03e0 4%, #ff21cf 66%, #ff8a60 96%);
  transition: opacity .2s ease;
}

.avenuez-ai-summarize-button--floating::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: conic-gradient(from 90deg, #5f03e0, #ff21cf, #ff8a60, #5f03e0) border-box;
  opacity: .75;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  pointer-events: none;
}

@media (hover: hover) {
  .avenuez-ai-summarize-button--floating:hover::before {
    opacity: 1;
  }
}

.avenuez-ai-panel {
  position: fixed;
  right: 24px;
  bottom: 100px;
  z-index: 98999;
  width: min(390px, calc(100vw - 32px));
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: 20px;
  background: var(--az-panel);
  color: #fff;
  box-shadow: var(--az-shadow);
  backdrop-filter: blur(18px);
}

@media (max-width: 640px) {
  .avenuez-ai-summarize-button--floating {
    right: 16px;
    bottom: 16px;
    min-height: 56px;
    padding: 14px 26px;
  }

  .avenuez-ai-panel {
    left: 12px;
    right: 12px;
    bottom: 88px;
    width: auto;
  }
}
```

## Spectra Login Form

Use this for compact login/member panels that inherit Spectra Pro class naming.

```css
.wp-block-spectra-pro-login {
  max-width: 420px;
  margin: auto;
  padding: 30px 40px;
  border: 1px solid #e6e7e9;
  border-radius: 3px;
  background: #fff;
  color: #101114;
  transition: all .3s ease;
}

.spectra-pro-login-form__field {
  position: relative;
  margin-bottom: 20px;
}

.spectra-pro-login-form__field label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
}

.spectra-pro-login-form__field input {
  width: 100%;
  box-sizing: border-box;
  padding: 11px 15px;
  border: 1px solid #e6e7e9;
  border-radius: 3px;
  background: #fff;
}

.spectra-pro-login-form__password {
  position: relative;
}

.spectra-pro-login-form__password-toggle {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  border: 0;
  background: transparent;
}

.spectra-pro-login-form__field-error-message {
  position: absolute;
  top: 100%;
  left: 0;
  color: #ef4444;
  font-size: 13px;
}
```

## Work Gallery

Use a dense six-column CSS grid for agency work tiles. Keep hover and filtering based on opacity/transform so cards do not resize.

```css
.cs-grid-v1 {
  --gap: 20px;
  --row-h: 372px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(180px, var(--row-h));
  gap: var(--gap);
}

.cs-grid-v1 .work-card {
  min-height: 0;
  border-radius: 18px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: opacity .22s ease, transform .22s ease;
}

.cs-grid-v1 .work-card.is-hiding {
  opacity: 0;
  transform: translateY(8px);
}

.cs-grid-v1 .work-card.is-hidden {
  display: none;
}

.cs-grid-v1 .work-card.is-showing {
  opacity: 1;
  transform: none;
}

.cs-grid-v1 .pattern-wide {
  grid-column: span 3;
}

.cs-grid-v1 .pattern-tall {
  grid-column: span 2;
  grid-row: span 2;
}

@media (max-width: 900px) {
  .cs-grid-v1 {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 260px;
  }

  .cs-grid-v1 .work-card {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

## QA Checklist

- Floating AI button remains dark on hover, focus, and after closing the panel.
- Rainbow hover state is only hover-driven on devices that support hover.
- Reduced motion disables large transitions or animations.
- Fixed panel does not cover primary mobile content or extend outside the viewport.
- WordPress block classes remain compatible with Astra/Spectra naming.
- Icon rotate and flip transforms compose through CSS variables.
- Filtered gallery hides cards without causing layout jumps during the animation.
- Form errors, password toggles, and labels remain readable against the chosen surface.
