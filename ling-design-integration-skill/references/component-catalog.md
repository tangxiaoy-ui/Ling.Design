# Ling Design 组件清单

本文档列出了 `@ling-design/core` 提供的所有可用组件，用于在不使用 StandardPage 时进行页面拼装。

## 布局组件

### StandardPage
**用途**: 标准页面布局容器  
**推荐**: 优先使用此组件作为页面基础  
**文档**: [StandardPage 详解](standard-page.md)

### Header
**用途**: 页面顶部导航栏，包含 Logo、主菜单、用户信息  
**场景**: 自定义全页布局时使用

```tsx
<Header
  logo="/logo.png"
  menuItems={[{ label: '首页', href: '/' }]}
  userMenu={{
    name: '管理员',
    avatar: '/avatar.png'
  }}
/>
```

### PageHeader
**用途**: 页面标题区域，包含面包屑、标题和操作按钮  
**场景**: StandardPage 内部或自定义页面

```tsx
<PageHeader
  title="页面标题"
  breadcrumbs={[
    { label: '首页', href: '/' },
    { label: '当前页' }
  ]}
  actions={<Button>新建</Button>}
  showTabs={false}
/>
```

### DataNav
**用途**: 左侧数据导航侧边栏  
**场景**: 需要分类导航的页面

```tsx
<DataNav
  items={[
    { id: '1', label: '分类一', value: 'cat1' },
    { id: '2', label: '分类二', value: 'cat2' }
  ]}
  title="数据分类"
  width={240}
/>
```

## 导航组件

### NavTabs
**用途**: 标签页导航  
**变体**: line (线条式), card (卡片式), vertical (垂直式), button (按钮式)  
**场景**: 页面内容分类切换

```tsx
<NavTabs
  variant="card"
  items={[
    { label: "标签一", value: "tab1" },
    { label: "标签二", value: "tab2" }
  ]}
  onValueChange={(value) => console.log(value)}
/>
```

### Pagination
**用途**: 数据分页导航  
**场景**: 表格/列表底部

```tsx
<Pagination
  total={100}
  pageSize={10}
  current={1}
  onChange={(page) => console.log(page)}
/>
```

## 数据展示组件

### Table
**用途**: 数据表格  
**功能**: 排序、筛选、选择

```tsx
<Table
  dataSource={data}
  columns={[
    { key: 'name', title: '姓名' },
    { key: 'age', title: '年龄' }
  ]}
  rowKey="id"
/>
```

### Card
**用途**: 内容卡片容器  
**场景**: 信息展示、内容分组

```tsx
<Card>
  <CardHeader>
    <CardTitle>卡片标题</CardTitle>
  </CardHeader>
  <CardContent>卡片内容</CardContent>
</Card>
```

## 表单组件

### Button
**变体**: default, primary, destructive, outline, ghost  
**尺寸**: sm, md, lg

```tsx
<Button variant="primary" size="md">
  提交
</Button>
```

### Input
**类型**: text, password, email, number  
**功能**: 前缀、后缀图标

```tsx
<Input
  placeholder="请输入"
  prefix={<SearchIcon />}
/>
```

### Select
**用途**: 下拉选择框  
**功能**: 单选、多选、搜索

```tsx
<Select
  options={[
    { label: '选项一', value: '1' },
    { label: '选项二', value: '2' }
  ]}
  placeholder="请选择"
/>
```

### Checkbox
**用途**: 复选框

```tsx
<Checkbox checked={false} onChange={(e) => console.log(e.target.checked)}>
  同意协议
</Checkbox>
```

### Radio
**用途**: 单选框组

```tsx
<Radio.Group value="1" onChange={(value) => console.log(value)}>
  <Radio value="1">选项一</Radio>
  <Radio value="2">选项二</Radio>
</Radio.Group>
```

### Textarea
**用途**: 多行文本输入

```tsx
<Textarea
  placeholder="请输入描述"
  rows={4}
/>
```

## 反馈组件

### Dialog
**用途**: 模态对话框  
**功能**: 确认、表单、自定义内容

```tsx
<Dialog open={true} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>确认操作</DialogTitle>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>取消</Button>
      <Button onClick={handleConfirm}>确认</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Toast
**用途**: 消息提示  
**类型**: success, error, warning, info

```tsx
toast.success("操作成功")
toast.error("操作失败")
```

### Alert
**用途**: 页面内提示信息  
**变体**: default, destructive, warning

```tsx
<Alert variant="warning">
  请注意：此操作不可撤销
</Alert>
```

## 其他组件

### Badge
**用途**: 徽章/标记

```tsx
<Badge variant="destructive">5</Badge>
```

### Divider
**用途**: 分割线

```tsx
<Divider />
```

### Skeleton
**用途**: 骨架屏加载占位

```tsx
<Skeleton className="h-12 w-full" />
```

### Tooltip
**用途**: 工具提示

```tsx
<Tooltip content="提示内容">
  <Button>悬停查看</Button>
</Tooltip>
```

## 图标使用

所有图标从 `@ling-design/core` 导入：

```tsx
import { Search, Settings, User } from '@ling-design/core'

<Search className="w-4 h-4" />
<Settings className="w-5 h-5" />
<User className="w-6 h-6" />
```

### 常用图标列表

- 导航类: `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`
- 操作类: `edit`, `delete`, `add`, `search`, `refresh`
- 状态类: `check`, `cross`, `warning`, `information`
- 文件类: `file`, `folder`, `download`, `upload`
- 系统类: `setting`, `logout`, `home-page`

完整图标列表请查看 `packages/core/icons/meta.json`

## 组合示例

### 完整的自定义页面布局

```tsx
import { 
  Header, 
  PageHeader, 
  Button, 
  Table, 
  Pagination,
  NavTabs 
} from '@ling-design/core'

function CustomPage() {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <PageHeader
        title="自定义页面"
        breadcrumbs={[{ label: '首页', href: '/' }]}
        actions={<Button>新建</Button>}
      />
      <div className="p-6">
        <NavTabs variant="card" items={[...]} />
        <Table {...} />
        <Pagination {...} />
      </div>
    </div>
  )
}
```

## 组件使用原则

1. **优先使用 StandardPage**: 90% 的页面应使用 StandardPage
2. **保持一致性**: 使用相同的组件和样式模式
3. **遵循设计规范**: 严格使用 Design Tokens，不要硬编码样式
4. **按需导入**: 支持按需加载，优化打包体积
