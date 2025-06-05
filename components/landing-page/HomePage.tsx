import ScrollDown from "@/components/ScrollDown"
import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail"
import Image from "next/image"
import profileImage from "@/images/profile.jpeg"
import Link from "next/link"
import { LOGOS } from "@/components/Logos"

const contacts = [
  {
    name: "Gmail",
    href: "mailto:matheus.santanna03@gmail.com",
    logo: LOGOS.gmail,
  },
  { name: "GitHub", href: "https://github.com/m-santanna", logo: LOGOS.github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m-santanna/",
    logo: LOGOS.linkedIn,
  },
]

function HomePage() {
  return (
    <section
      id="HomePage"
      className="w-screen h-[calc(90vh-80px)] sm:h-[calc(100vh-80px)] flex flex-col justify-around md:justify-center md:gap-[10vh] items-center animate-in fade-in zoom-in duration-500"
    >
      <AnimatedBorderTrail
        className="bg-zinc-600"
        contentClassName="max-w-[70vw] md:max-w-[80vw] lg:max-w-[75vw] max-h-[72vh] bg-strong flex flex-col md:flex-row items-center justify-center rounded-2xl"
        trailColor="rgb(245 158 11)"
        duration="7s"
      >
        <div className="flex justify-center md:justify-normal max-h-1/2 md:min-h-full md:max-w-1/2 overflow-hidden animate-in rotate-180 duration-500">
          <Image
            src={profileImage}
            alt="pfp"
            className="object-cover hover:scale-110 transition-all duration-300 ease-in-out rotate-180"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-8 mt-0 md:mt-10">
          <h1 className="text-3xl md:text-5xl font-semibold text-gradient text-center">
            Hello, world! 👋
          </h1>
          <p className="text-base md:text-xl text-weak text-center">
            My name is Matheus. I am a Full-Stack Software Engineer currently at
            Lisbon, Portugal 🇵🇹
          </p>
          <div className="flex gap-4 items-center mt-2">
            {contacts.map((contact) => (
              <Link key={contact.name} href={contact.href} target="_blank">
                <contact.logo className="size-6 md:size-8 hover:scale-110 transition-all duration-100" />
              </Link>
            ))}
          </div>
        </div>
      </AnimatedBorderTrail>
      <ScrollDown className="size-8 md:size-10" />
    </section>
  )
}

export default HomePage
