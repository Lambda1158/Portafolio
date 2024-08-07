"use client";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Boton from "./boton";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useEffect } from "react";
import Carousel from "./carousel";
function Modal1({ isOpen, onClose, data }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-crema bg-opacity-[90%] dark:bg-opacity-[80%] h-full w-full "></div>
      <div className="fixed z-50 top-1/2 left-[50%] p-3  max-w-[1333px] max-h-full w-full transform  translate-y-[-50%] translate-x-[-50%] ">
        <div
          className="overflow-y-scroll lm:overflow-y-hidden "
          style={{ maxHeight: "calc(100vh - 50px)" }}
        >
          <div className="relative px-[20px] pt-[70px] pb-[35px]  rounded-[5px] bg-background">
            <button
              className="text-[50px] cursor-pointer inline-block  absolute right-8 top-0 sm:top-8 leading-[65px] text-magenta w-[70px] h-[70px] hover:scale-105 hover:rotate-45 transition duration-300 ease-out"
              onClick={onClose}
            >
              <FaChevronDown />
            </button>
            <div className="flex justify-between items-starts gap-[25px] flex-wrap lg:flex-nowrap">
              <Image src={data?.image[0]} alt="altimage" width={600} />
              <div>
                <h1 className=" text-letra text-5xl font-light">
                  {data.title}
                </h1>
                <p className=" py-10 text-letra text-2xl font-light">
                  {data.description}
                </p>
                <div className=" text-center sm:text-left">
                  <a href={data.github} target="blank">
                    <Boton Icon={FaGithub} />
                  </a>
                  <a href={data?.live} target="blank">
                    <Boton Icon={FaGlobe} prop={"left-5"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t-[3px]  border-t-letra border-opacity-[80%] outline-none my-[30px] "></div>
            <Carousel data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal1;
