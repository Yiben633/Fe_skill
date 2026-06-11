---
name: study4-test-library
description: Build STUDY4-style education and exam-library interfaces. Use when creating Vietnamese learning platform pages, online test libraries, exam card grids, course/test listing pages, category pill filters, right sidebar ad/resource banners, fixed utility elevators, pagination, and dense but friendly study-resource layouts inspired by STUDY4.
---

# Study4 Test Library

Use this skill to recreate the design language learned from the pasted STUDY4 exam library HTML. The interface is practical, content-first, and study-platform oriented: white navigation, light gray page header, rounded blue category pills, compact exam cards, right resource sidebar, pagination, and a multi-column footer.

## Design DNA

- Keep the page clean and utilitarian, with high information density.
- Use a centered container around 1120-1180px.
- Use a white sticky top nav with a compact logo, plain text links, and a rounded primary login button.
- Use a light gray content header for the page title and exam-category pills.
- Use a 9/3 main/sidebar split on desktop; stack sidebar below content on mobile.
- Use blue as the main action color, with neutral gray backgrounds and borders.
- Keep cards white, lightly bordered, and scan-friendly rather than decorative.

## Layout Recipe

1. Top navigation: logo left, links right, primary login/account CTA.
2. Header band: page title, short supporting text if needed, and category pills.
3. Content body: main grid of test cards plus a right sidebar of banners/resources.
4. Card grid: 4 columns on wide screens, 2 on tablet/mobile, 1 on narrow screens if titles are long.
5. Pagination: centered, compact page buttons after the grid.
6. Footer: logo/socials plus several link columns and legal/disclaimer text.
7. Optional elevator: fixed utility stack on the right with dictionary/support/back-to-top actions.

## Visual Tokens

- Primary blue: `#3559e0` or similar.
- Primary hover: `#2848bf`.
- Text: `#20242a`.
- Muted text: `#6b7280`.
- Page background: `#f5f6f8`.
- Card/background white: `#ffffff`.
- Border: `#e2e6ef`.
- Tag background: `#eef3ff`.
- Radius: 6-10px; keep cards around 8px.
- Shadow: very light, only on hover or sticky nav.

## Exam Card Pattern

- Title first, 2-3 lines max.
- Metadata row with time, attempts, comments, or question count.
- Secondary line for sections/questions.
- 1-3 small tags such as IELTS Academic, Reading, Listening, TOEIC.
- Full-width outline primary action, usually "Chi tiet" or "Lam bai".
- Hover may lift the card by 2px and darken the border; never resize card content.

## Filter And Pagination

- Use pill filters for exam families and levels.
- Active pill is filled blue; inactive pills are white with subtle border.
- Wrap pills across lines; do not hide categories in a carousel unless space is extremely constrained.
- Pagination uses compact square/rounded buttons with clear active state.
- Preserve filter and page state in URL when building a real app.

## Sidebar And Utility Layer

- Sidebar banners are rectangular, image-like resource blocks with clear CTA text.
- Keep sidebar sticky only if it does not overlap footer or mobile content.
- Utility elevator is a small fixed vertical stack on the right; hide or collapse on mobile.
- Dictionary/support actions should look secondary and not compete with primary test actions.

## Accessibility And QA

- Use semantic `nav`, `main`, `aside`, and footer landmarks.
- Keep card links and nested buttons from conflicting; prefer one main click target.
- Provide focus-visible states for nav links, pills, cards, and pagination.
- Ensure Vietnamese text wraps cleanly and buttons do not overflow.
- Test 360px mobile, tablet, desktop, long titles, empty results, and many categories.
