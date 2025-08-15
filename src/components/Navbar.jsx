// import { useState } from "react";

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   FaInstagram,
//   FaTwitter,
//   FaFacebook,
//   FaWhatsapp,
//   FaHome,
//   FaUser,
//   FaTools,
//   FaFileAlt,
//   FaProjectDiagram,
//   FaEnvelope,
//   FaCode,
//   FaLinkedin,
//   FaGithub,
// } from "react-icons/fa";
// import { FiHome, FiUser, FiTool, FiFileText, FiGrid, FiMail } from "react-icons/fi";
// import logo from "../assets/kevinRushLogo.png";
// import krish_logo from "../assets/krish_2.jpg";

// // Navigation Links for Sidebar
// const navigation = [
//   { name: "Home", href: "#home", icon: FiHome },
//   { name: "About", href: "#about", icon: FiUser },
//   { name: "Skills", href: "#skills", icon: FiTool },
//   { name: "Hackathon", href: "#hackathon", icon: FaCode },
//   { name: "Resume", href: "#resume", icon: FiFileText },
//   { name: "Projects", href: "#projects", icon: FiGrid },
//   { name: "Contact", href: "#contact", icon: FiMail },
// ];


// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div>
//       {/* Desktop and Larger Screens Navbar */}
//       <nav className="hidden lg:block  fixed w-full z-10 cursor-pointer">
//         <div className="flex items-center justify-between h-16 px-4">

//           <div className="m-8 ml-24 relative left-[136vh] flex items-center justify-center gap-4 text-2xl ">
//             <FaLinkedin className="text-gray-400 hover:text-white" />
//             <FaGithub className="text-gray-400 hover:text-white" />
//             <FaTwitter className="text-gray-400 hover:text-white" />
//             <FaInstagram className="text-gray-400 hover:text-white" />
//           </div>
//         </div>
//       </nav>

//       {/* Smaller Screens Navbar with Sidebar */}
//       <nav className="lg:hidden fixed w-full z-10 cursor-pointer">
//         <div className="flex items-center justify-between h-16 px-4">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-auto mr-[4vh]" // Left ko ml-auto se replace kiya
//           >
//             {sidebarOpen ? (
//               <XMarkIcon
//                 className="  h-[2.5em] w-[2.5em] rounded-full"
//                 aria-hidden="true"
//               />
//             ) : (
//               <Bars3Icon
//                 className="h-[2.5em] w-[2.5em] rounded-full"
//                 aria-hidden="true"
//               />
//             )}
//           </button>
//         </div>
//       </nav>


//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-[#040b14] text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } transition-transform duration-300 z-50`}
//       >
//         <div className="p-6">
//           <img
//             src={krish_logo}
//             alt="Profile"
//             className=" rounded-full mx-auto h-[110px] w-[110px] border-[8px] border-[#2c2f3f]"
//           />
//           <h2 className="text-center mt-4 text-xl font-semibold ">
//             Krish Solanki
//           </h2>
//           {/* Social Media Icons */}
//           <div className="flex justify-center space-x-4 mt-4">
//             <a
//               href="#"
//               className="text-gray-400  hover:text-[aqua] transition duration-500"
//             >
//               <FaInstagram className="h-6 w-6" />
//             </a>
//             <a
//               href="#"
//               className="text-gray-400  hover:text-[aqua] transition duration-500"
//             >
//               <FaTwitter className="h-6 w-6" />
//             </a>
//             <a
//               href="#"
//               className="text-gray-400  hover:text-[aqua] transition duration-500"
//             >
//               <FaFacebook className="h-6 w-6" />
//             </a>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-[aqua] transition duration-500"
//             >
//               <FaWhatsapp className="h-6 w-6" />
//             </a>
//           </div>

//           {/* Navigation Links */}
//           <ul className="mt-8 ml-[2em] space-y-7">
//             {navigation.map((item) => (
//               <li key={item.name} className="flex items-center space-x-4">
//                 <a
//                   href={item.href}
//                   onClick={() => setSidebarOpen(false)}
//                   className="flex items-center space-x-4 text-gray-300 font-medium hover:text-[aqua] transition duration-500"
//                 >
//                   <item.icon
//                     className="h-5 w-5  text-gray-500 hover:text-aqua transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
//                   />
//                   <span>{item.name}</span>
//                 </a>
//               </li>
//             ))}
//           </ul>

//         </div>
//       </div>

//       {/* Overlay when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0  bg-opacity-50 z-40"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import { FiHome, FiUser, FiTool, FiFileText, FiGrid, FiMail } from "react-icons/fi";
import krish_logo from "../assets/krish_2.jpg";

// Navigation Links for Sidebar
const navigation = [
  { name: "Home", href: "#home", icon: FiHome },
  { name: "About", href: "#about", icon: FiUser },
  { name: "Skills", href: "#skills", icon: FiTool },
  { name: "Hackathon", href: "#hackathon", icon: FaCode },
  { name: "Resume", href: "#resume", icon: FiFileText },
  { name: "Projects", href: "#projects", icon: FiGrid },
  { name: "Contact", href: "#contact", icon: FiMail },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Desktop and Larger Screens Navbar */}
      <nav className="hidden lg:flex top-0 w-full z-10 relative items-center justify-end pr-10 h-16">
        <div className="flex gap-6 text-2xl text-gray-400">
          <a href="http://www.linkedin.com/in/krish-solanki-648219365" className="hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kakashi197" className="hover:text-white transition duration-300">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/krish01_07?igsh=MXd4ejdpajd3czFkMg==" className="hover:text-white transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </nav>

      {/* Smaller Screens Navbar with Sidebar */}
      <nav className="lg:hidden fixed top-0 right-0 w-full z-20">
        <div className="flex justify-end items-center h-16 px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-[2.5em] w-[2.5em] rounded-full" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-[2.5em] w-[2.5em] rounded-full" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#040b14] text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-6">
          <img
            src={krish_logo}
            alt="Profile"
            className="rounded-full mx-auto h-[110px] w-[110px] border-[8px] border-[#2c2f3f]"
          />
          <h2 className="text-center mt-4 text-xl font-semibold">
            Krish Solanki
          </h2>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.instagram.com/krish01_07?igsh=MXd4ejdpajd3czFkMg=="
              className="text-gray-400 hover:text-[aqua] transition duration-500"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[aqua] transition duration-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="http://www.linkedin.com/in/krish-solanki-648219365"
              className="text-gray-400 hover:text-[aqua] transition duration-500"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/kakashi197"
              className="text-gray-400 hover:text-[aqua] transition duration-500"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="mt-8 ml-[2em] space-y-7">
            {navigation.map((item) => (
              <li key={item.name} className="flex items-center space-x-4">
                <a
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center space-x-4 text-gray-300 font-medium hover:text-[aqua] transition duration-500"
                >
                  <item.icon
                    className="h-5 w-5 text-gray-500 hover:text-aqua transition-transform transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out"
                  />
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
