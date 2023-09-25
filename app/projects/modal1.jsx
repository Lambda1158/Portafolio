import React from "react";
import { FaChevronDown } from "react-icons/fa";
function Modal1({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal fixed top-0 left-0 right-0 z-50 bg-crema bg-opacity-[80%] h-full w-full ">
      <div className="relative px-[20px] lg:px-[35px] pt-[70px] lg:pt-[52px] pb-[35px]  rounded-[2px] bg-[#1F1F1D]  dark:bg-[#D8D9CF]">
        <button
          className="text-[50px] cursor-pointer inline-block text-center absolute right-8 top-8 leading-[65px] text-magenta w-[70px] h-[70px] hover:scale-105 hover:rotate-45 transition transition-transition duration-300 ease-out"
          onClick={onClose}
        >
          <FaChevronDown />
        </button>
        {/* Contenido de tu modal */}
      </div>
    </div>
  );
}

export default Modal1;
