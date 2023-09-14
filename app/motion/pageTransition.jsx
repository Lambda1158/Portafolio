import { motion } from "framer-motion";

function PageTransition({ children, ...rest }) {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      key={children}
      initial={onTheLeft}
      animate={inTheCenter}
      exit={onTheRight}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
