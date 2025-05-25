// import React from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import backgroundImage from "../assets/my image.png"; // ✅ Ensure correct path

// const container = (delay) => ({
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6, delay },
//   },
// });

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="flex flex-col items-center justify-center text-center w-full h-screen overflow-hidden"
//     >
//       {/* ✅ Background Image (Only on Small Screens) */}
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center sm:hidden"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       ></div>

//       {/* ✅ Dark Gradient Overlay for Better Readability */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 sm:bg-transparent"></div>

//       {/* ✅ Floating Effects for Visual Appeal */}
//       <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 blur-3xl opacity-30 rounded-full animate-pulse hidden md:block"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 blur-3xl opacity-20 rounded-full animate-pulse hidden md:block"></div>

//       {/* ✅ Content Wrapper */}
//       <div className="relative z-10 w-full max-w-3xl px-6">
//         {/* ✅ Animated Heading */}
//         <motion.h1
//           variants={container(0.2)}
//           initial="hidden"
//           animate="visible"
//           className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-[23vh] tracking-tight leading-tight"
//         >
//           Welcome, I'm <span className="text-purple-400">Krish Solanki</span>
//         </motion.h1>

//         {/* ✅ Animated Subtitle with Typewriter Effect */}
//         <motion.p
//           variants={container(0.4)}
//           initial="hidden"
//           animate="visible"
//           className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mt-4"
//         >
//           A{" "}
//           <span className="text-pink-400">
//             <Typewriter
//               words={[
//                 "Passionate Programmer",
//                 "Frontend Developer",
//                 "Backend Developer",
//                 "UI/UX Enthusiast",
//                 "Full Stack Engineer",
//               ]}
//               loop={0} // Infinite loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={80}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </span>
//         </motion.p>
//       </div>

//       {/* ✅ Scroll Indicator (Hidden on Small Screens) */}
//       <motion.div
//         variants={container(0.8)}
//         initial="hidden"
//         animate="visible"
//         className="absolute bottom-6 flex flex-col items-center hidden md:flex"
//       >
//         <span className="text-gray-300 text-sm mb-2">Scroll Down</span>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//           className="w-5 h-5 border-2 border-white rounded-full"
//         ></motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;








import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import backgroundImage from "../assets/my image.png"; // ✅ Ensure correct path

const container = (delay) => ({
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center w-full h-screen overflow-hidden"
    >
      {/* ✅ Background Image (Only on Small Screens) */}
      <div
          className="absolute inset-0 w-full h-full bg-cover bg-center sm:hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(80%)", // Slight dark effect for readability
          }}
      ></div>

      {/* ✅ Dark Gradient Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 sm:bg-transparent"></div>

      {/* ✅ Floating Effects for Visual Appeal */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 blur-3xl opacity-30 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 blur-3xl opacity-20 rounded-full animate-pulse hidden md:block"></div>

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        {/* ✅ Animated Heading */}
        <motion.h1
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mt-[23vh] tracking-tight leading-tight"
        >
          Welcome, I'm <span className="text-purple-400">Krish Solanki</span>
        </motion.h1>

        {/* ✅ Animated Subtitle with Typewriter Effect */}
        <motion.p
          variants={container(0.4)}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mt-4"
        >
          A{" "}
          <span className="text-pink-400">
            <Typewriter
              words={[
                "Passionate Programmer",
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Enthusiast",
                "Full Stack Engineer",
              ]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.p>
      </div>

      {/* ✅ Scroll Indicator (Hidden on Small Screens) */}
      <motion.div
        variants={container(0.8)}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 flex flex-col items-center hidden md:flex"
      >
        <span className="text-gray-300 text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-5 border-2 border-white rounded-full"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;











