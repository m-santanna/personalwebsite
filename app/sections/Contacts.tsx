import ContactsSubheading from "@/components/ContactsSubheading";

function Contacts() {
  return (
    <section
      id="Contacts"
      className="flex flex-col items-center bg-weak h-[calc(100vh-80px)]"
    >
      <h1 className="heading">Contact me!</h1>
      <div className="w-body">
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
    </section>
  );
}

export default Contacts;
