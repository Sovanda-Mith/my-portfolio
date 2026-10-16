import Nav from "@/components/Nav";
import MyGoals from "./_components/MyGoals";
import CurrentGoals from "./_components/CurrentGoals";
import AccomplishedGoals from "./_components/AccomplishedGoals";
import VideoBackground from "@/components/VideoBackground";

export default function Goals() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <VideoBackground />
      </div>

      <div className="relative z-10">
        <Nav />

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-10">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Goals that keep me
              <span className="block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                moving forward
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
              A collection of the long-term ambitions and everyday milestones
              that guide my personal and professional growth.
            </p>
          </header>

          <div className="space-y-8">
            <MyGoals />
            <CurrentGoals />
            <AccomplishedGoals />
          </div>
        </div>
      </div>
    </main>
  );
}
