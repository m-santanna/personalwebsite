import * as Logos from "@/components/logos"
import { StyledSpan } from "@/components/styled-span"
import { Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
  INSTAGRAM_PROFILE_URL,
  EMAIL_ADDRESS
} from "@/lib/constants"

type ContactCard = {
  name: string
  description: string
  href: string
  logo: keyof typeof Logos
}

const CONTACT_CARDS: ContactCard[] = [
  {
    name: "Email",
    description: "Send me a message directly",
    href: `mailto:${EMAIL_ADDRESS}`,
    logo: "Gmail",
  },
  {
    name: "GitHub",
    description: "Check out my open-source projects",
    href: GITHUB_PROFILE_URL,
    logo: "Github",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    href: LINKEDIN_PROFILE_URL,
    logo: "LinkedIn",
  },
  {
    name: "Instagram",
    description: "Follow my photography and life",
    href: INSTAGRAM_PROFILE_URL,
    logo: "Instagram",
  },
]

function ContactAlternativePage() {
  return (
    <div className="mx-8 sm:mx-30 space-y-12 mb-10">
      <div className="mt-10 flex flex-col items-center text-center gap-4">
        <div className="bg-accent/10 p-3 rounded-full">
          <Mail className="size-8 text-accent" />
        </div>
        <h1 className="text-primary font-bold text-4xl sm:text-5xl tracking-tight">
          Get in Touch
        </h1>
        <p className="text-foreground/70 text-lg sm:text-xl max-w-xl">
          I'm pretty <StyledSpan text="responsive" textOnHover="responsive" className="cursor-default" /> on most of these platforms.
          LinkedIn is my weakness tho... Anyway, pick your favorite!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CONTACT_CARDS.map((card) => {
          const Icon = Logos[card.logo] as React.FC<React.SVGProps<SVGSVGElement>>
          return (
            <Link
              key={card.name}
              href={card.href}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="bg-surface/40 rounded-2xl border border-primary/5 p-8 flex flex-col gap-6 group hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex justify-between items-start relative z-10">
                <div className="bg-primary/5 p-4 rounded-xl group-hover:bg-accent/10 transition-colors duration-300">
                  <Icon className="size-8 transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" />
                </div>
                <ArrowUpRight className="size-5 text-primary/20 group-hover:text-accent transition-colors duration-300" />
              </div>

              <div className="space-y-2 relative z-10">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {card.name}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute -bottom-10 -right-10 size-32 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ContactAlternativePage
