---
name: bottom-sheet
description: Hướng dẫn frontend cho bottom sheet, mobile sheet, action sheet, persistent sheet, modal bottom panel và mobile-first overlay. Dùng khi cần hiển thị lựa chọn hoặc nội dung phụ từ đáy màn hình, đặc biệt trên mobile.
---

# Bottom Sheet

Bottom sheet hợp với mobile vì nằm gần ngón tay và giữ ngữ cảnh page. Nó cần có chiều cao hợp lý, drag affordance và close behavior rõ.

## Khi Dùng

- Action sheet cho lựa chọn ngắn.
- Mobile filter/sort.
- Detail preview hoặc quick edit.
- Share sheet, picker hoặc menu phụ.
- Form ngắn trên mobile.

## Loại Sheet

- Modal sheet: chặn nền và trap focus.
- Persistent sheet: nằm cùng layout, không chặn nền.
- Detent sheet: có nhiều mức chiều cao.
- Full-height sheet: gần giống modal trên mobile.

## Behavior

- Có handle hoặc close button rõ.
- Đóng bằng swipe down nếu platform phù hợp.
- Đóng bằng escape/back nếu hỗ trợ.
- Body scroll trong sheet khi nội dung dài.
- Không để page nền scroll khi modal sheet mở.

## Layout

- Max height thường 80-95vh.
- Footer action sticky nếu có form.
- Safe area bottom được xử lý.
- Rounded top corners vừa phải, không quá trang trí.
- Desktop có thể chuyển thành drawer hoặc modal.

## Checklist

- Sheet không che mất context cần nhìn.
- Touch target đủ lớn.
- Keyboard/focus handling ổn.
- Nội dung dài không làm nút action biến mất.
- Reduced motion path có sẵn.
