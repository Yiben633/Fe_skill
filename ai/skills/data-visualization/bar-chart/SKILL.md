---
name: bar-chart
description: Hướng dẫn frontend cho bar chart, horizontal bar chart, grouped bar, stacked bar, ranking chart và categorical comparison. Dùng khi cần so sánh giá trị giữa các nhóm, hạng mục, thời kỳ hoặc segment.
---

# Bar Chart

Bar chart tốt nhất khi người dùng cần so sánh độ lớn giữa các hạng mục. Hãy ưu tiên trục rõ, thứ tự có nghĩa và label dễ đọc.

## Khi Dùng

- So sánh category.
- Ranking top/bottom items.
- Grouped comparison giữa series.
- Stacked contribution nếu part-to-whole cần theo category.
- Dashboard hoặc report cần scan nhanh.

## Layout

- Horizontal bar tốt cho label dài.
- Vertical bar tốt cho category ngắn hoặc time buckets.
- Baseline nên bắt đầu từ 0 để tránh gây hiểu sai.
- Gap giữa bar đủ để phân biệt.
- Tránh quá nhiều màu nếu chỉ có một series.

## Data Rules

- Sort theo giá trị nếu ranking là mục tiêu.
- Giữ thứ tự tự nhiên nếu category có sequence.
- Stacked bar cần legend và total rõ.
- Grouped bar không nên có quá nhiều series.
- Format value theo domain: %, currency, count.

## Accessibility

- Có title/summary mô tả insight chính.
- Không chỉ dùng màu để phân biệt series.
- Tooltip có value và context đầy đủ.
- Data table fallback hữu ích cho chart phức tạp.

## Checklist

- Người dùng biết trục đang đo gì.
- Label không bị overlap.
- Màu có mapping nhất quán.
- Tooltip không che bar đang xem.
- Mobile có horizontal scroll hoặc simplified layout nếu cần.
