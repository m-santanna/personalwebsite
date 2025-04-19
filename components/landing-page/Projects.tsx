import { LOGOS } from "@/components/Logos"
import ProjectCard from "../ProjectCard"
import langpracimg from "@/images/langprac.png"
import folkyourselfimg from "@/images/folkyourself.png"
import apollotrackimg from "@/images/apollotrack.png"
import fitnesstrackimg from "@/images/fitnesstrack.png"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

function Projects() {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] bg-strong"
      id="Projects"
    >
      <h1 className="heading py-16">My favorite Projects</h1>
      <div className="mx-auto max-w-xl md:max-w-5xl px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="langprac"
          image={langpracimg}
          description="Simple and fun way to practice new alphabets."
          link={"/projects#langprac"}
          visitLink="https://langprac.vercel.app"
          githubLink="https://github.com/m-santanna/langprac"
          className="hover:to-red-950"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.shadcn, name: "shadcn" },
            { icon: LOGOS.jotai, name: "jotai" },
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.vercel, name: "Vercel" },
          ]}
        />
        <ProjectCard
          title="ApolloTrack"
          image={apollotrackimg}
          description="App to track calories, workouts and even supermarket lists."
          link={"/projects#apollotrack"}
          githubLink="https://github.com/m-santanna/apollotrack"
          className="hover:to-lime-950"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.supabase, name: "Supabase" },
            { icon: LOGOS.drizzle, name: "Drizzle ORM" },
            { icon: LOGOS.betterauth, name: "BetterAuth" },
            { icon: LOGOS.motion, name: "framer-motion" },
            { icon: LOGOS.shadcn, name: "shadcn" },
            { icon: LOGOS.vercel, name: "Vercel" },
          ]}
        />
        <ProjectCard
          title="folkyourself"
          image={folkyourselfimg}
          description="E-Commerce website for Rafael Witt's brand."
          link={"/projects#folkyourself"}
          visitLink="https://folkyourself.store"
          className="hover:to-rose-950"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.motion, name: "framer-motion" },
            { icon: LOGOS.shadcn, name: "shadcn" },
            { icon: LOGOS.vercel, name: "Vercel" },
          ]}
        />
        <ProjectCard
          title="FitnessTrack"
          image={fitnesstrackimg}
          description="Web App built to help users track their workouts."
          link={"/projects#fitnesstrack"}
          visitLink="https://fitnesstrack.vercel.app"
          githubLink="https://github.com/m-santanna/fitnesstrack"
          className="hover:to-green-950"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.postgres, name: "PostgreSQL" },
            { icon: LOGOS.clerk, name: "Clerk" },
            { icon: LOGOS.neondb, name: "NeonDB" },
            { icon: LOGOS.prisma, name: "Prisma" },
            { icon: LOGOS.vercel, name: "Vercel" },
          ]}
        />
      </div>
      <div className="flex items-center w-full justify-center py-16">
        <Link
          href={"projects"}
          className="group flex items-center gap-1 text-md md:text-xl text-stone-200 hover:text-stone-400"
        >
          See all projects
          <ArrowRight className="size-6 md:size-8 group-hover:translate-x-2 duration-200" />
        </Link>
      </div>
    </section>
  )
}

export default Projects
