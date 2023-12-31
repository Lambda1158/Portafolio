"use client";
const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { x: -200 },
  visible: { x: 0, transition: { delay: 0.5, duration: 0.5 } },
};

import { motion } from "framer-motion";

const Animated = ({ children }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div initial="hidden" animate="visible" variants={itemVariants}>
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Animated;
