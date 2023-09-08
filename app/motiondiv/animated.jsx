"use client";
const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { x: -100 },
  visible: { x: 0, transition: { delay: 0.5, duration: 0.5 } },
};

import { motion } from "framer-motion";

const Animated = ({ contenido }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          {contenido}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Animated;
