import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div>
      <header id="NavBar">
        <Nav />
      </header>
      <section id="HomePage" className="flex justify-center p-2 my-4">
        <HomePage />
      </section>
      <section id="About" className="flex justify-center p-2 my-4">
        <About />
      </section>
      <section id="Projects" className="flex justify-center p-2 my-4">
        <Projects />
      </section>
      <section id="Contacts" className="flex justify-center p-2 my-4">
        <Contacts />
      </section>
    </div>
  );
}
