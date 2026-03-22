import { AnimatePresence, motion } from "motion/react";
import domHyginoMockup from "../../assets/mockups/domhygino.jpg";
import domHyginoMenuMockup from "../../assets/mockups/domhygino-menu.jpg";
import classmindMockup from "../../assets/mockups/classmind.jpg";
import { useState } from "react";
type ProjectCardProps = {
  project: "Dom Hygino" | "Classmind";
};
const Project = ({ project }: ProjectCardProps) => {
  const conteinerClasses =
    "overflow-hidden px-8 pt-12 border border-zinc-800/40 bg-stone-920/25 flex flex-col justify-end items-center rounded-lg  max-h-[450px] relative  group transition-shadow duration-200 cursor-pointer";
  const [isHovered, setIsHovered] = useState(false);
  // const domImage = isHovered ? domHyginoMenuMockup : domHyginoMockup;
  if (project === "Dom Hygino") {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`${conteinerClasses} hover:shadow-blocks-red hover:border-pinkred-100`}
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: 25, y: -25 },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          variants={{
            rest: { opacity: 0, y: -60 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "radial-gradient(circle at 50% 0%, #e533457b 0%, transparent 80%)",
          }}
          className="inset-0 absolute z-0"
        ></motion.div>
        <div className="relative w-2xl -mb-4 z-1 ">
          <AnimatePresence mode="wait">
            <motion.img
              key={isHovered ? "hover" : "rest"}
              src={isHovered ? domHyginoMenuMockup : domHyginoMockup}
              alt="Website Dom Hygino"
              className="w-full rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 5 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    );
  } else if (project === "Classmind") {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`${conteinerClasses} hover:shadow-blocks-purple hover:border-[#6363db]`}
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: -25, y: -25 },
        }}
      >
        <motion.div
          variants={{
            rest: { opacity: 0, y: -60 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "radial-gradient(circle at 50% 0%, #6363db7b 0%, transparent 80%)",
          }}
          className="inset-0 absolute z-0"
        ></motion.div>
        <motion.img
          src={classmindMockup}
          alt="Aplicativo Classmind"
          className="h-[420px] w-max rounded-lg -mb-4 z-1"
        />
      </motion.div>
    );
  }
}

export default Project