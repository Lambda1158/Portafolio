"use client";
import { motion, AnimatePresence } from "framer-motion";
const Wrapper = ({ children }) => {
  const onTheRight = { x: "-100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "+100%" };
  return (
    <>
      <AnimatePresence>
        <motion.div
          className=" overflow-hidden"
          key={children.key}
          initial={onTheLeft}
          animate={inTheCenter}
          exit={onTheRight}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Wrapper;
