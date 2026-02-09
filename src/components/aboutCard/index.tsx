import { motion } from "framer-motion";

type AboutCardProps = {
  title: string;
  subtitle: string;
  rounded?: "left" | "middle" | "right";
};
export function AboutCard({ title, subtitle, rounded }: AboutCardProps) {
  let roundedClass = "";
  if (rounded === "left") {
    roundedClass = "md:rounded-l-lg md:rounded-tr-none rounded-t-lg";
  } else if (rounded === "middle") {
    roundedClass = "rounded-none";
  } else if (rounded === "right") {
    roundedClass = "md:rounded-bl-none md:rounded-r-lg rounded-b-lg";
  }
  return (
    <motion.div
      initial={{
        backgroundColor: "#060606",
      }}
      whileHover={{
        backgroundColor: "#27272a",
      }}
      transition={{ duration: 0.15 }}
      className={` flex flex-col items-center p-2  ${roundedClass} `}
    >
      <span className="leading-3 font-jetbrains text-[12px]">{title}</span>
      <span className="text-zinc-300 font-bold text-xl">{subtitle}</span>
    </motion.div>
  );
}
