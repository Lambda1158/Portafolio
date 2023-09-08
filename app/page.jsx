"use client";
import Landing from "./landing";
import Header from "./components/header/header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="bg-background">
      <motion.div
        className=" mx-auto max-w-[1285px] px-3 text-white border-[5px] border-white overflow-hidden h-screen"
        animate={{ x: 100 }}
        transition={{ delay: 0.2, stiffness: 10 }}
      >
        <Header />
        <div className="mx-auto h-screen px-5 border-white">
          <Landing />
        </div>
      </motion.div>
    </section>
  );
}
