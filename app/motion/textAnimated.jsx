"use client";
import { motion } from "framer-motion";
const TextAnimation = ({ text }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3, x: -100 } }}
        transition={{}}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
