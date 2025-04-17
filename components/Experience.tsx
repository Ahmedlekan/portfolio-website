import React from 'react'
import { FaLaptopCode, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
    {
      role: "Freelance Web Developer",
      company: "Contract Projects",
      period: "July 2021 - February 2025",
      remote: true,
      icon: <FaLaptopCode className="text-textGreen" size={20} />,
      highlights: [
        "Collaborated with design teams to refine wireframes and prototypes, leading to interactive, user-friendly web applications that improved engagement by 40% and reduced load times by 30%.",
        "Developed RESTful APIs to optimize client data retrieval speeds by 40%, ensuring seamless backend integration and reducing API errors by 25%",
        "Delivered over 90% of projects ahead of schedule with high client satisfaction, managing end-to-end development lifecycles from concept to deployment",
        "Engineered high-performance, responsive web applications using React and Next.js, achieving a 20% improvement in page load speed and boosting SEO rankings",
        "Built robust server-side logic with Node.js and Express, improving data processing efficiency and reducing server response times by 30%",
        "Implemented AWS-based CI/CD pipelines and Docker for deployment automation, ensuring seamless code integration and faster release cycles"
      ]
    },

    {
      role: "Frontend Developer",
      company: "TradeDepot: Revolutionizing Supply Chain",
      period: "Jan 2020 - July 2021",
      Hybrid: true,
      icon: <FaReact className="text-textGreen" size={20} />,
      highlights: [
        "Developed responsive websites using React/Next.js with 30% faster load times",
        "Integrated REST APIs for dynamic content delivery",
        "Implemented Tailwind CSS for consistent UI across 15+ client projects",
        "Contributed to agile sprints with 100% on-time delivery"
      ]
    },
  ];

const Experience = () => {

  return (
    <section id="experience" className="max-w-containerSmall mx-auto pt-20 px-4">
      
      <h2 className="text-3xl text-center font-bold text-white mb-12
        text-[30px] lgl:text-[40px] font-titleFont">
        Professional Journey
      </h2>
      
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 
            hover:border-textGreen/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-4 md:items-start">
              <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                {exp.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role} · {exp.company}
                  </h3>
                  <span className="text-sm text-textGreen">
                    {exp.period} {exp.remote && "· Remote"}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-400">
                      <span className="text-textGreen mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience