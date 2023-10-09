import Image from "next/image";
import ProfilePic from "../images/profile.jpeg";
function HomePage() {
  return (
    <div className="bg-strong flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-justify mx-8 mt-10 sm:mt-32 ring-[0.03rem] ring-stone-700 shadow-lg shadow-stone-700 rounded-t-[600px] rounded-b-[600px] sm:rounded-r-[48px] sm:rounded-l-[200px]">
      <Image
        src={ProfilePic}
        alt="ProfilePicture"
        className="rounded-full w-72 h-72"
        priority={true}
      />
      <div className="p-2 mx-4 pb-32 sm:py-10">
        <p className="text-4xl mt-[1rem] mb-2 text-super-weak font-semibold">
          Hello, world!
        </p>
        <p className="text-xl text-weak">
          I&#39;m Matheus Sant&#39;Anna, a <strong>FullStack Developer</strong>{" "}
          that likes to solve problems by building apps.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
