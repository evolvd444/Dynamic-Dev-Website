"use client"
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col sm:w-[90vw] sm:h-[900px] relative text-center h-screen md:mt-[0px] md:h-[80vh] md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 sm:top-20 sm: sm:ml-4 md:top-0 lg:top-[100px] uppercase tracking-[20px] text-[#f7fafab1] text-2xl drop-shadow-md [10px_30v px_35px_#15c3f3f1] z-20">
        {" "}
        About{" "}
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{
          once: true,
        }}
        className=" md:mt-0 flex mx-auto px-0 sm:flex-col sm:w-[180px] sm:h-[160px] flex-shrink-0 md:justify-evenly md:w-[0vw] md:h-[1100px] lg:-mt-10 lg:mb-40 sm:-mt-[80px] sm:mr-[42vw]  xl:w-[500px] xl:h-[600px]"
      >
        <div className=" sm:w-[280px] sm:flex-col sm:h-[675px]  sm:-mt-[0] md:z-0 md:w-[45vw]  md:mt-[290px] md:-ml-3 md:mr-0  md:h-[250px] lg:mt-[7vh] lg:h-[32vh] xl:w-[27vw] xl:h-[49vh] z-40">
          <div className="absolute sm:z-0 md:z-0 sm:animate-pulse sm:ring-teal-500/80 sm:ml-[42px] sm:animate-none sm:h-[175px]  sm:w-[196px] lg: lg:mt-[40vh] lg:z-10  sm:mt-[97px]  rounded ring-8 lg:rounded object-center xl:ring-blue-600/80  lg:ring-blue-500/40 animate-pulse  lg:w-[450px] lg:h-[150px] lg:-ml-[90px] md:w-[930px] md:mt-[100px] md:-ml-[50px]  md:h-[250px] xl:w-[24.5vw] xl:h-[50vh] xl:z-0 xl:mt-32 z-30" />
          <div className="relative  md:absolute mt-40 sm:mt-[271px]  rounded ring-4 lg:rounded object-center ring-purple-700 sm:ring-blue-500/40  lg:ring-teal-500/70 animate-pulse lg:w-[260px] lg:h-[260px] lg:ring-8 lg:absolute lg:mt-[19.6vh] lg:-z-50 lg:ml-[5px] sm:w-[100vw] sm:-ml-[40px] sm:animate-pulse sm:h-[100px]  md:w-[340px]  md:ring-teal-400/60 md:rounded md:mt-[5px] md:z-0 md:ml-1 md:ring-8 md:h-[300px]  xl:w-[27vw] xl:h-[50vh] xl:ml-0 xl:z-50 xl:mt-40  -z-10" />

          <Image
            src={urlFor(pageInfo?.profilePic).url()}
            alt="image of Omar"
            width={200}
            height={200}
            className=" relative sm:absolute sm:z-10 sm:w-[205px]  sm:h-[200px] sm:ml-[38px] rounded ring-8 ring-purple-700 lg:ring-purple-800/90 object-cover lg:object-cover lg:w-[270px] lg:h-[270px] lg:mt-[19vh] md:ring-8 md:mt-0 md:w-[350px] md:container md:h-[350px] xl:-z-40 xl:mt-40 lg:z-20 z-40 sm:-mt-[280px] "
          />
        </div>
      </motion.div>
      <div className="space-y-10 px-0 sm:space-y-5 sm:-mx-7 sm:mb-0 md:space-y-5 md:h-[340px] md:px-0  md:w-[35vw] md:mb-[170px] lg:pt-5 lg:mb-[30vh] lg:px-10 z-40">
        <h4 className="text-4xl font-semibold ">
          {" "}
          Here is a{" "}
          <span className="underline decoration-[#45f2bebe]">little</span>{" "}
          backround
        </h4>
        <p className="text-base ">
         {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;