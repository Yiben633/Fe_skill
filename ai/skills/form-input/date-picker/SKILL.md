---
name: date-picker
description: Hướng dẫn frontend cho date picker, date range picker, calendar popover, time picker, month picker, scheduling input và timezone-aware date input. Dùng khi người dùng cần chọn ngày, giờ hoặc khoảng thời gian.
---

# Date Picker

Date picker cần cân bằng giữa chọn nhanh và nhập chính xác. Với ngày gần hiện tại, calendar tốt; với ngày xa, input text có thể nhanh hơn.

## Khi Dùng

- Booking, scheduling, filter theo ngày.
- Date range cho analytics hoặc reports.
- Birthday hoặc ngày xa quá khứ.
- Time slot hoặc appointment.
- Month/year picker.

## Pattern

- Single date picker.
- Range picker với start/end rõ.
- Date + time picker.
- Preset ranges như Today, Last 7 days, This month.
- Manual input kèm format hint.

## Behavior

- Disable ngày không hợp lệ.
- Range hover preview nếu có.
- Clear action nếu optional.
- Validate timezone và min/max.
- Calendar popover không bị cắt viewport.

## Accessibility

- Keyboard điều hướng calendar.
- Current date và selected date phân biệt rõ.
- Label ngày đọc được với screen reader.
- Error message nói format hoặc range hợp lệ.

## Checklist

- Format ngày nhất quán theo locale của app.
- Mobile có fallback dễ dùng.
- Không bắt click quá nhiều cho ngày xa.
- Range state không mơ hồ.
- Timezone được xử lý nếu ảnh hưởng dữ liệu.
