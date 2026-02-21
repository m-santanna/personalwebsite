"use client"

import { useState } from "react"

export function StyledSpan({ text, textOnHover, className }: { text: string, textOnHover: string, className?: string }) {
  const [isHover, setHover] = useState(false)
  return (
    <span onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={className}>
      {
        isHover
          ? <span className="bg-accent/40 animate-in fade-in duration-500 transition-all ease-in-out">{textOnHover}</span>
          : <span className="text-accent animate-in fade-in duration-500 transition-all ease-in-out underline decoration-dashed underline-offset-4">{text}</span>
      }
    </span>
  )
}
