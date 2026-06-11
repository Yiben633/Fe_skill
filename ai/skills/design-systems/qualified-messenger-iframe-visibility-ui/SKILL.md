---
name: qualified-messenger-iframe-visibility-ui
description: Build Qualified-style messenger iframe visibility systems. Use when creating accessible fixed chat/messenger iframes, skip links, zero-size idle frames, maximized desktop chat widgets, mobile full-screen messenger states, full-height sidebar widgets, embedded iframe modes, pointer-events disable states, extreme z-index layering, DOM visibility APIs, :has() stacking fixes, multimodal host overlays, and iframe manager CSS that must survive hostile page/theme styles.
---

# Qualified Messenger Iframe Visibility UI

Use this skill to recreate the iframe visibility and state-management patterns learned from the Qualified messenger CSS. The style is less about decoration and more about resilient widget behavior: accessibility first, fixed iframe placement, defensive `!important` rules, high z-index layers, and predictable desktop/mobile/fullscreen sizing.

## Design DNA

- Treat the messenger as third-party UI injected into unknown websites.
- Scope with stable IDs: `#q-messenger-frame`, `#q-messenger-frame-skip-link`, and `#qualified-multimodal-host`.
- Use `!important` for iframe placement, visibility, dimensions, pointer events, and z-index because host pages often have aggressive global styles.
- Start idle launchers at `height: 0` and `width: 0`, then expand only when a state class is applied.
- Reserve very high z-index values for injected overlays. Keep one value below the absolute max for other emergency layers.
- Use `100dvh` for full-screen mobile states so browser UI changes do not clip the messenger.
- Avoid media-query-only logic for core state; use state classes such as `.qlfd-is-mobile`, `.qlfd-maximized`, `.qlfd-full-screen`, and `.qlfd-embedded`.
- Include an accessible skip link that is visually hidden until focused.
- Use `:has()` only for progressive enhancement stacking fixes; keep the base behavior working without it.

## Tokens

```css
:root {
  --qlfd-z-frame: 2147483642;
  --qlfd-z-fullscreen: 2147483647;
  --qlfd-z-multimodal-when-fullscreen: 2147483646;
  --qlfd-footer-height: var(--qualified-offer-footer-height, 0px);
  --qlfd-desktop-width: 538px;
  --qlfd-sidebar-width: 320px;
  --qlfd-desktop-min-height: 480px;
  --qlfd-desktop-max-height: calc(100dvh - 150px);
  --qlfd-focus-bg: #fafafa;
  --qlfd-focus-text: #122124;
}
```

## Required Markup

```html
<a id="q-messenger-frame-skip-link" href="#after-q-messenger">
  Skip messenger
</a>

<iframe
  id="q-messenger-frame"
  class="qlfd-not-mobile"
  title="Qualified Messenger"
  allow="camera;microphone"
  src="about:blank">
</iframe>

<div
  id="qualified-multimodal-host"
  tabindex="-1"
  style="--qualified-multimodal-host-z-index-when-messenger-full-screen: 2147483646;">
</div>

<span id="after-q-messenger" tabindex="-1"></span>
```

## Skip Link

Use `all: initial` to escape host page typography and link rules. Hide it visually, not semantically, then make it fixed and obvious on focus.

```css
#q-messenger-frame-skip-link {
  all: initial !important;
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  margin: -1px !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

#q-messenger-frame-skip-link:focus {
  all: initial !important;
  position: fixed !important;
  top: 10px !important;
  left: 10px !important;
  z-index: 2147483647 !important;
  background: #fafafa !important;
  color: #122124 !important;
  padding: 1rem !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  outline: 2px solid -webkit-focus-ring-color !important;
  outline-offset: 2px !important;
}
```

## Base Iframe

The iframe is always present and visible to the DOM, but zero-sized until expanded. Keep `content-visibility: visible` so visibility APIs and measurement logic do not treat it as skipped.

```css
#q-messenger-frame {
  position: fixed !important;
  z-index: 2147483642 !important;
  display: block !important;
  visibility: visible !important;
  content-visibility: visible !important;
  opacity: 1 !important;
  top: auto !important;
  left: auto !important;
  bottom: calc(0px + var(--qualified-offer-footer-height, 0px)) !important;
  right: 0 !important;
  height: 0 !important;
  width: 0 !important;
  overflow: hidden !important;
  background-color: transparent !important;
  border: 0 !important;
  padding: 0 !important;
}
```

## State Classes

Apply one or more of these classes from your iframe manager.

```css
#q-messenger-frame.qlfd-maximized,
#q-messenger-frame.maximized {
  max-height: calc(100dvh - 150px);
  min-height: 480px;
  width: 538px !important;
}

#q-messenger-frame.qlfd-maximized.qlfd-is-mobile,
#q-messenger-frame.maximized.qlfd-is-mobile {
  height: 100% !important;
  width: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
}

#q-messenger-frame.qlfd-full-height {
  height: 100% !important;
  width: 320px !important;
  min-height: 100% !important;
  max-height: 100% !important;
}

#q-messenger-frame.qlfd-disable-pointer-events {
  pointer-events: none !important;
}

#q-messenger-frame.qlfd-embedded {
  position: relative !important;
  height: 100% !important;
  width: 100% !important;
  min-height: 100% !important;
  max-height: 100% !important;
  z-index: 0 !important;
  pointer-events: all !important;
}

#q-messenger-frame.qlfd-full-screen {
  position: fixed !important;
  height: 100dvh !important;
  width: 100% !important;
  max-height: 100dvh;
  z-index: 2147483647 !important;
}

#q-messenger-frame.qlfd-not-full-screen {
  transition:
    background-color 300ms,
    height 0s 300ms,
    width 0s 300ms !important;
}
```

## Stacking Fixes

Use `:has()` for advanced host-page cases. This pattern lowers unexpected parent stacking when an embedded iframe goes fullscreen and raises the multimodal host just below the fullscreen iframe.

```css
*:has(#q-messenger-frame.qlfd-full-screen.qlfd-embedded) {
  z-index: unset !important;
}

:root:has(#q-messenger-frame.qlfd-full-screen) > #qualified-multimodal-host {
  z-index: var(--qualified-multimodal-host-z-index-when-messenger-full-screen) !important;
}
```

## Demo Manager

Use a small state manager to avoid class drift.

```js
const frame = document.querySelector("#q-messenger-frame");

function setMessengerState(state) {
  frame.className = "";
  frame.classList.add("qlfd-not-mobile");

  if (state === "maximized") frame.classList.add("qlfd-maximized");
  if (state === "mobile") frame.classList.add("qlfd-maximized", "qlfd-is-mobile");
  if (state === "fullHeight") frame.classList.add("qlfd-full-height");
  if (state === "fullscreen") frame.classList.add("qlfd-full-screen");
  if (state === "embedded") frame.classList.add("qlfd-embedded");
  if (state === "disabled") frame.classList.add("qlfd-maximized", "qlfd-disable-pointer-events");
}
```

## QA Checklist

- Tab key reveals the skip link and it sits above the iframe.
- Idle state is visible to DOM APIs but has `height: 0` and `width: 0`.
- Maximized desktop state uses width `538px`, min height `480px`, and max height `calc(100dvh - 150px)`.
- Mobile maximized state fills the viewport through classes, not media queries alone.
- Fullscreen state uses `100dvh` and the highest z-index.
- Embedded state returns to normal document flow and resets z-index to `0`.
- Pointer-events disabled state lets clicks pass through when the launcher is inactive or hidden.
- `:has()` stacking fixes are progressive enhancement and do not break browsers without support.
