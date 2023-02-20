import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import JS from "../public/javascript-cool.svg";
import { Skill } from "../typings";
import { urlFor } from "../lib/sanity";
type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer py-2  ">
   

      <motion.img
        src={urlFor(skill?.image).url()}
        alt="image of skill"
        initial={{
          x: directionLeft ? -80 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500 object-cover sm:w-[70px] sm:h-[70px] md:w-28 md:h-28 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      {/* <motion.div  className="absolute grid grid-cols-4 gap-0 sm:gap-3 sm:p-5 lg:ml-[68px] sm:-ml-[10px] sm:w-screen -mt-[17px] -z-10">
      <div className=" rounded-full sm:w-[74px] sm:h-[74px] sm:ml-1 md:w-28 md:h-28 w-24 h-24 lg:mt-4 lg:-ml-[11.7vw] lg:w-32 lg:h-32 object-contain ring-4 ring-indigo-400/30 animate-pulse -z-0" />
      <div className="  rounded-full sm:w-[76px] sm:-ml-[14.0px] sm:-mt-[2px] sm:h-[76px] sm:px- w-24 h-24 lg:mt-4 lg:-ml-[11.7vw] lg:w-32 lg:h-32  object-cover ring-4 ring-teal-400/30 animate-pulse z-0" />
      </motion.div> */}
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white sm:h-20 sm:w-20  md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold sm:ml-[13px] sm:text-2xl text-[#030708] opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;