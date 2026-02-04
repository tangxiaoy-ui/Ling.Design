import * as React from "react"
import { cn } from "@ling-design/utils"
import { View as Search, Setting as Filter, TowardsUp as ArrowUpDown, File as LayoutList, ChartHistogram as LayoutGrid, Setting as Settings } from "./icons"
import { Button } from "./button"
import { Input } from "./input"

export interface ListToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
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

export function ListToolbar({
  className,
  onSearch,
  searchPlaceholder = "搜标题",
  showFilter = true,
  onFilter,
  showSort = true,
  onSort,
  actions,
  showViewToggle = true,
  viewMode = "list",
  onViewModeChange,
  showSettings = true,
  onSettings,
  extra,
  ...props
}: ListToolbarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 bg-card border-b border-border",
        className
      )}
      {...props}
    >
      {/* Left Section: Search & Filters */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="w-[240px]">
          <Input 
            placeholder={searchPlaceholder} 
            icon={<Search size={16} />} 
            onChange={(e) => onSearch && onSearch(e.target.value)}
          />
        </div>
        
        {/* Filter */}
        {showFilter && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground gap-2 h-9"
            onClick={onFilter}
          >
            <Filter size={16} />
            <span>筛选</span>
          </Button>
        )}
        
        {/* Sort */}
        {showSort && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground gap-2 h-9"
            onClick={onSort}
          >
            <ArrowUpDown size={16} />
            <span>排序</span>
          </Button>
        )}
      </div>

      {/* Right Section: Actions & Tools */}
      <div className="flex items-center gap-3">
        {/* Primary Actions */}
        {actions && (
          <div className="flex items-center gap-3 mr-1">
            {actions}
          </div>
        )}

        {/* Divider */}
        {(showViewToggle || showSettings) && actions && (
          <div className="w-px h-4 bg-border mx-1" />
        )}

        {/* View Toggles */}
        {showViewToggle && (
          <div className="flex items-center border border-border rounded-md p-0.5 bg-muted/50">
            <button
              onClick={() => onViewModeChange && onViewModeChange("list")}
              className={cn(
                "p-1.5 rounded-sm transition-all",
                viewMode === "list" 
                  ? "bg-card text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              title="列表视图"
            >
              <LayoutList size={16} />
            </button>
            <button
              onClick={() => onViewModeChange && onViewModeChange("grid")}
              className={cn(
                "p-1.5 rounded-sm transition-all",
                viewMode === "grid" 
                  ? "bg-card text-primary shadow-sm" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
              title="卡片视图"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
        )}

        {/* Settings */}
        {showSettings && (
          <button
            onClick={onSettings}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            title="设置"
          >
            <Settings size={18} />
          </button>
        )}
        
        {extra}
      </div>
    </div>
  )
}
