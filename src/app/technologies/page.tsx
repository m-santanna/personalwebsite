import * as Logos from "@/components/logos"
import { StyledSpan } from "@/components/styled-span"
import { Cpu } from "lucide-react"

type TechItem = {
  name: string
  logo: keyof typeof Logos
}

type Category = {
  title: string
  items: TechItem[]
}

const CATEGORIES: Category[] = [
  {
    title: "Languages",
    items: [
      { name: "HTML5", logo: "HTML5" },
      { name: "CSS", logo: "CSS" },
      { name: "TypeScript", logo: "TypeScript" },
      { name: "JavaScript", logo: "JavaScript" },
      { name: "C", logo: "C" },
      { name: "Java", logo: "Java" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Next.js", logo: "Nextjs" },
      { name: "React", logo: "React" },
      { name: "ElysiaJS", logo: "ElysiaJS" },
      { name: "TailwindCSS", logo: "Tailwind" },
      { name: "shadcn/ui", logo: "shadcn" },
    ],
  },
  {
    title: "Databases & ORM & Auth",
    items: [
      { name: "PostgreSQL", logo: "PostgreSQL" },
      { name: "Redis", logo: "Redis" },
      { name: "Upstash", logo: "Upstash" },
      { name: "NeonDB", logo: "NeonDB" },
      { name: "Turso", logo: "Turso" },
      { name: "DrizzleORM", logo: "DrizzleORM" },
      { name: "BetterAuth", logo: "BetterAuth" },
      { name: "JWT", logo: "JWT" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", logo: "Git" },
      { name: "Github", logo: "Github" },
      { name: "Bash", logo: "Bash" },
      { name: "Docker", logo: "Docker" },
      { name: "Bun", logo: "Bun" },
      { name: "Vercel", logo: "Vercel" },
      { name: "OpenCode", logo: "OpenCode" },
      { name: "Claude", logo: "ClaudeAI" },
      { name: "Ghostty", logo: "Ghostty" },
    ],
  },
]

function TechnologiesPage() {
  return (
    <div className="mx-8 sm:mx-30 space-y-10 mb-10">
      <div className="mt-10 flex flex-col gap-2">
        <h1 className="text-primary font-bold text-3xl flex items-center gap-2"><Cpu className="size-6 text-accent" />Technologies</h1>
        <p className="text-foreground/70 text-base sm:text-lg">
          This is a collection of all the tech I am <StyledSpan text="currently" textOnHover="currently" className="cursor-default" /> using.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-surface/40 rounded-2xl border border-primary/5 p-5 flex flex-col gap-4"
          >
            <h2 className="font-semibold text-primary text-sm uppercase tracking-wider">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {category.items.map((item) => {
                const Icon = Logos[item.logo] as React.FC<React.SVGProps<SVGSVGElement>>
                return (
                  <div
                    key={item.logo}
                    className="flex items-center gap-2 group"
                    title={item.name}
                  >
                    <Icon className=" size-5 grayscale data-[theme='latte']:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="text-xs font-medium text-primary/60 group-hover:text-primary transition-colors duration-300 cursor-default">
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnologiesPage
