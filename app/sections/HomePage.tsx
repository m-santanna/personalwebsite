import ScrollDown from "@/components/ScrollDown";
import AnimatedBeam from "@/components/animata/background/animated-beam";
import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";
import Image from "next/image";
import profileImage from "@/images/profile.jpeg";
import Link from "next/link";
import { LOGOS } from "@/components/icons/Logos";
import { Link2 } from "lucide-react";

const contacts = [
  { name: "GitHub", href: "https://github.com/m-santanna", logo: LOGOS.github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m-santanna/",
    logo: LOGOS.linkedIn,
  },
  {
    name: "Gmail",
    href: "mailto:matheus.santanna03@gmail.com",
    logo: LOGOS.gmail,
  },
];

function HomePage() {
  return (
    <AnimatedBeam backgroundClassName="from-slate-500 to-indigo-600 dark:from-slate-800 dark:to-indigo-900">
      <section
        id="HomePage"
        className="w-screen h-[calc(90vh-80px)] sm:h-[calc(100vh-80px)] flex flex-col justify-around md:justify-center md:gap-[10vh] items-center"
      >
        <AnimatedBorderTrail
          className="bg-zinc-600"
          contentClassName="max-w-[70vw] md:max-w-[80vw] max-h-[72vh] bg-strong flex flex-col md:flex-row items-center justify-center rounded-2xl"
          trailColor="rgb(245 158 11)"
          duration="7s"
        >
          <div className="group flex justify-center md:justify-normal max-h-1/2 md:min-h-full md:max-w-1/2">
            <Image
              src={profileImage}
              alt="pfp"
              className="object-cover group-hover:scale-105 transition-all duration-200 ease-in-out"
            />
          </div>
          <div className="h-full flex flex-col justify-center items-center gap-4 p-8">
            <h1 className="text-3xl md:text-5xl font-semibold text-gradient text-center">
              Hello, world!
            </h1>

            <p className="text-base md:text-xl text-weak text-center md:text-justify">
              My name is Matheus. I am a Full-Stack Software Engineer based at
              Lisbon, Portugal.
            </p>
            <div className="flex gap-4 items-center">
              {contacts.map((contact) => (
                <Link
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  className="group"
                >
                  {
                    <contact.logo className="size-6 md:size-8 group-hover:scale-110 transition-all duration-100" />
                  }
                </Link>
              ))}
              <Link
                href="/resume"
                className="flex justify-center items-center rounded-xl text-weak text-base h-full border gap-1 px-2 hover:text-amber-500 hover:border-amber-800"
              >
                Resume
                <Link2 />
              </Link>
            </div>
          </div>
        </AnimatedBorderTrail>
        <ScrollDown className="size-8 md:size-10" />
      </section>
    </AnimatedBeam>
  );
}

export default HomePage;
