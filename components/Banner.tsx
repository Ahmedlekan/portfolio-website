import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto mdl:px-10 xl:px-7 py-10 mdl:py-24 
      flex flex-col gap-4 lgl:gap-8"
    >
      
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=" text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ahmed Lekan.
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a web & mobile developer with a passion for everything in front end. 
        I have a strong foundation in front-end development and am skilled in
        creating user-friendly and responsive web & mobile applications using 
        React, Nextjs, React Native and its ecosystem.
        
      </motion.p>

      <Link href="#contact">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className=" py-4 px-10 font-titleFont border border-textGreen 
          rounded-md text-textGreen tracking-wide hover:bg-hoverColor 
          duration-300"
        >
          Hire Me
        </motion.button>
      </Link>

    </section>
  );
};

export default Banner;