# StandardPage Component

StandardPage 是 Ling Design 系统的核心页面布局组件，提供统一的标准页面结构。

## 组件结构

```
┌─────────────────────────────────────┐
│         Header (可选)                │
├─────────────────────────────────────┤
│  PageHeader                         │
│  - 面包屑                            │
│  - 页面标题                          │
│  - 工具栏按钮                        │
├─────────────────────────────────────┤
│  Level 2 Menu (可选)                │
│  - NavTabs (卡片式/线条式)          │
├──────────┬──────────────────────────┤
│ DataNav  │    Main Content Area     │
│ (可选)   │                          │
│          │    Your Content          │
└──────────┴──────────────────────────┘
│  Pagination (可选)                  │
└─────────────────────────────────────┘
```

## Props 接口

```typescript
interface StandardPageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 页面标题 */
  pageTitle?: string;
  
  /** 是否显示一级菜单 (Header tabs) */
  showLevel1Menu?: boolean;
  
  /** 是否显示二级菜单 (NavTabs) */
  showLevel2Menu?: boolean;
  
  /** 自定义二级菜单组件 */
  level2Menu?: React.ReactNode;
  
  /** 是否显示工具栏图标 */
  showToolbarIcons?: boolean;
  
  /** 是否显示左侧数据导航 */
  showDataNav?: boolean;
  
  /** DataNav 组件配置 */
  dataNavProps?: {
    items: Array<{
      id: string;
      label: string;
      value: string;
      icon?: React.ReactNode;
    }>;
    title?: string;
    width?: number;
    onSelect?: (value: string) => void;
    [key: string]: any;
  };
}
```

## 使用示例

### 基础列表页

```tsx
<StandardPage pageTitle="用户列表">
  <Table dataSource={users} columns={columns} />
  <Pagination total={100} pageSize={10} />
</StandardPage>
```

### 带分类导航的页面

```tsx
<StandardPage
  pageTitle="数据管理"
  showDataNav={true}
  dataNavProps={{
    items: [
      { id: '1', label: '分类一', value: 'cat1' },
      { id: '2', label: '分类二', value: 'cat2' },
    ],
    title: "数据分类",
    width: 240,
  }}
>
  {/* 根据选中的分类显示内容 */}
</StandardPage>
```

### 带标签页的页面

```tsx
<StandardPage
  pageTitle="系统设置"
  showLevel2Menu={true}
  level2Menu={
    <NavTabs
      variant="card"
      items={[
        { label: "基本设置", value: "basic" },
        { label: "安全设置", value: "security" },
        { label: "通知设置", value: "notification" },
      ]}
    />
  }
>
  {/* 根据选中的标签显示内容 */}
</StandardPage>
```

### 完整配置示例

```tsx
<StandardPage
  pageTitle="业务数据"
  showLevel1Menu={true}
  showLevel2Menu={true}
  level2Menu={
    <NavTabs
      variant="card"
      items={tabItems}
      onValueChange={handleTabChange}
    />
  }
  showDataNav={true}
  dataNavProps={{
    items: categoryItems,
    title: "业务分类",
    width: 240,
    onSelect: handleCategorySelect,
  }}
  showToolbarIcons={true}
>
  {/* 主要内容区域 */}
</StandardPage>
```

## 样式定制

StandardPage 使用 Ling Design 的全局样式变量，可以通过传入 `className` 进行样式覆盖：

```tsx
<StandardPage
  className="bg-custom-background"
  pageTitle="自定义样式页"
>
  {/* ... */}
</StandardPage>
```

## 条件渲染行为

StandardPage 组件会根据传入的 props 自动判断是否渲染各个部分：

- **DataNav 数据导航**: 仅当 `showDataNav={true}` 且 `dataNavProps.items` 存在且长度大于 0 时渲染
- **Level 2 Menu 二级菜单**: 仅当 `showLevel2Menu={true}` 且 `level2Menu` 有值时渲染

这种设计使得第三方调用时无需手动判断数据是否为空，StandardPage 会自动处理。

```tsx
// DataNav 为空时自动隐藏
<StandardPage
  pageTitle="我的页面"
  showDataNav={true}
  dataNavProps={{
    items: [], // 空数组，DataNav 区域不会渲染
  }}
>
  {/* 内容区域会占满全宽 */}
</StandardPage>

// DataNav 有内容时显示
<StandardPage
  pageTitle="我的页面"
  showDataNav={true}
  dataNavProps={{
    items: [
      { id: '1', label: '分类一', value: 'cat1' },
      { id: '2', label: '分类二', value: 'cat2' },
    ], // 有内容，DataNav 区域会渲染
  }}
>
  {/* 内容区域会自动调整宽度 */}
</StandardPage>
```

## 注意事项

1. **响应式设计**: StandardPage 默认支持响应式布局
2. **按需渲染**: 当 `dataNavProps.items` 为空时，数据导航区域会自动隐藏
3. **参数驱动**: 所有的功能模块都通过 props 控制，默认不显示任何可选模块
4. **性能优化**: 使用 React.memo 包装子组件以避免不必要的重渲染
5. **样式隔离**: 确保 App 入口引入了 `@ling-design/core/styles.css`
