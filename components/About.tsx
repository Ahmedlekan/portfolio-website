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
                  As an experienced Web Developer with a focus on front-end development, 
                  I am passionate about crafting dynamic, user-centric web applications. 
                  With over a 2+ years of experience in Web Developement. I excel in building 
                  responsive, high-performance interfaces using cutting-edge technologies 
                  like HTML5, CSS, Tailwind, JavaScript, TypeScript, Git, GitHub, 
                  React, and Next.js. My knowledge extends to back-end development 
                  with Node.js, Express, and MongoDB, allowing me to collaborate seamlessly 
                  with cross-functional teams and deliver full-stack solutions. Additionally, 
                  i holds a strong background in project management and customer relations, 
                  ensuring successful project outcomes. 
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