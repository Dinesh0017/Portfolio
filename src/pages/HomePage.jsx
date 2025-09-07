import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div className="bg-white p-4 rounded shadow text-center w-85 h-55 mt-10 overflow-y-auto">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}