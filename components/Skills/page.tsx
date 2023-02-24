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
      <motion.div className="flex relative flex-col text-center  md:text-left  lg:flex-row max-w-[2000px] lg:px-10 min-h-screen justify-center lg:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl ">
          Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-md ">
          Hover over a skill for current profiency
        </h3>
       
        <div className="grid grid-cols-4 overflow-none gap-5 sm:gap-1 sm:w-[380px] z-40">
          
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