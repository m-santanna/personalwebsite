import Link from "next/link";

function About() {
  return (
    <div>
      <h1>About me!</h1>
      <h3>Languages</h3>
      <p>JavaScript, TypeScript, Python, Lua</p>
      <h3>Frontend</h3>
      <p>HTML, CSS, React, Next.js 13, TailwindCSS, Bootstrap</p>
      <h3>Backend</h3>
      <p>Flask, Django, Express.js</p>
      <h3>Databases</h3>
      <p>PostgreSQL, SQLite3, MySQL, MongoDB (Learning)</p>
      <h3>Others</h3>
      <p>Unix, Vercel, NeonDB, Git, GitHub</p>
      <h3>Education</h3>
      <p>
        Master's degree in Biomedical Engineering at IST-ULisboa due to Aug-2026
      </p>
      <h3>CS certificates</h3>
      <Link href={"/"}>link</Link>
    </div>
  );
}

export default About;
