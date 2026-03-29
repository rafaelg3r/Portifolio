import Project from "../components/ProjectCard";
import Title from "../components/SectionTitle";
import { useCursor } from "../components/CursorContext";
import { motion } from "framer-motion";

export function Projects() {
  const { setVariant } = useCursor();
  return (
    <div id="projetos" className="mt-20 flex flex-col gap-12 items-center">
      <div className="flex flex-col gap-2 w-full">
        <Title title="Últimos Projetos" className="self-start" />
        <p className="text-xl font-light">
          Alguns projetos que desenvolvi recentemente.
        </p>
      </div>
      <div className="w-full flex flex-col gap-22">
        <div className="flex flex-col md:flex-row gap-8 justify-around">
          <motion.div
            onHoverStart={() => setVariant("project")}
            onHoverEnd={() => setVariant("default")}
            
          >
            <Project project="Dom Hygino" />
          </motion.div>
          <motion.div
            onHoverStart={() => setVariant("project")}
            onHoverEnd={() => setVariant("default")}
            onClick={() => window.open("https://classmindsr.vercel.app/")}
          >
            <Project project="Classmind" />
            {/* Aplicação web desenvolvida para melhorar a rotina estudantil,
              facilitando os estudos através da visualização clara de provas e
              testes. */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
