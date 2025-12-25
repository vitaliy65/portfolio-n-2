import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md bg-primary-red-dark px-3 py-2 text-base shadow-custom-sm-inset
          ring-offset-background placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-background-light`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
