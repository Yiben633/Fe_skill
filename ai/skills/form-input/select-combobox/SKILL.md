---
name: select-combobox
description: Hướng dẫn frontend cho select, combobox, autocomplete, searchable select, async options, multi-select và option list. Dùng khi người dùng cần chọn một hoặc nhiều giá trị từ danh sách.
---

# Select Combobox

Select và combobox phải làm rõ người dùng đang chọn gì, có thể tìm kiếm không và giá trị nào đang active.

## Chọn Pattern

- Native select: danh sách ngắn, form đơn giản, mobile-friendly.
- Custom select: cần style hoặc rich option.
- Combobox: danh sách dài cần search.
- Autocomplete: option phụ thuộc query.
- Multi-select: cần chọn nhiều giá trị.

## Option Design

- Label ngắn và tự đủ nghĩa.
- Description phụ nếu option dễ nhầm.
- Group options khi danh sách dài.
- Empty state khi không có kết quả.
- Loading state cho async options.

## Behavior

- Mở/đóng bằng click và keyboard.
- Arrow keys điều hướng option.
- Typeahead hoặc search khi danh sách dài.
- Clear action nếu field optional.
- Preserve selected value khi options reload.

## Accessibility

- Dùng native control nếu không cần custom behavior.
- Custom combobox cần role/aria đúng.
- Active option được announce.
- Error/helper liên kết với trigger/input.

## Checklist

- Không dùng dropdown dài vô tận.
- Mobile có trải nghiệm chọn ổn.
- Selected state rõ.
- Async search xử lý loading, empty và error.
- Multi-select chip không làm field vỡ layout.
