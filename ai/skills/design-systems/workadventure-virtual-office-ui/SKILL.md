---
name: workadventure-virtual-office-ui
description: Build WorkAdventure-style virtual office and metaverse workplace pages. Use when creating virtual office, virtual event, virtual classroom, remote collaboration, pixel workspace, blog/news card grids, navy glass navigation, Oswald uppercase headings, Roboto Condensed body text, blue CTAs, mega menus, hover-gradient post cards, client carousels, and dark multi-column footers.
---

# WorkAdventure Virtual Office UI

Use this skill to recreate the design language learned from the pasted WorkAdventure page and custom CSS. The style is playful but business-facing: navy glass navigation, condensed uppercase typography, blue CTAs, virtual world visuals, pixel/map cards, hover-gradient news cards, client rows, and a dark illustrated footer.

Demo reference: `ai/demos/workadventure-virtual-office-ui/index.html`.

## Design DNA

- Use `Oswald` for uppercase headings and `Roboto Condensed` for body/UI.
- Keep the core palette navy, bright blue, purple, and green release accents.
- Use a rounded navy glass nav with `rgba(27, 42, 65, .8)` and `backdrop-filter: blur(8px)`.
- Treat pages as virtual places: map grids, rooms, avatars, portals, spatial cards.
- Hero typography is split into light top line and bold bottom line.
- CTAs are compact 8px-radius rectangles, not pill buttons.
- Blog/news cards use full-bleed images with bottom gradient overlays and reveal text on hover.
- Footer is dark, multi-column, and product/documentation heavy.

## Visual Tokens

```css
:root {
  --wa-neutral-100: #fafbfc;
  --wa-neutral-900: #5b6070;
  --wa-neutral-1100: #3a3d48;
  --wa-contrast: #1b2a41;
  --wa-contrast-deep: #101827;
  --wa-primary: #8027fb;
  --wa-secondary: #4156f6;
  --wa-success: #66e979;
  --wa-danger: #f0644a;
  --wa-warning: #e5b633;
  --wa-radius: 8px;
  --wa-radius-lg: 16px;
  --wa-glass: rgba(27, 42, 65, .8);
}
```

Typography:

```css
body {
  font-family: "Roboto Condensed", Arial, sans-serif;
  color: var(--wa-contrast);
}

h1, h2, h3 {
  font-family: Oswald, Arial, sans-serif;
  text-transform: uppercase;
  margin: 0;
}
```

## Navigation

```css
.nav-website {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 0 1.75rem;
  color: #fff;
}

.nav-website::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: rgba(27, 42, 65, .8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.menu-tracker {
  position: absolute;
  top: -4px;
  height: .5rem;
  border-radius: 8px;
  background: #5f71f5;
}
```

Mega menu rules:

- Full-width dropdown below nav.
- Same navy glass background and 16px radius.
- Use 3 or 4 columns.
- Each item has an optional square image/icon, title, and low-opacity description.
- Mobile menu becomes a right-aligned stacked glass panel.

## Hero Pattern

```html
<section class="hero">
  <div class="hero-text">
    <p class="hero-overtitle">Virtual Office App / Metaverse</p>
    <h1 class="hero-title">
      <span class="hero-title-top">Your workplace</span>
      <span class="hero-title-bottom">better</span>
    </h1>
    <p class="hero-desc">A virtual world where teams meet and collaborate naturally.</p>
  </div>
</section>
```

```css
.hero-title-top {
  font-family: Oswald, Arial, sans-serif;
  font-size: 43px;
  line-height: 43px;
  font-weight: 300;
  color: hsl(216 41% 40%);
}

.hero-title-bottom {
  font-family: Oswald, Arial, sans-serif;
  font-size: 43px;
  line-height: 43px;
  font-weight: 700;
  color: hsl(216 41% 18%);
}
```

Use split text/reveal masks when animating headings:

```css
.splited-text {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  display: inline-block;
}
```

## Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #1b2a41;
  padding: .75rem 1rem;
  color: #fafbfc;
  font-family: "Roboto Condensed", Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
}

.btn-secondary {
  background: #4156f6;
}

.btn-light {
  background: #fff;
  color: #1b2a41;
}

.btn-border.btn-light {
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
}
```

## Virtual World Cards

- Use blocky room tiles, 8px radii, and bright accent labels.
- Use an isometric or top-down feel with grid backgrounds.
- Cards can scale to `1.10` on hover, but isolate z-index so they overlap cleanly.
- For outlined playful headings, use a white text-shadow ring instead of stroke.

```css
.brick:hover {
  transform: scale(1.10);
  position: relative;
  z-index: 2;
}
```

## Blog And Release Cards

Use this pattern for Elementor/news-like cards.

```css
.post-card {
  position: relative;
  height: 320px;
  overflow: hidden;
  border-radius: 8px;
  background: #1b2a41;
}

.post-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(65, 86, 246, .75), transparent 75%);
}

.post-card.release::after {
  background: linear-gradient(0deg, rgba(102, 233, 121, .75), transparent 75%);
}

.post-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter .95s ease-out, transform .95s ease-out;
}

.post-card:hover img {
  filter: grayscale(1) blur(6px);
  transform: scale(1.1);
}
```

Card content rules:

- Badge top-left, meta top-right.
- Title anchored at bottom and initially translated down.
- Excerpt starts hidden and slides up on hover.
- Release cards use green badge/gradient; blog/product cards use blue.

## Layout Recipe

1. Fixed top nav wrapper with dark glass nav.
2. Hero with split uppercase title and a virtual-world mockup to the right.
3. Use-case cards for Virtual Office, Event, Recruitment, Classroom.
4. Client carousel or logo row with full viewport overflow hidden.
5. Blog/release hover card grid.
6. Dark footer with company baseline, badge, product/company/resources/docs/legal columns, and social icons.

## Responsive Rules

- Container max width: 1536px with 16px padding, 32px on desktop.
- Hero stacks on mobile; split 5/7 or 6/6 on desktop.
- Burger is visible below desktop, full nav above 1024px.
- Blog cards remain fixed height around 320px.
- Client rows can become horizontal scroll/snap on mobile.

## Accessibility And Motion

- Do not hide card excerpts permanently; hover reveal should also work on focus-within.
- Keep nav dropdown links keyboard-focusable.
- Disable hover scale and image blur under reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  .brick,
  .post-card img,
  .post-card .post-copy {
    transition: none;
  }

  .brick:hover,
  .post-card:hover img {
    transform: none;
    filter: none;
  }
}
```
