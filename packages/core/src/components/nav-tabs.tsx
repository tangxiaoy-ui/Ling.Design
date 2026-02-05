import * as React from "react"
import { cn } from "@ling-design/utils"
import { cva, type VariantProps } from "class-variance-authority"

const navTabsVariants = cva("flex", {
  variants: {
    variant: {
      line: "items-center gap-8 border-b border-border/40",
      card: "items-center gap-2 bg-muted/50",
      vertical: "flex-col w-full bg-background",
      button: "inline-flex items-center -space-x-px",
    },
  },
  defaultVariants: {
    variant: "line",
  },
})

const navTabItemVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        line: "relative h-10 px-1 text-muted-foreground hover:text-foreground data-[state=active]:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-6 after:-translate-x-1/2 after:bg-transparent after:transition-colors data-[state=active]:after:bg-primary",
        card: "px-4 py-2 text-muted-foreground hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm",
        vertical: "h-10 w-full justify-start border-r-[3px] border-transparent px-4 text-muted-foreground hover:bg-muted/50 hover:text-foreground data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary",
        button: "h-8 min-w-[54px] border border-border bg-background px-3 hover:bg-muted/50 hover:text-foreground data-[state=active]:z-10 data-[state=active]:border-primary data-[state=active]:text-primary first:rounded-l-sm last:rounded-r-sm",
      },
    },
    defaultVariants: {
      variant: "line",
    },
  }
)

export interface NavTabItem {
  label: React.ReactNode
  value: string
  disabled?: boolean
}

export interface NavTabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navTabsVariants> {
  items?: NavTabItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

export function NavTabs({
  className,
  items = [],
  value: valueProp,
  defaultValue,
  onValueChange,
  variant = "line",
  children,
  ...props
}: NavTabsProps) {
  const [value, setValue] = React.useState(
    valueProp || defaultValue || (items.length > 0 ? items[0].value : undefined)
  )

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp)
    }
  }, [valueProp])

  const handleValueChange = (newValue: string) => {
    if (valueProp === undefined) {
      setValue(newValue)
    }
    onValueChange?.(newValue)
  }

  // If children are provided, we render them directly
  // Ideally children should be NavTab components, but for now we just render them
  // wrapped in the container style.
  if (children) {
    return (
      <div className={cn(navTabsVariants({ variant }), className)} {...props}>
        {children}
      </div>
    )
  }

  return (
    <div className={cn(navTabsVariants({ variant }), className)} {...props}>
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => !item.disabled && handleValueChange(item.value)}
          disabled={item.disabled}
          data-state={value === item.value ? "active" : "inactive"}
          className={cn(navTabItemVariants({ variant }))}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
