---
name: modal
description: Hướng dẫn frontend cho modal và dialog gồm accessible overlay, focus handling, confirmation dialog, sheet, lightbox, command palette và transition patterns.
---

# Modal

Dùng modal cho tác vụ tập trung và có tính chen ngang.

## Các Loại Modal

- Dialog: tác vụ ngắn cần tập trung hoặc thông tin ngắn.
- Confirm: quyết định phá hủy hoặc không thể đảo ngược.
- Form modal: flow tạo hoặc sửa nhỏ.
- Sheet: side panel hoặc bottom panel thân thiện với mobile.
- Lightbox: xem media kỹ hơn với điều khiển next và previous.
- Command palette: bộ khởi chạy hành động có search.

## Accessibility

- Dùng semantic dialog primitives khi có sẵn.
- Đưa focus vào modal khi mở.
- Trap focus khi modal đang mở.
- Khôi phục focus về trigger khi đóng.
- Đóng bằng escape trừ khi action đang blocking.
- Gắn label cho modal bằng title hiển thị hoặc `aria-label`.

## Transitions

- Overlay: fade 120-220ms.
- Dialog: fade kèm scale hoặc translate 160-260ms.
- Sheet: translate từ cạnh 220-340ms.
- Lightbox media: fade với stage size ổn định.

## Checklist

- Background không thể bị click nhầm trong destructive flows.
- Content scroll bên trong modal khi cần.
- Footer actions vẫn dễ chạm tới.
- Layout mobile không vượt quá viewport height.
- Có đường xử lý reduced motion.
