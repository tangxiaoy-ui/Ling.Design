import * as React from "react"
import { cn } from "@ling-design/utils"
import { 
  ArrowDown as ChevronDown, 
  ArrowRight as ChevronRight, 
  Folder, 
  File as FileText, 
  FileAdd as Plus, 
  Information as MoreHorizontal, 
  View as Search 
} from "./icons"
import { Input } from "./input"

export interface DataNavItem {
  key: string
  label: string
  icon?: React.ReactNode
  children?: DataNavItem[]
  disabled?: boolean
}

export interface DataNavProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  title?: string
  items: DataNavItem[]
  activeKey?: string
  defaultOpenKeys?: string[]
  onSelect?: (key: string) => void
  width?: number | string
  showSearch?: boolean
}

export function DataNav({
  className,
  title = "树标题",
  items,
  activeKey,
  defaultOpenKeys = [],
  onSelect,
  width = "100%",
  showSearch = true,
  ...props
}: DataNavProps) {
  const [openKeys, setOpenKeys] = React.useState<string[]>(defaultOpenKeys)
  const [internalActiveKey, setInternalActiveKey] = React.useState<string>(activeKey || "")
  const [searchValue, setSearchValue] = React.useState("")

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

  // Filter items based on search value
  const filterItems = (items: DataNavItem[]): DataNavItem[] => {
    if (!searchValue) return items

    return items.reduce<DataNavItem[]>((acc, item) => {
      const matchesSearch = item.label.toLowerCase().includes(searchValue.toLowerCase())
      const filteredChildren = item.children ? filterItems(item.children) : []
      
      if (matchesSearch || filteredChildren.length > 0) {
        acc.push({
          ...item,
          children: filteredChildren.length > 0 ? filteredChildren : item.children
        })
      }
      return acc
    }, [])
  }

  const displayItems = React.useMemo(() => filterItems(items), [items, searchValue])

  // Automatically expand parents if child matches search
  React.useEffect(() => {
    if (searchValue) {
      const keysToOpen: string[] = []
      const traverse = (items: DataNavItem[]) => {
        items.forEach(item => {
          if (item.children && item.children.length > 0) {
            keysToOpen.push(item.key)
            traverse(item.children)
          }
        })
      }
      traverse(displayItems)
      setOpenKeys(prev => Array.from(new Set([...prev, ...keysToOpen])))
    }
  }, [searchValue, displayItems])

  const renderItem = (item: DataNavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isOpen = openKeys.includes(item.key)
    const isActive = internalActiveKey === item.key

    return (
      <div key={item.key} className="w-full select-none">
        <div
          className={cn(
            "group flex items-center justify-between py-2 px-3 cursor-pointer transition-colors text-sm rounded-md mx-2",
            // Active State
            isActive && "bg-primary/10 text-primary",
            // Hover State
            !isActive && "hover:bg-muted text-foreground"
          )}
          style={{ paddingLeft: `${level * 20 + 12}px` }}
          onClick={(e) => {
            e.stopPropagation()
            handleSelect(item.key)
            if (hasChildren) {
              toggleOpen(item.key)
            }
          }}
        >
          <div className="flex items-center gap-2 overflow-hidden w-full">
            {/* Arrow */}
            <span 
              className={cn(
                "flex-shrink-0 w-4 h-4 flex items-center justify-center transition-transform",
                !hasChildren && "invisible"
              )}
              onClick={(e) => {
                e.stopPropagation()
                toggleOpen(item.key)
              }}
            >
              {isOpen ? (
                <ChevronDown size={14} className="text-muted-foreground" />
              ) : (
                <ChevronRight size={14} className="text-muted-foreground" />
              )}
            </span>

            {/* Icon */}
            <span className={cn(
              "flex-shrink-0",
              isActive ? "text-primary" : "text-primary"
            )}>
              {item.icon || (hasChildren ? <Folder size={16} fill="currentColor" className="opacity-20" /> : <FileText size={16} />)}
            </span>

            {/* Label */}
            <span className="truncate">{item.label}</span>
          </div>
        </div>

        {/* Children */}
        {hasChildren && isOpen && (
          <div className="w-full">
            {item.children!.map((child) => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div 
      className={cn("flex flex-col bg-card h-full border-r border-border", className)}
      style={{ width }}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="font-medium text-foreground">{title}</span>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-muted rounded text-muted-foreground transition-colors">
            <Plus size={16} />
          </button>
          <button className="p-1 hover:bg-muted rounded text-muted-foreground transition-colors">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Search */}
      {showSearch && (
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="请输入" 
              className="pl-9 h-9 bg-muted/50 border-border focus:bg-card"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Tree List */}
      <div className="flex-1 overflow-y-auto py-2">
        {displayItems.length > 0 ? (
          displayItems.map((item) => renderItem(item))
        ) : (
          <div className="text-center py-8 text-muted-foreground text-sm">
            暂无数据
          </div>
        )}
      </div>
    </div>
  )
}
