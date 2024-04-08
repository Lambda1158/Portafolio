"use client";
import { FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiJavascript,
  SiCss3,
  SiNextdotjs,
  SiBootstrap,
  SiHtml5,
  SiNestjs,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb";
const Items = [
  FaReact,
  SiNextdotjs,
  FaGithub,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiPostgresql,
  TbBrandFramerMotion,
  TbBrandVscode,
  FaNodeJs,
  SiExpress,
  SiNestjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
];

export default function Icons() {
  return (
    <section id="icons" className=" mx-8 sm:mx-0 ">
      <div className="  flex justify-start items-center flex-wrap gap-[40px] sm:gap-[60px]">
        {Items.map((Icon, index) => (
          <Icon
            key={index}
            className=" text-gray-900 hover:grayscale-0 text-7xl sm:text-8xl  hover:scale-150 transform transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}
