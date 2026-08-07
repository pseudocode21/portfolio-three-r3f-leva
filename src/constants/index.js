export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him fo web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review: `Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.`,
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review: `I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.`,
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Railway Reservation System",
    desc: "A scalable full-stack railway reservation platform built using Spring Boot Microservices, ReactJS, Hibernate, and MySQL. The system consists of six independently deployable microservices for modular, maintainable, and efficient application architecture.",
    subdesc:
      "Implemented secure role-based authentication using Spring Security and JWT, developed and tested 15+ REST APIs with Postman for booking, payment, and reservation workflows, and integrated Eureka Server with OpenFeign for seamless service discovery and inter-service communication across all microservices.",
    href: "https://github.com/your-username/railway-reservation-system",
    // texture: "/textures/project/railway-demo-video.mp4",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/railway.png",
    logoStyle: {
      backgroundColor: "#0f172a",
      border: "0.2px solid #1e293b",
      boxShadow: "0px 0px 60px 0px #334155",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Spring Boot",
        path: "/assets/springboot.svg",
      },
      {
        id: 2,
        name: "ReactJS",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "MySQL",
        path: "/assets/mysql.svg",
      },
      {
        id: 4,
        name: "Hibernate",
        path: "/assets/hibernate.svg",
      }
    ],
  },
  {
    title: "DolphinAI - Multi-Modal AI Image Generation Suite",
    desc: "DolphinAI is an advanced AI-powered platform featuring three distinct generation modes: text-to-image synthesis using Stable Diffusion XL, voice-enabled image creation with Web Speech API, and intelligent image captioning powered by Salesforce BLIP. It demonstrates seamless integration of multiple AI models in a production-ready web application.",
    subdesc:
      "Built with modern vanilla JavaScript and integrated with Hugging Face Inference API, DolphinAI showcases advanced features including real-time speech recognition, drag-and-drop file uploads, customizable generation parameters (resolution, batch size, creativity), dark/light theme switching, and user authentication with persistent sessions.",
    href: "https://pseudocode21.github.io/DolphinAi---Text-to-Image-and-vice-versa/",
    // texture: "/textures/project/dolphinAI-demo-video.mp4",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/dolphinAI.png",
    logoStyle: {
      backgroundColor: "#1c2e38",
      border: "0.2px solid #091319",
      boxShadow: "0px 0px 60px 0px #3c4e57",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "JavaScript ",
        path: "/assets/javascript.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.svg",
      },
      {
        id: 3,
        name: "HTML",
        path: "/assets/html.svg",
      },
    ],
  },
  {
    title: "Employee Task Management System",
    desc: "A comprehensive task management platform that revolutionizes workplace productivity through role-based dashboards. As a modern task tracking solution, it enables administrators to create and assign tasks while employees manage their workload with real-time status updates and persistent data storage.",
    subdesc:
      "With this system, organizations can streamline task delegation and tracking, where admins assign work and employees update progress in real-time without data loss, built using React.js, Context API, and LocalStorage for seamless state management.",
    href: "https://employee-mangagement-system.vercel.app/",
    // Add your deployed link
    texture: "/textures/project/project2.mp4", // Add your demo video
    logo: "https://st4.depositphotos.com/11956860/28789/v/450/depositphotos_287891936-stock-illustration-illustration-icon-concept-sustainable-employee.jpg", // Add your logo
    logoStyle: {
      backgroundColor: "rgb(42 42 42)",
      border: " 0.2px solid rgb(3 4 3",
      boxShadow: "rgb(104 104 104 / 30%) 0px 0px 60px 0px",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : isTablet ? 0.08 : 0.1,

    deskPosition: isSmall
      ? [0, -4, 0]
      : isMobile
        ? [0.5, -4.5, 0]
        : isTablet
          ? [0.25, -5, 0]
          : [0.25, -9, 0],

    cubePosition: isSmall
      ? [4, -8, 0]
      : isMobile
        ? [5, -8, 0]
        : isTablet
          ? [5, -8, 0]
          : [11, -8.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-10, 22, 0]
      : isMobile
        ? [-15, 20, 0]
        : isTablet
          ? [-22, 18, 0]
          : [-30, 17, 0],
    targetPosition: isSmall
      ? [-5, 0, -10]
      : isMobile
        ? [-10, -10, -10]
        : isTablet
          ? [-14, -7, -10]
          : [-17, -16, -10],
  };
};

export const educationDetails = [
  {
    id: 1,
    name: "Lovely Professional University",
    pos: "Phagwara, Punjab",
    duration: "2023 - 2025",
    course: "Master of Computer Applications (MCA)",
    icon: "https://yt3.ggpht.com/a/AGF-l79xn2oqRrSOOCsFbkMg7RVgNEUWMNLrNw02dw=s900-c-k-c0xffffffff-no-rj-mo",
    animation: "victory",
  },
  {
    id: 2,
    name: "Feroz Gandhi College",
    pos: "RaeBareli, Uttar Pradesh",
    duration: "2019 - 2022",
    course:
      "Bachelor of Science (B.Sc.) in Physics, Chemistry, and Mathematics",
    icon: "https://csjmu.ac.in/wp-content/uploads/2021/12/csjm-university-logo-big.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Kendriya Vidyalaya RaeBareli",
    pos: "RaeBareli, Uttar Pradesh",
    duration: "2018 - 2019",
    course: "Senior Secondary (12th Grade) in Science (Non-Medical)",
    icon: "https://cdn.pnggallery.com/wp-content/uploads/kendriya-vidyalaya-sangathan-logo-01.png",
    animation: "salute",
  },
];
