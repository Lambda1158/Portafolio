"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HomeA = () => {
  const router = useRouter();
  const navegate = () => {
    router.push("/");
  };
  return (
    <motion.button
      className="text-[50px] cursor-pointer inline-block text-center leading-[65px] text-magenta rounded-full bg-letra w-[70px] h-[70px]"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={navegate}
    >
      C
    </motion.button>
  );
};

export default HomeA;
