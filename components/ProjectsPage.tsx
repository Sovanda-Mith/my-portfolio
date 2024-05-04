import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <div className="text-3xl mb-4">Projects</div>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
