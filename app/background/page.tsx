import Nav from "@/components/Nav"

const Page = () => {
  return (
    <section>
      <Nav />
      <div className="max-w-xl md:max-w-5xl mx-auto px-8 py-16 gap-8">
        <h1 className="heading py-16">Background</h1>
        <p className="text-lg text-muted-foreground text-justify">
          I am a software engineer with a passion for building web applications.
          I have experience in both frontend and backend development, and I am
          always eager to learn new technologies and improve my skills. I have
          worked on various projects, including personal projects and freelance
          work. I am currently focused on building web applications using
          Next.js, React, and TailwindCSS.
        </p>
      </div>
    </section>
  )
}

export default Page
