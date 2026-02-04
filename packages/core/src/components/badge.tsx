import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@ling-design/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // 添加一些常用的状态色，对应截图中的草稿等
        draft: "bg-slate-100 text-slate-500 hover:bg-slate-200",
        success: "bg-green-100 text-green-600 hover:bg-green-200",
        warning: "bg-orange-100 text-orange-600 hover:bg-orange-200", 
        error: "bg-red-100 text-red-600 hover:bg-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
