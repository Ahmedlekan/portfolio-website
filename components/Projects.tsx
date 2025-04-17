import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/constant";

const Projects = () => {

    const projectsSlice = projects.slice(0, 3)

  return (
    <section className=" max-w-containerSmall mx-auto px-4"
    >
        <SectionTitle title="Projects Highlights"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projectsSlice.map((project, index) => (
            <ProjectCard 
                key={index} 
                {...project} 
            />
            ))}
        </div>
    </section>
  )
}

export default Projects

