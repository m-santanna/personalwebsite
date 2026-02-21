"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const accents = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender",
]

const themes = ["latte", "frappe", "macchiato", "mocha"]

function ThemePicker() {
  const [activeAccent, setActiveAccent] = useState<string | null>(null)
  const [activeTheme, setActiveTheme] = useState<string | null>(null)

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme")
    const localStorageAccent = localStorage.getItem("accent")

    if (localStorageAccent && localStorageTheme) {
      setActiveAccent(localStorageAccent)
      setActiveTheme(localStorageTheme)
      document.documentElement.setAttribute("data-accent", localStorageAccent)
      document.documentElement.setAttribute("data-theme", localStorageTheme)
    }
    else {
      const dataTheme = document.documentElement.getAttribute("data-theme")
      const dataAccent = document.documentElement.getAttribute("data-accent")
      setActiveAccent(dataAccent)
      setActiveTheme(dataTheme)
    }
  }, [])

  const updateAttr = (name: string, value: string, setState: (v: string) => void) => {
    document.documentElement.setAttribute(name, value)
    setState(value)
    localStorage.setItem(name.replace("data-", ""), value)
  }

  return (
    <div className="flex flex-col gap-6 p-4 rounded-3xl border border-foreground/10 backdrop-blur-xl shadow-xl max-w-fit">
      {/* THEME FLAVORS */}
      <div className="space-y-3">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 px-1">
          Theme Flavor
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => updateAttr("data-theme", theme, setActiveTheme)}
              className={cn(
                "hover:cursor-pointer px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeTheme === theme
                  ? "bg-primary text-background shadow-md shadow-primary/20"
                  : "bg-foreground/5 hover:bg-foreground/10 text-foreground/70"
              )}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* ACCENT COLORS */}
      <div className="space-y-3">
        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/40 px-1">
          Accent Color
        </h2>
        <div className="grid grid-cols-7 gap-2 sm:gap-2.5">
          {accents.map((accent) => (
            <button
              key={accent}
              title={accent.charAt(0).toUpperCase() + accent.slice(1)}
              aria-label={`Set accent to ${accent}`}
              className={cn(
                "hover:cursor-pointer relative size-6 rounded-full transition-all duration-200 hover:scale-110 active:scale-90",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeAccent === accent
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "hover:ring-1 hover:ring-foreground/20"
              )}
              style={{ backgroundColor: `var(--${accent})` }}
              onClick={() => updateAttr("data-accent", accent, setActiveAccent)}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThemePicker
