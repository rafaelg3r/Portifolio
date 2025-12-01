import { Button } from "../Button";
import logotipo from "../../assets/logotipo.png";
export function Header() {
  return (
    <header className="flex justify-between items-center py-5 backdrop-blur-md">
      <div className="flex w-[142px]">
        <img
          src={logotipo}
          alt="logo da letra R em estilizada com uma coroa"
          className="h-11 cursor-pointer opacity-80 hover:opacity-100"
        />
      </div>
      <nav className="relative p-1.5 bg-gray-opacity rounded-3xl shadow-button highlight-shadows flex gap-1.5">
        <Button isActive={true} type="default">
          Início
        </Button>
        <Button isActive={false} type="default">
          Projetos
        </Button>
        <Button isActive={false} type="default">
          Skills
        </Button>
        <div className="absolute top-0 left-0 right-0 h-px  text-amber-50 highlight-top "></div>
      </nav>
      <Button isActive={false} type="gradient">
        CONTATO
      </Button>
    </header>
  );
}
