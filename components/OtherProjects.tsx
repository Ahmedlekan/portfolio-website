import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/constant";


const OtherProjects = () => {
  return (
    <section id="project" className=" max-w-containerSmall mx-auto px-4 pt-20"
    >
        <SectionTitle title="My Projects"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
            <ProjectCard 
                key={index} 
                {...project} 
            />
            ))}
        </div>
    </section>
  );
};

export default OtherProjects;