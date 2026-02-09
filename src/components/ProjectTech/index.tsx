import { FaReact as ReactIcon } from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";
import { TbBrandFramerMotion as MotionIcon } from "react-icons/tb";
import {
  SiTypescript as TypescriptIcon,
  SiVite as ViteIcon,
} from "react-icons/si";

// 1. Definimos as chaves permitidas para evitar erros de tipagem
const imageMap = {
  react: <ReactIcon />,
  tailwind: <TailwindIcon />,
  motion: <MotionIcon />,
  vite: <ViteIcon />,
  typescript: <TypescriptIcon />,
};

type ProjectTechProps = {
  tech: keyof typeof imageMap;
};

export function ProjectTech({ tech }: ProjectTechProps) {
  const Icon = imageMap[tech];

  return (
    <div className="flex items-center justify-center gap-2 py-1 px-3 border border-zinc-800/40 rounded-full">
      {Icon}
      <span className="capitalize text-sm">{tech}</span>
    </div>
  );
}
