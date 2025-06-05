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
            id="apollotrack"
            title="ApolloTrack"
            text="This one was fun and annoying to build (at the same time!). Recently, I have been trying harder at the gym. Following the trending fitness waves like everyone else, I realized that it isn't just about training hard. We clearly also need to eat well. I realized I needed to keep track of my calories, and there are a ton of options out there! The main problem is that none of them are actually free. I talked with a few friends and they all said the same thing: 'No way I am paying for that! I can just use an excel spreadsheet!!!'. Nobody likes excel. Let's be real. And here we are! I built this to help me and my friends track our calories. The fun part about building this, is that it doesn't have a database. Then you may ask: 'What do you mean there is no database?!', and I will just say: 'LOCALSTORAGE IS FIRE!!!!'. Yes. I know localStorage isn't ideal for storing sensitive data, it is vulnerable to Cross-Site Scripting, and all of that. But realistically speaking, it is just the stuff you eat and your macros that are being stored. Plus, by doing it this way, users do NOT need to login. They just use the website, and the information is stored in their own browser. We don't store any of that information. In my opinion, that is a win! The general problem of not using a database, and stricly using localStorage is that you lose some of  the stuff you took for granted, like SQL and ORMs. So you have to build your own data structures (which is kinda cool), but that takes some time. I used Jotai to access the LocalStorage atoms, and I personally really like the library. Also, to build this project I had to learn a very good chunk of stuff about form and tables. This was veeery cool, because I managed to learn more things about the TanStack universe. TanStack Form and TanStack Table are pretty awesome solutions to these problems, and shadcn did a very good job with his Table Component. In terms of framework, I used TanStack Start again, for the sake of practicing. The UI has a mobile first approach, since I planned on using the app mostly on my phone. I think it looks clean :)"
            href="https://apollotrack.vercel.app"
            date="May 2025"
            isGithub={false}
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
          <ProjectSubheading
            id="tidytabs"
            title="TidyTabs"
            text="I personally don't think the safari bookmarks are great. I wanted to have more control of them. Also wanted to get in touch with new technologies. Being a 1 stack Larry didn't sound good, so I wanted to get my hands on a new React framework. That's when I found out about TanStack Start. Altough the application didn't need SSR, nor RSC, I still opted into TanStack Start to learn its features. Also got into Netlify to deploy the application."
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
