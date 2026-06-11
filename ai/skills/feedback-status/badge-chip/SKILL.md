---
name: badge-chip
description: Hướng dẫn frontend cho badge, chip, tag, pill, status label, filter chip và token nhỏ trong UI. Dùng khi cần hiển thị trạng thái, danh mục, metadata, lựa chọn lọc, số lượng, nhãn skill, nhãn công nghệ hoặc chip có thể tương tác.
---

# Badge Chip

Badge và chip là tín hiệu nhỏ nhưng ảnh hưởng mạnh tới khả năng scan. Thiết kế chúng rõ nghĩa, ổn định kích thước và không tranh spotlight với nội dung chính.

## Khi Dùng

- Badge: trạng thái ngắn như `New`, `Live`, `Beta`, `Draft`, `Featured`.
- Chip: lựa chọn lọc, tag nội dung, skill, công nghệ hoặc metadata có thể bỏ chọn.
- Pill counter: số lượng nhỏ đi cùng tab, nav item hoặc button.
- Status label: trạng thái hệ thống như success, warning, error, neutral.
- Category tag: phân loại project, bài viết, sản phẩm hoặc case study.

## Biến Thể

- Neutral: dùng cho metadata ít quan trọng.
- Accent: dùng cho nhãn cần nổi bật vừa phải.
- Success: hoàn tất, live, active, verified.
- Warning: pending, limited, attention.
- Danger: failed, blocked, destructive.
- Outline: dùng trong UI dày đặc để giảm trọng lượng thị giác.

## Quy Tắc Thiết Kế

- Chiều cao ổn định, thường 22-32px tùy mật độ UI.
- Padding ngang đủ để text không bị bó.
- Icon chỉ dùng khi tăng nghĩa, ví dụ check, alert, lock, sparkle.
- Không dùng quá nhiều màu badge trong cùng một vùng.
- Với chip có thể xóa, dùng icon `x` hoặc nút remove rõ hit target.
- Text nên ngắn, một dòng, không để badge tự mở rộng vô hạn.

## Interaction

- Filter chip cần có selected, hover, focus và disabled state.
- Chip có remove action cần keyboard-accessible.
- Đừng dùng hover-only để truyền ý nghĩa quan trọng.
- Nếu badge có tooltip, tooltip chỉ bổ sung chi tiết, không thay thế label.

## Checklist

- Contrast đủ đọc trên nền sáng và tối của section.
- Badge không làm thay đổi chiều cao hàng khi nội dung thay đổi.
- Trạng thái màu có mapping nhất quán trong toàn project.
- Text dài có giới hạn hoặc cách rút gọn hợp lý.
- Với list nhiều chip, có wrapping hoặc horizontal scroll có chủ đích.
