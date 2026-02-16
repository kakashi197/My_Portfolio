


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







import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Mousewheel, Keyboard, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  // Smooth spring animations
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothY = useSpring(y, springConfig);
  const smoothScale = useSpring(scale, springConfig);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative min-h-screen py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* 1. Dynamic Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity, y: smoothY, scale: smoothScale }}
      >
        {/* Enhanced Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block text-purple-400 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 bg-purple-500/10 px-4 py-2 rounded-full"
          >
            ✦ Portfolio Showcase ✦
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            Featured{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            Explore my latest creations — each project is a unique story of problem-solving 
            and innovation, crafted with modern technologies.
          </motion.p>
        </motion.div>

        {/* 3D Carousel Container with Enhanced Features */}
        <div className="relative py-6 sm:py-8 md:py-10">
          {/* Custom Navigation Arrows (Desktop only) */}
          {!isMobile && (
            <>
              <button 
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 backdrop-blur-xl rounded-full border border-gray-700/50 flex items-center justify-center text-white hover:bg-gray-700 transition-all hover:scale-110 hover:border-purple-500/50 shadow-xl -ml-4 md:-ml-6"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 backdrop-blur-xl rounded-full border border-gray-700/50 flex items-center justify-center text-white hover:bg-gray-700 transition-all hover:scale-110 hover:border-purple-500/50 shadow-xl -mr-4 md:-mr-6"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            speed={800}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            keyboard={{ enabled: true }}
            coverflowEffect={{
              rotate: isMobile ? 0 : 5,
              stretch: isMobile ? 0 : 30,
              depth: isMobile ? 50 : 200,
              modifier: isMobile ? 2 : 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
              dynamicMainBullets: 5,
            }}
            navigation={false}
            modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel, Keyboard, Navigation]}
            className="project-swiper !pb-16 md:!pb-20"
          >
            {PROJECTS.map((project, index) => (
              <SwiperSlide 
                key={index} 
                className="!w-[300px] sm:!w-[380px] md:!w-[450px] lg:!w-[500px] transition-all duration-500"
              >
                {({ isActive }) => (
                  <motion.div
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    animate={{ 
                      scale: isActive ? 1 : 0.85,
                      opacity: isActive ? 1 : 0.4,
                      y: hoveredIndex === index && isActive ? -10 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative bg-gradient-to-b from-gray-900/90 to-gray-900/70 backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-2xl h-full border transition-all duration-500 ${
                      isActive 
                        ? 'border-purple-500/50 shadow-purple-500/20' 
                        : 'border-white/10 hover:border-purple-500/30'
                    }`}
                  >
                    {/* Animated Gradient Overlay */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      animate={{
                        background: [
                          'radial-gradient(circle at 20% 20%, rgba(168,85,247,0.2) 0%, transparent 50%)',
                          'radial-gradient(circle at 80% 80%, rgba(236,72,153,0.2) 0%, transparent 50%)',
                          'radial-gradient(circle at 20% 20%, rgba(168,85,247,0.2) 0%, transparent 50%)',
                        ],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />

                    {/* Image Wrapper with Parallax */}
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredIndex === index ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.7 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      
                      {/* Active Badge */}
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-4 left-4 z-10"
                        >
                          <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-purple-400/50 shadow-lg">
                            Featured Project
                          </span>
                        </motion.div>
                      )}

                      {/* Index Number */}
                      <div className="absolute bottom-4 right-4 text-4xl md:text-5xl font-bold text-white/10">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 line-clamp-2 mb-5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack with Enhanced Design */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, i) => (
                          <motion.span 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: 'rgba(168,85,247,0.2)',
                            }}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider text-gray-300 uppercase hover:border-purple-500/30 transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons with Enhanced Interaction */}
                      <div className="flex gap-3 sm:gap-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <button className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn">
                            <svg className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                            Code
                          </button>
                        </motion.a>
                        
                        <motion.a
                          href={project.liveDemo}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1"
                        >
                          <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 group/btn">
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/>
                              <polygon points="10 8 16 12 10 16 10 8"/>
                            </svg>
                            Live Demo
                          </button>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Interactive Progress Indicator */}
        <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
          <span className="text-sm text-gray-500">Explore Projects</span>
          <div className="flex gap-1">
            {PROJECTS.map((_, index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-purple-500' : 'w-2 bg-gray-600'
                }`}
                animate={{
                  backgroundColor: index === activeIndex ? '#a855f7' : '#4b5563',
                }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">
            {activeIndex + 1}/{PROJECTS.length}
          </span>
        </div>
      </motion.div>

      {/* Global Styles */}
      <style jsx global>{`
        /* Apple-style Pagination */
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.3) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #a855f7, #ec4899) !important;
          width: 24px !important;
          border-radius: 12px !important;
          transform: scale(1.2);
        }
        .swiper-pagination-bullet-active-main {
          transform: scale(1);
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #a855f7, #ec4899);
          border-radius: 4px;
        }
        
        /* Smooth Transitions */
        .project-swiper {
          overflow: visible !important;
          padding: 20px 0 !important;
        }
        
        /* Loading Animation */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Projects;


