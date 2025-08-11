




import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"; // Added more icons
import { SiTailwindcss, SiExpress, SiNextdotjs } from "react-icons/si"; // Added more specific tech icons
import Tilt from "react-parallax-tilt";

import { experiences } from "../constants"; // Assuming your experiences data is here

// Function to get appropriate tech icons
const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "react.js":
      return <FaReact className="text-blue-400" />;
    case "node.js":
      return <FaNodeJs className="text-green-500" />;
    case "mongodb":
      return <FaDatabase className="text-green-600" />;
    case "mysql":
      return <FaDatabase className="text-blue-500" />;
    case "javascript":
      return <FaJs className="text-yellow-400" />;
    case "html":
      return <FaHtml5 className="text-orange-500" />;
    case "css":
      return <FaCss3Alt className="text-blue-600" />;
    case "tailwind css":
      return <SiTailwindcss className="text-cyan-400" />;
    case "express.js":
      return <SiExpress className="text-gray-400" />;
    case "git":
      return <FaGitAlt className="text-orange-600" />;
    case "next.js":
      return <SiNextdotjs className="text-white" />;
    default:
      return <FaCode className="text-gray-400" />;
  }
};

const Exp = () => {
  // Animation variants for Framer Motion
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-8 lg:px-16    overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Dynamic, more intense Glowing Gradient Background with multiple points */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Section Heading */}
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center relative z-10 mb-16
                   bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400
                   drop-shadow-lg leading-tight"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FaBriefcase className="inline-block align-middle mr-4 text-purple-300 text-5xl md:text-6xl" />
        My Journey &amp; Experience
      </motion.h1>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 w-full max-w-7xl">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={1000}
              scale={1.03}
              transitionSpeed={500}
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#ffffff"
              glarePosition="all"
              className="h-full" // Ensure Tilt takes full height for consistent card height
            >
              <div className="group bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl
                          hover:shadow-purple-500/40 transition-all duration-500 transform hover:-translate-y-2
                          flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-purple-200 group-hover:text-purple-100 transition-colors duration-300">
                    {exp.role}
                  </h2>
                  <div className="text-lg font-semibold text-purple-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-500/50">
                    {exp.year}
                  </div>
                </div>
                <p className="text-xl italic text-purple-300 mb-6 border-b border-purple-500/30 pb-4">
                  at <span className="font-semibold">{exp.company}</span>
                </p>
                <p className="text-neutral-200 mb-6 flex-grow leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-auto"> {/* Push technologies to the bottom */}
                  <h3 className="text-lg font-semibold text-gray-300 mb-3">Key Technologies:</h3>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 text-sm text-white bg-purple-800/70 px-4 py-2 rounded-full
                                   shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105
                                   border border-purple-600/50"
                      >
                        {getTechIcon(tech)} {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exp;





//  THIS IS THE BEST  ANIMATION PAGE 






// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
// import Tilt from "react-parallax-tilt"; // optional

// import { experiences } from "../constants"; // Assuming you have

// const getTechIcon = (tech) => {
//   switch (tech.toLowerCase()) {
//     case "react.js":
//       return <FaReact />;
//     case "node.js":
//       return <FaNodeJs />;
//     case "mongodb":
//     case "mysql":
//       return <FaDatabase />;
//     default:
//       return <FaCode />;
//   }
// };

// const Exp = () => {
//   return (
//     <section className="relative py-16 px-6 md:px-20 bg-gradient-to-b  text-white overflow-hidden">
//       {/* Glowing Gradient Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent blur-3xl z-0" />

//       {/* Section Heading */}
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -40 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl md:text-5xl font-bold text-center z-10 relative text-white mb-16"
//       >
//         <FaBriefcase className="inline mr-3 text-purple-400" />
//         Experience
//       </motion.h1>

//       {/* Experience Grid */}
//       <div className="grid md:grid-cols-2 gap-10 relative z-10">
//         {experiences.map((exp, index) => (
//           <Tilt key={index} glareEnable={true} glareColor="lightblue" glareMaxOpacity={0.3}>
//             <motion.div
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 60 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500 rounded-2xl p-6 shadow-xl transition-all duration-500"
//             >
//               <div className="text-sm text-purple-400 mb-2">{exp.year}</div>
//               <h2 className="text-xl font-semibold mb-1 flex items-center gap-2 text-purple-200">
//                 <FaBriefcase className="text-purple-400" />
//                 {exp.role}
//               </h2>
//               <p className="text-sm italic text-purple-300 mb-4">at {exp.company}</p>
//               <p className="text-neutral-300 mb-4">{exp.description}</p>

//               <div className="flex flex-wrap gap-3">
//                 {exp.technologies.map((tech, i) => (
//                   <span
//                     key={i}
//                     className="flex items-center gap-2 text-sm text-white bg-purple-700/80 px-3 py-1 rounded-full hover:scale-105 transition transform shadow-md hover:shadow-purple-500"
//                   >
//                     {getTechIcon(tech)} {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </Tilt>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Exp;
