---
name: split-layout
description: Hướng dẫn frontend cho split layout, two-column layout, side-by-side content, media/text split, app pane layout và responsive split screen. Dùng khi cần đặt hai vùng nội dung song song với vai trò rõ.
---

# Split Layout

Split layout tốt khi hai vùng nội dung bổ sung cho nhau. Một bên thường là nội dung chính, bên còn lại là media, form, preview hoặc context.

## Khi Dùng

- Text và media side-by-side.
- Form và preview.
- Master-detail layout.
- Auth page có branding panel.
- Editor và live preview.

## Layout Rules

- Xác định vùng chính trước.
- Tỉ lệ phổ biến: 50/50, 60/40, 70/30.
- Giữ gap đủ để hai vùng không dính nhau.
- Đặt breakpoint chuyển sang stack khi content bị bó.
- Sticky side panel chỉ dùng khi giúp thao tác.

## Responsive

- Mobile stack theo thứ tự task.
- Media phụ không đẩy form/nội dung chính xuống quá sâu.
- Sidebar/detail có thể chuyển thành drawer.
- Chiều cao full viewport cần xử lý overflow cẩn thận.

## Checklist

- Hai vùng có quan hệ rõ.
- Không có bên nào bị quá hẹp.
- Mobile order đúng ưu tiên.
- Text line length dễ đọc.
- Preview/form không mất state khi resize.
