import ProjectSubheading from "@/components/ProjectSubheading";
import { LOGOS } from "@/components/icons/Logos";

function Projects() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center
      bg-[linear-gradient(123deg,transparent_0%,transparent_36%,rgba(17,17,57,0.02)_36%,rgba(17,17,87,0.02)_56%,transparent_56%,transparent_100%),linear-gradient(251deg,transparent_0%,transparent_68%,rgba(3,3,3,0.02)_68%,rgba(3,3,93,0.02)_99%,transparent_99%,transparent_100%),linear-gradient(135deg,rgb(200,215,255),rgb(205,215,255))] 
      dark:bg-[linear-gradient(123deg,transparent_0%,transparent_36%,rgba(10,10,40,0.08)_36%,rgba(15,15,60,0.08)_56%,transparent_56%,transparent_100%),linear-gradient(251deg,transparent_0%,transparent_68%,rgba(5,5,20,0.06)_68%,rgba(10,10,50,0.08)_99%,transparent_99%,transparent_100%),linear-gradient(135deg,rgb(50,60,100),rgb(70,80,120))]"
      id="Projects"
    >
      <h1 className="heading">Projects:</h1>
      <div className="w-body">
        <ProjectSubheading
          title="ApolloTrack"
          text="After using FitnessTrack for a while, lots of new features and improvements came to mind. ApolloTrack comes to, not only help the user track workouts, but also to track macros, diet, and even the supermarket shopping list. App currently being built with Next.js 15, and Tailwind. Using a supabase database, connected through Drizzle ORM, and BetterAuth for the authentication flow. Mobile responsive UI since day 1, and multiple UX improvements in mind."
          href="https://github.com/m-santanna/ApolloTrack"
          date="Mar 2025"
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
          title="FolkYourself"
          text="This was my first freelance project. I got in contact with Rafael Witt, a folk brazilian artist, that founded a brand called FolkYourself. The brand sells clothes, in partnership with Roadie co. The goal given to me was to created a platform to showcase the brand's products. Although I planned to make it a full e-commerce website, they requested me to redirect the users to the Roadie co. website, where the products are sold. The website was built with Next.js 15, TailwindCSS, and there was no need to have a database in this project. The UI is entirely responsive."
          href="https://folkyourself.vercel.app"
          date="Feb 2025"
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
          title="SpotReviewer"
          text="SpotReviewer was being developed to be a desktop application. Its goal was to allow hospitals and clinics to do a pre-analysis of the patient's skin spots, empowered by AI, before the doctor's appointment. The app was being built with Electron, TypeScript, Node.js, React, TailwindCSS, and Python (TensorFlow). It originally had a comercial intent behind it, but the project was canceled due to the lack of resources, and strong competition in the market."
          href="https://github.com/m-santanna/SpotReviewer"
          date="Feb 2024"
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
          title="FitnessTrack"
          text="It was always complicated to properly track my workouts, so I decided to create a solution. This personal project was built entirely with Next.js 14 and TailwindCSS. Utilizing Next.js's server actions, NeonDB as the cloud platform for the PostgreSQL database, Clerk's API for the authentication processes, and Prisma as the ORM used for the database models and migrations, this project allows users to track their workouts, on a daily basis. Even though, mobile responsiveness was only considered at the end of the project development, the upgraded version of this app (ApolloTrack), with more features, is currently being built."
          href="https://github.com/m-santanna/fitnesstrackv2"
          date="Nov 2023"
          techstack={[
            { icon: LOGOS.nextjs, name: "Next.js" },
            { icon: LOGOS.react, name: "React" },
            { icon: LOGOS.tailwindcss, name: "TailwindCSS" },
            { icon: LOGOS.typescript, name: "TypeScript" },
            { icon: LOGOS.postgres, name: "PostgreSQL" },
            { icon: LOGOS.neondb, name: "NeonDB" },
            { icon: LOGOS.prisma, name: "Prisma" },
            { icon: LOGOS.vercel, name: "Vercel" },
          ]}
        />
        <ProjectSubheading
          title="SpaceAvoid"
          text="This was a group project done during a class at University. The goal of the project was to create a game which would allow doctors to check if the patient's arm muscles were contracting properly. The game was built purely with Python using the PyGame library. Also used Arduino to connect the game to the hardware. The Arduino connection wasn't completed, but the game itself was finished."
          href="https://github.com/m-santanna/SpaceAvoid"
          date="Nov 2023"
          techstack={[{ icon: LOGOS.python, name: "Python" }]}
        />
        <ProjectSubheading
          title="Network"
          text="This is a Twitter-like social network website built with Django, SQLite3 and JS. Users can create posts, follow other users, like posts, and more."
          href="https://github.com/m-santanna/cs50web/tree/main/project4"
          date="Sep 2023"
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
          title="Mail"
          text="Project done with Django, SQLite3 and basic JavaScript. It's an email client that allows users to send, receive, archive and reply emails."
          href="https://github.com/m-santanna/cs50web/tree/main/mail"
          date="Aug 2023"
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
          title="Commerce"
          text="E-commerce website where users can register, login, logout, bid for items, add items to their watchlist, and create new listings. Also built with Django and SQLite3."
          href="https://github.com/m-santanna/cs50web/tree/main/commerce"
          date="Aug 2023"
          techstack={[
            { icon: LOGOS.django, name: "Django" },
            { icon: LOGOS.python, name: "Python" },
            { icon: LOGOS.html, name: "HTML" },
            { icon: LOGOS.css, name: "CSS" },
            { icon: LOGOS.sqlite, name: "SQLite3" },
          ]}
        />

        <ProjectSubheading
          title="Wiki"
          text="This was the first project I've made during CS50's Web Development course. It's a Wikipedia-like online encyclopedia. Built with Django and SQLite3."
          href="https://github.com/m-santanna/cs50web/tree/main/wiki"
          date="Aug 2023"
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
  );
}

export default Projects;
