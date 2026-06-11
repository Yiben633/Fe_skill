---
name: duchy-nursery-garden-centre-ui
description: Build Duchy of Cornwall Nursery-style garden centre and plant shop interfaces. Use when creating nursery, garden centre, botanical retail, cafe, visit, events, gift card, plant category, seasonal journal, cross-sell, mega navigation, earthy green brand, soft cream editorial layouts, Cookiebot-style consent dialogs, and warm countryside ecommerce pages.
---

# Duchy Nursery Garden Centre UI

## Overview

Use this skill to recreate the design language learned from the pasted Duchy of Cornwall Nursery page. The interface is a refined garden-centre experience: earthy green branding, cream paper-like surfaces, centered heritage logo, sticky navigation, image-led mega menus, seasonal botanical hero sections, shop/cafe/visit cross-sells, calm serif headings, and a Cookiebot-style consent modal.

## Design DNA

- Use deep garden green as the brand anchor: `#48602f`.
- Pair green with warm cream, chalk, moss, clay, and botanical neutrals.
- Keep the design gentle, spacious, and editorial rather than loud ecommerce.
- Use a centered logo header with left shop CTA, right contact/social actions, and a sticky nav below.
- Use mega nav panels with a text link list on one side and a landscape image on the other.
- Create image-led callouts for Visit, Explore, Eat and Drink, Events, Delivery, and Loyalty.
- Use serif display headings for seasonality and place; use clean sans text for navigation and utility copy.
- Use faux block links: the whole image card is clickable, with a clear text link inside.
- Keep cards softly bordered or unframed; avoid heavy shadows.
- Include accessible skip links and assistive labels where controls are icon-only.

## Visual Tokens

```css
:root {
  --duchy-green: #48602f;
  --duchy-green-dark: #2f431f;
  --duchy-sage: #8b9b70;
  --duchy-cream: #f6f1e7;
  --duchy-paper: #fffaf1;
  --duchy-clay: #c49a72;
  --duchy-ink: #283020;
  --duchy-muted: #6f725f;
  --duchy-line: #ded7c7;
  --duchy-focus: rgba(72, 96, 47, .25);
  --duchy-radius: 0;
}
```

Typography pattern:

```css
body {
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  color: var(--duchy-ink);
  background: var(--duchy-cream);
}

.display-heading {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 400;
  letter-spacing: 0;
  line-height: .96;
}
```

## Layout Recipe

1. Skip link for keyboard users.
2. Header main row:
   - Left: burger/menu and `Shop online` CTA.
   - Center: heritage text or logo.
   - Right: contact/location action and social links.
3. Sticky nav:
   - Shield/home mark on the left.
   - Nav items: Visit, Explore, Stay, Eat and Drink, Events, Gift Cards, Journal.
   - Mega nav opens under nav with list links and image pane.
4. Hero:
   - Full-width botanical media with cream/green editorial overlay.
   - Seasonal headline and two CTAs.
5. Feature cards:
   - Shop plants, Cafe, Opening Times, Events, Delivery, Loyalty.
   - Use image-first card with faux block link title and concise copy.
6. Callout band:
   - Image and illustration-like badge or icon.
   - Text block with CTA.
7. Footer:
   - Address, contact email, footer nav, social profiles, copyright.
8. Cookie consent:
   - Popup modal with underlay, tabs/options, green links, Deny/Allow buttons.

## Header And Sticky Navigation

```html
<header class="c-header">
  <div class="c-header__main">
    <div class="c-header__left">
      <button class="c-header__burger c-burger" aria-label="Open menu"><span></span></button>
      <a class="c-action" href="#">Shop online</a>
    </div>
    <div class="c-header__center">
      <a class="c-header__logo" href="#">Duchy of Cornwall Nursery</a>
    </div>
    <div class="c-header__right">
      <a class="c-action c-action--alt" href="#">Contact</a>
      <div class="c-social">
        <a class="c-social__profile" href="#"><span class="u-assistive">Instagram</span>IG</a>
      </div>
    </div>
  </div>
  <nav class="c-navigation is-fixed" aria-label="Main">
    <a class="c-navigation__shield" href="#"><span class="u-assistive">Home</span></a>
    <a class="c-navigation__link" href="#">Visit</a>
    <a class="c-navigation__link" href="#">Explore</a>
    <a class="c-navigation__link" href="#">Eat and Drink</a>
    <a class="c-navigation__link" href="#">Events</a>
    <a class="c-navigation__link" href="#">Journal</a>
  </nav>
</header>
```

```css
.c-header {
  background: var(--duchy-paper);
  border-bottom: 1px solid var(--duchy-line);
}

.c-header__main {
  min-height: 86px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

.c-header__left,
.c-header__right,
.c-social {
  display: flex;
  align-items: center;
  gap: 16px;
}

.c-header__right {
  justify-content: flex-end;
}

.c-header__logo {
  color: var(--duchy-green);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 26px;
  text-decoration: none;
}

.c-action {
  color: var(--duchy-green);
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
}

.c-navigation {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
  min-height: 58px;
  background: var(--duchy-green);
  color: #fff;
}
```

## Mega Navigation

```html
<div class="c-mega-nav">
  <div class="c-mega-nav__a">
    <ul class="c-mega-nav__list">
      <li><a class="c-mega-nav__link" href="#">Opening Times and Directions</a></li>
      <li><a class="c-mega-nav__link" href="#">The Shop</a></li>
      <li><a class="c-mega-nav__link" href="#">The Glasshouse</a></li>
      <li><a class="c-mega-nav__link" href="#">Loyalty Membership</a></li>
    </ul>
  </div>
  <div class="c-mega-nav__b c-mega-nav__image">
    <div class="o-image botanical-image"></div>
  </div>
</div>
```

```css
.c-mega-nav {
  display: grid;
  grid-template-columns: minmax(220px, .75fr) 1fr;
  gap: 28px;
  max-width: 980px;
  padding: 28px;
  background: var(--duchy-paper);
  border: 1px solid var(--duchy-line);
}

.c-mega-nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.c-mega-nav__link {
  display: block;
  padding: 10px 0;
  color: var(--duchy-green);
  text-decoration: none;
  border-bottom: 1px solid var(--duchy-line);
}

.o-image {
  aspect-ratio: 16 / 10;
  background-size: cover;
  background-position: center;
}
```

## Botanical Hero

```html
<section class="c-hero">
  <div class="c-hero__media botanical-hero"></div>
  <div class="c-hero__panel">
    <p class="kicker">Cornwall plant nursery</p>
    <h1 class="display-heading">Plants, food and days out in the garden.</h1>
    <p>Browse plants, visit the cafe, explore the grounds, and find seasonal inspiration.</p>
    <a class="cta" href="#">Shop online</a>
  </div>
</section>
```

```css
.c-hero {
  position: relative;
  min-height: 620px;
  display: grid;
  align-items: end;
}

.c-hero__media {
  position: absolute;
  inset: 0;
}

.c-hero__panel {
  position: relative;
  max-width: 620px;
  margin: 0 0 56px 8vw;
  padding: 38px;
  background: rgba(255, 250, 241, .92);
}

.display-heading {
  margin: 0;
  font-size: clamp(42px, 7vw, 82px);
}

.cta {
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 0 22px;
  color: #fff;
  background: var(--duchy-green);
  text-decoration: none;
}
```

## Cross-Sell Cards

```html
<article class="c-cross-sell o-faux-block-link">
  <div class="c-cross-sell__image botanical-image"></div>
  <div class="c-cross-sell__body">
    <h3><a class="o-faux-block-link__target" href="#">Eat and Drink</a></h3>
    <p class="c-cross-sell__copy">Book a table in the Orangery or drop in for coffee and cake.</p>
  </div>
</article>
```

```css
.c-cross-sell-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.c-cross-sell {
  position: relative;
  background: var(--duchy-paper);
  border: 1px solid var(--duchy-line);
}

.c-cross-sell__image {
  aspect-ratio: 5 / 4;
  background-size: cover;
  background-position: center;
}

.c-cross-sell__body {
  padding: 20px;
}

.c-cross-sell h3 {
  margin: 0 0 10px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 28px;
  font-weight: 400;
}

.o-faux-block-link__target::after {
  content: "";
  position: absolute;
  inset: 0;
}
```

## Cookiebot-Style Consent

```css
.cookie-underlay {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(0, 0, 0, .65);
}

.cookie-dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 91;
  width: min(900px, calc(100% - 32px));
  max-height: calc(100vh - 32px);
  overflow: hidden;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 32px 68px rgba(0, 0, 0, .3);
}

.cookie-dialog a {
  color: var(--duchy-green);
  font-weight: 700;
  text-decoration: none;
}

.cookie-dialog a:hover,
.cookie-dialog a:focus {
  text-decoration: underline;
}

.cookie-tabs button[aria-selected="true"] {
  color: var(--duchy-green);
  border-bottom-color: var(--duchy-green);
}
```

## Responsive Guidance

- Collapse header left/right actions into a burger menu below tablet width.
- Keep logo centered on desktop, but let it align left on narrow screens if space is tight.
- Stack mega nav image below link list on mobile.
- Cross-sell cards should be 4 columns desktop, 2 tablet, 1 mobile.
- Use `aspect-ratio` on image blocks so lazy-loaded media does not shift layout.
- Keep CTAs at least 44px tall and make focus outlines green.
- Avoid hard black unless it is inside the Cookiebot inherited modal; brand UI should feel organic.
