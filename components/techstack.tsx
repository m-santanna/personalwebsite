import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

const Techstack = (props: {
  title: string
  techstack: {
    name: string
    icon:
      | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
      | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>
  }[]
}) => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      {props.techstack.map((tech) => (
        <HoverCard key={tech.name + props.title} openDelay={50} closeDelay={25}>
          <HoverCardTrigger>
            <div className="flex items-center gap-2">
              <tech.icon
                key={tech.name + props.title}
                className="size-6 md:size-8 text-current"
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-32 bg-strong text-center text-super-weak rounded-xl">
            <span>{tech.name}</span>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

export default Techstack
