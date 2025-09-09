import React from "react";
import projects from "../data/projects/index";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-indigo-600 mb-3 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-blue-200 shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-28 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-[10px] text-gray-600 mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-600 text-[9px] px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px]">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-600 hover:underline"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:underline"
                >
                  <FaGithub className="text-xs" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
