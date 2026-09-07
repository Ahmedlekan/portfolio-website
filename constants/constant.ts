export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#project", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ahmedlekan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lekan-ahmed-8aa401214" },
  { label: "Twitter", href: "https://twitter.com/AhmedLekan11" },
];

export const contactEmail = "Ahmedlekan011@gmail.com";

export const skillGroups = [
  { title: "Cloud & infrastructure", skills: ["AWS", "Microsoft Azure"] },
  { title: "Infrastructure as Code", skills: ["Terraform", "CloudFormation", "Ansible", "Helm"] },
  { title: "Containers & orchestration", skills: ["Docker", "Kubernetes (EKS)", "Helm"] },
  { title: "CI/CD", skills: ["GitHub Actions", "Jenkins", "GitLab CI/CD", "GitOps", "Azure DevOps"] },
  { title: "Monitoring & observability", skills: ["Prometheus", "Grafana", "CloudWatch", "OpenTelemetry", "Jaeger", "ELK Stack", "AWS X-Ray"] },
  { title: "Security & DevSecOps", skills: ["OWASP Dependency-Check", "SonarQube", "Nexus IQ", "Security Best Practices"] },
  { title: "Programming & scripting", skills: ["Python", "Bash", "PowerShell", "JavaScript", "Java", "TypeScript", "Node.js"] },
  { title: "AIOps", skills: ["Claude", "Codex", "AWS Lambda", "Amazon Bedrock", "Bedrock AgentCore"] },
  { title: "Databases & messaging", skills: ["MySQL", "PostgreSQL", "Redis", "RabbitMQ", "MongoDB"] },
  { title: "Other", skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Linux Administration", "Incident Response", "Agile"] },
];

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  focus?: string;
  details?: { title: string; description: string }[];
  architectureImage?: string;
  architectureImageAlt?: string;
  links: { github: string; live?: string; docs?: string };
}

export const projects: Project[] = [
  {
    title: "Ecommerce Platform",
    description: "An ecommerce microservices platform on Amazon EKS, provisioned with Terraform and delivered through secure CI/CD and GitOps. Built with managed AWS data services, automated scaling, and end-to-end observability.",
    focus: "DevSecOps · GitOps · Site reliability",
    architectureImage: "/images/ecommerce.png",
    architectureImageAlt: "AWS DevSecOps microservices ecommerce architecture running on Amazon EKS",
    techStack: ["EKS", "Terraform", "GitHub Actions", "Argo CD", "Kubernetes", "Docker", "Amazon ECR", "Trivy", "Helm", "GitHub OIDC", "AWS IAM", "AWS Secrets Manager", "Secrets Store CSI Driver", "EKS Pod Identity", "Karpenter", "HPA", "PodDisruptionBudgets", "Application Load Balancer", "Amazon RDS", "DynamoDB", "ElastiCache Redis", "Amazon SQS", "ADOT", "Amazon Managed Service for Prometheus", "Amazon Managed Grafana", "CloudWatch", "AWS X-Ray"],
    details: [
      {
        title: "Secure CI/CD & GitOps",
        description: "GitHub Actions builds and tests code, runs security scans, builds Docker images, scans them with Trivy, and pushes them to Amazon ECR. GitHub OIDC provides AWS authentication without long-lived access keys. Manifest updates in Git are reconciled to EKS by Argo CD.",
      },
      {
        title: "Private application networking",
        description: "The ui, catalog, cart, checkout, and orders services run in the micro-tier namespace on private EKS worker nodes. AWS Load Balancer Controller provisions an Application Load Balancer in public subnets from Kubernetes Ingress. Users reach the application through the ALB, with no direct public access to pods.",
      },
      {
        title: "AWS-managed data services",
        description: "Catalog uses RDS MySQL; cart uses DynamoDB; checkout uses ElastiCache Redis; orders uses RDS PostgreSQL and Amazon SQS.",
      },
      {
        title: "Secrets & least-privilege access",
        description: "AWS Secrets Manager holds application and database secrets, which the Secrets Store CSI Driver mounts into pods. EKS Pod Identity grants selected workloads least-privilege access to AWS services.",
      },
      {
        title: "Scaling & availability",
        description: "Karpenter provisions EC2 worker nodes for pending pods using NodePools and EC2NodeClass. Horizontal Pod Autoscaler adjusts application replicas, while PodDisruptionBudgets limit disruption during voluntary maintenance.",
      },
      {
        title: "Metrics, logs & traces",
        description: "ADOT collects Kubernetes and application telemetry, remote-writes Prometheus metrics to Amazon Managed Service for Prometheus, sends logs to CloudWatch Logs, and sends traces to AWS X-Ray. Amazon Managed Grafana queries AMP for dashboards.",
      },
      {
        title: "Experimental AIOps",
        description: "A separate experimental path uses a read-only Lambda evidence collector to query AMP and provide structured metric evidence for Bedrock-related AIOps components. This is distinct from the core application delivery and operations workflow.",
      },
    ],
    links: { github: "https://github.com/Ahmedlekan/ecommerce_store/tree/main/AWS" },
  },
  {
    title: "Job Hunt",
    description: "A React and TypeScript application with an AWS infrastructure configuration managed through Terraform.",
    focus: "Infrastructure as Code on AWS",
    techStack: ["React", "TypeScript", "Terraform", "AWS S3", "CloudFront", "Route 53", "ACM", "CodePipeline", "CodeBuild", "WAF", "CloudWatch"],
    details: [
      { title: "Application", description: "A React and TypeScript frontend with a separate live preview." },
      { title: "AWS infrastructure", description: "The infrastructure stack includes S3, CloudFront, Route 53, and ACM, managed with Terraform." },
      { title: "Delivery & operations", description: "CodePipeline and CodeBuild support delivery; WAF and CloudWatch are included for security and monitoring." },
    ],
    links: { github: "https://github.com/Ahmedlekan/Job-hunt", live: "https://job-hunt-rp1l.vercel.app/" },
    architectureImage: "/images/job-hunt-architecture.png",
    architectureImageAlt: "Job Hunt cloud architecture showing users, CDN, load balancer, application services, data layer, and CI/CD pipeline",
  },
  {
    title: "QuickBook",
    description: "A booking application with listing discovery, reservations, authentication, and an administration panel.",
    focus: "Cloud infrastructure & deployment",
    techStack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Helm", "Argo CD", "Prometheus", "Grafana", "Docker", "React", "TypeScript", "MongoDB", "Express", "Node.js"],
    details: [
      { title: "Application", description: "Users browse listings and manage bookings, while administrators manage listings and users." },
      { title: "Infrastructure & delivery", description: "The project combines a React and Node.js application with a cloud stack including Terraform, Kubernetes, Jenkins, Helm, and Argo CD." },
      { title: "Observability", description: "Prometheus and Grafana are part of the project stack. Source code is available for a closer look at the setup." },
    ],
    links: { github: "https://github.com/Ahmedlekan/bookingWebApp", live: "https://bookingwebapp-o1kc.onrender.com/" },
    architectureImage: "/images/quickbook-architecture.png",
    architectureImageAlt: "QuickBook application architecture showing users, frontend, API services, bookings, administration, database, and CI/CD pipeline",
  },
  {
    title: "Bookstore",
    description: "A book sales platform with a React interface and an Express, Node.js, and MongoDB backend.",
    focus: "Container delivery & observability",
    techStack: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Helm", "Argo CD", "Prometheus", "Grafana", "Docker", "React", "TypeScript", "MongoDB", "Express", "Node.js"],
    details: [
      { title: "Application", description: "A microservice architecture supporting the book sales experience." },
      { title: "Infrastructure & delivery", description: "The project stack includes AWS infrastructure, Terraform, Docker, Kubernetes, Jenkins, Helm, and Argo CD." },
      { title: "Observability", description: "Prometheus and Grafana are included in the monitoring stack. Explore the repository for implementation details." },
    ],
    links: { github: "https://github.com/Ahmedlekan/bookstore", live: "https://mern-bookstore-6ysr.onrender.com" },
    architectureImage: "/images/bookstore-architecture.png",
    architectureImageAlt: "Bookstore application architecture showing the frontend, API services, database, Docker environment, and CI/CD pipeline",
  },
  {
    title: "My Portfolio",
    description: "This portfolio brings together my cloud engineering experience, credentials, and projects.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: { github: "https://github.com/Ahmedlekan/portfolio-website" },
  },
  {
    title: "Ecommerce",
    description: "An online store with product discovery, authentication, cart management, and an inventory administration dashboard.",
    techStack: ["React", "TypeScript", "MongoDB", "Express", "Node.js"],
    links: { github: "https://github.com/Ahmedlekan/mern-ecommerce", live: "https://mern-ecommerce-2i1o.onrender.com/" },
  },
];
