import Link from "next/link";
export default function Contacto() {
  return (
    <div className="noSelect inline-block text-[18px] sm:text-[25px] text-white hover:line-through cursor-pointer uppercase absolute right-10 top 0">
      projectos
      <Link href={"/"}>Take me back</Link>
    </div>
  );
}
