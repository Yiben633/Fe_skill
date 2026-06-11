---
name: tag-input
description: Hướng dẫn frontend cho tag input, token input, creatable tags, multi-value input, skill tags, email chips và autocomplete tags. Dùng khi người dùng cần nhập nhiều giá trị ngắn dạng chip.
---

# Tag Input

Tag input tốt giúp thêm, sửa và xóa nhiều giá trị ngắn mà không làm field rối.

## Khi Dùng

- Skill tags, labels, keywords.
- Email recipients.
- Product categories hoặc filters.
- Creatable options kết hợp autocomplete.
- Multi-value metadata.

## Behavior

- Enter/comma tạo tag nếu hợp lệ.
- Backspace xóa tag cuối khi input rỗng.
- Duplicate handling rõ.
- Autocomplete gợi ý option có sẵn.
- Remove tag bằng icon và keyboard.

## Validation

- Max tags.
- Format từng tag, ví dụ email.
- Max length mỗi tag.
- Duplicate hoặc reserved tag.
- Error per input hoặc group.

## Layout

- Tags wrap sạch trong container.
- Input còn đủ chỗ nhập.
- Tag dài có truncate hợp lý.
- Mobile touch target đủ lớn.

## Checklist

- User biết cách thêm tag.
- Tag remove action accessible.
- Autocomplete không che tags đã nhập.
- Paste nhiều giá trị được xử lý nếu phù hợp.
- Error không làm mất tag hợp lệ.
