import Image from "next/image";
import Example from "../../public/imagen-muestra.webp";
import Landing from "../../public/recipes.photos/landing page.png";
import Boton from "./boton";
import { FaGithub, FaGlobe } from "react-icons/fa";
const Card = ({ openModal, type, data }) => {
  return (
    <>
      <div className="relative w-[100%]">
        <Image src={data[type]?.image[0]} alt="alt" />

        <button
          onClick={() => openModal(type)}
          className=" font-semibold z-30 absolute bottom-3 left-3  tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px]   bg-letra hover:bg-magenta transition duration-100"
        >
          Know More
        </button>
        <div className="absolute top-2 right-2 z-10 ">
          <Boton Icon={FaGlobe} prop={" right-3"} />
          <Boton Icon={FaGithub} />
        </div>
      </div>
    </>
  );
};
export default Card;
