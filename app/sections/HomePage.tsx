import ScrollDown from "../components/ScrollDown";

function HomePage() {
  return (
    <div className="w-screen h-[calc(90vh-80px)] sm:h-[calc(100vh-80px)]">
      <div className="bg-strong mt-[5vh] sm:mt-[15vh] mx-[10vw] flex items-center justify-center text-center rounded-2xl ring-[0.03rem] ring-stone-700 shadow-lg shadow-stone-700">
        <div className="p-16">
          <h1 className="text-5xl mt-[1rem] mb-4 font-semibold text-gradient">
            Hello, world!
          </h1>
          <p className="text-xl text-weak">
            I <span className="line-through">am a Software Engineer</span> like
            to view myself as a Software Engineer
          </p>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
}

export default HomePage;
