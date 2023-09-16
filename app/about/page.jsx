"use client";
import Link from "next/link";
import Header from "../components/header/header";
import Animated from "../motion/animated";
import PageTransition from "../motion/pageTransition";
import ItemAbout from "./about";
import TextAnimation from "../motion/textAnimated";
import { AnimatePresence } from "framer-motion";
export default function About() {
  return (
    <AnimatePresence>
      <div className="bg-letra" key="aboutpage">
        <PageTransition>
          <section className="bg-background">
            <div className=" mx-auto max-w-[1285px] px-3 text-white overflow-hidden h-screen">
              <Header />
              <div className="mx-auto h-screen px-5 border-white">
                <TextAnimation text={<ItemAbout />} />
              </div>
            </div>
          </section>
        </PageTransition>
      </div>
    </AnimatePresence>
  );
}
