import SectionTitle from "./SectionTitle";

const About = () => {

  return (
    <section
      id="about"
      className=" max-w-containerSmall flex 
      flex-col gap-8 mx-auto mt-20"
    >
      <SectionTitle title="About Me"/>
      
        <div className="flex justify-start items-center flex-col lgl:flex-row 
        gap-16 lgl:gap-20">
            
            <div className="w-full text-base text-textDark font-medium flex 
            flex-col gap-4 max-w-containerxs"
            >
              <p className="mb-4">
              Full Stack Developer & DevOps Engineer with 5+ years of experience building and
              deploying scalable web applications and cloud-native infrastructure. Skilled in
              modern JavaScript frameworks like React and Node.js, alongside DevOps tools
              including AWS, Docker, Kubernetes, and Terraform. Experienced in implementing
              CI/CD pipelines, Infrastructure as Code (IaC), and GitOps workflows to accelerate
              delivery and improve system reliability. Passionate about building performant,
              automated solutions that bridge software development and cloud operations.
              </p>

            </div>
        
            <div className="circle">
                <div className="content"
                >
                    <img src="/images/Ahmed1.jpeg" alt="about" className="contentImg"/>
                </div>
            </div>

        </div>
    </section>
  );
};

export default About;