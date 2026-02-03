import { motion } from "framer-motion";

type AboutCardProps = {
  title: string;
  subtitle: string;
  rounded?: "left" | "middle" | "right";
};
export function AboutCard({ title, subtitle, rounded }: AboutCardProps) {
  let roundedClass = "";
  if (rounded === "left") {
    roundedClass = "rounded-l-lg";
  } else if (rounded === "middle") {
    roundedClass = "rounded-none";
  } else if (rounded === "right") {
    roundedClass = "rounded-r-lg";
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
      className={` flex flex-col items-center p-2 text-sm ${roundedClass} `}
    >
      <span className="leading-3 font-jetbrains text-[12px]">{title}</span>
      <span className="text-zinc- border-transparent200 font-bold text-xl">
        {subtitle}
      </span>
    </motion.div>
  );
}
