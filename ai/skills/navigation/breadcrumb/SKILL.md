---
name: breadcrumb
description: Hướng dẫn frontend cho breadcrumb navigation, đường dẫn phân cấp, page hierarchy, back path và contextual navigation. Dùng khi xây dựng breadcrumb cho dashboard, docs, ecommerce, admin detail page, nested content hoặc app có nhiều cấp điều hướng.
---

# Breadcrumb

Breadcrumb cho người dùng biết vị trí hiện tại trong cấu trúc lớn và giúp quay lại cấp cha nhanh hơn.

## Khi Dùng

- Trang chi tiết nằm sâu trong nhiều cấp.
- Docs hoặc content có hierarchy rõ.
- Ecommerce có category/subcategory/product.
- Admin dashboard có organization, project, resource, detail.
- Flow cần người dùng quay lại cấp cha mà không mất ngữ cảnh.

## Cấu Trúc

- Home hoặc root label.
- Các cấp cha theo thứ tự từ rộng đến hẹp.
- Current page ở cuối, thường không clickable.
- Separator nhất quán như `/`, chevron hoặc icon nhỏ.
- Truncate cấp quá dài nhưng giữ current page dễ đọc.

## Quy Tắc

- Breadcrumb phản ánh hierarchy, không phản ánh lịch sử click.
- Không thay thế primary navigation.
- Chỉ hiển thị khi có ít nhất 2-3 cấp có ý nghĩa.
- Label phải giống tên page hoặc resource thật.
- Với dynamic resource, ưu tiên tên dễ hiểu hơn ID thô.

## Responsive

- Mobile có thể rút gọn middle items thành ellipsis.
- Current page có thể xuống dòng nếu dài nhưng không phá layout.
- Hit target cho item clickable đủ dễ chạm.
- Tránh breadcrumb quá dài đẩy tiêu đề chính ra khỏi viewport.

## Accessibility

- Bọc bằng `nav` có `aria-label="Breadcrumb"`.
- Current item dùng `aria-current="page"`.
- Separator chỉ trang trí thì ẩn với screen reader.
- Link focus state phải nhìn thấy.

## Checklist

- Người dùng hiểu cấp cha của page hiện tại.
- Current page không bị nhầm là link.
- Label dynamic không trống trong loading state.
- Truncate không làm mất nghĩa quan trọng.
- Breadcrumb không chiếm quá nhiều chiều cao.
