
























import React from 'react';
import { motion } from "framer-motion";
import aboutImage from "../assets/my image.png";
import { FaPython, FaReact, FaNodeJs, FaCameraRetro, FaServer, FaDatabase, FaCode, FaMobileAlt } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const About = () => {
    const skills = [
        { icon: <FaPython className="text-4xl" />, name: "Python", color: "text-blue-400" },
        { icon: <SiDjango className="text-4xl" />, name: "Django", color: "text-green-700" },
        { icon: <FaReact className="text-4xl" />, name: "React", color: "text-blue-500" },
        { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js", color: "text-black dark:text-white" },
        { icon: <FaNodeJs className="text-4xl" />, name: "Node.js", color: "text-green-500" },
        { icon: <FaDatabase className="text-4xl" />, name: "Database", color: "text-orange-500" },
        { icon: <FaServer className="text-4xl" />, name: "Backend", color: "text-purple-500" },
        { icon: <FaMobileAlt className="text-4xl" />, name: "Responsive", color: "text-pink-500" },
        { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind", color: "text-cyan-400" },
        { icon: <FaCode className="text-4xl" />, name: "Clean Code", color: "text-yellow-500" },
    ];

    return (
        <section id="about" className="relative py-20 bg-gradient-to-b  border-b border-neutral-700">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, (Math.random() - 0.5) * 100],
                            x: [0, (Math.random() - 0.5) * 100],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4">
                {/* Title Section with animated underline */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-5xl font-bold text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
                    </h2>
                    <motion.div
                        className="mx-auto h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '150px' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section with advanced effects */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative group perspective-1000">
                            <motion.div
                                className="relative rounded-2xl overflow-hidden shadow-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-2xl z-10"></div>
                                <img
                                    src={aboutImage}
                                    alt="Krish Solanki"
                                    className="w-full h-auto max-h-[500px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                           
                        </div>
                    </motion.div>

                    {/* Description Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        viewport={{ once: true, margin: '-100px' }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="space-y-8">
                            <motion.div
                                className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-700 hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                                    Who Am I?
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    I'm Krish Solanki, a passionate Full Stack Developer specializing in modern web technologies. 
                                    With expertise in both frontend and backend development, I create seamless, high-performance 
                                    applications that deliver exceptional user experiences.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-neutral-700 hover:shadow-xl transition-all duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                                    My Expertise
                                </h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    During my internship at TechInfinity, I developed a feature-rich eCommerce platform, 
                                    enhancing my full-stack capabilities. I integrate AI-driven solutions to optimize 
                                    development workflows and enhance user experience, focusing on efficiency and innovation.
                                </p>
                            </motion.div>

                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6 text-center lg:text-left">
                                    My Skills
                                </h3>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex flex-col items-center p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300 cursor-default"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            viewport={{ once: true, margin: '-50px' }}
                                        >
                                            <div className={`${skill.color} mb-2`}>
                                                {skill.icon}
                                            </div>
                                            <span className="text-xs text-neutral-300 text-center">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
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