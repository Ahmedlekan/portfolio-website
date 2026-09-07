import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import RightSide from "@/components/Right";

export default function Home() {
  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <Banner />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-gray-800 px-6 py-8">
        <div className="mx-auto flex max-w-containerSmall flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-sm text-textDark">Ahmed · DevOps &amp; Cloud Engineer · Canada</p>
          <RightSide />
          <a href="#home" className="text-sm text-textGreen hover:underline">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
