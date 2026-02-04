import React, { useState } from "react"
import * as LingCore from "@ling-design/core"
// @ts-ignore
import { iconsMeta } from "@ling-design/core/src/components/icons/meta"
import { Input } from "@ling-design/core"

export function IconsPage() {
  const [search, setSearch] = useState("")
  const [copied, setCopied] = useState<string | null>(null)

  // Group icons by category
  const groupedIcons = Object.entries(iconsMeta).reduce((acc, [key, meta]: [string, any]) => {
    const category = meta.category || "Uncategorized"
    if (!acc[category]) {
      acc[category] = []
    }
    
    // Filter by search
    if (search && !meta.name.toLowerCase().includes(search.toLowerCase()) && !meta.description.toLowerCase().includes(search.toLowerCase())) {
      return acc
    }

    acc[category].push({
      key,
      ...meta,
      Component: (LingCore as any)[meta.name]
    })
    return acc
  }, {} as Record<string, any[]>)

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`<${name} />`)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="container py-10 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">图标库</h1>
          <p className="text-muted-foreground text-lg mt-2">
            Ling Design 官方图标库，提供 SVG 矢量图标，支持 React 组件方式引入。
          </p>
        </div>
        <div className="max-w-md">
          <Input 
            placeholder="搜索图标名称或描述..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {Object.entries(groupedIcons).map(([category, icons]) => {
        if (icons.length === 0) return null
        
        return (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold border-b border-border pb-2">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {icons.map((icon) => (
                <div 
                  key={icon.key}
                  className="group relative flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all cursor-pointer"
                  onClick={() => handleCopy(icon.name)}
                >
                  <div className="mb-3 text-primary transition-transform group-hover:scale-110">
                    {icon.Component && <icon.Component size={32} />}
                  </div>
                  <div className="text-xs font-medium text-center truncate w-full">
                    {icon.name}
                  </div>
                  <div className="text-[10px] text-muted-foreground text-center truncate w-full mt-1">
                    {icon.description}
                  </div>
                  
                  {/* Copy Feedback */}
                  {copied === icon.name && (
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/90 text-primary-foreground rounded-lg text-sm font-medium animate-in fade-in zoom-in duration-200">
                      已复制
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {Object.values(groupedIcons).every(icons => icons.length === 0) && (
        <div className="text-center py-20 text-muted-foreground">
          未找到匹配的图标
        </div>
      )}
    </div>
  )
}
