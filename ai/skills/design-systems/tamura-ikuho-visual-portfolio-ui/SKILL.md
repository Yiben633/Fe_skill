---
name: tamura-ikuho-visual-portfolio-ui
description: Build TAMURA Ikuho-style experimental visual portfolio interfaces. Use when creating Japanese/English graphic designer portfolios, neon black art indexes, mutable color-theme sites, Neue Haas Unica typography systems, Noto Sans JP bilingual layouts, PT Serif italic labels, fixed side menus, rotating star markers, category tag filters, visual/text project list toggles, 12-column portfolio grids, artwork thumbnails with accent overlays and luminosity blend hover, sticky footers, sound toggles, custom scrollbars, and swup-like page transitions.
---

# TAMURA Ikuho Visual Portfolio UI

Use this skill to recreate the design language learned from the TAMURA Ikuho portfolio source. The style is an experimental graphic-design portfolio: black/neon theme by default, mutable color palettes, fixed left navigation, compact category tags, rotating star markers, visual/text index switching, and image-heavy artwork cards with aggressive accent-color hover overlays.

## Design DNA

- Start with a high-contrast color theme driven by CSS variables.
- Default palette: black background, neon green main text, deep blue secondary tags, orange-red accent.
- Use a fixed site title at top-left and a fixed theme button at top-right.
- Use a fixed side menu for primary navigation and project filters.
- Use tag-like labels: rectangular, no radius, tight padding, inverted foreground/background.
- Show current menu/filter position with a small rotating star marker.
- Use a 12-column grid and rhythm based on `--lh`.
- Support visual index (`V`) and text index (`T`) modes.
- On hover, apply accent overlay and `mix-blend-mode: luminosity` to artwork thumbnails.
- Use PT Serif italic for labels, dates, and small editorial cues.

## Typography

Observed font system:

- English sans: `neue-haas-unica`, normal and italic 400 from Adobe Typekit.
- Japanese/body fallback: `Noto Sans JP`, weights 100-900.
- Editorial italic: `PT Serif`, italic 400.

When the licensed Typekit font is unavailable, use this stack:

```css
:root {
  --font-ja: "Noto Sans JP", "Yu Gothic", "Hiragino Kaku Gothic ProN", sans-serif;
  --font-en-sans-text: "neue-haas-unica", "Helvetica Neue", Arial, sans-serif;
  --font-en-sans: var(--font-en-sans-text);
  --font-en-serif: "PT Serif", Georgia, serif;
}
```

For real projects with font rights, load Typekit before site CSS:

```html
<link rel="stylesheet" href="https://use.typekit.net/wvi0tva.css">
```

Use `font-weight: 450` for project titles to mimic the slightly heavier but not bold treatment.

## Core Tokens

```css
:root {
  --color-bg: #000000;
  --color-main: #00c369;
  --color-sub: #191987;
  --color-accent: #ff3700;
  --line-height: 1.6;
  --padding-side: 1.25rem;
  --grid-gap: 1.4285714286vw;
  --side-menu-width: min(17.1428571429vw, 240px);
  --font-size-xxl: 3rem;
  --font-size-xl: 2.25rem;
  --font-size-lg: 1.75rem;
  --font-size-md: 1.25rem;
  --font-size-base: 1rem;
  --font-size-sm: .9375rem;
  --font-size-xs: .875rem;
  --font-size-xxs: .8125rem;
  --lh: calc(var(--font-size-base) * var(--line-height));
  --color-border: color-mix(in srgb, var(--color-main) 60%, transparent);
  --color-divider: color-mix(in srgb, var(--color-main) 30%, transparent);
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-out-quint: cubic-bezier(.22, 1, .36, 1);
}
```

Useful theme alternates:

```css
[data-theme="blue"] {
  --color-bg: #e2e7ec;
  --color-main: #2327fd;
  --color-sub: #ffffff;
  --color-accent: #ff585b;
}

[data-theme="yellow"] {
  --color-bg: #ffd900;
  --color-main: #000000;
  --color-sub: #d2dcdc;
  --color-accent: #879bff;
}
```

## Layout Recipe

1. Header: fixed title at `top: .25rem`, `left: var(--padding-side)`, large text.
2. Theme button: fixed top-right, 16:9 mini-canvas or animated color tile.
3. Side menu: fixed at `top: 5.625rem`, left padding, hidden on mobile if space is tight.
4. Main wrapper: `padding-left: var(--side-menu-width)`, `padding-right: var(--padding-side)`.
5. Key header: right-aligned page title with `padding-top: calc(var(--lh) * 8)`.
6. Mobile filter: right-aligned wrap of tags above the grid.
7. Project index: visual mode uses right-aligned flex/wrap cards; text mode uses full-width bordered rows.
8. Footer: sticky at bottom, sound toggle left, credits/profile/social tags right.
9. Custom scrollbar: thin fixed thumb on desktop hover devices only.

## Component Patterns

### Tag

```html
<span class="tag" data-color="secondary"><span>Graphic</span></span>
```

```css
.tag {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0 .25rem;
  background: var(--color-main);
  color: var(--color-sub);
  font-size: var(--font-size-sm);
  line-height: 1.2;
  overflow: clip;
}

.tag[data-color="secondary"] {
  background: var(--color-sub);
  color: var(--color-main);
}

a:hover .tag,
button:hover .tag,
.tag.is-current {
  background: var(--color-accent);
  color: var(--color-bg);
}
```

### Rotating Star Marker

```html
<span class="star-marker" aria-hidden="true">
  <svg viewBox="0 0 24 24"><path d="M12 0 13.2 7.8 18 1.6 15 8.9 24 12 15 15.1 18 22.4 13.2 16.2 12 24 10.8 16.2 6 22.4 9 15.1 0 12 9 8.9 6 1.6 10.8 7.8 12 0Z"/></svg>
</span>
```

```css
.star-marker {
  display: grid;
  place-items: center;
  width: 1.25rem;
  aspect-ratio: 1;
  color: var(--color-accent);
  animation: rotate-marker 8s linear infinite;
}

@keyframes rotate-marker {
  to { transform: rotate(360deg); }
}
```

### Visual Project Card

```html
<a class="project-card" href="#">
  <div class="project-media"></div>
  <div class="project-text">
    <h2>Music Loves Art 2026</h2>
    <span class="tag" data-color="secondary"><span>Artwork</span></span>
  </div>
</a>
```

```css
.project-card {
  position: relative;
  display: block;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-accent);
  opacity: 0;
  z-index: 1;
  pointer-events: none;
}

.project-card:hover {
  background: var(--color-accent);
}

.project-card:hover::before {
  opacity: .5;
}

.project-card:hover .project-media {
  mix-blend-mode: luminosity;
}
```

### Text Project Row

Use text mode for dense scanning:

```css
[data-view="text"] .project-card {
  display: flex;
  justify-content: space-between;
  gap: var(--grid-gap);
  padding: calc(var(--lh) * .25) 0 calc(var(--lh) * 2);
  border-top: 1px solid var(--color-border);
}
```

## Interaction Rules

- Make menu/filter buttons update a marker position or current tag state.
- In visual mode, hide title text visually if the source pattern needs pure thumbnails.
- In text mode, hide thumbnails and expose title/categories in rows.
- Hover links change to `--color-accent` or use accent background with `color: var(--color-bg)`.
- Use page transition motion: `translate3d(2.5rem, 0, 0)` and opacity fade for entering/leaving.
- Respect mobile: side menu disappears, mobile filter appears, project visual grid becomes two columns.

## Responsive Rules

- Under `760px`, set `--padding-side: .9375rem`, `--grid-gap: .625rem`, and reduce font sizes.
- Remove left side-menu padding on mobile.
- Use 2-column visual project grid on mobile.
- Keep `V/T` controls visible in mobile filter.
- Right-align mobile page titles and project post headers.

## Demo

Reference demo files:

- `ai/demos/tamura-ikuho-visual-portfolio-ui/index.html`
- `ai/demos/tamura-ikuho-visual-portfolio-ui/styles.css`
- `ai/demos/tamura-ikuho-visual-portfolio-ui/script.js`
