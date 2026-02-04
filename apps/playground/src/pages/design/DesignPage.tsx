import * as React from "react"
import { SidebarLayout } from "../../components/layout/SidebarLayout"
import { designTokens } from "../../data/tokens"
import { TokenTable } from "../../components/design/TokenTable"

export function DesignPage() {
  const [activeId, setActiveId] = React.useState("#intro")

  const brandColors = [
    { name: "Blue", token: "bg-ling-blue", text: "text-white", value: "#4285F4" },
    { name: "Red", token: "bg-ling-red", text: "text-white", value: "#FF5219" },
    { name: "Green", token: "bg-ling-green", text: "text-white", value: "#00B042" },
    { name: "Yellow", token: "bg-ling-yellow", text: "text-white", value: "#FF9200" },
  ]

  const neutralColors = [
    { name: "White", token: "bg-ling-white", text: "text-ling-black", value: "#FFFFFF", border: true },
    { name: "Black", token: "bg-ling-black", text: "text-white", value: "#000000" },
    { name: "Gray 333", token: "bg-ling-gray-333", text: "text-white", value: "#333333" },
    { name: "Gray 666", token: "bg-ling-gray-666", text: "text-white", value: "#666666" },
    { name: "Gray 999", token: "bg-ling-gray-999", text: "text-white", value: "#999999" },
    { name: "Gray DDD", token: "bg-ling-gray-ddd", text: "text-ling-black", value: "#DDDDDD" },
    { name: "Gray F0", token: "bg-ling-gray-f0", text: "text-ling-black", value: "#F0F0F0" },
    { name: "Gray F8", token: "bg-ling-gray-f8", text: "text-ling-black", value: "#F8F8F8" },
  ]

  const typography = [
    { role: "H1", token: "text-ling-h1", size: "32px", weight: "Regular", sample: "一级标题 Heading 1" },
    { role: "H2", token: "text-ling-h2", size: "24px", weight: "Regular", sample: "二级标题 Heading 2" },
    { role: "H3", token: "text-ling-h3", size: "18px", weight: "Regular", sample: "三级标题 Heading 3" },
    { role: "H4", token: "text-ling-h4", size: "16px", weight: "Regular", sample: "四级标题 Heading 4" },
    { role: "Body", token: "text-ling-body", size: "14px", weight: "Regular", sample: "正文 Body Text - Ling Design 致力于提供优雅的阅读体验。" },
    { role: "Tag", token: "text-ling-tag", size: "12px", weight: "Regular", sample: "标签 Tag Text" },
  ]

  const spacing = [
    { name: "Small", token: "w-ling-small h-ling-small", value: "4px" },
    { name: "Standard", token: "w-ling-std h-ling-std", value: "8px" },
    { name: "Large", token: "w-ling-large h-ling-large", value: "16px" },
    { name: "X-Large", token: "w-ling-xl h-ling-xl", value: "32px" },
  ]

  const radius = [
    { name: "Small", token: "rounded-ling-small", value: "2px" },
    { name: "Medium", token: "rounded-ling-medium", value: "4px" },
    { name: "Standard", token: "rounded-ling-std", value: "6px" },
    { name: "Large", token: "rounded-ling-large", value: "8px" },
  ]

  const navItems = [
    { title: "首页", href: "#intro" },
    { title: "色彩体系", href: "#colors" },
    { title: "字体排印", href: "#typography" },
    { title: "间距", href: "#spacing" },
    { title: "圆角", href: "#radius" },
  ]

  const isHome = activeId === "#intro"

  return (
    <SidebarLayout
      items={navItems}
      activeItem={activeId}
      onNavigate={(href) => setActiveId(href)}
      title={isHome ? "设计语言" : undefined}
      description={isHome ? "Ling Design 的设计价值观：确定、自然、简洁。遵循统一的设计规范，确保体验的一致性。" : undefined}
    >
      {isHome && (
        <div className="mb-8 rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
          <p>以下内容源自 <code className="bg-blue-100 px-1 py-0.5 rounded">ling-design-tokens-skill/references</code> 文档，是设计规范的单一信源。</p>
        </div>
      )}

      {activeId === "#intro" && (
        <section id="intro" className="space-y-12 animate-in fade-in duration-500">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-ling-gray-f8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">确定性</h3>
              <p className="text-ling-gray-666 text-sm">保持设计意图的一致性，通过严谨的逻辑推导和规范约束，消除用户在使用过程中的不确定感。</p>
            </div>
            <div className="p-6 rounded-2xl bg-ling-gray-f8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">自然</h3>
              <p className="text-ling-gray-666 text-sm">追求自然的视觉体验和交互反馈，减少认知负担，让用户在直觉中完成操作。</p>
            </div>
            <div className="p-6 rounded-2xl bg-ling-gray-f8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">简洁</h3>
              <p className="text-ling-gray-666 text-sm">去除冗余信息，聚焦核心任务。通过清晰的视觉层级和高效的内容组织，提升整体效率。</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">设计原则</h2>
            <div className="prose prose-ling max-w-none text-ling-gray-666">
              <p>Ling Design 是一套服务于企业级产品的设计规范。我们致力于通过模块化的设计语言，帮助开发者快速构建一致、高效、美观的 Web 应用。</p>
              <ul>
                <li><strong>模块化思维</strong>：将复杂的 UI 拆解为原子、分子、组织，实现高复用。</li>
                <li><strong>Token 驱动</strong>：所有的设计属性（颜色、字体、间距）均由 Token 管理，确保多端一致。</li>
                <li><strong>辅助功能优先</strong>：关注色彩对比度、键盘导航等，确保产品的普适性。</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeId === "#colors" && (
        <section id="colors" className="space-y-8 animate-in fade-in duration-500">
          <h2 className="text-ling-h2 font-semibold text-ling-gray-333">色彩体系 (Colors)</h2>
          
          <div className="space-y-4">
            <h3 className="text-ling-h3 font-medium text-ling-gray-666">品牌色 & 状态色</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {brandColors.map((color) => (
                <div key={color.name} className="space-y-3 group">
                  <div 
                    className={`h-24 rounded-ling-std flex items-center justify-center shadow-sm ${color.token} ${color.text} transition-transform group-hover:scale-[1.02]`}
                  >
                    <span className="font-medium">{color.name}</span>
                  </div>
                  <div className="text-sm text-ling-gray-999 flex justify-between px-1">
                    <span>{color.token.replace('bg-', '')}</span>
                    <span className="font-mono">{color.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
               <TokenTable tokens={[...designTokens.colors.primary, ...designTokens.colors.status]} columns={["Name", "Hex", "Alpha"]} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-ling-h3 font-medium text-ling-gray-666">使用场景 (Usage)</h3>
            <TokenTable 
              tokens={designTokens.colors.usage.map(u => ({
                name: u.category,
                value: u.token,
                description: u.value
              }))} 
              columns={["Category", "Token", "Value"]} 
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-ling-h3 font-medium text-ling-gray-666">中性色</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {neutralColors.map((color) => (
                <div key={color.name} className="space-y-2 group">
                  <div 
                    className={`h-16 rounded-ling-medium flex items-center justify-center shadow-sm ${color.token} ${color.text} ${color.border ? 'border border-ling-gray-ddd' : ''}`}
                  >
                  </div>
                  <div className="text-xs text-ling-gray-999 text-center">
                    <div className="font-medium text-ling-gray-666">{color.name}</div>
                    <div className="font-mono scale-90">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <TokenTable tokens={designTokens.colors.neutral} columns={["Name", "Hex", "Value"]} />
            </div>
          </div>
        </section>
      )}

      {activeId === "#typography" && (
        <section id="typography" className="space-y-8 animate-in fade-in duration-500">
          <h2 className="text-ling-h2 font-semibold text-ling-gray-333">字体排印 (Typography)</h2>
          <div className="rounded-ling-large border border-ling-gray-ddd bg-ling-white p-8 space-y-8">
            {typography.map((item) => (
              <div key={item.role} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 pb-6 border-b border-ling-gray-f0 last:border-0 last:pb-0">
                <div className="w-32 shrink-0">
                  <span className="text-ling-gray-999 text-sm block">{item.role}</span>
                  <span className="text-ling-gray-666 text-xs font-mono">{item.size}</span>
                </div>
                <div className={`${item.token} text-ling-gray-333`}>
                  {item.sample}
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-ling-h3 font-medium text-ling-gray-666 mb-4">Font Sizes</h3>
              <TokenTable tokens={designTokens.typography.sizes} />
            </div>
            <div>
              <h3 className="text-ling-h3 font-medium text-ling-gray-666 mb-4">Font Weights</h3>
              <TokenTable tokens={designTokens.typography.weights} />
            </div>
          </div>
        </section>
      )}

      {activeId === "#spacing" && (
        <section id="spacing" className="space-y-8 animate-in fade-in duration-500">
          <h2 className="text-ling-h2 font-semibold text-ling-gray-333">间距 (Spacing)</h2>
          <div className="grid gap-6">
            {spacing.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-24 text-sm text-ling-gray-666">
                  {item.name} <span className="text-ling-gray-999 text-xs">({item.value})</span>
                </div>
                <div className={`bg-ling-blue ${item.token} rounded-sm`}></div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <TokenTable tokens={designTokens.spacing} />
          </div>
        </section>
      )}

      {activeId === "#radius" && (
        <section id="radius" className="space-y-8 animate-in fade-in duration-500">
          <h2 className="text-ling-h2 font-semibold text-ling-gray-333">圆角 (Border Radius)</h2>
          <div className="grid grid-cols-2 gap-6">
            {radius.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className={`h-20 bg-ling-blue ${item.token} flex items-center justify-center text-white text-xs`}>
                </div>
                <div className="text-sm text-ling-gray-666 text-center">
                  {item.name} <span className="text-ling-gray-999 text-xs">({item.value})</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <TokenTable tokens={designTokens.radius} columns={["Name", "Value", "Description"]} />
          </div>
        </section>
      )}
    </SidebarLayout>
  )
}
