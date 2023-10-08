import React from "react";
import Image from "next/image";
import cs50x from "../images/CS50x.png";

function page() {
  return (
    <div>
      <Image src={cs50x} alt="cs50x's certificate" />
    </div>
  );
}

export default page;
