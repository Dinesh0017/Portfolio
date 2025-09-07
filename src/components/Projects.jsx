import React from "react";

const projects = [
  { name: "3D Portfolio Site", link: "#" },
  { name: "E-commerce App", link: "#" },
  { name: "Flutter CRUD App", link: "#" },
];

export default function PortfolioProjects() {
  return (
    <div className="mb-4 text-left">
      <h2 className="font-semibold text-gray-800 mb-2">Projects</h2>
      <ul className="text-sm space-y-1">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.link}
              className="text-indigo-600 hover:underline"
            >
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

