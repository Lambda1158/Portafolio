import Link from "next/link";
import TextItem from "./TextItem";
import MenuLanding from "../components/menu";

const links = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export default function NavPage() {
  return (
    <div className=" h-screen bg-background text-letra pt-[120px] pl-[30px] sm:pt-[90px] sm:pl-[60px] border-8 border-white">
      <ul className=" inline-flex flex-col">
        {links.map((e) => {
          return (
            <li className="inline-block" key={e.href}>
              <Link href={e.href}>
                <TextItem
                  text={e.text}
                  value={1.05}
                  tail={
                    "noSelect text-[50px] leading-[0.9] font-normal hover:font-semibold hover:line-through uppercase inline-block text-letra mb-[25px] "
                  }
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <div className=" absolute top-[100px] left-[90%]">
        <Link href="/">
          <MenuLanding />
        </Link>
      </div>
    </div>
  );
}
