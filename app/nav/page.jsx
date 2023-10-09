"use client";
import Link from "next/link";
import TextItem from "./TextItem";
import MenuLanding from "../components/menu";
import Animated from "../motion/animated";
import { AnimatePresence } from "framer-motion";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Wrapper from "../components/wrapper";

const links = [
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];
const fa = [
  { name: FaInstagram, href: "https://www.instagram.com" },
  { name: FaGithub, href: "https://github.com/Lambda1158" },
  {
    name: FaLinkedin,
    href: "https://www.linkedin.com/in/bruno-herrera-aa10b6201/",
  },
  { name: FaTwitter, href: "https://www.twitter.com" },
  {
    name: FaWhatsapp,
    href: "https://wa.me/5492615457609?text=Hola,%20estoy%20interesado%20en%20contactarte",
  },
];

export default function NavPage() {
  return (
    <Wrapper>
      <div
        key="nav"
        className=" sm:pt-[90px] sm:text h-screen bg-background text-letra pt-[120px] "
      >
        <Animated>
          <ul className=" pl-10 sm:pl-[100px] pt-[50px] inline-flex flex-col sm:left-0">
            {links.map((e) => {
              return (
                <AnimatePresence key={e.href}>
                  <li className="inline-block py-1" key={e.href}>
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
                </AnimatePresence>
              );
            })}
          </ul>
        </Animated>

        <span className="  sm:top-[50px] absolute left-10 top-10  sm:left-[80%] cursor-pointer">
          <Link href="/">
            <MenuLanding />
          </Link>
        </span>
        <Animated>
          <div className=" pl-10  sm:pl-[100px] py-10 sm:py-4 flex gap-2">
            {fa.map((Icon, Index) => (
              <Link key={Index} href={Icon.href} target="blank">
                <Icon.name className="text-6xl  hover:scale-150 transform transition-transform duration-300 ease-in-out" />
              </Link>
            ))}
          </div>
        </Animated>
      </div>
    </Wrapper>
  );
}
