import ProjectSubheading from "../components/ProjectSubheading";

function Projects() {
  return (
    <div className="w-body">
      <h1 className="heading">Projects:</h1>
      <ProjectSubheading
        title="SpaceAvoid"
        text="This was a group project done during a class at University. The goal of the project was to create a game which would allow doctors to check if the patient's arm muscles were contracting properly. The game was built purely with Python using the PyGame library. Also used Arduino to connect the game to the hardware. The Arduino connection wasn't completed, but the game itself was finished."
        href="https://github.com/matheusss100503/SpaceAvoid"
      />
      <ProjectSubheading
        title="Wiki"
        text="This was the first project I've made during CS50's Web Development course. It's a Wikipedia-like online encyclopedia. Built with Django and SQLite3."
        href="https://github.com/matheusss100503/cs50web/tree/main/wiki"
      />
      <ProjectSubheading
        title="Commerce"
        text="E-commerce website where users can register, login, logout, bid for items, add items to their watchlist, and create new listings. Also built with Django and SQLite3."
        href="https://github.com/matheusss100503/cs50web/tree/main/commerce"
      />
      <ProjectSubheading
        title="Mail"
        text="Project done with Django, SQLite3 and basic JavaScript. It's an email client that allows users to send, receive, archive and reply emails."
        href="https://github.com/matheusss100503/cs50web/tree/main/mail"
      />
      <ProjectSubheading
        title="Network"
        text="This is a Twitter-like social network website built with Django, SQLite3 and JS. Users can create posts, follow other users, like posts, and more."
        href="https://github.com/matheusss100503/cs50web/tree/main/project4"
      />
      <ProjectSubheading
        title="FitnessTrack"
        text="It was always complicated to properly track my workouts, so I decided to create a solution. This personal project was built entirely with Next.js 14 and TailwindCSS. Utilizing the recent Next.js's server actions update, NeonDB as the cloud platform for the PostgreSQL database, Clerk's API for the authentication processes, and Prisma as the ORM used for the database models and migrations, this project allows users to track their workouts, on a daily basis. Even though, mobile responsiveness was only considered at the launch of the website, a mobile app with improvements is in my bucket list for 2024."
        href="https://github.com/matheusss100503/fitnesstrackv2"
      />
      <ProjectSubheading
        title="SpotReviewer"
        text="SpotReviewer is a desktop application that will be available for all major platforms. Its goal is to allow hospitals and clinics to do a pre-analysis of the patient's skin spots, empowered by AI, before the doctor's appointment. The app was built with Electron, TypeScript, Node.js, React, TailwindCSS, and Python (TensorFlow). Since the app has comercial purposes, the code is not available on GitHub. However, the website with information about the app is being built and will be available soon."
        href="private"
      />
    </div>
  );
}

export default Projects;
