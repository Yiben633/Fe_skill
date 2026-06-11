---
name: acctual-small-business-invoicing-ui
description: Build Acctual-style small business invoicing and payment landing pages. Use when creating free invoicing SaaS pages, SMB billing tools, same-day payment experiences, professional invoice builders, card and bank-transfer pricing sections, colorful finance badges, bright Framer-style hero layouts, invoice mockups, payment dashboard cards, digital-number counters, handwritten annotation notes, mono finance metadata, rounded typography, and springy Framer appear animations.
---

# Acctual Small Business Invoicing UI

Use this skill to recreate the design language learned from the Acctual small business invoicing source. The style is bright, friendly, and finance-focused: a pale blue-white page, rounded SaaS navigation, colorful fee badges, invoice and payment dashboard mockups, compact pricing chips, and gentle Framer-like entrance motion.

## Design DNA

- Keep the page useful and trustworthy, with the product promise visible in the first viewport.
- Use a centered content width around `1024px`, with hero text constrained around `720-768px`.
- Use a very light page background, white panels, dark ink text, and saturated finance accents.
- Lead with a rounded pill badge before the headline.
- Show the product through invoice, payment, bank-transfer, card-fee, and payout mockups.
- Make numbers and fees highly scannable: `$0/month`, `2.7% cards`, `1% bank transfers`.
- Use soft motion: elements rise from `translateY(50px)` with a small `rotate(6deg)` settling to zero.
- Keep all cards rounded but not fluffy: 18-28px panels, thin translucent borders, subtle shadows.

## Visual Tokens

```css
:root {
  --acctual-bg: #f7fafc;
  --acctual-surface: #ffffff;
  --acctual-ink: #000000e6;
  --acctual-muted: #666666;
  --acctual-navy: #004370;
  --acctual-soft: #fafafa;
  --acctual-line: #dbe7ef;
  --acctual-blue: #0098f2;
  --acctual-magenta: #f200ca;
  --acctual-purple: #6c56fc;
  --acctual-green: #5d9c06;
  --acctual-red: #ff6363;
  --acctual-dark: #1e1e1e;
  --acctual-radius-sm: 12px;
  --acctual-radius-md: 20px;
  --acctual-radius-lg: 28px;
  --acctual-shadow: 0 24px 80px rgba(0, 67, 112, .12);
}
```

Use translucent accent tints for pills and category cards:

```css
.badge-blue { background: rgba(0, 152, 242, .16); color: #004370; }
.badge-magenta { background: rgba(242, 0, 202, .16); color: #83106f; }
.badge-purple { background: rgba(108, 86, 252, .16); color: #3e31a5; }
.badge-green { background: rgba(93, 156, 6, .16); color: #355d03; }
.badge-red { background: rgba(255, 99, 99, .18); color: #8d2929; }
```

## Typography

- Main UI: `Geist`, `Inter`, or system sans.
- Rounded display: Selecta/Open Runde-like feel for large headings and CTAs.
- Mono metadata: `Fragment Mono`, `SFMono-Regular`, or monospace for invoice IDs, routing details, and small labels.
- Numeric details: Digital Numbers-like font for totals, fees, and counters.
- Handwritten annotations: `Caveat` only for small callouts, never body copy.

```css
body {
  font-family: Geist, Inter, ui-sans-serif, system-ui, sans-serif;
  color: var(--acctual-ink);
  background: var(--acctual-bg);
}

.mono {
  font-family: "Fragment Mono", "SFMono-Regular", Consolas, monospace;
  letter-spacing: .01em;
}

.number {
  font-family: "Digital Numbers", "Fragment Mono", monospace;
  letter-spacing: .02em;
}
```

## Layout Recipe

1. Top navigation: compact chain-link style wordmark, 3-4 plain links, rounded CTA.
2. Hero: top padding around `160-200px` on desktop, centered stack, gap around `48-64px`.
3. Badge: rounded `100px` pill, blue tint, 6px by 12px padding.
4. Headline: 64-88px desktop, balanced wrapping, max width `768px`.
5. Hero actions: primary dark/navy button and secondary outlined button or email field.
6. Product mockup: invoice card plus floating fee chips and payment-status cards.
7. Pricing proof: three cards for `$0/month`, `2.7% cards`, and `1% bank`.
8. Feature grid: colorful finance icons for invoices, cards, bank, clock, global, help.
9. Final CTA: short line such as `Get paid with Acctual`, email/input, dark CTA button.

## Component Patterns

### Pill Badge

```html
<span class="acctual-pill">
  <span class="pill-dot"></span>
  Free invoicing for small business
</span>
```

```css
.acctual-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border-radius: 100px;
  background: rgba(0, 152, 242, .16);
  color: var(--acctual-navy);
  font-size: 14px;
  font-weight: 650;
}

.pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--acctual-blue);
}
```

### Invoice Mockup

```html
<article class="invoice-card reveal">
  <div class="invoice-top">
    <span class="mono">INV-2048</span>
    <span class="status paid">Paid same day</span>
  </div>
  <h3>Web design retainer</h3>
  <div class="invoice-row"><span>Strategy</span><strong>$1,200</strong></div>
  <div class="invoice-row"><span>Implementation</span><strong>$2,400</strong></div>
  <div class="invoice-total"><span>Total</span><strong class="number">$3,600</strong></div>
</article>
```

Use a white surface, `24-28px` radius, soft blue shadow, mono IDs, and numeric totals.

### Fee Cards

```html
<div class="fee-grid">
  <article class="fee-card badge-blue"><strong>$0</strong><span>monthly subscription</span></article>
  <article class="fee-card badge-purple"><strong>2.7%</strong><span>card payments</span></article>
  <article class="fee-card badge-green"><strong>1%</strong><span>bank transfers</span></article>
</div>
```

Keep fees short and large, with muted explanations under them.

## Motion

```css
.reveal {
  opacity: 0;
  transform: translateY(50px) rotate(6deg);
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.22, 1, .36, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) rotate(0);
}
```

Use this motion on hero cards, pricing rows, and dashboard elements. Stagger items with small delays. Disable or simplify for `prefers-reduced-motion`.

## Responsive Rules

- Desktop: use the full `1024px` content rail and a hero mockup grid.
- Tablet under `1100px`: reduce hero type and use two-column feature cards.
- Mobile under `800px`: stack all cards, reduce top hero padding to `120px`, keep CTAs full width, and prevent mockup cards from overflowing.
- Avoid tiny finance text below 12px; invoices must remain readable.

## Demo

Reference demo files:

- `ai/demos/acctual-small-business-invoicing-ui/index.html`
- `ai/demos/acctual-small-business-invoicing-ui/styles.css`
- `ai/demos/acctual-small-business-invoicing-ui/script.js`
