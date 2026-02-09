import { motion } from "framer-motion";
import { useCursor } from "../CursorContext";

type ButtonProps = {
  children: React.ReactNode;
  type: "default" | "main" | "border";
  isActive?: boolean;
  onClick?: () => void;
};
export function Button({ children, type, isActive, onClick }: ButtonProps) {
  const { setVariant } = useCursor();

  const buttonClasses = `lg:px-6 md:px-4 text-white-900 text-md rounded-md cursor-pointer text-shadow-simple flex gap-3 items-center justify-center font-semibold h-12`;
  try {
    switch (type) {
      case "default":
        return (
          <motion.button
            onHoverStart={() => setVariant("hover")}
            onHoverEnd={() => setVariant("default")}
            onClick={onClick} // Adicionado o evento de clique
            className={`px-4 py-1.5 text-zinc-100 text-sm rounded-3xl cursor-pointer transition-colors duration-200  ${
              isActive ? "bg-neutral-850" : "hover:bg-neutral-850"
            }`}
          >
            {children}
          </motion.button>
        );
      case "main":
        return (
          <motion.button
            onHoverStart={() => setVariant("hover")}
            onHoverEnd={() => setVariant("default")}
            initial={{
              backgroundColor: "#615FFF",
              color: "var(--color-white-900)",
            }}
            whileHover={{
              backgroundColor: "#c3d350",
              color: "#0c0c0c",
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{ duration: 0.15 }}
            onClick={onClick}
            className={`${buttonClasses} `}
          >
            {children}
          </motion.button>
        );
      case "border":
        return (
          <motion.button
            onHoverStart={() => setVariant("hover")}
            onHoverEnd={() => setVariant("default")}
            initial={{
              backgroundColor: "#ffffff00",
              color: "var(--color-white-900)",
            }}
            whileHover={{
              backgroundColor: "#fff",
              color: "#0c0c0c",
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{ duration: 0.15 }}
            onClick={onClick}
            className={`${buttonClasses}  border border-white-900 `}
          >
            {children}
          </motion.button>
        );
      default:
        throw new Error(`Button type "${type}" is not supported`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
