import { Link2 } from "lucide-react";
import Link from "next/link";

interface ProjectSubheadingProps {
  title: string;
  text: string;
  href: string;
  date: string;
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
      </div>
      <p className="text text-justify mb-8">{props.text}</p>
    </>
  );
}

export default ProjectSubheading;
