import Link from "next/link";
import RegularTextSubheading from "@/components/RegularTextSubheading";
import { Link2 } from "lucide-react";

function About() {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center
      bg-[linear-gradient(21deg,transparent_0%,transparent_36%,rgba(200,200,200,0.03)_36%,rgba(180,180,180,0.04)_56%,transparent_56%,transparent_100%),linear-gradient(260deg,transparent_0%,transparent_68%,rgba(200,200,200,0.03)_68%,rgba(180,180,180,0.04)_99%,transparent_99%,transparent_100%),linear-gradient(145deg,rgb(243,244,246),rgb(249,250,251))]
      dark:bg-[linear-gradient(21deg,transparent_0%,transparent_36%,rgba(50,50,55,0.08)_36%,rgba(60,60,65,0.1)_56%,transparent_56%,transparent_100%),linear-gradient(260deg,transparent_0%,transparent_68%,rgba(50,50,55,0.06)_68%,rgba(60,60,65,0.08)_99%,transparent_99%,transparent_100%),linear-gradient(145deg,rgb(39,39,42),rgb(24,24,27))]"
    >
      <h1 className="heading">About me!</h1>
      <div className="w-body">
        <RegularTextSubheading
          title="Languages"
          text="JavaScript, TypeScript, Java, Python, Lua, SQL, C"
        />
        <RegularTextSubheading
          title="Frontend"
          text="HTML, CSS, React, Next.js, tailwindcss, shadcn, framer-motion"
        />
        <RegularTextSubheading
          title="Backend"
          text="Flask, Django, Express.js, Node.js"
        />
        <RegularTextSubheading
          title="Databases"
          text="PostgreSQL, SQLite3, DrizzleORM, Prisma, Supabase, NeonDB"
        />
        <RegularTextSubheading
          title="Others"
          text="Expo/ReactNative, Electron.js, Linux/Unix, Bash, Vercel, Git, GitHub"
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
