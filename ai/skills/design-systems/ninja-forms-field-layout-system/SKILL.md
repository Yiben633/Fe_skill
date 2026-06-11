---
name: ninja-forms-field-layout-system
description: Build Ninja Forms-style WordPress form interfaces. Use when creating reusable form layouts with standardized field wrappers, label-above, label-below, label-left, label-right, hidden labels, repeater fieldsets, radio and checkbox lists, list-image selections, product fields, rich text toolbar styling, error and description slots, screen-reader helpers, and nf-scaleout loading spinners.
---

# Ninja Forms Field Layout System

## Overview

Use this skill to recreate the form layout system learned from the pasted Ninja Forms CSS. The design is functional rather than decorative: normalized field containers, flexible label positions, full-width inputs, accessible hidden labels, structured descriptions/errors, repeatable fieldsets, list controls, Quill editor surfaces, and a simple scale-out loading spinner.

## Design DNA

- Wrap every field in `.nf-field-container` and `.field-wrap`.
- Split each field into `.nf-field-label`, `.nf-field-description`, `.nf-field-element`, and optional `.nf-after-field`.
- Use flex `order` to reposition labels without changing markup.
- Make text inputs, textareas, selects, Pikaday containers, and rich text editors fill the available width.
- Keep checkbox/radio inputs auto-width, aligned beside labels, and list items reset to no bullets.
- Hide labels accessibly with `.label-hidden`, not by removing the label.
- Use `.nf-sr-only` for screen-reader-only helper text.
- Repeater controls use fieldsets with a small red remove button floated to the right.
- Loading states use `.nf-loading-spinner` and `nf-scaleout`.

## Base Structure

```html
<form class="ninja-forms-form-wrap label-above">
  <div class="nf-field-container textbox-container">
    <div class="field-wrap textbox-wrap">
      <div class="nf-field-label">
        <label for="name">Name</label>
      </div>
      <div class="nf-field-description">
        <p>Use a short helpful description when needed.</p>
      </div>
      <div class="nf-field-element">
        <input id="name" type="text" placeholder="Jane Doe">
      </div>
      <div class="nf-after-field">
        <span class="nf-error-msg">This field is required.</span>
      </div>
    </div>
  </div>
</form>
```

```css
.ninja-forms-form-wrap *,
.ninja-forms-form-wrap *::after,
.ninja-forms-form-wrap *::before {
  box-sizing: border-box;
}

.nf-response-msg {
  display: none;
}

.nf-field-container,
#ninja_forms_required_items {
  clear: both;
  position: relative;
  margin-bottom: 25px;
}

.nf-field-container::after,
#ninja_forms_required_items::after {
  clear: both;
  content: "";
  display: block;
}

.field-wrap {
  display: flex;
}

.field-wrap > label,
.nf-field-label label,
.nf-field-label .nf-label-span {
  display: block;
  margin: 0;
  padding: 0;
  font-weight: 700;
}

.field-wrap > div input,
.field-wrap textarea,
.field-wrap select,
.field-wrap .pikaday__container,
.field-wrap .pikaday__display {
  width: 100%;
}

.field-wrap > div input[type="checkbox"],
.field-wrap > div input[type="radio"] {
  width: auto;
}

.nf-field-label {
  order: 5;
}

.nf-field-description {
  width: 100%;
  order: 10;
}

.nf-field-element {
  position: relative;
  order: 15;
}

.nf-field-description p:last-child {
  margin: 0;
}
```

## Label Positions

Use the same markup and change only the form or section wrapper class.

```css
.label-above .field-wrap,
.label-below .field-wrap {
  flex-flow: wrap;
  flex-direction: column;
}

.label-above .nf-field-label {
  margin-bottom: 10px;
}

.label-above .nf-field-element,
.label-below .nf-field-element {
  width: 100%;
  margin: 0;
}

.label-below .nf-field-label {
  order: 15;
  margin-top: 10px;
}

.label-below .nf-field-element {
  order: 5;
}

.label-hidden .field-wrap {
  flex-wrap: wrap;
}

.label-hidden .nf-field-label {
  width: 100%;
  height: 0;
  margin: 0 !important;
  visibility: hidden;
}

.label-hidden .nf-field-description {
  width: 100%;
  order: 20;
}

.label-hidden .nf-field-element {
  width: 100%;
}

.label-left .field-wrap,
.label-right .field-wrap {
  flex-direction: row;
  flex-wrap: wrap;
}

.label-left .nf-field-label,
.label-right .nf-field-label {
  display: flex;
  align-items: center;
  width: 35%;
}

.label-left .nf-field-label {
  order: 5;
  padding-right: 2%;
  text-align: right;
}

.label-left .nf-field-element {
  order: 10;
  display: inline-block;
  width: 65%;
}

.label-left .nf-field-description,
.label-left .nf-after-field {
  margin-left: 35%;
}

.label-right .nf-field-element {
  order: 5;
  display: inline-block;
  width: 65%;
}

.label-right .nf-field-label {
  order: 10;
  padding-left: 2%;
}

.label-right .nf-field-description {
  order: 15;
  margin-right: 35%;
}
```

For textarea, radio, and checkbox groups in left/right layouts, align labels to the top:

```css
.label-left .textarea-wrap .nf-field-label,
.label-left .listradio-wrap .nf-field-label,
.label-left .listcheckbox-wrap .nf-field-label,
.label-right .textarea-wrap .nf-field-label,
.label-right .listradio-wrap .nf-field-label,
.label-right .listcheckbox-wrap .nf-field-label {
  align-items: flex-start;
}
```

## Lists And Choice Fields

```css
.list-radio-wrap .nf-field-element ul,
.list-radio-wrap .nf-field-element li,
.list-checkbox-wrap .nf-field-element ul,
.list-checkbox-wrap .nf-field-element li,
.list-image-wrap .nf-field-element ul,
.list-image-wrap .nf-field-element li {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.list-radio-wrap .nf-field-element li,
.list-checkbox-wrap .nf-field-element li,
.list-image-wrap .nf-field-element li {
  margin: 0 0 5px !important;
  padding-left: 10px;
  text-indent: initial !important;
}

.list-radio-wrap .nf-field-element li input,
.list-checkbox-wrap .nf-field-element li input,
.list-image-wrap .nf-field-element li input {
  float: left;
  width: auto !important;
  margin-top: .25em;
  margin-right: 5px;
}

.list-radio-wrap .nf-field-element li label,
.list-checkbox-wrap .nf-field-element li label,
.list-image-wrap .nf-field-element li label {
  display: block;
  width: auto;
  margin-left: 1.5em;
}

.listimage-wrap li {
  display: inline-grid;
  width: 100%;
  height: 100%;
}

.listimage-wrap li label {
  padding: 5px;
  border: 2px solid transparent;
}

.listimage-wrap li label.nf-checked-label {
  border-color: #007acc;
  transition: all .5s;
}
```

## Repeaters

```html
<div class="repeater-container">
  <div class="nf-repeater-fieldsets">
    <fieldset>
      <legend>Project contact</legend>
      <button class="nf-remove-fieldset" type="button" aria-label="Remove fieldset">x</button>
      <!-- fields -->
    </fieldset>
  </div>
</div>
```

```css
.nf-repeater-fieldsets fieldset {
  margin-bottom: 1em;
}

.nf-remove-fieldset {
  float: right;
  margin-top: -1em;
  padding: .1em .4em;
  color: red;
  font-size: 1.5em;
  background-color: transparent;
  border: thin solid red;
}

.repeater-container .nf-field-description {
  margin-top: .5em;
}

.repeater-container .nf-field-description p {
  font-size: 120%;
}
```

## Rich Text Editor Surface

Use this for Quill-like front-end form editors:

```css
.nf-form-wrap .ql-toolbar.ql-snow {
  padding: 8px 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}

.nf-form-wrap .ql-toolbar.ql-snow::after {
  clear: both;
  content: "";
  display: block;
}

.nf-form-wrap .ql-container.ql-snow {
  border: 1px solid #ccc;
  border-top: 0;
}

.nf-form-wrap .ql-editor {
  min-height: 150px;
  background: #fff;
}

.nf-form-wrap .ql-toolbar button {
  min-width: 28px;
  min-height: 28px;
  width: auto;
  height: auto;
  margin-right: 2px;
  padding: 4px;
  color: #444;
  background: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.nf-form-wrap .ql-toolbar button:hover,
.nf-form-wrap .ql-toolbar button.ql-active {
  background: #e6e6e6;
  border-color: #adadad;
}
```

## Spinner And Accessibility

```css
.nf-loading-spinner {
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: rgba(208, 208, 208, .5);
  border-radius: 100%;
  animation: nf-scaleout 1s infinite ease-in-out;
}

@keyframes nf-scaleout {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.nf-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  border: 0;
  opacity: 0;
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .nf-loading-spinner {
    animation: none;
  }
}
```

## Implementation Checklist

- Keep Ninja Forms class names intact when styling real plugin output.
- Flatten nested SCSS from pasted snippets into valid browser CSS.
- Do not set all inputs to `width: 100%`; exclude checkbox, radio, submit, button, and product quantity inputs.
- Preserve `.nf-after-field` for errors and `.nf-field-description` for helper text.
- In left/right layouts, collapse to label-above on narrow screens.
- Include focus states for inputs, toolbar buttons, repeater remove controls, and submit buttons.
- Use `.nf-loading-spinner` for inline loading and a wrapper overlay only when blocking the whole form.
