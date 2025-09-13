import React from "react";

const skills = {
  "Frontend Frameworks": ["React", "Next.js", "React Native", "Flutter","Three.js"],
  "Programming Languages": ["JavaScript","TypeScript","Dart", "Python", "Java", "C","C#"],
  "Styling": ["Tailwind CSS", "CSS3", "Responsive Design"],
  "Backend Technologies": ["Node.js", "Java Servlets"],
  "Database": ["SQL", "Firebase","MongoDB"],
  "Tools & Platforms": ["Git","GitHub","Visual Studio Code","Android Studio","Figma","Canva","XAMPP Server","Postman","Netlify","Vercel","Illustrator"],
  "Cloud Technologies": ["Cloud Computing Fundamentals"],
};

export default function Skills() {
  return (
    <div className="text-left mb-4">
      <h2 className="text-md font-extrabold text-black/90 ">My Skills</h2>
      <hr className="border-gray-300 mb-2" />
      <div className="space-y-4 ">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="font-bold text-sm text-blue-900 mb-1">
              {category}
            </h3>
            <div className="flex flex-wrap gap-1">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs border border-gray-200 text-black px-2 py-0.5 rounded-full shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
/*<div className="mb-4 text-left">
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
    
    className="text-xs bg-black/80 text-white px-2 py-0.5 rounded-full shadow-sm" */
