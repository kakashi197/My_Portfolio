




// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaCode, FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"; // Added more icons
// import { SiTailwindcss, SiExpress, SiNextdotjs } from "react-icons/si"; // Added more specific tech icons
// import Tilt from "react-parallax-tilt";

// import { experiences } from "../constants"; // Assuming your experiences data is here

// // Function to get appropriate tech icons
// const getTechIcon = (tech) => {
//   switch (tech.toLowerCase()) {
//     case "react.js":
//       return <FaReact className="text-blue-400" />;
//     case "node.js":
//       return <FaNodeJs className="text-green-500" />;
//     case "mongodb":
//       return <FaDatabase className="text-green-600" />;
//     case "mysql":
//       return <FaDatabase className="text-blue-500" />;
//     case "javascript":
//       return <FaJs className="text-yellow-400" />;
//     case "html":
//       return <FaHtml5 className="text-orange-500" />;
//     case "css":
//       return <FaCss3Alt className="text-blue-600" />;
//     case "tailwind css":
//       return <SiTailwindcss className="text-cyan-400" />;
//     case "express.js":
//       return <SiExpress className="text-gray-400" />;
//     case "git":
//       return <FaGitAlt className="text-orange-600" />;
//     case "next.js":
//       return <SiNextdotjs className="text-white" />;
//     default:
//       return <FaCode className="text-gray-400" />;
//   }
// };

// const Exp = () => {
//   // Animation variants for Framer Motion
//   const fadeInAnimationVariants = {
//     initial: {
//       opacity: 0,
//       y: 100,
//     },
//     animate: (index) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.05 * index,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <section id="experience" className="relative py-20 px-4 sm:px-8 lg:px-16    overflow-hidden min-h-screen flex flex-col items-center justify-center">
//       {/* Dynamic, more intense Glowing Gradient Background with multiple points */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
//         <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
//         <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
//       </div>

//       {/* Section Heading */}
//       <motion.h1
//         className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center relative z-10 mb-16
//                    bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400
//                    drop-shadow-lg leading-tight"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         <FaBriefcase className="inline-block align-middle mr-4 text-purple-300 text-5xl md:text-6xl" />
//         My Journey &amp; Experience
//       </motion.h1>

//       {/* Experience Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 w-full max-w-7xl">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             custom={index}
//           >
//             <Tilt
//               tiltMaxAngleX={5}
//               tiltMaxAngleY={5}
//               perspective={1000}
//               scale={1.03}
//               transitionSpeed={500}
//               glareEnable={true}
//               glareMaxOpacity={0.4}
//               glareColor="#ffffff"
//               glarePosition="all"
//               className="h-full" // Ensure Tilt takes full height for consistent card height
//             >
//               <div className="group bg-white/10 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl
//                           hover:shadow-purple-500/40 transition-all duration-500 transform hover:-translate-y-2
//                           flex flex-col h-full">
//                 <div className="flex justify-between items-start mb-4">
//                   <h2 className="text-3xl font-bold text-purple-200 group-hover:text-purple-100 transition-colors duration-300">
//                     {exp.role}
//                   </h2>
//                   <div className="text-lg font-semibold text-purple-400 bg-purple-900/40 px-3 py-1 rounded-full border border-purple-500/50">
//                     {exp.year}
//                   </div>
//                 </div>
//                 <p className="text-xl italic text-purple-300 mb-6 border-b border-purple-500/30 pb-4">
//                   at <span className="font-semibold">{exp.company}</span>
//                 </p>
//                 <p className="text-neutral-200 mb-6 flex-grow leading-relaxed">
//                   {exp.description}
//                 </p>

//                 <div className="mt-auto"> {/* Push technologies to the bottom */}
//                   <h3 className="text-lg font-semibold text-gray-300 mb-3">Key Technologies:</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {exp.technologies.map((tech, i) => (
//                       <span
//                         key={i}
//                         className="flex items-center gap-2 text-sm text-white bg-purple-800/70 px-4 py-2 rounded-full
//                                    shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105
//                                    border border-purple-600/50"
//                       >
//                         {getTechIcon(tech)} {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Tilt>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Exp;





//  THIS IS THE BEST  ANIMATION PAGE 




import React from "react";
import { motion } from "framer-motion";
import { 
  FaBriefcase, 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaRocket,
  FaStar
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiNextdotjs, 
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiOracle,
  SiPostgresql
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

import { experiences } from "../constants";

// Enhanced icon mapping with more technologies
const getTechIcon = (tech) => {
  const iconMap = {
    "react.js": <FaReact className="text-blue-400 group-hover:animate-spin-slow" />,
    "react": <FaReact className="text-blue-400 group-hover:animate-spin-slow" />,
    "node.js": <FaNodeJs className="text-green-500" />,
    "node": <FaNodeJs className="text-green-500" />,
    "mongodb": <FaDatabase className="text-green-600" />,
    "mysql": <FaDatabase className="text-blue-500" />,
    "javascript": <FaJs className="text-yellow-400" />,
    "html": <FaHtml5 className="text-orange-500" />,
    "css": <FaCss3Alt className="text-blue-600" />,
    "tailwind css": <SiTailwindcss className="text-cyan-400" />,
    "tailwind": <SiTailwindcss className="text-cyan-400" />,
    "express.js": <SiExpress className="text-gray-400" />,
    "express": <SiExpress className="text-gray-400" />,
    "git": <FaGitAlt className="text-orange-600" />,
    "next.js": <SiNextdotjs className="text-white" />,
    "next": <SiNextdotjs className="text-white" />,
    "typescript": <SiTypescript className="text-blue-600" />,
    "redux": <SiRedux className="text-purple-500" />,
    "firebase": <SiFirebase className="text-yellow-500" />,
    "oracle": <SiOracle className="text-red-500" />,
    "postgresql": <SiPostgresql className="text-blue-400" />,
    "postgres": <SiPostgresql className="text-blue-400" />
  };
  
  const normalizedTech = tech.toLowerCase();
  return iconMap[normalizedTech] || <FaCode className="text-gray-400" />;
};

const Exp = () => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  };

  return (
    <section 
      id="experience" 
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast animation-delay-4000" />
        
        {/* Grid pattern overlay - Fixed SVG string */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Section Heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 mb-12 sm:mb-16 lg:mb-20 text-center"
      >
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400">
              My Journey
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          className="flex items-center justify-center mt-4 space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FaBriefcase className="text-purple-400 text-2xl sm:text-3xl animate-bounce" />
          <span className="text-gray-300 text-lg sm:text-xl font-light">Professional Experience</span>
          <FaRocket className="text-pink-400 text-2xl sm:text-3xl animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Experience Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 relative z-10 w-full max-w-7xl"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="h-full"
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.02}
              transitionSpeed={800}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              className="h-full"
            >
              <div className="group relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden">
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10 transition-all duration-700" />
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-sm" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header section */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                    <motion.h2 
                      className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {exp.role}
                    </motion.h2>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-purple-300 bg-purple-900/50 px-4 py-2 rounded-full border border-purple-500/50 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm font-semibold">{exp.year}</span>
                    </motion.div>
                  </div>

                  {/* Company and location */}
                  <motion.div 
                    className="flex items-center gap-3 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <FaMapMarkerAlt className="text-pink-400 text-sm" />
                    <p className="text-xl text-purple-300 font-medium">
                      at <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{exp.company}</span>
                    </p>
                  </motion.div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-base sm:text-lg">
                    {exp.description}
                  </p>

                  {/* Technologies section */}
                  <div className="mt-auto space-y-4">
                    <div className="flex items-center gap-2">
                      <FaStar className="text-yellow-400 text-sm" />
                      <h3 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        Technologies Used
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="group/tech flex items-center gap-2 text-xs sm:text-sm text-white bg-gradient-to-r from-purple-800/80 to-pink-800/80 px-3 sm:px-4 py-2 rounded-full shadow-lg hover:shadow-purple-500/30 border border-purple-500/50 backdrop-blur-sm cursor-default"
                        >
                          <span className="text-base sm:text-lg">
                            {getTechIcon(tech)}
                          </span>
                          <span>{tech}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
                  
                  {index === 0 && (
                    <motion.div 
                      className="absolute -top-2 -right-2"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaAward className="text-yellow-400 text-2xl" />
                    </motion.div>
                  )}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg
          className="relative block w-full h-[100px] sm:h-[150px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-purple-900/30"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Exp;
