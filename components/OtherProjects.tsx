import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/constant";

export default function OtherProjects() {
  return (
    <details className="mt-8 rounded-xl border border-gray-700 p-6">
      <summary className="cursor-pointer py-1 font-semibold text-textGreen">More projects ({projects.length - 3})</summary>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {projects.slice(3).map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </details>
  );
}
