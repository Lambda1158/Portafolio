import Link from "next/link";
import Landing from "./landing";


export default function Home() {
  return (
    <div className=" bg-light-1 text-clip font-semibold h-screen text-2xl">
      <Landing/>
      <Link href="/nav" ><span className="mr-1 text-5xl hover:text-white hover:line-through">Menu</span></Link>
    </div>
  )
}
