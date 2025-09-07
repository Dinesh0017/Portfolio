import React from "react";

const skills = ["React", "Three.js", "Tailwind CSS", "Node.js", "Express", "Figma"];

export default function PortfolioSkills() {
  return (
    <div className="mb-4 text-left">
      <h2 className="font-semibold text-gray-800 mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
