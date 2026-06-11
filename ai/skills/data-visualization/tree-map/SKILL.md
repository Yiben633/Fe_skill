---
name: tree-map
description: Hướng dẫn frontend cho treemap, hierarchical area chart, nested proportions, category breakdown và size-based hierarchy visualization. Dùng khi cần hiển thị tỷ trọng trong dữ liệu phân cấp bằng diện tích.
---

# Tree Map

Treemap giúp thấy tỷ trọng trong cấu trúc phân cấp, nhưng khó đọc chính xác. Dùng khi pattern tổng quan quan trọng hơn so sánh từng giá trị nhỏ.

## Khi Dùng

- Portfolio/category breakdown.
- Storage or cost by group.
- Market share trong nhiều nhóm.
- Hierarchical data có parent/child.
- Dashboard cần thấy nhóm lớn/nhỏ nhanh.

## Layout

- Rectangle area encode value.
- Label chỉ hiện khi đủ chỗ.
- Tooltip cho cell nhỏ.
- Parent groups có boundary hoặc heading rõ.
- Color encode category hoặc intensity, không cả hai nếu gây rối.

## Data Rules

- Không dùng với quá nhiều node nhỏ không quan trọng.
- Gom item nhỏ thành "Other" nếu cần.
- Sort/group theo hierarchy thật.
- Value phải non-negative.
- Missing/zero data xử lý riêng.

## Accessibility

- Có summary và table fallback nếu cần.
- Tooltip có path đầy đủ: parent > child.
- Không chỉ dùng màu để truyền category quan trọng.
- Keyboard inspect nếu cell tương tác.

## Checklist

- Nhóm lớn nhất thấy rõ.
- Label không overlap.
- Cell nhỏ vẫn inspect được.
- Hierarchy không bị mất nghĩa.
- Mobile có fallback hoặc simplified view.
