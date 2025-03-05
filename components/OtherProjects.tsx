import OtherCard from "./OtherCard";
import { motion } from "framer-motion";

const OtherProjects = () => {
  return (
    <div className=" max-w-containerSmall mx-auto mt-20 md:mt-40">
      
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        <OtherCard
          title="Booking Website"
          des="The platform enables users to book services seamlessly, 
          while the users could add bookings too if they have any available. 
          Allows easy management of bookings, users, and other essential data."
          listItem={["React","Typescript","Node","Express"]}
          link="https://bookingwebapp-o1kc.onrender.com"
        />
        <OtherCard
          title="Sass Langing Page"
          des="A collaborative whiteboard tool inspired by Miro, designed for real-time 
          brainstorming and idea mapping. Built with Next.js for high-performance, 
          Tailwind CSS for responsive design, and TypeScript for enhanced code reliability."
          listItem={["Nextjs", "Tailwind CSS", "Typescript"]}
          link="https://miro-clone-mocha.vercel.app/"
        />
        <OtherCard
          title="Ai Blog Website"
          des="An intelligent, AI-powered blog platform designed to deliver dynamic 
          and personalized content. Built with Next.js for optimized performance, 
          Tailwind CSS for a sleek, responsive design, and TypeScript for robust, 
          scalable code."
          listItem={["Nextjs", "Tailwind CSS", "Typescript"]}
          link="https://blog-website-lime-rho.vercel.app/"
        />

      </div>

    </div>
  );
};

export default OtherProjects;