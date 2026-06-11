---
name: checkbox-radio
description: Hướng dẫn frontend cho checkbox, radio, checkbox group, radio group, selection card, consent checkbox và multiple/single choice controls. Dùng khi cần lựa chọn boolean, nhiều lựa chọn hoặc một lựa chọn trong nhóm.
---

# Checkbox Radio

Checkbox và radio nên thể hiện rõ kiểu lựa chọn: nhiều lựa chọn độc lập hay một lựa chọn duy nhất trong nhóm.

## Khi Dùng

- Checkbox: bật/tắt một lựa chọn độc lập.
- Checkbox group: chọn nhiều option.
- Radio group: chọn đúng một option.
- Consent checkbox: xác nhận điều khoản.
- Selection card: option cần mô tả dài hơn.

## Layout

- Label clickable cùng control.
- Group có legend hoặc label nhóm.
- Description phụ nằm gần option.
- Error của group nằm sau nhóm.
- Khoảng cách đủ để tránh click nhầm.

## States

- Checked, unchecked, indeterminate.
- Focus, disabled, error.
- Selected card nếu dùng card option.
- Required group nếu cần chọn.

## Accessibility

- Dùng input native khi có thể.
- Fieldset/legend cho group phức tạp.
- Không chỉ dùng màu để báo selected.
- Keyboard support mặc định phải giữ được.

## Checklist

- Checkbox không bị dùng thay radio.
- Radio group có default hợp lý hoặc rõ là chưa chọn.
- Label đủ nghĩa khi đọc riêng.
- Touch target đủ lớn.
- Error state liên kết đúng group.
