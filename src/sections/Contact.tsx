import { motion } from "motion/react";
import { Button } from "../components/Button";
import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <motion.div
      initial={{ width: "60%", y: 0 }}
      whileHover={{ width: "70%", y: -20 }}
      className="mt-30 p-10 m-auto flex flex-col gap-8 items-center justify-center border border-zinc-400 bg-stone-920 rounded-lg "
    >
      <div className="text-center">
        <span className="text-md text-zinc-200 font-light">
          Vamos trabalhar juntos!
        </span>
        <h1 className="text-6xl text-lemon-100 font-bold ">Entre em Contato</h1>
        <p>Conte comigo para desenvolver seu próximo projeto.</p>
      </div>
      <div className="flex gap-6 ">
        <Button type="border">
          <Mail width={18} />
          Email
        </Button>
        <Button type="border">
          <Linkedin width={18} />
          Linkedin
        </Button>
      </div>
    </motion.div>
  );
}
