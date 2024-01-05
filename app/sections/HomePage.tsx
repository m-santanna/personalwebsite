import ScrollDown from "../components/ScrollDown";

function HomePage() {
  return (
    <div className="w-screen h-[calc(55vh)] sm:h-[calc(100vh-80px)]">
      <div className="bg-strong mt-[5vh] sm:mt-[15vh] mx-[10vw] flex items-center justify-center text-center ring-[0.03rem] ring-stone-700 shadow-lg shadow-stone-700">
        <div className="p-16">
          <p className="text-4xl mt-[1rem] mb-4 text-super-weak font-semibold">
            Hello, world!
          </p>
          <p className="text-xl text-weak">
            I&#39;m Matheus Sant&#39;Anna, a{" "}
            <strong>FullStack Developer</strong> that likes to solve problems by
            building apps.
          </p>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
}

export default HomePage;
