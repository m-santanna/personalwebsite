import * as Logos from "@/components/logos"
import { JPRAC_URL, RAFAELWITT_URL, FOLKYOURSELF_URL } from "@/lib/constants"

export type Project = {
  title: string
  description: string
  url: string
  tech: (keyof typeof Logos)[]
  imageSrc: string
  month: string
  year: string
}

export const PROJECTS: Project[] = [
  {
    title: "jprac",
    description:
      "A real-time competitive game to practice Japanese. Compete with friends to see who knows Hiragana, Katakana and N5/N4 Kanji best.",
    url: JPRAC_URL,
    tech: [
      "Nextjs",
      "React",
      "Tailwind",
      "Redis",
      "ElysiaJS",
      "JWT",
      "shadcn",
      "TypeScript",
      "Upstash",
      "Docker",
      "Vercel",
    ],
    imageSrc: "/images/jprac.png",
    month: "Jan",
    year: "2026",
  },
  {
    title: "Rafael Witt",
    description:
      "A minimalist portfolio for the musician Rafael Witt. Focusing on a clean aesthetic and smooth interactions.",
    url: RAFAELWITT_URL,
    tech: ["Nextjs", "React", "Tailwind", "Turso", "Drizzle", "shadcn", "BetterAuth", "TypeScript", "Vercel"],
    imageSrc: "/images/rafaelwitt.png",
    month: "Aug",
    year: "2025",
  },
  {
    title: "FolkYourself",
    description:
      "An e-commerce like platform for folk music enthusiasts. Custom built with a focus on branding and user experience.",
    url: FOLKYOURSELF_URL,
    tech: ["Nextjs", "React", "Tailwind", "Motion", "shadcn", "TypeScript", "Vercel"],
    imageSrc: "/images/folkyourself.png",
    month: "Feb",
    year: "2025",
  },
]
