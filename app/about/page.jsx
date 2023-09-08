import Link from "next/link";
import Header from "../components/header/header";
import Animated from "../motiondiv/animated";

export default function About() {
  return (
    <section className="bg-background">
      <div
        className=" mx-auto max-w-[1285px] px-3 text-white border-[5px] border-white overflow-hidden h-screen
  "
      >
        <Header />
        <div className="mx-auto h-screen px-5 border-white">
          <Animated
            contenido={<h1 className="text-8xl text-center">About me</h1>}
          />

          <Link href="/projects">
            <button className="inline-block font-semibold tracking-[1px] text-[14px] x text-magenta hover:text-letra uppercase py-[12px] px-[32px] uppercase]  bg-letra hover:bg-magenta mt-[15px] xl:mt-[30px] transition duration-100">
              Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
