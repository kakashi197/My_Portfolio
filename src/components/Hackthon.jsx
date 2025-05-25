

import React from "react";
import logo from "../assets/Hack1.jpg";

const Hackathon = () => {
  return (
    <div
      id="hackathon"
      className="min-h-screen pb-24 px-5 flex flex-col items-center bg-gradient-to-br  text-white"
    >
      {/* Header Section */}
      <header className="text-center mb-16 mt-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          🚀 Welcome to Hackathon 2024
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
          Dive into 48 hours of innovation, creativity, and tech-powered brilliance. Whether you're a coder, designer, or idea machine — there's a place for you here.
        </p>
        <div className="mt-6">
          <a
            href="#certificate"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            View Certificate
          </a>
        </div>
      </header>

      {/* Hackathon Details Section */}
      <section className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-5xl mb-16 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">
          💡 About the Hackathon
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          This 48-hour Hackathon is your gateway to solving real-world challenges using cutting-edge technologies. Collaborate, build, and bring your ideas to life alongside fellow enthusiasts, mentors, and tech leaders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-lg">
          <p className="text-gray-300">
            📅 <strong className="text-white">Date:</strong> January 20-22, 2024
          </p>
          <p className="text-gray-300">
            📍 <strong className="text-white">Location:</strong> B & B Institute, Anand, Vallabh Vidyanagar
          </p>
        </div>
      </section>

      {/* Certificate Section */}
      <section
        id="certificate"
        className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-5xl mb-16 flex flex-col md:flex-row items-center gap-10 animate-fade-in"
      >
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">
            🏅 My Certificate
          </h2>
          <p className="text-gray-200 text-lg">
            Every participant receives a beautifully designed certificate recognizing their hard work, creativity, and passion for innovation. It's not just a certificate — it's a badge of honor!
          </p>
        </div>
        <div className="flex-1">
          <img
            src={logo}
            alt="Hackathon Certificate"
            className="w-full max-w-md rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

    

      {/* Footer Section */}
      <footer className="text-center text-gray-400 mt-20 text-sm animate-fade-in-up">
        <p>
          © 2024 Hackathon | Crafted with ❤️ and limitless imagination. Built by future-makers for future-makers.
        </p>
      </footer>
    </div>
  );
};

export default Hackathon;





















// import React from "react";
// import { motion } from "framer-motion";
// import logo from "../assets/Hack1.jpg";

// const Hackathon = () => {
//   return (
//     <div id="hackathon" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//       </div>
      
//       {/* Floating Blobs */}
//       <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
//       <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

//       {/* Main Content */}
//       <div className="relative max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <motion.header 
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
//             🚀 Hackathon 2024
//           </h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto leading-relaxed"
//           >
//             Join the ultimate 48-hour innovation marathon where creativity meets technology!
//           </motion.p>
          
//           {/* Animated CTA Button */}
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.5, type: "spring" }}
//             className="mt-10"
//           >
//             <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
//               Register Now
//             </button>
//           </motion.div>
//         </motion.header>

//         {/* Hackathon Details Section */}
//         <motion.section
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="backdrop-blur-lg bg-gray-800/50 border border-gray-700/50 shadow-2xl rounded-3xl p-8 md:p-12 w-full mb-16"
//         >
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="flex-1">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 mb-6">
//                 About the Event
//               </h2>
//               <p className="text-gray-300 leading-relaxed text-lg mb-6">
//                 Our Hackathon is a high-energy 48-hour innovation sprint where brilliant minds collaborate to solve real-world challenges. Expect cutting-edge tech, expert mentors, and an electrifying atmosphere!
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 text-cyan-400">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">Date & Time</h3>
//                     <p className="text-gray-300">January 20-22, 2024 • 9:00 AM - 9:00 PM</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start gap-4">
//                   <div className="mt-1 text-purple-400">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">Location</h3>
//                     <p className="text-gray-300">B & B Institute, Anand • Vallabh Vidyanagar</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex-1">
//               <h3 className="text-2xl font-semibold text-white mb-4">Event Highlights</h3>
//               <ul className="space-y-4">
//                 {[
//                   "💰 $10,000+ in prizes",
//                   "👨‍💻 Mentorship from industry experts",
//                   "🍕 Free food & beverages",
//                   "🤝 Networking opportunities",
//                   "🏆 Special category awards",
//                   "🎁 Exclusive swag for all participants"
//                 ].map((item, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: 20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
//                   >
//                     <span className="text-cyan-400">✓</span> {item}
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.section>

//         {/* Certificate Section */}
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="backdrop-blur-lg bg-gray-800/50 border border-gray-700/50 shadow-2xl rounded-3xl p-8 md:p-12 w-full mb-16"
//         >
//           <div className="flex flex-col md:flex-row gap-10 items-center">
//             <div className="flex-1">
//               <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-6">
//                 Achievement Showcase
//               </h2>
//               <p className="text-gray-300 leading-relaxed text-lg mb-6">
//                 Every participant receives an official certificate recognizing their hard work and innovation. This isn't just a piece of paper - it's proof of your ability to create under pressure and think outside the box.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl">
//                   <div className="text-purple-400 text-2xl">🏆</div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">Certificate Features</h3>
//                     <p className="text-gray-300">Verifiable digital credential • Shareable on LinkedIn • Includes skills demonstrated</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <motion.div 
//               whileHover={{ scale: 1.03 }}
//               className="flex-1 relative group"
//             >
//               <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
//               <img
//                 src={logo}
//                 alt="Hackathon Certificate"
//                 className="relative rounded-xl shadow-2xl w-full h-auto transform transition-transform group-hover:-rotate-1"
//               />
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Sponsors Section */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
//             Proudly Supported By
//           </h2>
//           <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
//             {["TechGiant", "InnovateX", "FutureLabs", "CodeWave", "DigitalDreams"].map((sponsor, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
//               >
//                 {sponsor}
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Final CTA */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Build the Future?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             Limited spots available! Register now to secure your place in the most exciting hackathon of the year.
//           </p>
//           <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-3xl hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
//             Join Hackathon 2024
//           </button>
//         </motion.div>
//       </div>

//       {/* Footer */}
//       <footer className="text-center text-gray-500 mt-24">
//         <p className="text-sm">
//           © 2024 Hackathon. Crafted with ❤️ and endless coffee.
//         </p>
//       </footer>

//       {/* Animation CSS */}
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
//       `}</style>
//     </div>
//   );
// };

// export default Hackathon;















