import React from 'react'
import { FaLaptopCode, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
    {
      role: "Freelance Full-Stack & DevOps Engineer",
      company: "Contract (Remote)",
      period: "July 2022 - Present",
      remote: true,
      icon: <FaLaptopCode className="text-textGreen" size={20} />,
      highlights: [
        "Developed a production-ready static SaaS platform hosted on AWS S3, accelerated via CloudFront CDN, and secured with AWS WAF & ACM, reducing latency for global users",
        "Built a scalable e-commerce platform using MongoDB, Express.js, React, and Node.js, reducing client-side rendering time through optimized state management (Redux Toolkit) and server-side pagination",
        "Engineered and deployed containerized microservices (React + Python + MySQL) on AWS Fargate, integrating Cognito, RDS, and API Gateway to reduce infrastructure overhead",
        "Automated CI/CD pipelines using AWS CodeBuild/CodeDeploy, reducing deployment time by and ensuring zero-downtime updates",
        "Enhanced system observability with AWS X-Ray and CloudWatch, decreasing troubleshooting time.",
        "Designed and implemented RESTful APIs, optimizing backend communication and reducing API errors.",
        "Containerization & Orchestration: Containerized multi-service applications with Docker and orchestrated them on Kubernetes clusters, leveraging Helm charts and Kubernetes Jobs for efficient batch processing",
        "Multi-Tier Architecture Design: Designed and deployed a multi-tier architecture featuring a public ALB routing traffic to Nginx-based EC2 web tier (React.js), which proxies API requests to an internal ALB and Node.js app tier connected to Aurora MySQL (Multi-AZ) backend. Implemented load balancing, health checks, and autoscaling for high availability",
        "GitOps-Based CI/CD Pipeline: Designed and implemented a GitOps-based CI/CD pipeline with ArgoCD, integrating Blue-Green and Canary deployments via Argo Rollouts and Flagger for automated, zero-downtime Kubernetes updates"
      ]
    },

    {
      role: "Front-End Engineer",
      company: "TradeDepot: Revolutionizing Supply Chain",
      period: "Jan 2020 - July 2022",
      Hybrid: true,
      icon: <FaReact className="text-textGreen" size={20} />,
      highlights: [
        "Responsive Web Interfaces: Developed responsive, high-performance web interfaces using React, JavaScript, and modern CSS frameworks (including Bootstrap and Tailwind), resulting in significant improvements in mobile usability and overall user experience",
        "API Integration & Optimization: Engineered seamless REST API integrations to fetch and display dynamic data, optimizing requests to reduce load times, enhancing performance across various devices",
        "Cross-Functional Collaboration: Worked closely with UX designers and backend engineers to refine user flows and implement design improvements, leading to a boost in conversion rates and overall user satisfaction",
        "UI Redesign & User Analytics: Redesigned legacy UIs based on user analytics and A/B testing, resulting in increased engagement metrics such as session duration and click-through rates",
        "E-commerce Web App: Led the development of a feature-rich e-commerce platform with React and Redux for state management, integrated with payment gateways and third-party APIs for dynamic product listings and checkout flow",
        "Portfolio Website: Designed and developed a personal portfolio website using React and Next.js, showcasing various front-end projects, optimizing for SEO and performance",
        "Job Board Application: Contributed to the development of a job board app using React, Node.js, and MongoDB, with dynamic filtering and search features that improved user engagement",
        "UI/UX Optimization: Implemented design optimizations based on user feedback, increasing engagement and interaction with key features, such as navigation menus and search functionality"
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