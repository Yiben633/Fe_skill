---
name: gauge-dial
description: Hướng dẫn frontend cho gauge chart, dial chart, meter, radial progress, threshold indicator và score visualization. Dùng khi cần hiển thị một giá trị so với ngưỡng, target hoặc thang đo.
---

# Gauge Dial

Gauge/dial phù hợp cho một giá trị nổi bật so với ngưỡng. Không dùng gauge nếu cần so sánh nhiều giá trị chi tiết.

## Khi Dùng

- Score, health, capacity, usage.
- Progress tới target.
- Threshold status: low, medium, high.
- Dashboard metric cần nhấn mạnh một giá trị.

## Layout

- Value chính ở trung tâm hoặc gần gauge.
- Min/max hoặc threshold label rõ.
- Arc không quá trang trí.
- Needle chỉ dùng nếu tăng nghĩa.
- Donut/radial progress có thể thay gauge nếu đơn giản hơn.

## Data Rules

- Thang đo phải có ý nghĩa.
- Threshold màu nhất quán.
- Không phóng đại bằng scale tùy tiện.
- Nếu value vượt max, xử lý rõ.
- Unit và context luôn hiển thị.

## Accessibility

- Text value là bắt buộc.
- Không chỉ dùng màu arc.
- Có label cho threshold nếu quan trọng.
- Reduced motion cho needle/arc animation.

## Checklist

- User hiểu giá trị đang tốt hay xấu.
- Scale không gây hiểu sai.
- Gauge không chiếm quá nhiều không gian cho một số.
- Mobile vẫn đọc được value.
- Empty/error state không biến thành gauge giả.
