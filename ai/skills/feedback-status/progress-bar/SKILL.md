---
name: progress-bar
description: Hướng dẫn frontend cho progress bar, determinate progress, upload/download progress, completion meter, multi-step progress và linear progress indicator. Dùng khi cần thể hiện phần trăm hoặc mức hoàn thành của một tác vụ.
---

# Progress Bar

Progress bar hữu ích khi người dùng cần biết tác vụ đã đi đến đâu. Nếu không có tiến độ thật, đừng giả phần trăm quá chính xác.

## Khi Dùng

- Upload, download, import, export.
- Onboarding hoặc setup completion.
- Multi-step progress có phần trăm.
- Task dài có tiến độ đo được.
- Quota hoặc usage meter.

## Pattern

- Determinate: có giá trị phần trăm thật.
- Indeterminate linear: task đang chạy nhưng không biết tiến độ.
- Segmented progress: step hoặc phase rõ.
- Usage meter: dung lượng, quota, limit.

## Content

- Label nói task đang làm gì.
- Value hoặc percent nếu có nghĩa.
- Context như `3/5 bước`, `42 MB / 100 MB`.
- Error hoặc paused state nếu task dừng.
- Success state khi hoàn tất.

## Accessibility

- Dùng `role="progressbar"` với min/max/value khi phù hợp.
- Value text dễ hiểu với screen reader.
- Không chỉ dùng màu để báo warning/limit.
- Reduced motion cho indeterminate bar.

## Checklist

- Progress không nhảy lùi vô lý.
- User biết task gì đang chạy.
- Có state complete/error/cancel nếu cần.
- Mobile bar không quá mảnh để nhìn.
- Không dùng percent giả nếu hệ thống không đo được.
