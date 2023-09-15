"use client";
import { motion } from "framer-motion";
const TextItem = ({ key, text, value, tail }) => {
  return (
    <motion.span
      key={key}
      className={tail}
      whileHover={{ scale: value }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.span>
  );
};

export default TextItem;
