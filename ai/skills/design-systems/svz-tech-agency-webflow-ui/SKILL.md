---
name: svz-tech-agency-webflow-ui
description: Build SVZ-inspired Webflow agency websites for AI, cybersecurity, defense-tech, government, and enterprise teams. Use when creating tech branding agency homepages, Webflow portfolio sites, dark editorial agency landing pages, KMR Waldenburg/Dirtyline/Editorial New typography systems, red-accent brand strategy pages, animated preloader/Lenis/GSAP-style interactions, solution rows, brand challenge sections, case-study media rails, testimonial proof, and work-with-us contact footers.
---

# SVZ Tech Agency Webflow UI

Use this skill to recreate the design language learned from the pasted SVZ Webflow site. The style is a strategic design agency interface for technical companies: black and off-white surfaces, sharp red accents, large editorial type, cinematic Webflow motion, structured service proof, and strong portfolio storytelling.

## Design DNA

- Position the site as an embedded design and development partner for complex tech teams.
- Use a dark base with off-white typography and a high-signal red accent.
- Mix sober agency typography with expressive display treatments: technical sans, editorial serif, and one noisy/signature accent font.
- Make the first viewport feel cinematic: preloader, large headline, subtle motion, and a service sentence with concrete sectors.
- Use Webflow-like class naming and reusable section blocks: navbar, hero, solution rows, brand challenge, work grid, testimonials, footer.
- Favor large type and generous section spacing over decorative card clutter.
- Use motion as a reveal system: split line text, translate-y entrances, scramble labels, pinned rows, and image/media rails.
- Include proof: client sectors, review snippets, process steps, project outcomes, and "since 2013" credibility.

## Core Tokens

```css
:root {
  --svz-black: #080808;
  --svz-dark: #0d0d0d;
  --svz-ink-100: #171617;
  --svz-ink-200: #373535;
  --svz-paper: #f3efef;
  --svz-paper-soft: rgba(243, 239, 239, .72);
  --svz-border-dark: rgba(255, 255, 255, .1);
  --svz-border-light: rgba(13, 13, 13, .1);
  --svz-red: #fe1e34;
  --svz-red-dark: #bc2c20;
  --svz-grey: #777373;
  --svz-max: 92rem;
  --svz-gutter: clamp(1rem, 4vw, 4rem);
  --font-sans: "Kmr Waldenburg", Arial, sans-serif;
  --font-heavy: "Kmr Waldenburg Schwer", Arial Black, sans-serif;
  --font-editorial: Editorialnew, Georgia, serif;
  --font-script: "Dirtyline 36 Daysoftype 2022", cursive;
}
```

Use local/system fallbacks in demos. Load custom fonts only when available in the project.

## Page Structure

1. Preloader: black full-screen layer, red progress line, small wordmark or Lottie placeholder.
2. Navbar: fixed or sticky, minimal links, "Work with us" CTA.
3. Hero: oversized headline with mixed sans/editorial/script spans and sector pills.
4. Solution rows: alternating rows for Branding, Webflow, AI Systems, Digital Strategy.
5. Brand challenge section: light/off-white band with dark text and red callouts.
6. Work/media rail: horizontal or grid portfolio cards with image-like panels.
7. Testimonials: dense quotes with roles and logos.
8. Footer: oversized contact line, email, social links, and red accent mark.

## Hero Pattern

Use a high-contrast first viewport.

```html
<section class="section_hero">
  <p class="eyebrow">Since 2013</p>
  <h1 class="hero_heading">
    Branding, Webflow <span class="editorial">& AI systems</span>
    for technical teams.
  </h1>
  <div class="hero_pills">
    <span>AI</span><span>Cybersecurity</span><span>Defense-tech</span>
  </div>
</section>
```

```css
.section_hero {
  min-height: 100dvh;
  display: grid;
  align-content: end;
  padding: 8rem var(--svz-gutter) 4rem;
  background: var(--svz-dark);
  color: var(--svz-paper);
}

.hero_heading {
  max-width: 12ch;
  font-family: var(--font-heavy);
  font-size: clamp(4rem, 13vw, 15rem);
  line-height: .82;
  letter-spacing: -.07em;
}

.hero_heading .editorial {
  font-family: var(--font-editorial);
  font-weight: 300;
  letter-spacing: -.04em;
}
```

## Navbar Pattern

Keep navigation minimal and agency-like:

- Left wordmark.
- Center links on desktop.
- Right CTA and mobile menu button.
- Use active link detection for current section.
- On mobile, use a full-screen black menu with large stacked links and contact details.

## Solution Rows

Use solution rows as large interactive service blocks.

```css
.solution-row {
  display: grid;
  grid-template-columns: .65fr 1.35fr auto;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid var(--svz-border-dark);
}

.solution-row h3 {
  font-size: clamp(2.5rem, 7vw, 8rem);
  line-height: .9;
  letter-spacing: -.055em;
}
```

Hover can fill a row with red or reveal a media preview. Do not resize the row on hover.

## Brand Challenge Section

Use a light band to contrast the dark hero. It should feel analytical, not decorative.

- Off-white background.
- Black/dark text.
- Red fill blocks, red underline, or red counter labels.
- Grid of challenge/response cards.
- Include a large editorial pull quote or "gap between technology and artistry" statement.

## Work And Media Rail

Use a portfolio rail with image panels that can be abstract gradients when no real assets exist.

- Cards are tall and cinematic.
- Use `object-fit: cover` for real media.
- Put metadata outside or at the bottom edge.
- Use CSS `scroll-snap-type: x mandatory` for horizontal rails.
- Keep images inspectable; avoid heavy blur over the actual work.

## Motion Guidelines

Use motion like Webflow/GSAP, but keep it safe:

- Preloader exits with opacity/translate.
- Split heading lines reveal with `translateY(100%)` to `0`.
- Section rows reveal on scroll via IntersectionObserver.
- Scramble small labels only; do not scramble long body copy.
- Respect `prefers-reduced-motion`.
- If using Lenis/GSAP in a real app, do not make navigation depend on JS-only animations.

## QA Checklist

- Dark and light sections maintain strong contrast.
- Big display text fits mobile without overlap.
- Preloader can be skipped by reduced motion and does not trap focus.
- Navbar mobile menu is keyboard reachable and closes on Escape.
- Media rail is usable without custom scroll libraries.
- Service rows do not resize on hover.
- The skill evokes SVZ's strategic tech-agency feel without copying exact client assets.
