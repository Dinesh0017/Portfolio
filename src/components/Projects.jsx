import React from "react";

export default function Projects({ setPage }) {
  const projects = [
    { id: 1, title: "Portfolio Website", demoLink: "http://dineshrathnasiri.netlify.app" },
    { id: 2, title: "SkillLink – Learning & Skill Sharing Platform", demoLink: "https://your-skilllink-demo.com" },
    { id: 3, title: "Car Rental Web Platform", demoLink: "https://your-car-rental-demo.com" },
  ];

  return (
    <div className="mb-6 text-left">
      <h2 className="text-md font-bold text-black">Projects</h2>
      <hr className="border-gray-300 mb-3" />

      <ul className="text-xs space-y-2">
        {projects.map((project) => (
          <li key={project.id}>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {project.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Instead of router → use setPage */}
      <div className="">
        <button
          onClick={() => setPage("projects")}
          className="mt-2 cursor-pointer px-4 text-xs py-1 bg-gradient-to-r from-blue-900 via-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        >
          More Projects...
        </button>
      </div>
    </div>
  );
}
