import { cn } from "@/lib/utils"
import Link from "next/link"

export function StyledLink({ text, href, className }: { text: string, href: string, className?: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("hover:bg-accent/40 hover:text-primary text-accent hover:no-underline",
        "animate-in fade-in duration-500 transition-all ease-in-out",
        "underline decoration-dashed underline-offset-4",
        className
      )}>
      {text}
    </Link>
  )
}
