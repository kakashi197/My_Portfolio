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
import { useState } from 'react';
import { Client, Databases, ID } from 'appwrite';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

    const databases = new Databases(client);

    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        ID.unique(),
        formData
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Have a project in mind or want to say hello? Fill out the form below and I'll get back to you soon.
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Contact Info */}
            <div className="md:w-1/3 bg-gradient-to-b from-indigo-600 to-blue-600 p-8 text-white">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-blue-100">
                  Fill out the form or reach out through these channels:
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-2">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-200">Email</p>
                    <p className="text-sm text-white">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-2">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-200">Phone</p>
                    <p className="text-sm text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-2">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-200">Location</p>
                    <p className="text-sm text-white">123 Main St, City</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-200 hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="md:w-2/3 p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Thank you!</span>
                  </div>
                  <p className="mt-1 text-sm">Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Oops!</span>
                  </div>
                  <p className="mt-1 text-sm">Something went wrong. Please try again later.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
                      placeholder="John Doe"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
                      placeholder="you@example.com"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 transition duration-200"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center items-center px-6 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

