import { Project } from "../components/ProjectCard";
import { ProjectTech } from "../components/ProjectTech";
import { Title } from "../components/SectionTitle";
import { useCursor } from "../components/CursorContext";
import { motion } from "framer-motion";

export function Projects() {
  const { setVariant } = useCursor();
  return (
    <div id="projetos" className="mt-20 flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-2 w-full">
        <Title title="Últimos Projetos" className="self-start" />
        <p className="text-xl font-light">
          Alguns dos projetos que desenvolvi recentemente
        </p>
      </div>
      <div className="w-full flex flex-col gap-22">
        <div className="w-full flex md:flex-row flex-col-reverse gap-18">
          <motion.div
            onHoverStart={() => setVariant("project")}
            onHoverEnd={() => setVariant("default")}
            onClick={() => window.open("https://domhygino.com.br/")}
            className="flex-5"
          >
            <Project project="Dom Hygino" />
          </motion.div>
          <div className="flex flex-3 flex-col gap-5 items-center md:items-start text-center md:text-start">
            <div className="flex gap-2 md:justify-start justify-center items-center">
              <h3 className="text-3xl text-indigo-500 font-semibold font-jetbrains uppercase">
                Dom Hygino
              </h3>
              <span className="font-jetbrains text-2xl">|</span>
              <strong className="font-jetbrains tracking-[0.15rem] small-caps text-sm">
                01 - WEBSITE{" "}
              </strong>
            </div>
            <div className="flex gap-2">
              <ProjectTech tech="react" />
              <ProjectTech tech="typescript" />
              <ProjectTech tech="motion" />
              <ProjectTech tech="vite" />
            </div>
            <p className="text-xl text-zinc-200 ">
              Desenvolvimento de plataforma digital focada em experiência
              gastronômica premium para rede de franquias de carnes nobres.
            </p>
          </div>
        </div>
        <div className="w-full flex md:flex-row-reverse flex-col-reverse gap-18">
          <motion.div
            onHoverStart={() => setVariant("project")}
            onHoverEnd={() => setVariant("default")}
            onClick={() => window.open("https://classmindsr.vercel.app/")}
            className="flex-5 "
          >
            <Project project="Classmind"></Project>
          </motion.div>
          <div className="flex flex-3  flex-col gap-5 md:items-end items-center text-center md:text-end">
            <div className="flex md:flex-row gap-2 md:justify-start  justify-center items-center">
              <h3 className="text-3xl text-indigo-500 font-semibold font-jetbrains uppercase">
                Classmind
              </h3>
              <span className="font-jetbrains text-2xl">|</span>
              <strong className="font-jetbrains tracking-[0.15rem] small-caps text-sm">
                02 - WEB APP{" "}
              </strong>
            </div>
            <div className="flex gap-2">
              <ProjectTech tech="react" />
              <ProjectTech tech="typescript" />
              <ProjectTech tech="tailwind" />
              <ProjectTech tech="vite" />
            </div>
            <p className="text-xl text-zinc-200 ">
              Aplicação web desenvolvida para melhorar a rotina estudantil,
              facilitando os estudos através da visualização clara de provas e
              testes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
