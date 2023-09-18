"use client";
import Header from "../components/header/header";
import PageTransition from "../motion/pageTransition";
import Aboutme from "./about";
import TextAnimation from "../motion/textAnimated";
import { AnimatePresence } from "framer-motion";
import Experience from "./experience";
import Scroll from "../motion/scroll";
import Skill from "./skill";
import Education from "./education";
import Footer from "./footer";

export default function About() {
  return (
    <AnimatePresence>
      <div className="bg-letra" key="aboutpage">
        <PageTransition>
          <section className="bg-background">
            <div className=" mx-auto max-w-[1285px]  px-5 py-3 text-white overflow-hidden">
              <Header />
              <TextAnimation text={<Aboutme />} />
              <Scroll>
                <Experience />
              </Scroll>
              <Scroll>
                <Education />
              </Scroll>
              <Scroll>
                <Skill />
              </Scroll>
            </div>
          </section>
        </PageTransition>
      </div>
      <Footer />
    </AnimatePresence>
  );
}
