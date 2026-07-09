import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
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
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "CSS", icon: SiCss, color: "#68A063" },
      { name: "HTML", icon: SiHtml5, color: "#8B5CF6" },
    ],
  },

  {
    title: "BACKEND",
    skills: [{ name: "Node.js", icon: SiNodedotjs, color: "#68A063" }],
  },

  {
    title: "DATABASE",
    skills: [{ name: "MongoDB", icon: SiMongodb, color: "#00ED64" }],
  },

  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Github", icon: SiGithub, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#FF9900" },
    ],
  },
];
