import Link from "next/link";
import Landing from "./landing";
import TextItem from "./nav/TextItem";

export default function Home() {
  return (
    <div
      className="bg-purple-dark-2 text-white border-[5px] border-white overflow-hidden h-screen
    "
    >
      <div className="border-[5px] border-white py-10">
        <Link href="/nav">
          <TextItem
            text="Menu"
            value={1.05}
            tail={
              "noSelect inline-block text-[18px] sm:text-[25px] text-white hover:line-through cursor-pointer uppercase absolute right-10 top 0"
            }
          />
        </Link>
      </div>
      <div className="mx-auto h-screen px-5 flex items-center border-5 border-white">
        <Landing />
      </div>
    </div>
  );
}
