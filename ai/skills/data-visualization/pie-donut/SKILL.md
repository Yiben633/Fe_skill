---
name: pie-donut
description: Hướng dẫn frontend cho pie chart, donut chart, part-to-whole visualization, percentage breakdown và categorical share. Dùng khi cần hiển thị tỷ trọng của một tổng thể với ít category.
---

# Pie Donut

Pie/donut chỉ tốt khi có ít phần và mục tiêu là đọc tỷ trọng tổng quan. Nếu cần so sánh chính xác, bar chart thường tốt hơn.

## Khi Dùng

- 2-5 category chính.
- Share of total.
- Breakdown nhanh trong card/dashboard.
- Donut center label cho total hoặc primary share.

## Không Nên Dùng

- Quá nhiều category.
- Values gần nhau cần so sánh chính xác.
- Category có thứ tự thời gian.
- Khi tổng không rõ hoặc phần không cộng về 100%.

## Layout

- Label trực tiếp nếu đủ chỗ.
- Legend rõ nếu label ngoài chart.
- Donut hole có thể chứa total hoặc insight chính.
- Slice nhỏ gom thành "Other" nếu cần.
- Màu phải có mapping ổn định.

## Accessibility

- Cung cấp percentage và raw value.
- Không chỉ dùng màu.
- Tooltip có category, value, percent.
- Text summary mô tả phần lớn nhất.

## Checklist

- Tổng thể là gì được nói rõ.
- Số category không quá nhiều.
- Slice nhỏ không mất nghĩa.
- Legend không xa chart quá mức.
- Mobile label không overlap.
