import Landing from "./landing";
import Header from "./components/header/header";

export default function Home() {
  return (
    <section className="bg-background">
      <div className=" mx-auto max-w-[1285px] px-3 overflow-hidden h-screen">
        <Header />
        <div className="mx-auto py-10 h-screen px-5">
          <Landing />
        </div>
      </div>
    </section>
  );
}
