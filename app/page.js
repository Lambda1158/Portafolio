import Landing from "./landing";
import NavPage from "./nav";


export default function Home() {
  return (
    <div className="bg-gray-600 text-clip font-semibold h-screen text-2xl">
      <Landing/>
      <NavPage/>
    </div>
  )
}
