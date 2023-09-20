import { useRef } from "react";
import { useInView, motion } from "framer-motion";

function View({ children }) {
  const scrollRef = useRef(null);

  return (
    <div ref={scrollRef}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default View;
