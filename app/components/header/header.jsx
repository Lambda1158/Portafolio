"use client";
import Link from "next/link";
import HomeA from "../home";
import MenuLanding from "../menu";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-10">
      <HomeA />
      <Link href="nav">
        <MenuLanding />
      </Link>
    </div>
  );
}
