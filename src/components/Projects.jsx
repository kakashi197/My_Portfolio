


// import React from 'react';
// import { PROJECTS } from '../constants';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// import 'swiper/css/navigation';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// const Projects = () => {
//   return (
//     <div id="projects" className="border-b pb-8 ">
//     {/* Heading */}
//     <motion.h1
//       whileInView={{ opacity: 1, y: 0 }}
//       initial={{ opacity: 0, y: -100 }}
//       transition={{ duration: 0.5 }}
//       className="my-16 text-center text-4xl font-bold text-white drop-shadow-md"
//     >
//       🚀 Projects
//     </motion.h1>

//     {/* Responsive Carousel */}
//     <div className="carousel rounded-box mx-auto max-w-full px-4 sm:px-8 overflow-x-scroll flex scrollbar-hide">
//       {PROJECTS.map((project, index) => (
//         <div
//           key={index}
//           className="carousel-item flex-shrink-0 w-[90%] sm:w-[48%] md:w-[45%] lg:w-[32%] p-2 mx-auto"
//         >
//           <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
//             {/* Image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               className="rounded-lg w-full h-[200px] object-cover"
//             />

//             {/* Project Info */}
//             <div className="text-center mt-4">
//               <h3 className="text-xl font-semibold text-white">
//                 {project.title}
//               </h3>
//               <p className="text-neutral-400 mt-2">{project.description}</p>

//               {/* Buttons */}
//               <div className="flex gap-3 justify-center mt-4 flex-wrap">
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <button className="w-[100px] h-[40px] md:w-[120px] md:h-[48px] rounded-full bg-white text-purple-600 font-semibold uppercase tracking-wide hover:bg-purple-600 hover:text-white transition duration-300">
//                     GitHub
//                   </button>
//                 </a>
//                 <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
//                   <button className="w-[100px] h-[40px] md:w-[120px] md:h-[48px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold uppercase tracking-wide hover:opacity-90 transition duration-300">
//                     Live Demo
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Tailwind Scrollbar CSS */}
//     <style>
//       {`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}
//     </style>
//   </div>
//   );
// };

// export default Projects;






import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section id="projects" className="relative py-20   overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Heading with animated gradient */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16 px-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400">
          My Projects
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Here are some of my featured works. Each project represents unique challenges and creative solutions.
        </p>
      </motion.div>

      {/* 3D Carousel */}
      <div className="relative z-10 px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-16"
        >
          {PROJECTS.map((project, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[350px] lg:!w-[400px] !h-auto">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl h-full flex flex-col"
              >
                {/* Project Image with gradient overlay */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-gray-700/50 text-purple-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full    py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Code
                      </button>
                    </a>
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button id='project_live_button' className="w-full    py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polygon points="10 8 16 12 10 16 10 8"></polygon>
                        </svg>
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Floating elements */}
      {/* <div className="absolute bottom-10 left-0 w-full flex justify-center z-10">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </motion.div>
      </div> */}
    </section>
  );
};

export default Projects;

