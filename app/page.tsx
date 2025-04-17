import Nav from "@/components/Nav";
import About from "./sections/About";
import Projects from "./sections/Projects";
import HomePage from "./sections/HomePage";

export default function Home() {
  return (
    <main>
      <Nav />
      <HomePage />
      <Projects />
      <About />
    </main>
  );
}
