import Nav from "@/components/Nav";
import About from "./sections/About";
import Projects from "./sections/Projects";
import HomePage from "./sections/HomePage";

export default function Home() {
  return (
    <main className="bg-strong">
      <Nav />
      <HomePage />
      <About />
      <Projects />
    </main>
  );
}
