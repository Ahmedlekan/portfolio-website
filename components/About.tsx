import SectionTitle from "./SectionTitle";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto px-4"
    >
      <SectionTitle title="About Me" />
      
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-10">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-lg text-textDark font-medium flex flex-col gap-2">
          <p>
            I'm an AWS Certified DevOps & Cloud Engineer with 5+ years of experience designing,
            automating, and scaling secure cloud-native infrastructures.
          </p>
          <p>
            I specialize in building resilient systems with AWS, Docker, Kubernetes, Terraform, Ansible, 
            GitHub Actions, and Jenkins, driving both efficiency and reliability across enterprise
            environments.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              AWS Certified
            </span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              Cloud Automation
            </span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              DevOps
            </span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              DevSecOps
            </span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              Cloud Infrastructure
            </span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              Cloud Architect
            </span>
            <span className="bg-gray-800/50 px-4 py-2 rounded-lg text-sm text-textGreen border border-gray-700">
              CI/CD Pipelines
            </span>
          </div>
        </div>
        
        {/* Image Container */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-textGreen/30 shadow-lg shadow-textGreen/10 relative">
      <Image
        src="/images/Ahmed1.jpeg"
        alt="Ahmed - DevOps & Cloud Engineer"
        fill
        priority
        sizes="(min-width: 1024px) 18rem, 16rem"
        className="object-cover"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;