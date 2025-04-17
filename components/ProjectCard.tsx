import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaExternalLinkAlt, FaServer } from "react-icons/fa";
import { SiAmazonaws, SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";

type ProjectProps = {
  title: string;
  description: string;
  techStack: string[];
  links?: {
    github?: string;
    youtube?: string;
    live?: string;
    docs?: string;
  };
};

const techIcons: Record<string, JSX.Element> = {
  AWS: <SiAmazonaws className="text-orange-500" />,
  React: <SiReact className="text-blue-400" />,
  NodeJS: <SiNodedotjs className="text-green-500" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  // Add more as needed
};

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  techStack, 
  links 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden 
      hover:border-textGreen/50 transition-all duration-300 group"
    >
      <div className="p-6">
        {/* Header with icons */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-textGreen
            transition-colors">
              {title}
            </h3>
            
          </div>
          
          <div className="flex gap-3">
            {links?.github && (
              <a 
                href={links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub repository"
              >
                <FaGithub size={18} />
              </a>
            )}
            {links?.youtube && (
              <a 
                href={links.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="YouTube demo"
              >
                <FaYoutube size={18} />
              </a>
            )}
            {links?.live && (
              <a 
                href={links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-textGreen transition-colors"
                aria-label="Live demo"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>

        {/* Tech stack */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <FaServer className="text-textGreen" />
            <span>Built with:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="flex items-center gap-1.5 bg-gray-800 text-gray-300 text-xs
                px-3 py-1.5 rounded-full"
              >
                {techIcons[tech] || null}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;