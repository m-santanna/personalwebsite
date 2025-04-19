import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface RegulatTextSubheadingProps {
  title: string
  text?: string
  techstack?: {
    icon:
      | React.FunctionComponent<React.SVGProps<SVGSVGElement>>
      | React.FunctionComponent<React.HTMLProps<HTMLDivElement>>
    name: string
  }[]
}

function RegularTextSubheading(props: RegulatTextSubheadingProps) {
  return (
    <div className="flex flex-col mb-8 gap-4">
      <h3 className="subheading text-center">{props.title}</h3>
      {props.text && <p className="text text-center">{props.text}</p>}
      <div className="flex flex-wrap gap-4 justify-center">
        {props.techstack &&
          props.techstack?.map((tech) => (
            <HoverCard
              key={tech.name + props.title}
              openDelay={50}
              closeDelay={25}
            >
              <HoverCardTrigger>
                <div className="flex items-center gap-2">
                  <tech.icon
                    key={tech.name + props.title}
                    className="size-8 md:size-10 text-current"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-32 bg-strong text-center text-super-weak rounded-xl">
                <span>{tech.name}</span>
              </HoverCardContent>
            </HoverCard>
          ))}
      </div>
    </div>
  )
}

export default RegularTextSubheading
