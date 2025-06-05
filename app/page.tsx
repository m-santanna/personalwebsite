import Nav from "@/components/Nav"
import AnimatedBeam from "@/components/animata/background/animated-beam"
import About from "@/components/landing-page/About"
import Projects from "@/components/landing-page/Projects"
import HomePage from "@/components/landing-page/HomePage"

export default function Home() {
  return (
    <main>
      <Nav />
      <AnimatedBeam backgroundClassName="from-slate-800 to-indigo-900">
        <HomePage />
        <Projects />
        <About />
      </AnimatedBeam>
    </main>
  )
}
