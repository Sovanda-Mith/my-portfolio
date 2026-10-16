const goals = [
  {
    title: "Support my family",
    description: "Build a stable income that lets me provide for the people I love.",
  },
  {
    title: "Explore the world",
    description: "Travel around the world and create memories with my loved ones.",
  },
  {
    title: "Achieve financial freedom",
    description: "Live confidently without constantly worrying about living costs.",
  },
];

export default function MyGoals() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="mb-7">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          The bigger picture
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">What drives me every day</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {goals.map(({ title, description }, index) => (
          <article
            key={title}
            className="group rounded-2xl border border-white/10 bg-neutral-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-neutral-900"
          >
            <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-violet-300">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-6 text-neutral-400">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
