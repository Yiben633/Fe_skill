---
name: popover
description: Hướng dẫn frontend cho popover, anchored panel, rich tooltip, mini card, date picker popup, profile preview và floating content panel. Dùng khi cần hiển thị nội dung giàu hơn tooltip nhưng nhẹ hơn modal.
---

# Popover

Popover là panel nổi gắn với một trigger. Nó nên giúp hoàn thành tác vụ nhỏ mà không rời ngữ cảnh.

## Khi Dùng

- Profile preview hoặc quick info.
- Date picker, color picker, emoji picker.
- Mini form hoặc quick setting.
- Rich explanation có link phụ.
- Action panel nhỏ gắn với một item.

## Nội Dung

- Title ngắn nếu nội dung cần định danh.
- Body cô đọng, không quá dài.
- Action phụ vừa phải.
- Không nhồi flow nhiều bước vào popover.
- Dùng modal/drawer nếu cần focus sâu hoặc validation phức tạp.

## Behavior

- Mở bằng click cho nội dung tương tác.
- Hover popover chỉ dùng cho preview không critical.
- Đóng khi escape, outside click hoặc chọn action.
- Placement tự đổi khi gần mép viewport.
- Giữ focus hợp lý trong popover có control.

## Accessibility

- Trigger có `aria-expanded` nếu popover persistent.
- Panel có label nếu chứa control.
- Keyboard user mở, dùng và đóng được.
- Không tự đóng khi user đang tương tác bên trong.

## Checklist

- Popover không che thông tin cần so sánh.
- Width có giới hạn và responsive.
- Nội dung dài có chiến lược scroll hoặc chuyển sang drawer/modal.
- Z-index không xung đột với navbar/modal.
- Reduced motion path có sẵn.
