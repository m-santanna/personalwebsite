import { Github, Gmail, Instagram, LinkedIn } from "@/components/logos"
import { StyledSpan } from "@/components/styled-span"
import { InfoTabs } from "@/components/info-tabs"
import { MiscSection } from "@/components/misc-section"
import Link from "next/link"
import { FOLKYOURSELF_URL, GITHUB_PROFILE_URL, GM_FLOW_URL, INSTAGRAM_PROFILE_URL, JPRAC_URL, LINKEDIN_PROFILE_URL, RAFAELWITT_URL, EMAIL_ADDRESS } from "@/lib/constants"
import { StyledLink } from "@/components/styled-link"

const SOCIALS = [
  {
    label: "Github",
    icon: <Github className="bg-black rounded-full" />,
    href: GITHUB_PROFILE_URL
  },
  {
    label: "LinkedIn",
    icon: <LinkedIn />,
    href: LINKEDIN_PROFILE_URL
  },
  {
    label: "Gmail",
    icon: <Gmail />,
    href: "mailto:" + EMAIL_ADDRESS
  },
  {
    label: "Instagram",
    icon: <Instagram />,
    href: INSTAGRAM_PROFILE_URL
  },
]

function Socials() {
  return (
    <div className="mt-2 flex items-center gap-4 font-medium text-sm sm:text-base flex-wrap">
      {SOCIALS.map((social, idx) => (
        <Link key={idx} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center gap-2 hover:text-accent" href={social.href} target="_blank">
          {social.icon}
          {social.label}
        </Link>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="space-y-40 mb-6">
      {/* HERO SECTION */}
      <div className="mt-10 md:mt-22 flex flex-col gap-6">
        <div className="text-primary font-bold text-3xl flex flex-col md:flex-row gap-1 sm:gap-4">
          <h1>
            Hello World!
          </h1>
          <h1>
            <StyledSpan className="cursor-default" text="|Matheus|" textOnHover="Sant'Anna" /> here!
          </h1>
        </div>
        <p className="max-w-2xl text-base sm:text-lg">
          I am a <span className="text-primary">Full-Stack Developer</span> that enjoys building stuff, and I am currently based at Lisbon, Portugal.
        </p>
        <p className="max-w-2xl text-base sm:text-lg">
          I worked at <StyledLink href={GM_FLOW_URL} text="GM Flow" /> with
          AI automations. Before this position, I took on freelance projects for websites
          like <StyledLink href={RAFAELWITT_URL} text="Rafael Witt" /> and <StyledLink href={FOLKYOURSELF_URL} text="FolkYourself" />.
          Along the way, I built <StyledLink href={JPRAC_URL} text="jprac" />, which takes the spot as my favorite personal project.
        </p>
        <Socials />
      </div>

      {/* GENERAL SECTION */}
      <InfoTabs />

      {/* MISC SECTION */}
      <MiscSection />
    </div>
  );
}
