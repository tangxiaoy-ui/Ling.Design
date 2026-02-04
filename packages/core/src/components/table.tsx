import * as React from "react"
import { cn } from "@ling-design/utils"

export interface TableColumn<T = any> {
  title: React.ReactNode
  dataIndex?: keyof T
  key?: string
  width?: string | number
  align?: "left" | "center" | "right"
  render?: (value: any, record: T, index: number) => React.ReactNode
}

export interface TableProps<T = any> extends React.HTMLAttributes<HTMLTableElement> {
  columns: TableColumn<T>[]
  dataSource: T[]
  rowKey?: string | ((record: T) => string)
}

function Table<T = any>({
  className,
  columns,
  dataSource,
  rowKey = "id",
  ...props
}: TableProps<T>) {
  return (
    <div className="w-full overflow-auto rounded-md border border-border">
      <table className={cn("w-full caption-bottom text-sm text-left", className)} {...props}>
        <thead className="bg-muted/50 border-b border-border">
          <tr className="hover:bg-transparent">
            {columns.map((column, index) => (
              <th
                key={column.key || String(column.dataIndex) || index}
                className={cn(
                  "h-12 px-4 align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right"
                )}
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {dataSource.map((record, rowIndex) => {
            const key = typeof rowKey === "function" ? rowKey(record) : (record as any)[rowKey]
            return (
              <tr
                key={key || rowIndex}
                className="border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {columns.map((column, colIndex) => {
                  const cellKey = column.key || String(column.dataIndex) || colIndex
                  const value = column.dataIndex ? record[column.dataIndex] : undefined
                  return (
                    <td
                      key={cellKey}
                      className={cn(
                        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right"
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
