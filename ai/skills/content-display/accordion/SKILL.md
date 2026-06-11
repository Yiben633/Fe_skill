---
name: accordion
description: Hướng dẫn frontend cho accordion, disclosure, FAQ, expandable sections, nested content, settings groups và progressive disclosure. Dùng khi cần cho phép người dùng mở/đóng từng phần nội dung.
---

# Accordion

Accordion giúp giảm độ dài giao diện khi nội dung có thể đọc theo từng nhóm. Nó phải rõ trigger, rõ state và không giấu thông tin quan trọng quá sâu.

## Khi Dùng

- FAQ hoặc help content.
- Settings chia nhóm.
- Filter nâng cao.
- Mobile layout cần thu gọn section.
- Nội dung dài nhưng không cần đọc cùng lúc.

## Behavior

- Trigger toàn hàng hoặc vùng rõ ràng.
- Icon chevron xoay theo state.
- Có thể cho phép mở nhiều item hoặc chỉ một item, tùy ngữ cảnh.
- Giữ state khi user quay lại nếu nội dung quan trọng.
- Animate height vừa phải, không gây layout jump quá mạnh.

## Accessibility

- Trigger là button thật.
- Dùng `aria-expanded` và `aria-controls`.
- Panel có label liên quan tới trigger.
- Keyboard tab order tự nhiên.
- Không để nội dung focusable trong panel đang đóng.

## Content

- Heading ngắn và mô tả đúng nội dung bên trong.
- Không đặt action quan trọng trong accordion quá khó thấy nếu user cần thường xuyên.
- Nested accordion chỉ dùng khi thật cần.
- Empty panel nên tránh, hoặc giải thích rõ.

## Checklist

- State open/closed nhìn rõ.
- Animation tôn trọng `prefers-reduced-motion`.
- Content dài scroll hoặc wrap ổn trên mobile.
- Trigger đủ lớn để chạm.
- Accordion vẫn dùng được khi JavaScript hydrate chậm.
