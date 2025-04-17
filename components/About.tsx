import about from "@/public/images/ahmed.jpeg";
import Image from "next/image";
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
                  Full-stack developer specializing in performant web
                  applications using modern JavaScript ecosystems. Combines 
                  5+ years of hands-on experience with continuous learning
                  to deliver scalable solutions that bridge technical
                  excellence with user needs.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-textGreen mt-1">▹</span>
                    <span>
                      <strong>Frontend:</strong> React/Next.js, TypeScript,
                      Tailwind CSS, State Management (Redux/Zustand)
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-textGreen mt-1">▹</span>
                    <span>
                      <strong>Backend:</strong> Node.js, Express, MongoDB, RESTful APIs
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-textGreen mt-1">▹</span>
                    <span>
                      <strong>DevOps:</strong> AWS Solution Architect, Docker,
                      CI/CD, Infrastructure as Code (Terraform)
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-textGreen mt-1">▹</span>
                    <span>
                      <strong>Methodologies:</strong> Agile Development,
                      Performance Optimization, Workflow Automation
                    </span>
                  </div>
              </div>
            </div>
        
            <div className="circle">
                <div className="content"
                >
                    <img src="../images/ahmed.jpeg" alt="about" className="contentImg"/>
                </div>
            </div>

        </div>
    </section>
  );
};

export default About;