import about from "@/public/images/Ahmed.jpeg";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const About = () => {

  return (
    <section
      id="about"
      className="max-w-contentContainer py-10 lgl:py-12 flex 
      flex-col gap-8 mx-auto mdl:px-10 xl:px-7"
    >
      <SectionTitle title="About Me"/>
      
        <div className="flex justify-start items-center flex-col lgl:flex-row 
        gap-16 lgl:gap-20">
            
            <div className="w-full text-base text-textDark font-medium flex 
            flex-col gap-4 max-w-containerxs"
            >
                <p>
                    Ahmed Lekan is a Web Developer with a specialization in front-end development. 
                    Possesses extensive experience across all stages of the development cycle for 
                    dynamic web and web development and user interface design. Technical proficiency 
                    includes a wide range of programming languages and frameworks, such as HTML5, 
                    CSS, Tailwind, JavaScript, TypeScript, Git, GitHub, React, and Next.js. He 
                    has knowledge in Node.js, Express and MongoDb which facilitates seamless 
                    collaboration with backend developers. Additionally, he holds a 
                    strong background in project management and customer relations, 
                    ensuring successful project outcomes and client satisfaction. 
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