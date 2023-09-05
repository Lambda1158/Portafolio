import Link from "next/link";
import Landing from "./landing";
import TextItem from "./nav/TextItem";

export default function Home() {
  return (
    <body
      className="
    font-notoSans bg-purple-dark-2 text-white  overflow-x-hidden
    scrollbar-thumb-red-900 scrollbar-track-red-100
    "
    >
      <Landing />
      <div className=" ml">
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
    </body>
  );
}
