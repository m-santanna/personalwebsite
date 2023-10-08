import Link from "next/link";
import RegularTextSubheading from "../components/RegularTextSubheading";
import ContactLinks from "../icons/ContactLinks";

function About() {
  return (
    <div className="w-body">
      <h1 className="heading">About me!</h1>
      <RegularTextSubheading
        title="Languages"
        text="JavaScript, TypeScript, Python, Lua"
      />
      <RegularTextSubheading
        title="Frontend"
        text="HTML, CSS, React, Next.js 13, TailwindCSS, Bootstrap"
      />
      <RegularTextSubheading title="Backend" text="Flask, Django, Express.js" />
      <RegularTextSubheading
        title="Databases"
        text="PostgreSQL, SQLite3, MySQL, MongoDB (Learning)"
      />
      <RegularTextSubheading
        title="Others"
        text="Linux/Unix, Vercel, NeonDB, Git, GitHub"
      />
      <RegularTextSubheading
        title="Education"
        text="Master's degree in Biomedical Engineering at IST-ULisboa due to Aug-2026"
      />
      <h3 className="subheading mb-4">CS certificates</h3>
      <div className="flex flex-col">
        <div className="flex">
          <Link
            href={"/cs50x"}
            className="text mb-2 hover:underline"
            target="_blank"
          >
            CS50's Introduction to Computer Science
          </Link>
          <ContactLinks />
        </div>
        <div className="flex">
          <Link
            href={"/cs50web"}
            className="text mb-8 hover:underline"
            target="_blank"
          >
            CS50's Web Programming with Python and JavaScript
          </Link>
          <ContactLinks />
        </div>
      </div>
    </div>
  );
}

export default About;
