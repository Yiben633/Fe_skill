---
name: preny-ai-glassmorphism
description: Build Preny-style AI chatbot and sales SaaS landing pages. Use when creating bright Vietnamese/SEA AI sales pages, glass headers, purple-pink-orange gradient text, translucent cards, animated glow borders, CRM lead cards, chat demo panels, industry support sections, pricing/package cards, mobile horizontal scrollers, shimmer banners, and conversion-focused AI chatbot layouts.
---

# Preny AI Glassmorphism

Use this skill to recreate the design language learned from the pasted Preny AI chatbot markup and CSS. The style is bright, glossy, sales-oriented, and motion-polished: lavender page backgrounds, glass headers, purple CTAs, gradient text, animated borders, CRM cards, and chat panels that show practical business conversations.

Demo reference: `ai/demos/preny-ai-glassmorphism/index.html`.

## Design DNA

- Use a light lavender base rather than plain white.
- Make the header a floating glass capsule with translucent white, blur, inset highlights, and gradient border accents.
- Use the brand gradient often but precisely: purple `#5f03e0`, pink `#ff21cf`, orange `#ff8a60`.
- Pair emotional hero copy with practical product mockups: CRM cards, chatbot conversation, order/ticket tags, and industry workflows.
- Keep cards white or translucent glass with soft violet shadows.
- Add motion as polish: slow float, shimmer sweep, hover tilt, animated glow border.
- On mobile, convert dense grids into horizontal snap scrollers.

## Visual Tokens

```css
:root {
  --preny-bg: #eee7f9;
  --preny-surface: #ffffff;
  --preny-purple: #5e1fb7;
  --preny-purple-deep: #5f03e0;
  --preny-purple-soft: #a67fea;
  --preny-pink: #ff21cf;
  --preny-orange: #ff8a60;
  --preny-text: #272727;
  --preny-muted: #77717f;
  --preny-border: rgba(255, 255, 255, .48);
  --preny-shadow: 0 18px 55px rgba(94, 31, 183, .22);
  --preny-gradient: linear-gradient(88.43deg, #5f03e0 4.27%, #ff21cf 66.71%, #ff8a60 95.73%);
}
```

Typography should feel friendly and modern. Use Inter or a system sans stack; avoid display fonts.

## Glass Header

Use this for the fixed/floating top navigation. The pseudo-elements create a gradient border on horizontal and vertical edges without filling the card.

```css
.glass-header {
  background: hsla(0, 0%, 100%, .783);
  border-radius: 20px;
  border: 1px solid #ffffff4d;
  box-shadow:
    0 8px 32px #d5d5d51a,
    inset 0 1px 0 #ffffff80,
    inset 0 -1px 0 #ffffff1a,
    inset 0 0 6px 3px #ffffff4d;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
}

.glass-header::before,
.glass-header::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}

.glass-header::before {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  background: linear-gradient(90deg, #5f03e0 4.27%, #ff21cf 66.71%, #ff8a60 95.73%) border-box;
}

.glass-header::after {
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  background: linear-gradient(180deg, #5f03e0 4.27%, #ff21cf 66.71%, #ff8a60 95.73%) border-box;
}
```

Header layout:

- Fixed container: `top: 12px`, horizontal padding `12-16px`.
- Inner height around `64px`.
- Logo left, nav center, language/login/signup right.
- Hide nav links on mobile; keep one compact menu icon.

## Gradient Text And Buttons

```css
.gradient-text {
  background: var(--preny-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.primary-gradient-button {
  background: linear-gradient(91.24deg, #5e1fb7 23.79%, #a67fea 96.92%);
  color: #fff;
  border: 0;
  border-radius: 8px;
  min-height: 44px;
  padding: 0 18px;
}
```

Use gradient text for the key phrase only, not every heading.

## Glass Cards

```css
.glass-card-ai {
  background: #fff6;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border-radius: 20px;
  border: 1px solid #ffffff4d;
  box-shadow:
    0 8px 32px #0000001a,
    inset 0 1px 0 #ffffff80,
    inset 0 -1px 0 #ffffff1a,
    inset 0 0 60px 30px #fff;
  position: relative;
  overflow: hidden;
}

.glass-card-ai::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #fffc, transparent);
}

.glass-card-ai::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, #fffc, transparent, #ffffff4d);
}
```

## Glow Border

Use for CRM cards, chat modules, and hero product panels.

```css
.glow-border {
  position: relative;
  isolation: isolate;
}

.glow-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: var(--glow-border-size, 1.4px) solid transparent;
  background: var(--glow-border-gradient, linear-gradient(88.43deg, #5f03e0cc 4.27%, #ff21cfc2 66.71%, #ff8a60b8 95.73%)) border-box;
  background-size: var(--glow-border-bg-size, 240% 100%);
  background-position: 120% 50%;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask-composite: xor;
  animation: glowBorderSweep var(--glow-border-duration, 7s) linear infinite;
  pointer-events: none;
  z-index: 1;
  filter: drop-shadow(0 0 26px rgba(124, 58, 237, .65));
}

.glow-border > * {
  position: relative;
  z-index: 2;
}

@keyframes glowBorderSweep {
  from { background-position: 120% 50%; }
  to { background-position: -120% 50%; }
}
```

## Chat Scrollbar

```css
.chat-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #9c7feabf transparent;
  scroll-behavior: smooth;
}

.chat-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.chat-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 999px;
}

.chat-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #c325d3, #9c7fea);
  border-radius: 999px;
  box-shadow: 0 6px 18px #9c7fea59, inset 0 0 0 1px #fff6;
}
```

## Layout Recipe

1. Floating glass header over a lavender page.
2. Hero with gradient headline, one-line value proposition, and two CTAs: Demo and Free trial.
3. Product mockup band: CRM cards beside a chat conversation preview.
4. Feature cards: small glass cards with icon-like blocks and practical labels.
5. Industry/support section: tabs or cards for Fashion, Education, Clinic, Restaurants, Spa.
6. Partner/press strip with logo cards.
7. Signup/contact section with purple form panel.
8. FAQ accordion or stacked questions.

## Component Patterns

CRM card:

- White card, 11-12px radius, `1.4px` violet border, soft shadow.
- Avatar row, customer name, phone, small menu action.
- Divider, then chips such as Ticket, New customer, VIP, Zalo care.
- 1-2 activity rows like "Order sent" or "Consultation scheduled".

Chat panel:

- Glass or white card with a fixed-height scroll area.
- Alternate bot/customer bubbles.
- Highlight one AI insight bubble with a faint purple-pink gradient border.
- Use the gradient scrollbar if content overflows.

Banner motion:

- `.banner-tilt` should only transform on hover.
- `.banner-shimmer::after` should sweep every 8-10s, not constantly flash.
- `.banner-soft-float` may be used for product mockups, not text.

## Responsive Rules

- Max content width: `1180-1200px`.
- Header: keep capsule shape but reduce radius to `12px` on mobile.
- Hero headline: 36-60px range using media queries, not viewport-based font scaling.
- Dense card grids become horizontal snap scrollers below 700px.
- Keep CTA buttons at least 44px high.

## Accessibility And Motion

```css
@media (prefers-reduced-motion: reduce) {
  .glow-border::before,
  .banner-shimmer::after,
  .banner-soft-float {
    animation: none;
  }

  .banner-tilt:hover {
    transform: none;
  }
}
```

Ensure glass surfaces have enough contrast. If text sits on translucent white, use `#272727` or `#5e1fb7`; avoid muted gray for important copy.
