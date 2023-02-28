"use client"
import { motion } from "framer-motion";
import React from "react";

import { urlFor } from "../../lib/sanity.client";
import { Skill } from "../../types";


type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft}: Props) => {
  return (
    <div className="group relative flex cursor-pointer py-1.5  z-30 overflow-none ">
   

      <motion.img
        src={urlFor(skill?.image)}
        alt="image of skill"
        initial={{
          x: directionLeft ? -70 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full  object-cover sm:w-[80px] sm:h-[80px] md:w-28 md:h-28  lg:w-[110px] lg:h-[110px] filter group-hover:grayscale transition border-none duration-300 -z-10 ease-in-out "
      />

      <div className=" absolute rounded-full sm:w-[80px] sm:h-[80px] sm:ml-0 md:w-28 md:h-28 w-24 h-24 lg:mt-0 lg: lg:w-[110px]  lg:h-[110px] object-contain ring-1 ring-fuchsia-400/90 animate-pulse z-10" />
      <div className=" absolute rounded-full sm:w-[80px] sm:h-[80px] sm:ml-0 md:w-28 md:h-28 w-24 h-24 lg:mt-0 lg: lg:w-[110px]  lg:h-[110px] object-contain ring-2 ring-aqua-400/40 animate-pulse z-10" />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white sm:h-20 sm:w-20  md:w-28 md:h-28 lg:w-[110px] lg:h-[110px] rounded-full z-40">
        <div className="flex items-center  justify-center h-full ">
          
          <p className="text-3xl font-bold sm:ml-[1px] sm:text-2xl  text-[#030708] opacity-100 z-40">
            {skill?.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;