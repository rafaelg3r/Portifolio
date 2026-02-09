import { motion, AnimatePresence } from "framer-motion";
import { Layers, Languages, Ear } from "lucide-react";
import { FaReact as ReactIcon } from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";
import { TbBrandFramerMotion as MotionIcon } from "react-icons/tb";
import {
  SiTypescript as TypescriptIcon,
  SiVite as ViteIcon,
} from "react-icons/si";
import { AboutCard } from "../components/aboutCard";
import { Title } from "../components/SectionTitle";
import { useState } from "react";
import { useCursor } from "../components/CursorContext";

const stackData = {
  front: [
    {
      name: "Typescript",
      type: "Linguagem",
      icon: <TypescriptIcon size={32} color="#007ACC" />,
      level: "intermediário",
    },
    {
      name: "React",
      type: "Framework",
      icon: <ReactIcon size={32} color="#00d3f2" />,
      level: "avançado",
    },
    {
      name: "Tailwind CSS",
      type: "Estilização",
      icon: <TailwindIcon size={32} color="#16BECB" />,
      level: "avançado",
    },
    {
      name: "Framer Motion",
      type: "Animações",
      icon: <MotionIcon size={32} color="#cc2e7d" />,
      level: "intermediário",
    },
    {
      name: "Vite",
      type: "Ferramenta de Build",
      icon: <ViteIcon size={32} color="#646cff" />,
    },
  ],
  others: [
    {
      name: "Inglês",
      type: "idioma",
      icon: <Languages size={32} color="#5f9ef1" />,
      level: "avançado",
    },
    {
      name: "Escuta Ativa",
      type: "Comunicação",
      icon: <Ear size={32} color="#e9c372" />,
      level: "avançado",
    },
  ],
};
export function About() {
  const { setVariant } = useCursor();
  const [alternateStack, setAlternateStack] = useState<"front" | "others">(
    "front",
  );
  return (
    <motion.section id="sobre" className="flex flex-col gap-12 mt-18">
      <div className="flex flex-col gap-2">
        <Title title="Sobre mim" />
        <p className="text-xl font-light">
          Um pouco sobre quem eu sou e as ferramentas que utilizo na criação de
          meus projetos.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex flex-col flex-5 border-zinc-800/40 border rounded-lg md:p-6 p-3 gap-10">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 border border-white-500 rounded-full" />
            <div>
              <h2 className="text-2xl text-indigo-400 font-bold ">
                Rafael da Costa Vedana
              </h2>
              <span className="text-md font-jetbrains font-lighty">
                Front-end Developer | Web Designer
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-px  border border-zinc-800/40 rounded-lg bg-zinc-800">
            <AboutCard title="Experiência" subtitle="+8 meses" rounded="left" />
            <AboutCard
              title="Cargo Atual"
              subtitle="Freelancer"
              rounded="middle"
            />
            <AboutCard
              title="Disponibilidade"
              subtitle="Disponível"
              rounded="right"
            />
          </div>
          <div className="border border-zinc-800/40 rounded-lg p-3 bg-zinc-800/10 flex flex-col gap-2">
            <p>
              Sou um desenvolvedor Front-end e web designer focado em criar
              visuais e transforma-los em interfaces funcionais, rápidas e
              interativas. Uso principalmente{" "}
              <b className="text-zinc-300">React</b> e{" "}
              <b className="text-zinc-300">TypeScript</b> para construir
              aplicações seguras e com componentes bem estruturados. Além disso,
              utilizo o <b className="text-zinc-300">Figma</b> como base para o
              meu processo criativo, o que me permite prototipar interfaces
              intuitivas antes mesmo de transformá-las em código.
            </p>
            <p>
              No dia a dia eu priorizo a eficiência do{" "}
              <b className="text-zinc-300">Tailwind CSS</b> e a criação de
              animações com <b className="text-zinc-300">Framer Motion</b>. Me
              dedico a entender as boas práticas de desenvolvimento para
              entregar um código limpo e uma experiência de usuário de alto
              nível.{" "}
              <b className="italic">
                Estou em constante aprendizado, pronto para aplicar as melhores
                práticas em meus serviços
              </b>
              .
            </p>
            <p>Quer trabalhar comigo? Entre em contato!</p>
            <button>Email</button>
          </div>
        </div>
        <aside className="flex flex-col flex-3 border-zinc-800/40 border rounded-lg ">
          <div className="p-5 border-b border-zinc-800/40 bg-zinc-800/10 rounded-t-lg w-full h-max flex justify-between">
            <div className="flex gap-3 items-center justify-center">
              <Layers color="#f4f4f5" />
              <h2 className="font-bold text-lg text-zinc-100 font-jetbrains">
                Meu Stack
              </h2>
            </div>
            <div className="flex items-center gap-2 px-2 py-2 border border-zinc-800/40 bg-stone-925 rounded-lg font-light text-sm ">
              <motion.button
                onHoverStart={() => setVariant("hover")}
                onHoverEnd={() => setVariant("default")}
                onClick={() => setAlternateStack("front")}
                className={`px-3 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  alternateStack === "front"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Code
              </motion.button>
              <motion.button
                onHoverStart={() => setVariant("hover")}
                onHoverEnd={() => setVariant("default")}
                onClick={() => setAlternateStack("others")}
                className={`px-3 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  alternateStack === "others"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Outros
              </motion.button>
            </div>
          </div>
          <div>
            <div className="flex-1 p-4 ">
              <div className="flex flex-col gap-3">
                <AnimatePresence mode="wait">
                  {stackData[alternateStack].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.1, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/10  transition-colors border border-zinc-800/40 hover:bg-indigo-500 group"
                    >
                      <div className="p-1.5 bg-zinc-900 rounded-md border border-zinc-800/40">
                        {item.icon}
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col">
                          <h3 className="font-bold text-zinc-200 text-sm ">
                            {item.name}
                          </h3>
                          <span className="text-xs text-zinc-500 font-jetbrains group-hover:text-zinc-300 transition-colors">
                            {item.type}
                          </span>
                        </div>
                        {item.level && (
                          <h4 className="bg-indigo-500/20 border border-indigo-500 text-zinc-200 font-semibold px-3 py-1 rounded-md text-sm capitalize group-hover:bg-[#1A1A3A] group-hover:border-transparent">
                            {item.level}
                          </h4>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.section>
  );
}
