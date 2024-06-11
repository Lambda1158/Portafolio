import Link from "next/link";
export default function Landing() {
  return (
    <section className="text-letra text-6xl font-semibold">
      <h1 className="font-roboto font-extrabold leading-[90%]  text-[60px] md:text-[50px] xl:text-[120px] uppercase tracking-[2px]">
        Bruno Javier Herrera
      </h1>
      <p className=" font-medium leading-[140%] text-[20px] md:text-[30px]  xl:text-[30px] t-screen:text-[42px] text-crema">
        Soy un Desarrollador Junior especializado en HTML, CSS, JavaScript y
        Java. Apasionado por crear experiencias web dinámicas y atractivas.
        ¡Explora mi portafolio para ver mi trabajo!
      </p>
      <span className="inline-block font-medium leading-[128%] text-[16px] md:text-[18px] xl:text-[24px] text-crema mt-[5px] xl:mt-[15px]">
        Mendoza, Argentina
      </span>
      <br></br>
      <Link href="/about">
        <button className="font-semibold tracking-[1px] text-[14px] text-magenta hover:text-letra uppercase py-[14px] px-[32px]   bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
          Sobre Mi
        </button>
      </Link>
      <Link
        className=" ml-6 font-semibold tracking-[1px] text-[14px] text-magenta hover:text-letra uppercase py-[12px] px-[32px]   bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100"
        href="/BrunoHerreraCV.pdf"
        target="blank"
      >
        Descargar CV
      </Link>
    </section>
  );
}
