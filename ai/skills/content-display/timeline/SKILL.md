---
name: timeline
description: Hướng dẫn frontend cho timeline, milestone list, activity history, event chronology, roadmap, experience timeline và process steps theo thời gian. Dùng khi cần hiển thị chuỗi sự kiện có thứ tự thời gian hoặc trạng thái tiến trình.
---

# Timeline

Timeline cần làm rõ thứ tự, mốc thời gian và quan hệ giữa các sự kiện. Đừng biến nó thành decoration nếu list đơn giản đã đủ.

## Loại Timeline

- Vertical timeline: tốt cho experience, history, activity.
- Horizontal timeline: tốt cho roadmap ngắn hoặc process cao cấp.
- Alternating timeline: dùng tiết chế cho page editorial.
- Compact timeline: dùng trong dashboard hoặc audit log.
- Milestone timeline: nhấn mạnh mốc hoàn thành.

## Thành Phần

- Date/time hoặc phase label.
- Title sự kiện.
- Description ngắn.
- Status marker: completed, current, upcoming, failed.
- Metadata phụ như author, location, link.

## Layout

- Marker và line phải căn thẳng.
- Date column có width ổn định.
- Mobile ưu tiên vertical timeline.
- Event dài cần wrap gọn, không phá line.
- Current item nên nổi bật vừa đủ.

## Accessibility

- Thứ tự DOM đúng với thứ tự thời gian.
- Không chỉ dùng màu để biểu thị status.
- Marker decorative nên ẩn với screen reader.
- Link trong event có focus state rõ.

## Checklist

- Người dùng hiểu trình tự ngay.
- Mốc hiện tại hoặc quan trọng dễ thấy.
- Timeline không quá rộng trên mobile.
- Empty state giải thích khi chưa có event.
- Long history có phân trang hoặc lazy loading nếu cần.
