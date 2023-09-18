import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
function Scroll({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta este valor según tus necesidades
  });
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef} className=" py-[60px] sm:py-[100px]">
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
        transition={{ opacity: { duration: 1 }, x: { duration: 1, delay: 1 } }}
        ref={ref}
      >
        {children}
      </motion.div>
    </div>
  );
}
export default Scroll;
