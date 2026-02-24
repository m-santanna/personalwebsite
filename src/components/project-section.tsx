import * as Logos from "@/components/logos"
import Link from "next/link"
import Image from "next/image"
import { PROJECTS } from "@/lib/projects"

export default function ProjectSection() {
  return (
    <div className="flex flex-col gap-8">
      {PROJECTS.map((project) => {
        const isEven = PROJECTS.indexOf(project) % 2 === 0
        return (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            className="group bg-surface/40 rounded-2xl border border-primary/5 overflow-hidden hover:border-accent/30 transition-all duration-300 relative"
          >
            <div
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image */}
              <div className="relative aspect-video lg:aspect-auto lg:w-1/2 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-transparent to-surface/30 z-10" />
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center gap-4 lg:w-1/2">

                {/* Title and Date */}
                <div className="flex flex-col gap-0.5">
                  <h1 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h1>

                  <span className="text-xs font-medium text-primary/40">
                    {project.month}, {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2">
                  {project.tech.map((techName) => {
                    const Icon = Logos[techName] as React.FC<
                      React.SVGProps<SVGSVGElement>
                    >
                    return (
                      <div
                        key={techName}
                        className="flex items-center gap-1.5 group/tech"
                        title={techName}
                      >
                        <Icon className="size-4 text-primary/40 grayscale group-hover/tech:grayscale-0 group-hover/tech:text-accent transition-all duration-300" />
                        <span className="text-[10px] font-medium text-primary/60 group-hover/tech:text-primary/80 transition-colors uppercase tracking-wider">
                          {techName}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Hover glow */}
            <div className="absolute -bottom-10 -right-10 size-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        )
      })}
    </div>
  )
}
