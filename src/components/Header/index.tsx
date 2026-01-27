import { Button } from "../Button";
import logotipo from "../../assets/logotipo.png";
import { useState } from "react";
export function Header() {
  const [activeBtn, setActiveBtn] = useState("Início");
  const navbarBtns = ["Início", "Sobre", "Projetos", "Skills"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-5 ">
      <div className="flex justify-between items-center w-full px-25">
        <div className="flex w-28">
          <a href="">
            <img
              src={logotipo}
              alt="logo da letra R em estilizada com uma coroa"
              className="h-11 cursor-pointer opacity-80 hover:opacity-100"
            />
          </a>
        </div>
        <nav className="relative p-1.5 bg-gray-opacity rounded-3xl shadow-button highlight-shadows flex gap-1.5">
          {navbarBtns.map((item) => (
            <Button
              key={item}
              isActive={activeBtn === item}
              onClick={() => setActiveBtn(item)}
              type="default"
            >
              {item}
            </Button>
          ))}
          <div className="absolute top-0 left-0 right-0 h-px text-amber-50 highlight-top"></div>
        </nav>

        <Button type="gradient">Contato</Button>
      </div>
    </header>
  );
}
