---
name: healthy-together-public-health-saas-ui
description: Build Healthy Together-style public health SaaS and government technology pages. Use when creating civic health tech websites, government program platforms, Medicaid/SNAP/WIC/social-services SaaS pages, education or enterprise health dashboards, outcome-focused landing pages, Webflow-style mega navigation, smooth-scroll reveal sections, logo brag bars, waveform hero visuals, Comet/Luna-inspired product panels, benefits carousels, and public-service CTA layouts.
---

# Healthy Together Public Health SaaS UI

## Overview

Use this skill to recreate the design language learned from Healthy Together text and CSS. The style combines trustworthy public-sector SaaS with lively product storytelling: dark navy foundations, electric "breeze" blue actions, cream/lavender/mint surfaces, outcome-focused hero copy, smooth reveal motion, partner brag bars, mega navigation, and rounded product panels.

## Design DNA

- Lead with public-sector outcomes, not generic product claims.
- Use calm institutional structure with bright optimistic accents.
- Keep navigation dense and useful: Solutions, Platform, Company, Resources, and Help.
- Use a large hero statement like "Systems that deliver outcomes for government."
- Anchor trust with a partner logo/brag bar immediately under the hero.
- Mix dark navy sections with pale lavender, cream, mint, and blue panels.
- Use large rounded cards for Comet/Luna-style product stories.
- Add subtle waveform, orbit, grid, or app-dashboard visuals instead of generic abstract blobs.
- Use scroll reveal and carousel/ticker patterns, but keep motion smooth and restrained.

## Core Tokens

```css
:root {
  --ht-navy: #101722;
  --ht-breeze: #4541fe;
  --ht-breeze-hover: #0040dd;
  --ht-lavender: #d9c6ff;
  --ht-lavender-light: #f9f1ff;
  --ht-cream: #fbf6ee;
  --ht-white: #ffffff;
  --ht-gray: #e6e6eb;
  --ht-mint: #0ac9c0;
  --ht-medicaid: #97fffa;
  --ht-comet-blue: #37afe7;
  --ht-comet-light: #ecf7ff;
  --ht-green: #35c358;
  --ht-pink-soft: #f7d6e3;
  --ht-shadow: 0 6px 16px #00000014, 0 3px 6px -4px #0000001f, 0 9px 28px 8px #0000000d;
  --ht-radius-lg: 24px;
  --ht-container: 87.5rem;
}
```

## Typography

- Use a clean geometric sans for everything.
- Use large, direct headings with line-height around `.95` to `1.05`.
- Use text wrapping intentionally: `text-wrap: balance` for headings and `text-wrap: pretty` for cards.
- Keep body copy around `1rem` to `1.25rem` with `1.35` line height.
- Use bold eyebrow labels for section framing.

```css
.ht-heading-xl {
  font-size: clamp(3.25rem, 9vw, 8.25rem);
  line-height: .95;
  letter-spacing: 0;
  text-wrap: balance;
}

.ht-eyebrow {
  font-size: .9rem;
  font-weight: 700;
  color: var(--ht-breeze);
  text-transform: uppercase;
}
```

## Layout Patterns

### Sticky Nav And Mega Dropdown

Use a sticky/fixed nav with a cream active surface and dark navy mega panels. Dropdowns should scale vertically from the top and fade content in.

```css
.ht-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: color-mix(in srgb, var(--ht-cream) 92%, transparent);
  backdrop-filter: blur(14px);
}

.ht-mega {
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  transition: transform .22s ease, opacity .22s ease;
}

.ht-mega.is-open {
  transform: scaleY(1);
  opacity: 1;
}
```

Structure mega nav columns around public-service domains:

- Public Health: disease surveillance, screenings, case management.
- Social Services: Medicaid, SNAP, WIC, eligibility, benefits.
- Referral Systems: behavioral health, 988, community referrals.
- Resources: help center, feedback, app downloads.

### Hero

Use full viewport or near-full viewport hero. Put copy top/left or centered, with a waveform/video-inspired visual behind or below. Add a cream primary CTA over a navy or breeze section.

Recommended copy pattern:

```html
<h1>Systems that deliver outcomes for government.</h1>
<a class="button is-cream">Schedule a Demo</a>
```

Add a partner brag bar under the hero with state/agency-like marks.

### Buttons

Primary buttons are rounded, compact, and bold.

```css
.button.primary {
  background: var(--ht-breeze);
  color: var(--ht-cream);
  border-radius: 999px;
  padding: .9rem 1.35rem;
  font-weight: 700;
}

.button.primary:hover {
  background: var(--ht-breeze-hover);
}

.button.primary.is-cream {
  background: var(--ht-cream);
  color: var(--ht-navy);
}
```

### Product Cards

Use cards with `text-wrap: balance`, `24px` radius, pale surfaces, and product visual layers.

- `cc-bg-white`: white cards.
- `cc-shadow`: soft multi-layer shadow.
- `cc-comet-gray`: light gray border and muted interface mockups.
- `luna-mis_big-card`: large rounded product story with image/glow layer.
- `luna-mis_booth-card`: two-zone card with pink top and content bottom.

### Feature Sections

Alternate:

- Navy benefits section with white text.
- Lavender feature section.
- Breeze-blue feature section.
- Mint/Medicaid panels for healthcare eligibility.
- Cream CTA sections with large right-side product image.

### Brag Bar And Ticker

Use a row of muted partner marks under the hero. A static row is fine; for motion, use a slow horizontal ticker. Keep contrast soft so it reads as credibility, not a loud logo wall.

### Reveal Motion

Healthy Together uses Webflow/Lenis-style reveal states. Recreate with:

- Initial `opacity: 0; transform: translateY(2rem);`
- Add `.is-visible` on intersection.
- Use `.6s` to `.8s` ease transitions.

## Demo Recipe

Create a page with:

1. Sticky nav with mega dropdown.
2. Hero with outcome headline, CTA, and waveform visual.
3. Partner brag bar.
4. Three solution cards for Public Health, Social Services, Referral Systems.
5. Navy benefits band with metric cards.
6. Product showcase with Comet and Luna panels.
7. Cream CTA with right-side dashboard/device collage.

## QA Notes

- Keep the page trustworthy: do not overuse gradients or playful visuals in government contexts.
- Make dropdown content keyboard/focus accessible if implementing production nav.
- Use clear public-service labels and avoid vague SaaS jargon.
- Preserve high contrast for navy and breeze sections.
- On mobile, stack mega nav content and keep CTA buttons full-width where needed.

## Demo

See the reusable static demo at `ai/demos/healthy-together-public-health-saas-ui/`.
