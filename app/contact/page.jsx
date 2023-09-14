"use client";
import Link from "next/link";
import Header from "../components/header/header";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../motion/pageTransition";

export default function Contacto() {
  return (
    <div key="contact" className="bg-letra">
      <PageTransition>
        <section className="bg-background" key="/contacto">
          <div className=" mx-auto max-w-[1285px] px-3 text-letra overflow-hidden h-scree ">
            <Header />
            <div className="mx-auto h-screen px-5">
              <h1 className="text-8xl text-center">Contact me</h1>
              <Link href="/nav">
                <button className="inline-block font-semibold tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px] uppercase]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
                  take me back
                </button>
              </Link>
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
