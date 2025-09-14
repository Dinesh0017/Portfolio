// src/data/projects/index.js
import portfolioImg from "../../assets/projectImages/PortfolioWebsite.png";
import skillLinkImg from "../../assets/projectImages/SkillLink.png";
import carRentalImg from "../../assets/projectImages/carRentalWeb.png";
import brainBuddyImg from "../../assets/projectImages/BrainBuddy.jpg";
import sciLabImg from "../../assets/projectImages/sciLab360.png";
import goGroImg from "../../assets/projectImages/GoGro.png";


const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A 3D interactive personal portfolio built with React, Tailwind CSS, and Three.js to showcase my skills and projects.",
    tech: ["React", "TailwindCSS", "Three.js", "EmailJS", "drei"],
    image: portfolioImg,
    demoLink: "http://dineshrathnasiri.netlify.app",
    githubLink: "https://github.com/Dinesh0017/Portfolio",
  },
  {
    id: 2,
    title: "SkillLink – Learning & Skill Sharing Platform",
    description:
      "Full-stack platform where learners and experts connect. Includes responsive UI, authentication, service pages, and expert listings. Designed in Figma and developed with React + Tailwind.",
    tech: ["React", "TailwindCSS", "Figma"],
    image: skillLinkImg,
    demoLink: "https://skill-link-iota.vercel.app/",
    githubLink: "https://github.com/Dinesh0017/skillLink",
    figmaLink: "https://www.figma.com/design/d4XEVitT3BXA2hHmUzWEeM/skill-link?node-id=0-1&t=cFJCPPS8Fyz6iKGb-1",
  },
  {
    id: 3,
    title: "Car Rental Web Platform",
    description:
      "Responsive car rental website with multiple pages (Home, Fleet, Contact, About), built using Next.js and Tailwind CSS. Designed in Figma.",
    tech: ["Next.js", "React", "TailwindCSS", "Figma"],
    image: carRentalImg,
    demoLink: "https://your-car-rental-demo.com",
    githubLink: "https://github.com/Dinesh0017/car-rent-platform",
  },
  {
    id: 4,
    title: "BrainBuddy – Smart Study Planner",
    description:
      "Flutter app for students to organize study schedules with smart reminders and task management.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: brainBuddyImg,
    figmaLinkLink: "https://www.figma.com/design/WIy8YljNflcyJJvwZy87ox/Study-Buddy?node-id=0-1&t=24L73VEGntpBHa9p-1",
    githubLink: "https://github.com/Dinesh0017/brain_buddy",
  },
  {
    id: 5,
    title: "SciLab360 – Virtual Science Lab",
    description:
      "An educational web app with interactive Physics, Chemistry, and ICT simulations, calculators, and puzzle games.",
    tech: ["Next.js", "React", "TailwindCSS"],
    image: sciLabImg,
    demoLink: "https://your-scilab360-demo.com",
    githubLink: "https://github.com/Dinesh0017/sci-lab",
  },
  {
    id: 6,
    title: "GoGro – Grocery List & Budget App",
    description:
      "Mobile app for managing grocery lists, budgets, and dish-based ingredient tracking with a smooth shopping experience.",
    tech: ["Figma"],
    image: goGroImg,
    demoLink: "https://www.figma.com/proto/g3c8SUTMbnjH5VcNgGVQfX/GoGro?page-id=0%3A1&node-id=9-718&starting-point-node-id=9%3A718&t=t5q20f6oC8L9IbFq-1",
    figmaLink: "https://www.figma.com/design/g3c8SUTMbnjH5VcNgGVQfX/GoGro?node-id=0-1&t=VpNvJWghTgsdD20E-1",
  },
];

export default projects;
