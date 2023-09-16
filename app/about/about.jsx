import Image from "next/image"; // Importa el componente Image de Next.js
import Link from "next/link";
import Mi from "../../public/myself.jpg";
const ItemAbout = () => {
  return (
    <div>
      <h1 className="p-5 text-letra text-5xl  font-semibold ">
        Back-end Lover, Full-Stack Capable
      </h1>
      <div className=" p-5 flex justify-between">
        <Image
          className=" rounded-full"
          src={Mi}
          alt="yo"
          width={300} // Ancho deseado de la imagen en píxeles
          height={200} // Alto deseado de la imagen en píxeles
        />
        <div className=" p-8">
          <p className="text-letra font-semibold text-1xl">
            HELLO I‘M BRUNO HERRERA, I PAY GREAT ATTENTION TO DETAIL IN THE
            DESIGN AND DEVELOPMENT OF THE PROJECTS. MY PLAN IS TO DEVELOP MY
            TECHNICAL SKILLS TO BECOME PROFICIENT IN NEW TECHNOLOGIES AND STAY
            CURRENT WITH EMERGING TRENDS IN MY FIELD. YOU CAN CONTACT ME OR
            REACH OUT TO ME ON MY SOCIALS.
          </p>
          <Link href="/projects">
            <button className="inline-block font-semibold tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px] uppercase]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemAbout;
