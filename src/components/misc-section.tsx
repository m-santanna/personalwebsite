"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { getGlobalClicks, increaseGlobalClicksBy } from "@/lib/actions"
import { Clock, Quote, Keyboard, Loader2, Grid3X3, CircleDot, Palette, Gauge } from "lucide-react"
import { cn } from "@/lib/utils"
import confetti from "canvas-confetti"
import ThemePicker from "./theme-picker"
import { INCREASE_CLICKS_CAP } from "@/lib/constants"

const LOCAL_CLICKS_KEY = "clicks"
const UNSAVED_CLICKS_KEY = "unsaved-clicks"

const DAILY_QUOTES = [
  `"It works on my machine."`,
  `"Why did the developer get lost in the woods? Because they couldn't find the root!"`,
  `"A SQL query walks into a bar, sees two tables and asks... 'Can I JOIN you?'"`,
  `"Why do programmers prefer dark mode? Because light attracts bugs."`,
  `"// TODO: fix this later" — Written 3 years ago. Still there.`,
  `"The best thing about a boolean is that even if you're wrong, you're only off by a bit."`,
  `"Debugging is like being the detective in a crime movie where you are also the murderer."`,
]

function getStoredClicks(key: string): number {
  if (typeof window === "undefined") return 0
  const stored = localStorage.getItem(key)
  return stored ? Number(stored) : 0
}

function setStoredClicks(key: string, count: number) {
  localStorage.setItem(key, String(count))
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
    setLocalClicks(getStoredClicks(LOCAL_CLICKS_KEY))

    // Even though this allows users to manually create the unsaved key in localStorage
    // and inflate the value by the INCREASE_CLICKS_CAP, it is still better than losing 
    // clicks on refresh or closing tabs
    const unsaved = getStoredClicks(UNSAVED_CLICKS_KEY)
    localStorage.removeItem(UNSAVED_CLICKS_KEY)

    const loadGlobal = async () => {
      if (unsaved > 0 && unsaved <= INCREASE_CLICKS_CAP) {
        const updated = await increaseGlobalClicksBy(unsaved)
        setGlobalClicks(updated)
      }
      else if (unsaved > INCREASE_CLICKS_CAP) {
        const count = await increaseGlobalClicksBy(INCREASE_CLICKS_CAP)
        setGlobalClicks(count)
      }
      else
        setGlobalClicks(await getGlobalClicks())
    }

    loadGlobal()
  }, [])

  const flush = useCallback(async () => {
    const amount = pendingRef.current
    if (amount === 0) return
    pendingRef.current = 0
    localStorage.removeItem(UNSAVED_CLICKS_KEY)
    const updated = await increaseGlobalClicksBy(amount)
    setGlobalClicks(updated)
  }, [])

  const handleClick = () => {
    const nextLocal = localClicks + 1
    setLocalClicks(nextLocal)
    setStoredClicks(LOCAL_CLICKS_KEY, nextLocal)

    setGlobalClicks((prev) => (prev !== null ? prev + 1 : prev))
    pendingRef.current += 1
    setStoredClicks(UNSAVED_CLICKS_KEY, pendingRef.current)
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
          {
            localClicks === 1
              ? <span>You&apos;ve clicked 1 time</span>
              : <span>You&apos;ve clicked {localClicks.toLocaleString()} times</span>
          }
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
      if (e.metaKey && e.key === "k" || e.ctrlKey && e.key === "k") {
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

// ─── Theme Card ────────────────────────────────────────
function ThemeCard() {
  return (
    <MiscCard>
      <CardHeader icon={<Palette className="size-4 text-accent" />} title="Theme" />
      <ThemePicker />
    </MiscCard>
  )
}

// ─── Typing Speed Test ─────────────────────────────────
const TYPING_SENTENCES = [
  "The quick brown fox jumps over the lazy dog.",
  "Every great developer was once a beginner.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Talk is cheap. Show me the code.",
  "Fix the cause, not the symptom.",
  "Make it work, make it right, make it fast.",
]

const TYPING_BEST_KEY = "typing-best-wpm"

function getStoredBest(): number {
  if (typeof window === "undefined") return 0
  const stored = localStorage.getItem(TYPING_BEST_KEY)
  return stored ? Number(stored) : 0
}

function TypingSpeedTest() {
  const [state, setState] = useState<"idle" | "running" | "done">("idle")
  const [sentence, setSentence] = useState("")
  const [input, setInput] = useState("")
  const [startTime, setStartTime] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [bestWpm, setBestWpm] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setBestWpm(getStoredBest())
  }, [])

  const pickSentence = () => TYPING_SENTENCES[Math.floor(Math.random() * TYPING_SENTENCES.length)]

  const start = () => {
    const s = pickSentence()
    setSentence(s)
    setInput("")
    setWpm(0)
    setAccuracy(100)
    setState("running")
    setStartTime(Date.now())
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleInput = (value: string) => {
    if (state !== "running") return
    setInput(value)

    const elapsed = (Date.now() - startTime) / 1000 / 60
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length
    const currentWpm = elapsed > 0 ? Math.round(wordCount / elapsed) : 0
    setWpm(currentWpm)

    let correct = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] === sentence[i]) correct++
    }
    setAccuracy(value.length > 0 ? Math.round((correct / value.length) * 100) : 100)

    if (value === sentence) {
      setState("done")
      if (currentWpm > bestWpm) {
        setBestWpm(currentWpm)
        localStorage.setItem(TYPING_BEST_KEY, String(currentWpm))
      }
    }
  }

  return (
    <MiscCard className="pointer-only sm:col-span-2 flex-col">
      <CardHeader icon={<Gauge className="size-4 text-accent" />} title="Typing Test" />

      {state === "idle" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 py-4">
          <p className="text-sm text-primary/60 text-center">
            Test your typing speed with a short sentence.
          </p>
          <button
            onClick={start}
            className="bg-accent/15 text-accent hover:bg-accent/25 border border-accent/30 rounded-xl py-2 px-6 font-medium transition-all duration-150 active:scale-95 cursor-pointer text-sm"
          >
            Start
          </button>
          {bestWpm > 0 && (
            <p className="text-xs font-mono text-primary/50">
              Personal best: {bestWpm} WPM
            </p>
          )}
        </div>
      )}

      {state === "running" && (
        <div className="flex-1 flex flex-col gap-4 py-2">
          <p className="text-sm text-primary/80 leading-relaxed font-mono tracking-wide">
            {sentence.split("").map((char, i) => {
              let color = "text-primary/40"
              if (i < input.length) {
                color = input[i] === char ? "text-accent" : "text-red-400"
              }
              return (
                <span key={i} className={color}>
                  {char}
                </span>
              )
            })}
          </p>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-2.5 text-sm font-mono text-primary outline-none focus:border-accent/40 transition-colors"
            placeholder="Start typing..."
          />
          <div className="flex justify-between text-xs font-mono text-primary/50">
            <span>{wpm} WPM</span>
            <span>{accuracy}% accuracy</span>
          </div>
        </div>
      )}

      {state === "done" && (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 py-4">
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold font-mono text-accent">{wpm}</p>
              <p className="text-[11px] font-mono text-primary/50 uppercase mt-1">WPM</p>
            </div>
          </div>
          {wpm >= bestWpm && bestWpm > 0 && (
            <p className="text-xs text-accent font-medium">New personal best!</p>
          )}
          <button
            onClick={start}
            className="bg-accent/15 text-accent hover:bg-accent/25 border border-accent/30 rounded-xl py-2 px-6 font-medium transition-all duration-150 active:scale-95 cursor-pointer text-sm mt-2"
          >
            Try again
          </button>
          <p className="text-xs font-mono text-primary/50">
            Best: {bestWpm} WPM
          </p>
        </div>
      )}
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
        <ThemeCard />
        <PixelCanvas />
        <DevQuote />
        <CoinFlip />
        <TypingSpeedTest />
        <EasterEgg />
      </div>
    </div>
  )
}
