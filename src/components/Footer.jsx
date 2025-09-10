import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-gray-300 pt-3 text-center text-xs text-gray-600">
      <p>
        © {new Date().getFullYear()} Dinesh Rathnasiri. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-2 text-2xl">
        <a
          href="https://github.com/Dinesh0017"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition-colors"
        >
          <FaGithub className="text-sm text-black"/>
        </a>
        <a
          href="https://linkedin.com/in/dinesh-rathnasiri"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition-colors"
        >
          <FaLinkedin className="text-sm text-black" />
        </a>
        <a
          href="mailto:dineshrathnasiri017@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition-colors"
        >
          <FaEnvelope className="text-sm text-black"/>
        </a>
      </div>
    </footer>
  );
}
