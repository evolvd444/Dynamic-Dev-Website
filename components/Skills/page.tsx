"use client"
import { motion } from "framer-motion";
import React from "react";

import { Skill as SkillType } from "../../types";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div className=" ">
      <motion.div className="flex relative flex-col text-center  md:text-left  lg:flex-row max-w-[2000px] lg:px-[15%] lg:ml-7 min-h-screen justify-center lg:space-y-0 mx-auto items-center">
        <h3 className="absolute top-12 sm:top-20 uppercase tracking-[20px]  text-gray-500 text-2xl ">
          Skills
        </h3>
        <h3 className="absolute top-20 max-w-[607px] sm:top-28 pt-4 uppercase tracking-[3px] text-gray-500 text-md animate-pulse">
          Hover over one of my skills to reveal which ones were used in this website:
        </h3>
       
        <div className="grid grid-cols-4 overflow-none gap-5 sm:gap-1  lg:pl-0 sm:w-[380px] ">
          
          {skills?.slice(0, skills.length /2).map((skill) => (
            <Skill key={skill?._id} skill={skill} />

          ))}
           {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill?._id} skill={skill} directionLeft/>

          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;