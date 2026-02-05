import * as React from "react"
import { cn } from "@ling-design/utils"
import { ArrowDown as ChevronDown, ChartHistogram as LayoutGrid, LeftOpen, LeftPackup } from "./icons"

export interface SidebarItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: SidebarItem[]
  disabled?: boolean
}

export interface SidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  title?: string
  items: SidebarItem[]
  activeKey?: string
  defaultOpenKeys?: string[]
  onSelect?: (key: string) => void
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
}

export function Sidebar({
  className,
  title = "菜单标题",
  items,
  activeKey,
  defaultOpenKeys = [],
  onSelect,
  collapsed = false,
  onCollapse,
  ...props
}: SidebarProps) {
  const [openKeys, setOpenKeys] = React.useState<string[]>(defaultOpenKeys)
  const [internalActiveKey, setInternalActiveKey] = React.useState<string>(activeKey || "")

  // Sync internal active key with prop
  React.useEffect(() => {
    if (activeKey !== undefined) {
      setInternalActiveKey(activeKey)
    }
  }, [activeKey])

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  const handleSelect = (key: string) => {
    if (onSelect) {
      onSelect(key)
    }
    setInternalActiveKey(key)
  }

  const renderItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isOpen = openKeys.includes(item.key)
    const isActive = internalActiveKey === item.key
    
    // Check if any child is active to highlight parent
    const isChildActive = (children: SidebarItem[]): boolean => {
      return children.some(child => 
        child.key === internalActiveKey || (child.children && isChildActive(child.children))
      )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isParentActive = hasChildren && isChildActive(item.children!)

    return (
      <div key={item.key} className="w-full">
        <div
          className={cn(
            "group flex items-center justify-between px-4 py-3 cursor-pointer transition-colors text-sm",
            // Active State (Leaf node)
            isActive && !hasChildren && "bg-primary text-primary-foreground",
            // Hover State (Inactive)
            !isActive && "hover:bg-muted text-foreground",
            // Parent Active State (Optional: different style for active parent?)
            // isParentActive && !isActive && "text-primary font-medium",
            // Padding based on level
            level > 0 && "pl-[52px]" // 52px (44+8) indentation for nested items
          )}
          onClick={() => {
            if (hasChildren) {
              toggleOpen(item.key)
            } else {
              handleSelect(item.key)
            }
          }}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Icon - only for top level or if explicitly provided */}
            {level === 0 && (
              <span className={cn(
                "flex-shrink-0",
                isActive && !hasChildren ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
              )}>
                {item.icon || <LayoutGrid size={18} />}
              </span>
            )}
            
            <span className="truncate">{item.label}</span>
          </div>

          {hasChildren && (
            <span className={cn(
              "text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180"
            )}>
              <ChevronDown size={14} />
            </span>
          )}
        </div>

        {/* Children */}
        {hasChildren && isOpen && (
          <div className="animate-in slide-in-from-top-1 duration-200">
            {item.children!.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <aside
      className={cn(
        "flex flex-col w-64 h-full bg-muted border-r border-border transition-all duration-300",
        collapsed && "w-16",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-14 px-4 border-b border-border">
        {!collapsed && (
          <span className="text-foreground truncate">{title}</span>
        )}
        <button
          onClick={() => onCollapse && onCollapse(!collapsed)}
          className="p-1 rounded-md hover:bg-muted text-muted-foreground transition-colors ml-auto"
        >
          {collapsed ? <LeftOpen size={18} /> : <LeftPackup size={18} />}
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto py-2">
        {!collapsed ? (
          items.map((item) => renderItem(item))
        ) : (
          // Collapsed View (Simple Icons)
          <div className="flex flex-col items-center gap-2 pt-2">
            {items.map((item) => (
              <div
                key={item.key}
                className={cn(
                  "p-2 rounded-md cursor-pointer hover:bg-muted relative group",
                  internalActiveKey === item.key ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                )}
                title={item.label}
                onClick={() => handleSelect(item.key)}
              >
                {item.icon || <LayoutGrid size={20} />}
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
