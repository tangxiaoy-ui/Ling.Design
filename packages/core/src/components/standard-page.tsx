import * as React from "react"
import { cn } from "@ling-design/utils"
import { Header } from "./header"
import type { SidebarProps } from "./sidebar"
import { PageHeader, type PageHeaderProps } from "./page-header"
import { DataNav, type DataNavProps } from "./data-nav"
import { ListToolbar, type ListToolbarProps } from "./list-toolbar"
import { Pagination, type PaginationProps } from "./pagination"
import { Table, type TableProps } from "./table"
import { NavTabs } from "./nav-tabs"

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
          <div className="flex-shrink-0">
             {pageHeaderProps ? (
               <PageHeader {...pageHeaderProps} showTabs={showLevel1Menu} />
             ) : (
               <PageHeader title="页面标题" showTabs={showLevel1Menu} />
             )}
          </div>
          
          {/* Main Card Container */}
          <div className="flex-1 flex flex-col overflow-hidden bg-background rounded-lg shadow-sm">
            {/* Level 2 Menu: Secondary Nav */}
            {showLevel2Menu && level2Menu && (
              <div className="flex-shrink-0 border-b border-border">
                {level2Menu}
              </div>
            )}
            
            {/* Content Body */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Data Nav */}
              {showDataNav && dataNavProps?.items && dataNavProps.items.length > 0 && (
                <div className="flex-shrink-0 border-r border-border h-full overflow-y-auto">
                  <DataNav {...dataNavProps} className="h-full shadow-none border-0" />
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
