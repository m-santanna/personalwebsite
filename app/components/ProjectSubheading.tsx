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
        <a
          className="subheading hover:underline mb-4"
          href={props.href}
          target="_blank"
        >
          {props.title}
        </a>
        <ContactLinks className="h-7 w-7" />
      </div>
      <p className="text text-justify mb-8">{props.text}</p>
    </>
  );
}

export default ProjectSubheading;
