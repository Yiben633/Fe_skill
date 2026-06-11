---
name: heatmap
description: Hướng dẫn frontend cho heatmap, calendar heatmap, intensity matrix, density map, correlation heatmap và color-scale data display. Dùng khi cần hiển thị cường độ, tần suất hoặc pattern qua ma trận.
---

# Heatmap

Heatmap giúp phát hiện pattern bằng màu sắc. Nó cần scale rõ, legend tốt và không phụ thuộc vào màu một cách mơ hồ.

## Khi Dùng

- Calendar activity.
- Matrix theo ngày/giờ.
- Correlation hoặc intensity grid.
- Usage frequency.
- Density hoặc performance hotspots.

## Layout

- Cell size ổn định.
- Axis label đủ rõ.
- Legend cho color scale.
- Tooltip cho value chính xác.
- Empty/null cell khác zero cell.

## Color Scale

- Dùng sequential scale cho intensity.
- Diverging scale cho positive/negative.
- Tránh palette gây khó đọc hoặc quá nhiều bậc.
- Kiểm tra color contrast và color-blind safety.
- Không dùng màu xanh/đỏ nếu domain dễ hiểu sai.

## Accessibility

- Có text summary pattern chính.
- Tooltip hoặc table fallback cho value.
- Không chỉ dựa vào màu nếu decision quan trọng.
- Keyboard access nếu cell tương tác.

## Checklist

- Legend giải thích scale rõ.
- Null và zero phân biệt.
- Mobile vẫn đọc được axis/cell.
- Tooltip không che vùng đang inspect.
- Pattern chính nổi lên mà không cần quá nhiều annotation.
