import { FaReact, FaGitAlt, FaVuejs, FaLaravel } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiPhp,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const tools = [
  {
    name: "Laravel",
    icon: <FaLaravel className="text-red-500 text-4xl" />,
    level: 80,
  },
  {
    name: "Nest.js",
    icon: <SiNestjs className="text-white text-4xl" />,
    level: 70,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    level: 70,
  },
  {
    name: "Vue.js",
    icon: <FaVuejs className="text-green-500 text-4xl" />,
    level: 80,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white text-4xl" />,
    level: 70,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-300 text-4xl" />,
    level: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-4xl" />,
    level: 75,
  },
  {
    name: "PHP",
    icon: <SiPhp className="text-blue-500 text-4xl" />,
    level: 75,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500 text-4xl" />,
    level: 70,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500 text-4xl" />,
    level: 70,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-4xl" />,
    level: 80,
  },
];

export default function TechStack() {
  return (
    <div className="bg-neutral-900 py-12 px-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tools.map((tech, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-2xl p-5 shadow-md hover:scale-105 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {tech.icon}
              <h3 className="text-xl font-semibold">{tech.name}</h3>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-3">
              <div
                className="bg-cyan-500 h-3 rounded-full"
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
            <div className="text-right text-sm mt-1">{tech.level}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
