// import React from "react";
// import { motion } from "framer-motion";
// import { resumeData } from "../constants";
// import logo from "../assets/logo.png";
// import image from "../assets/resume-img.jpg"


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
//     <div  id="resume" className="min-h-screen flex justify-center items-center px-4">
//       <div className="max-w-4xl w-full shadow-lg rounded-lg overflow-hidden p-6">
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
//                 className="Resume-img    rounded-full w-full h-full object-cover shadow-lg"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//             <div className="mt-4">
//               <h1 className="text-3xl font-bold text-white">
//                 {personalInfo.name}
//               </h1>
//               <p className="text-lg text-gray-500">{personalInfo.title}</p>
//             </div>
//           </motion.div>
//         </header>

//         {/* Contact Section */}
//         <motion.section
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
//             Contact Information
//           </h2>
//           <ul className="space-y-2">
//             <li>
//               <strong>Phone:</strong> {personalInfo.phone}
//             </li>
//             <li>
//               <strong>Email:</strong> {personalInfo.email}
//             </li>
//             <li>
//               <strong>LinkedIn:</strong>{" "}
//               <a
//                 href={personalInfo.linkedin}
//                 className="text-blue-500 underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {personalInfo.linkedin}
//               </a>
//             </li>
//             <li>
//               <strong>GitHub:</strong>{" "}
//               <a
//                 href={personalInfo.github}
//                 className="text-blue-500 underline"
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
//           className="mt-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
//             Education
//           </h2>
//           <div className="space-y-4">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <h3 className="font-bold">{edu.degree}</h3>
//                 <p>
//                   {edu.institution} - {edu.year}
//                 </p>
//                 <p>Percentage: {edu.percentage}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Skills Section */}
//         <motion.section
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
//             Skills
//           </h2>
//             {skills.map((skill, index) => (
//               <motion
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: 50 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <p>Frontend : {skill.Frontend}</p>
//                 <p>Backend  : {skill.Backend}</p>
//               </motion>
//             ))}
          
//         </motion.section>

//         {/* Experience Section */}
//         <motion.section
//           whileInView={{ opacity: 1, y: 0 }}
//           initial={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
//             Experience
//           </h2>
//           <div className="space-y-4">
//             {experience.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <h3 className="font-bold">{exp.role}</h3>
//                 <p>{exp.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Certifications Section */}
//         <motion.section
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}
//           className="mt-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-400 border-b-2 border-gray-200 mb-4">
//             Certifications
//           </h2>
//           <ul className="list-disc pl-6 space-y-2">
//             {certifications.map((cert, index) => (
//               <motion.li
//                 key={index}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 initial={{ opacity: 0, x: -100 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 {cert}
//               </motion.li>
//             ))}
//           </ul>
//         </motion.section>

//         {/* Footer Section */}
//         <footer className="mt-6 text-center text-gray-500">
//           <p>© 2024 {personalInfo.name} | All Rights Reserved</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Resume;












import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode,
  FaBriefcase, FaGraduationCap, FaCertificate
} from "react-icons/fa";
import profileImage from '../assets/resume-img.jpg';
import resumeData from "../constants/resumeData.js";

const Resume = () => {
  const {
    personalInfo,
    education,
    skills,
    experience,
    certifications
  } = resumeData;

  const {
    name,
    title,
    email,
    phone,
    location,
    linkedIn,
    github,
    photo
  } = personalInfo;

  return (
    <div id="resume" className="py-12 px-4 sm:px-6 lg:px-8  min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          {photo && (
            <motion.img
              src={profileImage}
              alt={name}
              className="w-32 h-32 rounded-full border-4 border-gray-600 object-cover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
          )}
          <motion.h1
            className="text-4xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {name}
          </motion.h1>
          <p className="text-gray-400 text-lg mt-2">{title}</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-10">
          {email && (
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-pink-400" />
              <a href={`mailto:${email}`} className="hover:underline text-gray-300">{email}</a>
            </div>
          )}
          {phone && (
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <a href={`tel:${phone}`} className="hover:underline text-gray-300">{phone}</a>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span className="text-gray-300">{location}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaCode className="text-pink-400" />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-pink-900/30 text-pink-300 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaGraduationCap className="text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-6 border-l-2 border-blue-400/30 last:border-0"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-blue-400 left-[-9px] top-1"></div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">{edu.year}</span>
                    <span className="text-sm bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full">{edu.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaBriefcase className="text-green-400" />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-6 border-l-2 border-green-400/30 last:border-0"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-green-400 left-[-9px] top-1"></div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-gray-400">{exp.description}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm bg-green-900/30 text-green-400 px-3 py-1 rounded-full">{exp.duration}</span>
                    <span className="text-sm bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full">{exp.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaCertificate className="text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <ul className="space-y-4 list-disc list-inside text-gray-300">
              {certifications.map((cert, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;


























