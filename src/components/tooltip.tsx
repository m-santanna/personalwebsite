
"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

type Direction = "top" | "bottom" | "left" | "right"

export function Tooltip({ text, icon, className, size, padding, direction }: {
  text: string,
  icon: React.ReactNode,
  className?: string,
  size?: string,
  padding?: string,
  direction?: Direction
}) {
  const [isHover, setHover] = useState(false)
  return (
    <span onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={cn(className, "relative")}>
      {icon}
      <span className={cn("z-10 absolute bg-surface rounded-2xl backdrop-blur-2xl",
        padding ? padding : "p-4",
        size ? size : "w-28",
        direction === "left" ? "-translate-y-1/2 right-5" :
          direction === "top" ? "-translate-x-1/2 bottom-5" :
            direction === "bottom" ? "-translate-x-1/2 top-5" : "-translate-y-1/2 left-5",
        isHover ? "opacity-100" : "opacity-0 pointer-events-none")}>
        {text}
      </span>
    </span>
  )
}
