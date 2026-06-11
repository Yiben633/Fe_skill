---
name: component-structure
description: Hướng dẫn kiến trúc component frontend và cấu trúc cây file. Dùng khi tạo hoặc refactor UI project, chọn folder, tách components, pages, hooks, styles, assets, animations, utilities và design tokens.
---

# Cấu Trúc Component

Sắp xếp code frontend theo trách nhiệm sở hữu và khả năng tái sử dụng.

## Cây Thư Mục Đề Xuất

```text
src/
|-- app/ or pages/        màn hình cấp route
|-- components/
|   |-- ui/               control nguyên thủy có thể tái sử dụng
|   |-- layout/           nav, shell, footer, sidebars
|   `-- sections/         section trong page có nội dung theo domain
|-- features/             tính năng sản phẩm có state
|-- hooks/                logic tương tác có thể tái sử dụng
|-- lib/                  helpers, formatters, config
|-- styles/               global styles và tokens
|-- animations/           variants, timelines, motion helpers
`-- assets/               images, icons, fonts, static media
```

## Ranh Giới

- Đặt phần compose route trong pages hoặc app files.
- Đặt visual primitive có thể tái sử dụng trong `components/ui`.
- Đặt section theo domain trong `components/sections` hoặc `features`.
- Không đưa business logic vào presentational components.
- Giữ animation variants gần component, trừ khi variant được dùng chung ở nhiều khu vực.
- Chỉ dùng export qua `index` khi repo đã theo pattern barrel exports.

## Đặt Tên

- Dùng PascalCase cho components.
- Dùng camelCase cho hooks, helpers và variants.
- Dùng kebab-case cho tên file asset.
- Đặt tên file theo component hoặc concept export chính.

## Checklist Component

- Nhận data qua props thay vì hardcode nội dung lặp lại.
- Expose `className` khi component cần cho phép mở rộng styling cục bộ.
- Giữ API component nhỏ và rõ.
- Chưa tạo abstraction trước khi có ít nhất hai call site thật sự cần nó.
- Thêm test cho shared logic, tương tác rủi ro cao, hoặc stateful components.
