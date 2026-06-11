---
name: share-sheet
description: Hướng dẫn frontend cho share sheet, native share, social share, copy link share, mobile share action và share fallback. Dùng khi cần cho người dùng chia sẻ URL, nội dung, file hoặc resource.
---

# Share Sheet

Share sheet nên ưu tiên native share khi có, rồi fallback sang copy link hoặc các kênh cụ thể.

## Khi Dùng

- Share article, product, project hoặc profile.
- Share invite link.
- Share generated report/file.
- Mobile-first share flow.
- Social/share actions trong card/detail page.

## Pattern

- Native Web Share API nếu supported.
- Bottom sheet trên mobile.
- Popover/dropdown trên desktop.
- Copy link action luôn dễ thấy.
- Social buttons chỉ hiện khi thật sự cần.

## Behavior

- Share URL được canonicalize.
- Copy fallback có feedback.
- Loading khi tạo share link async.
- Error khi share/link generation fail.
- Không spam quá nhiều platform buttons.

## Accessibility

- Trigger có accessible label.
- Sheet/dialog focus handling rõ.
- Icon-only share targets có label.
- Keyboard user dùng được mọi action.

## Checklist

- Native share hoạt động khi browser hỗ trợ.
- Copy link fallback tốt.
- Share text/URL đúng ngữ cảnh.
- Mobile layout không bị chật.
- Privacy/security của share link được cân nhắc.
