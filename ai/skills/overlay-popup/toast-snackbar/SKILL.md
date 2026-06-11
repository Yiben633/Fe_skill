---
name: toast-snackbar
description: Hướng dẫn frontend cho toast, snackbar, transient notification, undo snackbar, success/error feedback và notification stack. Dùng khi cần phản hồi tạm thời sau action mà không chặn luồng người dùng.
---

# Toast Snackbar

Toast và snackbar là phản hồi tạm thời. Chúng nên xác nhận kết quả hoặc cho phép undo nhanh, không thay thế error handling quan trọng trong form.

## Khi Dùng

- Action thành công: saved, copied, sent.
- Error nhẹ có thể retry.
- Undo sau thao tác destructive có thể đảo ngược.
- Background sync hoặc upload status ngắn.
- Notification không cần user xử lý ngay.

## Nội Dung

- Một câu ngắn, rõ kết quả.
- Action phụ tối đa một, ví dụ Undo hoặc Retry.
- Không nhồi nhiều toast liên tiếp cho cùng một event.
- Error quan trọng cần inline message hoặc modal/drawer phù hợp hơn.

## Behavior

- Auto-dismiss với duration đủ đọc, thường 3-6 giây.
- Pause timer khi hover/focus.
- Stack giới hạn số lượng.
- Vị trí nhất quán, tránh che CTA hoặc nav.
- Toast action phải keyboard-accessible.

## Variants

- Success, info, warning, error.
- Undo snackbar.
- Persistent toast cho task đang chạy.
- Progress toast cho upload/export.

## Checklist

- Toast không che nội dung quan trọng.
- Có `aria-live` phù hợp.
- Người dùng đọc kịp trước khi biến mất.
- Repeated events được gộp hợp lý.
- Mobile placement không đè lên bottom nav.
