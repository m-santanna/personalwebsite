import Link from "next/link";
import RegularTextSubheading from "@/components/RegularTextSubheading";
import ContactLinks from "../../components/icons/ContactLinks";

function About() {
  return (
    <section id="About" className="flex flex-col justify-center items-center">
      <h1 className="heading">About me!</h1>
      <div className="w-body">
        <RegularTextSubheading
          title="Languages"
          text="JavaScript, TypeScript, Java, Python, Lua, SQL, C"
        />
        <RegularTextSubheading
          title="Frontend"
          text="HTML, CSS, React, Next.js 14, TailwindCSS, Bootstrap"
        />
        <RegularTextSubheading
          title="Backend"
          text="Flask, Django, Express.js, Next.js (Server Actions)"
        />
        <RegularTextSubheading
          title="Databases"
          text="PostgreSQL, SQLite3, MySQL, MongoDB"
        />
        <RegularTextSubheading
          title="Others"
          text="Expo/ReactNative, Electron.js, Linux/Unix, Vercel, NeonDB, Git, GitHub"
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
              className="text mb-8 underline-animation"
              target="_blank"
            >
              CS50&#39;s Introduction to Computer Science
            </Link>
            <ContactLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
