// import React from 'react';
// import { motion } from 'framer-motion';
// const experiences = [
//   {
//     year: "2024 - Present",
//     role: "Full Stack Developer",
//     company: "Techinfinity",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Techinfinity",
//     description: `Designed and developed dynamic user interfaces for web applications, ensuring seamless integration of frontend components with backend APIs built using Django and MySQL.`,
//     technologies: ["HTML", "CSS", "DJANGO", "JS", "mySQL"],
//   },
// ];

// const Exp = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-10">
//       <motion.h1

//       whileInView={{opacity:1, y:0}}
//       initial={{opacity:0, y: -100}}
//       transition={{duration: 0.5 }}
      
//       className="my-10 text-center text-4xl font-bold text-purple-500">Experience</motion.h1>
//       <div className="space-y-8">
//         {experiences.map((experience, index) => (
//           <div key={index} className="flex flex-wrap lg:justify-between items-start p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//             <motion.div

//             whileInView={{opacity:1 , x:0}}
//             initial={{opacity:0 , x: -100}}
//             transition={{duration: 1 }}
            
//             className="w-full lg:w-1/4 mb-4 lg:mb-0 text-neutral-400">
//               <p className="text-lg font-medium">{experience.year}</p>
//             </motion.div>
//             <motion.div 

//             whileInView={{opacity:1, x:0 }}
//             initial={{opacity:0, x: 100 }}
//             transition={{duration: 1 }}
            
//             className="w-full lg:w-3/4">
//               <h2 className="text-2xl font-semibold text-purple-200">{experience.role}</h2>
//               <p className="text-sm text-purple-300 italic mb-2">at {experience.company}</p>
//               <p className="text-neutral-300 mb-4">{experience.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {experience.technologies.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="bg-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Exp;









// import React from "react";
// import { motion } from "framer-motion";

// import { FaBriefcase, FaCode } from "react-icons/fa"; // Icons for roles and technologies

// const experiences = [
//   {
//     year: "2024 - Present",
//     role: "Full Stack Developer",
//     company: "Techinfinity",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Techinfinity",
//     description: `Designed and developed dynamic user interfaces for web applications, ensuring seamless integration of frontend components with backend APIs built using Django and MySQL.`,
//     technologies: ["HTML", "CSS", "Django", "JavaScript", "MySQL"],
//   },
// ];

// const Exp = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-10">
//       {/* Page Heading */}
//       <motion.h1
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-10 text-center text-4xl font-bold text-purple-500"
//       >
//         <FaBriefcase className="inline mr-2 text-purple-400" />
//         Experience
//       </motion.h1>

//       {/* Experience List */}
//       <div className="space-y-10">
//         {experiences.map((experience, index) => (
//           <motion.div
//             key={index}
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="flex flex-wrap lg:justify-between items-start bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
//           >
//             {/* Year Section */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="w-full lg:w-1/4 mb-4 lg:mb-0 text-neutral-400 text-center lg:text-left"
//             >
//               <p className="text-lg font-medium">{experience.year}</p>
//             </motion.div>

//             {/* Role and Description Section */}
//             <div className="w-full lg:w-3/4">
//               <h2 className="text-2xl font-semibold text-purple-200 flex items-center gap-2">
//                 <FaBriefcase className="text-purple-400" /> {experience.role}
//               </h2>
//               <p className="text-sm text-purple-300 italic mb-3">
//                 at {experience.company}
//               </p>
//               <p className="text-neutral-300 leading-relaxed mb-4">
//                 {experience.description}
//               </p>

//               {/* Technologies Section */}
//               <div className="flex flex-wrap gap-3">
//                 {experience.technologies.map((tech, techIndex) => (
//                   <motion.span
//                     key={techIndex}
//                     whileHover={{ scale: 1.1 }}
//                     className="flex items-center gap-2 bg-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
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






import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

const experiences = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Techinfinity",
    description:
      "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
    technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Techinfinity",
    description:
      "Designed and developed dynamic user interfaces for web applications, ensuring seamless integration of frontend components with backend APIs built using Django and MySQL.",
    technologies: ["HTML", "CSS", "Django", "JavaScript", "MySQL"],
  },
];

const Exp = () => {
  return (
    <div className="relative bg-neutral-900 py-16 px-6">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-50"></div>
      
      {/* Page Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center text-5xl font-extrabold text-white"
      >
        <FaBriefcase className="inline mr-3 text-purple-400" /> Experience
      </motion.h1>

      {/* Experience List */}
      <div className="relative z-10 mt-12 space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative flex flex-wrap lg:justify-between items-start bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-purple-500"
          >
            {/* Neon Border Effect */}
            <div className="absolute inset-0 border-2 border-purple-400 opacity-10 group-hover:opacity-100 rounded-xl transition-opacity duration-500"></div>
            
            {/* Year Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full lg:w-1/4 text-purple-400 text-lg font-semibold text-center lg:text-left"
            >
              {experience.year}
            </motion.div>

            {/* Role and Description Section */}
            <div className="w-full lg:w-3/4">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <FaBriefcase className="text-purple-300" /> {experience.role}
              </h2>
              <p className="text-md text-purple-300 italic mb-3">at {experience.company}</p>
              <p className="text-neutral-300 leading-relaxed mb-4">{experience.description}</p>

              {/* Technologies Section */}
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-purple-700/90 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <FaCode className="text-sm" /> {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Exp;

