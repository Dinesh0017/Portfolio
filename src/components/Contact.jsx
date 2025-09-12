import React from "react";

export default function Contact() {
  return (
    <div className="text-left">
      <h2 className="text-md font-bold text-black ">Contact</h2>
      <hr className="border-gray-300 mb-2" />
      <p className="text-sm text-black">
        📧 Email: <a href="mailto:dineshrathnasiri017@gmail.com" className="text-indigo-600 hover:underline">dineshrathnasiri017@gmail.com</a>
      </p>
      <p className="text-sm text-black">📍 Location: Colombo, Sri Lanka</p>
      <div className="mt-2 flex gap-2">
        <a href="https://linkedin.com/in/dinesh-rathnasiri" className="text-indigo-600 hover:underline text-sm">LinkedIn</a>
        <a href="https://github.com/Dinesh0017" className="text-indigo-600 hover:underline text-sm">GitHub</a>
      </div>
    </div>
  );
}
