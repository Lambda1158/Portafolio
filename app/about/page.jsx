"use client";
import Header from "../components/header/header";
import PageTransition from "../motion/pageTransition";
import Aboutme from "./about";
import TextAnimation from "../motion/textAnimated";
import Experience from "./experience";
import Scroll from "../motion/scroll";
import Habilidades from "./skill";
import Education from "./education";
import Footer from "./footer";

export default function About() {
  return (
    <div className="bg-letra" key="aboutpage">
      <PageTransition>
        <section className="bg-background">
          <div className=" mx-auto max-w-[1285px]  px-5 py-3 text-white overflow-hidden">
            <Header />
            <TextAnimation>
              <Aboutme />
            </TextAnimation>
            <Scroll>
              <Experience />
            </Scroll>
            <Scroll>
              <Education />
            </Scroll>
            <Scroll>
              <Habilidades />
            </Scroll>
          </div>
        </section>
      </PageTransition>
      <Footer />
    </div>
  );
}
