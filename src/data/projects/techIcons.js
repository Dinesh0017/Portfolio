import { FaReact, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiThreedotjs,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiSqlite,
} from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-blue-500 text-lg" />,
  Tailwind: <SiTailwindcss className="text-sky-400 text-lg" />,
  "Three.js": <SiThreedotjs className="text-black text-lg" />,
  "Next.js": <SiNextdotjs className="text-gray-800 text-lg" />,
  Figma: <FaFigma className="text-pink-500 text-lg" />,
  Flutter: <SiFlutter className="text-blue-400 text-lg" />,
  Dart: <SiDart className="text-blue-600 text-lg" />,
  Firebase: <SiFirebase className="text-yellow-500 text-lg" />,
  SQLite: <SiSqlite className="text-indigo-700 text-lg" />,
};

export default techIcons;
