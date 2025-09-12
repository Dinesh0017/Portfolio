import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Projects from "../components/Projects";

export default function HomePage() {
  const [page, setPage] = useState("home");

  const renderPageContent = () => {
    switch (page) {
      case "home":
        return (
          <>
            <Header />
            <Projects setPage={setPage} />
          </>
        );
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <Header />;
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow text-center w-[340px] h-[220px] mt-10 overflow-y-auto">
      <Navbar setPage={setPage} />
      <div className="mt-1">{renderPageContent()}</div>
      <Footer />
    </div>
  );
}
