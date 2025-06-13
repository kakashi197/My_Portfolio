






// import React from "react";
// import { motion } from "framer-motion";
// import { FaBriefcase, FaCode } from "react-icons/fa";

// const experiences = [
//   {
//     year: "2024 - Present",
//     role: "Full Stack Developer",
//     company: "Techinfinity",
//     description:
//       "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
//     technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Techinfinity",
//     description:
//       "Designed and developed dynamic user interfaces for web applications, ensuring seamless integration of frontend components with backend APIs built using Django and MySQL.",
//     technologies: ["HTML", "CSS", "Django", "JavaScript", "MySQL"],
//   },
// ];

// const Exp = () => {
//   return (
//     <div className="relative  py-16 px-6">
//       {/* Glowing Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r  blur-3xl opacity-50"></div>
      
//       {/* Page Heading */}
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 text-center text-5xl font-extrabold text-white"
//       >
//         <FaBriefcase className="inline mr-3 text-purple-400" /> Experience
//       </motion.h1>

//       {/* Experience List */}
//       <div className="relative z-10 mt-12 space-y-12">
//         {experiences.map((experience, index) => (
//           <motion.div
//             key={index}
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="group relative flex flex-wrap lg:justify-between items-start bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-purple-500"
//           >
//             {/* Neon Border Effect */}
//             <div className="absolute inset-0 border-2 border-purple-400 opacity-10 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
            
//             {/* Year Section */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="w-full lg:w-1/4 text-purple-400 text-lg font-semibold text-center lg:text-left"
//             >
//               {experience.year}
//             </motion.div>

//             {/* Role and Description Section */}
//             <div className="w-full lg:w-3/4">
//               <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
//                 <FaBriefcase className="text-purple-300" /> {experience.role}
//               </h2>
//               <p className="text-md text-purple-300 italic mb-3">at {experience.company}</p>
//               <p className="text-neutral-300 leading-relaxed mb-4">{experience.description}</p>

//               {/* Technologies Section */}
//               <div className="flex flex-wrap gap-3">
//                 {experience.technologies.map((tech, techIndex) => (
//                   <motion.span
//                     key={techIndex}
//                     whileHover={{ scale: 1.1 }}
//                     className="flex items-center gap-2 bg-purple-700/90 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
//                   >
//                     <FaCode className="text-sm" /> {tech}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Exp;







//  THIS IS THE BEST  ANIMATION PAGE 



import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import Tilt from "react-parallax-tilt"; // optional

import { experiences } from "../constants"; // Assuming you have

const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "react.js":
      return <FaReact />;
    case "node.js":
      return <FaNodeJs />;
    case "mongodb":
    case "mysql":
      return <FaDatabase />;
    default:
      return <FaCode />;
  }
};

const Exp = () => {
  return (
    <section className="relative py-16 px-6 md:px-20 bg-gradient-to-b  text-white overflow-hidden">
      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-transparent blur-3xl z-0" />

      {/* Section Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center z-10 relative text-white mb-16"
      >
        <FaBriefcase className="inline mr-3 text-purple-400" />
        Experience
      </motion.h1>

      {/* Experience Grid */}
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {experiences.map((exp, index) => (
          <Tilt key={index} glareEnable={true} glareColor="lightblue" glareMaxOpacity={0.3}>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white/5 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500 rounded-2xl p-6 shadow-xl transition-all duration-500"
            >
              <div className="text-sm text-purple-400 mb-2">{exp.year}</div>
              <h2 className="text-xl font-semibold mb-1 flex items-center gap-2 text-purple-200">
                <FaBriefcase className="text-purple-400" />
                {exp.role}
              </h2>
              <p className="text-sm italic text-purple-300 mb-4">at {exp.company}</p>
              <p className="text-neutral-300 mb-4">{exp.description}</p>

              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm text-white bg-purple-700/80 px-3 py-1 rounded-full hover:scale-105 transition transform shadow-md hover:shadow-purple-500"
                  >
                    {getTechIcon(tech)} {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Exp;
