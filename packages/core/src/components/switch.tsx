import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@ling-design/utils"

const switchVariants = cva(
  "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#4285F4] data-[state=unchecked]:bg-slate-200",
  {
    variants: {
      size: {
        default: "h-6 w-11",
        sm: "h-5 w-9",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        default: "h-5 w-5",
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange">,
    VariantProps<typeof switchVariants> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, size, checked: checkedProp, defaultChecked, onCheckedChange, ...props }, ref) => {
    const [checked, setChecked] = React.useState(defaultChecked ?? false)

    const isControlled = checkedProp !== undefined
    const state = isControlled ? checkedProp : checked

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return
      
      const newState = !state
      if (!isControlled) {
        setChecked(newState)
      }
      onCheckedChange?.(newState)
      props.onClick?.(event)
    }

    return (
      <button
        type="button"
        role="switch"
        aria-checked={state}
        data-state={state ? "checked" : "unchecked"}
        ref={ref}
        className={cn(switchVariants({ size, className }))}
        onClick={handleClick}
        {...props}
      >
        <span className={cn(switchThumbVariants({ size }))} data-state={state ? "checked" : "unchecked"} />
      </button>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
