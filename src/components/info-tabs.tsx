"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { BadgeQuestionMark } from "lucide-react"
import { Tooltip } from "./tooltip"

type Tab = "Education" | "Professional" | "Projects"

export function InfoTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Education")
  const tabs: Tab[] = ["Projects", "Professional", "Education"]
  const ballsClassName = "absolute -left-1.5 top-2 w-2.5 h-2.5 rounded-full animate-in duration-300 transition-all fade-in"

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl text-accent animate-in duration-500 fade-in transition-all">
        Experience
      </h1>
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "pb-2 text-sm sm:text-base cursor-pointer font-medium transition-all duration-300 relative",
              activeTab === tab
                ? "text-primary cursor-default"
                : "text-primary/50 hover:text-primary/80"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent animate-in fade-in slide-in-from-left-2 duration-300" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Education" && (
          <div className="flex ml-2">
            <div className="mt-2 w-0.5 bg-primary/10" />
            <div>
              <div className="relative pl-6 pb-8">
                <div className={cn(ballsClassName, "bg-accent")} />
                <span className="text-xs font-mono text-primary/50 uppercase tracking-wider">Sep 2024 — Jul 2027</span>
                <h3 className="text-lg font-semibold text-primary leading-tight mt-1">FCT — Universidade NOVA de Lisboa</h3>
                <p className="text-sm text-primary/70 mt-1">B.Sc. in Computer Science</p>
              </div>

              <div className="relative pl-6 pb-8">
                <div className={cn(ballsClassName, "bg-accent/70")} />
                <span className="text-xs font-mono text-primary/50 uppercase tracking-wider">Sep 2020 — Jul 2024</span>
                <h3 className="text-lg font-semibold text-primary leading-tight mt-1">IST — Universidade de Lisboa</h3>
                <p className="text-sm text-primary/70 mt-1 flex items-center gap-2">
                  B.Sc. in Biomedical Engineering
                  <Tooltip direction="bottom" padding="px-4 py-1.5" size="w-52" icon={<BadgeQuestionMark className="size-4 hidden sm:block" />} text="I dropped out though." />
                </p>
              </div>

              <div className="relative pl-6">
                <div className={cn(ballsClassName, "bg-accent/40")} />
                <span className="text-xs font-mono text-primary/50 uppercase tracking-wider">Jan 2017 — Dec 2019</span>
                <h3 className="text-lg font-semibold text-primary leading-tight mt-1">Colégio Farroupilha</h3>
                <p className="text-sm text-primary/70 mt-1">High School</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Professional" && (
          <div className="space-y-4">
            <p className="text-primary/80">Content for work experience goes here...</p>
          </div>
        )}
        {activeTab === "Projects" && (
          <div className="space-y-4">
            <p className="text-primary/80">Content for projects goes here...</p>
          </div>
        )}
      </div>
    </div>
  )
}
