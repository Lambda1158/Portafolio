"use client";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
const TextAnimation = ({ text }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: {
        duration: 2, // Duración de la animación
        type: "spring", // Tipo de animación
        stiffness: 30, // Rigidez de la animación
      },
    });
  }, [controls]);

  return (
    <div className="container">
      <motion.div
        className="text"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
