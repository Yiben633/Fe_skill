---
name: drawer
description: Hướng dẫn frontend cho drawer, side panel, slide-over, inspector panel, filter drawer, cart drawer và non-blocking overlay panel. Dùng khi cần mở một panel cạnh màn hình để xem hoặc chỉnh nội dung mà vẫn giữ ngữ cảnh page.
---

# Drawer

Drawer phù hợp khi người dùng cần làm việc phụ bên cạnh nội dung chính. Nó phải rõ là panel tạm thời hay phần shell cố định.

## Khi Dùng

- Filter nâng cao hoặc settings phụ.
- Cart, notification, activity hoặc inspector panel.
- Form tạo/sửa nhanh không cần rời page.
- Detail preview từ table/list.
- Mobile menu hoặc secondary navigation.

## Layout

- Desktop: thường trượt từ phải cho detail/action, từ trái cho navigation.
- Mobile: có thể full-width hoặc chuyển thành bottom sheet.
- Header có title và close button.
- Body scroll độc lập khi nội dung dài.
- Footer action sticky nếu form hoặc flow cần submit.

## Behavior

- Đóng bằng escape, close button và outside click nếu không có destructive state.
- Có thể block outside click khi form có thay đổi chưa lưu.
- Restore focus về trigger sau khi đóng.
- Không làm page nền scroll khi drawer là modal-like overlay.
- Animation translate 220-340ms, tôn trọng `prefers-reduced-motion`.

## Accessibility

- Nếu drawer chặn tương tác nền, dùng dialog semantics và focus trap.
- Nếu drawer không chặn nền, focus management vẫn phải rõ.
- Close button có accessible label.
- Title liên kết với panel bằng label phù hợp.

## Checklist

- Drawer không vượt viewport height.
- Content dài vẫn scroll được.
- Nền không bị click nhầm trong flow quan trọng.
- Mobile layout không bị bó nút footer.
- State unsaved changes được xử lý.
