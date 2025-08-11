

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


