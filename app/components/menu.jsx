"use client";
import { motion } from "framer-motion";
const MenuLanding = () => {
  return (
    <motion.span
      className=" noSelect text-[40px] leading-[0.9] font-normal hover:line-through uppercase inline-block text-letra  "
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      Menu
    </motion.span>
  );
};

export default MenuLanding;
