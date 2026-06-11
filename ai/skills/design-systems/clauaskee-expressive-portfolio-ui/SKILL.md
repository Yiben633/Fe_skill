---
name: clauaskee-expressive-portfolio-ui
description: Build clau.as.kee-style expressive creative portfolio pages. Use when creating playful art director portfolios, digital designer homepages, personal creative sites, large split-letter typography, intro media/video hero sections, parallel scrolling skill text, long bio sections, playground masonry work grids, fixed smiley email badges, dot cursors, huge email CTA sections, scrolling contact banners, and page loading or transition strips.
---

# clau.as.kee Expressive Portfolio UI

Use this skill to recreate the design language learned from the clau.as.kee source: a playful creative portfolio for an art director and digital designer, driven by oversized display type, kinetic letters, experimental portfolio grids, cursor toys, and direct email CTAs.

## Design DNA

- Lead with personality before case-study structure.
- Use a huge custom display face for names and CTAs; pair it with a clean grotesk for body copy.
- Split big words into individual `.letter` elements so each character can animate in.
- Combine light and dark sections with hard contrast: off-white, black, neon green, lavender blue, and white.
- Use a full-screen intro with name typography over or beside media.
- Add parallel text bands for skills: one line moving right, another moving left.
- Put a long personal bio in large readable body text, with underlined or highlighted links.
- Use a fixed minimal nav and a fixed circular email badge.
- Use playful custom cursors for major contact CTAs.
- Build the work section as a loose two-column playground list with mixed standard and featured cards.
- End with a huge "Email me" title and a scrolling banner CTA.

## Tokens

```css
:root {
  --clau-bg: #f5f1e8;
  --clau-ink: #1a1a1a;
  --clau-black: #000000;
  --clau-white: #ffffff;
  --clau-green: #47f654;
  --clau-lavender: #8e93ff;
  --clau-display: "Beastly clauworks", "Cooper Black", Georgia, serif;
  --clau-sans: "Suisse Intl clauworks", Arial, sans-serif;
  --clau-ease: cubic-bezier(0.5, 0.25, 0, 1);
}
```

## Base Layout

```css
html {
  background: var(--clau-bg);
  color: var(--clau-ink);
  font-family: var(--clau-sans);
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;
}

a {
  color: inherit;
}

.intro,
.get-in-touch,
.playground,
.email-me {
  position: relative;
  min-height: 100vh;
}
```

## Animated Title Pattern

The source wraps each letter as `h1 > div > .letter`. Keep the outer wrapper overflow-hidden so letters can rise from below.

```html
<div class="animated-titles">
  <h1 class="animated-titles-text">
    <span><span class="letter active">C</span></span>
    <span><span class="letter active">l</span></span>
    <span><span class="letter active">a</span></span>
    <span><span class="letter active">u</span></span>
    <span><span class="letter active">.</span></span>
  </h1>
</div>
```

```css
.animated-titles h1,
.animated-titles h2 {
  margin: 0;
  font-family: var(--clau-display);
  font-size: clamp(5rem, 21vw, 20rem);
  font-weight: 400;
  line-height: 0.78;
  letter-spacing: 0;
}

.animated-titles h1 > span,
.animated-titles h2 > span {
  display: inline-block;
  overflow: hidden;
}

.letter {
  display: inline-block;
  transform: translateY(110%);
  transition: transform 0.75s var(--clau-ease);
}

.letter.active {
  transform: translateY(0);
}
```

## Intro Recipe

- Use a full-screen intro section.
- Place the name/title huge and partially overlapping the media.
- Use a centered or right-side media block with video/image.
- Add a parallel text band below the media: `Art direction - Digital design` and `Branding - Illustration`.
- Follow with a long bio block that enters from below.

## Parallel Text Band

```css
.parallel-texts {
  display: flex;
  overflow: hidden;
  white-space: nowrap;
}

.parallel-texts h2 {
  flex: 0 0 auto;
  margin: 0;
  font-family: var(--clau-display);
  font-size: clamp(3rem, 11vw, 12rem);
  line-height: 1;
}

.parallel-texts h2:first-child {
  animation: clau-slide-right 18s linear infinite alternate;
}

.parallel-texts h2:last-child {
  animation: clau-slide-left 18s linear infinite alternate;
}
```

## Fixed Navigation

```css
.main-navigation {
  position: fixed;
  top: 30px;
  right: 4.5vw;
  z-index: 100;
  font-family: var(--clau-sans);
}

.main-navigation ul {
  display: flex;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-navigation a {
  color: var(--clau-ink);
  text-decoration: none;
}

.main-navigation-black a {
  color: var(--clau-black);
}
```

## Dot Cursor And Smiley Badge

Use the dot cursor only on pointer-fine devices. The smiley badge is a fixed circular email CTA that slides/rotates in, then can invert colors on hover.

```css
.dot-cursor {
  position: absolute;
  z-index: 2;
  display: none;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  mix-blend-mode: difference;
  pointer-events: none;
  transform: scale(0);
}

.dot-cursor-mounted {
  display: flex;
}

.dot-cursor-black {
  background: var(--clau-lavender);
}

.dot-cursor-white {
  background: var(--clau-white);
}

.smiley-wrapper {
  position: fixed;
  bottom: 30px;
  left: 4.5vw;
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: var(--clau-green);
  transform: translateX(calc(-100% - 4.5vw)) rotate(-1turn);
  opacity: 0;
  transition: opacity 0.5s linear, transform 0.75s var(--clau-ease), background-color 0.2s ease;
}

.smiley-wrapper.active {
  transform: translateX(0) rotate(0);
  opacity: 1;
}

.smiley-wrapper:hover {
  background: var(--clau-lavender);
}
```

## Playground Work Grid

- Desktop: two columns with uneven rhythm.
- Mobile: single list.
- Use `work-featured` to make selected cards larger.
- Each card has media, project title, and discipline line.
- On hover, use saturation, small lift, or color inversion; keep the layout stable.

```css
.works-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6vw;
}

.works-list-work a {
  display: block;
  text-decoration: none;
  transition: transform 0.35s var(--clau-ease), opacity 0.35s ease;
}

.works-list-work a:hover {
  transform: translateY(-0.5rem);
}

.works-list-work img,
.works-list-work video {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.works-list-work a.work-featured img,
.works-list-work a.work-featured video {
  aspect-ratio: 1 / 1.12;
}
```

## Contact And Email Sections

- Use one enormous animated title: `Get in touch` or `Email me`.
- Add four small columns for Experience, Selected clients, Press, and Expertise.
- Add a horizontal scrolling email banner with repeated text and icon/shape.
- Keep social links minimal at the bottom.

## Page Loading And Transition

The source uses a fixed `.page-loading` overlay and a `.page-transition` made from vertical strips. Reuse this for playful route changes.

```css
.page-transition {
  position: fixed;
  inset: 0;
  z-index: 9999998;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  pointer-events: none;
}

.page-transition div {
  background: var(--clau-lavender);
  transform: translateY(100%);
  transition: transform 0.65s var(--clau-ease);
}

.page-transition.animate-in div {
  transform: translateY(-100%);
}
```

## QA Checklist

- Letter-split titles must still have an accessible text label or readable text content.
- Disable dot cursor and heavy transitions on touch/mobile or `prefers-reduced-motion`.
- Do not let huge display type overlap navigation on narrow screens.
- Keep email CTAs real links.
- Preserve contrast when using lavender/green on dark or light backgrounds.
- Use actual portfolio media when available; placeholders should be replaced before publishing.

## Demo Reference

A static reusable demo lives at `ai/demos/clauaskee-expressive-portfolio-ui/`. Open `index.html` directly to inspect the layout and copy the HTML/CSS/JS patterns.
