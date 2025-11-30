import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { TerminalNameBar } from "./components/TerminalNameBar";
import { TechCard } from "./components/TechCard";

// images
import html from "./assets/icons/html.svg";
import css from "./assets/icons/css.svg";
import js from "./assets/icons/javascript.svg";
// import react from "./assets/icons/react.svg";
// import vite from "./assets/icons/vite.svg";
// import tailwind from "./assets/icons/tailwindcss.svg";
// import ts from "./assets/icons/typeScript.svg";

import arrowRight from "./assets/icons/arrow-r.svg";

import domhygino from "./assets/mockups/domhygino.jpg";
// import domhyginoMenu from "./assets/mockups/domhyginoMenu.jpg";

function App() {
  return (
    <>
      <div className="px-28 flex flex-col gap-16  ">
        <Header />
        <div className="flex justify-center items-center ">
          <ProjectCard height="h-[600px]" width="min-w-[914px]" padTop="pt-20">
            <div className="absolute flex justify-between items-center px-3 -top-px left-0 right-0 h-10 rounded-t-2xl bg-linear-to-r  from-white-100 via-white-500 to-white-100">
              <div className="absolute top-0 left-0 right-0 h-px  text-amber-50 highlight-top"></div>
              <div className="flex gap-3">
                <div className="w-12 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
                <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
              </div>
              <div className="flex gap-3">
                <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
                <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
                <div className="w-4 h-4 bg-white-900 rounded-3xl shadow-ball inset-shadow-ball"></div>
              </div>
            </div>
            <Hero />
            <div className="flex flex-col gap-3.5">
              <TerminalNameBar />
              <strong className="ml-2.5 text-gray-250 font-normal text-[28px] relative w-fit select-none">
                <span className="text-forest-green ">Transformo</span> suas
                ideias em experiências{" "}
                <span className="font-pixelify text-shadow-title">
                  atrativas
                </span>{" "}
                e{" "}
                <span className="font-pixelify text-shadow-title">
                  profissionais
                </span>
                <div className="absolute top-2.5 right-0 w-0.5 h-7 bg-white-600 animate-blink"></div>
              </strong>
            </div>
          </ProjectCard>
        </div>
      </div>
      <div className="-mt-49  w-full h-50 bg-linear-to-t from-stone-925 from-30% to-transparent absolute z-2"></div>
      <div className="flex justify-center items-center bg-stone-925 w-full h-full py-10 relative z-10">
        <ProjectCard
          link="https://domhygino.com.br/"
          height="h-[667px]"
          width="min-w-[914px]"
          padTop="pt-9"
        >
          <div className="flex flex-col gap-5 w-200 h-full text-start relative ">
            <div className="flex flex-col w-full ">
              <div className="flex justify-between">
                <h4 className="text-white-900 font-outfit text-2xl uppercase text-shadow-white">
                  Dom Hygino
                </h4>
                <img src={arrowRight} alt="flecha apontando para a direita" />
              </div>
              <p className="text-white-600 font-outfit text-[18px] py-3">
                Website da rede de lojas de carne Dom Hygino
              </p>
            </div>
            <div className="flex gap-2.5 self-start">
              <TechCard>
                <img src={html} alt="Logo do HTML" />
                <span>Html</span>
              </TechCard>
              <TechCard>
                <img src={css} alt="Logo do CSS" />
                <span>CSS</span>
              </TechCard>
              <TechCard>
                <img src={js} alt="Logo do JavaScript" />
                <span>Javascript</span>
              </TechCard>
            </div>
            <img
              src={domhygino}
              alt="Captura de tela do site domhygino.com.br"
              className="rounded-2xl shadow-project-img absolute -bottom-8 "
            />
          </div>
        </ProjectCard>
      </div>
    </>
  );
}

export default App;
