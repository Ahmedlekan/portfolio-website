import React from 'react'
import { FaLaptopCode} from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
    {
      role: "DevOps & Cloud Engineer",
      company: "Systemaric IT Consultant",
      period: "April 2023 - Present",
      Hybrid: true,
      icon: <FaLaptopCode className="text-textGreen" size={20} />,
      highlights: [
        "Engineered CI/CD pipelines with Jenkins and GitHub/GitLab, automating build, test, and deployment workflows—reducing release cycles by 60% and minimizing manual errors.",
        "Automated infrastructure provisioning using Terraform and Ansible across multi-cloud and multi-region environments, leveraging workspaces for consistency—cutting setup time from hours to minutes and ensuring standardized deployments.",
        "Containerized applications with Docker, optimizing resource limits and requests to ensure performance—lowering infrastructure costs by 15% without compromising reliability.",
        "Orchestrated Kubernetes clusters with high availability and auto-scaling, implementing rolling updates and Helm charts—increasing application resilience and handling 3x peak traffic with zero downtime.",
        "Streamlined Java CI/CD pipelines using Maven and Nexus, integrating SonarQube for quality gates and security scans—reducing build times by 20% and improving code reliability.",
        "Built disaster recovery automation with custom Shell scripts and AWS Lambda for routine backups—enhancing business continuity and meeting RPO/RTO objectives.",
        "Integrated monitoring and observability stack with Prometheus, Grafana, and AWS CloudWatch—reducing downtime by 15% through proactive alerting and faster incident response.",
        "Strengthened DevSecOps practices by embedding OWASP Dependency-Check and vulnerability scanning into CI/CD pipelines—ensuring secure deployments and reducing production risks.",
        "Improved team efficiency by automating repetitive server maintenance tasks—freeing 25% of engineering time for strategic projects and innovation.",
        "Automated deployment of a static website on AWS S3 using Terraform, integrated with CloudFront, Route53, WAF, and ACM, reducing global latency by 40% and ensuring secure, consistent infrastructure.",
      ]
    },

    {
      role: "DevOps & Full-Stack Engineer",
      company: "TradeDepot",
      period: "Jan 2020 - Feb 2023",
      Hybrid: true,
      icon: <FaLaptopCode className="text-textGreen" size={20} />,
      highlights: [
        "Designed and deployed a multi-tier architecture with a public ALB routing traffic to Nginx-based EC2 web tier (React.js), which proxies API requests to an internal ALB and Node.js app tier connected to an Aurora MySQL (Multi-AZ) backend. Implemented load balancing, health checks, and autoscaling at each layer for high availability.",
        "Led version control best practices with Git, GitHub, and GitLab, managing branches, permissions, and merge conflicts—enabling smoother collaboration across distributed teams.",
        "Responsive Web Interfaces: Developed responsive, high-performance web interfaces using React, JavaScript, and modern CSS frameworks (including Bootstrap and Tailwind), resulting in significant improvements in mobile usability and overall user experience.",
        "API Integration & Optimization: Engineered seamless REST API integrations to fetch and display dynamic data, optimizing requests to reduce load times, enhancing performance across various devices",
        "Cross-Functional Collaboration: Worked closely with UX designers and backend engineers to refine user flows and implement design improvements, leading to a boost in conversion rates and overall user satisfaction",
        "UI Redesign & User Analytics: Redesigned legacy UIs based on user analytics and A/B testing, resulting in increased engagement metrics such as session duration and click-through rates",
        "E-commerce Web App: Led the development of a feature-rich e-commerce platform with React and Redux for state management, integrated with payment gateways and third-party APIs for dynamic product listings and checkout flow",
        "Job Board Application: Contributed to the development of a job board app using React, Node.js, and MongoDB, with dynamic filtering and search features that improved user engagement",
        "UI/UX Optimization: Implemented design optimizations based on user feedback, increasing engagement and interaction with key features, such as navigation menus and search functionality"
      ]
    },
  ];

const Experience = () => {

  return (
    <section id="experience" className="max-w-containerSmall mx-auto px-4">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 lg:mb-16">
        Professional Journey
      </h2>
      
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 border border-gray-700 rounded-xl p-5 md:p-6 lg:p-7 
            hover:border-textGreen/30 transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6">
              <div className="flex items-start">
                <div className="p-2.5 md:p-3 bg-gray-800 rounded-lg border border-gray-700 flex-shrink-0">
                  {exp.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col mb-4 md:mb-5">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm md:text-base">
                    <span className="font-medium text-textGreen">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-gray-400">{exp.period}</span>
                    {exp.Hybrid && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span className="text-textGreen">Hybrid</span>
                      </>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2.5 md:space-y-3">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-textGreen mt-1.5 flex-shrink-0">▹</span>
                      <span className="text-sm md:text-base">{item}</span>
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