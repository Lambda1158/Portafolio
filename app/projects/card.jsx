"use client";
import Link from "next/link";
import Image from "next/image";
import Example from "../../public/imagen-muestra.webp";
import { useState } from "react";
import Modal1 from "./modal1";
import Boton from "./boton";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="relative w-[100%]">
      <Image src={Example} alt="alt" />
      <Modal1 img={Example} isOpen={isModalOpen} onClose={closeModal} />
      <button
        onClick={openModal}
        className=" font-semibold z-30 absolute bottom-3 left-3  tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px]   bg-letra hover:bg-magenta transition duration-100"
      >
        Know More
      </button>
      <div className="absolute top-2 right-2 z-10 ">
        <Boton Icon={FaGlobe} prop={" right-3"} />
        <Boton Icon={FaGithub} />
      </div>
    </div>
  );
};
export default Card;
