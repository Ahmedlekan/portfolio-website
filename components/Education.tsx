import { FaGraduationCap, FaAws, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="max-w-containerSmall mx-auto py-20 px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Education Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaGraduationCap className="text-textGreen" />
            Education
          </h2>
          
          <div className=" space-y-4">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 
              hover:border-textGreen/30 transition-colors">
              <h3 className="text-xl font-semibold text-white">
                  Higher National Diploma in Electrical Engineering
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1
                  text-sm text-textGreen mt-1 mb-4">
                <span>Yaba College of Technology</span>
                <span className="hidden sm:inline">•</span>
                <span>Lagos, Nigeria</span>
              </div>
              <p className="text-gray-400">
                  Successfully completed the accredited program.
              </p>
            </div>
          
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 
              hover:border-textGreen/30 transition-colors">
              <h3 className="text-xl font-semibold text-white">
                  National Diploma in Electrical Engineering
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1
              text-sm text-textGreen mt-1 mb-4">
                <span>The Polytechnic Ibadan</span>
                <span className="hidden sm:inline">•</span>
                <span>Ibadan, Nigeria</span>
              </div>
              <p className="text-gray-400">
                Successfully completed the accredited program.
              </p>
            </div>
          </div>
          
        </motion.div>

        {/* Certifications Column */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaCertificate className="text-textGreen" />
            Certifications
          </h2>
          
          <div className="space-y-4">
            {/* AWS Certification (In Progress) */}
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 
                hover:border-textGreen/30 transition-colors group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 
                    group-hover:border-textGreen/50">
                  <FaAws className="text-orange-400" size={25} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AWS Solutions Architect - Associate</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 
                hover:border-textGreen/30 transition-colors group">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 
                  group-hover:border-textGreen/50">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/udemy-2.svg"
                    alt="Udemy"
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    DevOps Engineering: - Advanced
                  </h3>
                  <p className="text-sm text-textGreen">Udemy</p>
                </div>
              </div>
            </div>

            {/* Other Certifications */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl
                p-6 hover:border-textGreen/30 transition-colors">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-textGreen mt-1.5">▹</span>
                  <div>
                    <h4 className="font-medium text-white">
                        Front-End Developer Career Path
                    </h4>
                    <p className="text-sm text-textGreen">Scrimba</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-textGreen mt-1.5">▹</span>
                  <div>
                    <h4 className="font-medium text-white">
                        Data Manipulation in JavaScript
                    </h4>
                    <p className="text-sm text-textGreen">
                        University of California, Davis (Coursera)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;