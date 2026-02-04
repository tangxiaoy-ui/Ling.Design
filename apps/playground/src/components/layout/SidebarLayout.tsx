import * as React from "react"
import { cn } from "@ling-design/utils"

export interface SidebarItem {
  title: string
  href: string
  items?: SidebarItem[]
}

interface SidebarLayoutProps {
  items: SidebarItem[]
  children: React.ReactNode
  title?: string
  description?: string
  activeItem?: string
  onNavigate?: (href: string) => void
}

export function SidebarLayout({ items, children, title, description, activeItem, onNavigate }: SidebarLayoutProps) {
  const [internalActiveId, setInternalActiveId] = React.useState<string>("")
  
  // Use controlled active state if provided, otherwise internal state
  const currentActiveId = activeItem ? activeItem.replace('#', '') : internalActiveId

  React.useEffect(() => {
    // Only enable scroll spy if not in controlled mode (no onNavigate provided)
    if (onNavigate) return

    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]")
      let current = ""
      
      // Find the section that is currently most visible
      sections.forEach((section) => {
        const element = section as HTMLElement
        const rect = element.getBoundingClientRect()
        // Check if element is in upper part of viewport
        if (rect.top <= 150 && rect.bottom >= 100) {
          current = element.getAttribute("id") || ""
        }
      })
      
      if (current) setInternalActiveId(current)
    }

    window.addEventListener("scroll", handleScroll)
    // Trigger once on mount to set initial active state
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [onNavigate])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    if (onNavigate) {
      onNavigate(href)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    // Scroll spy logic
    const id = href.substring(1)
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Header height + padding
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setInternalActiveId(id)
      // Update URL hash without scrolling
      history.pushState(null, "", href)
    }
  }

  return (
    <div className="flex w-full gap-0">
      {/* Sidebar */}
      <aside className="sticky top-[3.5rem] hidden h-[calc(100vh-3.5rem)] shrink-0 overflow-y-auto border-r border-border pl-8 lg:block">
        <nav className="space-y-6 py-4 pr-4">
          <div className="space-y-1">
            {items.map((item) => (
              <div key={item.title}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={cn(
                    "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                    currentActiveId === item.href.replace('#', '') 
                      ? "bg-secondary text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </a>
                
                {item.items && item.items.length > 0 && (
                  <div className="mt-1 ml-3 space-y-1 border-l border-border pl-3">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        onClick={(e) => handleLinkClick(e, subItem.href)}
                        className={cn(
                          "group flex w-full items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground",
                          currentActiveId === subItem.href.replace('#', '')
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 bg-white p-4">
         {title && (
            <div className="mb-12 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
                {description && (
                    <p className="text-muted-foreground text-lg max-w-2xl">{description}</p>
                )}
            </div>
         )}
         <div className={cn("pb-20", onNavigate ? "space-y-8" : "space-y-20")}>
            {children}
         </div>
      </div>
    </div>
  )
}
