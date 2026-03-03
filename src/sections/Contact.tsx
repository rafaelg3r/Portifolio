import { motion } from "motion/react";
import { Button } from "../components/Button";
import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <motion.div
      id="contato"
      className="md:mt-30 mt-15 lg:px-40 md:px-20 md:py-10 px-8 py-5 m-auto flex flex-col gap-8 items-center justify-center border border-zinc-400 bg-stone-920 rounded-lg "
    >
      <div className="text-center">
        <span className="text-md text-zinc-200 font-light">
          Vamos trabalhar juntos!
        </span>
        <h1 className="md:text-6xl text-4xl text-lemon-100 font-bold ">
          Entre em Contato
        </h1>
        <p>Conte comigo para desenvolver seu próximo projeto.</p>
      </div>
      <div className="flex gap-6 ">
        <a href="mailto:rafael.dvedana@gmail.com">
          <Button type="border">
            <Mail width={18} />
            Email
          </Button>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/rafael-da-costa-vedana-928913291">
          <Button type="border">
            <Linkedin width={18} />
            Linkedin
          </Button>
        </a>
      </div>
    </motion.div>
  );
}
