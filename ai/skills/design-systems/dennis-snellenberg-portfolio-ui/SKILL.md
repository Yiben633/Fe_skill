---
name: dennis-snellenberg-portfolio-ui
description: Build Dennis Snellenberg / Code by Dennis-style interactive portfolio interfaces. Use when creating freelance designer-developer portfolios, dark editorial personal sites, sound-designer portfolios, Locomotive Scroll pages, custom scrollbar contracts, audio-reactive hero pages, sound toggler canvas controls, magnetic pill and circular buttons, oversized scrolling name heroes, Neue Montreal/Ayer-like typography, rounded blob page transitions, dotted overlays, smooth-scroll-inspired custom scrollbars, side navigation panels, animated span-line text reveals, hover-preview work lists, parallax media rows, and dark contact footers.
---

# Dennis Snellenberg Portfolio UI

Use this skill to recreate the interaction-heavy portfolio language learned from the pasted Dennis Snellenberg source. The style is confident, minimal, and kinetic: big neutral typography, dark charcoal panels, blue magnetic buttons, soft circular section masks, thin stripes, hover dots, and work lists that feel like a motion portfolio rather than a static gallery.

## Design DNA

- Lead with scale: oversized type, large vertical rhythm, and uncluttered copy.
- Use a tight palette: charcoal, off-white, gray, electric blue, and thin translucent borders.
- Treat motion as structure: reveals, sliding nav, rounded transition blobs, and horizontal media rows should guide the page.
- Prefer thin dividing stripes and simple rows over decorative cards.
- Use circular accents: profile photo, dot markers, round CTA, rounded transition masks, and globe-like location badges.
- Keep UI copy short and direct: "Work", "About", "Contact", "Let's work together".
- For sound-designer variants, add a fixed sound toggler, audio waveform canvas, custom cursor, and large art-directed hero image/noise panel.

## Core Tokens

```css
:root {
  --color-dark: #1c1d20;
  --color-dark-deep: #141517;
  --color-white: #ffffff;
  --color-blue: #455ce9;
  --color-blue-dark: #334bd3;
  --color-gray: #999d9e;
  --color-lightgray: #e9eaeb;
  --color-border: rgba(28, 29, 32, .175);
  --color-border-light: rgba(255, 255, 255, .2);
  --section-padding: clamp(5em, 21vh, 12em);
  --container-padding: clamp(2.5em, 8vw, 8em);
  --gap-padding: clamp(1.5em, 4vw, 2.5em);
  --ease-primary: cubic-bezier(.7, 0, .3, 1);
  --ease-nav: cubic-bezier(.7, 0, .2, 1);
}
```

Use a Neue Montreal-like grotesk if available. Fallback to `Inter`, `Arial`, or system sans. Use `font-weight: 450` where supported, otherwise `400`.

## Page Structure

1. Fixed/absolute top nav with a left credit lockup and right text links.
2. Full-height hero with giant name/title, a short role statement, and an optional image or gray panel.
3. Intro section with a large paragraph and a circular CTA button overlapping a stripe.
4. Work list: rows with title, service, year, thin separators, and hover preview media.
5. Horizontal media strip for kinetic texture.
6. Rounded transition divider into a dark footer.
7. Footer with profile dot/photo, oversized "Let's work together", circular CTA, contact buttons, version/time/socials.

## Typography

- `h1`: `clamp(3.25em, 7vw, 8em) * .875`, line-height `1.065`.
- Giant name marquee: `max(9em, 15vw)`, line-height `1`, nowrap.
- `h2`: `calc(clamp(3.25em, 5vw, 4.5em) * .75)`.
- `h4`: `clamp(1.55em, 2.3vw, 2.5em)`, line-height `1.45`.
- `h5`: uppercase, `.6em`, letter-spacing `.05em`, opacity `.5`.
- Body: `clamp(16px, 1.2vw, 19px)`, line-height `1.6`.

## Span-Line Reveal

Wrap reveal text line-by-line so each line can slide in without clipping adjacent text.

```html
<h4 class="span-lines animate">
  <span class="span-line"><span class="span-line-inner">Freelance designer</span></span>
  <span class="span-line"><span class="span-line-inner">and developer</span></span>
</h4>
```

```css
.span-lines.animate .span-line {
  position: relative;
  display: inline-flex;
  overflow: hidden;
}

.span-lines.animate .span-line-inner {
  display: block;
  transform: translateY(110%);
  transition: transform .8s var(--ease-primary);
}

.span-lines.is-visible .span-line-inner {
  transform: translateY(0);
}
```

## Magnetic Buttons

Use nested `.btn`, `.btn-click`, `.btn-fill`, and `.btn-text`. The fill is a large circle that rises from above or below on hover.

```html
<div class="btn btn-normal">
  <a class="btn-click magnetic" href="#">
    <span class="btn-fill"></span>
    <span class="btn-text"><span class="btn-text-inner">More work</span></span>
  </a>
</div>
```

```css
.btn-click {
  border-radius: 2.125em;
  min-width: 1em;
  height: 4.25em;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 0 1px var(--color-border);
}

.btn-fill {
  position: absolute;
  width: 150%;
  height: 200%;
  left: -25%;
  top: -50%;
  border-radius: 50%;
  background: var(--color-blue);
  transform: translate3d(0, -76%, 0);
  transition: transform .55s var(--ease-primary);
}

.btn-click:hover .btn-fill {
  transform: translate3d(0, 0, 0);
}
```

For circular CTAs, use a `clamp(9em, 12vw, 11em)` square with `border-radius: 50%`.

## Side Navigation

Use a fixed right panel, dark background, and a rounded blob attached to its left edge.

- Closed state: `transform: translate(calc(100% + 6vw), 0)`.
- Open state: `transform: translate(0, 0)`.
- Backdrop: left-to-right black gradient, opacity around `.35`.
- Inner links: huge `3.5em` text, stacked, with staggered translate-in.
- Mobile: full-width panel and wider left blob (`20vw`).

## Rounded Transition Dividers

Use a wrapper with hidden overflow and a massive ellipse to create the soft page-transition curve.

```css
.rounded-div-wrap {
  width: 100%;
  position: relative;
  height: 10vh;
  overflow: hidden;
}

.rounded-div {
  width: 150%;
  height: 750%;
  position: absolute;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -86.666%);
  background: var(--color-white);
}
```

Use the same pattern in reverse for dark footer entrances and menu side blobs.

## Work List Hover Preview

- Keep rows full-width with thin `.stripe` separators.
- Use columns for title, discipline, and year.
- On hover, move a floating preview near the cursor and fade it in.
- Use `pointer-events: none` on the preview layer.
- Keep title text large and row height generous.

## Dots And Profile Image

Use dotted overlays sparingly in corners or footers.

```css
.dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 1.25em 1.25em;
  opacity: .18;
}
```

Profile photos should be circular and inline with headings:

```css
.profile-picture {
  display: inline-flex;
  width: clamp(4.5em, 6.5vw, 8em);
  height: clamp(4.5em, 6.5vw, 8em);
  border-radius: 50%;
  background: center / cover no-repeat;
}
```

## Smooth Scroll Treatment

If using Locomotive Scroll, keep its required classes (`html.has-scroll-smooth`, `[data-scroll-container]`, `.c-scrollbar`, `.c-scrollbar_thumb`). If not, simulate the feel with:

- Scroll-linked reveal observers.
- A fixed custom scrollbar thumb.
- Parallax transforms on media rows.
- Reduced-motion fallbacks that disable transforms and long transitions.

### Locomotive Scroll CSS Contract

Use this contract when integrating real Locomotive Scroll, or when mocking the same visual behavior with native scroll.

```css
html.has-scroll-smooth {
  overflow: hidden;
}

html.has-scroll-dragging {
  user-select: none;
}

.has-scroll-smooth body {
  overflow: hidden;
}

.has-scroll-smooth [data-scroll-container] {
  min-height: 100vh;
}

[data-scroll-direction="horizontal"] [data-scroll-container] {
  display: inline-block;
  height: 100vh;
  white-space: nowrap;
}

[data-scroll-direction="horizontal"] [data-scroll-section] {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  white-space: nowrap;
}

.c-scrollbar {
  position: absolute;
  top: 0;
  right: 0;
  width: 11px;
  height: 100%;
  opacity: 0;
  transform-origin: center right;
  transition: transform .3s, opacity .3s;
}

.c-scrollbar:hover,
.has-scroll-scrolling .c-scrollbar,
.has-scroll-dragging .c-scrollbar {
  opacity: 1;
}

.c-scrollbar:hover {
  transform: scaleX(1.45);
}

.c-scrollbar_thumb {
  position: absolute;
  top: 0;
  right: 0;
  width: 7px;
  margin: 2px;
  border-radius: 10px;
  background-color: #000;
  opacity: .5;
  cursor: grab;
}
```

## Sound Designer Variant

For Chiara Luzzana-like sound portfolios, shift the Dennis base toward audio-reactive art direction:

- Keep `html.has-scroll-init.has-scroll-smooth` and `data-scroll-direction="vertical"` when Locomotive is active.
- Add a fixed `.sound.soundtoggler` button around `8vh-10vh` square.
- Draw a sine wave inside a canvas. Low amplitude means muted; high amplitude means playing.
- Use a full-screen hero with a centered media/noise panel and typography that reads like a sound title, not a SaaS headline.
- Add custom cursor states for "listen", "view", or "drag" and keep them `pointer-events: none`.
- Store audio state only after a user gesture; do not autoplay with sound.

```html
<button class="sound soundtoggler" type="button" aria-pressed="false">
  <canvas></canvas>
  <span>Sound</span>
</button>
```

```css
.sound.soundtoggler {
  position: fixed;
  right: 3vw;
  bottom: 3vw;
  z-index: 40;
  width: 8vh;
  height: 8vh;
  border: 1px solid currentColor;
  border-radius: 50%;
  background: transparent;
  color: currentColor;
  cursor: pointer;
}

.sound.soundtoggler canvas {
  position: absolute;
  inset: 18%;
  width: 64%;
  height: 64%;
}
```

Use Web Audio only as progressive enhancement. A canvas waveform animation is enough for static demos.

## Responsive Rules

- Under `720px`, reduce hero height to about `110vh`, let headline lines wrap naturally, and avoid horizontal parallax.
- Under `540px`, hide desktop nav links and expose the circular hamburger.
- Use `--container-padding: clamp(1.25em, 4vw, 2.5em)` on small screens.
- Keep circular CTAs smaller but still visually dominant.

## Demo

See the standalone demo at `ai/demos/dennis-snellenberg-portfolio-ui/index.html`. It includes the magnetic buttons, animated span lines, side nav, rounded dividers, hover-preview work list, horizontal media strip, dotted overlay, footer CTA, and custom scrollbar simulation.
