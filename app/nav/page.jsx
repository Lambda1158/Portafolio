import Link from "next/link";
import TextItem from "./TextItem";

const links = [
  { href: "/about", text: "About" },
  { href: "/proyectos", text: "Proyects" },
  { href: "/contacto", text: "Contact" },
];

export default function NavPage() {
  return (
    <div className=" h-screen bg-purple-dark-2 text-white pt-[120px] pl-[30px] sm:pt-[90px] sm:pl-[60px] border-8 border-white">
      <ul className=" inline-flex flex-col">
        {links.map((e) => {
          return (
            <li className="inline-block" key={e.href}>
              <Link href={e.href}>
                <TextItem
                  text={e.text}
                  value={1.05}
                  tail={
                    "noSelect text-[50px] leading-[0.9] font-normal hover:font-semibold hover:line-through uppercase inline-block text-white mb-[25px] "
                  }
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/">
        <TextItem
          text="menu"
          value={1.05}
          tail={
            "noSelect inline-block text-[18px] sm:text-[25px] text-white hover:line-through cursor-pointer uppercase absolute right-10 top 0"
          }
        />
      </Link>
    </div>
  );
}
