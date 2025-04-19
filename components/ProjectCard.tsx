import Image, { StaticImageData } from "next/image"
import Techstack from "@/components/techstack"
import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import { ArrowRight, Globe } from "lucide-react"
import { LOGOS } from "@/components/Logos"
import Link from "next/link"

const VisitButton = ({ link }: { link?: string }) => {
  if (!link)
    return (
      <Button
        variant={"default"}
        size={"lg"}
        className="w-full hover:bg-primary hover:cursor-not-allowed"
        disabled
      >
        <Globe className="size-6 md:size-8" />
        Visit
      </Button>
    )
  return (
    <Button asChild variant={"default"} size={"lg"} className="w-full">
      <Link href={link} target="_blank">
        <Globe className="size-6 md:size-8" />
        Visit
      </Link>
    </Button>
  )
}

const SourceButton = ({ githubLink }: { githubLink?: string }) => {
  if (!githubLink)
    return (
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-full px-5 h-11 hover:bg-background hover:cursor-not-allowed"
        disabled
      >
        <LOGOS.github className="size-6 md:size-8" />
        Source
      </Button>
    )
  return (
    <Button
      asChild
      variant={"outline"}
      size={"lg"}
      className="w-full px-5 h-11"
    >
      <Link href={githubLink} target="_blank">
        <LOGOS.github className="size-6 md:size-8" />
        Source
      </Link>
    </Button>
  )
}

const ProjectCard = ({
  title,
  description,
  techstack,
  image,
  link,
  visitLink,
  githubLink,
  className,
}: {
  title: string
  description: string
  techstack: {
    icon:
      | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
      | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>
    name: string
  }[]
  image: StaticImageData
  link: string
  visitLink?: string
  githubLink?: string
  className?: string
}) => {
  return (
    <div
      className={`group border border-gray-300 rounded-2xl p-5 flex flex-col items-center gap-4 bg-gradient-to-b from-indigo-950 to-gray-800 hover:shadow-lg transform transition-all duration-300 ease-in-out ${className}`}
    >
      <Link
        href={visitLink ? visitLink : githubLink ? githubLink : link}
        target="_blank"
        className="w-full h-full"
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt={title + " image"}
            fill
            className="h-full w-full rounded-2xl object-cover group-hover:-translate-y-2 duration-300"
          />
        </AspectRatio>
      </Link>
      <h1 className="subheading">{title}</h1>
      <Techstack title={title} techstack={techstack} />
      <p className="text text-center">{description}</p>
      <div className="flex gap-4 items-center">
        <VisitButton link={visitLink} />
        <SourceButton githubLink={githubLink} />
      </div>
      <Link
        href={link}
        className="group/link flex items-center gap-1 text-md text-stone-200 hover:text-stone-400"
      >
        Learn more
        <ArrowRight className="size-4 md:size-6 group-hover/link:translate-x-2 duration-200" />
      </Link>
    </div>
  )
}

export default ProjectCard
