---
name: monopo-saigon-creative-studio-ui
description: Build monopo Saigon-style creative studio websites. Use when creating Tokyo/Saigon creative agency pages, Roobert/Raleway editorial layouts, dark-to-light studio homepages, Locomotive Scroll sections, huge manifesto typography, gradient pill CTAs, arrow buttons, video showreel banners with play cursors, rotated/parallax image tile grids, team member accordions, international office contact footers, social link lists, and compact auth/modal overlays with bouncy entrance animations.
---

# Monopo Saigon Creative Studio UI

Use this skill to recreate the design language learned from the pasted monopo saigon source. The style is an expressive agency system: black sections, white editorial type, Roobert/Raleway typography, kinetic scroll hooks, gradient pill buttons, image-tile motion, team accordions, and a light contact footer.

## Design DNA

- Use Roobert as the primary voice; fall back to Inter, Arial, or system sans.
- Use Raleway only for lighter editorial accents when needed.
- Start dark with white text, then switch to a white/light footer or contact section with black text.
- Use viewport-based type and spacing: mobile values are large, desktop values become compact `vw` units.
- Mark scroll-controlled sections with `data-scroll`, `data-scroll-repeat`, `data-scroll-call`, `data-scroll-speed`, and `data-scroll-direction`.
- Build with Locomotive Scroll-compatible classes: `has-scroll-smooth`, `.c-scrollbar`, `.c-scrollbar_thumb`.
- Use high-contrast editorial typography: oversized manifesto copy, italic-highlighted letters, and low-opacity nav/social links.
- Use pill CTAs with gradient backgrounds and arrow icons that slide on hover.
- Use media-heavy bands: video showreel poster with a circular play cursor, plus rotated/parallax tile grids.
- Team members should feel interactive: role, image, large name, plus/minus button, hidden details, social links, and item number.
- Contact section becomes light: big "Keep in touch", offices, separators, and large social links.

## Tokens

```css
:root {
  --mono-black: #000;
  --mono-white: #fff;
  --mono-ink: #111;
  --mono-muted: rgba(255, 255, 255, 0.4);
  --mono-light-muted: rgba(0, 0, 0, 0.48);
  --mono-green: rgba(131, 235, 149, 0.8);
  --mono-orange: rgba(255, 179, 64, 0.8);
  --mono-coral: #ff8469;
  --mono-ease: cubic-bezier(0.19, 1, 0.22, 1);
  --mono-font: Roobert, Inter, Arial, sans-serif;
  --mono-alt-font: Raleway, Inter, Arial, sans-serif;
}
```

## Base Shell

```css
body {
  margin: 0;
  color: var(--mono-white);
  background: var(--mono-black);
  font-family: var(--mono-font);
}

.container {
  margin: auto;
  padding: 0 6.67vw;
}

@media (min-width: 1024px) {
  .container {
    max-width: 74.84vw;
    padding: 0 3.33vw;
  }
}
```

## Button Patterns

Use `.button--link` for glowing CTA pills and `.button--arrow` for outlined arrow buttons.

```css
.button--link {
  position: relative;
  display: inline-block;
  padding: 6.4vw 13.33vw;
  font-size: 3.73vw;
  line-height: 4.53vw;
}

.button--link::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 26.67vw;
  background: linear-gradient(270deg, var(--mono-green) -2.78%, var(--mono-orange) 99.99%, var(--mono-coral));
  opacity: 0.5;
  transition: transform 0.5s var(--mono-ease), opacity 0.5s var(--mono-ease);
}

.button--link:hover::after {
  opacity: 1;
  transform: scale(1.1);
}
```

## Section Title

Small section titles use a leading angled icon.

```css
section > .title {
  display: inline-block;
  font-weight: 600;
  font-size: 3.73vw;
  line-height: 4.53vw;
}

section > .title::before {
  content: "";
  display: inline-block;
  width: 2.67vw;
  height: 2.67vw;
  margin-right: 6.4vw;
  background: currentColor;
  transform: rotate(45deg);
}
```

## Hero And Manifesto

- Hero should feel simple and studio-like: logo/nav, short menu list, huge declaration, and one gradient CTA.
- Manifesto uses very large copy, often split into lines for scroll reveal.
- Italicize selected letters, especially repeated "o" characters, to create a playful monopo rhythm.

## Video Banner

Use a dark poster with a custom circular `.play-cursor`. The cursor is a white circle with black "Play" text, about `36.8vw` mobile and `7.19vw` desktop.

## Rotated Tile Grid

Use `.tiles.tiles--rotated` with multiple `.tiles__line` rows. Alternate horizontal scroll direction and speed. For static demos, animate rows with CSS translate.

```html
<section class="tiles tiles--rotated" id="tilesGrid">
  <div class="tiles__wrap">
    <div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">...</div>
    <div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">...</div>
  </div>
</section>
```

## Team Accordion

Each `.team-member` contains:

- `.role` small uppercase label.
- `.picture-container` with image/parallax wrapper.
- `.row` with large `.name` and `.more` circular plus button.
- `.details` hidden by default, expanded by an `.is-open` state.
- `.number` such as `( 1 )`.

## Contact Footer

- Switch to white background and black text.
- Use a large "Keep in touch" heading with two-circle icon motif.
- Offices are grouped in rows with `.separator` lines.
- Social links are large rows with arrows; hover moves the arrow slightly.
- Include a fixed or sticky `.btn-to-top` for returning to the first section.

## Auth Modal Add-On

The pasted modal CSS is a separate compact auth pattern. Use it for newsletter, login, or provider connection flows.

- `.modalContainer`: absolute full page, `z-index: 99999`, flex column, centered.
- Overlay: white on mobile, `rgb(14, 30, 37)` at `min-width: 480px` with fade to `0.67` opacity.
- `.modalDialog`: full width mobile, `max-width: 364px` desktop.
- `.modalContent`: `32px` padding, white, `8px` radius desktop, shadow, bouncy entrance.
- Include `.flashMessage`, `.error`, `.formGroup`, `.formControl`, and provider buttons for Google/GitHub/GitLab/Bitbucket.

## QA Checklist

- Keep the site editorial and studio-like; avoid SaaS card grids.
- Use big type and generous whitespace before adding decoration.
- Use scroll hooks in markup even if no smooth scroll library is loaded.
- Keep gradient pills controlled; do not turn the palette into a full rainbow UI.
- Team accordions must be keyboard accessible buttons.
- Contact footer must switch color scheme cleanly.
- Modal content should remain readable at narrow mobile widths.

## Demo Reference

A static reusable demo lives at `ai/demos/monopo-saigon-creative-studio-ui/`. Open `index.html` directly to inspect the layout and copy the HTML/CSS/JS patterns.
