---
name: eindhoven-design-district-editorial-ui
description: Build Eindhoven Design District-style cultural editorial websites. Use when creating Dutch design district pages, cultural project hubs, editorial homepages, oversized typography heroes, fixed nav bars with burger and search overlays, 12-column CSS variable grids, electric blue/pink/red theme panels, animated underline links, reveal-image layouts, colored project story panels, route/article teaser rows, Flickity-style sliders, footer CTAs, and minimal civic design interfaces.
---

# Eindhoven Design District Editorial UI

Use this skill to recreate the design language learned from the Eindhoven Design District HTML and CSS. The system is cultural, editorial, and civic: black text on white or pale gray, very large typography, electric blue interaction color, pink/red themed project panels, compact fixed navigation, overlay search/menu layers, and grid-based content sections.

## Design DNA

- Keep the page minimal, typographic, and content-led.
- Use a CSS-variable grid: 6 columns on mobile, 12 columns on tablet/desktop.
- Use large black display type with tight leading and no decorative card-heavy layout.
- Use electric blue `#0f26ed` as the main interaction color.
- Use pink `#ffc2eb` and red `#ff0000` as project theme surfaces.
- Use nav overlays as full-viewport layers with separate nav and search panels.
- Make links feel active with a background-position underline animation.
- Use reveal-image wrappers for masked images and transition-ready image blocks.
- Use colored project sections where the text block and image block sit side by side.
- Use footer CTAs as broad color fields with large pinned-feeling text.

## Tokens

```css
:root {
  --edd-grey: #e8e8e8;
  --edd-grey-light: #c7c7c7;
  --edd-grey-lighter: #dfdfdf;
  --edd-pink: #ffc2eb;
  --edd-red: #ff0000;
  --edd-blue: #0f26ed;
  --edd-main: #0f26ed;
  --edd-black: #000000;
  --edd-white: #ffffff;
  --grid-columns: 6;
  --grid-gap: 1.25rem;
  --container-margin: 1.25rem;
  --hover-line-thickness: 2px;
  --hover-line-position: 1.23em;
}

@media (min-width: 768px) {
  :root {
    --grid-columns: 12;
    --grid-gap: 1.875rem;
    --container-margin: 3.125rem;
  }
}

@media (min-width: 1200px) {
  :root {
    --grid-gap: 2.5rem;
  }
}
```

## Page And Grid

```css
html {
  width: 100%;
  height: 100%;
}

body {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  margin: 0;
  color: var(--edd-black);
  background: var(--edd-white);
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  position: relative;
  margin-left: var(--container-margin);
  margin-right: var(--container-margin);
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr));
  column-gap: var(--grid-gap);
}

.page-section {
  padding-block: clamp(4rem, 9vw, 8.75rem);
}

.u-no-padding-top {
  padding-top: 0;
}

.u-no-pad {
  padding: 0;
}
```

## Hover Underline Links

Use this for nav links, article links, and inline editorial calls to action.

```css
@keyframes line-animation {
  0% {
    background-position: 100% var(--hover-line-position);
  }

  50% {
    background-position: 100% var(--hover-line-position);
    background-size: 0% var(--hover-line-thickness);
  }

  50.1% {
    background-position: 0% var(--hover-line-position);
  }
}

.link,
.nav-link {
  color: inherit;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-repeat: no-repeat;
  background-position: 0% var(--hover-line-position);
  background-size: 100% var(--hover-line-thickness);
}

.link:hover,
.nav-link:hover {
  animation: line-animation .55s ease both;
  color: var(--edd-main);
}
```

## Fixed Nav And Overlay

```html
<header>
  <div class="nav js-nav">
    <div class="nav-overlay">
      <div class="nav-overlay__backdrop"></div>
      <div class="nav-overlay__inner">
        <div class="nav-overlay__layer overlay-nav container">
          <nav>
            <ul class="nav-items nav-items--main">
              <li class="nav-item"><a class="nav-link" href="#">Projecten</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Artikelen</a></li>
            </ul>
          </nav>
        </div>
        <div class="nav-overlay__layer overlay-search container is-hidden">
          <form class="overlay-search__form">
            <input type="text" placeholder="Start typing to search">
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
    <div class="nav-bar">
      <a class="nav-bar__logo" href="#">EDD</a>
      <button class="nav-button nav-button--search">search</button>
      <button class="nav-button nav-button--burger">Menu</button>
    </div>
  </div>
</header>
```

```css
.nav-bar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background: var(--edd-white);
  border-bottom: 1px solid var(--edd-grey);
}

.nav-bar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 19;
  pointer-events: none;
}

.nav.is-open .nav-overlay,
.nav.is-searching .nav-overlay {
  pointer-events: auto;
}

.nav-overlay__backdrop {
  position: absolute;
  inset: 0;
  background: var(--edd-pink);
  transform: translateY(-100%);
  transition: transform .35s ease;
}

.nav.is-open .nav-overlay__backdrop,
.nav.is-searching .nav-overlay__backdrop {
  transform: translateY(0);
}

.nav-overlay__layer {
  position: relative;
  min-height: 100vh;
  padding-top: 8rem;
}

.is-hidden {
  display: none !important;
}
```

## Home Hero

Use oversized type, small side images, and a centered typographic payoff. In production, SVG wordmarks can replace plain text.

```css
.home-header {
  min-height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
}

.home-header__inner {
  min-height: calc(100vh - 7rem);
  align-items: center;
}

.home-header__body {
  grid-column: 1 / -1;
  position: relative;
  min-height: 70vh;
  display: grid;
  place-items: center;
  text-align: center;
}

.home-header__text h2 {
  margin: 0;
  font-size: clamp(3rem, 12vw, 10rem);
  line-height: .86;
}

.home-header__payoff {
  margin-top: 1rem;
  color: var(--edd-main);
  font-size: clamp(2rem, 7vw, 5rem);
  line-height: .9;
}

.home-header-image {
  position: absolute;
  width: min(28vw, 18rem);
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.home-header-image--left {
  left: 0;
  top: 12%;
}

.home-header-image--right {
  right: 0;
  bottom: 8%;
}

.reveal-image {
  overflow: hidden;
  margin: 0;
}

.reveal-image__inner {
  width: 100%;
  height: 100%;
  transition: transform .6s ease, width .6s ease;
}
```

## Colored Project Story Panels

Use `data-theme` to switch surfaces. Keep body and image blocks paired and tall.

```css
.home-projects__header {
  margin-bottom: 2rem;
}

.home-project-item {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: clamp(34rem, 70vw, 54rem);
}

.home-project-item__body {
  padding: clamp(1.5rem, 4vw, 3.125rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.home-project-item[data-theme="pink"] .home-project-item__body {
  background: var(--edd-pink);
}

.home-project-item[data-theme="red"] .home-project-item__body {
  background: var(--edd-red);
  color: var(--edd-white);
}

.home-project-item[data-theme="blue"] .home-project-item__body {
  background: var(--edd-blue);
  color: var(--edd-white);
}

.home-project-item__text h2 {
  margin: 0 0 1.25rem;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: .9;
}

.home-project-item__image {
  min-height: 100%;
  background-size: cover;
  background-position: center;
}

@media (max-width: 767px) {
  .home-project-item {
    grid-template-columns: 1fr;
  }
}
```

## Type Row Articles

Use this for external article rows, routes, and lightweight listings.

```css
.type-row {
  border-top: 1px solid var(--edd-black);
}

.type-row-section__inner {
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr) auto;
  gap: var(--grid-gap);
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--edd-black);
}

.type-row-section__image {
  aspect-ratio: 4 / 3;
  background: var(--edd-grey);
  overflow: hidden;
}

.type-row-section__body h3 {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
  line-height: 1;
}

@media (max-width: 767px) {
  .type-row-section__inner {
    grid-template-columns: 1fr;
  }
}
```

## Footer CTA

```css
.footer-cta {
  background: var(--edd-pink);
  padding: clamp(4rem, 10vw, 8rem) var(--container-margin);
}

.footer-cta__body {
  max-width: 48rem;
}

.footer-cta h2 {
  margin: 0 0 2rem;
  font-size: clamp(3rem, 8vw, 7rem);
  line-height: .9;
}

.button {
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  padding: .75rem 1.25rem;
  border: 1px solid currentColor;
  border-radius: 999px;
  color: inherit;
  background: transparent;
  text-decoration: none;
}

.button--filled {
  background: var(--edd-black);
  color: var(--edd-white);
}
```

## QA Checklist

- Grid variables shift from 6 to 12 columns at tablet width.
- Nav overlay and search overlay are separate layers and can be toggled independently.
- Links use animated underline backgrounds, not border-bottom layout shifts.
- Project theme panels preserve text contrast for pink, red, and blue.
- Hero images stay decorative and never cover the primary headline.
- Colored blocks are full-width or grid-aligned, not floating cards.
- Reduced motion disables reveal and overlay transitions when needed.
