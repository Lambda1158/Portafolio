"use client";
import { motion } from "framer-motion";
export default function Landing() {
  return (
    <motion.div
      className=" font-sans text-[60px] border-[5px] border-white p-10 text-letra"
      animate={{ x: 100 }}
      transition={{ delay: 0.5, stiffness: 10 }}
    >
      Bruno Javier Herrera
    </motion.div>
  );
}
