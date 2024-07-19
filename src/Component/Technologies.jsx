import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {  motion } from "framer-motion";
const iconVariants=(duration)=>(
  {
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  },
}
);

const Technologies = () => {
  return (
    <section id="Techonogies" className="border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.8,delay:0.5}} className="my-20 text-center heading text-2xl md:text-3xl lg:text-4xl">Technologies</motion.h1>
      <motion.section whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1,delay:1}} className="flex flex-wrap items-center justify-center gap-4">
      <section className=" text-center">
        <motion.section variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-[3px] border-neutral-800 p-3">
          <FaHtml5 className="text-5xl lg:text-6xl text-[#E5532D]" />
        </motion.section>
        <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">HTML</p>
        </section>
        <section className="text-center">
        <motion.section variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-[3px] border-neutral-800 p-3">
          <IoLogoCss3 className="text-5xl lg:text-6xl text-[#2465F1]" />
        </motion.section>
        <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300  bg-neutral-900 font-medium">CSS</p>
        </section>
        <section className="text-center">
        <motion.section variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-[3px] border-neutral-800 p-3">
          <RiTailwindCssFill className="text-5xl lg:text-6xl text-[#38BDF8]" />
        </motion.section>
        <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">Tailwind CSS</p>
        </section>
        <section className=" text-center">
        <motion.section variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-[3px] border-neutral-800 p-3">
          <IoLogoJavascript className="text-5xl lg:text-6xl text-[#EFD81D]" />
        </motion.section>
        <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">Javscript</p>
        </section>
        <section className=" text-center">
        <motion.section variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-[3px] border-neutral-800 p-3">
          <RiReactjsLine className="text-5xl lg:text-6xl text-[#58C4DC]" />
        </motion.section>
        <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">React JS</p>
        </section>
        <section className="text-center">
        <motion.section variants={iconVariants(2)}  initial="initial" animate="animate" className="rounded-2xl border-[3px] border-neutral-800 p-3">
          <FaNodeJs className="text-5xl lg:text-6xl  text-[#3F873F]" />
        </motion.section>
        <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900 ">Node JS</p>
        </section>
      </motion.section>
    </section>
  );
};

export default Technologies;
