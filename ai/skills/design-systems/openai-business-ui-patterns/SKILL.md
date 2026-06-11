---
name: openai-business-ui-patterns
description: Build OpenAI-style business, product, API, research, developer, and technical UI sections. Use for business landing pages, API platform pages, docs-like layouts with left side navigation, soft noise-gradient hero surfaces, bordered headline accents, OpenAI Sans typography, compact chart text, colored inline highlights, image hotspots, hidden/thin scrollbars, tweet/social proof cards, CRT/typewriter technical panels, floating visual elements, dotted backgrounds, popovers, diff/code viewers, mega footers, locale selectors, and dark-mode-ready design tokens.
---

# OpenAI Business UI Patterns

Use this skill to recreate the design patterns learned from the pasted OpenAI/Codex CSS. The style is calm, technical, premium, and content-led: restrained typography, tokenized colors, subtle gradients, small-radius accents, precise chart labels, and accessible motion.

## Learned Page Shell

Use this page shell for OpenAI-style business/API pages:

```css
:root {
  --document-width: 1065px;
  --nav-width: 200px;
  --content-width: calc(var(--document-width) - var(--nav-width));
  --gutter-size: max(20px, calc((var(--document-width) - 68rem) / 2));
  --media-gutter-size: max(20px, calc((var(--document-width) - 1728px) / 2));
}
```

- Use `--nav-width: 0px` for pure landing pages.
- Use `--nav-width: 200px` for API/docs pages with a sticky left rail.
- Keep content max width around 68rem unless media needs full bleed.
- Use a sticky header with transparent/blurred background and low-contrast nav links.
- Give external links a small diagonal arrow icon and hidden screen-reader text.

## Core Tokens

- Font: prefer `"OpenAI Sans", Inter, ui-sans-serif, system-ui, sans-serif`.
- Background: `#f7f5f0` or `#ffffff` for light, `#050505` or `#0d0d0d` for dark.
- Text: near-black `#101010`; muted text uses 60-70% opacity.
- Accent: one contextual hue per surface, mixed softly into background.
- Radius: small labels use 4px; cards use 12-16px; hero headline accent uses about 13px.
- Motion: 150-400ms for UI; longer 600ms floating/brand transitions; always support reduced motion.

## Typography Utilities

Use chart-specific text classes for dense data UI:

```css
.text-chart-title { font-size: .94625rem; font-weight: 500; line-height: 144%; }
.text-chart-label { font-size: .94625rem; font-weight: 400; line-height: 117%; }
.text-chart-bar-label { font-size: .425rem; font-weight: 400; line-height: 144%; }
.text-chart-legend { font-size: .8425rem; font-weight: 400; line-height: 144%; }
.text-chart-legend-detail { font-size: .655rem; font-weight: 400; line-height: 144%; }
.text-chart-tooltip-label { font-size: .84375rem; font-weight: 500; line-height: 144%; }
.text-chart-tooltip-metric { font-size: .84375rem; font-weight: 400; line-height: 144%; }
```

Use tiny uppercase mono labels for Codex/terminal UI:

```css
.text-codex-xs { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .04375em; font-size: .625rem; line-height: .825rem; }
.text-codex-sm { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .0875em; font-size: .75rem; line-height: 1rem; }
```

## Hero Surface

- Pull hero upward only when it visually integrates with the nav/header.
- Add a pseudo-element behind the hero with noise plus a vertical gradient.
- Mix the accent color into the background more strongly near the bottom.
- Use a bordered headline accent with white padding-box, subtle border gradient, and soft shadow.
- In dark mode, replace the white accent fill with translucent accent and a low-contrast white border.

## Business Landing Layout

- Lead with a large editorial H1, short value proposition, and two CTAs.
- Use product/business nav labels such as Overview, Solutions, Resources, Contact Sales, API Platform, Developers.
- Use soft abstract media or gradient panels as the first visual signal.
- Add alternating full-width sections: proof stats, solution cards, customer stories, security/trust, and prefooter CTA.
- Use restrained iconography and keep cards quiet; the page should feel premium and enterprise-ready.

## API Platform Layout

- Use a two-column document frame: left side nav and content column.
- Left nav is sticky below the header, 200px wide, and uses muted section headings plus active item state.
- Main content uses compact eyebrow, large heading, intro copy, CTA row, and technical cards.
- Include model/API cards, code samples, quickstart steps, safety/pricing links, and docs CTA.
- Keep code blocks horizontally scrollable with `thin-scrollbar`; avoid decorative cards around dense docs content.

## Header And Footer

- Header: wordmark left, center/left nav links, CTA group right. Use 250ms color transitions.
- Mega footer: 4-5 columns, grouped headings such as Products, API Platform, Business, Developers, Company, Support, More, Terms & Policies.
- Footer links are small, muted, and brighten/dim on hover.
- Bottom footer row contains social icons, copyright/cookie link, and a rounded locale selector.
- Locale selector can expand into a search input overlay; keep it keyboard reachable and dismissible.

## Highlight Labels

Use inline highlights for short phrases only. Keep padding tight, font semibold, and radius around 4px.

- Red/orange: risk, warnings, regressions.
- Green: success, growth, completed state.
- Blue: product, insight, informational cue.
- Pink/magenta: creative or attention cue.

Do not use highlight blocks for long paragraphs.

## Image Hotspots

- Put hotspots inside a container-query scope.
- Position markers over an image or mock UI.
- Use absolute popover content.
- On narrow containers, convert popovers into bottom sheets by setting left/right gutters and translating below the image.
- Keep hotspot buttons at least 32px and keyboard focusable.

## Scrollbar Utilities

- `hide-scrollbar`: for horizontal chip rows and decorative scrollers where scroll affordance is obvious.
- `thin-scrollbar`: for technical panes and long code/diff blocks where scrollbars are useful but should stay quiet.
- Never hide the only indication that content scrolls in critical workflows.

## Technical Panels

- Use CRT/typewriter effects for developer or retro-computer moments only.
- Build CRT with dark surface, green foreground, scanline overlays, subtle RGB text shadow, and optional glitch.
- Use mono uppercase labels and tiny buttons.
- Disable glitch, flicker, typewriter, and floating animations for reduced motion.

## Social Proof Cards

- Tweet/social cards use tokenized theme variables, 12px radius, 1px border, compact header, large body text, and muted metadata.
- Support light and dark themes through CSS variables.
- Skeleton loaders use a slow horizontal gradient and stop under reduced motion.

## Diff And Code Viewers

- Scope diff styles inside a wrapper to avoid leaking table/code resets.
- Use green add rows, red delete rows, neutral line numbers, and blue hunk rows.
- Provide both light and dark theme tokens.
- Use thin scrollbars and `content-visibility: auto` for large diffs.

## Code Recipe

When implementing this style:

1. Define design tokens first: colors, font, spacing, radius, motion.
2. Add utility classes for chart text, highlights, scrollbars, typewriter labels, and popover motion.
3. Build a hero section with `.business-hero`, `.hero-surface`, and `.headline-accent`.
4. Build reusable components: `.highlight`, `.hotspot`, `.chart-card`, `.tweet-card`, `.crt-screen`, `.diff-view`.
5. For API/docs pages, wrap layout with `.document-shell`, `.side-nav`, and `.doc-content`.
6. Build `.mega-footer` with grouped columns, social links, cookie action, and locale selector.
7. Add dark mode through `[data-theme="dark"]` or `@media (prefers-color-scheme: dark)`.
8. Add `@media (prefers-reduced-motion: reduce)` to stop flicker, typewriter, floating, skeleton shimmer, and progress animations.

See `ai/demos/openai-business-ui-patterns/index.html` for visual component patterns and `ai/demos/openai-business-ui-patterns/platform-layout.html` for the business/API page shell.
