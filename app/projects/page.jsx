"use client";
import Card from "./card";
import Header from "../components/header/header";
import Modal1 from "./modal1";
import Footer from "../about/footer";
import { useState } from "react";
import Wrapper from "../components/wrapper";
import projectData from "./dataProject";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState({ state: false, project: {} });
  const openModal = (e) => setIsModalOpen({ state: true, project: e });
  const closeModal = () => setIsModalOpen({ state: false, project: {} });
  return (
    <>
      <Wrapper>
        <section className=" bg-background ">
          <div className=" mx-auto max-w-[1285px] px-5 pb-24  gm:w-auto ">
            <Header />
            <h1 className=" py-7 text-5xl sm:text-7xl text-left text-letra font-normal hover:scale-95 transform transition-transform duration-300 ease-in-out">
              Learning Projects
            </h1>
            <div className="grid gap-x-[20px] gap-y-[20px] grid-cols-1 gm:grid-cols-2">
              {/* <Card openModal={openModal} data={projectData.gusto} /> */}
              {projectData.map((e, index) => {
                return <Card openModal={openModal} key={index} data={e} />;
              })}
            </div>
          </div>
          <Footer />
        </section>
      </Wrapper>
      <Modal1
        isOpen={isModalOpen.state}
        data={isModalOpen.project}
        onClose={closeModal}
      />
    </>
  );
}
