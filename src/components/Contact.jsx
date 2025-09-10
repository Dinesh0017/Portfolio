import React from "react";

export default function Contact() {
  return (
    <div className="text-left">
      <h2 className="font-semibold text-gray-800 mb-2">Contact</h2>
      <p className="text-sm">
        📧 Email: <a href="mailto:dineshrathnasiri017@gmail.com" className="text-indigo-600 hover:underline">dineshrathnasiri017@gmail.com</a>
      </p>
      <p className="text-sm">📍 Location: Colombo, Sri Lanka</p>
      <div className="mt-2 flex gap-2">
        <a href="https://linkedin.com/in/dinesh-rathnasiri" className="text-indigo-600 hover:underline text-sm">LinkedIn</a>
        <a href="https://github.com/Dinesh0017" className="text-indigo-600 hover:underline text-sm">GitHub</a>
      </div>
    </div>
  );
}
