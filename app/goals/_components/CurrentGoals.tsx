const currentGoals = [
  "Get fit",
  "Move out from home",
  "Build stronger discipline",
  "Improve content creation",
  "Improve editing skills",
];

export default function CurrentGoals() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-8">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            In progress
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">My current focus</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Small, consistent steps toward becoming better every day.
          </p>
        </div>
        <div className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-300">
          {currentGoals.length} active goals
        </div>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {currentGoals.map((label, index) => (
          <li
            key={label}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 border-l-cyan-300/60 bg-neutral-900/60 p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-neutral-100">{label}</p>
              <p className="mt-1 text-xs text-neutral-500">Goal {String(index + 1).padStart(2, "0")}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
