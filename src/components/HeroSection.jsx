import myImg from "../assets/myPhoto.jpg"

export default function HeroSection() {
  return (
    <div className="mb-4 flex flex-col items-center">
      {/* Name */}
      <h1 className="text-xl font-bold text-blue-950 text-center">
        Dinesh Rathnasiri
      </h1>

      {/* Roles */}
      <p className="text-gray-700 mt-1 text-xs text-center">
        Frontend Developer & UI/UX Designer
      </p>

      {/* Profile Image */}
      <div className="mt-2">
        <img
          src={myImg}
          alt="Profile"
          className="w-16 h-16 rounded-sm object-cover "
        />
      </div>
    </div>
    );
    }
