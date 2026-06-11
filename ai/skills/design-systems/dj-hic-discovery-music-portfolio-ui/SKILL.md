---
name: dj-hic-discovery-music-portfolio-ui
description: Build DJ HI-C Discovery-style music portfolio interfaces. Use when creating dark DJ/producer portfolio sites, black techno layouts, Clash Display typography, huge fixed marquee overlays, dimmed artist hero imagery, fixed bottom DJ-deck navigation, UNDO/REDO controls, circular play/pause menu buttons, fullscreen knob menus, profile and award timelines, social rows with rotary knobs, floating album jacket squares, WebGL/canvas audio backgrounds, and translucent white divider systems.
---

# DJ HI-C Discovery Music Portfolio UI

Use this skill to recreate the design language learned from the DJ HI-C / Discovery source. The interface feels like a dark techno portfolio: black stage, translucent white text, huge Clash Display marquee type, dimmed performer imagery, fixed DJ-deck controls, rotary knobs, jacket artwork floating around long profile copy, and subtle canvas/WebGL ambience.

## Design DNA

- Use black as the full-page background and keep foreground text at translucent white.
- Make the page feel like an audio interface and artist profile combined.
- Use oversized fixed marquee text behind content with `mix-blend-mode: overlay`.
- Place a dimmed hero/model image fixed behind the profile column.
- Use a fixed bottom navigation bar with a dark gradient fade upward.
- Build controls from circular knobs, play/pause marks, slashes, and bordered button bodies.
- Let album jackets float behind the text as square artifacts, slightly rotated or pointer-reactive.
- Keep content narrow and right-biased on desktop, then shift content padding dramatically on mobile.

## Font Setup

Use Fontshare Clash Display weights `500` and `700`.

```html
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@700,500&display=swap" rel="stylesheet">
```

Or embed the source font-face pattern:

```css
@font-face {
  font-family: "Clash Display";
  src: url("//cdn.fontshare.com/wf/2GQIT54GKQY3JRFTSHS4ARTRNRQISSAA/3CIP5EBHRRHE5FVQU3VFROPUERNDSTDF/JTSL5QESUXATU47LCPUNHZQBDDIWDOSW.woff2") format("woff2");
  font-weight: 500;
  font-display: swap;
  font-style: normal;
}

@font-face {
  font-family: "Clash Display";
  src: url("//cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
  font-style: normal;
}
```

Use Japanese/system text fallback for body copy:

```css
body {
  color: hsla(0,0%,100%,.8);
  font-family: Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif;
  overscroll-behavior: none;
}
```

## Layout Recipe

1. Canvas/WebGL layer: fixed full viewport, behind everything.
2. Fixed marquee: top offset, huge Clash Display text, low opacity, overlay blend.
3. Fixed artist/model visual: dimmed and filtered, positioned off-center.
4. Main body: long vertical padding with a narrow content column aligned right.
5. Profile: small Japanese/system copy plus English copy in Clash Display.
6. Award history: uppercase Clash heading, translucent logo row, list rows with thin dividers.
7. Social links: each row has a small rotary knob and Clash Display label.
8. Floating jacket squares: absolute 12.5rem album covers positioned around content with z-index behind text.
9. Bottom nav: fixed, full width, logo left, UNDO/REDO controls center, circular global menu button right.
10. Fullscreen menu: black overlay, title `MENU`, list links with knobs, track names, SNS row.

## Core CSS Patterns

```css
.webgl-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
}

.marquee {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  opacity: .8;
  mix-blend-mode: overlay;
}

.marquee-text {
  display: flex;
  width: fit-content;
  animation: marquee 10s linear infinite;
}

.marquee-text span {
  display: block;
  width: fit-content;
  font-family: "Clash Display", sans-serif;
  font-weight: 700;
  font-size: 24rem;
  line-height: 1;
  white-space: nowrap;
}
```

## Content Column

```css
.page-body {
  position: relative;
  z-index: 1;
  padding: 26.75rem 0 17.25rem;
  overflow: hidden;
}

.page-inner {
  max-width: 72.5rem;
  margin: 0 auto;
}

.page-content {
  width: 26.25rem;
  margin-left: auto;
}

.profile {
  font-size: .875rem;
  line-height: 2;
}

.profile-en {
  margin-top: 6.25rem;
  font-family: "Clash Display", sans-serif;
}
```

## Knob Component

```css
.knob {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #000;
}

.knob::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 8%;
  height: 18%;
  transform: translateX(-50%);
  background: hsla(0,0%,100%,.9);
}

.knob-body {
  width: 100%;
  height: 100%;
  transform: rotate(-140deg);
  transition: transform .6s cubic-bezier(.22,1,.36,1);
}

a:hover .knob-body {
  transform: rotate(140deg);
}
```

## Bottom DJ Navigation

```css
.global-nav {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.5rem 2.5rem;
}

.global-nav::before {
  content: "";
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 18.75rem;
  background-image: linear-gradient(0deg,#000 0,rgba(0,0,0,.738) 19%,rgba(0,0,0,.278) 56.5%,transparent);
  pointer-events: none;
}

.nav-paging {
  display: grid;
  grid-template-columns: 5rem 5rem;
  gap: 1.25rem;
  width: 11.25rem;
}
```

## Album Jackets

```css
.jacket {
  position: absolute;
  width: 12.5rem;
  height: 12.5rem;
  z-index: -1;
}

.jacket img,
.jacket-art {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Responsive Rules

- At `max-width: 768px`, increase marquee size to about `35rem`.
- Push page body down heavily: around `66.5rem 0 21.4375rem`.
- Shift inner content with left padding around `10.625rem`.
- Set content width to `100%`.
- Increase profile font size to around `1.75rem` and English copy to `1.375rem`.
- Increase nav button labels to `1.5rem`; nav paging buttons grow to `7.5rem`.
- Keep bottom navigation fixed and preserve the black gradient fade.

## Demo Files

Static demo:

`ai/demos/dj-hic-discovery-music-portfolio-ui/index.html`

