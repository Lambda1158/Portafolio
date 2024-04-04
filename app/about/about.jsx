import Image from "next/image"; // Importa el componente Image de Next.js
import Link from "next/link";
import Mi from "../../public/myself.jpg";
const Aboutme = () => {
  return (
    <section id="about-section" className=" py-7 mb-0 sm:mb-20 ">
      <h1 className=" mx-8 sm:mx-0  py-10 text-letra text-5xl sm:text-7xl  font-semibold hover:scale-105 transform transition-transform duration-300 ease-in-out  ">
        Back-end Lover, Full-Stack Capable
      </h1>
      <div className=" py-8 flex flex-col gm:flex-row justify-between sm:grid-cols-1">
        <Image
          className=" rounded-md gm:rounded-full mx-8 gm:mx-0 hover:scale-110 transform transition-transform duration-300 ease-in-out"
          src={Mi}
          alt="yo"
          width={300} // Ancho deseado de la imagen en píxeles
          placeholder="blur"
          //blurDataURL={"/img/logo.png"}
        />
        <div className="mx-8 gm:mx-10 mt-5 gm:mt-0">
          <p className="text-letra font-semibold text-1xl sm:text-2xl">
            HELLO I‘M BRUNO HERRERA, I PAY GREAT ATTENTION TO DETAIL IN THE
            DESIGN AND DEVELOPMENT OF THE PROJECTS. MY PLAN IS TO DEVELOP MY
            TECHNICAL SKILLS TO BECOME PROFICIENT IN NEW TECHNOLOGIES AND STAY
            CURRENT WITH EMERGING TRENDS IN MY FIELD. YOU CAN CONTACT ME OR
            REACH OUT TO ME ON MY SOCIALS.
          </p>
          <Link href="/projects">
            <button className="hover:scale-110 transform  inline-block font-semibold tracking-[1px] text-[20px] x text-magenta hover:text-letra uppercase py-4 px-[32px] uppercase]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
