import Link from "next/link";
export default function About() {
  return (
    <div className=" text-[18px] text-white bg-purple-dark-1 h-screen border-[5px] border-white">
      <h1 className="text-8xl text-center my-[100px]">About me</h1>
      <div className="text-center my-[100px]">
        <Link href="/nav">
          <button class="bg-purple-dark-2 hover:bg-purple-light-1 hover:font-semibold text-white font-bold py-2 px-4 border-b-4 border-purple-light-2 hover:border-purple-light-1 rounded">
            Take me Back
          </button>
        </Link>
      </div>
    </div>
  );
}
