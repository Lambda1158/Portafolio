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
];
const Items1 = [
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
    <section id="icons" className=" mx-auto max-w-[1285px]">
      <div className="  flex flex-wrap flex-row justify-evenly">
        {Items.map((Icon, index) => (
          <Icon
            key={index}
            className=" text-gray-900 hover:grayscale-0 text-7xl hover:shadow-md"
          ></Icon>
        ))}
      </div>
      <div className="  flex flex-wrap flex-row justify-evenly">
        {Items1.map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }} // Opacidad inicial en 0
            animate={{ opacity: 1 }} // Opacidad animada en 1 cuando esté en vista
            transition={{ delay: index * 0.2 }} // Retraso para la animación
          >
            <Icon
              key={index}
              className=" text-gray-900 hover:grayscale-0 text-7xl hover:shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
