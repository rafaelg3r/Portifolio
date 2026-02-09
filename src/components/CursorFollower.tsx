// src/components/Cursor.tsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./CursorContext";

export default function CursorFollower() {
  const { variant } = useCursor();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smallSpringConfig = { damping: 20, stiffness: 240, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const smallSpringX = useSpring(mouseX, smallSpringConfig);
  const smallSpringY = useSpring(mouseY, smallSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

 
  const variants = {
    default: {
      height: 48,
      width: 48,
      border: "2px solid white",
    },
    hover: {
      height: 80,
      width: 80,
      border: "2px solid white",
    },
    project: {
      height: 100,
      width: 100,
      backgroundColor: "#030303ac",
      border: "2px solid #030303",
    },
  };

  return (
    <>
      {/* Ponto central */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-98 "
        style={{
          x: smallSpringX,
          y: smallSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Círculo */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-99  flex items-center justify-center overflow-hidden mix-blend-difference"
        variants={variants}
        animate={variant}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25, mass: 0.5 }}
      >
        {variant === "project" && (
          <span className="text-md text-lemon-100 ">Ver mais</span>
        )}
      </motion.div>
    </>
  );
}
