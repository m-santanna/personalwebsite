import Link from "next/link"
import RegularTextSubheading from "@/components/RegularTextSubheading"
import { Link2 } from "lucide-react"
import { LOGOS } from "@/components/Logos"

function About() {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-radial from-indigo-900 to-[rgba(21,42,59,255)]">
      <h1 className="heading py-16">About me</h1>
      <div className="mx-auto max-w-xl md:max-w-5xl px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <RegularTextSubheading
          title="Languages"
          techstack={[
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.javascript, name: "JavaScript" },
            { icon: LOGOS.python, name: "Python" },
            { icon: LOGOS.c, name: "C" },
            { icon: LOGOS.java, name: "Java" },
          ]}
        />
        <RegularTextSubheading
          title="Frontend"
          techstack={[
            { icon: LOGOS.html, name: "HTML" },
            { icon: LOGOS.css, name: "CSS" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.jotai, name: "Jotai" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.shadcn, name: "shadcn" },
            { icon: LOGOS.motion, name: "framer-motion" },
          ]}
        />
        <RegularTextSubheading
          title="Backend"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.django, name: "Django" },
            { icon: LOGOS.nodejs, name: "Node.js" },
            { icon: LOGOS.express, name: "Express.js" },
            { icon: LOGOS.flask, name: "Flask" },
          ]}
        />
        <RegularTextSubheading
          title="Databases"
          techstack={[
            { icon: LOGOS.postgres, name: "PostgreSQL" },
            { icon: LOGOS.sqlite, name: "SQLite3" },
            { icon: LOGOS.drizzle, name: "DrizzleORM" },
            { icon: LOGOS.prisma, name: "Prisma" },
            { icon: LOGOS.supabase, name: "Supabase" },
            { icon: LOGOS.neondb, name: "NeonDB" },
          ]}
        />
        <RegularTextSubheading
          title="Others"
          techstack={[
            { icon: LOGOS.expo, name: "Expo" },
            { icon: LOGOS.electron, name: "Electron.js" },
            { icon: LOGOS.bash, name: "Bash" },
            { icon: LOGOS.vercel, name: "Vercel" },
            { icon: LOGOS.git, name: "Git" },
            { icon: LOGOS.github, name: "Github" },
          ]}
        />
        <div className="flex flex-col mb-8 gap-4">
          <h3 className="subheading text-center">Education</h3>
          <p className="text text-center">
            Bachelor&#39;s degree in Computer Science at{" "}
            <Link
              href={"https://www.fct.unl.pt"}
              className="hover:underline"
              target="_blank"
            >
              FCT-UNL
            </Link>{" "}
            due to Jul-2027
          </p>
        </div>
      </div>
      <div className="flex flex-col my-8">
        <h3 className="subheading mb-4 text-center">CS certificates</h3>
        <div className="flex justify-center">
          <Link
            href={"/cs50x"}
            className="group flex gap-2 items-center text mb-8 bg-gradient-to-bl from-amber-500 to-amber-800 hover:text-transparent bg-clip-text"
            target="_blank"
          >
            CS50&#39;s Introduction to CS
            <Link2 className="size-6 md:size-8 text-current group-hover:text-amber-600" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
