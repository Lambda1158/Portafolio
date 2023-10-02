"use client";
import Card from "./card";
import Header from "../components/header/header";
import Modal1 from "./modal1";
import PageTransition from "../motion/pageTransition";
import Footer from "../about/footer";
import Example from "../../public/imagen-muestra.webp";
import { useState } from "react";
export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <PageTransition>
        <section className="bg-background">
          <div className=" mx-auto max-w-[1285px] px-5 pb-24">
            <Header />
            <h1 className=" py-7 text-5xl sm:text-7xl text-left text-letra font-normal hover:scale-95 transform transition-transform duration-300 ease-in-out">
              Learning Projects
            </h1>
            <div className="grid gap-x-[20px] gap-y-[20px] grid-cols-1 sm:grid-cols-2">
              <Card openModal={openModal} />
              <Card openModal={openModal} />
              <Card openModal={openModal} />
              <Card openModal={openModal} />
              <Card openModal={openModal} />
              <Card openModal={openModal} />
            </div>
          </div>
          <Footer />
        </section>
      </PageTransition>
      <Modal1 img={Example} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
