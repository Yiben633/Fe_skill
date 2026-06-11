---
name: wope-seo-research-ai-ui
description: Build Wope-style AI SEO research landing pages and product interfaces. Use when creating dark cosmic SaaS pages, SEO research tool websites, AI keyword/backlink/rank-tracking dashboards, glowing conic-border buttons, star-particle hero sections, Rebond Grotesque-style bold headlines, Inter-like body typography, Qwik-inspired header dropdowns and mobile overlays, product demo modals, domain trial inputs, predictive analytics CTAs, magical-border cards, and compact accordion footers.
---

# Wope SEO Research AI UI

## Overview

Use this skill to recreate the design language learned from the Wope page text. The style is a dark, cosmic AI SaaS interface: black-purple background, white-to-lavender text, glowing conic borders, star particles, compact header dropdowns, big confident SEO research copy, domain trial input, layered dashboard cards, and magical-border CTA/footer panels.

## Design DNA

- Use a deep purple-black canvas instead of flat black.
- Pair bold, rounded display typography with precise Inter-like UI text.
- Make primary actions glow with animated conic borders and subtle star masks.
- Treat product visuals as floating research cards, tables, rank tracks, and light panes.
- Use small, polished dropdown cards for "Resources" and partner links.
- Use domain input plus CTA as the central conversion device.
- Keep copy focused on SEO research, keyword insights, backlink analysis, rank tracking, predictive insights, and content generation.
- Add sparkle/star fields sparingly around hero and CTA sections.

## Core Tokens

```css
:root {
  --wope-bg: #0a0118;
  --wope-surface: #140b25;
  --wope-surface-2: #1b0f32;
  --wope-border: rgba(186, 179, 255, .1);
  --wope-text: #f9f8fc;
  --wope-muted: #9b96b0;
  --wope-soft: #d2d0dd;
  --wope-purple: #8f5cff;
  --wope-violet: #6c3dff;
  --wope-cyan: #79f2ff;
  --wope-pink: #ff7adf;
  --wope-green: #84ffb5;
  --wope-radius: 12px;
  --wope-container: 1248px;
  --wope-font-display: "Rebond Grotesque", "Arial Black", system-ui, sans-serif;
  --wope-font-body: "Inter V", Inter, system-ui, sans-serif;
}
```

## Typography

- Use display font for hero and section titles, weight 700.
- Use Inter-like body text with `font-feature-settings: "cv06" on, "calt" off, "liga" off`.
- Use tight negative-ish feel from source by keeping letter spacing near `-.01em`; if project rules disallow negative letter spacing, use `0`.
- Keep mobile container narrow, around `358px`, with body fallback to system fonts.

```css
.wope-title {
  font-family: var(--wope-font-display);
  font-size: clamp(3.25rem, 8vw, 7rem);
  line-height: .9;
  letter-spacing: 0;
}

.wope-ui-text {
  font-family: var(--wope-font-body);
  font-feature-settings: "cv06" on, "calt" off, "liga" off;
}
```

## Glowing Box Pattern

Use this for buttons, domain inputs, and high-priority CTAs. The source pattern uses an isolated pill, conic gradient border, optional glow, and active state.

```css
.glowing-box {
  isolation: isolate;
  overflow: hidden;
  border-radius: 999px;
  display: inline-block;
  position: relative;
}

.glowing-box::before {
  content: "";
  position: absolute;
  inset: -80%;
  background: conic-gradient(from 0deg, rgba(255,255,255,.55), transparent 70deg, transparent 300deg, rgba(255,255,255,.55));
  animation: borderTurn var(--animation-speed, 4s) linear infinite;
}

.glowing-box > * {
  position: relative;
  z-index: 1;
  margin: 1px;
}
```

Use a dark inner button with gradient text or white text:

```css
.glowing-box-button {
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 999px;
  background: rgba(255,255,255,.06);
  color: var(--wope-text);
  padding: 10px 18px;
}
```

## Header And Dropdowns

Desktop:

- Header inside `.container`, height around `72px`, bottom hairline gradient.
- Center nav with `Resources`, `Pricing`, `Download`, `Contact Us`.
- Right actions: ghost "Log in" and glowing "Sign up".
- Resources dropdown: `375px`, surface `#140B25`, `12px` radius, `rgba(186,179,255,.1)` border, icon tiles, descriptions, scale/opacity reveal.

Mobile:

- Full viewport overlay with `rgba(10,1,24,.72)` and `backdrop-filter: blur(36px)`.
- Accordion list items with `#d2d0dd` labels and `#676182` chevrons.
- Bottom two-column actions and a small community card.

## Hero

Use the source message:

- Title: "Wope: The New Era of SEO Research"
- Description: "Elevate your marketing strategy with Wope's AI-driven research tools..."
- CTA ideas: "Sign up", "See how it works", "Try Demo"
- Include a video modal trigger for product demo.
- Add top mask/rays and bottom line animations using CSS gradients if assets are unavailable.

Hero background recipe:

- Large radial glow behind headline.
- Animated ray lines from bottom center.
- Floating star particles.
- Optional central dashboard/video preview card.

## Domain Trial Input

Use a paired input and glowing CTA.

```html
<div class="try-demo">
  <div class="glowing-box try-demo-input">
    <input placeholder="Enter your domain" />
  </div>
  <div class="glowing-box try-demo-button">
    <button>Try Demo</button>
  </div>
</div>
<div class="try-demo-info">No credit card required - 14-days free trial</div>
```

Disable the CTA until a domain-like value is present if implementing behavior.

## Research Cards

Create layered cards that imply:

- Detailed keyword card.
- Explore table.
- Rank tracking table.
- Light panes and icon chips.
- Predictive insight particles.

Use translucent surfaces, small borders, glows, and offset images/cards.

## CTA Section

Use copy:

- "Outrank Everyone. Starting Now."
- "Wope analyzes millions of data points to deliver predictive insights."

Use a glowing domain form again, a star particle layer, and a centered CTA icon or orb.

## Footer

- Brand plus "Experience the next generation of SEO analytics."
- Glowing CTA: "Unlimited trial for 14 days".
- Accordion groups: Platform, Legals, Wope for.
- Magical-border contact card with grid background and address/contact details.
- Social icon row in muted lavender.

## Motion

- Use `borderTurn` for conic borders.
- Use slow twinkle for stars.
- Use fade/slide reveal for sections.
- Respect reduced motion by disabling long animations.

```css
@keyframes borderTurn {
  to { transform: rotate(360deg); }
}
```

## Demo

See the reusable static demo at `ai/demos/wope-seo-research-ai-ui/`.
