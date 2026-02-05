import * as React from "react"
import { cn } from "@ling-design/utils"

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
  const [internalActiveTab, setInternalActiveTab] = React.useState<string>(
    activeTab || (tabs.length > 0 ? tabs[0].key : "")
  )

  React.useEffect(() => {
    if (activeTab !== undefined) {
      setInternalActiveTab(activeTab)
    }
  }, [activeTab])

  const handleTabClick = (key: string) => {
    if (onTabChange) {
      onTabChange(key)
    } else {
      setInternalActiveTab(key)
    }
  }

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
          <div className="flex items-center gap-6 h-full pt-1">
            {tabs.map((tab) => {
              const isActive = internalActiveTab === tab.key
              return (
                <div
                  key={tab.key}
                  className={cn(
                    "relative h-full flex items-center cursor-pointer text-sm transition-colors px-1",
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => handleTabClick(tab.key)}
                >
                  {tab.label}
                  {isActive && (
                    <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary" />
                  )}
                </div>
              )
            })}
          </div>
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
