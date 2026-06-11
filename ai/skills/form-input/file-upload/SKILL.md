---
name: file-upload
description: Hướng dẫn frontend cho file upload, drag and drop upload, image upload, document upload, preview, progress, validation và retry. Dùng khi người dùng cần tải file lên hệ thống.
---

# File Upload

File upload cần cho người dùng biết có thể tải gì, dung lượng tối đa, tiến trình và lỗi nếu upload thất bại.

## Khi Dùng

- Avatar, cover image, media upload.
- Document hoặc CSV import.
- Multi-file attachments.
- Drag-drop upload zone.
- Upload có preview và retry.

## UI Pattern

- Button upload đơn giản cho một file.
- Dropzone cho nhiều file.
- Preview grid/list sau khi chọn.
- Progress bar cho upload lâu.
- Error per file nếu có nhiều file.

## Validation

- File type, size, count.
- Image dimensions nếu cần.
- Duplicate file handling.
- Virus scan hoặc processing state nếu backend có.
- Retry và remove file.

## Accessibility

- Input file native vẫn accessible.
- Dropzone có button fallback.
- Error message gắn với file cụ thể.
- Progress có label rõ.

## Checklist

- User biết file nào được chấp nhận.
- Upload fail không làm mất selection nếu có thể.
- Preview không làm layout shift lớn.
- Mobile camera/gallery flow ổn.
- Có empty, uploading, success và error state.
