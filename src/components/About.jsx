// import React from 'react'
// import { motion } from 'framer-motion';
// import aboutImage from "../assets/image-2.jpg"


// const About = () => {
//     return (
//         <div id="about" className='border-b border-neutral-900 pb-4'>
//             <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>me</span> </h1>
//             <div className="flex flex-wrap">
//                 <motion.div

//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.5 }}


//                     className="w-full lg:w-1/2 lg:p-8">

//                     <div className="flex items-center justify-center">
//                         <img src={aboutImage} alt="about me" className='h-[20vh] rounded-2xl' />
//                     </div>



//                 </motion.div>


//                 <motion.div


//                     whileInView={{ opacity: 1, x: 0 }}
//                     initial={{ opacity: 0, x: 100 }}
//                     transition={{ duration: 0.5 }}


//                     className='w-full lg:w-1/2'>
//                     <div className="flex justify-center lg:justify-start">
//                         <p className="my-4 max-w-xl py-6 px-4 bg-gradient-to-r text-white shadow-lg rounded-lg text-justify leading-relaxed md:text-lg sm:text-base hover:shadow-xl transition-shadow duration-300 ease-in-out">
//                             Hi, I’m Krish, a passionate Software Developer specializing in modern web applications with Django, React, Node.js, and Next.js. I have hands-on experience in building scalable applications and deploying them on platforms like Heroku. During my internship at TechInfinity, I developed an e-commerce platform, enhancing my skills in full-stack development.

//                             I’m proficient in Python, Django, React, Node.js, Next.js, and database management. I have also worked on building e-commerce websites using React for the frontend and Node.js/Next.js for the backend. My goal is to create impactful software solutions that solve real-world problems.

//                             In my free time, I love photography and experimenting with new tech tools.
//                         </p>

//                     </div>
//                 </motion.div>



//             </div>

//         </div>
//     )
// }

// export default About



























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

