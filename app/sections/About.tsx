import Link from "next/link";
import RegularTextSubheading from "@/components/RegularTextSubheading";
import { Link2 } from "lucide-react";
import { LOGOS } from "@/components/Logos";

function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center
      bg-[linear-gradient(21deg,transparent_0%,transparent_36%,rgba(50,50,55,0.08)_36%,rgba(60,60,65,0.1)_56%,transparent_56%,transparent_100%),linear-gradient(260deg,transparent_0%,transparent_68%,rgba(50,50,55,0.06)_68%,rgba(60,60,65,0.08)_99%,transparent_99%,transparent_100%),linear-gradient(145deg,rgb(39,39,42),rgb(24,24,27))]"
    >
      <h1 className="heading">About me!</h1>
      <div className="w-body">
        <RegularTextSubheading
          title="Languages"
          techstack={[
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.javascript, name: "JavaScript" },
            { icon: LOGOS.python, name: "Python" },
            { icon: LOGOS.java, name: "Java" },
            { icon: LOGOS.c, name: "C" },
            { icon: LOGOS.postgres, name: "PostgreSQL" },
            { icon: LOGOS.sqlite, name: "SQLite3" },
            { icon: LOGOS.lua, name: "Lua" },
          ]}
        />
        <RegularTextSubheading
          title="Frontend"
          techstack={[
            { icon: LOGOS.html, name: "HTML" },
            { icon: LOGOS.css, name: "CSS" },
            { icon: LOGOS.react, name: "React" },
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
            { icon: LOGOS.flask, name: "Flask" },
            { icon: LOGOS.nodejs, name: "Node.js" },
            { icon: LOGOS.express, name: "Express.js" },
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
        <RegularTextSubheading
          title="Education"
          text="Bachelor's degree in Computer Science at FCT-UNL due to Jul-2027"
        />

        <h3 className="subheading mb-4">CS certificates</h3>
        <div className="flex flex-col">
          <div className="flex">
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
      </div>
    </section>
  );
}

export default About;
