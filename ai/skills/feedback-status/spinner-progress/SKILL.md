---
name: spinner-progress
description: Hướng dẫn frontend cho spinner, loading indicator, indeterminate progress, inline loading, button loading và pending state. Dùng khi không biết thời lượng tiến trình hoặc cần phản hồi loading nhỏ gọn.
---

# Spinner Progress

Spinner chỉ nói rằng hệ thống đang làm việc, không nói còn bao lâu. Dùng spinner cho tác vụ ngắn hoặc không đo được tiến độ.

## Khi Dùng

- Button đang submit.
- Inline action đang xử lý.
- Fetch nhanh chưa đủ cấu trúc để skeleton.
- Tác vụ indeterminate không có phần trăm.
- Loading nhỏ trong menu, card hoặc toolbar.

## Pattern

- Button spinner: giữ button width, disable action trùng.
- Inline spinner: nằm cạnh label hoặc status text.
- Page spinner: chỉ dùng nếu không có skeleton/layout nào hợp lý.
- Overlay spinner: dùng tiết chế, tránh che UI quá lâu.

## Behavior

- Nếu loading dưới 300ms, cân nhắc delay để tránh nháy.
- Nếu loading lâu hơn vài giây, thêm message hoặc progress rõ hơn.
- Không để spinner chạy vô hạn khi request fail.
- Có timeout/error state nếu cần.

## Accessibility

- Có text status khi loading quan trọng.
- Button loading giữ label hoặc accessible name.
- Dùng `aria-busy` hoặc live region phù hợp.
- Tôn trọng reduced motion.

## Checklist

- User biết action đang xử lý.
- Spinner không làm layout nhảy.
- Không thể submit trùng nếu action đang pending.
- Có error/timeout path.
- Spinner không che mất thông tin cần nhìn.
