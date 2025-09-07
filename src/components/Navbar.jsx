import React from "react";

// Array of navigation items
const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-blue-950 rounded-md mb-4 p-2 text-white text-xs">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
