import React from "react";
import Email from "../icons/Email";
import ContactLinks from "../icons/ContactLinks";

interface ContactsSubheadingProps {
  title: string;
  anchortext: string;
  href: string;
  icon?: "email" | "contactLinks";
  iconClassName?: string;
}

function ContactsSubheading(props: ContactsSubheadingProps) {
  return (
    <>
      <h3 className="subheading mb-4">{props.title}</h3>
      <div className="flex">
        <a
          href={props.href}
          target="_blank"
          className="text mb-8 hover:underline"
        >
          {props.anchortext}
        </a>
        {props.icon === "email" ? (
          <Email className={props.iconClassName} />
        ) : (
          <ContactLinks className={props.iconClassName} />
        )}
      </div>
    </>
  );
}

export default ContactsSubheading;
