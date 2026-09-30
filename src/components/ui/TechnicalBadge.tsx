import * as React from "react"
import { cn } from "@/lib/utils"

interface TechnicalBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function TechnicalBadge({ children, className, ...props }: TechnicalBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[0.65rem] font-mono tracking-wider font-semibold uppercase",
        "bg-[var(--surface)] text-[var(--muted-foreground)] border border-[var(--border-muted)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
