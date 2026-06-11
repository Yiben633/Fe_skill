---
name: list
description: Hướng dẫn frontend cho list, list item, dense list, selectable list, action list, menu list, search results list và responsive item layout. Dùng khi cần hiển thị các item theo chiều dọc để scan nhanh.
---

# List

List tốt làm cho nhiều item trở nên dễ scan. Mỗi item cần có hierarchy rõ: thông tin chính, metadata, trạng thái và action.

## Loại List

- Simple list: title và description ngắn.
- Media list: avatar, thumbnail hoặc icon.
- Dense list: dùng cho tool hoặc dashboard.
- Selectable list: checkbox, radio hoặc active item.
- Action list: mỗi item là một lệnh.
- Search results list: title, snippet, metadata, highlight.

## Item Anatomy

- Leading visual nếu tăng nghĩa.
- Primary text rõ nhất.
- Secondary text ngắn và hỗ trợ.
- Metadata hoặc badge.
- Trailing action hoặc status.

## Layout

- Row height ổn định theo density.
- Text wrap có giới hạn.
- Touch target đủ lớn trên mobile.
- Divider dùng tiết chế, không tạo nhiễu.
- Empty và loading state giữ nhịp layout.

## Interaction

- Hover/focus/selected state phân biệt rõ.
- Nested action không xung đột với click toàn item.
- Keyboard navigation hoạt động nếu list là control.
- Multi-select cần bulk action rõ.

## Checklist

- Người dùng scan được item chính nhanh.
- Long text không phá layout.
- Active/selected item rõ nhưng không quá gắt.
- Mobile row không bị quá chật.
- Loading, empty và error state đầy đủ.
