import React from "react";
import projects from "../data/projects/index";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div className="p-2">
      <h2 className="text-md font-bold text-black mb-2 text-left">
        My Projects
      </h2>
      <div className=" mt-2  ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white mb-4 shadow-lg rounded-lg overflow-hidden border  border-gray-200  hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div className="relative">
              <div className="flex justify-center items-center p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-28 w-auto object-contain "
                />
              </div>

              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-800 text-white px-3 py-1 rounded-sm text-xs flex items-center gap-1 hover:bg-indigo-900"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className=" text-indigo-600 text-[10px] px-2 py-0.5 rounded-full border-1 border-indigo-100 "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center mt-4 text-xs">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-600 hover:text-indigo-600 transition"
                >
                  <FaGithub className="text-sm" />
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
