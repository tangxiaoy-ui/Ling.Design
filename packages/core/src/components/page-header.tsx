import * as React from "react"
import { cn } from "@ling-design/utils"

import { NavTabs } from "./nav-tabs"

export interface PageHeaderTab {
  key: string
  label: string
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  tabs?: PageHeaderTab[]
  activeTab?: string
  onTabChange?: (key: string) => void
  showTabs?: boolean
  extra?: React.ReactNode
  showExtra?: boolean
}

export function PageHeader({
  className,
  title,
  tabs = [],
  activeTab,
  onTabChange,
  showTabs = true,
  extra,
  showExtra = true,
  ...props
}: PageHeaderProps) {
  // Map PageHeader tabs to NavTabs items
  const navItems = React.useMemo(() => {
    return tabs.map((tab) => ({
      label: tab.label,
      value: tab.key,
    }))
  }, [tabs])

  return (
    <div
      className={cn(
        "flex items-center justify-between h-14",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-8 h-full">
        {/* Title - Always visible */}
        <h1 className="text-base font-bold text-foreground shrink-0">
          {title}
        </h1>

        {/* Tabs - Optional & Toggleable */}
        {showTabs && tabs.length > 0 && (
          <NavTabs
            items={navItems}
            value={activeTab}
            defaultValue={tabs[0]?.key}
            onValueChange={onTabChange}
            variant="line"
            className="h-full border-b-0"
          />
        )}
      </div>

      {/* Extra Content (e.g. New User Guide) - Optional & Toggleable */}
      {showExtra && extra && (
        <div className="flex items-center">
          {extra}
        </div>
      )}
    </div>
  )
}
