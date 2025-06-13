import project1 from "../assets/projects/Online notes app.png";
import project2 from "../assets/projects/Weather App.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const experiences = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Techinfinity",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Techinfinity",
    description: `Designed and developed dynamic user interfaces for web applications, ensuring seamless integration of frontend components with backend APIs built using Django and MySQL.`,
    technologies: ["HTML", "CSS", "DJANGO", "JS", "mySQL"],
  },
  // Add other experiences as needed
];

export const PROJECTS = [
  {
    title: "Online Notes App",
    image: project1,
    description:
      "A secure web application for storing and organizing important notes/documents with user authentication and cloud storage.",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/kakashi197/Online-Note-App",
    liveDemo: "https://kakashi197.github.io/Online-Note-App/",
  },
  {
    title: "weather App",
    image: project2,
    description:
      "An App that shows Diferent Diferent Cieties Wathers.",
    technologies: ["HTML", "CSS", "JS"],
    github: "https://github.com/kakashi197/WeatherApp",
    liveDemo: "https://kakashi197.github.io/WeatherApp/",
  },
  

];

export const CONTACT = {
  address: "sector-26, Gandhinagar, Gujarat, India",
  phoneNo: "+91 6354463694",
  email: "kksolanki@gmail.com",
};


export const resumeData = {
  personalInfo: {
    name: "Krish Solanki",
    title: "Computer Engineer | Web Developer | Programmer",
    phone: "+91 6354463694",
    email: "kksolanki2325@gmail.com",
    linkedIn: "www.linkedin.com/in/krish-solanki-648219365",
    github: "https://github.com/kakashi197",
  },
  education: [
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Gandhinagar",
      year: "2021",
      percentage: "7.15 SPI (1st Semester), 8.00 SPI (2nd Semester), 7.60 SPI (3rd Semester), 8.27 SPI (4th Semester)",
    },
    {
      degree: "10th Standard",
      institution: "Sharada English School",
      year: "2018",
      percentage: "80%",
    },
  ],
  skills: [
    {
      Frontend: "HTML, CSS, JavaScript, React.js",
      Backend: "Django, Python, Node.js, MongoDB, Java (Basics)",
    },
  ],
  experience: [
    {
      role: "Frontend Intern at TechInfinity",
      description: "Learned HTML, CSS, and JavaScript during a 15-day internship focused on frontend development.",
    },
    {
      role: "Backend Intern at TechInfinity",
      description: "Worked on backend technologies including HTML, CSS, JS, Python, MySQL, and Django during a 45-day internship.",
    },
    {
      role: "Personal Projects",
      description: "Developed a portfolio website and various web applications, including a weather app using HTML, CSS, and JavaScript.",
    },
  ],
  certifications: [
    "Hackathon Project Winner",
  ],
};








// this my hackthon informations 

export const HACKATHON_INFO = {
  title: "🚀 B&B Institute Hackathon 2024",
  description: "Participated in a 48-hour intensive coding competition during my Diploma 4th semester, where we developed a complete Movers & Packers web application.",
  details: {
    date: "January 20-22, 2024",
    location: "B & B Institute, Anand, Vallabh Vidyanagar",
    team: "3 members team",
    project: "Movers & Packers Website",
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP", "MySQL"],
      design: ["Figma", "Adobe XD"]
    },
    achievements: [
      "Completed all assigned tasks through 3 rounds",
      "Won 3rd prize for innovative design and functionality",
      "Implemented real-world logistics features"
    ],
    certificate: {
      description: "Awarded for outstanding performance in development and problem-solving",
      image: "../assets/Hack1.jpg"
    }
  }
};
