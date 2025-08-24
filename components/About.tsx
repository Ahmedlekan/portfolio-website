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
                I’m an AWS Certified DevOps & Cloud Engineer with 5+ years of experience designing,
                automating, and scaling secure cloud-native infrastructures. I specialize in building
                resilient systems with AWS, Docker, Kubernetes, Terraform, Ansible, GitHub Actions, and
                Jenkins, driving both efficiency and reliability across enterprise environments.
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