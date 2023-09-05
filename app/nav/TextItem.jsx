"use client"
import { motion } from 'framer-motion';
const TextItem = ({text,value,tail}) => {
  return (
    <motion.span className={tail}
      whileHover={{ scale: value }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.span>
  );
};

export default TextItem;
