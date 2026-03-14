import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/foodDeliveryApp.png";
import project3 from "../assets/projects/expenceTracker.png";
import project4 from "../assets/projects/task-manager.png";
import project5 from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer with a strong interest in building robust and scalable web applications. I enjoy working with modern technologies like React, Tailwind CSS, Node.js, Express, and MongoDB to create efficient and user-friendly solutions.I love turning ideas into real-world projects and continuously improving my skills by learning new technologies and building practical applications. My goal is to create impactful digital experiences and contribute to innovative projects while growing as a developer.`;

export const ABOUT_TEXT = `Hello! I'm Jyoti, a Full-Stack Developer passionate about building modern and responsive web applications. I specialize in technologies like React, Tailwind CSS, Node.js, Express, and MongoDB to develop complete full-stack solutions.I enjoy transforming ideas into real-world applications and solving problems through clean, efficient code. I’m always exploring new technologies and continuously improving my skills by building projects and learning modern development practices.My goal is to create impactful digital experiences while growing as a developer and contributing to innovative projects.`;

export const EXPERIENCES = [
  //   {
  //     year: "2023 - Present",
  //     role: "Senior Full Stack Developer",
  //     company: "Google Inc.",
  //     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //     technologies: ["Javascript", "React.js", "mongoDB"],
  //   },
  //   {
  //     year: "2022 - 2023",
  //     role: "Frontend Developer",
  //     company: "Adobe",
  //     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //     technologies: ["HTML", "CSS", "mySQL"],
  //   },
  //   {
  //     year: "2021 - 2022",
  //     role: "Full Stack Developer",
  //     company: "Facebook",
  //     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  //   },
  //   {
  //     role: "Software Engineer",
  //     company: "Paypal",
  //     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  //   },
];

export const PROJECTS = [
  {
    title: "Hotel-Booking-app",
    image: project1,
    link: "https://myhome-plum.vercel.app/",
    description:
      "Built a full-stack hotel booking web application using React, Tailwind CSS, Node.js, Express.js, and MongoDB.Implemented user authentication, dashboards, hotel/room listing, search with filters, availability checking, and online payment flow. Gained hands-on experience in REST API development, database integration, and frontend-backend connectivity",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind", "clerk"],
  },
  {
    title: "Food-Delivery-app",
    image: project2,
    link: "https://jyoti-food-delivery-app.netlify.app/",
    description:
      "Built a responsive Food Delivery Web Application using React.js and Tailwind CSS. Implemented cart and state management with Redux Toolkit, including add/remove items, quantity control, and real-time price calculation. Enhanced user experience with hover effects and toast notifications using React Toastify.",
    technologies: ["React", "Tailwind", "Tostify"],
  },
  {
    title: "Expence-Tracker-app",
    image: project3,
    link: "https://jsexpencetracker.netlify.app/",
    description:
      "Designed and developed an Expense Tracker that helps users monitor and manage expenses effectively. Used vanilla JavaScript for logic, HTML/CSS for responsive UI, and Toastify for smooth real-time alerts, delivering a clean and interactive user experience suitable for production use.",
    technologies: ["HTML", "CSS", "Java Script", "Toastify"],
  },
  {
    title: "Portfolio-website",
    image: project5,
    link: "https://jyoti-portfolio11.netlify.app/",
    description:
      "Built a responsive personal portfolio website using HTML, CSS, and JavaScript to showcase projects, skills, and experience. The website includes a clean and modern UI, smooth navigation, and interactive elements to enhance user experience. ",
    technologies: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "Task-Managing-application",
    image: project4,
    link: "https://todo-appra.netlify.app/",
    description:
      "Built a responsive To-Do app with full CRUD functionality (add, edit, delete tasks). Implemented circular (percentage) and linear progress bars to track task completion. Added real-time updates with automatic strike-through for completed tasks.",
    technologies: ["react", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Patna Bihar",
  phoneNo: "",
  email: "kumarijyoti12839@gmail.com",
};
