import { BackgroundGrid } from "../components/BackgroundGrid";
import { Button } from "../components/Button";
import { LucideArrowRight, LucideGithub } from "lucide-react";
import Logo from "../assets/logotipo.png";

export function Hero() {
  return (
    <>
      <section
        id="início"
        className="lg:mt-21 md:mt-17 mt-10 flex flex-col items-center gap-6 h-[700px] background-hero"
      >
        <div className="pt-32 flex flex-col items-center text-zinc-300 font-light md:gap-0 gap-4 md:text-xl text-md">
          <div className="flex items-center gap-3 justify-center">
            <strong className="text-zinc-300 font-light md:w-40 w-34 text-center">
              Dev <span className="font-extrabold">Front-end</span>
            </strong>
            <div className="w-2 h-2 bg-zinc-300 rounded-full"></div>
            <strong className="text-zinc-300 font-light md:w-40 w-34 text-center">
              Web <span className="font-extrabold">Designer</span>
            </strong>
          </div>
          <h1 className="md:text-7xl/24 text-5xl text-center text-lemon-100 font-extrabold max-w-7xl capitalize ">
            Projetando &{" "}
            <span className="font-pixelify italic text-indigo-500 font-normal">
              desenvolvendo
            </span>{" "}
            sites{" "}
            <span className="font-elegant italic text-indigo-500 font-normal">
              visualmente{" "}
            </span>
            impactantes.
          </h1>
        </div>
        <div className="flex flex-col gap-8 ">
          <h2 className="text-xl md:text-2xl text-center font-light">
            Design e Código personalizado para o seu negócio.
          </h2>
          <div className="flex md:gap-8 gap-6 justify-center md:flex-row flex-col">
            <Button
              type="main"
              onClick={() => {
                window.location.href = "#projetos";
              }}
            >
              Ver Projetos <LucideArrowRight width={18} />
            </Button>
            <Button
              type="border"
              onClick={() =>
                window.open("https://github.com/rafaelg3r", "_blank")
              }
            >
              <LucideGithub width={18} />
              Perfil do Github
            </Button>
          </div>
        </div>
        <img
          src={Logo}
          alt="Logo"
          className="2xl:pt-14 xl:pt-8 pt-4 2xl:h-max xl:h-40 h-38 "
        />
      </section>
      <BackgroundGrid />
    </>
  );
}
