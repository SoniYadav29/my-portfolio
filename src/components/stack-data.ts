import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiSass,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";

import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";

export const stackData = [
  {
    title: "FRONTEND",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: TbBrandNextjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Framer Motion", icon: SiFramer, color: "#8B5CF6" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },

  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Express.js", icon: PiBracketsCurlyBold, color: "#ffffff" },
    ],
  },

  {
    title: "DATABASE",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#00ED64" },
      { name: "Prisma", icon: TbBrandPrisma, color: "#ffffff" },
    ],
  },

  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
];
