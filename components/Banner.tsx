import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

export default function Banner() {
  return (
    <section id="home" aria-labelledby="hero-title" className="section-shell pb-16 pt-12 md:pb-20 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_220px]">
        <div>
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-textGreen" />
            Available for DevOps, SRE &amp; Platform Engineering roles
          </p>
          <h1 id="hero-title" className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            <span className="mt-3 block text-textGreen">DevOps &amp; Cloud Engineer</span>
          </h1>
          <p className="mt-6 max-w-containerxs text-lg leading-relaxed text-textDark">
            I’m Ahmed, a DevOps &amp; Cloud Engineer with 5+ years of experience designing,
            automating, and operating production infrastructure across AWS and Azure.
            I specialize in Kubernetes, Infrastructure as Code, CI/CD, GitOps, and observability,
            with a strong focus on reliability, security, scalability, and cost efficiency.
          </p>
          <div className="mt-8 flex flex-col gap-4 sml:flex-row">
            <a href="#project" className="button-primary">Explore my work <FaArrowDown aria-hidden="true" /></a>
            <a href="#contact" className="button-secondary">Contact me</a>
          </div>
          <p className="mt-6 text-sm text-textDark">AWS &amp; Azure Certified · Kubernetes · Terraform · CI/CD · Observability</p>
        </div>
        <Image
          src="/images/memoji-computer.png"
          alt=""
          width={220}
          height={220}
          priority
          sizes="(min-width: 1024px) 220px, 160px"
          className="order-first mx-auto w-40 lg:order-none lg:w-[220px]"
        />
      </div>
    </section>
  );
}
