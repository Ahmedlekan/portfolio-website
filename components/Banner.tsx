import { FaArrowDown, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <motion.div 
      className="max-w-containerSmall mx-auto pb-16 pt-3 relative z-0"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center px-4 gap-4 ">
        {/* Avatar with animation */}
        <motion.div 
          className="size-28 md:size-36 mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src="../images/memoji-computer.png"
            alt="Ahmed's Memoji"
            className="size-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Availability badge */}
        <motion.div 
          className="bg-gray-950 border border-gray-800 
            px-4 py-1.5 inline-flex items-center gap-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className=" bg-green-500 h-2 w-2 rounded-full relative">
              <div className=" bg-green-500 absolute h-2 w-2
              rounded-full animate-ping-large"></div>
            </div>
          <span>
          Available for Cloud & DevOps roles
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-2xl md:text-4xl font-bold
              mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Building Resilient Cloud Infrastructure',
                1000,
                'Automating DevOps Pipelines',
                1000,
                'Scaling Systems with Kubernetes',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-textGreen"
            /> 
            <br />
            for Scalable, Secure Engineering Teams
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400
            mx-auto leading-relaxed max-w-containerxs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Hi! I'm <span className="text-textGreen font-medium">
              Ahmed</span>, a Cloud & DevOps Engineer passionate about 
              building automated, scalable infrastructure on&nbsp;
              <span className="text-textGreen font-medium">
                AWS</span> using modern tools like 
              Kubernetes, Terraform, Ansible, and CI/CD. Based in&nbsp;
              <span className="text-textGreen font-medium">
                Canada
              </span>, I help teams deploy faster and operate with confidence.
          </motion.p>
          
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col items-center justify-center
          gap-4 md:flex-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 border border-textGreen/30 
              bg-gray-900/50 px-8 py-4 rounded-lg text-textGreen 
              hover:bg-textGreen/10 hover:shadow-lg hover:shadow-textGreen/10 
              transition-all duration-300"
          >
            <span className="font-medium">Explore my work</span>
            <FaArrowDown className="animate-bounce" />
          </motion.button>

          <motion.a
            href="/images/resume.pdf"
            download
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }} 
            className="flex items-center gap-3 bg-textGreen 
            text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-textGreen/90
            hover:shadow-lg hover:shadow-textGreen/20 transition-all duration-300"
          >
            <FaFileDownload className="mr-2" />
            <span>Download CV</span>
          </motion.a>

        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-textGreen/10
      rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10
      rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob
      animation-delay-2000"></div>
    </motion.div>
  );
};

export default Banner;