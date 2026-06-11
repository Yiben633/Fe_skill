---
name: alert-banner
description: Hướng dẫn frontend cho alert, banner, inline notice, system banner, warning strip, dismissible alert và status message. Dùng khi cần hiển thị thông tin quan trọng hơn toast nhưng ít chặn hơn modal.
---

# Alert Banner

Alert/banner nên ở gần nơi người dùng cần hành động hoặc ở vị trí hệ thống nếu ảnh hưởng toàn app. Nó phải rõ mức độ nghiêm trọng và bước tiếp theo.

## Khi Dùng

- System outage, billing issue, warning hoặc maintenance.
- Form-level error hoặc success message.
- Inline notice trong section.
- Dismissible announcement.
- Policy, permission hoặc account status.

## Variants

- Info: thông tin trung tính.
- Success: hoàn tất hoặc xác nhận.
- Warning: cần chú ý nhưng chưa chặn.
- Error: lỗi cần xử lý.
- Critical: ảnh hưởng lớn, có thể persistent.

## Nội Dung

- Title ngắn nếu alert quan trọng.
- Body giải thích hệ quả và bước tiếp theo.
- Action rõ nếu user cần làm gì.
- Không dùng alert dài như tài liệu.
- Dismiss chỉ dùng khi việc ẩn alert không gây rủi ro.

## Layout

- Banner global đặt gần top app shell.
- Inline alert đặt gần field/section liên quan.
- Icon hỗ trợ severity nhưng không là tín hiệu duy nhất.
- Mobile text wrap gọn, action không bị ép.

## Checklist

- Severity rõ ràng.
- Action tiếp theo dễ hiểu.
- Alert không bị lẫn với card thường.
- Dismiss state được lưu nếu cần.
- Screen reader nhận được alert quan trọng.
