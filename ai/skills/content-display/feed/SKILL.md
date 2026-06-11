---
name: feed
description: Hướng dẫn frontend cho feed, activity feed, social feed, notification feed, changelog stream, infinite feed và realtime updates. Dùng khi cần hiển thị dòng nội dung theo thời gian hoặc hoạt động mới nhất.
---

# Feed

Feed cần giữ nhịp đọc tự nhiên: item mới, item cũ, metadata thời gian và trạng thái tải thêm phải rõ ràng.

## Khi Dùng

- Activity log hoặc audit feed.
- Social/content feed.
- Notification center.
- Changelog hoặc release stream.
- Realtime event feed.

## Item Anatomy

- Actor hoặc source.
- Action hoặc title chính.
- Timestamp tương đối hoặc tuyệt đối.
- Body/content preview.
- Media, attachment hoặc link nếu có.
- Actions như reply, open, mark read.

## Behavior

- Infinite load cần sentinel và loading state rõ.
- Realtime item mới nên có indicator, không nhảy scroll bất ngờ.
- Mark read/unread state rõ.
- Filter theo type hoặc source nếu feed dài.
- Group theo ngày khi giúp scan tốt hơn.

## Empty And Loading

- Initial loading dùng skeleton item.
- Empty state nói rõ chưa có hoạt động.
- Error state có retry.
- End-of-feed state nhẹ, không cần quá nổi.

## Checklist

- Người dùng hiểu item mới nhất ở đâu.
- Timestamp dễ hiểu.
- Media không làm layout shift.
- Realtime update không cướp focus.
- Feed dài vẫn performance ổn.
