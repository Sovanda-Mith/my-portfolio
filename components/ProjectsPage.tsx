import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <div className="text-3xl my-4 ml-10 font-semibold">Projects</div>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
