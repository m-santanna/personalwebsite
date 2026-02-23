"use client"

import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import * as Logos from "./logos"
import { JPRAC_URL, RAFAELWITT_URL, FOLKYOURSELF_URL } from "@/lib/constants"
import Image, { StaticImageData } from "next/image"
import jpracSrc from "@/images/jprac.png"
import rafaelwittSrc from "@/images/rafaelwitt.png"
import folkyourselfSrc from "@/images/folkyourself.png"

export interface Project {
  title: string
  description: string
  page: string
  url: string
  tech: (keyof typeof Logos)[]
  imageSrc: StaticImageData
}

export const PROJECTS: Project[] = [
  {
    title: "jprac",
    description: "A real-time competitive game to practice Japanese. Compete with friends to see who knows Hiragana, Katakana and N5/N4 Kanji best.",
    page: "/projects/jprac",
    url: JPRAC_URL,
    tech: ["Nextjs", "React", "Tailwind", "Redis", "ElysiaJS", "Upstash", "TypeScript"],
    imageSrc: jpracSrc,
  },
  {
    title: "Rafael Witt",
    description: "A minimalist portfolio for the musician Rafael Witt. Focusing on a clean aesthetic and smooth interactions.",
    page: "/projects/rafaelwitt",
    url: RAFAELWITT_URL,
    tech: ["Nextjs", "React", "Tailwind", "Turso", "TypeScript"],
    imageSrc: rafaelwittSrc,
  },
  {
    title: "FolkYourself",
    description: "An e-commerce like platform for folk music enthusiasts. Custom built with a focus on branding and user experience.",
    page: "/projects/folkyourself",
    url: FOLKYOURSELF_URL,
    tech: ["Nextjs", "React", "Tailwind", "Motion", "TypeScript"],
    imageSrc: folkyourselfSrc,
  },
]

export function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const router = useRouter()

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
    }
  }

  useEffect(() => {
    const current = scrollRef.current
    if (current) {
      current.addEventListener("scroll", checkScroll)
      checkScroll()
      window.addEventListener("resize", checkScroll)
    }
    return () => {
      current?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="group relative w-full">
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden snap-x snap-mandatory pb-4"
      >
        {PROJECTS.map((project, index) => (
          <div
            onClick={() => router.push(project.page)}
            key={index}
            className="min-w-full sm:min-w-[calc(50%-8px)] snap-start group/card cursor-pointer"
          >
            <div className="h-full flex flex-col bg-surface/40 rounded-2xl border border-primary/5 overflow-hidden hover:border-accent/50 transition-colors">
              {/* Banner Placeholder */}
              <div className="aspect-video w-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-surface/20 z-10" />
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl text-primary">{project.title}</h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg hover:bg-accent/10 text-accent transition-colors"
                  >
                    <ExternalLink className="size-4" />
                  </Link>
                </div>

                <p className="text-sm text-primary/70 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((techName) => {
                      const Icon = Logos[techName] as React.FC<React.SVGProps<SVGSVGElement>>
                      return Icon ? (
                        <div key={techName} className="flex items-center gap-1.5 group/tech" title={techName}>
                          <Icon className="size-4 text-primary/40 grayscale group-hover/tech:grayscale-0 group-hover/tech:text-accent transition-all duration-300" />
                          <span className="text-[10px] font-medium text-primary/60 group-hover/tech:text-primary/80 transition-colors uppercase tracking-wider">
                            {techName}
                          </span>
                        </div>
                      ) : null
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute -left-5 top-4/9 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={cn(
            "p-2 rounded-full bg-surface/80 backdrop-blur-sm border border-primary/10 transition-all shadow-lg",
            canScrollLeft ? "opacity-100 hover:bg-accent hover:text-white cursor-pointer" : "opacity-0 pointer-events-none"
          )}
        >
          <ChevronLeft className="size-5" />
        </button>
      </div>
      <div className="absolute -right-5 top-4/9 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={cn(
            "p-2 rounded-full bg-surface/80 backdrop-blur-sm border border-primary/10 transition-all shadow-lg",
            canScrollRight ? "opacity-100 hover:bg-accent hover:text-white cursor-pointer" : "opacity-0 pointer-events-none"
          )}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>


      <div className="mt-6 flex justify-end">

        <Link
          href="/projects"
          className="text-sm font-medium text-primary/60 hover:text-accent transition-colors flex items-center gap-2 group/link"
        >
          View all projects
          <ChevronRight className="size-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
