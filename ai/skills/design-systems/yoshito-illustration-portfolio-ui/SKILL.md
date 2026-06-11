---
name: yoshito-illustration-portfolio-ui
description: Build Yoshito-style dreamy illustration portfolio interfaces. Use when creating Japanese illustrator portfolios, pastel artwork homepages, bilingual Termina/Norman/M PLUS 1 type systems, pale blue fixed headers, metallic heart/ring/logo accents, star separators, pill arrow tags, floating character icons, large gradient display titles, works/gallery/profile landing sections, sticky filter lists, 12-column works grids, custom scrollbars, loading screens, and swup-like blur page transitions.
---

# Yoshito Illustration Portfolio UI

Use this skill to recreate the dreamy illustrator portfolio style learned from the pasted Yoshito Illustration Portfolio CSS and Typekit snippets. The look is pale, playful, image-led, and precise: soft blue chrome, tiny UI type, oversized display lettering, floating artwork cards, pill tags, star separators, metallic WebGL-like accents, and a dense works index.

## Design DNA

- Keep the page airy and white-blue, with `#fcfeff` backgrounds and `#96d2fd` as the main accent.
- Use small, crisp UI text and large decorative display type.
- Put a fixed blue header at the top with a white logo mark and compact pill navigation.
- Layer ornamental "GL" surfaces behind content: metallic hearts, rings, logo marks, and soft blue gradients.
- Build the homepage around a full-height key visual, with floating artwork thumbnails and overlapping pill tags.
- Use star-line separators between sections.
- Favor illustration portfolio sections: `Works`, `Gallery`, `Profile`, `Contact`.
- Let images overlap and float; cards should feel manually placed rather than grid-only.
- Use hover states that rotate tags slightly and scale images without resizing the layout.

## Typography

- UI/English: `termina`, fallback `Arial, sans-serif`.
- Display: `norman-variable`, fallback `Arial Black, sans-serif`.
- Japanese/body: `M PLUS 1`, fallback `system-ui, sans-serif`.
- Typekit source from pasted CSS: `https://use.typekit.net/kyn6slr.css` for licensed projects.
- Body baseline: `.8125rem`, weight around `450`, line-height `1.5`.
- Display titles: use heavy variable display type, tight but readable, often with stroke, gradient fill, or drop shadow.

## Core Tokens

```css
:root {
  --line-height: 1.5;
  --header-height: 2.5rem;
  --padding-side: 4rem;
  --grid-gap: 2.5rem;
  --z-index-global-header: 2000;
  --z-index-loading: 99999;
  --font-ja: "M PLUS 1", system-ui, sans-serif;
  --font-en: "termina", Arial, sans-serif;
  --font-en-display: "norman-variable", "Arial Black", sans-serif;
  --color-white: #fff;
  --color-black: #000;
  --color-bg: #fcfeff;
  --color-text: #2f3b41;
  --color-main: #96d2fd;
  --color-border: rgba(47, 59, 65, .7);
  --ease-out-expo: cubic-bezier(.16, 1, .3, 1);
  --ease-out-quint: cubic-bezier(.22, 1, .36, 1);
  --duration-transform-base: .8s;
  --duration-material-base: .4s;
  --duration-material-hover: .1s;
}

@media (max-width: 760px) {
  :root {
    --header-height: 2rem;
    --padding-side: 1.25rem;
    --grid-gap: 1.25rem;
  }
}
```

## Layout Recipe

1. Fixed header: height `var(--header-height)`, background `var(--color-main)`, white logo, small pill nav button.
2. Global layers: add absolute/fixed decorative background and metallic layers behind all content.
3. Loading screen: full viewport overlay, progress line, title mark, and a small floating character or icon.
4. Key visual: `100svh`, min-height around `43.75rem`, centered oversized display title and floating image cards.
5. Hero blocks: top-left profile block, bottom/right works and gallery blocks, each with overlapping pill tags.
6. Star separator: horizontal rule with star icons at both ends.
7. Content sections: split text and media; sections for works, gallery, and profile.
8. Works index: sticky filter list and a 12-column grid; normal items span 4 columns, feature items span 8.
9. Footer: oversized display word, floating illustration, contact pill, social links, and copyright.

## Component Patterns

### Pill Arrow Tag

```html
<a class="tag-link" href="#">
  <span>Works</span>
  <span class="tag-arrow">-></span>
</a>
```

```css
.tag-link {
  height: 1.75rem;
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  padding: 0 .75rem .0625rem;
  border: 1px solid var(--color-border);
  border-radius: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-en);
  font-size: .8125rem;
  text-decoration: none;
  box-shadow: 0 .25rem .5rem rgba(47, 59, 65, .08);
  transition: color .1s ease-out, background .1s ease-out, border-color .1s ease-out, transform .8s var(--ease-out-quint);
}

.tag-link:hover {
  color: var(--color-white);
  background: var(--color-main);
  border-color: var(--color-white);
  transform: rotate(-7deg);
}
```

### Star Separator

```html
<div class="star-separator" aria-hidden="true"><span>*</span><i></i><span>*</span></div>
```

```css
.star-separator {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  color: var(--color-main);
}

.star-separator i {
  height: 1px;
  background: var(--color-border);
}
```

### Display Lower Title

```css
.lower-title {
  font-family: var(--font-en-display);
  font-size: clamp(3.75rem, 13vw, 12rem);
  font-weight: 800;
  line-height: .82;
  color: var(--color-white);
  -webkit-text-stroke: 1px rgba(47, 59, 65, .45);
  text-shadow: 0 .08em 0 var(--color-main);
}
```

### Works Grid Item

```css
.works-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3.65625rem var(--grid-gap);
}

.work-card {
  grid-column: span 4;
  position: relative;
  min-height: 31.25rem;
}

.work-card.is-wide {
  grid-column: span 8;
}
```

## Motion Rules

- Hover artwork images: `transform: scale(1.08)`.
- Hover pill tags: rotate about `-7deg`, switch to blue background and white text.
- Floating icons: 3s to 6s alternate translate animation.
- Page transitions: fade and blur the main wrapper, e.g. opacity `0` and `filter: blur(12px)`.
- Custom scrollbar thumb: small blue rounded vertical bar on the right edge.

## Responsive Rules

- At `760px`, reduce side padding to `1.25rem`, header height to `2rem`, grid gap to `1.25rem`.
- Stack section text and media.
- Convert works grid to 2 columns or single column for long titles.
- Shrink floating cards to square blocks around `6.25rem` to `8rem`.
- Keep pill tags readable; do not let tags overlap body copy on mobile.

## Demo

See `ai/demos/yoshito-illustration-portfolio-ui/` for a static implementation with:

- Fixed pale-blue header
- Loading overlay
- CSS-simulated metallic background accents
- Full-height key visual
- Floating artwork blocks and tags
- Star separators
- Works/gallery/profile sections
- Filterable works grid
- Custom scrollbar thumb
