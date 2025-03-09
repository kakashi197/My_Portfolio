// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';


// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/contact', formData);
//       setSuccessMessage(response.data.message);
//       setFormData({ name: '', email: '', message: '' }); // Reset form
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div id='contact' className="min-h-screen bg-gradient-to-br flex justify-center items-center p-8">
//       <motion.div
//         className="w-full max-w-3xl p-6 rounded-lg shadow-lg"
//         initial={{ opacity: 0, y: 100 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="text-center text-white mb-8">
//           <motion.h1
//             className="text-4xl font-extrabold"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 1 }}
//           >
//             Contact Me
//           </motion.h1>
//           <motion.p
//             className="text-lg mt-4 text-gray-300"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//           >
//             I'd love to hear from you! Feel free to reach out.
//           </motion.p>
//         </div>

//         <motion.form
//           onSubmit={handleSubmit}
//           className="form-contact  mt-8 p-6 rounded-lg shadow-md"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 1 }}
//         >
//           <div className="space-y-4">
//             <div className="flex flex-col">
//               <label htmlFor="name" className="text-white mb-2">
//                 Name
//               </label>
//               <motion.input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 transition duration-300"
//                 whileFocus={{ scale: 1.05 }}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-white mb-2">
//                 Email
//               </label>
//               <motion.input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 transition duration-300"
//                 whileFocus={{ scale: 1.05 }}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="message" className="text-white mb-2">
//                 Message
//               </label>
//               <motion.textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 transition duration-300"
//                 rows="4"
//                 whileFocus={{ scale: 1.05 }}
//               />
//             </div>

//             <motion.button
//               type="submit"
//               className="submite-button   w-full py-3 mt-4 bg-[#00d0ff] text-white rounded-lg shadow-lg  transition duration-300"
//               whileHover={{ scale: 1.05 }}
//             >
//               Send Message
//             </motion.button>
//             {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
//           </div>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;








import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setSuccessMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-black relative overflow-hidden">
      {/* Floating Blur Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 blur-3xl opacity-20 rounded-full animate-pulse"></div>
      
      <motion.div
        className="w-full max-w-2xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg shadow-lg relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">Contact Me</h1>
        <p className="text-lg text-gray-300 text-center mb-6">Let's work together! Drop a message below.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-lg mb-2">Name</label>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-300"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-white text-lg mb-2">Email</label>
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div>
            <label className="block text-white text-lg mb-2">Message</label>
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-900 text-white rounded-md border border-gray-600 focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-300"
              rows="4"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaPaperPlane /> Send Message
          </motion.button>

          {successMessage && <p className="text-green-400 mt-4 text-center">{successMessage}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;