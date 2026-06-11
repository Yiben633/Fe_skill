---
name: evervault-payments-security-ui
description: Build Evervault-style secure payments and encryption SaaS interfaces. Use when creating dark purple fintech landing pages, flexible payments security pages, PCI/compliance product UIs, SDK orbit visuals, glass sticky navigation, radial gradient heroes, secure card collection forms, payment method modals, sales drawers, PSP/network token diagrams, encrypted request animations, compliance badges, Barlow Condensed or VT323 retro security/game sections, and dense footer navigation for security infrastructure websites.
---

# Evervault Payments Security UI

Use this skill to recreate the design language learned from the pasted Evervault payment-security source. The style is a polished security-infrastructure SaaS system: deep navy/purple surfaces, white-to-violet radial gradient heroes, glass navigation, small precise tokens, Inter/Roboto Mono typography, orbiting SDK logos, payment cards, encrypted request lines, compliance badges, and modal/drawer payment workflows.

## Design DNA

- Keep the product serious and technical, but visually futuristic.
- Use dark surfaces (`#010314`, `#0a0622`, `#171825`) with violet accent `#6633ee`.
- Use glass panels with `backdrop-filter`, translucent white borders, and inset shadows.
- Favor pill CTAs, rounded cards, circular nodes, rings, orbit diagrams, and radial glow separators.
- Pair clean Inter-like body typography with Roboto Mono for code and VT323 only for retro/game sections.
- Show payments/security through diagrams: card components, PSP nodes, SDK planets, compliance badges, encrypted request beams.

## Core Tokens

```css
:root {
  --primary: #6633ee;
  --primary-light: #bea7ff;
  --bg: #010314;
  --surface: #0a0622;
  --surface-2: #171825;
  --surface-card: #302755cc;
  --grey-00: #ffffff;
  --grey-10: #f4f2ff;
  --grey-20: #e4dcff;
  --grey-40: #b9afd9;
  --grey-60: #80769c;
  --grey-70: #5d566f;
  --grey-80: #302c3c;
  --grey-100: #090713;
  --green-medium: #62e6a6;
  --error: #ff668a;
  --token-04: .25rem;
  --token-08: .5rem;
  --token-12: .75rem;
  --token-16: 1rem;
  --token-20: 1.25rem;
  --token-24: 1.5rem;
  --token-32: 2rem;
  --token-40: 2.5rem;
  --token-48: 3rem;
  --token-64: 4rem;
  --token-80: 5rem;
  --token-96: 6rem;
  --token-128: 8rem;
  --radius-xs: .5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 3rem;
  --radius-round: 999px;
  --material-effect: 0 8px 16px -4px #00000040, 0 4px 8px -2px #00000040, 0 1px 2px #0003, inset 0 0 0 1px #bea7ff3d;
}
```

## Typography

- Body: Inter/system sans, `16px`, line-height `1.5-1.75`.
- Headings: Inter, semibold, tight letter spacing around `-.025em`.
- Mono/code: Roboto Mono or system monospace.
- Retro/game overlays: `VT323`, uppercase, pixel-like borders, neon violet glow.
- Optional promotional display: Barlow Condensed at `400` and `900`.

## Layout Recipe

1. Sticky glass nav centered at the top; hide on mobile if needed.
2. Rounded radial-gradient hero: `radial-gradient(140% 107.13% at 50% 10%, #0000 37.41%, #63e 69.27%, #fff 100%)`.
3. Centered hero copy with eyebrow, headline, subtext, and two CTAs.
4. Product visual area with SDK orbit, card stack, terminal screen, or PSP nodes.
5. CTA cards on dark gradient panels.
6. Payment/security demo: modal overlay, secure card input grid, or sales drawer.
7. Compliance strip and multi-column dark footer.

## Glass Navigation

Use a compact centered nav with translucent backdrop and small rounded link pills.

```css
.ev-nav-list {
  pointer-events: all;
  backdrop-filter: blur(10px);
  background: #171825bf;
  border-radius: 20px;
  height: 40px;
  padding: 8px;
  display: flex;
  gap: 4px;
  box-shadow: inset 0 0 0 1px #ffffff1a, 0 2px 8px #0000004d;
}

.ev-nav-link span {
  height: 24px;
  padding: 0 12px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
}

.ev-nav-link:hover span {
  background: #ffffff1f;
  box-shadow: inset 0 0 0 1px #ffffff0a;
}
```

## SDK Orbit Visual

Use three circular orbits centered in a `600px` square. Place SDK/logo planets at the top edge of each orbit. On mobile, reduce container height and optionally rotate the orbit by `15deg`.

```css
.ev-sdk-orbit {
  width: 600px;
  height: 600px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.ev-orbit-ring {
  position: absolute;
  border: 1px solid #ffffff26;
  border-radius: 50%;
  background: #ffffff07;
}

.ev-orbit-ring.outer { inset: 0; }
.ev-orbit-ring.middle {
  width: 75%;
  height: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.ev-orbit-ring.inner {
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ev-planet {
  position: absolute;
  top: calc(-1 * var(--token-32) - var(--token-04));
  left: 50%;
  width: var(--token-80);
  height: var(--token-80);
  border-radius: var(--token-40);
  transform: translateX(-50%);
  backdrop-filter: blur(5px);
  background: #ffffff1a;
  box-shadow: var(--material-effect);
}
```

Animate ring wrappers with slow rotation if motion is allowed.

## Payment Card And PSP Burst

- Card components use aspect ratio `1.586`, purple vertical gradients, `12px` radius, and `var(--material-effect)`.
- Stack cards by rotating them `75deg`, `90deg`, and `105deg`; raise on hover.
- For PSP nodes, keep a central card and three circular services hidden until hover, then move them to `(-80px, -80px)`, `(0, -100px)`, `(80px, -80px)`.
- Use ring pulses behind the card: scale from `.05` to `1`, fade out over `6s`.

## Payment Modal Pattern

Use a dim overlay, white rounded modal, close pill above the modal, and card fields in a 2-column grid.

```css
.ev-overlay {
  position: fixed;
  inset: 0;
  min-width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background: #00000040;
  animation: fadeIn .3s ease;
}

.ev-overlay-window {
  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 1px #0000000d, 0 8px 16px -4px #0000000d, 0 32px 64px -16px #0000000d;
  animation: scaleIn .3s ease;
}

[ev-component="card"] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

[ev-component="card"] .field {
  grid-column: 1 / -1;
}

[ev-component="card"][ev-fields*="cvc"][ev-fields*="expiry"] .field[ev-name="expiry"],
[ev-component="card"][ev-fields*="cvc"][ev-fields*="expiry"] .field[ev-name="cvc"] {
  grid-column: auto;
}
```

## Sales Drawer Pattern

- Overlay: fixed black at `#00000080`.
- Drawer: fixed right, `max-width: 500px`, `width: calc(100vw - 1rem)`, top/bottom/right `.5rem`, white background, `1rem` radius, scrollable.
- Inputs: `48px` high, `8px` radius, `box-shadow: var(--grey-20) 0 0 0 1px`; focus becomes `2.5px` dark outline.

## Terminal And Retro Layer

Use terminal screens for encrypted flows: purple radial screen, mono text, scanline `:before`, flicker animation, blinking cursor.

Use VT323 game overlays only for playful security mini-games or retro product moments:

- Black-to-purple background.
- White pixel border via multiple box-shadows.
- Gradient text from violet to white.
- Controller buttons with inset shadows and circular controls.

## Dividers And CTA

- Use glowing separators with `border-image-source: linear-gradient(90deg, #0000 0, #8f78ff80 50%, #0000)`.
- CTA wrappers reuse the hero gradient, large `48px` radius, and centered copy.
- CTA cards use `linear-gradient(#302755cc 0%, #0a062266 100%)`, `16px` radius, and `inset 0 0 0 1px #bea7ff3d`.

## Footer

Build a dense footer on `var(--grey-100)` with a small white logo, 4-5 navigation columns, muted links, compliance links, a top border copyright strip, and a green status dot for "All systems normal".

## Motion And Accessibility

- Use `prefers-reduced-motion` to stop orbit rotation, spinner, pulse rings, scanlines, and card hover lift.
- Keep form labels visible, focus rings clear, and modal/drawer close buttons keyboard reachable.
- Do not use real payment submission in demos; keep card numbers fake and clearly non-production.

## Demo

See the standalone demo at `ai/demos/evervault-payments-security-ui/index.html`. It demonstrates the gradient hero, glass nav, SDK orbit, payment card stack, PSP burst, secure payment modal, sales drawer, terminal screen, CTA cards, compliance badges, and footer.
