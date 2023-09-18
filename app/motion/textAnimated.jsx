"use client";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
const TextAnimation = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: {
        duration: 2, // Duración de la animación
        type: "spring", // Tipo de animación
        stiffness: 30, // Rigidez de la animación
        delay: 0.6,
      },
    });
  }, [controls]);

  return (
    <>
      <motion.div initial={{ opacity: 0, x: 300 }} animate={controls}>
        {children}
      </motion.div>
    </>
  );
};

export default TextAnimation;
