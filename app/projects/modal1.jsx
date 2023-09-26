import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Boton from "./boton";
import { FaGithub, FaGlobe } from "react-icons/fa";
function Modal1({ isOpen, onClose, img }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-crema bg-opacity-[80%] h-full w-full ">
      <div className="fixed z-50 top-[50%] left-[50%] p-3  max-w-[1333px] max-h-full w-full transform  translate-y-[-50%] translate-x-[-50%] ">
        <div className="overflow-y-scroll t-screen:overflow-y-hidden">
          <div className=" relative px-[20px]  pt-[70px] pb-[35px]  rounded-[4px] bg-[#1F1F1D] ">
            <button
              className="text-[50px] cursor-pointer inline-block text-center absolute right-8 top-8 leading-[65px] text-magenta w-[70px] h-[70px] hover:scale-105 hover:rotate-45 transition transition-transition duration-300 ease-out"
              onClick={onClose}
            >
              <FaChevronDown />
            </button>
            <div className=" flex ">
              <Image src={img} alt="altimage" />
              <div>
                <h1>Project name</h1>
                <p>
                  VERSION 2 OF MY PORTFOLIO IS A STATIC WEBSITE BUILT WITH NEXT
                  JS 13 AND TAILWIND CSS WITH FRAMER MOTION. I REALLY LIKE DOING
                  THIS BECAUSE THE MINIMAL DESIGN AND THE DARK MODE IS REALLY
                  COOL.
                </p>
                <Boton Icon={FaGithub} />
                <Boton Icon={FaGlobe} prop={"left-5"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal1;
