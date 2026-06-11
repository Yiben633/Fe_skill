---
name: context-menu
description: Hướng dẫn frontend cho context menu, right-click menu, item action menu, command menu theo ngữ cảnh và contextual actions. Dùng khi cần hiện hành động liên quan trực tiếp tới item, vùng chọn hoặc canvas.
---

# Context Menu

Context menu chỉ nên chứa hành động liên quan tới ngữ cảnh hiện tại. Nó là lối tắt, không phải nơi duy nhất chứa action quan trọng.

## Khi Dùng

- File explorer, canvas, table row, card hoặc editor.
- Hành động phụ như duplicate, rename, copy link, delete.
- Selection-based actions.
- Power-user workflow cần thao tác nhanh.

## Behavior

- Mở bằng right click hoặc keyboard shortcut phù hợp.
- Có thể mở bằng overflow button cho touch/mobile.
- Đóng khi chọn item, escape hoặc outside click.
- Position theo pointer nhưng không tràn viewport.
- Menu cập nhật theo item hoặc selection hiện tại.

## Item Rules

- Hành động destructive tách nhóm.
- Disabled item cần lý do nếu dễ gây bối rối.
- Shortcut hiển thị bên phải nếu có.
- Submenu dùng tiết chế.
- Không đặt form phức tạp trong context menu.

## Accessibility

- Có cách mở bằng keyboard.
- Arrow keys điều hướng item.
- Focus được đưa vào menu khi mở.
- Không phụ thuộc hoàn toàn vào right click.

## Checklist

- Mọi action quan trọng có đường truy cập khác.
- Menu không che vùng cần xem.
- Item order ổn định.
- Touch device có fallback.
- Destructive action không nằm sát action phổ biến.
