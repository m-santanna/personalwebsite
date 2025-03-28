import Link from "next/link";
import ContactLinks from "../icons/ContactLinks";

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
        <div className="flex">
          <Link
            className="subheading hover:underline"
            href={props.href}
            target="_blank"
          >
            {props.title}
          </Link>
          <ContactLinks className="h-7 w-7" />
        </div>
        <p className="font-thin">{props.date}</p>
      </div>
      <p className="text text-justify mb-8">{props.text}</p>
    </>
  );
}

export default ProjectSubheading;
