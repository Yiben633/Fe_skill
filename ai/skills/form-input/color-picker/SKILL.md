---
name: color-picker
description: Hướng dẫn frontend cho color picker, swatch picker, palette, hue slider, alpha control, hex input, theme color selector và design token color input. Dùng khi người dùng cần chọn hoặc nhập màu.
---

# Color Picker

Color picker cần hỗ trợ cả chọn nhanh bằng swatch và nhập chính xác bằng mã màu nếu người dùng cần.

## Khi Dùng

- Theme customization.
- Brand color setting.
- Drawing/design tool.
- Chart color hoặc label color.
- Avatar/background color.

## Pattern

- Swatch grid cho palette có sẵn.
- Hex/RGB input cho nhập chính xác.
- Hue/saturation picker cho tự do chọn màu.
- Alpha control nếu transparency có nghĩa.
- Recent colors hoặc saved colors nếu dùng thường xuyên.

## Behavior

- Preview màu đang chọn rõ.
- Validate mã màu khi nhập tay.
- Contrast warning nếu màu dùng cho text/background.
- Reset về default nếu có.
- Commit/cancel nếu thay đổi có tác động lớn.

## Accessibility

- Swatch có label tên/mã màu.
- Selected swatch không chỉ dựa vào border màu.
- Keyboard chọn được màu.
- Contrast đủ cho UI picker.

## Checklist

- User có thể nhập màu chính xác.
- Palette không quá nhiều màu gây rối.
- Alpha state rõ nếu bật.
- Color value được normalize trước khi lưu.
- Có warning khi màu làm text khó đọc.
