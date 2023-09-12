import Link from "next/link";
import TextItem from "./TextItem";
import MenuLanding from "../components/menu";
import Animated from "../motion/animated";

const links = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export default function NavPage() {
  return (
    <div className=" sm:pt-[90px] sm:ml-[0px]  h-screen bg-background text-letra pt-[120px] ">
      <Animated
        contenido={
          <ul className=" pl-[70px] pt-[50px] inline-flex flex-col sm:left-0">
            {links.map((e) => {
              return (
                <li className="inline-block" key={e.href}>
                  <Link href={e.href}>
                    <TextItem
                      text={e.text}
                      value={1.05}
                      tail={
                        " sm:text-[70px] noSelect text-[55px] leading-[0.9] font-normal hover:font-semibold hover:line-through uppercase inline-block text-letra "
                      }
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        }
      />

      <span className="  sm:top-[50px] absolute pl-[70px] top-[50px] sm:right-10 cursor-pointer">
        <Link href="/">
          <MenuLanding />
        </Link>
      </span>
    </div>
  );
}