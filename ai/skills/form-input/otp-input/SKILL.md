---
name: otp-input
description: Hướng dẫn frontend cho OTP input, PIN input, verification code, one-time password field, segmented code input, paste behavior và resend flow. Dùng khi người dùng cần nhập mã xác thực ngắn.
---

# OTP Input

OTP input phải nhanh, dễ paste và xử lý lỗi nhẹ nhàng. Người dùng thường đang chờ mã, nên flow cần ít ma sát.

## Behavior

- Tự chuyển focus sang ô tiếp theo khi nhập.
- Backspace quay lại ô trước hợp lý.
- Paste toàn bộ mã vào field bất kỳ.
- Chỉ cho ký tự hợp lệ, thường là số.
- Submit tự động chỉ khi an toàn và rõ.

## Layout

- Số ô khớp length mã.
- Ô đủ lớn cho mobile.
- Có label mô tả mã gửi tới đâu.
- Resend code có countdown nếu cần.
- Error message nằm dưới nhóm input.

## States

- Default, focus, filled.
- Error khi mã sai hoặc hết hạn.
- Loading khi verify.
- Disabled khi đang submit.
- Resend available/unavailable.

## Accessibility

- Group label rõ.
- Có thể dùng một input ẩn hoặc segmented inputs nhưng screen reader phải hiểu được.
- Paste support không bị chặn.
- Error nói cách thử lại.

## Checklist

- Paste mã hoạt động.
- Mobile numeric keyboard hiện đúng.
- User biết mã dài bao nhiêu ký tự.
- Resend flow rõ.
- Không xóa mã ngay khi verify fail nếu user cần sửa.
