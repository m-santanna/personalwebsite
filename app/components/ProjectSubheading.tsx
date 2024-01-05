import Link from "next/link";
import ContactLinks from "../icons/ContactLinks";

interface ProjectSubheadingProps {
  title: string;
  text: string;
  href: string;
}

function ProjectSubheading(props: ProjectSubheadingProps) {
  return (
    <>
      <div className="flex">
        {props.href === "private" ? (
          <div className="subheading mb-4">{props.title}</div>
        ) : (
          <>
            <Link
              className="subheading hover:underline mb-4"
              href={props.href}
              target="_blank"
            >
              {props.title}
            </Link>
            <ContactLinks className="h-7 w-7" />
          </>
        )}
      </div>
      <p className="text text-justify mb-8">{props.text}</p>
    </>
  );
}

export default ProjectSubheading;
