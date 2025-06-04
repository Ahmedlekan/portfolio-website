import React from 'react'
import { FaLaptopCode, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
    {
      role: "Freelance DevOps & Cloud Engineer",
      company: "Contract (Remote)",
      period: "July 2022 - Present",
      remote: true,
      icon: <FaLaptopCode className="text-textGreen" size={20} />,
      highlights: [
        "Architected end-to-end CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline to automate builds, tests, and zero-downtime deployments, cutting manual deployment effort by 90%",
        "Containerized multi-service applications using Docker and orchestrated them on Kubernetes clusters, implementing Helm charts and Kubernetes Jobs for batch processing",
        "Configured observability stack with AWS X-Ray, CloudWatch, Prometheus, and Grafana for metrics, logging, and alerting, decreasing incident response time by 60%",
        "Automated deployment of a static website on AWS S3 using Terraform, integrated with CloudFront, Route53, WAF, and ACM, reducing global latency by 40% and ensuring secure, consistent infrastructure",
        "Designed and implemented a GitOps-based CI/CD pipeline with ArgoCD, integrating Blue-Green and Canary deployments via Argo Rollouts and Flagger for automated, zero-downtime Kubernetes updates",
        "Designed and deployed a multi-tier architecture with a public ALB routing traffic to Nginx-based EC2 web tier (React.js), which proxies API requests to an internal ALB and Node.js app tier connected to an Aurora MySQL (Multi-AZ) backend. Implemented load balancing, health checks, and autoscaling at each layer for high availability"
      ]
    },

    {
      role: "Full - Stack Developer",
      company: "TradeDepot: Revolutionizing Supply Chain",
      period: "Jan 2020 - July 2022",
      Hybrid: true,
      icon: <FaReact className="text-textGreen" size={20} />,
      highlights: [
        "Developed responsive, high-performance web interfaces using React, JavaScript, and modern CSS frameworks (Bootstrap, Tailwind), improving mobile usability by 25%",
        "Engineered seamless API integrations (REST) to fetch and display dynamic data, reducing load times by 30% through optimized requests",
        "Collaborated cross-functionally with UX designers and backend engineers to refine user flows, boosting conversion rates by 15%",
        "Redesigned legacy UIs based on user analytics and A/B testing, increasing engagement metrics (session duration, clicks) by 40%"
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