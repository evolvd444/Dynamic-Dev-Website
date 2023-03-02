
import {ChevronRightIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion";
import React from "react";

import  {urlFor}  from '../../lib/sanity.client'
import { Experience } from "../../types";


type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className=" flex flex-col relative rounded-lg items-center space-y-7 flex-shrink-0  lg:w-[60vh] lg:h-[100vh] w-[400px] md:mt-10 md:w-[60vw] xl:w-[600px] p-10 hover:opacity-100 opacity-40  snap-center cursor-pointer transition-opacity duration-200  sm:pt-0 sm:px-0 sm:-ml-7 sm:h-[95%] sm:w-screen sm:mt-3 mt-5 ">
      
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        className="relative mt-20 w-35 h-35 px-10 lg:pt-7 lg:pb-7 lg:h-[100vh] max-w-[560px] max-h-[710px]  overflow-y-scroll pt-12 pb-12 mb-20 lg:w-[55vh]  md:w-[50vw]  xl:w-[600px] bg-gradient-to-r from-[rgb(13,3,35)]  to-[rgba(45,187,137,0.15)] cursor-pointer sm:w-[88%] sm:h-[900px] sm:mb-5 sm:pt-7 sm:pb-0 sm:mt-20 sm:p-5"
      >
        <div className=" absolute overflow-x-hidden sm:ml-[111px]  content-center sm:mt-[1px] w-35 h-35 md:ml-[15vw] ml-[19.1vh] sm:w-[78px] sm:h-[78px] mb-7 h-[79px] w-[79px] lg:ml-[178.5px] xl:w-[150px] xl:h-[150px]  cursor-pointer rounded-full ring-4 ring-white/40 animate-pulse z-0" />
        <motion.img
          src={urlFor(experience?.companyImage)}
          alt=" "
          className="ml-[19vh] opacity-100 mb-[25px] md:ml-[15vw] sm:ml-[110px] sm:shadow-lg sm:shadow-purple-400/90  lg:ml-[178.5px] object-center object-cover container h-[80px] w-[80px] z-30 rounded-full"
        />

        <div className="px-0 sm:py-0 md:px-0">
          <div className=" sm:pt-0 py-5">
            <h4 className="text-4xl sm:text-3xl font-light">
              {" "}
              {experience.jobTitle} of {experience.company}{" "}
            </h4>
            <p className="font-bold sm:text-xl text-2xl mt-2">
            {experience.company}{" "}
            </p>
          </div>
          <div className="grid grid-cols-7 grid-rows-3 overflow-none  object-center space-x-2 my-2">
            {experience?.technologies?.map((technology) => (
              <motion.img
                key={technology._id}
                className="h-10 w-10 rounded-full/>"
                src={urlFor(technology?.image)}
                alt="image of technologies used"
              />
            ))}
          </div>
         
          <p className=" uppercase py-5 text-gray-300 ">
             {new Date(experience.dateStarted).toDateString()} -{" "} 
             {experience.isCurrentlyWorkingHere 
                ? "Present"
                : new Date(experience.dateEnded).toDateString()}
                </p>

          <ul className="list-disc space-y-4 ml-5 text-lg  overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-900/90 z-10">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
      <div className=" bg-blue-400/30 ring-1 ring-fuchsia-500/80 z-0 absolute -bottom-9 animate-pulse h-4 w-[100vw]"/>
    </article>
    
  );
};

export default ExperienceCard;