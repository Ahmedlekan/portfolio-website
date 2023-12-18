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
                    I'am a very ambitious front-developer looking for a role
                    in established company with the opportunity to work with 
                    the latest technologies on challenging and diverse projects 
                </p>
                <p>
                    I'm quitely confident, naturally curious, and perpetually 
                    working on improving my chops and design problem at a time.
                </p>
                <p>
                    I’ve always been a software developer with experience 
                    developing websites and web applications, an independent 
                    introvert, and a technophile obsessed with the latest devices.
                </p>
                <p>
                    I’m familiar with a variety of programming languages, 
                    including HTML, CSS, JavaScript, TypeScript, React, Next.js, 
                    and React NATIVE, but I’m always adding new skills to my 
                    repertoire. I’m also eager to meet other software engineers 
                    in the area, so feel free to connect!
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