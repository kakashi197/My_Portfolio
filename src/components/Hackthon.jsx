
// import React from "react";
// import { HACKATHON_INFO } from "../constants";
// import logo from "../assets/Hack1.jpg";


// const Hackathon = () => {
//   return (
//     <div
//       id="hackathon"
//       className="min-h-screen pb-24 px-5 flex flex-col items-center bg-gradient-to-br   text-white"
//     >
//       {/* Header Section */}
//       <header className="text-center mb-16 mt-10 animate-fade-in-up">
//         <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
//           {HACKATHON_INFO.title}
//         </h1>
//         <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
//           {HACKATHON_INFO.description}
//         </p>
//         <div className="mt-6">
//           <a
//             href="#certificate"
//             className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
//           >
//             View Certificate
//           </a>
//         </div>
//       </header>

//       {/* Hackathon Details Section */}
//       <section className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-5xl mb-16 animate-slide-up">
//         <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">
//           💡 My Hackathon Journey
//         </h2>
        
//         <div className="space-y-4 text-gray-200 leading-relaxed text-lg">
//           <p>
//             As a {HACKATHON_INFO.details.team}, we developed a <strong>{HACKATHON_INFO.details.project}</strong> 
//             that streamlined relocation services with innovative features.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//             <div>
//               <h3 className="text-xl font-semibold text-cyan-400 mb-2">Technologies Used</h3>
//               <ul className="space-y-2">
//                 <li><strong>Frontend:</strong> {HACKATHON_INFO.details.technologies.frontend.join(", ")}</li>
//                 <li><strong>Backend:</strong> {HACKATHON_INFO.details.technologies.backend.join(", ")}</li>
//                 <li><strong>Design:</strong> {HACKATHON_INFO.details.technologies.design.join(", ")}</li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="text-xl font-semibold text-cyan-400 mb-2">Key Achievements</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 {HACKATHON_INFO.details.achievements.map((achievement, index) => (
//                   <li key={index}>{achievement}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-lg">
//             <p>📅 <strong>Date:</strong> {HACKATHON_INFO.details.date}</p>
//             <p>📍 <strong>Location:</strong> {HACKATHON_INFO.details.location}</p>
//           </div>
//         </div>
//       </section>

//       {/* Certificate Section */}
//       <section
//         id="certificate"
//         className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-5xl mb-16 flex flex-col md:flex-row items-center gap-10 animate-fade-in"
//       >
//         <div className="flex-1">
//           <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
//             🏅 Achievement Recognized
//           </h2>
//           <p className="text-gray-200 text-lg">
//             {HACKATHON_INFO.details.certificate.description}
//           </p>
//           <p className="mt-4 text-pink-300">
//             Awarded 3rd Prize for our innovative solution among 30+ participating teams.
//           </p>
//         </div>
//         <div className="flex-1">
//           <img
//             src={logo}
//             alt="Hackathon Certificate"
//             className="w-full max-w-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
//           />
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="text-center text-gray-400 mt-20 text-sm animate-fade-in-up">
//         <p>
//           © 2024 Hackathon Experience | Proud moment in my academic journey at Government Polytechnic Gandhinagar
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Hackathon;


















import React from "react";
import { HACKATHON_INFO } from "../constants"; // Assuming HACKATHON_INFO contains your data
import logo from "../assets/Hack1.jpg"; // Your certificate image
import { motion } from "framer-motion"; // Import motion for animations

const Hackathon = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="hackathon"
      className="relative min-h-screen py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center bg-gradient-to-br  text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0.5, 1.2, 0.5],
              x: `${Math.random() * 200 - 100}%`,
              y: `${Math.random() * 200 - 100}%`,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
            className="absolute rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              filter: 'blur(70px)',
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.header
        className="relative z-10 text-center mb-16 max-w-4xl"
        variants={itemVariants}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 drop-shadow-glow leading-tight">
          {HACKATHON_INFO.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 px-4 tracking-wide">
          {HACKATHON_INFO.description}
        </p>
        <div className="mt-8">
          <a
            href="#certificate"
            className="inline-block bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View Certificate
          </a>
        </div>
      </motion.header>

      {/* Hackathon Details Section */}
      <motion.section
        className="relative z-10 bg-white/10 border border-white/20 backdrop-blur-xl shadow-3xl rounded-3xl p-8 md:p-12 w-full max-w-6xl mb-20 transform hover:scale-[1.01] transition-transform duration-300"
        variants={itemVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-8 text-center sm:text-left">
          💡 My Hackathon Journey
        </h2>

        <div className="space-y-6 text-gray-200 leading-relaxed text-lg sm:text-xl">
          <p>
            As a **{HACKATHON_INFO.details.team}**, we successfully developed{" "}
            <strong className="text-pink-300">{HACKATHON_INFO.details.project}</strong>{" "}
            – a innovative solution designed to streamline relocation services with cutting-edge features.
            This experience was a fantastic opportunity for collaborative problem-solving and rapid development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 border-b border-cyan-400/50 pb-2">
                🚀 Technologies Used
              </h3>
              <ul className="space-y-3 list-inside">
                <li>
                  <strong className="text-purple-300">Frontend:</strong>{" "}
                  {HACKATHON_INFO.details.technologies.frontend.join(", ")}
                </li>
                <li>
                  <strong className="text-purple-300">Backend:</strong>{" "}
                  {HACKATHON_INFO.details.technologies.backend.join(", ")}
                </li>
                <li>
                  <strong className="text-purple-300">Design:</strong>{" "}
                  {HACKATHON_INFO.details.technologies.design.join(", ")}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-4 border-b border-cyan-400/50 pb-2">
                🏆 Key Achievements
              </h3>
              <ul className="list-disc list-inside pl-0 space-y-2 marker:text-pink-400">
                {HACKATHON_INFO.details.achievements.map((achievement, index) => (
                  <li key={index} className="pl-2">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-lg sm:text-xl">
            <p className="flex items-center gap-2">
              <span className="text-pink-400 text-2xl">📅</span>{" "}
              <strong>Date:</strong> {HACKATHON_INFO.details.date}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-pink-400 text-2xl">📍</span>{" "}
              <strong>Location:</strong> {HACKATHON_INFO.details.location}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Certificate Section */}
      <motion.section
        id="certificate"
        className="relative z-10 bg-white/10 border border-white/20 backdrop-blur-xl shadow-3xl rounded-3xl p-8 md:p-12 w-full max-w-6xl mb-20 flex flex-col md:flex-row items-center gap-10 animate-fade-in"
        variants={itemVariants}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4 leading-snug">
            🏅 Achievement Recognized: <span className="block lg:inline-block text-pink-400">3rd Prize Winner!</span>
          </h2>
          <p className="text-gray-200 text-lg sm:text-xl mb-4">
            {HACKATHON_INFO.details.certificate.description}
          </p>
          <p className="text-pink-300 text-lg font-medium">
            Proudly awarded **3rd Prize** for our innovative solution among 30+ highly competitive participating teams. This recognition fuels my passion for creative problem-solving!
          </p>
        </div>
        <motion.div
          className="flex-1 flex justify-center items-center p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50 shadow-inner"
          variants={imageVariants}
        >
          <img
            src={logo}
            alt="Hackathon Certificate"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl shadow-xl transform hover:scale-105 hover:rotate-1 transition-transform duration-700 ease-in-out border-4 border-purple-500"
          />
        </motion.div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        className="relative z-10 text-center text-gray-400 mt-10 text-sm md:text-base px-4"
        variants={itemVariants}
      >
        <p>
          &copy; {new Date().getFullYear()} Hackathon Experience | A proud moment in my academic journey at Government Polytechnic Gandhinagar.
        </p>
        <p className="mt-2 text-gray-500">
          Crafted with ❤️ and code.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default Hackathon;
