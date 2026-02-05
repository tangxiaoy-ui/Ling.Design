# 快速开始指南

## 1. 安装依赖

```bash
# 使用 npm
npm install @ling-design/core @ling-design/config

# 使用 pnpm
pnpm add @ling-design/core @ling-design/config

# 使用 yarn
yarn add @ling-design/core @ling-design/config
```

## 2. 配置 Tailwind CSS

如果你的项目使用 Tailwind CSS，需要在 `tailwind.config.js` 中引入 Ling Design 的配置：

```javascript
import { lingDesignConfig } from '@ling-design/config/tailwind'

export default {
  presets: [lingDesignConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ling-design/core/**/*.{js,ts,jsx,tsx}',
  ],
  // 其他配置...
}
```

## 3. 引入样式

在应用入口文件引入核心样式：

```tsx
// main.tsx 或 App.tsx
import '@ling-design/core/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 4. 创建第一个页面

### 使用 StandardPage（推荐）

```tsx
// pages/UserList.tsx
import { StandardPage, Table, Pagination } from '@ling-design/core'

export function UserList() {
  const columns = [
    { key: 'name', title: '姓名' },
    { key: 'email', title: '邮箱' },
    { key: 'role', title: '角色' },
  ]

  const data = [
    { id: '1', name: '张三', email: 'zhangsan@example.com', role: '管理员' },
    { id: '2', name: '李四', email: 'lisi@example.com', role: '用户' },
  ]

  return (
    <StandardPage pageTitle="用户管理">
      <Table 
        dataSource={data} 
        columns={columns}
        rowKey="id"
      />
      <Pagination 
        total={100} 
        pageSize={10}
        current={1}
      />
    </StandardPage>
  )
}
```

### 自定义布局（高级）

如果 StandardPage 无法满足需求，可以使用组件拼装：

```tsx
// pages/Dashboard.tsx
import { Header, PageHeader, NavTabs } from '@ling-design/core'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto py-6">
        <PageHeader
          title="仪表盘"
          breadcrumbs={[
            { label: '首页', href: '/' },
            { label: '仪表盘' }
          ]}
        />
        <NavTabs
          variant="card"
          items={[
            { label: '概览', value: 'overview' },
            { label: '分析', value: 'analytics' },
          ]}
        />
        {/* 自定义内容 */}
      </main>
    </div>
  )
}
```

## 5. 常见场景示例

### 带分类导航的列表页

```tsx
import { StandardPage, DataNavItem } from '@ling-design/core'

const categories: DataNavItem[] = [
  { id: '1', label: '全部', value: 'all' },
  { id: '2', label: '进行中', value: 'active' },
  { id: '3', label: '已完成', value: 'completed' },
]

export function TaskList() {
  return (
    <StandardPage
      pageTitle="任务管理"
      showDataNav={true}
      dataNavProps={{
        items: categories,
        title: "任务状态",
        width: 200,
      }}
    >
      {/* 任务列表内容 */}
    </StandardPage>
  )
}
```

### 带多级标签的设置页

```tsx
import { StandardPage, NavTabs } from '@ling-design/core'

export function Settings() {
  return (
    <StandardPage
      pageTitle="系统设置"
      showLevel2Menu={true}
      level2Menu={
        <NavTabs
          variant="card"
          items={[
            { label: '基本设置', value: 'basic' },
            { label: '安全设置', value: 'security' },
            { label: '通知设置', value: 'notification' },
          ]}
        />
      }
    >
      {/* 设置表单内容 */}
    </StandardPage>
  )
}
```

## 6. TypeScript 支持

所有组件都提供完整的 TypeScript 类型定义：

```tsx
import type { StandardPageProps, DataNavItem } from '@ling-design/core'

// 使用类型确保 props 正确性
const pageProps: StandardPageProps = {
  pageTitle: "页面标题",
  showDataNav: true,
  dataNavProps: {
    items: [],
    title: "导航",
  }
}
```

## 7. 样式自定义

使用 CSS 变量覆盖主题：

```css
/* app.css */
:root {
  --color-primary: #4285F4;
  --color-background: #F8F8F8;
  --color-muted: #F0F0F0;
}
```

## 8. 故障排查

### 样式未生效

确保已引入样式文件：
```tsx
import '@ling-design/core/styles.css'
```

### 组件无法找到

检查包是否正确安装：
```bash
npm list @ling-design/core
```

### TypeScript 类型错误

确保 `tsconfig.json` 配置正确：
```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

## 9. 下一步

- 查看 [StandardPage 文档](standard-page.md) 了解更多配置选项
- 探索 [设计规范](colors.md) 以确保样式一致性
- 浏览组件库源码以了解更多使用方式
