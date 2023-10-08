import ContactsSubheading from "../components/ContactsSubheading";

function Contacts() {
  return (
    <div className="w-body">
      <h1 className="heading">Contact me!</h1>
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
          anchortext="matheusss100503"
          href="https://www.github.com/matheusss100503"
          icon="contactLinks"
        />
      </div>
    </div>
  );
}

export default Contacts;
