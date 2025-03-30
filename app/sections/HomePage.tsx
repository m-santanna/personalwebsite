import ScrollDown from "@/components/ScrollDown";
import AnimatedBeam from "@/components/animata/background/animated-beam";
import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";

function HomePage() {
  return (
    <AnimatedBeam backgroundClassName="from-slate-800 to-indigo-900">
      <section
        id="HomePage"
        className="w-screen h-[calc(90vh-80px)] sm:h-[calc(100vh-80px)] flex flex-col gap-[10vh] justify-center items-center"
      >
        <AnimatedBorderTrail
          className="bg-zinc-600"
          contentClassName="w-[70vw] bg-strong flex flex-col items-center justify-center gap-4 rounded-2xl p-16"
          trailColor="rgb(245 158 11)"
          duration="7s"
        >
          <h1 className="text-5xl font-semibold text-gradient text-center">
            Hello, world!
          </h1>
          <p className="text-xl text-weak text-justify">
            I <span className="line-through">am a Software Engineer</span> am
            almost a Software Engineer
          </p>
        </AnimatedBorderTrail>
        <ScrollDown />
      </section>
    </AnimatedBeam>
  );
}

export default HomePage;
