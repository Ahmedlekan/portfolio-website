import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import OtherProjects from "./OtherProjects";
import { projects } from "@/constants/constant";

export default function Projects() {
  return (
    <section id="project" aria-labelledby="projects-title" className="section-shell">
      <SectionTitle id="projects-title" title="Featured projects"
        description="A closer look at my applications, cloud infrastructure, and delivery tooling. Explore the source code on GitHub." />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
      <OtherProjects />
    </section>
  );
}
