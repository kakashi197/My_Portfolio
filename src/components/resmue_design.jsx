import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../constants";
import logo from "../assets/logo.png";


const Resume = () => {
  const { personalInfo, education, skills, experience, certifications } =
    resumeData;

  return (
    <div  className="min-h-screen flex justify-center items-center bg-gradient-to-br  p-8 text-white">
      <div className="max-w-4xl w-full shadow-2xl rounded-lg overflow-hidden bg-gray-800">
        {/* Header Section */}
        <header className="text-center p-8 bg-gradient-to-r from-gray-900 to-gray-700 rounded-t-lg">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 mx-auto relative">
              <motion.img
                src={logo}
                alt={personalInfo.name}
                className="rounded-full w-full h-full object-cover shadow-lg border-4 border-purple-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="mt-4">
              <h1 className="text-4xl font-extrabold">{personalInfo.name}</h1>
              <p className="text-lg text-gray-300">{personalInfo.title}</p>
            </div>
          </motion.div>
        </header>

        {/* Content Wrapper */}
        <div className="p-6 space-y-8">
          {/* Contact Section */}
          <motion.section
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="border-b border-gray-700 pb-6"
          >
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>
                📞 <strong>Phone:</strong> {personalInfo.phone}
              </li>
              <li>
                📧 <strong>Email:</strong> {personalInfo.email}
              </li>
              <li>
                🔗 <strong>LinkedIn:</strong>{" "}
                <a
                  href={personalInfo.linkedin}
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {personalInfo.linkedin}
                </a>
              </li>
              <li>
                🖥️ <strong>GitHub:</strong>{" "}
                <a
                  href={personalInfo.github}
                  className="text-blue-400 underline"
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
            className="border-b border-gray-700 pb-6"
          >
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-4 space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p>Year: {edu.year}</p>
                  <p>Percentage: {edu.percentage}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Other sections: Skills, Experience, Certifications */}
          {/* Reuse the structure above with improved icons, animations, and layout */}
        </div>

        {/* Footer Section */}
        <footer className="p-4 bg-gradient-to-r from-gray-900 to-gray-700 text-center rounded-b-lg">
          <p>© 2024 {personalInfo.name} | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;

