import { motion } from "motion/react";
import domHyginoMockup from "../assets/mockups/domhygino.png";
import domHyginoMenuMockup from "../assets/mockups/domhygino-menu.png";
import classmindMockup from "../assets/mockups/classmind.png";
import classmindMockupAvaliations from "../assets/mockups/classmind2.png";
import { useState } from "react";
import ProjectTech from "./ProjectTech";
import Button from "./Button";
import { ArrowRight, LucideGithub } from "lucide-react";
import type { ProjectTechKey } from "./ProjectTech";

type ProjectCardProps = {
  project: "Dom Hygino" | "Classmind";
};
interface projectsDataProps {
  title: string;
  num: string;
  description: string;
  type: string;
  techs: ProjectTechKey[];
}

const projectsData: { [key: string]: projectsDataProps } = {
  "Dom Hygino": {
    title: "Dom Hygino",
    num: "01",
    description:
      "Desenvolvimento de um website com foco em UX/UI de alto padrão, otimizada para o público de uma rede de franquias no setor de carnes premium.Um website com foco em UX/UI de alto padrão, otimizada para o público de uma rede de franquias no setor de carnes premium.",
    type: "WEBSITE",
    techs: ["typescript", "react", "motion", "vite"],
  },
  Classmind: {
    title: "Classmind",
    num: "02",
    description:
      "Aplicação web desenvolvida para melhorar a rotina estudantil da minha turma, facilitando os estudos através da visualização clara de provas e testes.",
    type: "WEB APP",
    techs: ["typescript", "react", "tailwind", "motion", "vite"],
  },
};
const Project = ({ project }: ProjectCardProps) => {
  const conteinerClasses =
    "border border-zinc-800/40 bg-stone-920 flex flex-col items-center rounded-lg  max-w-[660px] h-full group transition-shadow duration-200 cursor-pointer";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`${conteinerClasses} ${project === "Dom Hygino" ? "hover:shadow-blocks-red hover:border-pinkred-100" : "hover:shadow-blocks-purple hover:border-[#6363db]"} `}
      variants={{
        rest: { x: 0, y: 0 },
        hover: { x: 25, y: -25 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          src={
            project === "Dom Hygino"
              ? isHovered
                ? domHyginoMenuMockup
                : domHyginoMockup
              : isHovered
                ? classmindMockupAvaliations
                : classmindMockup
          }
          alt="Dom Hygino website"
          className="rounded-t-lg"
          onClick={
            project === "Dom Hygino"
              ? () => window.open("https://domhygino.com.br/")
              : () => window.open("https://classmindsr.vercel.app/")
          }
        />
      </div>
      <div className="flex flex-col gap-5 p-4 sm:p6 md:p-8 rounded-lg">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-nowrap text-3xl text-indigo-500 font-semibold font-jetbrains uppercase">
            {projectsData[project].title}
          </h3>
          <span className="font-jetbrains text-2xl">|</span>
          <strong className="flex font-jetbrains tracking-[0.15rem] small-caps text-sm">
            <span className="hidden sm:block">
              {projectsData[project].num}{" "}
            </span>
            <span className="px-2 hidden sm:block">-</span>
            {projectsData[project].type}
          </strong>
        </div>
        <div className="flex justify-center flex-wrap gap-2">
          {projectsData[project].techs.map((tech) => (
            <ProjectTech key={tech} tech={tech} />
          ))}
        </div>
        <p className="text-zinc-300 text-xl font-light text-justify">
          {projectsData[project].description}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            type="main"
            fullWidth={true}
            onClick={
              project === "Dom Hygino"
                ? () => window.open("https://domhygino.com.br/")
                : () => window.open("https://classmindsr.vercel.app/")
            }
          >
            Acessar website
            <ArrowRight width={18} />
          </Button>
          <Button
            type="border"
            fullWidth={true}
            onClick={
              project === "Dom Hygino"
                ? () =>
                    window.open("https://github.com/rafaelg3r/dom-hygino-react")
                : () => window.open("https://github.com/rafaelg3r/Classmind-V3")
            }
          >
            {" "}
            <LucideGithub width={18} /> Github <ArrowRight width={18} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
