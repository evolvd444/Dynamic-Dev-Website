import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TSLogo from "../public/tsTransparent.png";
import TypeLogo from "../public/typescript.svg";
import JSLogo from "../public/transparent-javascript-logo.png";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className=" flex flex-col relative rounded-lg items-center space-y-7 flex-shrink-0 lg:w-[60vh] lg:h-[98vh] w-[400px] md:-mt-10 md:w-[50vw] xl:w-[600px] p-10 hover:opacity-100 opacity-40  snap-center cursor-pointer transition-opacity duration-200 overflow-hidden  sm:py-12 sm:pt-20 sm:px-5 sm:h-[100%] sm:w-screen sm:mt-0 mt-5 ">
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
        className="relative mt-20 w-35 h-35 px-10 lg:pt-7 lg:pb-7 lg:h-[100vh] max-w-[560px] max-h-[710px] lg:overflow-y-hidden lg:overflow-y-scroll pt-12 pb-12 mb-20 lg:w-[55vh] md:w-[50vw] xl:w-[600px] bg-gradient-to-r from-[rgb(13,3,35)]  to-[rgba(45,187,137,0.15)] cursor-pointer sm:w-[100%] sm:mb-12 sm:pt-4 sm:pb-7 sm:mt-12 sm:p-7"
      >
        <div className=" absolute overflow-x-hidden sm:mt-5 w-35 h-35 ml-[19.1vh] sm:w-[75px] sm:h-[75px] mb-7 h-[79px] w-[79px] xl:w-[150px] xl:h-[150px]  cursor-pointer rounded-full ring-4 ring-white/30 animate-pulse -z-10" />
        <motion.img
          src={urlFor(experience?.companyImage).url()}
          alt=" "
          className="ml-[19vh] mb-[25px] object-center object-contain container h-[80px] w-[80px] rounded-full"
        />

        <div className="px-0 sm:py-0 md:px-10">
          <div className=" sm:pt-0 py-5">
            <h4 className="text-4xl font-light">
              {" "}
              {experience.jobTitle} of {experience.company}{" "}
            </h4>
            <p className="font-bold text-2xl mt-2">
            {experience.company}{" "}
            </p>
          </div>
          <div className="flex space-x-2 my-2">
            {experience?.technologies?.map((technology) => (
              <motion.img
                key={technology._id}
                className="h-10 w-10 rounded-full/>"
                src={urlFor(technology?.image).url()}
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

          <ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-500/80 ">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
};

export default ExperienceCard;
