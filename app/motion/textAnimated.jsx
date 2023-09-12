"use client";
import { motion } from "framer-motion";
const TextAnimation = ({ text }) => {
  return (
    <div>
      <motion.div
        style={{
          opacity: 0,
          x: -20, // Mueve el texto hacia la izquierda para que parezca que se está escribiendo
          display: "inline-block",
        }}
        initial={false}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
