import { motion, AnimatePresence } from "framer-motion";
import { Layers, Database } from "lucide-react";
import { FaReact as ReactIcon } from "react-icons/fa";
import { RiTailwindCssFill as TailwindIcon } from "react-icons/ri";
import {
  TbBrandFramerMotion as MotionIcon,
  TbBrandTypescript as TypescriptIcon,
} from "react-icons/tb";
import { AboutCard } from "../components/aboutCard";
import { useState } from "react";

const stackData = {
  front: [
    {
      name: "Typescript",
      type: "Language",
      icon: <TypescriptIcon size={32} color="#007ACC" />,
      level: "intermediário",
    },
    {
      name: "React",
      type: "Library",
      icon: <ReactIcon size={32} color="#00d3f2" />,
      level: "avançado",
    },
    {
      name: "Tailwind CSS",
      type: "Styling",
      icon: <TailwindIcon size={32} color="#16BECB" />,
      level: "avançado",
    },
    {
      name: "Framer Motion",
      type: "Animation",
      icon: <MotionIcon size={32} color="#cc2e7d" />,
      level: "intermediário",
    },
  ],
  back: [
    {
      name: "Node.js",
      type: "Runtime",
      icon: <Database className="text-green-500" />,
      level: "básico",
    },
  ],
};
export function About() {
  const [alternateStack, setAlternateStack] = useState<"front" | "back">(
    "front",
  );
  return (
    <section id="sobre" className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <h1 className=" text-5xl text-lemon-100 font-extrabold tracking-tighter">
          Sobre mim
        </h1>
        <p className="text-xl font-light">
          Um pouco sobre quem eu sou e as ferramentas que utilizo na criação de
          meus projetos.
        </p>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col flex-5 border-zinc-800 border rounded-lg p-6 gap-10">
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
          <div className="grid grid-cols-3 gap-px  border border-zinc-800 rounded-lg bg-zinc-800">
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
          <div className="border border-zinc-800 rounded-lg p-3">
            <p></p>
          </div>
        </div>
        <aside className="flex flex-col flex-3 border-zinc-800 border rounded-lg ">
          <div className="p-5 border-b border-zinc-800 bg-stone-920 rounded-t-lg w-full h-max flex justify-between">
            <div className="flex gap-3 items-center justify-center">
              <Layers color="#f4f4f5" />
              <h2 className="font-bold text-lg text-zinc-100 font-jetbrains">
                Meu Stack
              </h2>
            </div>
            <div className="flex items-center gap-2 px-2 py-2 border border-zinc-800 bg-stone-925 rounded-lg font-light text-sm ">
              <button
                onClick={() => setAlternateStack("front")}
                className={`px-3 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  alternateStack === "front"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Front
              </button>
              <button
                onClick={() => setAlternateStack("back")}
                className={`px-3 py-1 rounded-md transition-all duration-300 cursor-pointer ${
                  alternateStack === "back"
                    ? "bg-zinc-800 text-white shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Back
              </button>
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
                      className="flex items-center gap-4 p-3 rounded-lg bg-stone-920  transition-colors border border-zinc-800 hover:bg-indigo-500 group"
                    >
                      <div className="p-1.5 bg-zinc-900 rounded-md border border-zinc-800">
                        {item.icon}
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-bold text-zinc-200 text-sm ">
                          {item.name}
                        </h3>
                        <span className="text-xs text-zinc-500 font-jetbrains group-hover:text-zinc-300 transition-colors">
                          {item.type}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
