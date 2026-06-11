---
name: dropdown
description: Hướng dẫn frontend cho dropdown menu, menu button, select-like dropdown, action menu, overflow menu và anchored option list. Dùng khi cần hiển thị danh sách lựa chọn hoặc hành động ngắn gắn với một trigger.
---

# Dropdown

Dropdown phải nhanh, rõ và dự đoán được. Người dùng cần hiểu trigger mở gì và item nào là hành động, item nào là lựa chọn.

## Khi Dùng

- Overflow actions như edit, duplicate, delete.
- Chọn một option ngắn.
- Sort/filter menu.
- Account/workspace switcher nhỏ.
- Menu phụ trong toolbar hoặc card.

## Cấu Trúc

- Trigger có label hoặc icon quen thuộc.
- Item text ngắn, tự đủ nghĩa.
- Separator chỉ dùng khi nhóm thật sự khác nhau.
- Destructive action đặt tách nhóm và có màu/state rõ.
- Selected item có checkmark hoặc active state.

## Behavior

- Mở bằng click và keyboard.
- Đóng khi escape, outside click hoặc chọn item.
- Arrow keys điều hướng item.
- Placement tránh tràn viewport.
- Không để menu bị cắt bởi container `overflow: hidden`.

## Accessibility

- Dùng menu semantics khi là action menu.
- Dùng listbox/select semantics khi là lựa chọn.
- Trigger có `aria-expanded`.
- Item disabled không focus hoặc có behavior rõ theo pattern.

## Checklist

- Menu không quá dài; nếu dài, cân nhắc combobox/search.
- Hit target đủ lớn.
- Destructive action khó click nhầm.
- Focus visible rõ.
- Mobile có fallback tốt nếu menu nhiều item.
