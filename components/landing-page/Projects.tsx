import { LOGOS } from "@/components/Logos"
import ProjectCard from "../ProjectCard"
import rafaelwittimg from "@/images/rafaelwitt.png"
import jpracimg from "@/images/jprac.png"
import folkyourselfimg from "@/images/folkyourself.png"
import apollotrackimg from "@/images/apollotrack.png"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

function Projects() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-strong">
      <h1 className="heading py-16">My favorite Projects</h1>
      <div className="mx-auto max-w-xl md:max-w-5xl px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          title="jprac"
          image={jpracimg}
          description="Practice japanese with friends in real-time."
          link={"/projects#jprac"}
          visitLink="https://jprac.vercel.app"
          githubLink="https://github.com/m-santanna/jprac"
          className="hover:to-red-950"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.shadcn, name: "shadcn" },
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.vercel, name: "Vercel" },
          ]}
        />
        <ProjectCard
          title="Rafael Witt"
          image={rafaelwittimg}
          description="His official website, where his shows and concerts can be found."
          link={"/projects#rafaelwitt"}
          visitLink="https://rafaelwitt.com"
          className="hover:to-sky-950"
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
          description="Tracking calories like an olympian god was never that easy."
          link={"/projects#apollotrack"}
          visitLink="https://apollotrack.vercel.app"
          githubLink="https://github.com/m-santanna/apollotrack"
          className="hover:to-lime-950"
          techstack={[
            { icon: LOGOS.tanstack, name: "TanStack" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.jotai, name: "Jotai" },
            { icon: LOGOS.typescript, name: "TypeScript" },
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
