import Image from "next/image"
import resume from "@/images/resume.png"

function ResumePage() {
  return (
    <div>
      <Image src={resume} alt="Resume Image" />
    </div>
  )
}

export default ResumePage
