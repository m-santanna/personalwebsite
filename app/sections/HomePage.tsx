import ScrollDown from "@/components/ScrollDown";
import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";

function HomePage() {
  return (
    <div className="w-screen h-[calc(90vh-80px)] sm:h-[calc(100vh-80px)] flex flex-col gap-[10vh] justify-center items-center">
      <AnimatedBorderTrail
        className="bg-zinc-500"
        contentClassName="w-[70vw] bg-strong flex flex-col items-center justify-center gap-4 rounded-2xl p-16"
        trailColor="rgb(245 158 11)"
        duration="7s"
      >
        <h1 className="text-5xl font-semibold text-gradient text-center">
          Hello, world!
        </h1>
        <p className="text-xl text-weak text-justify">
          I <span className="line-through">am a Software Engineer</span> like to
          view myself as a Software Engineer
        </p>
      </AnimatedBorderTrail>
      <ScrollDown />
    </div>
  );
}

export default HomePage;
