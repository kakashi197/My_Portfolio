



























import React from 'react';
import { motion } from "framer-motion";

import aboutImage from "../assets/image-2.jpg";
import { FaPython, FaReact, FaNodeJs, FaCameraRetro } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-8">
            {/* Title Section */}
            <h1 className="my-20 text-center text-4xl font-bold">
                About <span className="text-neutral-500">Me</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                {/* Image Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8 flex justify-center"
                >
                    <div className="relative group">
                        <img
                            src={aboutImage}
                            alt="About me"
                            className="h-[25vh] md:h-[35vh] lg:h-[40vh] rounded-2xl shadow-lg transition-transform duration-300 transform group-hover:scale-105"
                        />
                        {/* Overlay with text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 rounded-2xl flex items-center justify-center transition-opacity duration-300">
                            <p className="text-white text-lg font-medium">
                                Hi, I’m Krish Solanki
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Description Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="mb-6 max-w-xl py-6 px-6 bg-gradient-to-r  text-white shadow-lg rounded-lg text-justify leading-relaxed md:text-lg sm:text-base hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        I’m Krish, a Software Developer specializing in Django, React, Node.js, and Next.js. I build scalable, high-performance applications and deploy them on Heroku and other platforms.

During my internship at TechInfinity, I developed a feature-rich eCommerce platform, enhancing my full-stack expertise. I have a strong passion for UI/UX design, ensuring responsive and visually appealing web applications.

I integrate AI-driven solutions to optimize development time, streamline workflows, and enhance user experience. My focus is on efficiency, innovation, and cutting-edge web technologies to deliver modern and impactful digital solutions.
                        </p>
                        {/* Skill Icons Section */}
                        <div className="flex gap-4 mt-4">
                            <div className="flex flex-col items-center">
                                <FaPython className="text-3xl text-blue-400 hover:text-blue-300 transition-transform transform hover:scale-110" />
                                <p className="text-sm text-neutral-400 mt-2">Python</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaReact className="text-3xl text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110" />
                                <p className="text-sm text-neutral-400 mt-2">React</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaNodeJs className="text-3xl text-green-500 hover:text-green-400 transition-transform transform hover:scale-110" />
                                <p className="text-sm text-neutral-400 mt-2">Node.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaCameraRetro className="text-3xl text-yellow-500 hover:text-yellow-400 transition-transform transform hover:scale-110" />
                                <p className="text-sm text-neutral-400 mt-2">Photography</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

















// Final stage 





// import React from 'react';
// import { motion } from "framer-motion";
// import aboutImage from "../assets/image-2.jpg";
// import { 
//   FaPython, 
//   FaReact, 
//   FaNodeJs, 
//   FaCameraRetro,
//   FaDatabase,
//   FaCode,
//   FaServer,
//   FaMobileAlt
// } from "react-icons/fa";
// import { SiDjango, SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

// const About = () => {
//   const skills = [
//     { icon: <FaPython className="text-4xl"/>, name: "Python", color: "text-blue-400" },
//     { icon: <SiDjango className="text-4xl"/>, name: "Django", color: "text-green-500" },
//     { icon: <FaReact className="text-4xl"/>, name: "React", color: "text-cyan-400" },
//     { icon: <SiNextdotjs className="text-4xl"/>, name: "Next.js", color: "text-white" },
//     { icon: <FaNodeJs className="text-4xl"/>, name: "Node.js", color: "text-green-400" },
//     { icon: <FaDatabase className="text-4xl"/>, name: "MongoDB", color: "text-green-300" },
//     { icon: <SiTailwindcss className="text-4xl"/>, name: "Tailwind", color: "text-cyan-300" },
//     { icon: <SiFigma className="text-4xl"/>, name: "Figma", color: "text-purple-400" },
//     { icon: <FaServer className="text-4xl"/>, name: "REST APIs", color: "text-red-400" },
//     { icon: <FaMobileAlt className="text-4xl"/>, name: "Responsive", color: "text-blue-300" },
//     { icon: <FaCode className="text-4xl"/>, name: "Clean Code", color: "text-yellow-400" },
//     { icon: <FaCameraRetro className="text-4xl"/>, name: "Photography", color: "text-pink-400" },
//   ];

//   return (
//     <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-b ">


//       {/* Decorative Elements */}
      
//       {/* <div className="absolute top-0 left-0 w-full h-full opacity-20">
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       </div> */}
      
//       {/* Floating Blobs */}
//       <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute top-1/2 -right-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
//       <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Animated Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//             About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
//           {/* Image Section - Enhanced with Glassmorphism */}
//           <motion.div
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2 flex justify-center"
//           >
//             <div className="relative group perspective-1000">
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
//               <div className="relative bg-neutral-800 rounded-3xl p-1 h-full w-full transform transition-all duration-300 group-hover:rotate-y-6">
//                 <img
//                   src={aboutImage}
//                   alt="Krish Solanki"
//                   className="w-full h-auto max-h-[500px] object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Floating Info Card */}
//                 <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-cyan-600 to-purple-600 p-4 rounded-xl shadow-2xl transform transition-all duration-300 group-hover:-translate-y-2">
//                   <div className="bg-black/80 p-3 rounded-lg backdrop-blur-sm">
//                     <p className="text-white font-medium text-sm md:text-base">👋 Hi, I'm Krish</p>
//                     <p className="text-cyan-200 text-xs md:text-sm">Full Stack Developer</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Content Section - Enhanced with Glassmorphism */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-1/2"
//           >
//             <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
//                 Who <span className="text-cyan-400">Am I?</span>
//               </h3>
              
//               <div className="space-y-6">
//                 <p className="text-neutral-300 leading-relaxed text-justify">
//                   I'm <span className="font-semibold text-cyan-400">Krish Solanki</span>, a passionate Full Stack Developer specializing in modern web technologies. With expertise in <span className="text-purple-400">Django, React, Node.js, and Next.js</span>, I craft high-performance, scalable applications that deliver exceptional user experiences.
//                 </p>
                
//                 <p className="text-neutral-300 leading-relaxed text-justify">
//                   During my internship at <span className="font-semibold text-amber-400">TechInfinity</span>, I developed a feature-rich eCommerce platform that increased client revenue by 35%. My solutions integrate <span className="text-green-400">AI-driven optimizations</span> to streamline development and enhance functionality.
//                 </p>
                
//                 <p className="text-neutral-300 leading-relaxed text-justify">
//                   Beyond coding, I'm a <span className="text-pink-400">UI/UX enthusiast</span> and photographer, bringing a unique blend of technical precision and creative vision to every project. My mission is to build digital experiences that are as beautiful as they are functional.
//                 </p>
//               </div>

//               {/* Skills Grid - Enhanced */}
//               <div className="mt-12">
//                 <h4 className="text-xl font-semibold text-white mb-6 text-center">
//                   My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Tech Stack</span>
//                 </h4>
//                 <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
//                   {skills.map((skill, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ y: -5 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="flex flex-col items-center p-3 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-all duration-200 cursor-default"
//                     >
//                       <div className={`${skill.color} mb-2 hover:scale-110 transition-transform`}>
//                         {skill.icon}
//                       </div>
//                       <span className="text-xs sm:text-sm text-neutral-300 text-center">{skill.name}</span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* CSS for blob animation */}
//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default About;