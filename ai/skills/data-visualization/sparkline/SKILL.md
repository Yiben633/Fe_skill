---
name: sparkline
description: Hướng dẫn frontend cho sparkline, mini trend chart, inline chart, compact time series và stat card trend line. Dùng khi cần hiển thị xu hướng nhỏ gọn bên trong card, table row hoặc dashboard summary.
---

# Sparkline

Sparkline là tín hiệu xu hướng nhỏ, không phải chart phân tích đầy đủ. Nó nên giúp người dùng thấy hướng đi nhanh mà không cần đọc axis chi tiết.

## Khi Dùng

- Stat card trend.
- Table row metric history.
- Compact dashboard summary.
- Inline health/performance signal.
- So sánh xu hướng nhanh giữa nhiều item.

## Layout

- Kích thước nhỏ nhưng đủ thấy shape.
- Không cần axis đầy đủ, nhưng cần context quanh chart.
- Baseline và scale phải nhất quán nếu so sánh nhiều sparkline.
- Highlight latest point nếu hữu ích.
- Dùng color trend cẩn thận.

## Data Rules

- Không dùng sparkline cho ít hơn 3-4 điểm nếu không có nghĩa.
- Giữ scale nhất quán khi so sánh rows.
- Tránh smoothing làm sai dữ liệu.
- Missing data cần gap hoặc fallback rõ.

## Accessibility

- Có text summary như "tăng 12% trong 7 ngày".
- Không chỉ dùng sparkline để truyền insight.
- Tooltip optional nếu có interaction.
- Reduced motion nếu line animate.

## Checklist

- Trend đọc được ở kích thước nhỏ.
- Scale không gây hiểu sai.
- Color không là tín hiệu duy nhất.
- Sparkline không làm stat card rối.
- Loading/empty state giữ layout.
