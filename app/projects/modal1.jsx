import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Boton from "./boton";
import { FaGithub, FaGlobe } from "react-icons/fa";
function Modal1({ isOpen, onClose, img }) {
  isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-crema bg-opacity-80 h-full w-full "></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-3 max-w-[1333px] w-full border-[3px] border-white">
        <div className="">
          <div className="relative px-[20px] lg:px-[35px] pt-[70px] lg:pt-[52px] pb-[35px] rounded-[2px] bg-[#1F1F1D] dark:bg-[#D8D9CF]">
            <button
              className="text-[50px] cursor-pointer inline-block text-center absolute right-8 top-8 leading-[65px] text-magenta w-[70px] h-[70px] hover:scale-105 hover:rotate-45 transition duration-300 ease-out"
              onClick={onClose}
            >
              <FaChevronDown />
            </button>
            <div className="flex">
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
    </>
  );
}

export default Modal1;
