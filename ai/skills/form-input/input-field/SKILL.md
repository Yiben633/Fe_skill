---
name: input-field
description: Hướng dẫn frontend cho text input, input field, label, helper text, placeholder, validation, error state, prefix/suffix, password input và form field layout. Dùng khi cần xây dựng trường nhập liệu một dòng trong form hoặc settings UI.
---

# Input Field

Input field tốt giúp người dùng biết cần nhập gì, nhập sai ở đâu và sửa thế nào. Đừng để placeholder thay thế label.

## Anatomy

- Label rõ, luôn nhìn thấy nếu field quan trọng.
- Input control có height ổn định.
- Helper text giải thích format hoặc giới hạn.
- Error message nằm gần field.
- Prefix/suffix chỉ dùng khi tăng nghĩa, ví dụ currency, URL, unit.

## States

- Default, hover, focus, filled.
- Disabled và readonly phân biệt rõ.
- Error, warning, success nếu có validation.
- Loading khi check async.
- Required hoặc optional indicator nhất quán.

## Validation

- Validate format khi blur hoặc submit, tránh báo lỗi quá sớm.
- Error message nói cách sửa, không chỉ nói "Invalid".
- Preserve user input khi lỗi.
- Async validation cần loading và race handling.

## Accessibility

- Label liên kết với input.
- Error liên kết bằng `aria-describedby`.
- Không chỉ dùng màu để báo lỗi.
- Focus visible rõ.
- Password input có toggle show/hide nếu phù hợp.

## Checklist

- Placeholder không chứa thông tin bắt buộc duy nhất.
- Text không bị cắt ở mobile.
- Keyboard type đúng với dữ liệu.
- Autofill không phá style.
- Error state vẫn đọc tốt với screen reader.
