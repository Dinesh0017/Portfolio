import React from "react";

import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HeroSection from "./HeroSection";


export default function Header() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
