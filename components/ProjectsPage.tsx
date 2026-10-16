import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="bg-neutral-100 px-5 py-16 text-neutral-950 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Selected work
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects &amp; experience</h2>
          <p className="mt-4 leading-7 text-neutral-600">
            Products and systems I have built across personal projects, team collaborations,
            internships, and professional roles.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={`${project.title}-${project.period}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
