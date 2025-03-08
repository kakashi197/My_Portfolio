import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../constants";
import logo from "../assets/logo.png";
import image from "../assets/resume-img.jpg"


const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});



const Resume = () => {
  const { personalInfo, education, skills, experience, certifications } =
    resumeData;

  return (
    <div  id="resume" className="min-h-screen flex justify-center items-center px-4">
      <div className="max-w-4xl w-full shadow-lg rounded-lg overflow-hidden p-6">
        {/* Header Section */}
        <header className="text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 mx-auto">
              <motion.img
                src={image}
                alt={personalInfo.name}
                className="Resume-img    rounded-full w-full h-full object-cover shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-bold text-white">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-gray-500">{personalInfo.title}</p>
            </div>
          </motion.div>
        </header>

        {/* Contact Section */}
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
            Contact Information
          </h2>
          <ul className="space-y-2">
            <li>
              <strong>Phone:</strong> {personalInfo.phone}
            </li>
            <li>
              <strong>Email:</strong> {personalInfo.email}
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={personalInfo.linkedin}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.linkedin}
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href={personalInfo.github}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {personalInfo.github}
              </a>
            </li>
          </ul>
        </motion.section>

        {/* Education Section */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="font-bold">{edu.degree}</h3>
                <p>
                  {edu.institution} - {edu.year}
                </p>
                <p>Percentage: {edu.percentage}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
            Skills
          </h2>
            {skills.map((skill, index) => (
              <motion
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
              >
                <p>Frontend : {skill.Frontend}</p>
                <p>Backend  : {skill.Backend}</p>
              </motion>
            ))}
          
        </motion.section>

        {/* Experience Section */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="font-bold">{exp.role}</h3>
                <p>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
            Certifications
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.1 }}
              >
                {cert}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Footer Section */}
        <footer className="mt-6 text-center text-gray-500">
          <p>© 2024 {personalInfo.name} | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
































// import React from "react";
// import { motion } from "framer-motion";
// import { resumeData } from "../constants";
// import image from "../assets/resume-img.jpg";

// const container = (delay = 0) => ({
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: delay,
//       duration: 0.5,
//     },
//   },
// });

// const Resume = () => {
//   const { personalInfo, education, skills, experience, certifications } =
//     resumeData;

//   return (
//     <div
//       id="resume"
//       className="min-h-screen flex justify-center items-center px-4 bg-gray-900 text-gray-200"
//     >
//       <div className="max-w-4xl w-full shadow-2xl rounded-lg overflow-hidden p-6 bg-gray-800">
//         {/* Header Section */}
//         <header className="text-center">
//           <motion.div
//             whileInView={{ opacity: 1, y: 0 }}
//             initial={{ opacity: 0, y: -100 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="w-32 h-32 mx-auto">
//               <motion.img
//                 src={image}
//                 alt={personalInfo.name}
//                 className="rounded-full w-full h-full object-cover shadow-md border-4 border-gray-600"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//             <div className="mt-4">
//               <h1 className="text-4xl font-bold text-white">
//                 {personalInfo.name}
//               </h1>
//               <p className="text-lg text-gray-400 italic">{personalInfo.title}</p>
//             </div>
//           </motion.div>
//         </header>

//         {/* Contact Section */}
//         <motion.section
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-8"
//         >
//           <h2 className="text-2xl font-semibold text-gray-300 border-b-2 border-gray-600 pb-2 mb-4">
//             Contact Information
//           </h2>
//           <ul className="space-y-2">
//             <li>
//               <strong className="text-gray-400">Phone:</strong> {personalInfo.phone}
//             </li>
//             <li>
//               <strong className="text-gray-400">Email:</strong> {personalInfo.email}
//             </li>
//             <li>
//               <strong className="text-gray-400">LinkedIn:</strong>{" "}
//               <a
//                 href={personalInfo.linkedin}
//                 className="text-blue-400 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {personalInfo.linkedin}
//               </a>
//             </li>
//             <li>
//               <strong className="text-gray-400">GitHub:</strong>{" "}
//               <a
//                 href={personalInfo.github}
//                 className="text-blue-400 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {personalInfo.github}
//               </a>
//             </li>
//           </ul>
//         </motion.section>

//         {/* Education Section */}
//         <motion.section
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: 100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-8"
//         >
//           <h2 className="text-2xl font-semibold text-gray-300 border-b-2 border-gray-600 pb-2 mb-4">
//             Education
//           </h2>
//           <div className="space-y-6">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-gray-700 p-4 rounded-lg shadow-lg"
//               >
//                 <h3 className="font-bold text-lg text-gray-100">{edu.degree}</h3>
//                 <p className="text-gray-400">
//                   {edu.institution} - {edu.year}
//                 </p>
//                 <p className="text-gray-400">Percentage: {edu.percentage}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Skills Section */}
//         <motion.section
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-8"
//         >
//           <h2 className="text-2xl font-semibold text-gray-300 border-b-2 border-gray-600 pb-2 mb-4">
//             Skills
//           </h2>
//           <div className="grid grid-cols-2 gap-6">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: 50 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-gray-700 p-4 rounded-lg shadow-lg"
//               >
//                 <p><strong>Frontend:</strong> {skill.Frontend}</p>
//                 <p><strong>Backend:</strong> {skill.Backend}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Experience Section */}
//         <motion.section
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-8"
//         >
//           <h2 className="text-2xl font-semibold text-gray-300 border-b-2 border-gray-600 pb-2 mb-4">
//             Experience
//           </h2>
//           <div className="space-y-6">
//             {experience.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-gray-700 p-4 rounded-lg shadow-lg"
//               >
//                 <h3 className="font-bold text-lg text-gray-100">{exp.role}</h3>
//                 <p className="text-gray-400">{exp.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Certifications Section */}
//         <motion.section
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-8"
//         >
//           <h2 className="text-2xl font-semibold text-gray-300 border-b-2 border-gray-600 pb-2 mb-4">
//             Certifications
//           </h2>
//           <ul className="list-disc pl-6 space-y-2">
//             {certifications.map((cert, index) => (
//               <motion.li
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-gray-400"
//               >
//                 {cert}
//               </motion.li>
//             ))}
//           </ul>
//         </motion.section>

//         {/* Footer Section */}
//         <footer className="mt-8 text-center text-gray-500">
//           <p>© 2024 {personalInfo.name} | All Rights Reserved</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Resume;
