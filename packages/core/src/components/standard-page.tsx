import * as React from "react"
import { cn } from "@ling-design/utils"
import { Header } from "./header"
import { Sidebar, SidebarProps } from "./sidebar"
import { PageHeader, PageHeaderProps } from "./page-header"
import { DataNav, DataNavProps } from "./data-nav"
import { ListToolbar, ListToolbarProps } from "./list-toolbar"
import { Pagination, PaginationProps } from "./pagination"
import { Table, TableProps } from "./table"

export interface StandardPageProps extends React.HTMLAttributes<HTMLDivElement> {
  // Global Layout
  header?: React.ReactNode
  sidebar?: React.ReactNode
  
  // Page Header Area
  showLevel1Menu?: boolean
  pageHeaderProps?: PageHeaderProps
  
  // Secondary Nav
  showLevel2Menu?: boolean
  level2Menu?: React.ReactNode
  
  // Content Layout
  showDataNav?: boolean
  dataNavProps?: DataNavProps
  
  // Toolbar Area
  listToolbarProps?: ListToolbarProps
  showToolbarIcons?: boolean
  
  // Main Content
  tableProps?: TableProps<any>
  paginationProps?: PaginationProps
  
  // Custom Content (if not using Table/Toolbar standard layout)
  children?: React.ReactNode
}

export function StandardPage({
  className,
  header,
  sidebar,
  showLevel1Menu = true,
  pageHeaderProps,
  showLevel2Menu = true,
  level2Menu,
  showDataNav = true,
  dataNavProps,
  listToolbarProps,
  showToolbarIcons = true,
  tableProps,
  paginationProps,
  children,
  ...props
}: StandardPageProps) {
  
  return (
    <div className={cn("flex flex-col h-screen w-full bg-muted", className)} {...props}>
      {/* Global Header */}
      <div className="flex-shrink-0 z-50 relative">
        {header || <Header />}
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex-shrink-0 bg-background border-r border-border z-40">
          {sidebar}
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden px-3 pb-3 bg-muted">
          {/* Level 1 Menu: PageHeader */}
          {showLevel1Menu && (
            <div className="flex-shrink-0">
               {pageHeaderProps ? (
                 <PageHeader {...pageHeaderProps} />
               ) : (
                 <PageHeader title="页面标题" />
               )}
            </div>
          )}
          
          {/* Level 2 Menu: Secondary Nav */}
          {showLevel2Menu && (
            <div className="flex-shrink-0 px-6">
              {level2Menu || (
                <div className="flex items-center gap-8 h-10">
                   <button className="text-sm font-medium text-primary border-b-2 border-primary h-full px-1">
                     标题一
                   </button>
                   <button className="text-sm font-medium text-muted-foreground hover:text-foreground h-full px-1">
                     标题一
                   </button>
                   <button className="text-sm font-medium text-muted-foreground hover:text-foreground h-full px-1">
                     标题一
                   </button>
                   <button className="text-sm font-medium text-muted-foreground hover:text-foreground h-full px-1">
                     标题一
                   </button>
                </div>
              )}
            </div>
          )}
          
          {/* Content Body */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full bg-background rounded-lg shadow-sm border border-border flex overflow-hidden">
              {/* Left Data Nav */}
              {showDataNav && (
                <div className="flex-shrink-0 border-r border-border h-full overflow-y-auto">
                   {dataNavProps ? (
                     <DataNav {...dataNavProps} className="h-full" />
                   ) : (
                     <DataNav items={[]} title="数据导航" width={240} className="h-full" />
                   )}
                </div>
              )}
              
              {/* Right List Content */}
              <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
                 {/* Toolbar */}
                 <div className="flex-shrink-0">
                    {listToolbarProps && (
                      <ListToolbar 
                        {...listToolbarProps} 
                        showViewToggle={showToolbarIcons && listToolbarProps.showViewToggle !== false}
                        showSettings={showToolbarIcons && listToolbarProps.showSettings !== false}
                      />
                    )}
                 </div>
                 
                 {/* Table Area */}
                 <div className="flex-1 overflow-auto p-0">
                    {children ? children : (
                      tableProps && <Table {...tableProps} />
                    )}
                 </div>
                 
                 {/* Pagination */}
                 {paginationProps && (
                   <div className="flex-shrink-0 p-4 border-t border-border flex justify-end">
                     <Pagination {...paginationProps} />
                   </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
