import Link from "next/link";
import TextAnimation from "./motion/textAnimated";
export default function Landing() {
  return (
    <TextAnimation
      text={
        <section className="text-letra text-6xl font-semibold">
          <h1>Bruno Herrera Bruce Wayne</h1>
          <p>
            I'm a Full-Stack Web Developer looking for my first IT job,
            currently i'm a administrative employee at SUOES
          </p>
          <span>Based in Mendoza, Argentina</span>
          <Link href="/about">
            <button className="inline-block font-semibold tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px] uppercase]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
              Know More
            </button>
          </Link>
        </section>
      }
    />
  );
}
