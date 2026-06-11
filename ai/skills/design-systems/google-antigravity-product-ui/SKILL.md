---
name: google-antigravity-product-ui
description: Build Google Antigravity-style product and developer-tool landing pages. Use when creating neutral Google-style AI coding/editor pages, huge kinetic hero typography, Google Sans Flex/Code layouts, sticky blurred headers, pill navigation and buttons, agent workspace mockups, code/editor panels, inverse dark download sections, changelog/docs CTAs, and oversized wordmark footers.
---

# Google Antigravity Product UI

Use this skill to recreate the design language learned from the pasted Google Antigravity HTML/CSS. The style is clean, neutral, engineering-focused, and spatial: huge soft-weight typography, restrained gray tokens, blurred overlays, pill CTAs, editor/agent product mockups, dark inverse download bands, and a large wordmark footer.

Demo reference: `ai/demos/google-antigravity-product-ui/index.html`.

## Design DNA

- Use Google Sans Flex for interface and headings; use Google Sans Code or a monospace fallback for code/editor surfaces.
- Keep the palette mostly grayscale with one precise blue accent.
- Let space and typography carry the page; avoid colorful gradients as a primary motif.
- Use huge hero type with medium-light weight and tight line-height.
- Make the product real in the first viewport: editor window, agent queue, terminal, task graph, or download CTA.
- Buttons are rounded pills, not rectangular marketing blocks.
- Header is thin, fixed, white with blur; it becomes opaque on scroll or hover.
- Use inverse dark sections for download and closing CTAs.
- Footer can include a giant cropped wordmark as a visual asset.

## Visual Tokens

```css
:root {
  --ag-grey-1200: #121317;
  --ag-grey-1000: #212226;
  --ag-grey-900: #2f3034;
  --ag-grey-800: #45474d;
  --ag-grey-300: #b2bbc5;
  --ag-grey-100: #e1e6ec;
  --ag-grey-50: #e6eaf0;
  --ag-grey-20: #eff2f7;
  --ag-grey-10: #f8f9fc;
  --ag-white: #ffffff;
  --ag-blue: #3279f9;
  --ag-outline: rgba(33, 34, 38, .12);
  --ag-outline-soft: rgba(33, 34, 38, .06);
  --ag-inverse-outline: rgba(230, 234, 240, .12);
  --ag-radius-pill: 999px;
  --ag-radius-xl: 32px;
  --ag-page-margin: 40px;
  --ag-grid-max: 1600px;
}
```

Typography tokens:

```css
.landing-main {
  font-size: var(--landing-main-text-size, 107px);
  line-height: var(--landing-main-text-line-height, 107px);
  letter-spacing: var(--landing-main-text-letter-spacing, -2.14px);
  font-weight: 450;
  font-variation-settings: "wdth" 100, "opsz" 144;
}

.code-face {
  font-family: "Google Sans Code", "SFMono-Regular", Consolas, monospace;
}
```

Use media queries to step hero type down: 107px desktop, 72px large tablet, 56px tablet, 40-44px mobile.

## Header Pattern

```css
.ag-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  min-height: 56px;
  background: rgba(255, 255, 255, .85);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: background .2s ease, transform .3s ease;
}

.ag-header.is-opaque,
.ag-header:hover {
  background: #fff;
}
```

Header layout rules:

- Use a max-width grid/container with page margins.
- Logo left, nav links center/left, compact actions right.
- Nav buttons use transparent or tonal rounded pills.
- Mobile nav expands below the header with white surface and thin dividers.

## Button Pattern

```css
.ag-button {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--ag-radius-pill);
  padding: 10px 24px;
  font-weight: 450;
  transition: background .15s ease-out, color .15s ease-out, border-color .15s ease-out;
}

.ag-button.primary {
  background: var(--ag-grey-1200);
  color: #fff;
}

.ag-button.secondary {
  background: rgba(183, 191, 217, .1);
  border-color: var(--ag-outline-soft);
  color: var(--ag-grey-1200);
  backdrop-filter: blur(6px);
}

.inverse .ag-button.primary {
  background: #fff;
  color: var(--ag-grey-1200);
}

.inverse .ag-button.secondary {
  background: rgba(170, 177, 204, .2);
  border-color: var(--ag-inverse-outline);
  color: #fff;
}
```

## Layout Recipe

1. Fixed blurred header.
2. Full-height welcome/hero with huge headline and short subcopy.
3. Product workspace mockup: editor, agent activity, terminal, or task queue.
4. Product sections using alternating light gray surfaces and split layouts.
5. Docs/changelog/release cards with small blue accents.
6. Inverse download section with typed headline and two architecture buttons.
7. Footer with "Experience liftoff" plus nav columns and giant wordmark.

## Workspace Mockup

- Frame the editor in a large rounded surface with `var(--ag-outline-soft)` border.
- Use a top toolbar with small circles/tabs.
- Left side: file tree or project nav.
- Center: code editor with monospace lines.
- Right side: agent panel with status chips, steps, and task cards.
- Include one blue active line/status; keep everything else gray.

```html
<div class="workspace-shell">
  <div class="workspace-toolbar">
    <span></span><span></span><span></span>
  </div>
  <div class="workspace-grid">
    <aside class="file-tree"></aside>
    <section class="editor code-face"></section>
    <aside class="agent-panel"></aside>
  </div>
</div>
```

## Typed Header Animation

Use a simple per-word or per-letter reveal for hero/download headings. Keep a real text fallback in the DOM for accessibility.

```css
.typed-word span {
  display: inline-block;
  opacity: 0;
  transform: translateY(12px);
  animation: typeLift .5s ease forwards;
}

@keyframes typeLift {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Inverse Download Band

- Use `#121317` background, white headline, muted gray subcopy.
- Put architecture buttons side by side on desktop, stacked on mobile.
- Add a faint grid or editor outline in the background, not colorful decoration.
- CTA copy can be "Download for x64" and "Download for ARM64".

## Footer Pattern

- Top row: short phrase ("Experience liftoff") and two nav columns.
- Bottom row: Google/logo/legal links.
- Add a massive wordmark in dark text at low contrast or cropped height.
- Keep footer text links plain and underlined on hover.

## Responsive Rules

- Container max width: `1600px`; page margin `40px`, `28px`, `16px`.
- Desktop grid: 12 columns; tablet 8; mobile 4.
- Hero type steps down with breakpoints, not fluid viewport math.
- Product mockup stacks on mobile.
- Preserve button height and pill radius on all sizes.

## QA Checklist

- Header blur and opacity do not hide content underneath.
- Hero text fits without overlap at 320px width.
- Editor mockup uses stable min-height and grid columns.
- Inverse buttons meet contrast requirements.
- Motion respects `prefers-reduced-motion`.
