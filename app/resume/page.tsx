import React from "react";
import resume from "../images/resume.png";
import Image from "next/image";

const ResumePage = () => {
  return (
    <div className="flex justify-center p-8 w-screen">
      <Image className="w-1/2" src={resume} alt="resume" />
    </div>
  );
};

export default ResumePage;
