import React from "react";
import Image from "next/image";
import cs50x from "@/images/CS50x.png";

function page() {
  return (
    <div className="flex justify-center items-center h-screen w-screen p-8">
      <Image
        className="w-full lg:w-2/3"
        src={cs50x}
        alt="cs50x's certificate"
      />
    </div>
  );
}

export default page;
