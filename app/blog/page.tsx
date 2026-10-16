import MediumArticles from "@/components/MediumArticles";
import Nav from "@/components/Nav";
import VideoBackground from "@/components/VideoBackground";
import Image from "next/image";

export default function Blog() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <VideoBackground />
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/50 to-neutral-950" />
      </div>

      <div className="relative z-10">
        <Nav />

        <div className="mx-auto max-w-6xl px-5 pb-24 pt-4 sm:px-8 sm:pt-8 lg:px-10">
          <header className="mb-12 grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_auto] md:items-end lg:mb-16 lg:pb-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Ideas, lessons, and things
                <span className="block text-neutral-400">worth remembering.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
                Thoughts from my journey through software development, technology,
                and continuous learning.
              </p>
            </div>

            <div className="flex items-center gap-3 md:pb-1">
              <Image
                src="/my-pf.png"
                alt="Mith Sovanda"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full border border-white/20 object-cover"
              />
              <div>
                <p className="font-semibold text-white">Mith Sovanda</p>
                <p className="text-sm text-neutral-400">Developer &amp; student</p>
              </div>
            </div>
          </header>

          <section aria-labelledby="latest-writing">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  From Medium
                </p>
                <h2 id="latest-writing" className="text-2xl font-semibold sm:text-3xl">
                  Latest writing
                </h2>
              </div>
              <p className="hidden text-sm text-neutral-400 sm:block">
                A growing collection of notes and stories
              </p>
            </div>

            <MediumArticles />
          </section>
        </div>
      </div>
    </main>
  );
}
