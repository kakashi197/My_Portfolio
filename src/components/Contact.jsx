import { useState } from 'react';
import { Client, Databases, ID } from 'appwrite';

const Contact = () => {
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
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br  py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section with Glow Effect */}
        <div className="text-center mb-8 md:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
              Let's Collaborate!
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto px-2 font-light">
            Ready to kickstart an exciting project or simply have a chat? 
            <span className="block mt-2 text-purple-300 font-medium">I'm eager to connect!</span>
          </p>
        </div>

        {/* Main Content Card with Glassmorphism */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col lg:flex-row w-full">
              
              {/* Left Side - Contact Info with Modern Design */}
              <div className="w-full lg:w-1/3 bg-gradient-to-br from-gray-900 via-purple-900/90 to-gray-900 p-6 sm:p-8 md:p-10 text-white relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                      Get in Touch
                    </h2>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Prefer a direct approach? Find my details here:
                    </p>
                  </div>

                  {/* Contact Details with Hover Effects */}
                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                    {[
                      {
                        icon: (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        ),
                        label: 'Email Address',
                        value: 'kksolanki2325@gmail.com'
                      },
                      {
                        icon: (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        ),
                        label: 'Phone Number',
                        value: '+91 6354463694'
                      },
                      {
                        icon: (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        ),
                        label: 'Location',
                        value: 'Vadodara, Gujarat, India'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start group/item">
                        <div className="flex-shrink-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-2 sm:p-3 shadow-lg backdrop-blur-sm mt-1 border border-purple-500/20 group-hover/item:border-purple-400/40 transition-all duration-300">
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {item.icon}
                          </svg>
                        </div>
                        <div className="ml-3 sm:ml-4">
                          <p className="text-xs font-semibold text-purple-300">{item.label}</p>
                          <p className="text-sm sm:text-base text-white break-all hover:text-purple-300 transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Media Links with Modern Design */}
                  <div className="mt-6 sm:mt-8">
                    <h3 className="text-base sm:text-lg font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                      Find Me Here
                    </h3>
                    <div className="flex space-x-4">
                      {[
                        { href: "#", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", label: "Twitter" },
                        { href: "https://github.com/kakashi197", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", label: "GitHub" },
                        { href: "http://www.linkedin.com/in/krish-solanki-648219365", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", label: "LinkedIn" }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href={social.href} 
                          className="relative group/social"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover/social:opacity-70 transition duration-300"></div>
                          <div className="relative p-2 sm:p-3 bg-gray-800 rounded-lg border border-gray-700 group-hover/social:border-purple-500 transition-all duration-300">
                            <svg className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d={social.icon} />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form with Modern Dark Theme */}
              <div className="w-full lg:w-2/3 p-6 sm:p-8 md:p-10 bg-gray-800/50">
                {/* Status Messages with Dark Theme */}
                {submitStatus === 'success' && (
                  <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-gray-900/90 border border-green-500/30 rounded-xl backdrop-blur-sm animate-slideDown">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h3 className="text-sm sm:text-base font-bold text-green-400">Message Sent Successfully!</h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-300">Your message has been delivered. I'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-4 sm:mb-6 p-4 sm:p-5 bg-gray-900/90 border border-red-500/30 rounded-xl backdrop-blur-sm animate-slideDown">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h3 className="text-sm sm:text-base font-bold text-red-400">Submission Failed!</h3>
                        <p className="mt-1 text-xs sm:text-sm text-gray-300">Something went wrong. Please try again or reach out directly.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Form with Modern Inputs */}
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                        Full Name
                      </label>
                      <div className="relative group/input">
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="block w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 transition-all duration-300 outline-none text-sm sm:text-base text-white hover:border-gray-600"
                          placeholder="John Doe"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-500 group-hover/input:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                        Email Address
                      </label>
                      <div className="relative group/input">
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="block w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500 transition-all duration-300 outline-none text-sm sm:text-base text-white hover:border-gray-600"
                          placeholder="john@example.com"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-500 group-hover/input:text-pink-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="block w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-900/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 transition-all duration-300 outline-none text-sm sm:text-base text-white resize-none hover:border-gray-600"
                      placeholder="Tell me about your project or inquiry... I'd love to hear from you!"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full group/btn overflow-hidden rounded-xl ${
                        isSubmitting ? 'cursor-not-allowed' : ''
                      }`}
                    >
                      {/* Button Background with Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-100"></div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Button Content */}
                      <div className={`relative flex justify-center items-center px-6 sm:px-8 py-4 sm:py-5 ${
                        isSubmitting ? 'opacity-75' : ''
                      }`}>
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-sm sm:text-base font-bold text-white">Sending...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm sm:text-base font-bold text-white">Send Message</span>
                            <svg className="ml-2 h-5 w-5 text-white transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
          <p>✨ I typically respond within 24-48 hours ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;






// import { useState } from 'react';
// import { Client, Databases, ID } from 'appwrite';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const client = new Client()
//       .setEndpoint('https://cloud.appwrite.io/v1')
//       .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

//     const databases = new Databases(client);

//     try {
//       await databases.createDocument(
//         import.meta.env.VITE_APPWRITE_DATABASE_ID,
//         import.meta.env.VITE_APPWRITE_COLLECTION_ID,
//         ID.unique(),
//         formData
//       );

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', message: '' });
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div id="contact" className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//       <div className="w-full max-w-6xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-8 md:mb-16 px-2">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
//             Let's Collaborate!
//           </h1>
//           <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium max-w-2xl mx-auto px-2">
//             Ready to kickstart an exciting project or simply have a chat? Drop me a line below – I'm eager to connect!
//           </p>
//         </div>

//         {/* Main Content Card */}
//         <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full mx-auto">
//           <div className="flex flex-col lg:flex-row w-full">
            
//             {/* Left Side - Contact Info */}
//             <div className="w-full lg:w-1/3 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-6 sm:p-8 text-white">
//               <div className="mb-6 sm:mb-8">
//                 <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-wide">Get in Touch</h2>
//                 <p className="text-purple-100 text-xs sm:text-sm leading-relaxed">
//                   Prefer a direct approach? Find my details here:
//                 </p>
//               </div>

//               {/* Contact Details */}
//               <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2 sm:p-3 shadow-lg backdrop-blur-sm mt-1">
//                     <svg className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div className="ml-3 sm:ml-4">
//                     <p className="text-xs font-semibold text-purple-200">Email Address</p>
//                     <p className="text-sm sm:text-base text-white break-all">kksolanki2325@gmail.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2 sm:p-3 shadow-lg backdrop-blur-sm mt-1">
//                     <svg className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div className="ml-3 sm:ml-4">
//                     <p className="text-xs font-semibold text-purple-200">Phone Number</p>
//                     <p className="text-sm sm:text-base text-white">+91 6354463694</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 bg-white bg-opacity-20 rounded-full p-2 sm:p-3 shadow-lg backdrop-blur-sm mt-1">
//                     <svg className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div className="ml-3 sm:ml-4">
//                     <p className="text-xs font-semibold text-purple-200">Location</p>
//                     <p className="text-sm sm:text-base text-white">Vadodara, Gujarat, India</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media Links */}
//               <div className="mt-6 sm:mt-8">
//                 <h3 className="text-base sm:text-lg font-bold mb-3">Find Me Here</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-purple-200 hover:text-white transform hover:scale-110 transition-transform duration-300" aria-label="Twitter">
//                     <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="https://github.com/kakashi197" className="text-purple-200 hover:text-white transform hover:scale-110 transition-transform duration-300" aria-label="GitHub">
//                     <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="http://www.linkedin.com/in/krish-solanki-648219365" className="text-purple-200 hover:text-white transform hover:scale-110 transition-transform duration-300" aria-label="LinkedIn">
//                     <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Contact Form */}
//             <div className="w-full lg:w-2/3 p-6 sm:p-8">
//               {/* Status Messages */}
//               {submitStatus === 'success' && (
//                 <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 shadow-md flex items-start">
//                   <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <div>
//                     <span className="font-bold text-sm sm:text-base">Message Sent!</span>
//                     <p className="mt-1 text-xs sm:text-sm">Your message has been successfully delivered. I'll get back to you as soon as possible.</p>
//                   </div>
//                 </div>
//               )}

//               {submitStatus === 'error' && (
//                 <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 shadow-md flex items-start">
//                   <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <div>
//                     <span className="font-bold text-sm sm:text-base">Submission Failed!</span>
//                     <p className="mt-1 text-xs sm:text-sm">Oops! Something went wrong while sending your message. Please try again or reach out directly.</p>
//                   </div>
//                 </div>
//               )}

//               {/* Contact Form */}
//               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
//                 <div>
//                   <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="text"
//                       id="name"
//                       value={formData.name}
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                       className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 transition duration-300 shadow-sm outline-none text-sm sm:text-base"
//                       placeholder="Your full name"
//                       required
//                     />
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                       <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500 placeholder-gray-400 transition duration-300 shadow-sm outline-none text-sm sm:text-base"
//                       placeholder="your@example.com"
//                       required
//                     />
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                       <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">
//                     Your Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400 transition duration-300 shadow-sm outline-none text-sm sm:text-base resize-none"
//                     placeholder="Tell me about your project or inquiry..."
//                     required
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className={`w-full flex justify-center items-center px-4 sm:px-6 py-3 text-sm sm:text-base font-extrabold rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-md ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg transform hover:-translate-y-0.5'}`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         <span className="text-xs sm:text-sm">Sending your message...</span>
//                       </>
//                     ) : (
//                       <span className="text-xs sm:text-sm">Send Your Message</span>
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
