import myImg from "../assets/myPhoto.jpg";

export default function HeroSection() {
  return (
    <div className="mb-4 flex flex-col items-center">
      {/* Name with Gradient */}
      <h1 className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        Dinesh Rathnasiri
      </h1>

      {/* Animated Tagline */}
      <p className="text-gray-700 text-[10px] animate-pulse mt-1">
        Frontend Developer & UI/UX Designer
      </p>

      {/* Profile Image with Modern Frame */}
      <div className="mt-1 relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 blur-md opacity-50"></div>
        <img
          src={myImg}
          alt="Profile"
          className="relative w-20 h-20 rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Accent line */}
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-full mt-2"></div>

      <div className="mt-3 flex flex-col items-center animate-bounce">
        {/* Arrow */}
        <svg
          className="w-6 h-6 text-gray-400"
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
    </div>
  );
}
