import Link from "next/link";
import TextItem from "./TextItem";
import MenuLanding from "../components/menu";
import Animated from "../motiondiv/animated";

const links = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

export default function NavPage() {
  return (
    <div className=" h-screen bg-background text-letra pt-[120px] sm:pt-[90px] sm:pl-[60px]">
      <Animated
        contenido={
          <ul className=" pl-[70px] pt-[50px] inline-flex flex-col">
            {links.map((e) => {
              return (
                <li className="inline-block" key={e.href}>
                  <Link href={e.href}>
                    <TextItem
                      text={e.text}
                      value={1.05}
                      tail={
                        "noSelect text-[70px] leading-[0.9] font-normal hover:font-semibold hover:line-through uppercase inline-block text-letra mb-[25px] "
                      }
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        }
      />

      <div className=" absolute top-[140px] left-[85%]">
        <Link href="/">
          <MenuLanding />
        </Link>
      </div>
    </div>
  );
}
