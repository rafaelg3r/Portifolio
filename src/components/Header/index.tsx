import { Button } from "../Button";
// import logotipo from "../../assets/logotipo.png";
import { useState } from "react";

export function Header() {
  const [activeBtn, setActiveBtn] = useState("Início");
  const navbarBtns = ["Início", "Sobre", "Projetos", "Contato"];

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center py-5 ">
      <div className="flex justify-center items-center w-max">
        <nav className="relative p-1.5 bg-neutral-950/60 rounded-3xl shadow-button highlight-shadows flex gap-1.5 backdrop-blur-sm">
          {navbarBtns.map((item) => (
            <a href={`#${item.toLowerCase()}`}>
              <Button
                key={item}
                isActive={activeBtn === item}
                onClick={() => setActiveBtn(item)}
                type="default"
              >
                {item}
              </Button>
            </a>
          ))}
          <div className="absolute top-0 left-0 right-0 h-px text-amber-50 highlight-top"></div>
        </nav>
      </div>
    </header>
  );
}
