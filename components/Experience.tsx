import SectionTitle from "./SectionTitle";

const experiences = [
  {
    role: "DevOps & Site Reliability Engineer",
    company: "Systematic IT Consultant",
    period: "October 2024 – Present",
    highlights: [
      "Standardized deployments across AWS and Azure using Terraform, Jenkins, and Azure DevOps.",
      "Automated infrastructure provisioning with Terraform and Ansible, reducing setup time from hours to minutes.",
      "Managed container workloads on EKS and AKS with Helm, autoscaling, and rolling updates to support availability during peak traffic.",
      "Integrated Prometheus, Grafana, CloudWatch, and Azure Monitor for proactive alerting and faster incident response.",
      "Implemented monitoring and alerting for Kubernetes microservices using Prometheus, Grafana, CloudWatch, AWS X-Ray, and OpenTelemetry, building dashboards around traffic, errors, latency, application health, JVM metrics, and pod resources and reducing incident detection time by 60%.",
      "Managed production workloads on Amazon EKS using Kubernetes, Helm, autoscaling policies, and GitOps practices, supporting reliable deployments and zero-downtime releases.",
      "Built and maintained AWS infrastructure with Terraform and CloudFormation, cutting provisioning time from hours to under 10 minutes and reducing configuration drift across environments.",
      "Automated infrastructure administration, deployment validation, and recurring operational tasks with Python and Bash, removing manual steps and saving more than 15 hours per week.",
      "Built reusable GitLab CI/CD pipelines for build, test, security scanning, container image publishing, and Kubernetes deployments, standardizing how microservices moved from source control into EKS.",
      "Improved CI/CD reliability through pipeline parallelization, caching, artifact management, and automated deployment checks, reducing release bottlenecks and supporting more frequent deployments.",
      "Integrated SonarQube, Nexus IQ, and OWASP Dependency-Check into CI/CD pipelines to identify code and dependency issues before production deployment.",
    ],
  },
  {
    role: "DevOps & Full-Stack Engineer",
    company: "TradeDepot",
    period: "January 2021 – May 2024",
    highlights: [
      "Designed a multi-tier AWS architecture with load balancers, EC2 application tiers, and an Aurora MySQL Multi-AZ database.",
      "Built responsive React interfaces and integrated REST APIs across customer-facing applications.",
      "Developed e-commerce features including cart state, payment integrations, and product listings.",
      "Worked with designers and backend engineers to improve user flows, while supporting Git workflows and collaboration across teams.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-shell">
      <SectionTitle id="experience-title" title="Professional experience" description="From building applications to automating the infrastructure they run on." />
      <div className="space-y-6">
        {experiences.map((experience) => (
          <article key={experience.company} className="surface">
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                <p className="mt-1 font-medium text-textGreen">{experience.company}</p>
              </div>
              <p className="text-sm text-textDark">{experience.period}<span className="mt-1 block md:text-right">Hybrid</span></p>
            </div>
            <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-textDark marker:text-textGreen">
              {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
