import Link from "next/link";
import Landing from "./landing";
import Header from "./components/header/header";

export default function Home() {
  return (
    <section className="bg-background">
      <div
        className=" mx-auto max-w-[1285px] px-3 text-white border-[5px] border-white overflow-hidden h-screen
    "
      >
        <Header />
        <div className="mx-auto h-screen px-5 border-white">
          <Landing />
        </div>
      </div>
    </section>
  );
}
