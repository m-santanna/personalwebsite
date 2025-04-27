import Nav from "@/components/Nav"
import About from "@/components/landing-page/About"
import Projects from "@/components/landing-page/Projects"
import HomePage from "@/components/landing-page/HomePage"

export default function Home() {
  return (
    <main>
      <Nav />
      <HomePage />
      <Projects />
      <About />
    </main>
  )
}
