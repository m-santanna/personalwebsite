import { Link2 } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProjectSubheadingProps {
  title: string;
  text: string;
  href: string;
  date: string;
  techstack?: {
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    name: string;
  }[];
}

function ProjectSubheading(props: ProjectSubheadingProps) {
  return (
    <>
      <div className="mb-2">
        <div className="flex items-center">
          <Link
            className="group flex items-center gap-2 subheading bg-gradient-to-bl from-amber-500 to-amber-800 hover:text-transparent bg-clip-text"
            href={props.href}
            target="_blank"
          >
            {props.title}
            <Link2 className="size-6 md:size-8 text-current group-hover:text-amber-600" />
          </Link>
        </div>
        <p className="font-thin">{props.date}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {props.techstack?.map((tech) => (
            <HoverCard
              key={tech.name + props.title}
              openDelay={50}
              closeDelay={25}
            >
              <HoverCardTrigger>
                <div className="flex items-center gap-2">
                  <tech.icon
                    key={tech.name + props.title}
                    className="size-6 md:size-8 text-current"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-32 bg-strong text-center">
                <span>{tech.name}</span>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
      <p className="text text-justify mb-8">{props.text}</p>
    </>
  );
}

export default ProjectSubheading;
