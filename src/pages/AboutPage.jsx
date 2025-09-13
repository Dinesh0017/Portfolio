import React from "react";

export default function AboutPage() {
  return (
    <div id="about" className="text-left mt-2">
      {/* Heading */}
      <h1 className="text-lg font-bold text-black">About Me</h1>
      <hr className="border-gray-400 mb-2" />
      {/* Professional Summary */}
      <p className="text-sm text-gray-700 leading-relaxed">
        Hi, I’m <span className="font-semibold text-purple-700">Dinesh Rathnasiri</span>,
        a detail-oriented Computer Science undergraduate at
        <span className="font-medium"> NSBM Green University</span>, currently in my 3rd year (B.Sc. Hons in Computer Science).
        I specialize in <span className="text-indigo-600">Frontend Development</span> and
        <span className="text-indigo-600"> UI/UX Design</span>, with hands-on experience in
        React, Next.js, Tailwind CSS, Flutter,React Native and Figma.
      </p>

      <p className="text-sm text-gray-700 leading-relaxed">
        I’m passionate about building responsive, user-friendly, and visually engaging digital experiences
        that combine <span className="font-medium">clean code</span> with
        <span className="font-medium"> modern design principles</span>.
        My goal is to apply my skills in professional projects and continue learning cutting-edge technologies.
      </p>

      {/* Education */}
      <div>
        <h2 className="text-sm font-semibold text-blue-900 mt-2">Education</h2>
        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
          <li>B.Sc. (Hons) in Computer Science – NSBM Green University (Expected 2026)</li>
          <li>G.C.E. A/L ICT Stream – Pilawala National School, Kandy (2020)</li>
        </ul>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-sm font-semibold text-blue-900 mt-2">Certifications</h2>
        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
          <li>Google UX Design Professional Certificate (2025)</li>
          <li>Developing Front-End Apps with React – IBM (2024)</li>
          <li>Getting Started with Git and GitHub – IBM (2024)</li>
          <li>HTML, CSS, and JavaScript – Johns Hopkins University (2024)</li>
          <li>Introduction to Cloud Computing – IBM (2023)</li>
          <li>Python for Beginners – University of Moratuwa (2023)</li>
        </ul>
      </div>

      {/* Extra */}
      <div>
        <h2 className="text-sm font-semibold text-blue-900 mt-2">Extracurricular Activities</h2>
        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 mt-1">
          <li>National Cadet Corps – Rantembe Training Centre (2018)</li>
          <li>Western Band – Pilawala National School <br />(2015 – 2017)</li>
        </ul>
      </div>
    </div>
  );
}
