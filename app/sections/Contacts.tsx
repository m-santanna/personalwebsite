import ContactsSubheading from "@/components/ContactsSubheading";

function Contacts() {
  return (
    <div className="w-body">
      <h1 className="text-gradient font-semibold m-[3.5rem] text-[2.75rem] text-center">
        Contact me!
      </h1>
      <div>
        <ContactsSubheading
          title="Email"
          anchortext="matheus.santanna03@gmail.com"
          href="mailto:matheus.santanna03@gmail.com"
          icon="email"
        />
        <ContactsSubheading
          title="Linkedin"
          anchortext="m-santanna"
          href="https://www.linkedin.com/in/m-santanna/"
          icon="contactLinks"
        />
        <ContactsSubheading
          title="GitHub"
          anchortext="m-santanna"
          href="https://github.com/m-santanna"
          icon="contactLinks"
        />
        <ContactsSubheading
          title="Resume"
          anchortext="Here"
          href="/resume"
          icon="contactLinks"
        />
      </div>
    </div>
  );
}

export default Contacts;
