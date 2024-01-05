import React from "react";
import resume from "../images/resume.jpg";
import Image from "next/image";

const ResumePage = () => {
  return (
    <div>
      <Image src={resume} alt="resume" />
    </div>
  );
};

export default ResumePage;
