import Image from "next/image";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-shell">
      <SectionTitle id="about-title" title="About me" />
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_240px]">
        <div className="space-y-4 text-lg leading-relaxed text-textDark">
          <p>I’m an AWS Certified DevOps Engineer with 5+ years of experience designing, automating, and supporting scalable cloud infrastructure, CI/CD pipelines, and Kubernetes platforms across enterprise and high-growth environments.</p>
          <p>My work focuses on AWS, Amazon EKS, Terraform, Docker, GitOps, DevSecOps, and observability. I build reliable systems with strong attention to security, scalability, performance, and operational efficiency. Through automation, Kubernetes orchestration, improved monitoring, and streamlined delivery workflows, I have reduced deployment and incident response times by 60%.</p>
          <p>I apply SRE practices such as SLOs, SLIs, error budgets, blameless postmortems, graceful degradation, and high-availability design. I also build observability into distributed systems using Prometheus, Grafana, ELK, Jaeger, OpenTelemetry, CloudWatch, and AWS X-Ray.</p>
          <p>I’m currently focused on DevOps, Platform Engineering, SRE, and Cloud Infrastructure opportunities.</p>
          <a href="#education" className="inline-flex min-h-11 items-center text-base font-medium text-textGreen hover:underline">View my education &amp; credentials →</a>
        </div>
        <Image src="/images/Fatiu.jpeg" alt="Ahmed, DevOps and Cloud Engineer" width={240} height={240}
          sizes="240px" className="mx-auto h-60 w-60 rounded-full border-4 border-textGreen/30 object-cover" />
      </div>
    </section>
  );
}
