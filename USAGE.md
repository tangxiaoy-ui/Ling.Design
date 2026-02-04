# Ling Design 组件库集成指南

本文档说明如何在外部项目中集成并使用 `@ling-design/core` 组件库。

## 1. 安装依赖

需要安装组件库核心包 (`@ling-design/core`) 和配置包 (`@ling-design/config`)。

```bash
# npm
npm install @ling-design/core @ling-design/config class-variance-authority clsx tailwind-merge lucide-react

# pnpm
pnpm add @ling-design/core @ling-design/config class-variance-authority clsx tailwind-merge lucide-react
```

## 2. 配置 Tailwind CSS

修改项目的 `tailwind.config.js` 文件，引入 Ling Design 的预设配置。

> **关键点**：必须在 `content` 中包含组件库的路径，否则 Tailwind 不会生成组件所需的样式。

```javascript
// tailwind.config.js
const lingConfig = require("@ling-design/config/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. 引入预设 (包含 colors, spacing, radius 等设计规范)
  ...lingConfig,
  
  content: [
    // 你的项目文件
    "./src/**/*.{ts,tsx,jsx,js}",
    
    // 2. 必须包含：Ling Design 组件库源码
    "./node_modules/@ling-design/core/src/**/*.{ts,tsx}"
  ],
  
  theme: {
    extend: {
      // 你可以在这里覆盖或扩展主题
    }
  }
}
```

## 3. 配置全局样式 (CSS Variables)

Ling Design 使用 CSS 变量 (CSS Custom Properties) 来管理颜色和主题。请将以下变量添加到你的全局 CSS 文件中 (例如 `src/index.css` 或 `src/globals.css`)。

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Colors */
    --primary: 217 89% 61%; /* #4285F4 */
    --primary-foreground: 0 0% 100%;

    --destructive: 15 100% 55%; /* #FF5219 */
    --destructive-foreground: 0 0% 100%;

    --success: 142 100% 35%; /* #00B042 */
    --success-foreground: 0 0% 100%;

    --warning: 34 100% 50%; /* #FF9200 */
    --warning-foreground: 0 0% 100%;

    /* Layout Colors */
    --background: 0 0% 97%; /* #F8F8F8 */
    --foreground: 0 0% 20%; /* #333333 */

    --card: 0 0% 100%;
    --card-foreground: 0 0% 20%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 20%;

    --muted: 0 0% 94%; /* #F0F0F0 */
    --muted-foreground: 0 0% 40%; /* #666666 */

    --accent: 0 0% 94%;
    --accent-foreground: 0 0% 20%;

    /* Border & Input */
    --border: 0 0% 87%; /* #DDDDDD */
    --input: 0 0% 87%;
    --ring: 217 89% 61%;

    /* Radius */
    --radius: 6px;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## 4. 快速开始：创建一个标准列表页

使用 `StandardPage` 组件可以快速创建一个包含页头、侧边栏、面包屑、筛选栏和表格的标准页面。

```tsx
import { 
  StandardPage, 
  Header, 
  Sidebar, 
  Button, 
  Badge 
} from "@ling-design/core"

export default function ProjectListPage() {
  return (
    <StandardPage
      // 1. 全局布局
      header={<Header user={{ name: "Admin" }} />}
      sidebar={<Sidebar items={/* sidebar items */} />}
      
      // 2. 页面标题区
      pageHeaderProps={{
        title: "项目管理",
        breadcrumb: [
          { text: "首页", href: "/" },
          { text: "项目列表", active: true }
        ],
        extra: <Button>新建项目</Button>
      }}
      
      // 3. 列表操作栏 (筛选/搜索/排序)
      listToolbarProps={{
        searchPlaceholder: "搜索项目名称...",
        onSearch: (val) => console.log(val),
        showFilter: true,
        onFilter: () => console.log("Filter clicked"),
        showViewToggle: true
      }}
      
      // 4. 表格数据展示
      tableProps={{
        columns: [
          { title: "项目名称", dataIndex: "name", key: "name" },
          { 
            title: "状态", 
            key: "status",
            render: (_, record) => (
              <Badge variant={record.status === 'active' ? 'success' : 'secondary'}>
                {record.status}
              </Badge>
            )
          },
          { title: "创建时间", dataIndex: "createdAt", key: "createdAt" },
        ],
        data: [
          { id: 1, name: "Ling Design System", status: "active", createdAt: "2024-01-01" },
          { id: 2, name: "Old Project", status: "archived", createdAt: "2023-12-01" },
        ]
      }}
      
      // 5. 分页
      paginationProps={{
        currentPage: 1,
        totalPages: 10,
        onPageChange: (page) => console.log(page)
      }}
    />
  )
}
```
