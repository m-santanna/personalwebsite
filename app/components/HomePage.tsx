import Image from "next/image";
import ProfilePic from "../images/profile.jpeg";

function HomePage() {
  return (
    <div className="flex justify-between rounded-r-[48px] rounded-l-[200px] bg-red-100">
      <Image
        src={ProfilePic}
        alt="ProfilePicture"
        className="rounded-full w-64 h-64"
      />
      <div className="p-2">
        <p className="bg-blue-300">Hello, world!</p>
        <p className="bg-blue-200">
          My name is Matheus, and I like to solve my problems by building some
          apps.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
