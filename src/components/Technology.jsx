// import React from 'react'
// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
// import { SiNodedotjs } from "react-icons/si"; // Corrected icon import
// import { BiLogoPostgresql } from "react-icons/bi";
// import { motion } from 'framer-motion';




// const iconVariants = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//         y: [10, -10],
//         transition: {
//             duration: duration,
//             ease: "linear",
//             repeat: Infinity,
//             repeatType: "reverse",
//         }
//     },
// });


// const Technology = () => {
//     return (
//         <div id='skills' className='border border-neutral-800 pb-24'>
//             <motion.h1 

//             whileInView={{opacity:1 , y:0}}
//             initial={{opacity:0, y:-100}}
//             transition={{duration:1.5 }}
            
//             className='my-20 text-center text-4xl'>Technologies</motion.h1>
//             <motion.div whileInView={{opacity: 1, x:0}}
//             initial={{opacity:0, x:-100}}
//             transition={{duration: 1.5}}

            
//             className='flex flex-wrap items-center justify-center gap-4'>
//                 <motion.div

//                     variants={iconVariants(2.5)}
//                     initial="initial"
//                     animate="animate"

//                     className='rounded-2 border-4 border-neutral-800 p-4'>
//                     <RiReactjsLine className='text-7xl text-cyan-400' />
//                 </motion.div>


//                 <motion.div

//                     variants={iconVariants(3)}
//                     initial="initial"
//                     animate="animate"



//                     className='rounded-2 border-4 border-neutral-800 p-4'>
//                     <TbBrandNextjs className='text-7xl ' />
//                 </motion.div>

//                 <motion.div

//                     variants={iconVariants(5)}
//                     initial="initial"
//                     animate="animate"



//                     className='rounded-2 border-4 border-neutral-800 p-4'>
//                     <SiMongodb className='text-7xl text-green-500' />
//                 </motion.div>


//                 <motion.div

//                     variants={iconVariants(2)}
//                     initial="initial"
//                     animate="animate"


//                     className='rounded-2 border-4 border-neutral-800 p-4'>
//                     <DiRedis className='text-7xl text-red-700' />
//                 </motion.div>


//                 <motion.div

//                     variants={iconVariants(6)}
//                     initial="initial"
//                     animate="animate"


//                     className='rounded-2 border-4 border-neutral-800 p-4'>
//                     <SiNodedotjs className='text-7xl text-green-500' /> {/* Corrected icon usage */}
//                 </motion.div>
//                 <motion.div

//                     variants={iconVariants(4)}
//                     initial="initial"
//                     animate="animate"



//                     className='rounded-2 border-4 border-neutral-800 p-4'>
//                     <BiLogoPostgresql className='text-7xl text-sky-400' /> {/* Corrected icon usage */}
//                 </motion.div>

//         </motion.div>
//     </div >
//   )
// }

// export default Technology





import React from 'react';
import { motion } from 'framer-motion';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiNodedotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"; // Added more icons
import { DiRedis } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGitAlt } from 'react-icons/fa'; // Added Git icon

// Variants for the bouncing icons
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
});

const Technology = () => {
    return (
        <section id='skills' className='relative min-h-screen py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center bg-gradient-to-br  overflow-hidden'>
            {/* Dynamic Background Grid/Pattern */}
            <div className="absolute inset-0 z-0 ">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent" />
            </div>

            {/* Section Heading */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className=' relative z-10 my-20 text-center text-5xl md:text-6xl lg:text-7xl font-extrabold
                           bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400
                           drop-shadow-lg leading-tight'
            >
                My Tech Stack
            </motion.h1>

            {/* Icons Container */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className='relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto'
            >
                {/* React */}
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-cyan-400/50 transition-shadow duration-300'
                >
                    <RiReactjsLine className='text-7xl sm:text-8xl lg:text-9xl text-cyan-400' />
                </motion.div>

                {/* Next.js */}
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-white/50 transition-shadow duration-300'
                >
                    <TbBrandNextjs className='text-7xl sm:text-8xl lg:text-9xl text-white' />
                </motion.div>

                {/* MongoDB */}
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-green-500/50 transition-shadow duration-300'
                >
                    <SiMongodb className='text-7xl sm:text-8xl lg:text-9xl text-green-500' />
                </motion.div>

                {/* Node.js */}
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-green-600/50 transition-shadow duration-300'
                >
                    <SiNodedotjs className='text-7xl sm:text-8xl lg:text-9xl text-green-600' />
                </motion.div>
                
                {/* Express.js (Often paired with Node.js, so a good addition) */}
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-gray-400/50 transition-shadow duration-300'
                >
                    <SiNodedotjs className='text-7xl sm:text-8xl lg:text-9xl text-gray-400' /> {/* Using Node.js icon for Express.js for simplicity, or find a specific one if available */}
                    <span className="absolute text-xs bottom-2 right-2 text-gray-400">EX</span>
                </motion.div>


                {/* PostgreSQL */}
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-sky-400/50 transition-shadow duration-300'
                >
                    <BiLogoPostgresql className='text-7xl sm:text-8xl lg:text-9xl text-sky-400' />
                </motion.div>

                {/* Redis */}
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-red-700/50 transition-shadow duration-300'
                >
                    <DiRedis className='text-7xl sm:text-8xl lg:text-9xl text-red-700' />
                </motion.div>

                {/* Tailwind CSS (Essential for portfolio) */}
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-cyan-500/50 transition-shadow duration-300'
                >
                    <SiTailwindcss className='text-7xl sm:text-8xl lg:text-9xl text-cyan-500' />
                </motion.div>

                {/* JavaScript */}
                <motion.div
                    variants={iconVariants(2.8)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-yellow-400/50 transition-shadow duration-300'
                >
                    <SiJavascript className='text-7xl sm:text-8xl lg:text-9xl text-yellow-400' />
                </motion.div>

                {/* HTML */}
                <motion.div
                    variants={iconVariants(3.2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-orange-500/50 transition-shadow duration-300'
                >
                    <SiHtml5 className='text-7xl sm:text-8xl lg:text-9xl text-orange-500' />
                </motion.div>

                {/* CSS */}
                <motion.div
                    variants={iconVariants(5.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-blue-600/50 transition-shadow duration-300'
                >
                    <SiCss3 className='text-7xl sm:text-8xl lg:text-9xl text-blue-600' />
                </motion.div>

                {/* Git */}
                <motion.div
                    variants={iconVariants(4.8)}
                    initial="initial"
                    animate="animate"
                    className='rounded-3xl border-4 border-neutral-700 p-4 sm:p-5 lg:p-6
                               flex items-center justify-center bg-gray-800/50 backdrop-blur-sm
                               shadow-xl hover:shadow-orange-700/50 transition-shadow duration-300'
                >
                    <FaGitAlt className='text-7xl sm:text-8xl lg:text-9xl text-orange-700' />
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Technology;
