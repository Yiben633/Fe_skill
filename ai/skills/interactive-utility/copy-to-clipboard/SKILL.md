---
name: copy-to-clipboard
description: Hướng dẫn frontend cho copy to clipboard, copy button, clipboard feedback, code copy, share link copy và clipboard API fallback. Dùng khi cần cho người dùng sao chép text, code, token, URL hoặc dữ liệu ngắn.
---

# Copy To Clipboard

Copy action cần phản hồi tức thì để người dùng biết đã sao chép thành công. Hãy xử lý fallback và lỗi clipboard rõ ràng.

## Khi Dùng

- Copy code snippet.
- Copy URL/share link.
- Copy token/API key.
- Copy ID, email, command hoặc short text.
- Copy trong table row/card.

## Behavior

- Button có icon copy quen thuộc.
- Feedback sau copy: label đổi, toast nhẹ hoặc check icon.
- Feedback tự reset sau 1-3 giây.
- Không làm layout nhảy khi label đổi.
- Có fallback khi Clipboard API fail.

## Security

- Với secret/token, cân nhắc confirm hoặc reveal trước.
- Không tự copy khi user chưa chủ động.
- Không log clipboard content nhạy cảm.

## Accessibility

- Button có accessible label.
- Announce copy success bằng live region/toast phù hợp.
- Keyboard user copy được.
- Focus không mất sau action.

## Checklist

- User biết copy đã thành công.
- Error state có message rõ.
- Button không đổi kích thước khi feedback.
- Clipboard fallback được xử lý.
- Secret data được bảo vệ đúng mức.
