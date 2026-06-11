---
name: navbar
description: Hướng dẫn frontend cho navigation bar gồm sticky header, trạng thái transparent-to-blur, hamburger menu mobile, active links, dropdowns và responsive navigation behavior.
---

# Navbar

Xây dựng navigation dễ đoán, ổn định khi scroll và khi viewport thay đổi.

## Desktop

- Giữ primary links hiển thị khi số destination ít.
- Dùng active state cho route hoặc vị trí section.
- Làm sticky header đủ gọn để không ăn quá nhiều nội dung.
- Chỉ dùng transparent header khi hero image vẫn dễ đọc bên dưới.
- Thêm blur hoặc solid background sau khi scroll nếu content làm giảm contrast.

## Mobile

- Dùng hamburger button cho navigation dạng collapse.
- Giữ button target ít nhất 40px.
- Chỉ lock body scroll khi full-screen menu đang mở.
- Đóng menu khi route change, escape, outside click hoặc chọn link.
- Giữ focus order và keyboard access.

## States

- Default
- Scrolled
- Menu open
- Active route
- Dropdown open
- Focus visible

## Ghi Chú Implement

- Debounce scroll listener tốn kém hoặc dùng passive listener.
- Ưu tiên CSS `position: sticky` trừ khi thiết kế cần fixed overlay behavior.
- Tập trung giá trị z-index khi project có layer cho modals, drawers và nav.
- Thêm safe area padding cho thiết bị mobile khi cần.
