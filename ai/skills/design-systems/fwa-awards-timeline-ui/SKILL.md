---
name: fwa-awards-timeline-ui
description: Build The FWA-style awards and creative showcase pages. Use when creating digital award timelines, case galleries, editorial award indexes, FOTD/FOTM/FOTY lists, pixel-pattern media cards, black-and-white creative directories, points/days scorecards, date blocks, See Case and Launch project overlays, slider dot codas, load-more triggers, sponsor/footer strips, and compact cookie notices.
---

# FWA Awards Timeline UI

## Overview

Use this skill to recreate the design language learned from the pasted The FWA awards page HTML and CSS. The interface is a stark digital-awards timeline: white canvas, black type, tight grid spans, pixel-pattern media surfaces, compact navigation, FOTD ribbons, scorecards, date stamps, slider dots, and sharp hover overlays for case actions.

## Design DNA

- Use a monochrome foundation: `#fff`, `#242424`, `#ececec`, `#9a9a9a`.
- Keep the page editorial and grid-driven, not card-heavy or decorative.
- Use a 14-column container or a simpler responsive grid that mimics `span14`, `span6`, `span5`, `span1`.
- Award entries alternate left/right or sit in two columns on desktop.
- Pair a small date block with a larger case block.
- Media areas use a dark pixel pattern and screenshot-like panels.
- Overlay actions are direct: `See Case` in light styling and `Launch project` in dark styling.
- Put the scorecard beside the media, with large points and small labels.
- Use tiny circular slider dots called `slide-coda` below or over media.
- Use cubic-bezier `.19, 1, .22, 1` for FWA-like smooth UI motion.

## Visual Tokens

```css
:root {
  --fwa-bg: #f7f7f7;
  --fwa-surface: #ffffff;
  --fwa-text: #242424;
  --fwa-muted: #9a9a9a;
  --fwa-line: #ececec;
  --fwa-dark: #111111;
  --fwa-ease: cubic-bezier(.19, 1, .22, 1);
  --fwa-fast: .3s var(--fwa-ease);
  --fwa-slow: .7s var(--fwa-ease);
}
```

## Layout Recipe

1. Global nav: white bar, compact logo, nav links, sign-in/submission actions.
2. Page header: small kicker, large "Awards" title, timeline filters.
3. Timeline: two-column desktop grid; each item contains date, media, scorecard, and details.
4. Media glitter: screenshot surface with pixel pattern and action overlay.
5. Scorecard: points and days stacked vertically.
6. Details: award type, category, case title, and profile/agency credit.
7. Load more: centered pixel-pattern trigger with animated arrow.
8. Footer: white strip with logo, legal links, sponsor block.
9. Cookie notice: slim bottom notice with text link and small button.

## Header And Menu Pattern

```html
<header class="global-nav">
  <a class="fwa-logo" href="#">FWA</a>
  <nav class="mainmenu__nav">
    <a href="#">Awards</a>
    <a href="#">Live Judging</a>
    <a href="#">Profiles</a>
    <a href="#">Editorial</a>
    <a href="#">Jobs</a>
  </nav>
  <a class="button button--dark" href="#">Submit project</a>
</header>
```

```css
.global-nav {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid var(--fwa-line);
}

.mainmenu__nav {
  display: flex;
  gap: 26px;
  font-size: 13px;
  text-transform: uppercase;
}

.mainmenu__nav a {
  color: var(--fwa-text);
  text-decoration: none;
  transition: color var(--fwa-slow), opacity var(--fwa-slow);
}

.mainmenu__nav:hover a {
  color: var(--fwa-muted);
}

.mainmenu__nav a:hover {
  color: var(--fwa-text);
}
```

## Timeline Case Pattern

```html
<li class="timeline__element">
  <time class="timeline-case__date">
    <span class="timeline-case__date--day">09</span>
    <span class="timeline-case__date--month">Jun</span>
  </time>
  <article class="timeline-case">
    <div class="timeline-case__glitter pixel-pattern">
      <div class="timeline-case__glitter-img">
        <div class="timeline-case__glitter-img__buttons-container">
          <a class="timeline-case__glitter-img__button-light" href="#">See Case</a>
          <a class="timeline-case__glitter-img__button-dark" href="#">Launch project <i class="arrow"></i></a>
        </div>
        <div class="slider pixel-pattern pixel-pattern--dark">
          <ul class="slider-list">
            <li class="slider-slide slider-slide--active"></li>
          </ul>
          <div class="slide-coda">
            <a><span class="slide-coda__item slide-coda__item--active"></span></a>
            <a><span class="slide-coda__item"></span></a>
            <a><span class="slide-coda__item"></span></a>
          </div>
        </div>
        <div class="ribbon-fotd ribbon-fotd--small ribbon-fotd--br"></div>
      </div>
      <div class="timeline-case__glitter-scorecard">
        <div class="timeline-case__glitter-scorecard__score">83 <small>Points</small></div>
        <div class="timeline-case__glitter-scorecard__days">5 <small>Days</small></div>
      </div>
    </div>
    <div class="timeline-case__details">
      <div class="timeline-case__details-award">FWA of the Day <div>Website</div></div>
      <h2 class="timeline-case__details__title"><a href="#">Lama Lama</a></h2>
      <div class="timeline-case__details__profile">Lama Lama</div>
    </div>
  </article>
</li>
```

```css
.timeline__element {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 18px;
}

.timeline-case__date {
  padding-top: 12px;
  text-align: center;
  text-transform: uppercase;
}

.timeline-case__date--day {
  display: block;
  font-size: 32px;
  line-height: 1;
}

.timeline-case__date--month {
  color: var(--fwa-muted);
  font-size: 12px;
}

.timeline-case__glitter {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 82px;
  background: #fff;
  border: 1px solid var(--fwa-line);
}

.timeline-case__glitter-img {
  position: relative;
  min-height: 300px;
  overflow: hidden;
  background: #111;
}

.pixel-pattern {
  background-image:
    linear-gradient(45deg, rgba(0, 0, 0, .08) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(0, 0, 0, .08) 25%, transparent 25%);
  background-size: 2px 2px;
}
```

## Buttons, Arrows, And Motion

```css
.timeline-case__glitter-img__buttons-container {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  opacity: 0;
  transition: opacity var(--fwa-fast);
}

.timeline-case__glitter-img:hover .timeline-case__glitter-img__buttons-container {
  opacity: 1;
}

.timeline-case__glitter-img__button-light,
.timeline-case__glitter-img__button-dark {
  min-width: 120px;
  padding: 14px 18px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.timeline-case__glitter-img__button-light {
  color: #242424;
  background: #fff;
}

.timeline-case__glitter-img__button-dark {
  color: #fff;
  background: #111;
}

.arrow {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 8px;
  border-top: 1px solid currentColor;
  border-right: 1px solid currentColor;
  transform: rotate(45deg);
}
```

Use the FWA arrow-loop animation for directional controls:

```css
@keyframes arrow-to-bottom-to-center {
  0% { transform: translateY(0); animation-timing-function: cubic-bezier(.6, .04, .98, .335); }
  49% { transform: translateY(100%); opacity: 1; }
  50% { transform: translateY(100%); opacity: 0; }
  51% { transform: translateY(-100%); opacity: 0; }
  52% { transform: translateY(-100%); opacity: 1; animation-timing-function: cubic-bezier(.19, 1, .22, 1); }
  100% { transform: translateY(0); }
}
```

## Slide Coda Dots

```css
.slide-coda {
  position: absolute;
  left: 0;
  bottom: 14px;
  width: 100%;
  height: 9px;
  display: flex;
  justify-content: center;
  gap: 6px;
}

.slide-coda a {
  display: block;
  width: 15px;
  height: 15px;
}

.slide-coda__item {
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
}

.slide-coda__item::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transform: scale(0);
  background: #fff;
  transition: transform var(--fwa-slow);
}

.slide-coda__item--active::after {
  transform: scale(1);
}
```

## Footer And Cookie Notice

```css
.footer-container {
  display: grid;
  grid-template-columns: 140px 1fr 180px;
  background: #fff;
  border-top: 1px solid var(--fwa-line);
}

.footer-container__column {
  min-height: 60px;
  border-left: 1px solid var(--fwa-line);
}

.footer-container__menu {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin: 0;
  padding: 20px;
  list-style: none;
  font-size: 12px;
}

.cookie-notice {
  position: fixed;
  left: 20px;
  right: 20px;
  bottom: 20px;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid var(--fwa-line);
}
```

## Responsive Guidance

- Collapse timeline to one column below 900px.
- Keep date block above or beside the case, but do not let it squeeze the title.
- Stack scorecard below media on mobile if the side column becomes too narrow.
- Hide optional nav links before shrinking buttons below usable size.
- Keep pixel patterns subtle; they should texture the media frame, not dominate content.
- Respect reduced motion by removing arrow-loop and overlay transitions.
