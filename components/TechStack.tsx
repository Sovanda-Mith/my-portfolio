import { Database, Layers3, ServerCog, Terminal } from "lucide-react";

const stackGroups = [
  {
    number: "01",
    Icon: Terminal,
    title: "Languages & foundations",
    description: "The core languages I use to build web applications, APIs, automation, and reports.",
    technologies: ["PHP", "TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    number: "02",
    Icon: Layers3,
    title: "Frameworks & interfaces",
    description: "Tools I use across modern frontend, backend, mobile, and content-driven products.",
    technologies: [
      "Laravel",
      "Vue.js",
      "Next.js",
      "React",
      "NestJS",
      "Flutter",
      "Tailwind CSS",
      "jQuery",
      "WordPress",
    ],
  },
  {
    number: "03",
    Icon: Database,
    title: "Data & communication",
    description: "Technologies behind relational data, reporting, APIs, and real-time experiences.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "Oracle PL/SQL",
      "Prisma ORM",
      "REST APIs",
      "WebSockets",
      "MQTT",
    ],
  },
  {
    number: "04",
    Icon: ServerCog,
    title: "Infrastructure & delivery",
    description: "The systems and delivery tooling I use to ship, secure, and maintain applications.",
    technologies: [
      "Docker",
      "Nginx",
      "Linux",
      "Git",
      "GitHub CI/CD",
      "GitLab CI",
      "SonarQube",
      "SSL & DNS",
    ],
  },
];

export default function TechStack() {
  return (
    <section className="bg-neutral-950 px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Current toolkit
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-4 leading-7 text-neutral-400">
            A practical stack shaped by full-stack products, financial reporting systems,
            real-time applications, and production infrastructure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-cyan-300/25 sm:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.08] p-2.5 text-cyan-300">
                    <group.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold sm:text-2xl">{group.title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-400">
                      {group.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-widest text-cyan-300">
                  {group.number}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={`${group.title} technologies`}>
                {group.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-white/10 bg-neutral-900 px-3.5 py-2 text-sm text-neutral-200"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
