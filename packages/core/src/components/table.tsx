import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@ling-design/utils"

export interface TableColumn<T = any> {
  title: React.ReactNode
  dataIndex?: keyof T
  key?: string
  width?: string | number
  align?: "left" | "center" | "right"
  render?: (value: any, record: T, index: number) => React.ReactNode
  sortable?: boolean
}

export interface TableProps<T = any> extends React.HTMLAttributes<HTMLTableElement> {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: string | ((record: T) => string)
  variant?: "default"
  bordered?: boolean
  striped?: boolean
  showRowSelector?: boolean
  selectedRowKeys?: string[]
  onSelectionChange?: (selectedRowKeys: string[]) => void
}

const tableVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function Table<T = any>({
  className,
  columns,
  dataSource,
  rowKey = "id",
  variant = "default",
  bordered = false,
  striped = false,
  showRowSelector = false,
  selectedRowKeys = [],
  onSelectionChange,
  ...props
}: TableProps<T>) {
  const [sortConfig, setSortConfig] = React.useState<{
    key: string
    direction: "asc" | "desc"
  } | null>(null)

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sortable) return
    
    const columnKey = String(column.dataIndex || column.key)
    let direction: "asc" | "desc" = "asc"
    
    if (sortConfig?.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc"
    }
    
    setSortConfig({ key: columnKey, direction })
  }

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return dataSource
    
    return [...dataSource].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T]
      const bValue = b[sortConfig.key as keyof T]
      
      if (aValue === bValue) return 0
      
      const comparison = aValue < bValue ? -1 : 1
      return sortConfig.direction === "asc" ? comparison : -comparison
    })
  }, [dataSource, sortConfig])

  const handleRowSelect = (key: string) => {
    const newSelection = selectedRowKeys.includes(key)
      ? selectedRowKeys.filter(k => k !== key)
      : [...selectedRowKeys, key]
    onSelectionChange?.(newSelection)
  }

  const handleSelectAll = () => {
    const allKeys = dataSource.map((record, idx) => 
      typeof rowKey === "function" ? rowKey(record) : (record as any)[rowKey] || String(idx)
    )
    const allSelected = allKeys.every(key => selectedRowKeys.includes(key))
    onSelectionChange?.(allSelected ? [] : allKeys)
  }

  const allSelected = dataSource.length > 0 && 
    dataSource.map((record, idx) => 
      typeof rowKey === "function" ? rowKey(record) : (record as any)[rowKey] || String(idx)
    ).every(key => selectedRowKeys.includes(key))

  return (
    <div className={cn(
      "w-full overflow-auto rounded-lg", 
      bordered ? "border border-border" : "",
      tableVariants({ variant })
    )}>
      <table className={cn("w-full caption-bottom text-sm text-left", className)} {...props}>
        <thead className={cn(
          "bg-muted/50",
          bordered ? "border-b border-border" : ""
        )}>
          <tr className="hover:bg-transparent">
            {showRowSelector && (
              <th className="h-12 w-12 px-4 align-middle">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="h-4 w-4 rounded border-border"
                />
              </th>
            )}
            {columns.map((column, index) => (
              <th
                key={column.key || String(column.dataIndex) || index}
                className={cn(
                  "h-12 px-4 align-middle text-foreground [&:has([role=checkbox])]:pr-0",
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right",
                  column.sortable && "cursor-pointer hover:bg-muted/80"
                )}
                style={{ width: column.width }}
                onClick={() => handleSort(column)}
              >
                <div className="flex items-center gap-2">
                  {column.title}
                  {column.sortable && (
                    <span className="text-muted-foreground">
                      {sortConfig?.key === String(column.dataIndex || column.key) ? (
                        sortConfig.direction === "asc" ? "↑" : "↓"
                      ) : (
                        "↕"
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {(sortConfig ? sortedData : dataSource).map((record, rowIndex) => {
            const key = typeof rowKey === "function" ? rowKey(record) : (record as any)[rowKey] || String(rowIndex)
            const isSelected = selectedRowKeys.includes(key)
            
            return (
              <tr
                key={key || rowIndex}
                className={cn(
                  "transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
                  bordered ? "border-b border-border" : "border-b border-border/50",
                  striped && rowIndex % 2 === 1 && "bg-muted/20",
                  isSelected && "bg-muted/50"
                )}
              >
                {showRowSelector && (
                  <td className="p-4 align-middle">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleRowSelect(key)}
                      className="h-4 w-4 rounded border-border"
                    />
                  </td>
                )}
                {columns.map((column, colIndex) => {
                  const cellKey = column.key || String(column.dataIndex) || colIndex
                  const value = column.dataIndex ? record[column.dataIndex] : undefined
                  
                  return (
                    <td
                      key={cellKey}
                      className={cn(
                        "p-4 align-middle text-foreground [&:has([role=checkbox])]:pr-0",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right",
                        bordered ? "border-r border-border last:border-r-0" : ""
                      )}
                    >
                      {column.render ? column.render(value, record, rowIndex) : (value as React.ReactNode)}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { Table }
