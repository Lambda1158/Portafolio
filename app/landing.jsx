import Link from "next/link";
import TextAnimation from "./motion/textAnimated";
export default function Landing() {
  return (
    <TextAnimation
      text={
        <section className="text-letra text-6xl font-semibold">
          <h1 className="font-roboto font-extrabold leading-[90%]  text-[60px] md:text-[50px] xl:text-[120px] uppercase tracking-[2px]">
            Bruce Herrera Wayne
          </h1>
          <p className=" font-medium leading-[140%] text-[20px] md:text-[30px]  xl:text-[30px] t-screen:text-[42px] text-crema uppercase">
            I&apos;m a Full-Stack Web Developer looking for my first IT job,
            currently i&apos;m studying at UTN FRM and working as administrative
            at SUOES
          </p>
          <span className="inline-block font-medium leading-[128%] text-[16px] md:text-[18px] xl:text-[24px] text-crema mt-[5px] xl:mt-[15px]">
            Based in Mendoza, Argentina
          </span>
          <br></br>
          <Link href="/about">
            <button className="font-semibold tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px] uppercase]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
              Know More
            </button>
          </Link>
        </section>
      }
    />
  );
}
