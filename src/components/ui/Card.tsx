import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  interactive?: boolean
}

export function Card({ children, className, interactive = false, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-[var(--surface)] backdrop-blur-md border border-[var(--border)] rounded-xl",
        "transition-all duration-300",
        interactive && "hover:bg-[var(--surface-elevated)] hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_0_0_1px_var(--accent)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
