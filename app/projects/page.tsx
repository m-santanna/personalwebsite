import { LOGOS } from "@/components/Logos"
import Nav from "@/components/Nav"
import ProjectSubheading from "@/components/ProjectSubheading"
import React from "react"

const Page = () => {
  return (
    <div>
      <Nav />
      <section className="w-full min-h-[calc(100vh-80px)] bg-strong">
        <h1 className="heading py-16">All Projects</h1>
        <div className="max-w-xl md:max-w-5xl mx-auto px-10 gap-8">
          <ProjectSubheading
            id="tidytabs"
            title="TidyTabs"
            text="I've been studying Japanese for a whole year now, but recently I felt like my Katakana skills degraded. I wanted a very simple and fast way to practice. So I built this in just a day, but new features and ideas kept coming. Friends started using it as well. Now the app even supports russian 🤣. I needed mostly client-side features, so I decided to build a SPA, and for the state management, I learned Jotai. Super good library! Tailwind and shadcn are a must nowadays, and I used Next.js for the very few server code."
            href="https://tidytabs.netlify.app"
            isGithub={false}
            date="Apr 2025"
            techstack={[
              { icon: LOGOS.tanstack, name: "TanStack" },
              { icon: LOGOS.react, name: "React" },
              { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
              { icon: LOGOS.shadcn, name: "shadcn" },
              { icon: LOGOS.jotai, name: "jotai" },
              { icon: LOGOS.typescript, name: "TypeScript" },
              { icon: LOGOS.netlify, name: "Netlify" },
            ]}
          />
          <ProjectSubheading
            id="langprac"
            title="langprac"
            text="I've been studying Japanese for a whole year now, but recently I felt like my Katakana skills degraded. I wanted a very simple and fast way to practice. So I built this in just a day, but new features and ideas kept coming. Friends started using it as well. Now the app even supports russian 🤣. I needed mostly client-side features, so I decided to build a SPA, and for the state management, I learned Jotai. Super good library! Tailwind and shadcn are a must nowadays, and I used Next.js for the very few server code."
            href="https://langprac.vercel.app"
            isGithub={false}
            date="Apr 2025"
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
          <ProjectSubheading
            id="apollotrack"
            title="ApolloTrack"
            text="After using FitnessTrack for a while, lots of new features and improvements came to mind. ApolloTrack comes to, not only help the user track workouts, but also to track macros, diet, and even the supermarket shopping list. App currently being built with Next.js 15, and Tailwind. Using a supabase database, connected through Drizzle ORM, and BetterAuth for the authentication flow. Mobile responsive UI since day 1, and multiple UX improvements in mind."
            href="https://github.com/m-santanna/ApolloTrack"
            date="Mar 2025"
            isGithub={true}
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
          <ProjectSubheading
            id="folkyourself"
            title="FolkYourself"
            text="This was my first freelance project. I got in contact with Rafael Witt, a folk brazilian artist, that founded a brand called FolkYourself. The brand sells clothes, in partnership with Roadie co. The goal given to me was to created a platform to showcase the brand's products. Although I planned to make it a full e-commerce website, they requested me to redirect the users to the Roadie co. website, where the products are sold. The website was built with Next.js 15, TailwindCSS, and there was no need to have a database in this project. The UI is entirely responsive."
            href="https://folkyourself.vercel.app"
            date="Feb 2025"
            isGithub={false}
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
          <ProjectSubheading
            id="spotreviewer"
            title="SpotReviewer"
            text="SpotReviewer was being developed to be a desktop application. Its goal was to allow hospitals and clinics to do a pre-analysis of the patient's skin spots, empowered by AI, before the doctor's appointment. The app was being built with Electron, TypeScript, Node.js, React, TailwindCSS, and Python (TensorFlow). It originally had a comercial intent behind it, but the project was canceled due to the lack of resources, and strong competition in the market."
            href="https://github.com/m-santanna/SpotReviewer"
            date="Feb 2024"
            isGithub={true}
            techstack={[
              { icon: LOGOS.electron, name: "Electron" },
              { icon: LOGOS.typescript, name: "TypeScript" },
              { icon: LOGOS.python, name: "Python" },
              { icon: LOGOS.tensorflow, name: "TensorFlow" },
              { icon: LOGOS.nodejs, name: "Node.js" },
              { icon: LOGOS.react, name: "React" },
              { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            ]}
          />
          <ProjectSubheading
            id="fitnesstrack"
            title="FitnessTrack"
            text="It was always complicated to properly track my workouts, so I decided to create a solution. This personal project was built entirely with Next.js 14 and TailwindCSS. Utilizing Next.js's server actions, NeonDB as the cloud platform for the PostgreSQL database, Clerk's API for the authentication processes, and Prisma as the ORM used for the database models and migrations, this project allows users to track their workouts, on a daily basis. Even though, mobile responsiveness was only considered at the end of the project development, the upgraded version of this app (ApolloTrack), with more features, is currently being built."
            href="https://fitnesstrack.vercel.app"
            date="Nov 2023"
            isGithub={false}
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
          <ProjectSubheading
            id="spaceavoid"
            title="SpaceAvoid"
            text="This was a group project done during a class at University. The goal of the project was to create a game which would allow doctors to check if the patient's arm muscles were contracting properly. The game was built purely with Python using the PyGame library. Also used Arduino to connect the game to the hardware. The Arduino connection wasn't completed, but the game itself was finished."
            href="https://github.com/m-santanna/SpaceAvoid"
            date="Nov 2023"
            isGithub={true}
            techstack={[{ icon: LOGOS.python, name: "Python" }]}
          />
          <ProjectSubheading
            id="network"
            title="Network"
            text="This is a Twitter-like social network website built with Django, SQLite3 and JS. Users can create posts, follow other users, like posts, and more."
            href="https://github.com/m-santanna/cs50web/tree/main/project4"
            date="Sep 2023"
            isGithub={true}
            techstack={[
              { icon: LOGOS.django, name: "Django" },
              { icon: LOGOS.python, name: "Python" },
              { icon: LOGOS.html, name: "HTML" },
              { icon: LOGOS.css, name: "CSS" },
              { icon: LOGOS.sqlite, name: "SQLite3" },
              { icon: LOGOS.javascript, name: "JavaScript" },
            ]}
          />
          <ProjectSubheading
            id="mail"
            title="Mail"
            text="Project done with Django, SQLite3 and basic JavaScript. It's an email client that allows users to send, receive, archive and reply emails."
            href="https://github.com/m-santanna/cs50web/tree/main/mail"
            date="Aug 2023"
            isGithub={true}
            techstack={[
              { icon: LOGOS.django, name: "Django" },
              { icon: LOGOS.python, name: "Python" },
              { icon: LOGOS.html, name: "HTML" },
              { icon: LOGOS.css, name: "CSS" },
              { icon: LOGOS.sqlite, name: "SQLite3" },
              { icon: LOGOS.javascript, name: "JavaScript" },
            ]}
          />
          <ProjectSubheading
            id="commerce"
            title="Commerce"
            text="E-commerce website where users can register, login, logout, bid for items, add items to their watchlist, and create new listings. Also built with Django and SQLite3."
            href="https://github.com/m-santanna/cs50web/tree/main/commerce"
            date="Aug 2023"
            isGithub={true}
            techstack={[
              { icon: LOGOS.django, name: "Django" },
              { icon: LOGOS.python, name: "Python" },
              { icon: LOGOS.html, name: "HTML" },
              { icon: LOGOS.css, name: "CSS" },
              { icon: LOGOS.sqlite, name: "SQLite3" },
            ]}
          />

          <ProjectSubheading
            id="wiki"
            title="Wiki"
            text="This was the first project I've made during CS50's Web Development course. It's a Wikipedia-like online encyclopedia. Built with Django and SQLite3."
            href="https://github.com/m-santanna/cs50web/tree/main/wiki"
            date="Aug 2023"
            isGithub={true}
            techstack={[
              { icon: LOGOS.django, name: "Django" },
              { icon: LOGOS.python, name: "Python" },
              { icon: LOGOS.html, name: "HTML" },
              { icon: LOGOS.css, name: "CSS" },
              { icon: LOGOS.sqlite, name: "SQLite3" },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

export default Page
