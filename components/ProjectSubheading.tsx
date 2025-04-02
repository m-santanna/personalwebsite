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
            className="flex items-center gap-2 subheading underline-animation"
            href={props.href}
            target="_blank"
          >
            {props.title}
            <Link2 className="size-8" />
          </Link>
        </div>
        <p className="font-thin">{props.date}</p>
      </div>
      <p className="text text-justify mb-8">{props.text}</p>
    </>
  );
}

export default ProjectSubheading;
