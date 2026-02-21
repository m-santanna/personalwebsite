import { Github, Instagram, LinkedIn } from "@/components/logos"
import { StyledSpan } from "@/components/styled-span"
import { InfoTabs } from "@/components/info-tabs"
import Link from "next/link"
import { FOLKYOURSELF_URL, GITHUB_PROFILE_URL, INSTAGRAM_PROFILE_URL, JPRAC_URL, LINKEDIN_PROFILE_URL, RAFAELWITT_URL } from "@/lib/constants"

function Socials() {
  return (
    <div className="mt-2 flex items-center gap-4 font-medium text-sm sm:text-base">
      <Link className="flex items-center gap-2 hover:text-accent" href={GITHUB_PROFILE_URL} target="_blank">
        <Github className="bg-black grayscale rounded-full" />
        Github
      </Link>
      <Link className="flex items-center gap-2 hover:text-accent" href={LINKEDIN_PROFILE_URL} target="_blank">
        <LinkedIn className="grayscale" />
        Linkedin
      </Link>
      <Link className="flex items-center gap-2 hover:text-accent" href={INSTAGRAM_PROFILE_URL} target="_blank">
        <Instagram className="grayscale" />
        Instagram
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <div className="mx-8 sm:mx-30 space-y-10 mb-6">
      {/* HERO SECTION */}
      <div className="mt-10 flex flex-col gap-6">
        <div className="text-primary font-bold text-3xl flex flex-col md:flex-row gap-1 sm:gap-4">
          <h1>
            Hello World!
          </h1>
          <h1>
            <StyledSpan className="cursor-default" text="|Matheus|" textOnHover="Sant'Anna" /> here!
          </h1>
        </div>
        <p className="max-w-2xl text-base sm:text-lg">
          I am currently based at Lisbon, Portugal. I am a <span className="text-primary">Full-Stack Developer</span> that enjoys building stuff.
        </p>
        <p className="max-w-2xl text-base sm:text-lg">
          I did some freelancing for websites like <Link target="_blank" href={RAFAELWITT_URL}><StyledSpan textOnHover="Rafael Witt" text="Rafael Witt" /></Link> and <Link target="_blank" href={FOLKYOURSELF_URL}><StyledSpan textOnHover="FolkYourself" text="FolkYourself" /></Link>.
          I also built <Link target="_blank" href={JPRAC_URL}><StyledSpan textOnHover="jprac" text="jprac" /></Link>, which is my favorite project. In short, it allows friends to compete in real-time, to see who knows the japanese alphabet(s) better!
        </p>
        <Socials />
      </div>

      {/* GENERAL SECTION */}
      <div className="mt-30">
        <InfoTabs />
      </div>

      {/* MISC SECTION */}
      <div className="mt-30">
      </div>
    </div>
  );
}
