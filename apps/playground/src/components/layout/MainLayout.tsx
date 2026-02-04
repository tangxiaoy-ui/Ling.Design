import { Link, Outlet, useLocation } from "react-router-dom"
import { cn } from "@ling-design/utils"

export function MainLayout() {
  const location = useLocation()
  const currentPath = location.pathname

  const tabs = [
    { name: "设计语言", path: "/design" },
    { name: "组件", path: "/components" },
    { name: "图标库", path: "/icons" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-8">
          <div className="mr-8 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Ling Design
            </span>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  currentPath.startsWith(tab.path)
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                )}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-screen-2xl p-0">
        <Outlet />
      </main>
    </div>
  )
}
