import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function HeroPage() {
  return (
    <div className="bg-white p-4 rounded shadow text-center w-85 h-55 mt-10 overflow-y-auto">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
