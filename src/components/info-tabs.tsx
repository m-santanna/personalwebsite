"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { BadgeQuestionMark } from "lucide-react"
import { Tooltip } from "./tooltip"
import Link from "next/link"
import { ChevronUp, ChevronDown } from "lucide-react"
import { GM_FLOW_URL } from "@/lib/constants"
import { StyledSpan } from "./styled-span"
import { ProjectCarousel } from "./project-carousel"

type Tab = "Education" | "Professional" | "Projects"
const ballsClassName = "absolute -left-1.5 top-2 w-2.5 h-2.5 rounded-full animate-in duration-300 transition-all fade-in"

export function InfoTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Projects")
  const [showMore, setShowMore] = useState(false)
  const tabs: Tab[] = ["Projects", "Professional", "Education"]

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
                  <Tooltip direction="bottom" padding="px-4 py-1.5" size="w-54" icon={<BadgeQuestionMark className="size-4 hidden sm:block" />} text="I dropped out though." />
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
          <div className="flex ml-2">
            <div className="mt-2 w-0.5 bg-primary/10" />
            <div className="relative pl-6">
              <div className={cn(ballsClassName, "bg-accent")} />
              <span className="text-xs font-mono text-primary/50 uppercase tracking-wider">Aug 2025 — Feb 2026</span>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 mt-1">
                <h3 className="text-lg font-semibold text-primary leading-tight">Full Stack Developer Intern</h3>
                <span className="text-primary/40 hidden sm:block">@</span>
                <Link target="_blank" href={GM_FLOW_URL}><StyledSpan text="GM Flow" textOnHover="GM Flow" /></Link>
              </div>

              <div className="mt-4 space-y-4 max-w-2xl text-primary/80 leading-relaxed">
                <p>
                  <span className="text-primary font-semibold">TL;DR:</span> Architected and built a full-stack AI platform from scratch for GM Flow, using Next.js and LLMs to automate HR workflows and reduce manual drafting time by ~50%.
                </p>
                {showMore && (
                  <>
                    <p>
                      I was initially brought to be a Consultant. As I talked to the team, we realized there was a
                      possibility to improve the HR&apos;s process of contract drafting by creating AI automations.
                    </p>
                    <p>
                      Therefore, I was assigned to architect and build the AI platform from the ground up.
                      Used Next.js with Server Actions to keep things clean and integrated both OpenAI and Gemini
                      to handle the heavy lifting of turning meeting transcripts into actual contract drafts.
                    </p>

                    <p>
                      It wasn&apos;t just about the AI, though. I built the whole system architecture, from secure,
                      company-scoped dynamic routes to role-based access and data modeling with NeonDB and BetterAuth.
                      It was pretty rewarding to see it cut down the HR team&apos;s manual drafting time by about half.
                    </p>
                    <p>
                      I also spent a good chunk of time demoing these features to leadership,
                      showing how we could take these old manual workflows and make them way more
                      scalable with the right AI integration.
                    </p>
                  </>
                )}

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="w-fit text-accent hover:text-accent/80 text-sm font-medium transition-colors cursor-pointer"
                >
                  {showMore ? <span className="flex gap-2 items-center">Show less<ChevronUp className="size-4" /></span> : <span className="flex gap-2 items-center">Show more<ChevronDown className="size-4" /></span>}
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Projects" && (
          <div className="animate-in fade-in duration-500">
            <ProjectCarousel />
          </div>
        )}
      </div>
    </div>
  )
}
