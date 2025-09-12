import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Spinner */}
      <div className="w-8 h-8 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-2 text-xs text-gray-600">Loading...</p>
    </div>
  );
}
