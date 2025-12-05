import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { TerminalNameBar } from "./components/TerminalNameBar";
import { TechCard } from "./components/TechCard";

// images
import html from "./assets/icons/html.svg";
import css from "./assets/icons/css.svg";
import js from "./assets/icons/javascript.svg";
import react from "./assets/icons/react.svg";
import vite from "./assets/icons/vite.svg";
import typescript from "./assets/icons/typeScript.svg";

import arrowRight from "./assets/icons/arrow-r.svg";

import domhygino from "./assets/mockups/domhygino.jpg";
import domhyginoHover from "./assets/mockups/domhygino-menu.jpg";
import classmind from "./assets/mockups/classmind.jpg";
import classmind2 from "./assets/mockups/classmind2.jpg";

function App() {
  return (
    <div>
      <div className="teste1 homeRadial"></div>
      <div className="px-28 flex flex-col gap-16">
        <Header />
        <div className="flex justify-center items-center mt-30">
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
                <div className="absolute top-2 right-0 w-0.5 h-7 bg-white-600 animate-blink"></div>
              </strong>
            </div>
          </ProjectCard>
        </div>
      </div>
      <div className="-mt-49  w-full h-50 bg-linear-to-t from-stone-925 from-30% to-transparent absolute z-2"></div>
      <div className="flex flex-col gap-20 justify-center items-center bg-stone-925 w-full h-full py-10 relative z-10">
        <ProjectCard
          link="https://domhygino.com.br/"
          height="h-[667px]"
          width="min-w-[914px]"
          padTop="pt-9"
          hoverClass="domHoverBg"
        >
          {(isHovering) => (
            <div className="flex flex-col gap-5 w-full h-full text-start items-center relative overflow-hidden ">
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
              <div className="flex gap-2.5 self-start ">
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
                className={`rounded-2xl shadow-project-img absolute -bottom-14 transition-all duration-500 ease-in-out group-hover:-bottom-8 
                  ${isHovering ? "opacity-0" : "opacity-100"}`}
              />
              <img
                src={domhyginoHover}
                alt="Captura de tela do site domhygino.com.br"
                className={`rounded-2xl shadow-project-img absolute -bottom-14 transition-all duration-500 ease-in-out group-hover:-bottom-8 
                  ${isHovering ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          )}
        </ProjectCard>
        <ProjectCard
          link="https://https://classmindsr.vercel.app/"
          height="h-[667px]"
          width="min-w-[914px]"
          padTop="pt-9"
          hoverClass="classmindHoverBg"
        >
          {(isHovering) => (
            <div className="flex flex-col gap-5 w-full h-full text-start items-center relative overflow-hidden ">
              <div className="flex flex-col w-full ">
                <div className="flex justify-between">
                  <h4 className="text-white-900 font-outfit text-2xl uppercase text-shadow-white">
                    Classmind
                  </h4>
                  <img src={arrowRight} alt="flecha apontando para a direita" />
                </div>
                <p className="text-white-600 font-outfit text-[18px] py-3">
                  Aplicação para a organização de avaliações escolares
                </p>
              </div>
              <div className="flex gap-2.5 self-start ">
                <TechCard>
                  <img src={react} alt="Logo do HTML" />
                  <span>React</span>
                </TechCard>
                <TechCard>
                  <img src={typescript} alt="Logo do JavaScript" />
                  <span>Typescript</span>
                </TechCard>
                <TechCard>
                  <img src={css} alt="Logo do CSS" />
                  <span>CSS</span>
                </TechCard>
                <TechCard>
                  <img src={vite} alt="Logo do JavaScript" />
                  <span>Vite</span>
                </TechCard>
              </div>
              <img
                src={classmind}
                alt="Captura de tela do site domhygino.com.br"
                className={`rounded-2xl w-[220px] shadow-project-img absolute  bottom-4 transition-all duration-400 ease-in-out  
                  ${isHovering ? "left-40" : "left-30"}`}
              />
              <img
                src={classmind2}
                alt="Captura de tela do site domhygino.com.br"
                className={`rounded-2xl w-[220px] shadow-project-img absolute bottom-4 transition-all duration-400 ease-in-out  
                  ${isHovering ? "right-40" : "right-30"}`}
              />
              
            </div>
          )}
        </ProjectCard>
      </div>
    </div>
  );
}

export default App;
