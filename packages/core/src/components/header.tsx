import * as React from "react"
import { cn } from "@ling-design/utils"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode
  menuItems?: Array<{ label: string; href?: string; active?: boolean }>
  user?: { name: string; avatar?: string }
  /**
   * 使用场景
   * - admin: 后台管理 (固定蓝色背景，不跟随主题)
   * - portal: 前台用户端 (支持深色/浅色模式，跟随主题)
   * @default "portal"
   */
  variant?: "admin" | "portal"
  /**
   * 颜色模式 (仅在 variant="portal" 时生效)
   * - dark: 深色/主色背景 (默认)
   * - light: 浅色/白色背景
   * @default "dark"
   */
  mode?: "dark" | "light"
}

export function Header({ 
  className, 
  logo, 
  menuItems, 
  user, 
  variant = "portal",
  mode = "dark",
  ...props 
}: HeaderProps) {
  // 判断是否为浅色模式 (只有 portal + light 才是浅色表现)
  const isLight = variant === "portal" && mode === "light"
  const isDark = !isLight

  return (
    <header
      className={cn(
        "flex h-16 w-full items-center justify-between px-4 md:px-6 transition-colors border-b",
        // Admin: Fixed Blue #4285F4
        variant === "admin" && "bg-primary text-primary-foreground border-transparent",
        // Portal Dark: Theme Primary
        variant === "portal" && mode === "dark" && "bg-primary text-primary-foreground border-transparent",
        // Portal Light: Background Color
        isLight && "bg-background text-foreground border-border",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-6 md:gap-8">
        {/* Logo Area */}
        <div className="flex items-center">
          {logo}
        </div>

        {/* Menu Area */}
        <nav className="hidden md:flex items-center gap-0">
          {menuItems?.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              className={cn(
                "relative flex h-16 items-center px-4 text-sm transition-colors",
                // Dark Mode Styles
                isDark && "text-white/80 hover:bg-black/10 hover:text-white",
                isDark && item.active && "text-white bg-black/10",
                
                // Light Mode Styles
                !isDark && "text-muted-foreground hover:text-primary",
                !isDark && item.active && "text-primary"
              )}
            >
              {item.label}
              {item.active && !isDark && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
              )}
            </a>
          ))}
        </nav>
      </div>

      {/* Right Area */}
      <div className="flex items-center gap-4">
        {/* Separator */}
        <div className={cn(
          "h-4 w-[1px] hidden sm:block",
          isDark ? "bg-white/20" : "bg-border"
        )}></div>
        
        {/* User Profile */}
        {user && (
          <div className={cn(
            "flex items-center gap-2 cursor-pointer rounded-full py-1 pl-1 pr-2 transition-colors",
            isDark ? "hover:bg-white/10" : "hover:bg-accent"
          )}>
            <span className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium",
              isDark ? "bg-white text-primary" : "bg-primary text-primary-foreground"
            )}>
              {user.avatar?.[0] || user.name?.[0] || "U"}
            </span>
            <span className="text-sm font-medium hidden sm:inline-block">{user.name}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn(
              isDark ? "text-white/80" : "text-muted-foreground"
            )}>
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        )}
      </div>
    </header>
  )
}
