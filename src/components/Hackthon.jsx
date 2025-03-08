// // Hackathon.jsx
// import React from 'react';
// import logo from "../assets/logo.png";

// const Hackathon = () => {
//   return (
//     <div className="min-h-screen border border-neutral-800 pb-24  p-5 flex flex-col items-center">
//       {/* Header Section */}
//       <header className="text-center mb-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-white">Welcome to Hackathon 2024</h1>
//         <p className="text-lg md:text-xl text-white mt-4">
//           Join us for an exciting journey of innovation, collaboration, and learning!
//         </p>
//       </header>

//       {/* Hackathon Details Section */}
//       <section className=" shadow-lg rounded-lg p-6 md:p-10 w-full max-w-4xl mb-8">
//         <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">About the Hackathon</h2>
//         <p className="text-white leading-relaxed">
//           Our Hackathon is a 48-hour event where creative minds come together to solve real-world problems using technology. Participants will work in teams to build innovative solutions, network with like-minded individuals, and compete for exciting prizes.
//         </p>
//         <p className="text-white leading-relaxed mt-4">
//           Date: <span className="font-semibold">January 20-22, 2024</span>
//         </p>
//         <p className="text-white leading-relaxed">
//           Location: <span className="font-semibold">Tech Park, Innovation City</span>
//         </p>
//       </section>

//       {/* Certificate Section */}
//       <section className=" shadow-lg rounded-lg p-6 md:p-10 w-full max-w-4xl mb-8 flex flex-col md:flex-row items-center gap-6">
//         <div className="flex-1">
//           <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Your Certificate</h2>
//           <p className="text-white leading-relaxed">
//             Participants will receive a personalized certificate recognizing their effort and participation in the Hackathon. Showcase your achievement proudly!
//           </p>
//         </div>
//         <div className="flex-1">
//           <img
//             src={logo}
//             alt="Hackathon Certificate"
//             className="w-full rounded-lg shadow-lg"
//           />
//         </div>
//       </section>

//       {/* Footer Section */}
     
//     </div>
//   );
// };

// export default Hackathon;




















import React from "react";

import logo from "../assets/Hack1.jpg";

const Hackathon = () => {
  return (
    <div id="hackathon" className="min-h-screen pb-24 p-5 flex flex-col items-center ">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
          🚀 Welcome to Hackathon 2024
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Join us for an exciting journey of innovation, collaboration, and
          learning!
        </p>
      </header>

      {/* Hackathon Details Section */}
      <section className=" backdrop-blur-md shadow-xl rounded-lg p-6 md:p-10 w-full max-w-4xl mb-12  ">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          About the Hackathon
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Our Hackathon is a 48-hour event where creative minds come together to
          solve real-world problems using technology. Participants will work in
          teams to build innovative solutions, network with like-minded
          individuals, and compete for exciting prizes.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
          <p className="text-gray-300">
            📅 Date:{" "}
            <span className="font-semibold text-white">January 20-22, 2024</span>
          </p>
          <p className="text-gray-300">
            📍 Location:{" "}
            <span className="font-semibold text-white">
              B & B institute, Anand , Vallabh Vidyanagar
            </span>
          </p>
        </div>
      </section>

      {/* Certificate Section */}
      <section className=" backdrop-blur-md shadow-xl rounded-lg p-6 md:p-10 w-full max-w-4xl mb-12 flex flex-col md:flex-row items-center gap-8  ">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            My Certificate
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Participants will receive a personalized certificate recognizing
            their effort and participation in the Hackathon. Showcase your
            achievement proudly!
          </p>
        </div>
        <div className="flex-1">
          <img
            src={logo}
            alt="Hackathon Certificate"
            className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-400 mt-8">
        <p>
          © 2024 Hackathon. Built with ❤️ and passion for innovation.
        </p>
      </footer>
    </div>
  );
};

export default Hackathon;

