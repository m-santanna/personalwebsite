import ProjectSubheading from "../components/ProjectSubheading";

function Projects() {
  return (
    <div className="w-body">
      <h1 className="heading">Projects:</h1>
      <ProjectSubheading
        title="Wiki"
        text="This was the first project I've made during CS50's Web Development course. It's a Wikipedia-like online encyclopedia. I used Django and SQLite3 to build it."
        href="https://github.com/matheusss100503/cs50web/tree/main/wiki"
      />
      <ProjectSubheading
        title="Commerce"
        text="Also built with Django and SQLite3, this is a commerce website. It's a simple e-commerce website where users can register, login, logout, bid for items, add items to their watchlist, and create new listings."
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
        text="A personal project built with Express.js and PostgreSQL for the backend and Next.js 13 and TailwindCSS for the frontend. It was always complicated to properly track my workouts, so I decided to create a pratical solution. Still in development, but being built with a lot of love."
        href="https://github.com/matheusss100503/fitnessTrack"
      />
    </div>
  );
}

export default Projects;
