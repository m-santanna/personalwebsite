import Image from "next/image"
import resume from "@/images/resume.png"

function ResumePage() {
  return (
    <div className="flex items-center w-screen justify-center">
      <Image src={resume} alt="Resume Image" />
    </div>
  )
}

export default ResumePage
