import { Button } from "../Button";

export function Header() {
  return (
    <header className="flex justify-between px-28 py-5 backdrop-blur-md">
      <img
        src="../public/logotipo.png"
        alt=""
        className="h-11 cursor-pointer opacity-80 hover:opacity-100"
      />
      <nav className="relative p-1.5 bg-gray-opacity rounded-3xl button-shadows highlight-shadows flex gap-1.5">
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
        Entre em Contato
      </Button>
    </header>
  );
}
