// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// import { RiSendPlaneFill } from 'react-icons/ri';
// import { IoMdMail } from 'react-icons/io';
// import { BsPersonFill, BsChatSquareTextFill } from 'react-icons/bs';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [alert, setAlert] = useState({ show: false, message: '', type: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // All fields validation
//     if (!formData.name || !formData.email || !formData.message) {
//       setAlert({
//         show: true,
//         message: 'Please fill all the details!',
//         type: 'error'
//       });
//       setTimeout(() => setAlert({ show: false }), 3000);
//       return;
//     }

//     // Email validation
//     if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
//       setAlert({
//         show: true,
//         message: 'Please enter a valid email address!',
//         type: 'error'
//       });
//       setTimeout(() => setAlert({ show: false }), 3000);
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const apiUrl = import.meta.env.MODE === 'development' 
//         ? 'http://localhost:5000/api/contact' 
//         : 'https://your-backend-url.vercel.app/api/contact';

//       const response = await axios.post(apiUrl, formData);

//       setAlert({
//         show: true,
//         message: response.data.message,
//         type: 'success'
//       });

//       // Form reset
//       setFormData({ name: '', email: '', message: '' });

//       // Hide alert after 3 seconds
//       setTimeout(() => {
//         setAlert({ show: false });
//       }, 3000);

//     } catch (error) {
//       setAlert({
//         show: true,
//         message: error.response?.data?.message || 'Failed to send message. Please try again later!',
//         type: 'error'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Floating bubbles data
//   const bubbles = [
//     { size: 'w-64 h-64', color: 'bg-purple-600', position: 'top-10 left-10', animation: 'animate-float1' },
//     { size: 'w-80 h-80', color: 'bg-blue-500', position: 'bottom-20 right-20', animation: 'animate-float2' },
//     { size: 'w-96 h-96', color: 'bg-pink-600', position: 'top-1/3 right-1/4', animation: 'animate-float3' },
//     { size: 'w-72 h-72', color: 'bg-indigo-600', position: 'bottom-1/4 left-1/3', animation: 'animate-float4' },
//   ];

//   return (
//     <div id="contact" className="min-h-screen flex justify-center items-center p-4 md:p-8 relative overflow-hidden">
//       {/* Alert Box */}
//       {alert.show && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ type: "spring", stiffness: 500, damping: 30 }}
//           className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-6 rounded-xl shadow-2xl ${
//             alert.type === 'success' 
//               ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' 
//               : 'bg-gradient-to-br from-red-500 to-rose-600 text-white'
//           }`}
//         >
//           <div className="flex items-center justify-center space-x-3">
//             <div className={`p-2 rounded-full ${
//               alert.type === 'success' ? 'bg-green-700' : 'bg-red-700'
//             }`}>
//               {alert.type === 'success' ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                 </svg>
//               )}
//             </div>
//             <span className="text-lg font-medium">{alert.message}</span>
//           </div>
//         </motion.div>
//       )}

//       {/* Loading Overlay */}
//       {isSubmitting && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
//         </div>
//       )}

//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br opacity-90"></div>
//         {bubbles.map((bubble, index) => (
//           <div
//             key={index}
//             className={`absolute ${bubble.size} ${bubble.color} ${bubble.position} ${bubble.animation} rounded-full filter blur-[80px] opacity-20`}
//           ></div>
//         ))}
//       </div>

//       {/* Floating Particles */}
//       {[...Array(30)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute rounded-full bg-white"
//           style={{
//             width: Math.random() * 5 + 1 + 'px',
//             height: Math.random() * 5 + 1 + 'px',
//             left: Math.random() * 100 + '%',
//             top: Math.random() * 100 + '%',
//             opacity: Math.random() * 0.3 + 0.1,
//             animation: `float ${Math.random() * 20 + 10}s linear infinite`,
//             animationDelay: `${Math.random() * 5}s`
//           }}
//         />
//       ))}

//       {/* Main Content */}
//       <motion.div
//         className="w-full max-w-4xl p-6 md:p-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {/* Decorative Elements */}
//         <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 border-purple-400 rounded-tl-2xl"></div>
//         <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-2 border-r-2 border-blue-400 rounded-br-2xl"></div>
        
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Side - Contact Info */}
//           <div className="w-full md:w-1/3 space-y-8">
//             <div>
//               <motion.h1 
//                 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 Let's Talk
//               </motion.h1>
//               <motion.p 
//                 className="text-base md:text-lg text-gray-300"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 Have a project in mind or want to discuss opportunities? I'd love to hear from you.
//               </motion.p>
//             </div>

//             <motion.div 
//               className="space-y-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-purple-500/10 rounded-full">
//                   <IoMdMail className="text-xl md:text-2xl text-purple-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-gray-400 text-xs md:text-sm">EMAIL</h3>
//                   <a href="mailto:kksolanki2325@gmail.com" className="text-white hover:text-purple-300 transition text-sm md:text-base">kksolanki2325@gmail.com</a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-blue-500/10 rounded-full">
//                   <BsPersonFill className="text-xl md:text-2xl text-blue-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-gray-400 text-xs md:text-sm">AVAILABILITY</h3>
//                   <p className="text-white text-sm md:text-base">Mon-Fri, 9AM-5PM</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-pink-500/10 rounded-full">
//                   <BsChatSquareTextFill className="text-xl md:text-2xl text-pink-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-gray-400 text-xs md:text-sm">SOCIAL</h3>
//                   <div className="flex gap-3 mt-1">
//                     <a href="https://www.linkedin.com/in/krish-solanki-648219365" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition">
//                       <FaLinkedin className="text-lg md:text-xl" />
//                     </a>
//                     <a href="https://github.com/kakashi197" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition">
//                       <FaGithub className="text-lg md:text-xl" />
//                     </a>
//                     <a href="#" className="text-gray-300 hover:text-sky-400 transition">
//                       <FaTwitter className="text-lg md:text-xl" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="w-full md:w-2/3">
//             <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <label className="block text-gray-300 text-xs md:text-sm font-medium mb-2">Your Name</label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 pl-12"
//                     placeholder="John Doe"
//                   />
//                   <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                     <BsPersonFill className="text-lg md:text-xl" />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//               >
//                 <label className="block text-gray-300 text-xs md:text-sm font-medium mb-2">Email Address</label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pl-12"
//                     placeholder="john@example.com"
//                   />
//                   <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//                     <IoMdMail className="text-lg md:text-xl" />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//               >
//                 <label className="block text-gray-300 text-xs md:text-sm font-medium mb-2">Your Message</label>
//                 <div className="relative">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="4"
//                     className="w-full px-4 py-2 md:py-3 text-sm md:text-base bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 pl-12"
//                     placeholder="Hello, I'd like to talk about..."
//                   ></textarea>
//                   <div className="absolute left-3 top-3 md:top-4 text-gray-400">
//                     <BsChatSquareTextFill className="text-lg md:text-xl" />
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-3 px-4 md:py-4 md:px-6 flex items-center justify-center gap-3 rounded-xl text-sm md:text-lg font-semibold transition-all duration-300 ${
//                     isSubmitting
//                       ? 'bg-gray-700 cursor-not-allowed'
//                       : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <RiSendPlaneFill className="text-lg md:text-xl" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </motion.div>
//             </form>
//           </div>
//         </div>
//       </motion.div>

//       {/* Global Styles for Animations */}
//       <style jsx global>{`
//         @keyframes float {
//           0% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-100px) translateX(20px); }
//           100% { transform: translateY(0) translateX(0); }
//         }
//         .animate-float1 {
//           animation: float 15s ease-in-out infinite;
//         }
//         .animate-float2 {
//           animation: float 18s ease-in-out infinite reverse;
//         }
//         .animate-float3 {
//           animation: float 20s ease-in-out infinite;
//         }
//         .animate-float4 {
//           animation: float 16s ease-in-out infinite reverse;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Contact;




import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaWhatsapp,
  FaTelegram,
  FaDiscord
} from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { RiLightbulbFlashFill } from 'react-icons/ri';

const ContactInfo = () => {
  // Enhanced contact details with more options
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "EMAIL",
      value: "kksolanki2325@gmail.com",
      link: "mailto:kksolanki2325@gmail.com",
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/30"
    },
    {
      icon: <FaPhone />,
      title: "PHONE",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      icon: <FaWhatsapp />,
      title: "WHATSAPP",
      value: "Chat instantly",
      link: "https://wa.me/919876543210",
      color: "from-green-500 to-teal-500",
      hoverColor: "hover:shadow-green-500/30"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "LOCATION",
      value: "Ahmedabad, India",
      link: "https://maps.app.goo.gl/YourLocationLink",
      color: "from-red-500 to-orange-500",
      hoverColor: "hover:shadow-red-500/30"
    },
    {
      icon: <FaLinkedin />,
      title: "LINKEDIN",
      value: "Krish Solanki",
      link: "https://www.linkedin.com/in/krish-solanki-648219365",
      color: "from-blue-600 to-blue-400",
      hoverColor: "hover:shadow-blue-500/30"
    },
    {
      icon: <FaGithub />,
      title: "GITHUB",
      value: "kakashi197",
      link: "https://github.com/kakashi197",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-500/30"
    },
    {
      icon: <FaTwitter />,
      title: "TWITTER",
      value: "@krishsolanki",
      link: "https://twitter.com/krishsolanki",
      color: "from-sky-400 to-blue-500",
      hoverColor: "hover:shadow-sky-500/30"
    },
    {
      icon: <FaTelegram />,
      title: "TELEGRAM",
      value: "@yourhandle",
      link: "https://t.me/yourhandle",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:shadow-blue-500/30"
    }
  ];

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const socialVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.1,
      transition: {
        duration: 0.6
      }
    },
    tap: {
      scale: 0.9
    }
  };

  // Floating holographic cards effect
  const FloatingCard = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: [0, -15, 0],
        opacity: 1
      }}
      transition={{
        y: {
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        },
        opacity: { duration: 0.5 }
      }}
      className="absolute w-full h-full"
    >
      {children}
    </motion.div>
  );

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      {/* Holographic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.4) 0%, transparent 40%)
          `,
          backgroundBlendMode: 'overlay'
        }}></div>

        {/* Floating holographic cards */}
        <FloatingCard delay={0.2}>
          <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-purple-600/10 rounded-xl filter blur-[80px]"></div>
        </FloatingCard>
        <FloatingCard delay={0.4}>
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-xl filter blur-[90px]"></div>
        </FloatingCard>
        <FloatingCard delay={0.6}>
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-600/10 rounded-xl filter blur-[70px]"></div>
        </FloatingCard>
      </div>

      {/* Main content */}
      <motion.div
        className="w-full max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section header with animated gradient text */}
        <div className="text-center mb-16 relative">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"
            variants={itemVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x">
              Let's Create
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x-reverse">
              Something Amazing
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I'm passionate about building innovative solutions. Reach out through any channel below - let's turn ideas into reality!
          </motion.p>
        </div>

        {/* Interactive contact cards grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {contactDetails.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-white/10 ${item.hoverColor} transition-all duration-500 group`}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              animate="visible"
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Holographic reflection effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)`
              }}></div>
              
              {/* Card content */}
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className={`p-4 mb-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <span className="text-2xl text-white">{item.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-1 uppercase tracking-wider">{item.title}</h3>
                <p className="text-white font-semibold text-lg mb-3">{item.value}</p>
                
                {/* Animated send indicator */}
                <motion.div 
                  className="mt-auto opacity-0 group-hover:opacity-100"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5
                  }}
                >
                  <IoMdSend className="text-xl text-white/80" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social links with advanced interactions */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {[
            { 
              icon: <FaLinkedin className="text-2xl" />, 
              href: "https://www.linkedin.com/in/krish-solanki-648219365",
              color: "bg-blue-600/20 hover:bg-blue-600/40",
              tooltip: "Connect on LinkedIn"
            },
            { 
              icon: <FaGithub className="text-2xl" />, 
              href: "https://github.com/kakashi197",
              color: "bg-gray-700/20 hover:bg-gray-700/40",
              tooltip: "View my GitHub"
            },
            { 
              icon: <FaTwitter className="text-2xl" />, 
              href: "https://twitter.com/krishsolanki",
              color: "bg-sky-600/20 hover:bg-sky-600/40",
              tooltip: "Follow on Twitter"
            },
            { 
              icon: <FaWhatsapp className="text-2xl" />, 
              href: "https://wa.me/919876543210",
              color: "bg-green-600/20 hover:bg-green-600/40",
              tooltip: "Message on WhatsApp"
            },
            { 
              icon: <FaTelegram className="text-2xl" />, 
              href: "https://t.me/yourhandle",
              color: "bg-blue-500/20 hover:bg-blue-500/40",
              tooltip: "Contact on Telegram"
            },
            { 
              icon: <FaDiscord className="text-2xl" />, 
              href: "#",
              color: "bg-indigo-600/20 hover:bg-indigo-600/40",
              tooltip: "Join my Discord"
            }
          ].map((social, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl ${social.color} border border-white/10 backdrop-blur-sm transition-all duration-300`}
                variants={socialVariants}
                aria-label={social.tooltip}
              >
                {social.icon}
              </motion.a>
              
              {/* Animated tooltip */}
              <motion.div 
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: 5 }}
                animate={{ y: 0 }}
              >
                {social.tooltip}
                <div className="absolute top-full left-1/2 w-2 h-2 bg-gray-800 transform -translate-x-1/2 rotate-45"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Creative call-to-action */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <RiLightbulbFlashFill className="text-xl group-hover:animate-pulse" />
            <span className="font-medium">Got an exciting project? Let's discuss!</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradient-x-reverse {
          0% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        .animate-gradient-x-reverse {
          background-size: 200% 200%;
          animation: gradient-x-reverse 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactInfo;
