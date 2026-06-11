---
name: line-chart
description: Hướng dẫn frontend cho line chart, time series chart, trend chart, multi-series line, area line và interactive chart tooltip. Dùng khi cần hiển thị xu hướng, biến động hoặc dữ liệu theo thời gian.
---

# Line Chart

Line chart phù hợp để đọc xu hướng theo thời gian. Đừng dùng line chart cho category rời rạc không có thứ tự tự nhiên.

## Khi Dùng

- Time series: ngày, tuần, tháng, quý.
- Trend tăng/giảm.
- So sánh nhiều series theo thời gian.
- Metric history trong dashboard.
- Forecast hoặc target line.

## Layout

- X-axis là thời gian hoặc thứ tự liên tục.
- Y-axis format rõ đơn vị.
- Grid line nhẹ, không lấn át data.
- Legend gần chart hoặc gắn trực tiếp vào line nếu ít series.
- Tooltip theo điểm hoặc crosshair theo thời gian.

## Data Rules

- Không nối line qua khoảng dữ liệu thiếu nếu gây hiểu sai.
- Downsample nếu quá nhiều điểm.
- Dùng area fill tiết chế.
- Với nhiều series, giới hạn màu và ưu tiên highlight.
- Mark anomaly hoặc event nếu insight quan trọng.

## Accessibility

- Có summary insight chính.
- Tooltip keyboard-accessible nếu chart tương tác.
- Không chỉ dùng màu để phân biệt series.
- Cung cấp table hoặc textual fallback khi cần.

## Checklist

- Trend chính đọc được trong vài giây.
- Axis không gây hiểu sai.
- Mobile tooltip không che toàn chart.
- Data missing được xử lý rõ.
- Line không quá nhiều làm chart rối.
