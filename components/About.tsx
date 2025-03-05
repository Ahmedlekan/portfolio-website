import about from "@/public/images/Ahmed.png";
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
                <p>
                  Results-driven Full-stack Developer with 3+ years of experience
                  building high-performance, responsive web applications. Proficient
                  in modern front-end technologies, including HTML5, CSS, Tailwind,
                  JavaScript, TypeScript, React, and Next.js, with solid expertise
                  in backend development using Node.js, Express, and MongoDB.
                  Adept at delivering optimized, scalable solutions with seamless
                  front-end and back-end integration. Passionate about continuous
                  learning, cloud technologies(aws), and workflow automation. 
                  Strong problem-solving skills, collaborative mindset, and commitment
                  to delivering client-centric digital experiences. 
                </p>

                <p>
                  Frontend Technologies: <br />
                  HTML5, CSS, Tailwind CSS, JavaScript, TypeScript,
                  React, Next.js, Responsive Design, Redux, Zustand, Axios
                  React Query, Performance Optimization, Debugging
                </p>
                
                <p>
                  Backend & Database: <br />
                  Node.js, Express, MongoDB, APIs & Integration
                </p>
                
                <p>
                  Other Skills: <br />
                  Git, GitHub, AWS CI/CD, Docker, Terraform, AWS Cloud Architecture,Linux, Bash Scripting,
                  Version Control, Cloud Deployment, Project Management, Client Relations, Workflow Automation
                </p>

            </div>
        
            <div className="circle">
                <div className="content"
                >
                    <Image src={about} alt="about" className="contentImg"/>
                </div>
            </div>

        </div>
    </section>
  );
};

export default About;