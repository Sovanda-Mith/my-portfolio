import { BsCircleFill } from "react-icons/bs";
import { ILanguage, IOs, ISkill, ITool } from "./type";

export const programLanguages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "React JS",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "HTML/CSS",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "70%",
  },
];

export const tools: ITool[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "60%",
  },
];

export const languages: ILanguage[] = [
  {
    name: "Khmer",
    level: "Native",
  },
  {
    name: "English",
    level: "C1(IELTS Band 7.5)",
  },
];

export const OSystems: IOs[] = [
  {
    Icon: BsCircleFill,
    name: "Windows",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "60%",
  },
  {
    Icon: BsCircleFill,
    name: "MAC OS",
    level: "50%",
  },
];
