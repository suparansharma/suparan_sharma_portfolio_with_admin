import * as React from "react"
import { cn } from "@/lib/utils"

interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "online" | "offline" | "processing"
  pulse?: boolean
  label?: string
}

export function StatusIndicator({ 
  status = "online", 
  pulse = true,
  label,
  className, 
  ...props 
}: StatusIndicatorProps) {
  
  const colors = {
    online: "bg-[var(--success)]",
    offline: "bg-[var(--muted-foreground)]",
    processing: "bg-[var(--warning)]",
  }

  return (
    <div className={cn("inline-flex items-center gap-2", className)} {...props}>
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", colors[status])} />
        )}
        <span className={cn("relative inline-flex rounded-full h-2 w-2", colors[status])} />
      </span>
      {label && (
        <span className="text-[0.65rem] font-mono tracking-wider uppercase text-[var(--muted-foreground)]">
          {label}
        </span>
      )}
    </div>
  )
}
