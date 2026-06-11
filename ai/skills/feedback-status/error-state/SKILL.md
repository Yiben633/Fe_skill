---
name: error-state
description: Hướng dẫn frontend cho error state, failed loading, retry state, unavailable state, validation summary, degraded state và user-facing error messages. Dùng khi UI cần phản hồi lỗi rõ ràng và giúp người dùng phục hồi.
---

# Error State

Error state cần trung thực, cụ thể và có đường phục hồi. Đừng đẩy người dùng vào thông báo mơ hồ kiểu "Something went wrong" nếu có thể nói rõ hơn.

## Loại Lỗi

- Load error: dữ liệu không tải được.
- Submit error: action thất bại.
- Permission error: không có quyền.
- Offline/network error.
- Validation summary.
- Degraded state: một phần UI vẫn dùng được.

## Nội Dung

- Title nói vấn đề chính.
- Description giải thích tác động.
- Action như Retry, Go back, Contact support.
- Error code chỉ hiển thị khi hữu ích.
- Không đổ lỗi cho user.

## Layout

- Inline error gần vùng bị ảnh hưởng.
- Page-level error cho lỗi toàn trang.
- Toast chỉ dùng cho lỗi nhẹ, không thay thế inline error quan trọng.
- Form error cần nằm gần field hoặc summary rõ.

## Accessibility

- Error quan trọng có live region phù hợp.
- Focus đưa tới error summary khi submit fail nếu form dài.
- Không chỉ dùng màu đỏ.
- Action retry keyboard-accessible.

## Checklist

- User biết chuyện gì sai.
- User biết có thể làm gì tiếp.
- Retry không reset context không cần thiết.
- Lỗi một phần không khóa toàn UI nếu không cần.
- Có fallback cho offline hoặc timeout.
