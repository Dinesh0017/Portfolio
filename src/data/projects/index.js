// src/data/projects/index.js
import portfolioImg from "../../assets/projectImages/PortfolioWebsite.png";
import skillLinkImg from "../../assets/projectImages/SkillLink.png";
import carRentalImg from "../../assets/projectImages/carRentalWeb.png";
import brainBuddyImg from "../../assets/projectImages/BrainBuddy.jpg";
import sciLabImg from "../../assets/projectImages/SciLab360.png";
import goGroImg from "../../assets/projectImages/GoGro.png";


const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A 3D interactive personal portfolio built with React, Tailwind CSS, and Three.js to showcase my skills and projects.",
    tech: ["React", "Tailwind", "Three.js"],
    image: portfolioImg,
    demoLink: "https://your-portfolio-link.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    id: 2,
    title: "SkillLink – Learning & Skill Sharing Platform",
    description:
      "Full-stack platform where learners and experts connect. Includes responsive UI, authentication, service pages, and expert listings. Designed in Figma and developed with React + Tailwind.",
    tech: ["React", "Tailwind", "Figma"],
    image: skillLinkImg,
    demoLink: "https://your-skilllink-demo.com",
    githubLink: "https://github.com/yourusername/skilllink",
  },
  {
    id: 3,
    title: "Car Rental Web Platform",
    description:
      "Responsive car rental website with multiple pages (Home, Fleet, Contact, About), built using Next.js and Tailwind CSS. Designed in Figma.",
    tech: ["Next.js", "React", "Tailwind", "Figma"],
    image: carRentalImg,
    demoLink: "https://your-car-rental-demo.com",
    githubLink: "https://github.com/yourusername/car-rental",
  },
  {
    id: 4,
    title: "BrainBuddy – Smart Study Planner",
    description:
      "Flutter app for students to organize study schedules with smart reminders and task management.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: brainBuddyImg,
    demoLink: "https://your-brainbuddy-demo.com",
    githubLink: "https://github.com/yourusername/brainbuddy",
  },
  {
    id: 5,
    title: "SciLab360 – Virtual Science Lab",
    description:
      "An educational web app with interactive Physics, Chemistry, and ICT simulations, calculators, and puzzle games.",
    tech: ["Next.js", "React", "Tailwind", "Three.js"],
    image: sciLabImg,
    demoLink: "https://your-scilab360-demo.com",
    githubLink: "https://github.com/yourusername/scilab360",
  },
  {
    id: 6,
    title: "GoGro – Grocery List & Budget App",
    description:
      "Mobile app for managing grocery lists, budgets, and dish-based ingredient tracking with a smooth shopping experience.",
    tech: ["Flutter", "Dart", "SQLite"],
    image: goGroImg,
    demoLink: "https://your-gogro-demo.com",
    githubLink: "https://github.com/yourusername/gogro",
  },
];

export default projects;
