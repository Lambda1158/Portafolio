import Image from "next/image";
import Boton from "./boton";
import { FaGithub, FaGlobe } from "react-icons/fa";
const Card = ({ openModal, data }) => {
  return (
    <>
      <div className="relative w-[600px]">
        <Image src={data?.image[0]} alt="alt" width={600} />

        <button
          onClick={() => openModal(data)}
          className=" font-semibold z-30 absolute bottom-3 left-3  tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px]   bg-letra hover:bg-magenta transition duration-100"
        >
          Know More
        </button>
        <div className="absolute top-2 right-2 z-10 ">
          <a href={data?.live} target="blank">
            <Boton Icon={FaGlobe} prop={" right-3"} />
          </a>
          <a href={data?.github} target="blank">
            <Boton Icon={FaGithub} />
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
