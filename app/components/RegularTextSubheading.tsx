interface RegulatTextSubheadingProps {
  title: string;
  text: string;
}

function RegularTextSubheading(props: RegulatTextSubheadingProps) {
  return (
    <>
      <h3 className="subheading mb-4">{props.title}</h3>
      <p className="text mb-8">{props.text}</p>
    </>
  );
}

export default RegularTextSubheading;
