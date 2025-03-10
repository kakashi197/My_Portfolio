import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiNodedotjs } from "react-icons/si"; // Corrected icon import
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from 'framer-motion';




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
        <div id='skills' className='border border-neutral-800 pb-24'>
            <motion.h1 

            whileInView={{opacity:1 , y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5 }}
            
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1.5}}

            
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div

                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"

                    className='rounded-2 border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>


                <motion.div

                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"



                    className='rounded-2 border-4 border-neutral-800 p-4'>
                    <TbBrandNextjs className='text-7xl ' />
                </motion.div>

                <motion.div

                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"



                    className='rounded-2 border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>


                <motion.div

                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"


                    className='rounded-2 border-4 border-neutral-800 p-4'>
                    <DiRedis className='text-7xl text-red-700' />
                </motion.div>


                <motion.div

                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"


                    className='rounded-2 border-4 border-neutral-800 p-4'>
                    <SiNodedotjs className='text-7xl text-green-500' /> {/* Corrected icon usage */}
                </motion.div>
                <motion.div

                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"



                    className='rounded-2 border-4 border-neutral-800 p-4'>
                    <BiLogoPostgresql className='text-7xl text-sky-400' /> {/* Corrected icon usage */}
                </motion.div>

        </motion.div>
    </div >
  )
}

export default Technology
