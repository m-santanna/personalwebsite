import Image from "next/image";
import ProfilePic from "../images/profile.jpeg";

function HomePage() {
  return (
    <div className="flex justify-between mt-32 ring-[0.03rem] ring-stone-700 shadow-lg shadow-stone-700 rounded-r-[48px] rounded-l-[200px] bg-strong">
      <Image
        src={ProfilePic}
        alt="ProfilePicture"
        className="rounded-full w-72 h-72"
        priority={true}
      />
      <div className="p-2 mx-4">
        <p className="text-4xl mt-[5rem] mb-2 text-super-weak">Hello, world!</p>
        <p className="text-xl text-weak">I'm Matheus Sant'Anna,</p>
        <p className="text-xl text-weak">
          a <strong>FullStack Developer</strong> that likes to solve problems by
          building apps.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
