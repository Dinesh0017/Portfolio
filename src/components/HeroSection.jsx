import myImg from "../assets/myPhoto.jpg";
import resumePDF from "../assets/resume/Dinesh_Rathnasiri_Resume.pdf"; // 👈 your resume file

export default function HeroSection() {
  return (
    <div
      className="mb-4 flex flex-col items-center  bg-cover bg-center "
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-1">
        {/* Name with Gradient */}
        <h1 className="text-2xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-600 to-pink-600">
          Dinesh Rathnasiri
        </h1>

        {/* Animated Tagline */}
        <p className="text-gray-800 text-[12px] animate-pulse ">
          Frontend Developer & UI/UX Designer
        </p>

        {/* Profile Image Frame */}
        <div className="mt-2 relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-900 via-purple-600 to-pink-600 blur-md opacity-50"></div>
          <img
            src={myImg}
            alt="Profile"
            className="relative w-24 h-24 rounded-full border-2 border-white object-cover"
          />
        </div>
        {/* Down Arrow */}
        <div className="mt-1 ml-1 flex flex-col items-center animate-bounce">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 25"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Accent line */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-900 via-purple-600 to-pink-600 rounded-full mt-1"></div>

        {/* Resume Download Button */}
        <a
          href={resumePDF}
          download="Dinesh_Rathnasiri_Resume.pdf"
          className="mt-2 px-4 text-sm py-1 bg-gradient-to-r from-blue-900 via-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
