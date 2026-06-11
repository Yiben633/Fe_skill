---
name: asana-human-agent-workflow-ui
description: Build Asana-style human-agent workflow marketing pages. Use when creating Asana-inspired SaaS homepages, AI work management landing pages, TWK Lausanne typography systems, sticky 56px product navs, acquisition announcement bars, human-agent workflow heroes, AI three Ps grid sections, left-column large tab navigation, right-column scroll panels, productivity-drain chart grids, circle diagram stats, logo/badge clusters, Plyr-style video blocks, and embedded Qualified messenger widgets.
---

# Asana Human-Agent Workflow UI

Use this skill to recreate the design language learned from the pasted Asana AI and Qualified messenger CSS. The look is crisp product marketing: TWK Lausanne typography, a disciplined sticky header, generous white space, coral/purple accents, dense 12-column feature grids, chart-like proof panels, and utility-grade embedded messenger behavior.

## Design DNA

- Use product-marketing clarity: quiet surfaces, precise grids, clear navigation, and confident but friendly copy.
- Lead with a 56px sticky header and optional acquisition announcement bar above it.
- Use a centered but fluid content width: desktop padding around 5.715%, capped near 1432-1584px.
- Use TWK Lausanne-style sans typography with Helvetica fallbacks; for Japanese pages switch to Hiragino.
- Build AI sections around a 12-column grid: large left tab/navigation column and a right visualization column.
- Prefer coral, purple, blue, and mint accents over gradients. Keep backgrounds mostly white, off-white, or very soft grey.
- Make visualization panels look operational: charts, badges, workflow lines, logo clusters, task cards, and circular metric diagrams.
- Treat messenger embeds as infrastructure: high z-index, hidden zero-size default, explicit maximized/fullscreen states, and accessible skip links.

## Core Tokens

```css
:root {
  --asana-font: "TWK Lausanne", "Helvetica Neue", Helvetica, sans-serif;
  --asana-white: #ffffff;
  --asana-black: #0d0e10;
  --asana-text: #222b37;
  --asana-muted: #646f79;
  --asana-soft: #fafaf9;
  --asana-grey: #f5f4f3;
  --asana-border: #e0dedc;
  --asana-coral: #f06a6a;
  --asana-purple: #796eff;
  --asana-blue: #4573d2;
  --asana-green: #25e8c8;
  --asana-header-height: 56px;
  --asana-content-x: 5.715%;
  --asana-shadow: 0 2px 12px rgba(36, 50, 66, .08);
}

:root[lang="ja"] {
  --asana-font: "Hiragino Kaku Gothic ProN", "Helvetica Neue", Helvetica, sans-serif;
}
```

## Header Pattern

Use a 56px sticky header with a white surface, a compact logo, desktop nav links, and right-side actions.

```html
<header class="asana-header" data-state="rest">
  <a class="asana-logo" href="#"><span></span><strong>asana</strong></a>
  <nav class="asana-nav">
    <a href="#">Products</a>
    <a href="#">Solutions</a>
    <a href="#">Resources</a>
    <a href="#">Pricing</a>
  </nav>
  <div class="asana-actions">
    <button class="button button-ghost">Contact sales</button>
    <button class="button button-coral">Get started</button>
  </div>
</header>
```

```css
.asana-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--asana-header-height);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 0 var(--asana-content-x);
  background: var(--asana-white);
  border-bottom: 1px solid transparent;
}

.asana-header.is-scrolled {
  border-bottom-color: var(--asana-border);
  box-shadow: var(--asana-shadow);
}
```

## Announcement Bar

Use a thin announcement strip above the header for acquisitions, launches, or AI news.

```css
.announcement {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 44px;
  padding: 8px var(--asana-content-x);
  background: #e8f4ff;
  color: var(--asana-text);
  font-size: 14px;
}
```

Keep copy compact. Use a text link with underline or arrow; avoid making it feel like an ad banner.

## Hero Pattern

Hero layouts should present the product promise and a workflow visual in the first viewport.

- Use `clamp(48px, 8vw, 116px)` display type with tight line-height.
- Pair one coral primary CTA with a quiet secondary CTA.
- Put visual proof next to or below the copy: task cards, agent chips, status bars, or a workflow canvas.
- Keep the hero background off-white or white; use accent color in objects rather than the full page.

## AI Three Ps Grid

Use this for sections like Plan, Prioritize, Perform.

```css
.ai-three-ps {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
  max-width: 1584px;
  margin: 0 auto;
  padding: 64px var(--asana-content-x);
}

.ai-three-ps__left {
  grid-column: 1 / span 5;
  display: grid;
  align-content: start;
  gap: 48px;
  padding: 32px 40px;
  background: var(--asana-white);
}

.ai-three-ps__right {
  grid-column: 6 / -1;
  min-height: calc(100dvh - var(--asana-header-height));
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  background: var(--asana-grey);
}

.ai-three-ps__tab {
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
  gap: 20px;
  min-height: 60px;
  font-size: clamp(32px, 4vw, 60px);
  line-height: 1.05;
  letter-spacing: -.03em;
  font-weight: 300;
}
```

On mobile, stack columns and reduce the tab logo size to 44-50px.

## Visualization Components

Use chart-like visuals to make the AI story concrete.

- Productivity grid: background lines every 56px with bars or floating metric cards.
- Badge cluster: small pills for systems, agents, teams, or work states.
- Circle diagram: circular ring with metric labels placed around or inside the ring.
- Logo cluster: 40-60px icon cells in a soft bordered grid.
- Task cards: white cards with thin borders, status chips, owners, due dates, and agent notes.

```css
.productivity-grid {
  background-image:
    linear-gradient(var(--asana-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--asana-border) 1px, transparent 1px);
  background-size: 56px 56px;
  border: 1px solid var(--asana-border);
  border-radius: 18px;
  overflow: hidden;
}
```

## Qualified Messenger Pattern

When a Qualified-like messenger iframe is part of the page, keep it inert until opened.

```css
#q-messenger-frame-skip-link {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip-path: inset(50%) !important;
  white-space: nowrap !important;
}

#q-messenger-frame-skip-link:focus {
  position: fixed !important;
  top: 10px !important;
  left: 10px !important;
  z-index: 2147483647 !important;
  padding: 1rem !important;
  background: #fafafa !important;
  color: #122124 !important;
  border-radius: 4px !important;
}

#q-messenger-frame {
  position: fixed !important;
  z-index: 2147483642 !important;
  right: 0 !important;
  bottom: calc(0px + var(--qualified-offer-footer-height, 0px)) !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  border: 0 !important;
}

#q-messenger-frame.qlfd-maximized {
  width: 538px !important;
  min-height: 480px !important;
  max-height: calc(100dvh - 150px) !important;
}

#q-messenger-frame.qlfd-full-screen {
  width: 100% !important;
  height: 100dvh !important;
  max-height: 100dvh !important;
  z-index: 2147483647 !important;
}
```

For a full implementation, pair this with the `qualified-messenger-iframe-visibility-ui` skill.

## Video Player Notes

If using Plyr-style video blocks, inherit page font, keep controls rounded and contrasty, and preserve clear focus outlines. Video blocks should support captions, play states, and a poster image or product frame.

## Responsive Rules

- Desktop: 12 columns, 16-32px gaps, left section around 5 columns, right section 7 columns.
- Tablet: keep two columns only if the visualization remains readable.
- Mobile: stack sections, make tab navigation horizontal or compact, and avoid fixed-height chart panels taller than the viewport.
- Use `100dvh` for viewport-aware panels and avoid `100vh` when browser chrome matters.

## QA Checklist

- Header remains 56px tall and does not jump when scrolled.
- Announcement bar can be dismissed without shifting unrelated content unexpectedly.
- Three-P tabs update visual content without resizing the whole section.
- Chart labels and pills fit at mobile widths.
- Messenger skip link is keyboard reachable and visible on focus.
- Messenger states have explicit closed, maximized, full-height, embedded, and full-screen behavior.
- Page works with `prefers-reduced-motion: reduce`.
