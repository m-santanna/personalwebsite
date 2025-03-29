import React from "react";
import Email from "./icons/Email";
import ContactLinks from "./icons/ContactLinks";
import Link from "next/link";

interface ContactsSubheadingProps {
  title: string;
  anchortext: string;
  href: string;
  icon?: "email" | "contactLinks";
  iconClassName?: string;
}

function ContactsSubheading(props: ContactsSubheadingProps) {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h3 className="subheading">{props.title}</h3>
      <div className="flex items-center">
        <Link
          href={props.href}
          target="_blank"
          className="text hover:underline"
        >
          {props.anchortext}
        </Link>
        {props.icon === "email" ? (
          <Email className={props.iconClassName} />
        ) : (
          <ContactLinks className={props.iconClassName} />
        )}
      </div>
    </div>
  );
}

export default ContactsSubheading;
