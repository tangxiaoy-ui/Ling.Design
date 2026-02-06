# Component API Reference

> Auto-generated documentation for AI consumption. DO NOT EDIT MANUALLY.

## Badge (badge.tsx)

### Styling Variants
```typescript
// Available variants (from cva)
{
variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // 添加一些常用的状态色，对应截图中的草稿等
        draft: "bg-slate-100 text-slate-500 hover:bg-slate-200",
        success: "bg-green-100 text-green-600 hover:bg-green-200",
        warning: "bg-orange-100 text-orange-600 hover:bg-orange-200", 
        error: "bg-red-100 text-red-600 hover:bg-red-200",
      },
}
```

### `BadgeProps`
```typescript
interface BadgeProps {

}
```

---

## Button (button.tsx)

### Styling Variants
```typescript
// Available variants (from cva)
{
variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-2 py-1", // Vertical 4px, Horizontal 8px
        sm: "h-8 px-2",
        lg: "h-10 px-4",
        icon: "h-8 w-8",
      },
}
```

### `ButtonProps`
```typescript
interface ButtonProps {
  asChild?: boolean
}
```

---

## Data-nav (data-nav.tsx)

### `DataNavItem`
```typescript
interface DataNavItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: DataNavItem[]
  disabled?: boolean
}
```

### `DataNavProps`
```typescript
interface DataNavProps {
  title?: string
  items: DataNavItem[]
  activeKey?: string
  defaultOpenKeys?: string[]
  onSelect?: (key: string) => void
  width?: number | string
  showSearch?: boolean
}
```

---

## Header (header.tsx)

### `HeaderProps`
```typescript
interface HeaderProps {
  logo?: React.ReactNode
  menuItems?: Array<{ label: string; href?: string; active?: boolean 
}
```

---

## Input (input.tsx)

### `InputProps`
```typescript
interface InputProps {
  icon?: React.ReactNode
}
```

---

## List-toolbar (list-toolbar.tsx)

### `ListToolbarProps`
```typescript
interface ListToolbarProps {
  onSearch?: (value: string) => void
  searchPlaceholder?: string
  showFilter?: boolean
  onFilter?: () => void
  showSort?: boolean
  onSort?: () => void
  actions?: React.ReactNode
  showViewToggle?: boolean
  viewMode?: "list" | "grid"
  onViewModeChange?: (mode: "list" | "grid") => void
  showSettings?: boolean
  onSettings?: () => void
  extra?: React.ReactNode
}
```

---

## Nav-tabs (nav-tabs.tsx)

### Styling Variants
```typescript
// Available variants (from cva)
{
variant: {
      line: "items-center gap-8 border-b border-border/40",
      card: "items-center gap-2 bg-muted/50",
      vertical: "flex-col w-full bg-background",
      button: "inline-flex items-center -space-x-px",
    },
}
```

### `NavTabItem`
```typescript
interface NavTabItem {
  label: React.ReactNode
  value: string
  disabled?: boolean
}
```

### `NavTabsProps`
```typescript
interface NavTabsProps {
  items?: NavTabItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}
```

---

## Page-header (page-header.tsx)

### `PageHeaderTab`
```typescript
interface PageHeaderTab {
  key: string
  label: string
}
```

### `PageHeaderProps`
```typescript
interface PageHeaderProps {
  title: string
  tabs?: PageHeaderTab[]
  activeTab?: string
  onTabChange?: (key: string) => void
  showTabs?: boolean
  extra?: React.ReactNode
  showExtra?: boolean
}
```

---

## Pagination (pagination.tsx)

### `PaginationProps`
```typescript
interface PaginationProps {
  current?: number
  pageSize?: number
  total?: number
  defaultCurrent?: number
  defaultPageSize?: number
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
  showSizeChanger?: boolean
  pageSizeOptions?: number[]
  showQuickJumper?: boolean
  showRefresh?: boolean
  onRefresh?: () => void
}
```

---

## Select (select.tsx)

### Styling Variants
```typescript
// Available variants (from cva)
{
size: {
        default: "h-9",
        sm: "h-8 px-2 text-xs",
        lg: "h-10 px-4",
      },
}
```

---

## Sidebar (sidebar.tsx)

### `SidebarItem`
```typescript
interface SidebarItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: SidebarItem[]
  disabled?: boolean
}
```

### `SidebarProps`
```typescript
interface SidebarProps {
  title?: string
  items: SidebarItem[]
  activeKey?: string
  defaultOpenKeys?: string[]
  onSelect?: (key: string) => void
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
}
```

---

## Standard-page (standard-page.tsx)

### `StandardPageProps`
```typescript
interface StandardPageProps {
  // Global Layout
  header?: React.ReactNode
  sidebar?: React.ReactNode
  // Page Header Area
  showLevel1Menu?: boolean
  pageHeaderProps?: PageHeaderProps
  // Secondary Nav
  showLevel2Menu?: boolean
  level2Menu?: React.ReactNode
  // Content Layout
  showDataNav?: boolean
  dataNavProps?: DataNavProps
  // Toolbar Area
  listToolbarProps?: ListToolbarProps
  showToolbarIcons?: boolean
  // Main Content
  tableProps?: TableProps<any>
  paginationProps?: PaginationProps
  // Custom Content (if not using Table/Toolbar standard layout)
  children?: React.ReactNode
}
```

---

## Switch (switch.tsx)

### Styling Variants
```typescript
// Available variants (from cva)
{
size: {
        default: "h-6 w-11",
        sm: "h-5 w-9",
      },
}
```

### `SwitchProps`
```typescript
interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}
```

---

## Table (table.tsx)

### Styling Variants
```typescript
// Available variants (from cva)
{
variant: {
      default: "",
    },
}
```

### `TableColumn`
```typescript
interface TableColumn {
  title: React.ReactNode
  dataIndex?: keyof T
  key?: string
  width?: string | number
  align?: "left" | "center" | "right"
  render?: (value: any, record: T, index: number) => React.ReactNode
  sortable?: boolean
}
```

### `TableProps`
```typescript
interface TableProps {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: string | ((record: T) => string)
  variant?: "default"
  bordered?: boolean
  striped?: boolean
  showRowSelector?: boolean
  selectedRowKeys?: string[]
  onSelectionChange?: (selectedRowKeys: string[]) => void
}
```

---

