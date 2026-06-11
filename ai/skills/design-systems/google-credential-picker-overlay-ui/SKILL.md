---
name: google-credential-picker-overlay-ui
description: Build Google credential picker and One Tap style overlays. Use when creating fixed authentication prompts, top-right sign-in iframes, Google Identity Services style credential cards, responsive mobile auth overlays, accessibility announcement regions, borderless iframe shells, high z-index auth prompts, absolute click-target overlays, and focus-reset behavior for embedded login UI.
---

# Google Credential Picker Overlay UI

Use this skill to recreate the design pattern learned from the pasted Google credential picker CSS: a small fixed auth prompt in the top-right corner, borderless embedded frame, mobile full-width fallback, offscreen accessibility announcements, and focus-safe click overlay.

## Design DNA

- Treat the credential picker as an overlay above the site, not part of page layout.
- Use a fixed 391px by 330px container at `top: 20px; right: 20px`.
- Give it a very high `z-index` so it floats above marketing pages, modals, and sticky headers.
- Keep iframe-like children borderless and exactly matched to the container size.
- On very narrow screens, pin the overlay to the viewport width and allow vertical scroll.
- Include an offscreen live announcement region for accessibility.
- Use a full absolute clickable layer for the credential button hit target.
- Remove default focus border on the internal hit layer only when a custom visible focus state exists elsewhere.

## Core CSS

```css
#credential_picker_container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  width: 391px;
  height: 330px;
  border: none;
}

#credential_picker_container .L5Fo6c-PQbLGe {
  width: 391px;
  height: 330px;
  border: none;
}

@media only screen and (max-width: 410px) {
  #credential_picker_container {
    right: 0;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #credential_picker_container .L5Fo6c-PQbLGe {
    width: 100vw;
  }
}

#g_a11y_announcement {
  position: absolute;
  top: auto;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.L5Fo6c-sM5MNb {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  border: 0;
}

.L5Fo6c-bF1uUb {
  position: absolute;
  inset: 0;
  border-radius: 4px;
  cursor: pointer;
}

.L5Fo6c-bF1uUb:focus {
  border: none;
  outline: none;
}
```

## Markup Pattern

```html
<div id="g_a11y_announcement" aria-live="polite"></div>

<div id="credential_picker_container">
  <div class="L5Fo6c-PQbLGe" role="dialog" aria-label="Sign in with Google">
    <div class="L5Fo6c-sM5MNb">
      <button class="L5Fo6c-bF1uUb" type="button" aria-label="Continue as Alex"></button>
      <div class="credential-card">
        <p>Sign in to example.com</p>
        <strong>Continue as Alex</strong>
      </div>
    </div>
  </div>
</div>
```

## Usage Notes

- Keep the real Google iframe isolated. Do not style internal Google-owned iframe contents unless you own the markup.
- Use this pattern for auth prompts, account chooser surfaces, and one-tap sign-in overlays.
- Avoid placing the container inside transformed parents, because `position: fixed` can become scoped by transforms.
- Add enough top/right spacing to avoid overlapping browser extension UI or in-app utility controls.
- On mobile, make the overlay full-width but not full-height unless the picker content requires it.
- If hiding the picker, remove it or set `display: none`; avoid leaving invisible interactive layers active.
- For custom implementations, add a visible focus style on the actual card/button even if the transparent hit layer removes outline.

## Demo Reference

A static reusable demo lives at `ai/demos/google-credential-picker-overlay-ui/`. Open `index.html` directly to inspect the overlay and copy the HTML/CSS/JS patterns.
