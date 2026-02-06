import React, { useState } from "react"
import { Button, Header, Sidebar, PageHeader, ListToolbar, Pagination, Table, Badge, Switch, Input, DataNav, StandardPage, NavTabs, ChartHistogram as LayoutGrid, Folder, File as FileText, Setting as Settings, ChartHistogram as BarChart, BookMark as BookOpen, type TableColumn, type DataNavItem } from "@ling-design/core"
import { SidebarLayout, SidebarItem } from "../../components/layout/SidebarLayout"
import { BusinessHeader } from "../../components/blocks/BusinessHeader"

const componentDependencies: Record<string, { name: string, desc: string }[]> = {
  "ListToolbar": [
    { name: "Input", desc: "用于搜索框" },
    { name: "Button", desc: "用于筛选/排序按钮" }
  ],
  "StandardPage": [
    { name: "Header", desc: "全局页头" },
    { name: "Sidebar", desc: "侧边导航" },
    { name: "PageHeader", desc: "内容区页头" },
    { name: "NavTabs", desc: "二级导航" },
    { name: "DataNav", desc: "左侧数据导航" },
    { name: "ListToolbar", desc: "列表操作栏" },
    { name: "Table", desc: "数据列表" },
    { name: "Pagination", desc: "分页" }
  ],
  "NavTabs": [],
  "Table": [
    { name: "Badge", desc: "状态徽标" },
    { name: "Switch", desc: "开关列" },
    { name: "Button", desc: "操作按钮" }
  ],
  "Pagination": [
    { name: "Button", desc: "翻页按钮" }
  ],
  "Header": [
    { name: "Button", desc: "操作按钮" }
  ],
  "DataNav": [
    { name: "Input", desc: "搜索框" }
  ],
  "Sidebar": [],
  "PageHeader": [],
  "Input": [],
  "Button": [],
  "Badge": [],
  "Switch": []
}

export function ComponentsPage() {
  const [activeId, setActiveId] = useState("#overview")
  
  // StandardPage demo states
  const [showDataNav, setShowDataNav] = useState(true)
  const [showLevel1Menu, setShowLevel1Menu] = useState(true)
  const [showLevel2Menu, setShowLevel2Menu] = useState(true)
  const [showToolbarIcons, setShowToolbarIcons] = useState(true)

  // Other components demo states
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [switchDisabled, setSwitchDisabled] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)
  const [phShowTabs, setPhShowTabs] = useState(true)
  const [phShowExtra, setPhShowExtra] = useState(true)
  const [ltShowFilter, setLtShowFilter] = useState(true)
  const [ltShowSort, setLtShowSort] = useState(true)
  const [ltShowViewToggle, setLtShowViewToggle] = useState(true)
  const [ltShowSettings, setLtShowSettings] = useState(true)
  const [pgShowQuickJumper, setPgShowQuickJumper] = useState(true)
  const [pgShowSizeChanger, setPgShowSizeChanger] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [stdPageSidebarCollapsed, setStdPageSidebarCollapsed] = useState(false)
  
  const [badgeOutline, setBadgeOutline] = useState(false)
  const [headerIsPortal, setHeaderIsPortal] = useState(true)
  const [tableBordered, setTableBordered] = useState(false)
  const [tableStriped, setTableStriped] = useState(false)
  const [tableVariant, setTableVariant] = useState<string>("default")
  const [tableShowSelector, setTableShowSelector] = useState(false)
  const [tableSelectedKeys, setTableSelectedKeys] = useState<string[]>([])
  const [dnShowSearch, setDnShowSearch] = useState(true)

  const components = [
    {
      title: "通用",
      items: [
        { name: "Button", desc: "按钮", status: "Done" },
        { name: "NavTabs", desc: "页签导航", status: "New" },
        { name: "Badge", desc: "徽标", status: "New" },
        { name: "Switch", desc: "开关", status: "New" },
      ]
    },
    {
      title: "布局",
      items: [
        { name: "Header", desc: "页头", status: "Done" },
        { name: "Sidebar", desc: "侧边导航", status: "Done" },
        { name: "PageHeader", desc: "内容页头", status: "New" },
        { name: "ListToolbar", desc: "列表操作栏", status: "New" },
      ]
    },
    {
      title: "数据录入",
      items: [
        { name: "Input", desc: "输入框", status: "New" },
      ]
    },
    {
      title: "数据展示",
      items: [
        { name: "Table", desc: "表格列表", status: "New" },
        { name: "Pagination", desc: "分页", status: "New" },
        { name: "DataNav", desc: "内容区数据导航", status: "New" },
      ]
    },
    {
      title: "页面",
      items: [
        { name: "StandardPage", desc: "标准页", status: "New" },
      ]
    }
  ]

  // Mock data for Sidebar preview
  const sidebarItems = [
    {
      key: "login",
      label: "登录管理",
      icon: <LayoutGrid size={18} />,
      children: [
        { key: "login-1", label: "登录设置" },
        { key: "login-2", label: "访问控制" },
      ]
    },
    {
      key: "portal",
      label: "门户配置",
      icon: <Folder size={18} />,
      children: [
        { key: "portal-1", label: "基本信息" },
        { key: "portal-2", label: "页面管理" },
      ]
    },
    {
      key: "template",
      label: "模板中心",
      icon: <LayoutGrid size={18} />,
    },
    {
      key: "content",
      label: "自定义内容",
      icon: <FileText size={18} />,
    },
    {
      key: "assets",
      label: "素材库",
      icon: <Folder size={18} />,
      children: [
        { key: "assets-manage", label: "素材管理" },
        { key: "data-format", label: "数据格式" },
        { key: "sample-data", label: "样例数据" },
        { key: "page-components", label: "页面组件" },
      ]
    },
    {
      key: "integration",
      label: "门户集成",
      icon: <BarChart size={18} />,
    },
    {
      key: "settings",
      label: "界面选项",
      icon: <Settings size={18} />,
      children: [
        { key: "theme", label: "主题设置" },
      ]
    },
  ]

  // Mock data for Table preview
  const tableData = [
    { id: 1, text: "文本值", operator: "赵玉", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" },
    { id: 2, text: "文本值", operator: "钱泺西", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" },
    { id: 3, text: "文本值", operator: "何卫军", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zai" },
    { id: 4, text: "文本值", operator: "钱丽敏", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly" },
    { id: 5, text: "文本值", operator: "王海英", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
    { id: 6, text: "文本值", operator: "何思琪", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
    { id: 7, text: "文本值", operator: "王嘉畦", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
    { id: 8, text: "文本值", operator: "冯靖宇", status: "draft", date: "2025-02-01 14:05", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  ]

  const tableColumns: TableColumn<typeof tableData[0]>[] = [
    { title: "序号", dataIndex: "id", width: 60, align: "center" },
    { title: "表头文本", dataIndex: "text", sortable: true },
    { title: "操作人", dataIndex: "operator", sortable: true },
    { 
      title: "状态", 
      key: "status",
      render: (_, record) => (
        <Badge variant={record.status as any}>草稿</Badge>
      )
    },
    {
      title: "开关",
      key: "switch",
      render: () => <Switch defaultChecked />
    },
    { title: "操作日期", dataIndex: "date" },
    {
      title: "操作",
      key: "action",
      render: () => (
        <div className="flex items-center gap-2 text-blue-500 text-sm">
          <button className="hover:underline">编辑</button>
          <span className="text-slate-300">|</span>
          <button className="hover:underline">删除</button>
          <span className="text-slate-300">|</span>
          <button className="hover:underline">更多</button>
        </div>
      )
    }
  ]

  const timelineData = [
    { id: 1, date: "2025-02-01 14:05", type: "开始", name: "项目启动", operator: "周妍玥" },
    { id: 2, date: "2025-02-01 14:05", type: "审批", name: "需求审批", operator: "李萍" },
    { id: 3, date: "2025-02-01 14:05", type: "开发", name: "功能开发", operator: "何仙超" },
    { id: 4, date: "2025-02-01 14:05", type: "测试", name: "功能测试", operator: "王海英" },
  ]

  const timelineColumns: TableColumn<typeof timelineData[0]>[] = [
    { title: "时间", dataIndex: "date", width: 160 },
    { title: "节点类型", dataIndex: "type" },
    { title: "节点名称", dataIndex: "name" },
    { title: "操作者", dataIndex: "operator" },
  ]

  const avatarColumns: TableColumn<typeof tableData[0]>[] = [
    { 
      title: "用户", 
      key: "avatar",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <img src={record.avatar} alt="" className="w-6 h-6 rounded-full" />
          <span>{record.operator}</span>
        </div>
      )
    },
    { title: "表头文本", dataIndex: "text" },
    { title: "状态", dataIndex: "status", render: (_, record) => <Badge variant={record.status as any}>草稿</Badge> },
    { title: "操作日期", dataIndex: "date" },
  ]

  // Mock data for DataNav preview
  const treeData: DataNavItem[] = [
    {
      key: "1",
      label: "一级菜单",
      children: [
        { key: "1-1", label: "二级菜单" },
        { key: "1-2", label: "二级菜单" },
      ]
    },
    {
      key: "2",
      label: "一级菜单",
      children: [
        {
          key: "2-1",
          label: "二级菜单",
          children: [
            {
              key: "2-1-1",
              label: "三级菜单",
              children: [
                {
                  key: "2-1-1-1",
                  label: "四级菜单",
                  children: [
                    { key: "2-1-1-1-1", label: "五级菜单" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { key: "3", label: "一级菜单" }
  ]

  const navItems: SidebarItem[] = [
    { title: "首页", href: "#overview" },
    ...components.map(group => ({
      title: group.title,
      href: `#${group.title}`,
      items: group.items.map(item => ({
        title: item.name,
        href: `#${item.name}`
      }))
    }))
  ]

  const isOverview = activeId === "#overview"

  const paramData = [
    {
      key: "showDataNav",
      name: "showDataNav",
      desc: "显示数据导航",
      type: "boolean",
      default: "true",
      value: showDataNav,
      setValue: setShowDataNav
    },
    {
      key: "showLevel1Menu",
      name: "showLevel1Menu",
      desc: "显示一级菜单",
      type: "boolean",
      default: "true",
      value: showLevel1Menu,
      setValue: setShowLevel1Menu
    },
    {
      key: "showLevel2Menu",
      name: "showLevel2Menu",
      desc: "显示二级菜单",
      type: "boolean",
      default: "true",
      value: showLevel2Menu,
      setValue: setShowLevel2Menu
    },
    {
      key: "showToolbarIcons",
      name: "showToolbarIcons",
      desc: "显示操作栏图标",
      type: "boolean",
      default: "true",
      value: showToolbarIcons,
      setValue: setShowToolbarIcons
    }
  ]

  const paramColumns: any[] = [
    { title: "参数名", dataIndex: "name", width: 150 },
    { title: "说明", dataIndex: "desc" },
    { title: "类型", dataIndex: "type", width: 100 },
    { title: "默认值", dataIndex: "default", width: 100 },
    { 
      title: "预览", 
      dataIndex: "value", 
      width: 100,
      render: (val: boolean) => <span className="font-mono text-xs">{val ? "true" : "false"}</span>
    },
    {
      title: "开关",
      key: "switch",
      width: 100,
      render: (_: any, record: any) => (
        <Switch 
          checked={record.value} 
          onCheckedChange={record.setValue} 
        />
      )
    }
  ]

  const renderDependencies = (componentName: string) => {
    const deps = componentDependencies[componentName]
    if (!deps || deps.length === 0) return null

    return (
      <div className="space-y-4 pt-8 border-t border-border mt-8">
        <h2 className="text-xl font-semibold">引用组件</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deps.map((dep) => (
            <div 
              key={dep.name}
              onClick={() => {
                setActiveId(`#${dep.name}`)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-sm cursor-pointer transition-all group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {dep.name}
                  </span>
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    Link
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {dep.desc}
                </div>
              </div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <SidebarLayout
      items={navItems}
      activeItem={activeId}
      onNavigate={setActiveId}
      title={isOverview ? "组件" : undefined}
      description={isOverview ? "Ling Design 提供了一套企业级 UI 设计语言和 React 组件库。" : undefined}
    >
      {isOverview && (
        <div className="animate-in fade-in duration-500">
          <div className="space-y-4 mb-20">
            <h2 className="text-xl font-semibold">最新组件: Header</h2>
            <div className="rounded-xl border border-border bg-background shadow-sm overflow-hidden">
              <BusinessHeader />
            </div>
          </div>

          <div className="space-y-20">
            {components.map((group) => (
              <div key={group.title} id={group.title} className="space-y-6">
                <h2 className="text-2xl font-semibold tracking-tight pb-2 border-b border-border/50">
                  {group.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.items.map((item) => (
                    <div 
                      key={item.name} 
                      onClick={() => setActiveId(`#${item.name}`)}
                      className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-primary/50 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="font-semibold text-lg">{item.name}</div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                          {item.desc}
                        </span>
                      </div>
                      
                      {/* Preview Area */}
                      <div className="h-24 flex items-center justify-center rounded-lg bg-secondary/30 mb-2 border border-dashed border-border/50 group-hover:bg-background transition-colors overflow-hidden">
                        {item.name === 'Button' ? (
                          <div className="flex gap-2">
                            <Button size="sm">Primary</Button>
                          </div>
                        ) : item.name === 'NavTabs' ? (
                          <div className="scale-75 origin-center">
                            <NavTabs
                              items={[
                                { label: "Tab 1", value: "1" },
                                { label: "Tab 2", value: "2" },
                              ]}
                              defaultValue="1"
                            />
                          </div>
                        ) : item.name === 'Badge' ? (
                          <div className="flex gap-2">
                            <Badge>Badge</Badge>
                            <Badge variant="secondary">New</Badge>
                          </div>
                        ) : item.name === 'Switch' ? (
                          <div className="flex gap-2">
                            <Switch defaultChecked />
                          </div>
                        ) : item.name === 'Input' ? (
                          <div className="w-[80%]">
                            <Input placeholder="请输入内容..." />
                          </div>
                        ) : item.name === 'Header' ? (
                          <div className="w-[800px] origin-top scale-[0.35] select-none">
                             <Header />
                          </div>
                        ) : item.name === 'Sidebar' ? (
                          <div className="h-full flex origin-left scale-[0.35] select-none">
                            <Sidebar items={sidebarItems} title="门户管理" />
                          </div>
                        ) : item.name === 'PageHeader' ? (
                          <div className="w-[800px] origin-top scale-[0.35] select-none">
                            <PageHeader 
                              title="分类规则检查"
                              tabs={[{ key: '1', label: '标题一' }, { key: '2', label: '标题一' }]}
                              activeTab="1"
                              extra={<div className="text-sm text-[#4285F4]">新手引导</div>}
                            />
                          </div>
                        ) : item.name === 'ListToolbar' ? (
                          <div className="w-[800px] origin-top scale-[0.35] select-none">
                            <ListToolbar 
                              actions={
                                <>
                                  <Button size="sm">新建</Button>
                                  <Button size="sm" variant="outline">批量导出</Button>
                                </>
                              }
                            />
                          </div>
                        ) : item.name === 'Pagination' ? (
                          <div className="w-[800px] origin-top scale-[0.6] select-none flex justify-center">
                            <Pagination total={500} current={1} />
                          </div>
                        ) : item.name === 'Table' ? (
                          <div className="w-[800px] origin-top scale-[0.35] select-none p-4 bg-white">
                             <Table 
                               columns={tableColumns.slice(0, 4)} 
                               dataSource={tableData.slice(0, 3)} 
                             />
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground/50">Preview</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeId === "#Button" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Button</h1>
            <p className="text-muted-foreground text-lg">按钮用于触发一个操作。</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">预览</h2>
            <div className="rounded-xl border border-border bg-background p-10 flex flex-wrap items-center gap-4 justify-center min-h-[200px]">
              <Button disabled={btnDisabled}>Default</Button>
              <Button variant="secondary" disabled={btnDisabled}>Secondary</Button>
              <Button variant="outline" disabled={btnDisabled}>Outline</Button>
              <Button variant="ghost" disabled={btnDisabled}>Ghost</Button>
              <Button variant="destructive" disabled={btnDisabled}>Destructive</Button>
              <Button variant="link" disabled={btnDisabled}>Link</Button>
            </div>
            
            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "disabled",
                       name: "disabled",
                       desc: "禁用状态",
                       type: "boolean",
                       default: "false",
                       value: btnDisabled,
                       setValue: setBtnDisabled
                     }
                   ]} 
                  rowKey="key" 
                />
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="rounded-xl border border-border bg-background p-6 flex flex-col items-center gap-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Sizes</h3>
                  <div className="flex items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
               </div>
               <div className="rounded-xl border border-border bg-background p-6 flex flex-col items-center gap-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">States</h3>
                  <div className="flex items-center gap-4">
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                  </div>
               </div>
            </div>
            {renderDependencies("Button")}
          </div>
        </div>
      )}

      {activeId === "#NavTabs" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">NavTabs</h1>
            <p className="text-muted-foreground text-lg">页签导航，用于在不同视图间切换。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">基础样式 (Line)</h2>
              <div className="rounded-xl border border-border bg-background p-10 flex flex-col items-center gap-8 justify-center min-h-[100px]">
                <NavTabs
                  items={[
                    { label: "标题一", value: "tab1" },
                    { label: "标题一", value: "tab2" },
                    { label: "标题一", value: "tab3" },
                    { label: "标题一", value: "tab4" },
                    { label: "标题一", value: "tab5" },
                  ]}
                  defaultValue="tab1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">卡片样式 (Card)</h2>
              <div className="rounded-xl border border-border bg-background p-10 flex flex-col items-center gap-8 justify-center min-h-[100px]">
                <NavTabs
                  variant="card"
                  items={[
                    { label: "标题一", value: "tab1" },
                    { label: "标题一", value: "tab2" },
                    { label: "标题一", value: "tab3" },
                    { label: "标题一", value: "tab4" },
                    { label: "标题一", value: "tab5" },
                  ]}
                  defaultValue="tab1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">垂直样式 (Vertical)</h2>
              <div className="rounded-xl border border-border bg-background overflow-hidden flex min-h-[200px]">
                <div className="w-64 border-r border-border bg-white py-4">
                  <NavTabs
                    variant="vertical"
                    items={[
                      { label: "标题一", value: "tab1" },
                      { label: "标题一", value: "tab2" },
                      { label: "标题一", value: "tab3" },
                      { label: "标题一", value: "tab4" },
                    ]}
                    defaultValue="tab1"
                  />
                </div>
                <div className="flex-1 p-8 bg-muted/10">
                  <div className="h-full rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-muted-foreground">
                    Content Area
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">按钮样式 (Button)</h2>
              <div className="rounded-xl border border-border bg-background p-10 flex flex-col items-center gap-8 justify-center min-h-[100px]">
                <NavTabs
                  variant="button"
                  items={[
                    { label: "选项1", value: "tab1" },
                    { label: "选项2", value: "tab2" },
                    { label: "选项3", value: "tab3" },
                  ]}
                  defaultValue="tab1"
                />
              </div>
            </div>

            {renderDependencies("NavTabs")}
          </div>
        </div>
      )}

      {activeId === "#Badge" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Badge</h1>
            <p className="text-muted-foreground text-lg">徽标用于展示状态或标记。</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">预览</h2>
            <div className="rounded-xl border border-border bg-background p-10 flex flex-wrap items-center gap-4 justify-center min-h-[200px]">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="rounded-xl border border-border bg-background p-10 flex flex-wrap items-center gap-4 justify-center">
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="draft">Draft</Badge>
            </div>
            {renderDependencies("Badge")}
          </div>
        </div>
      )}

      {activeId === "#Switch" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Switch</h1>
            <p className="text-muted-foreground text-lg">开关用于切换两种状态。</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">预览</h2>
            <div className="rounded-xl border border-border bg-background p-10 flex flex-wrap items-center gap-8 justify-center min-h-[200px]">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-muted-foreground">Default</span>
                <Switch disabled={switchDisabled} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-muted-foreground">Checked</span>
                <Switch defaultChecked disabled={switchDisabled} />
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-muted-foreground">Small</span>
                <Switch size="sm" disabled={switchDisabled} />
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "disabled",
                       name: "disabled",
                       desc: "禁用状态",
                       type: "boolean",
                       default: "false",
                       value: switchDisabled,
                       setValue: setSwitchDisabled
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>
            {renderDependencies("Switch")}
          </div>
        </div>
      )}

      {activeId === "#Input" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Input</h1>
            <p className="text-muted-foreground text-lg">通过鼠标或键盘输入内容，是最基础的表单域的包装。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">预览</h2>
              <div className="rounded-xl border border-border bg-background p-10 flex flex-col gap-6 justify-center min-h-[200px] max-w-xl mx-auto">
                <div className="space-y-2">
                   <label className="text-sm font-medium">基础输入框</label>
                   <Input placeholder="请输入内容..." disabled={inputDisabled} />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium">不同尺寸</label>
                   <div className="flex flex-col gap-4">
                     <Input placeholder="默认尺寸 (Default)" disabled={inputDisabled} />
                     <Input placeholder="小尺寸 (Small)" className="h-8 text-xs" disabled={inputDisabled} />
                   </div>
                </div>
              </div>

              <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "disabled",
                       name: "disabled",
                       desc: "禁用状态",
                       type: "boolean",
                       default: "false",
                       value: inputDisabled,
                       setValue: setInputDisabled
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>
            </div>
            {renderDependencies("Input")}
          </div>
        </div>
      )}

      {activeId === "#Header" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Header</h1>
            <p className="text-muted-foreground text-lg">页面顶部导航栏，包含 Logo、导航链接和操作区。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">预览</h2>
              
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-lg border bg-gray-50 dark:bg-zinc-900/50">
                  <h4 className="text-sm font-medium mb-3">Preview</h4>
                  <BusinessHeader variant={headerIsPortal ? "portal" : "admin"} mode="dark" />
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "isPortal",
                       name: "isPortal",
                       desc: "门户模式",
                       type: "boolean",
                       default: "true",
                       value: headerIsPortal,
                       setValue: setHeaderIsPortal
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>

            {renderDependencies("Header")}
          </div>
        </div>
      )}

      {activeId === "#Sidebar" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sidebar</h1>
            <p className="text-muted-foreground text-lg">侧边导航菜单，用于后台管理系统的主要导航。</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">预览</h2>
            <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm flex h-[600px]">
              <Sidebar 
                items={sidebarItems} 
                title="门户管理" 
                activeKey="assets-manage"
                defaultOpenKeys={['assets']}
                collapsed={sidebarCollapsed}
                onCollapse={setSidebarCollapsed}
              />
              <div className="flex-1 bg-white p-8">
                <div className="h-32 rounded-lg border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">
                  Content Area
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "collapsed",
                       name: "collapsed",
                       desc: "收起状态",
                       type: "boolean",
                       default: "false",
                       value: sidebarCollapsed,
                       setValue: setSidebarCollapsed
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>
            {renderDependencies("Sidebar")}
          </div>
        </div>
      )}

      {activeId === "#PageHeader" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">PageHeader</h1>
            <p className="text-muted-foreground text-lg">列表内容区标题栏，支持标题、Tab 切换和操作区。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">预览</h2>
              <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                <div className="bg-white min-h-[200px] flex flex-col">
                  <PageHeader 
                    title="分类规则检查" 
                    tabs={[
                      { key: '1', label: '标题一' },
                      { key: '2', label: '标题一' },
                      { key: '3', label: '标题一' },
                      { key: '4', label: '标题一' },
                    ]}
                    activeTab="1"
                    showTabs={phShowTabs}
                    showExtra={phShowExtra}
                    extra={
                      <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-[#4285F4]">
                        <BookOpen size={16} />
                        <span>新手引导</span>
                      </div>
                    }
                  />
                  
                  <div className="p-8">
                    <div className="h-32 rounded-lg border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">
                      Content for Tab 1
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "showTabs",
                       name: "showTabs",
                       desc: "显示页签",
                       type: "boolean",
                       default: "true",
                       value: phShowTabs,
                       setValue: setPhShowTabs
                     },
                     {
                       key: "showExtra",
                       name: "showExtra",
                       desc: "显示扩展区",
                       type: "boolean",
                       default: "true",
                       value: phShowExtra,
                       setValue: setPhShowExtra
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>
            {renderDependencies("PageHeader")}
          </div>
        </div>
      )}

      {activeId === "#ListToolbar" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">ListToolbar</h1>
            <p className="text-muted-foreground text-lg">列表内容区操作栏，包含搜索、筛选、排序和常用操作。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">预览</h2>
              <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                <div className="bg-white min-h-[200px] flex flex-col">
                  <ListToolbar 
                    showFilter={ltShowFilter}
                    showSort={ltShowSort}
                    showViewToggle={ltShowViewToggle}
                    showSettings={ltShowSettings}
                    actions={
                      <>
                        <Button size="sm">新建</Button>
                        <Button size="sm" variant="outline">批量导出</Button>
                      </>
                    }
                  />
                  
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="h-8 w-full bg-gray-50 rounded" />
                      <div className="h-8 w-full bg-gray-50 rounded" />
                      <div className="h-8 w-full bg-gray-50 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "showFilter",
                       name: "showFilter",
                       desc: "显示筛选",
                       type: "boolean",
                       default: "true",
                       value: ltShowFilter,
                       setValue: setLtShowFilter
                     },
                     {
                       key: "showSort",
                       name: "showSort",
                       desc: "显示排序",
                       type: "boolean",
                       default: "true",
                       value: ltShowSort,
                       setValue: setLtShowSort
                     },
                     {
                       key: "showViewToggle",
                       name: "showViewToggle",
                       desc: "显示视图切换",
                       type: "boolean",
                       default: "true",
                       value: ltShowViewToggle,
                       setValue: setLtShowViewToggle
                     },
                     {
                       key: "showSettings",
                       name: "showSettings",
                       desc: "显示设置",
                       type: "boolean",
                       default: "true",
                       value: ltShowSettings,
                       setValue: setLtShowSettings
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>
            {renderDependencies("ListToolbar")}
          </div>
        </div>
      )}

      {activeId === "#Pagination" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Pagination</h1>
            <p className="text-muted-foreground text-lg">用于内容过多的列表展示。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">预览</h2>
              <div className="rounded-xl border border-border bg-background p-10 flex flex-col items-center gap-8 justify-center min-h-[200px]">
                <Pagination 
                  total={500} 
                  defaultCurrent={1} 
                  showQuickJumper={pgShowQuickJumper}
                  showSizeChanger={pgShowSizeChanger}
                />
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "showQuickJumper",
                       name: "showQuickJumper",
                       desc: "显示快速跳转",
                       type: "boolean",
                       default: "true",
                       value: pgShowQuickJumper,
                       setValue: setPgShowQuickJumper
                     },
                     {
                       key: "showSizeChanger",
                       name: "showSizeChanger",
                       desc: "显示页码切换",
                       type: "boolean",
                       default: "true",
                       value: pgShowSizeChanger,
                       setValue: setPgShowSizeChanger
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>
            {renderDependencies("Pagination")}
          </div>
        </div>
      )}
      {activeId === "#Table" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">Table</h1>
            <p className="text-muted-foreground text-lg">用于展示多条结构化数据，支持排序、筛选、分页等功能。</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">变体预览</h2>
              
              <div className="grid gap-6">
                <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <h3 className="font-semibold text-sm">默认表格 (Default)</h3>
                  </div>
                  <div className="bg-white p-6">
                    <Table 
                      columns={tableColumns.slice(0, 4)} 
                      dataSource={tableData.slice(0, 3)}
                      variant="default"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <h3 className="font-semibold text-sm">可排序表格 (Sortable)</h3>
                  </div>
                  <div className="bg-white p-6">
                    <Table 
                      columns={tableColumns.slice(0, 4)} 
                      dataSource={tableData.slice(0, 3)}
                      variant="sortable"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <h3 className="font-semibold text-sm">可选择表格 (Selectable)</h3>
                  </div>
                  <div className="bg-white p-6">
                    <Table 
                      columns={tableColumns.slice(0, 4)} 
                      dataSource={tableData.slice(0, 3)}
                      variant="selectable"
                      showRowSelector={true}
                      selectedRowKeys={tableSelectedKeys}
                      onSelectionChange={setTableSelectedKeys}
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <h3 className="font-semibold text-sm">带头像表格 (Avatar)</h3>
                  </div>
                  <div className="bg-white p-6">
                    <Table 
                      columns={avatarColumns} 
                      dataSource={tableData.slice(0, 3)}
                      variant="avatar"
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border">
                    <h3 className="font-semibold text-sm">时间线表格 (Timeline)</h3>
                  </div>
                  <div className="bg-white p-6">
                    <Table 
                      columns={timelineColumns} 
                      dataSource={timelineData}
                      variant="timeline"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">完整示例</h2>
              <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm">
                <div className="bg-white p-6">
                  <div className="space-y-4">
                    <ListToolbar 
                      actions={
                        <>
                          <Button size="sm">新建</Button>
                          <Button size="sm" variant="outline">批量导出</Button>
                        </>
                      }
                    />
                    <Table 
                      columns={tableColumns} 
                      dataSource={tableData} 
                      bordered={tableBordered}
                      striped={tableStriped}
                    />
                    <div className="flex justify-end">
                      <Pagination total={50} defaultCurrent={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "bordered",
                       name: "bordered",
                       desc: "显示边框",
                       type: "boolean",
                       default: "false",
                       value: tableBordered,
                       setValue: setTableBordered
                     },
                     {
                       key: "striped",
                       name: "striped",
                       desc: "斑马纹",
                       type: "boolean",
                       default: "false",
                       value: tableStriped,
                       setValue: setTableStriped
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>

            {renderDependencies("Table")}
          </div>
        </div>
      )}
      {activeId === "#DataNav" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">DataNav</h1>
            <p className="text-muted-foreground text-lg">内容区数据导航，用于展示树形结构的数据层级。</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">预览</h2>
            <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm flex h-[600px]">
              <DataNav 
                items={treeData} 
                title="树标题" 
                width={280}
                defaultOpenKeys={['2', '2-1', '2-1-1', '2-1-1-1']}
                activeKey="2-1-1-1-1"
                showSearch={dnShowSearch}
              />
              <div className="flex-1 bg-white p-8">
                <div className="h-full rounded-lg border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">
                  Right Content Area
                </div>
              </div>
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table 
                   columns={paramColumns} 
                   dataSource={[
                     {
                       key: "showSearch",
                       name: "showSearch",
                       desc: "显示搜索",
                       type: "boolean",
                       default: "true",
                       value: dnShowSearch,
                       setValue: setDnShowSearch
                     }
                   ]} 
                   rowKey="key" 
                 />
               </div>
            </div>

            {renderDependencies("DataNav")}
          </div>
        </div>
      )}

      {activeId === "#StandardPage" && (
        <div className="space-y-8 animate-in fade-in duration-500">
          <div>
            <h1 className="text-3xl font-bold mb-2">StandardPage</h1>
            <p className="text-muted-foreground text-lg">标准页面布局，集成了 Header、Sidebar、PageHeader、DataNav、ListToolbar、Table 等组件。</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">预览</h2>
            <div className="rounded-xl border border-border bg-background overflow-hidden shadow-sm h-[800px] relative transform scale-[0.8] origin-top-left w-[125%]">
              <StandardPage 
                // Global Layout
                header={<BusinessHeader variant="portal" mode="dark" />}
                sidebar={
                  <Sidebar 
                    items={sidebarItems} 
                    title="门户管理" 
                    activeKey="assets-manage"
                    defaultOpenKeys={['assets']}
                    className="h-full"
                    collapsed={stdPageSidebarCollapsed}
                    onCollapse={setStdPageSidebarCollapsed}
                  />
                }
                
                // Configuration
                showDataNav={showDataNav}
                showLevel1Menu={showLevel1Menu}
                showLevel2Menu={showLevel2Menu}
                level2Menu={
                  <NavTabs
                    variant="card"
                    items={[
                      { label: "标题一", value: "tab1" },
                      { label: "标题一", value: "tab2" },
                      { label: "标题一", value: "tab3" },
                      { label: "标题一", value: "tab4" },
                    ]}
                  />
                }
                showToolbarIcons={showToolbarIcons}
                
                // Component Props
                pageHeaderProps={{
                  title: "分类规则检查",
                  tabs: [{ key: '1', label: '标题一' }, { key: '2', label: '标题一' }, { key: '3', label: '标题一' }, { key: '4', label: '标题一' }],
                  activeTab: "1",
                  extra: <div className="text-sm text-[#4285F4]">新手引导</div>
                }}
                
                dataNavProps={{
                  items: treeData,
                  title: "树标题",
                  defaultOpenKeys: ['2', '2-1', '2-1-1', '2-1-1-1'],
                  activeKey: "2-1-1-1-1",
                  width: 240
                }}
                
                listToolbarProps={{
                  actions: (
                    <>
                      <Button size="sm">新建</Button>
                      <Button size="sm" variant="outline">批量导出</Button>
                    </>
                  )
                }}
                
                tableProps={{
                  columns: tableColumns,
                  dataSource: tableData
                }}
                
                paginationProps={{
                  total: 999,
                  current: 1,
                  pageSize: 10,
                  showQuickJumper: true,
                  showSizeChanger: true
                }}
              />
            </div>

            <div className="mt-8">
               <h3 className="text-lg font-semibold mb-4">参数配置</h3>
               <div className="bg-white">
                 <Table columns={paramColumns} dataSource={paramData} rowKey="key" />
               </div>
            </div>

            {renderDependencies("StandardPage")}
          </div>
        </div>
      )}
    </SidebarLayout>
  )
}
