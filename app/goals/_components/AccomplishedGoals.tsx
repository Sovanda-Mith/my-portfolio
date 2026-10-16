const accomplishedGoals = [
  "Find an internship or job",
  "Improve web development",
  "Grow in cybersecurity",
  "Grow in DevOps",
];

export default function AccomplishedGoals() {
  return (
    <section className="rounded-3xl border border-emerald-300/15 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Milestones
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Accomplished goals</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Progress worth celebrating and building on.
          </p>
        </div>
        <div className="w-fit rounded-full border border-emerald-300/15 bg-emerald-400/[0.08] px-3 py-1.5 text-sm text-emerald-200">
          {accomplishedGoals.length} completed
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {accomplishedGoals.map((goal, index) => (
          <li
            key={goal}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 border-l-emerald-300/60 bg-neutral-900/60 p-4"
          >
            <p className="font-medium text-neutral-100">{goal}</p>
            <span className="shrink-0 text-xs font-medium text-emerald-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
