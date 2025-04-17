"use client"
import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import OtherProjects from "@/components/OtherProjects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import RightSide from "@/components/Right";
import Education from "@/components/Education";
import {motion} from "framer-motion"


export default function Home() {

  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  
      overflow-x-hidden overflow-y-scroll scrollbar 
    scrollbar-track-textDark/20 scrollbar-thumb-textDark/60"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <RightSide />
      </motion.div>

      <div className="h-screen p-4 xl:ml-10">
          <Banner />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Experience />
          <OtherProjects />
          <Contact />
      </div>
    </main>
  )
}

