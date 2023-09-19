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
import TextAnimation from "../motion/textAnimated";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { delay, motion } from "framer-motion";

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
  const { ref, inView } = useInView({
    threshold: 0.1, // Ajusta este valor según tus necesidades
  });
  const scrollRef = useRef(null);
  return (
    <section id="icons" className="mx-auto max-w-[1285px]">
      <div ref={scrollRef} className="  flex flex-wrap flex-row justify-evenly">
        {Items.map((Icon, index) => (
          <motion.div
            key={index}
            animate={inView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
            ref={ref}
          >
            <Icon className=" text-gray-900 hover:grayscale-0 text-7xl hover:shadow-md" />
          </motion.div>
        ))}
      </div>
      <div ref={scrollRef} className="  flex flex-wrap flex-row justify-evenly">
        {Items1.map((Icon, index) => (
          <motion.div
            key={index}
            animate={inView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
            ref={ref}
          >
            <Icon className=" text-gray-900 hover:grayscale-0 text-7xl hover:shadow-md" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
