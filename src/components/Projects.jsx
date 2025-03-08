// import React from 'react';
// import { PROJECTS } from '../constants';
// import { motion } from 'framer-motion';

// const Projects = () => {
//   return (
//     <div id='projects' className='border-b border-neutral-900 pb-4 '>
//       <motion.h1

//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}



//         className='my-20 text-center text-4xl'>Projects</motion.h1>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className='mb-9 flex flex-wrap lg:justify-center '>
//             <motion.div

//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1.5 }}


//               className='w-full lg:w-1/4'>
//               <img
//                 className='mb-6 rounded'
//                 src={project.image}
//                 width={150}
//                 height={150}
//                 alt={project.title}
//               />
//             </motion.div>
//             <motion.div

//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}


//               className='w-full max-w-xl lg:w-3/4'>
//               <h6 className='mb-2 font-semibold'>{project.title}</h6>
//               <p className='mb-4 text-neutral-400'>{project.description}</p>
//               <div className='flex flex-wrap'>
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium hover:text-purple-700 text-purple-900'
//                   >
//                     {tech}
//                   </span>

//                 ))}
//               </div>
//               <div className='flex gap-9 pt-3 '>
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <button className="project-button   bg-purple-600 text-white w-[120px] h-[48px] rounded-full text-lg font-semibold tracking-wider uppercase transition duration-300 transform hover:bg-white hover:text-purple-600">
//                     Github
//                   </button>
//                 </a>
//                 <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
//                   <button className="project-button border-2 border-aqua rounded-full text-white w-[120px] h-[48px] bg-[#ff00f7]">
//                     Live Demo
//                   </button>
//                 </a>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;




















import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Projects = () => {
  return (
    <div id="projects" className="border-b pb-8 ">
    {/* Heading */}
    <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-16 text-center text-4xl font-bold text-white drop-shadow-md"
    >
      🚀 Projects
    </motion.h1>

    {/* Responsive Carousel */}
    <div className="carousel rounded-box mx-auto max-w-full px-4 sm:px-8 overflow-x-scroll flex scrollbar-hide">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="carousel-item flex-shrink-0 w-[90%] sm:w-[48%] md:w-[45%] lg:w-[32%] p-2 mx-auto"
        >
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-[200px] object-cover"
            />

            {/* Project Info */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-neutral-400 mt-2">{project.description}</p>

              {/* Buttons */}
              <div className="flex gap-3 justify-center mt-4 flex-wrap">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="w-[100px] h-[40px] md:w-[120px] md:h-[48px] rounded-full bg-white text-purple-600 font-semibold uppercase tracking-wide hover:bg-purple-600 hover:text-white transition duration-300">
                    GitHub
                  </button>
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <button className="w-[100px] h-[40px] md:w-[120px] md:h-[48px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold uppercase tracking-wide hover:opacity-90 transition duration-300">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Tailwind Scrollbar CSS */}
    <style>
      {`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}
    </style>
  </div>
  );
};

export default Projects;

