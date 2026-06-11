---
name: slider-range
description: Hướng dẫn frontend cho slider, range slider, numeric range, volume/price filter, min-max selection, step control và continuous input. Dùng khi người dùng cần chọn giá trị trên một khoảng.
---

# Slider Range

Slider tốt cho lựa chọn tương đối, không tốt cho nhập số chính xác nếu không có input phụ.

## Khi Dùng

- Volume, brightness, zoom.
- Price range hoặc filter range.
- Weight/threshold có step rõ.
- Giá trị có min/max trực quan.
- Control cần phản hồi tức thì.

## Layout

- Label rõ giá trị đang điều chỉnh.
- Hiển thị current value.
- Min/max hoặc tick mark nếu hữu ích.
- Range slider có hai thumb phân biệt.
- Có numeric input phụ khi cần độ chính xác.

## Behavior

- Step phù hợp với domain.
- Drag mượt, không lag.
- Keyboard hỗ trợ arrow/page/home/end.
- Value update không gây request quá dày nếu remote.
- Range thumb không vượt nhau trừ khi rule cho phép.

## Accessibility

- Dùng input range native khi đủ.
- Custom slider cần aria min/max/value.
- Value text dễ hiểu với screen reader.
- Focus visible trên thumb.

## Checklist

- User biết min, max và current value.
- Mobile drag dễ dùng.
- Không bắt slider cho số cần nhập chính xác.
- Debounce side effects tốn kém.
- Error/disabled state rõ nếu value không hợp lệ.
