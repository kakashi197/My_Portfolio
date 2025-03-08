import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaHome,
  FaUser,
  FaTools,
  FaFileAlt,
  FaProjectDiagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";

// Navigation Links for Sidebar
const navigation = [
  { name: "Home", href: "#", icon: FaHome },
  { name: "About", href: "#about", icon: FaUser },
  { name: "Skills", href: "#skills", icon: FaTools },
  { name: "Resume", href: "#resume", icon: FaFileAlt },
  { name: "Projects", href: "#projects", icon: FaProjectDiagram },
  { name: "Contact", href: "#contact", icon: FaEnvelope },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Desktop and Larger Screens Navbar */}
      <nav className="hidden lg:block  fixed w-full ">
        <div className="flex items-center justify-between h-16 px-4">
          <div>
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <div className="m-8 ml-24 relative left-[-22vh] flex items-center justify-center gap-4 text-2xl ">
            <FaLinkedin className="text-gray-400 hover:text-white" />
            <FaGithub className="text-gray-400 hover:text-white" />
            <FaTwitter className="text-gray-400 hover:text-white" />
            <FaInstagram className="text-gray-400 hover:text-white" />
          </div>
        </div>
      </nav>

      {/* Smaller Screens Navbar with Sidebar */}
      <nav className="lg:hidden  fixed w-full ">
        <div className="flex items-center justify-between h-16 px-4">
          <div>
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white relative -left-[4vh]"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#040b14] text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-50`}
      >
        <div className="p-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className=" rounded-full mx-auto h-[110px] w-[110px] border-[8px] border-[#2c2f3f]"
          />
          <h2 className="text-center mt-4 text-xl font-semibold ">
            Krish Solanki
          </h2>
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-500 hover:custom-shadow-effect"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-500 hover:custom-shadow-effect"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-500 hover:custom-shadow-effect"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-500 hover:custom-shadow-effect"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="mt-8 ml-[2em] space-y-4">
            {navigation.map((item) => (
              <li key={item.name} className="flex items-center space-x-4    ">
                <item.icon className="h-5 w-5 text-[#6f7180]" />
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
