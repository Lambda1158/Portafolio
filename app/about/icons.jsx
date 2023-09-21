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
import { motion } from "framer-motion";
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
const Items1 = [];

export default function Icons() {
  return (
    <section id="icons" className=" mx-auto max-w-[1285px]">
      <div className="  flex justify-start items-center flex-wrap gap-[60px] mt-[170px]">
        {Items.map((Icon, index) => (
          <Icon
            key={index}
            className=" text-gray-900 hover:grayscale-0 text-8xl hover:shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
