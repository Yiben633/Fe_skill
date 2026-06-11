---
name: tooltip
description: Hướng dẫn frontend cho tooltip, hover/focus hint, icon label, helper text nổi và compact affordance explanation. Dùng khi cần giải thích ngắn cho icon, trạng thái hoặc control mà không làm layout nặng thêm.
---

# Tooltip

Tooltip chỉ nên bổ sung thông tin ngắn. Nếu nội dung quan trọng để hoàn thành task, hãy đưa nó vào UI chính thay vì giấu trong tooltip.

## Khi Dùng

- Giải thích icon button không quen thuộc.
- Hiển thị label cho control chỉ có icon.
- Bổ sung mô tả ngắn cho trạng thái hoặc metric.
- Cảnh báo nhẹ về giới hạn hoặc điều kiện.

## Nội Dung

- Ngắn, thường 1-2 dòng.
- Không chứa action chính.
- Không chứa form field.
- Không chứa nội dung dài cần đọc kỹ.
- Dùng ngôn ngữ trực tiếp, không mơ hồ.

## Behavior

- Hiện khi hover và focus.
- Ẩn khi blur, escape hoặc pointer leave.
- Delay nhẹ để tránh nhấp nháy.
- Không che trigger hoặc nội dung đang cần xem.
- Trên touch device, cân nhắc helper text hoặc popover thay thế.

## Accessibility

- Trigger keyboard-focusable nếu cần tooltip khi focus.
- Tooltip liên kết bằng `aria-describedby` khi phù hợp.
- Không dùng tooltip làm nguồn thông tin duy nhất.
- Tôn trọng reduced motion.

## Checklist

- Tooltip không bị cắt bởi overflow container.
- Placement tự đổi khi gần mép viewport.
- Text đủ contrast.
- Không có tooltip lồng tooltip.
- Nội dung vẫn hiểu được nếu tooltip không xuất hiện.
