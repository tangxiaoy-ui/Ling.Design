import * as React from "react"
import { cn } from "@ling-design/utils"
import { ArrowLeft as ChevronLeft, ArrowRight as ChevronRight, Information as MoreHorizontal, RestoreDefault as RefreshCw } from "./icons"

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  current?: number
  pageSize?: number
  total?: number
  defaultCurrent?: number
  defaultPageSize?: number
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
  showSizeChanger?: boolean
  pageSizeOptions?: number[]
  showQuickJumper?: boolean
  showRefresh?: boolean
  onRefresh?: () => void
}

export function Pagination({
  className,
  current: propsCurrent,
  pageSize: propsPageSize,
  total = 0,
  defaultCurrent = 1,
  defaultPageSize = 10,
  onChange,
  onShowSizeChange,
  showSizeChanger = true,
  pageSizeOptions = [10, 20, 50, 100],
  showQuickJumper = true,
  showRefresh = true,
  onRefresh,
  ...props
}: PaginationProps) {
  const [internalCurrent, setInternalCurrent] = React.useState(defaultCurrent)
  const [internalPageSize, setInternalPageSize] = React.useState(defaultPageSize)

  const current = propsCurrent !== undefined ? propsCurrent : internalCurrent
  const pageSize = propsPageSize !== undefined ? propsPageSize : internalPageSize

  const totalPages = Math.ceil(total / pageSize)

  const changePage = (page: number) => {
    const newPage = Math.max(1, Math.min(page, totalPages))
    if (newPage !== current) {
      if (propsCurrent === undefined) {
        setInternalCurrent(newPage)
      }
      onChange?.(newPage, pageSize)
    }
  }

  const changePageSize = (size: number) => {
    const newCurrent = Math.min(current, Math.ceil(total / size)) || 1
    if (propsPageSize === undefined) {
      setInternalPageSize(size)
    }
    if (propsCurrent === undefined) {
      setInternalCurrent(newCurrent)
    }
    onShowSizeChange?.(newCurrent, size)
    onChange?.(newCurrent, size)
  }

  const renderPageNumbers = () => {
    const pages = []
    
    // Always show first page
    pages.push(
      <PageButton
        key={1}
        page={1}
        active={current === 1}
        onClick={() => changePage(1)}
      />
    )

    // Calculate range
    let startPage = Math.max(2, current - 2)
    let endPage = Math.min(totalPages - 1, current + 2)

    // Adjust if near start
    if (current <= 4) {
      endPage = Math.min(totalPages - 1, 5)
    }
    // Adjust if near end
    if (current >= totalPages - 3) {
      startPage = Math.max(2, totalPages - 4)
    }

    // Left ellipsis
    if (startPage > 2) {
      pages.push(<Ellipsis key="left-ellipsis" />)
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          page={i}
          active={current === i}
          onClick={() => changePage(i)}
        />
      )
    }

    // Right ellipsis
    if (endPage < totalPages - 1) {
      pages.push(<Ellipsis key="right-ellipsis" />)
    }

    // Always show last page if total > 1
    if (totalPages > 1) {
      pages.push(
        <PageButton
          key={totalPages}
          page={totalPages}
          active={current === totalPages}
          onClick={() => changePage(totalPages)}
        />
      )
    }

    return pages
  }

  return (
    <div className={cn("flex items-center gap-4 text-sm text-gray-600", className)} {...props}>
      {/* Pager */}
      <div className="flex items-center -space-x-px">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-l-md border border-gray-300 bg-white hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => changePage(current - 1)}
          disabled={current <= 1}
        >
          <ChevronLeft size={16} />
        </button>
        
        {renderPageNumbers()}

        <button
          className="flex h-8 w-8 items-center justify-center rounded-r-md border border-gray-300 bg-white hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => changePage(current + 1)}
          disabled={current >= totalPages}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Total */}
      <span>共 {total} 条</span>

      {/* Jumper */}
      {showQuickJumper && (
        <div className="flex items-center gap-2">
          <span>前往</span>
          <input
            type="text" // using text to allow empty temporary state, but handled as number
            className="h-8 w-12 rounded-md border border-gray-300 px-1 text-center focus:border-[#4285F4] focus:outline-none focus:ring-1 focus:ring-[#4285F4]"
            defaultValue={current}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const val = parseInt(e.currentTarget.value)
                if (!isNaN(val)) {
                  changePage(val)
                }
              }
            }}
            onBlur={(e) => {
               const val = parseInt(e.currentTarget.value)
               if (!isNaN(val)) {
                 changePage(val)
               } else {
                 e.currentTarget.value = current.toString()
               }
            }}
          />
          <span>页</span>
        </div>
      )}

      {/* Size Changer */}
      {showSizeChanger && (
        <div className="flex items-center gap-2">
          <span>每页</span>
          <select
            className="h-8 rounded-md border border-gray-300 bg-white px-2 py-1 pr-6 focus:border-[#4285F4] focus:outline-none focus:ring-1 focus:ring-[#4285F4]"
            value={pageSize}
            onChange={(e) => changePageSize(Number(e.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <span>条</span>
        </div>
      )}

      {/* Refresh */}
      {showRefresh && (
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          onClick={onRefresh}
          title="刷新"
        >
          <RefreshCw size={14} />
        </button>
      )}
    </div>
  )
}

function PageButton({
  page,
  active,
  onClick,
}: {
  page: number
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      className={cn(
        "flex h-8 min-w-[32px] items-center justify-center border border-gray-300 px-1 text-sm transition-colors",
        active
          ? "z-10 bg-[#4285F4] text-white border-[#4285F4]"
          : "bg-white text-gray-600 hover:bg-gray-50"
      )}
      onClick={onClick}
    >
      {page}
    </button>
  )
}

function Ellipsis() {
  return (
    <div className="flex h-8 w-8 items-center justify-center border border-gray-300 bg-white text-gray-400">
      <MoreHorizontal size={14} />
    </div>
  )
}
