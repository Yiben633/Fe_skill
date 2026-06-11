---
name: edh-retro-computer-portfolio-ui
description: Build Ed Hinrichsen-style retro computer portfolio interfaces. Use when creating personal developer/designer portfolios, WebGL or 3D hero pages, Commodore PET-inspired computer scenes, pixel-font navigation overlays, cream-and-charcoal retro pages, project case-study timelines, dashed skill tags, chunky offset shadows, loading boot screens, collapsible project details, and playful old-computer UI systems.
---

# EDH Retro Computer Portfolio UI

Use this skill to recreate the design language learned from the Ed Hinrichsen personal website source. The style combines a fixed interactive 3D/WebGL hero with a long retro document page: cream background, charcoal pixel headings, chunky button shadows, dashed borders, monospaced/pixel type, and project writeups with skill chips and media blocks.

## Design DNA

- Make the first viewport feel like an interactive retro computer or terminal.
- Use a warm cream page background and charcoal primary color.
- Use pixel display type for headings, menu links, loading states, and labels.
- Use a softer rounded sans or casual UI font for paragraphs and buttons.
- Keep content centered in narrow reading columns around `680px`.
- Use project sections separated by dashed horizontal rules.
- Style skill tags as dashed outline chips with offset shadows.
- Give buttons chunky offset shadows and tactile hover/active transforms.
- Use a fixed nav/menu layer that expands into a full-screen overlay.
- Put a backup hero behind any canvas/WebGL layer so the page still reads without 3D.

## Visual Tokens

```css
:root {
  --edh-cream: #f6d4b1;
  --edh-cream-soft: #faebd7;
  --edh-charcoal: #525252;
  --edh-dark: #040d21;
  --edh-shadow: rgba(82, 82, 82, .25);
  --edh-strong-shadow: rgba(0, 0, 0, .75);
  --edh-max-text: 680px;
  --edh-max-media: 1200px;
}
```

## Typography

- Pixel display: `Public Pixel`, `Press Start 2P`, or any square bitmap font.
- Body/UI: `Chill`, `Space Grotesk`, `Trebuchet MS`, or a friendly sans fallback.
- Use pixel type sparingly for headings and menus because it becomes dense quickly.
- Keep body copy around `18px` with `line-height: 1.5`.

```css
body {
  background: var(--edh-cream);
  color: var(--edh-charcoal);
  font-family: Chill, "Trebuchet MS", system-ui, sans-serif;
  font-size: 18px;
}

h1,
h2,
h3,
.menu-body {
  font-family: "Public Pixel", "Press Start 2P", monospace;
}
```

## Layout Recipe

1. Fixed hero layer: place `.webgl` or a visual simulation fixed across the viewport.
2. Hero backup: center a compact intro with `Hi there`, huge name, and role list behind the visual layer.
3. Fixed menu: top-left hamburger plus social buttons, hidden until scroll state if needed.
4. Menu overlay: full-screen charcoal background, cream pixel links, sliding from left with opacity.
5. Main content: start after a tall hero spacer, often `margin-top: 140-200vh` if a WebGL scene owns the opening.
6. Sections: centered title label, paragraphs, skill chips, media blocks, dashed separators.
7. Project entries: title, year, skill list, description, optional collapsible details, image/video block.
8. Footer: narrow centered stack, small text, same cream/charcoal palette.

## Component Patterns

### Pixel Heading Label

```html
<h1>Projects</h1>
```

```css
h1 {
  display: inline-block;
  color: var(--edh-cream);
  background: var(--edh-charcoal);
  font-family: "Public Pixel", monospace;
  font-size: 2em;
  padding: 4px 16px 8px;
  margin: 0 auto .3em;
}
```

### Chunky Button

```html
<button class="btn" type="button">more...</button>
```

```css
.btn {
  display: inline-flex;
  gap: .25rem;
  padding: 4px 24px;
  border: 1px solid var(--edh-cream);
  background: var(--edh-charcoal);
  color: var(--edh-cream);
  box-shadow: 6px 6px var(--edh-shadow);
  cursor: pointer;
  transition: transform .3s, box-shadow .3s;
}

.btn:hover {
  transform: scale(1.1);
  box-shadow: 8px 8px 6px var(--edh-shadow);
}

.btn:active {
  transform: scale(.95);
  box-shadow: 4px 4px rgba(82, 82, 82, .4);
}
```

### Skill Chips

```html
<ul class="skills">
  <li>TypeScript</li>
  <li>WebGL</li>
  <li>UI/UX</li>
</ul>
```

```css
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: clamp(0px, 95vw, var(--edh-max-text));
  margin: auto;
  padding: 16px;
  list-style: none;
}

.skills li {
  padding: 4px 8px;
  border: 1px dashed var(--edh-charcoal);
  box-shadow: 1px 1px var(--edh-cream), 4px 4px var(--edh-shadow);
}
```

### Collapsible Details

```html
<button class="collapse-btn btn" data-collapsed="true" type="button">more...</button>
<div class="collapse-body">
  <p>Extra case-study details.</p>
</div>
```

```css
.collapse-btn[data-collapsed="true"] + .collapse-body {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity .3s, max-height .4s;
}

.collapse-btn[data-collapsed="false"] + .collapse-body {
  opacity: 1;
  max-height: 420px;
  transition: opacity .3s .1s, max-height .4s;
}
```

## Motion And Interaction

- Menu overlay slides from left and fades in over `.7s`.
- Buttons scale up on hover and compress on active.
- Loading bars fill from the left with `transform: scaleX()`.
- Collapsible project details fade after the layout height opens.
- WebGL/canvas should sit at `position: fixed` with `z-index: 1`; content sits above at `z-index: 2`.
- Always provide an HTML fallback for the hero text when canvas is unavailable.

## Responsive Rules

- Keep paragraphs and skills at `width: clamp(0px, 95vw, 680px)`.
- Keep media blocks at `width: clamp(0px, 95vw, 1200px)`.
- Use portrait/mobile scroll tips only for narrow or portrait screens.
- On small screens, keep the menu overlay full width and enlarge tap targets.
- Avoid cramped pixel text: reduce heading scale or allow headings to wrap.

## Demo

Reference demo files:

- `ai/demos/edh-retro-computer-portfolio-ui/index.html`
- `ai/demos/edh-retro-computer-portfolio-ui/styles.css`
- `ai/demos/edh-retro-computer-portfolio-ui/script.js`
