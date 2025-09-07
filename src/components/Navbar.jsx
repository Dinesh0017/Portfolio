import React from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar({ setPage }) {
  return (
    <nav className="flex justify-around bg-blue-950 text-white rounded text-[9px] p-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
}
