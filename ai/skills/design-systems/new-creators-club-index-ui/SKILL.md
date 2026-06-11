---
name: new-creators-club-index-ui
description: Build NEW Creators Club-style creator index interfaces. Use when creating minimal Japanese creative club pages, work/member archive grids, light/dark theme toggles, top news ticker headers, oval NEW logos, monitor/canvas strips, all/works/member filter bars, collapsible Search System panels, capsule tag lists, square kana/alphabet character filters, 1400/933 work cards, member cards with top borders, and precise gray border-driven editorial index layouts.
---

# NEW Creators Club Index UI

Use this skill to recreate the design system learned from the NEW Creators Club source. The interface is a restrained creative archive: thin gray borders, black/white theme inversion, dense filter controls, capsule tags, character squares, work cards, member cards, and a search/sequencer-like control panel.

## Design DNA

- Make the page feel like a precise creative index, not a marketing homepage.
- Use a mostly monochrome palette with gray border systems and small orange/green signal colors.
- Keep typography compact, medium-weight, and editorial.
- Let the header behave like an instrument panel: news ticker, oval logo, monitor strip, info/social links.
- Put discovery controls before content: `all`, `works`, `member`, then `Search System`.
- Use many small bordered controls instead of large buttons.
- Cards should be sparse: image or member block first, title/name, tags, character squares.

## Core Tokens

```css
:root {
  --color-white: #fff;
  --color-black: #000;
  --color-gray-1: #d2dadb;
  --color-gray-2: #545657;
  --color-gray-3: #4d4d4d;
  --color-gray-4: #b8c1c2;
  --color-orange: #fa6f33;
  --color-orange-shadow: rgba(250,111,51,.3);
  --color-green: #02df40;
  --color-green-shadow: rgba(2,223,64,.3);
  --color-bg: var(--color-white);
  --color-text: var(--color-black);
  --color-gray-base: var(--color-gray-1);
  --color-image-border: #d2d4d6;
  --font-monument-grotesk: "Monument Grotesk", Arial, sans-serif;
  --font-kana: "Tazugane Gothic", Arial, sans-serif;
}

:root[data-theme="dark"] {
  --color-bg: var(--color-black);
  --color-text: var(--color-white);
  --color-gray-base: var(--color-gray-2);
  --color-image-border: transparent;
}
```

## Typography

- Primary UI: `var(--font-monument-grotesk), "TazuganeGothicStdN-Regular", var(--font-kana), sans-serif`.
- Card title/member name: same family, `font-weight: 500`, compact line-height.
- Use `13px` for metadata, accounts, descriptions, and capsule tags.
- Use `15px` for filter labels, sort headings, and member names.
- Use `18px` for work card titles on desktop, `15px` on mobile.

## Layout Recipe

1. Header top bar: left news ticker labeled `News :`, right square theme toggle.
2. Header body: logo column, flexible monitor/canvas strip, right `info` and social link group.
3. Filter header: radio labels for `all`, `works`, `member`, plus a close/open search button.
4. Search System panel: left mode list (`Katakana`, `Alphabet`, `Tag`, `Year`, `Beat`), right checkbox grid or capsule filter group.
5. Sort row: two-column desktop grid with heading and sort links.
6. Card grid: 2 columns by default when filtered, 3 columns on very wide screens, 1 column on mobile.
7. Work card: image/video area at `aspect-ratio: 1400 / 933`, title, capsule tags, optional character squares.
8. Member card: top border, Japanese/name line, English/name line, description/accounts, character squares.

## Tag Capsule

```css
.tag-capsule {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.tag-capsule li {
  display: flex;
  align-items: center;
  height: 22px;
  padding: 1px 10px 0;
  border: 1px solid var(--color-gray-base);
  border-radius: 100vh;
  font-size: 13px;
}

[data-theme="dark"] .tag-capsule li {
  border-color: var(--color-white);
}
```

## Character Tag List

```css
.tag-char {
  display: flex;
  gap: 5px;
}

.tag-char span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding-top: 2px;
  border: 1px solid var(--color-gray-base);
  border-radius: 5px;
  font-size: 18px;
}

@media (max-width: 768px) {
  .tag-char[data-not-scale="false"] span {
    width: 36px;
    height: 36px;
  }
}
```

## Work Card

```css
.card-work,
.card-work-image {
  display: block;
  width: 100%;
}

.card-work-image {
  position: relative;
  aspect-ratio: 1400 / 933;
  overflow: hidden;
}

.card-work-image[data-border="true"] {
  border: 1px solid var(--color-image-border);
}

.card-work-title {
  display: block;
  margin-top: 20px;
  font-family: var(--font-monument-grotesk), var(--font-kana), sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
}
```

## Member Card

```css
.card-member {
  display: block;
  width: 100%;
  padding: 20px 0 0;
  border-top: 1px solid var(--color-black);
}

[data-theme="dark"] .card-member {
  border-color: var(--color-gray-base);
}

.card-member-name,
.card-member-description,
.card-member-accounts {
  font-family: var(--font-monument-grotesk), var(--font-kana), sans-serif;
  font-weight: 500;
}
```

## Grid And Filters

- Use `gap: 50px 28px` for card grids.
- Filtered content uses `grid-template-columns: 1fr 1fr`.
- Above `1680px`, use `1fr 1fr 1fr`.
- Below `768px`, use one column and reduce row gap to `30px`.
- Search panel desktop uses a fixed left rail around `240-357px` and flexible right content.
- Mobile search panel keeps compact spacing: `padding: 20px 10px 30px`.

## Motion

- Theme toggle can use a small `.6s` bounce on hover/click.
- News ticker may animate by translating text horizontally or shuffling letters.
- Filter controls should use fast linear transitions around `.1s-.2s`.
- Avoid large decorative motion; the interface should feel systematic and tool-like.

## Demo Files

Static demo:

`ai/demos/new-creators-club-index-ui/index.html`

