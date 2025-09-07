import React from "react";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-gray-300 pt-3 text-center text-xs text-gray-600">
      <p>© {new Date().getFullYear()} Dinesh Rathnasiri. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-indigo-600 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
