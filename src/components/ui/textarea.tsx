import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        `flex min-h-[80px] w-full rounded-md bg-primary-red-dark px-3 py-2 text-base shadow-custom-sm-inset
        ring-offset-background placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-background-light`,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
