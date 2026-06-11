---
name: skeleton-loader
description: Hướng dẫn frontend cho skeleton loader, shimmer placeholder, loading card, loading table row, content placeholder và perceived performance. Dùng khi cần giữ layout ổn định trong lúc dữ liệu hoặc media đang tải.
---

# Skeleton Loader

Skeleton loader nên mô phỏng cấu trúc thật của nội dung để giảm cảm giác chờ và tránh layout shift. Đừng dùng skeleton như decoration chung chung.

## Khi Dùng

- Card, list, feed, table hoặc profile đang tải.
- Data có cấu trúc ổn định nhưng chưa có nội dung.
- Media hoặc avatar cần placeholder.
- Page load nơi spinner đơn độc khiến UI trống.

## Layout

- Skeleton khớp gần đúng với content thật.
- Giữ chiều cao, width và spacing ổn định.
- Không tạo skeleton chi tiết quá mức gây nhiễu.
- Table skeleton giữ column width.
- Card skeleton giữ image ratio và text rows.

## Motion

- Shimmer nhẹ, chậm và không quá sáng.
- Có reduced motion path: static skeleton hoặc opacity pulse rất nhẹ.
- Tránh nhiều shimmer dày đặc trong cùng viewport.
- Không dùng animation nếu loading rất ngắn.

## Accessibility

- Đánh dấu vùng đang tải bằng `aria-busy` khi phù hợp.
- Không announce từng skeleton item.
- Có loading label nếu vùng chính chưa có content.
- Nội dung thật thay thế skeleton không làm focus nhảy.

## Checklist

- Skeleton không làm layout shift khi data về.
- Placeholder phản ánh content thật.
- Loading lâu có thể cần text hoặc progress rõ hơn.
- Mobile skeleton không overflow.
- Empty state khác loading state.
