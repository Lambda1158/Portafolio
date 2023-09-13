"use client";
import { motion } from "framer-motion";
const MenuLanding = () => {
  return (
    <motion.span
      className=" noSelect text-[60px] leading-[0.9] font-normal hover:line-through hover:font-semibold uppercase inline-block text-letra  "
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      Menu
    </motion.span>
  );
};

export default MenuLanding;
