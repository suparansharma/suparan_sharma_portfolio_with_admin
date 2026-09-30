import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--surface-elevated)] text-[var(--foreground)] border border-[var(--border)]",
    outline: "bg-transparent text-[var(--muted-foreground)] border border-[var(--border-muted)]",
    accent: "bg-[var(--accent)] text-[var(--accent-foreground)] border border-[var(--accent)]",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
