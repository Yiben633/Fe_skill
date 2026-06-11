---
name: ticker
description: Hướng dẫn frontend cho ticker, news ticker, stock/price ticker, status ticker, realtime strip và compact updating information. Dùng khi cần hiển thị thông tin ngắn cập nhật liên tục hoặc luân phiên trong một hàng nhỏ.
---

# Ticker

Ticker nên truyền tín hiệu nhanh mà không gây phiền. Chỉ dùng khi thông tin thật sự ngắn, cập nhật thường xuyên hoặc cần nằm trong tầm nhìn liên tục.

## Khi Dùng

- Tin nhanh hoặc announcement ngắn.
- Giá, chỉ số, trạng thái realtime.
- System status strip.
- Sports/event updates.
- Compact dashboard signal.

## Behavior

- Cập nhật không làm layout nhảy.
- Motion phải chậm đủ để đọc.
- Có pause khi hover/focus nếu ticker chạy.
- Item mới nên có highlight nhẹ.
- Không dùng ticker cho nội dung dài cần đọc kỹ.

## Layout

- Một dòng, height ổn định.
- Value và delta căn rõ.
- Separator đủ nhẹ.
- Truncate hoặc marquee chỉ khi có kiểm soát.
- Mobile có thể chuyển thành stacked compact list.

## Accessibility

- Tôn trọng `prefers-reduced-motion`.
- Không spam screen reader với realtime updates.
- Có cách xem chi tiết hoặc mở item.
- Contrast đủ đọc ở kích thước nhỏ.

## Checklist

- Nội dung đọc được trước khi biến mất.
- Ticker không kéo focus khỏi task chính.
- Update realtime không phá layout.
- Có fallback khi không có data.
- Motion có thể pause hoặc giảm.
