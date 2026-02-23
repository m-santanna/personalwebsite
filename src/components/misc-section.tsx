"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { getGlobalClicks, increaseGlobalClicksBy } from "@/lib/actions"
import { Clock, Quote, Keyboard, Loader2, Grid3X3, CircleDot } from "lucide-react"
import { cn } from "@/lib/utils"
import confetti from "canvas-confetti"

const STORAGE_KEY = "clicks"

const DAILY_QUOTES = [
  `"It works on my machine."`,
  `"Why did the developer get lost in the woods? Because they couldn't find the root!"`,
  `"A SQL query walks into a bar, sees two tables and asks... 'Can I JOIN you?'"`,
  `"Why do programmers prefer dark mode? Because light attracts bugs."`,
  `"// TODO: fix this later" — Written 3 years ago. Still there.`,
  `"The best thing about a boolean is that even if you're wrong, you're only off by a bit."`,
  `"Debugging is like being the detective in a crime movie where you are also the murderer."`,
]

function getStoredClicks(): number {
  if (typeof window === "undefined") return 0
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? Number(stored) : 0
}

function setStoredClicks(count: number) {
  localStorage.setItem(STORAGE_KEY, String(count))
}

function getLisbonDay(): number {
  const now = new Date()
  const lisbon = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Lisbon",
    weekday: "short",
  }).format(now)

  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  }
  return dayMap[lisbon] ?? 0
}

// ─── Card Wrapper ──────────────────────────────────────────
function MiscCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "bg-surface/40 rounded-2xl border border-primary/5 p-5 flex flex-col gap-3",
        className
      )}
    >
      {children}
    </div>
  )
}

function CardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="font-semibold text-primary text-sm uppercase tracking-wider">{title}</h3>
    </div>
  )
}

// ─── Global Click Counter ───────────────────────────────
function ClickCounter() {
  const [localClicks, setLocalClicks] = useState(0)
  const [globalClicks, setGlobalClicks] = useState<number | null>(null)
  const pendingRef = useRef(0)

  useEffect(() => {
    setLocalClicks(getStoredClicks())
    getGlobalClicks().then((count) => setGlobalClicks(count))
  }, [])

  const flush = useCallback(async () => {
    const amount = pendingRef.current
    if (amount === 0) return
    pendingRef.current = 0
    const updated = await increaseGlobalClicksBy(amount)
    setGlobalClicks(updated)
  }, [])

  const handleClick = () => {
    const nextLocal = localClicks + 1
    setLocalClicks(nextLocal)
    setStoredClicks(nextLocal)

    setGlobalClicks((prev) => (prev !== null ? prev + 1 : prev))
    pendingRef.current += 1
  }

  return (
    <MiscCard className="pointer-only flex-col">
      <CardHeader icon={<Clock className="size-4 text-accent" />} title="Magic Button" />
      <div className="flex-1 flex flex-col items-center justify-center gap-3 py-2">
        <p className="text-4xl sm:text-5xl font-bold font-mono text-accent tabular-nums">
          {globalClicks === null ? (
            <Loader2 className="size-8 animate-spin text-accent/50" />
          ) : (
            globalClicks.toLocaleString()
          )}
        </p>
        <button
          onClick={handleClick}
          onMouseLeave={flush}
          className="bg-accent/15 text-accent hover:bg-accent/25 border border-accent/30 rounded-xl py-2 px-6 font-medium transition-all duration-150 active:scale-95 cursor-pointer text-sm"
        >
          Click me!
        </button>
        <p className="text-xs font-mono text-primary/50">
          <span>You&apos;ve clicked {localClicks.toLocaleString()} times</span>
        </p>
      </div>
    </MiscCard>
  )
}

// ─── Lisbon Clock ──────────────────────────────────────
function LisbonClock() {
  const [time, setTime] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Lisbon",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
      setDate(
        now.toLocaleDateString("en-GB", {
          timeZone: "Europe/Lisbon",
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      )
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <MiscCard>
      <CardHeader icon={<Clock className="size-4 text-accent" />} title="My clock" />
      <div className="flex-1 flex flex-col items-center justify-center py-4">
        <p className="text-3xl sm:text-4xl font-mono font-bold text-primary tracking-widest tabular-nums">
          {time ?? "--:--:--"}
        </p>
        <p className="text-xs font-mono text-primary/70 mt-2 uppercase tracking-wider">
          {date ?? "---"}
        </p>
        <p className="text-[10px] font-mono text-primary/50 mt-1">
          Europe/Lisbon
        </p>
      </div>
    </MiscCard>
  )
}

// ─── Pixel Art Canvas ──────────────────────────────────
const GRID_SIZE = 8

function PixelCanvas() {
  const [grid, setGrid] = useState<boolean[]>(() => Array(GRID_SIZE * GRID_SIZE).fill(false))
  const [painting, setPainting] = useState(false)
  const [paintMode, setPaintMode] = useState(true)

  const toggle = (index: number) => {
    setGrid((prev) => {
      const next = [...prev]
      next[index] = paintMode
      return next
    })
  }

  const startPaint = (index: number) => {
    const newMode = !grid[index]
    setPaintMode(newMode)
    setPainting(true)
    setGrid((prev) => {
      const next = [...prev]
      next[index] = newMode
      return next
    })
  }

  const clear = () => setGrid(Array(GRID_SIZE * GRID_SIZE).fill(false))

  return (
    <MiscCard>
      <CardHeader icon={<Grid3X3 className="size-4 text-accent" />} title="Pixel Art" />
      <div className="flex-1 flex items-center justify-center py-2">
        <div
          className="grid gap-0.5 select-none"
          style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
          onMouseLeave={() => setPainting(false)}
          onMouseUp={() => setPainting(false)}
        >
          {grid.map((on, i) => (
            <div
              key={i}
              onMouseDown={(e) => { e.preventDefault(); startPaint(i) }}
              onMouseEnter={() => painting && toggle(i)}
              className={cn(
                "w-5 h-5 sm:w-6 sm:h-6 rounded-sm cursor-pointer transition-colors duration-100",
                on ? "bg-accent" : "bg-primary/10 hover:bg-primary/20"
              )}
            />
          ))}
        </div>
      </div>
      <button
        onClick={clear}
        className="text-[11px] font-mono text-primary/40 hover:text-primary/60 transition-colors cursor-pointer text-right"
      >
        clear
      </button>
    </MiscCard>
  )
}


// ─── Dev Quote of the Day ──────────────────────────────
function DevQuote() {
  const [quote, setQuote] = useState<string | null>(null)

  useEffect(() => {
    const dayIndex = getLisbonDay()
    setQuote(DAILY_QUOTES[dayIndex])
  }, [])

  return (
    <MiscCard>
      <CardHeader icon={<Quote className="size-4 text-accent" />} title="Quote of the Day" />
      <div className="flex-1 flex items-center justify-center py-4">
        <p className="text-sm text-primary/70 leading-relaxed italic text-center">
          {quote ?? "..."}
        </p>
      </div>
      <p className="text-[11px] text-primary/60 font-mono text-right">
        - Funny, Someone
      </p>
    </MiscCard>
  )
}

// ─── Coin Flip ─────────────────────────────────────────
function CoinFlip() {
  const [result, setResult] = useState<"heads" | "tails" | null>(null)
  const [flipping, setFlipping] = useState(false)

  const flip = () => {
    if (flipping) return
    setFlipping(true)
    setResult(null)

    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? "heads" : "tails"
      setResult(outcome)
      setFlipping(false)
    }, 1000)
  }

  return (
    <MiscCard>
      <CardHeader icon={<CircleDot className="size-4 text-accent" />} title="Coin Flip" />
      <div className="flex-1 flex flex-col items-center justify-center gap-3 py-2">
        <button
          onClick={flip}
          className="w-20 h-20 rounded-full border-2 border-accent/30 hover:border-accent bg-accent/10 hover:bg-accent/20 transition-all duration-150 cursor-pointer flex items-center justify-center active:scale-90"
        >
          <span
            className={cn(
              "text-2xl font-bold text-accent select-none transition-transform",
              flipping && "animate-spin"
            )}
          >
            {flipping ? "?" : result === "heads" ? "H" : result === "tails" ? "T" : "?"}
          </span>
        </button>
        <p className="text-xs font-mono text-primary/50">
          {result ? (
            <span className="text-primary/70">{result}!</span>
          ) : (
            <span>flip it</span>
          )}
        </p>
      </div>
    </MiscCard>
  )
}

// ─── Keyboard Easter Egg ───────────────────────────────
function EasterEgg() {
  const [found, setFound] = useState(false)

  const fireConfetti = useCallback(() => {
    const duration = 2000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#fab387", "#f5c2e7", "#a6e3a1", "#89b4fa", "#f9e2af"],
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#fab387", "#f5c2e7", "#a6e3a1", "#89b4fa", "#f9e2af"],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k") {
        e.preventDefault()
        setFound(true)
        fireConfetti()
      }
    }

    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [fireConfetti])

  return (
    <MiscCard className="pointer-only flex-col pb-10">
      <CardHeader icon={<Keyboard className="size-4 text-accent" />} title="Easter Egg" />
      <div className="flex-1 flex flex-col items-center justify-center gap-3 py-4">
        {found ? (
          <>
            <p className="text-sm text-accent font-medium">You found it!</p>
            <p className="text-xs text-primary/50 font-mono">nice one :)</p>
          </>
        ) : (
          <>
            <p className="text-sm text-primary/60 text-center">
              There&apos;s a secret shortcut for this page. Can you figure out which one?
            </p>
          </>
        )}
      </div>
    </MiscCard>
  )
}

// ─── Main Export ───────────────────────────────────────────
export function MiscSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ClickCounter />
        <LisbonClock />
        <PixelCanvas />
        <DevQuote />
        <CoinFlip />
        <EasterEgg />
      </div>
    </div>
  )
}
