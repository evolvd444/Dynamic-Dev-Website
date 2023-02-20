

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../lib/sanity";
import Link from "next/link";
import MuxPlayer from '@mux/mux-player-react';
import Image from "next/image";

type Props = {
    projects: Project[];
    
};

function Projects({ projects }: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute uppercase tracking-[20px]  text-gray-500 text-2xl   z-30 lg:top-12 sm:top-20">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-purple-700 ">
        {projects?.map((project, i ) => (
         
          <motion.div
          key={project._id}
        
          className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen"
        >
          
            <div className=" w-screen  flex-shrink-0 flex-wrap snap-center flex-row flex  items-center overflow-y-scroll justify-center p-2 md:p-7 h-screen sm:w-full pt-20 xl:mt-12  ">
            
            
             
            <Link key={project._id} href={project.linkToBuild}>     
            <motion.div
              initial={{
                y: -300,
                
              }}
              whileInView={{ opacity: 1, y:0}}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            className="md:mb-0 flex-shrink-0  md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer">           
                     <MuxPlayer
                streamType="on-demand"
                key= {project.playbackId}
                 playbackId={project.playbackId}
                metadata={{
                 video_id: "video-id-54321",
                video_title: "Test video title",
                 viewer_user_id: "user-id-007",
            
             }}
                className = 'shadow-proj sm:mb-20 shadow-purple-400/50 mb-5 z-10'
             />
             </motion.div>
            </Link>       
                
             

                <div className="space-y-5 xl:pb-20  px-0 md:px-10 sm:px-1 max-w-6xl sm:mt-0 sm:h-[300px] lg:-mt-12 ">
                <h4 className="text-4xl font-semibold text-center">
                  <span className=" underline decoration-[#34f5d5]/70">
                    {" "}
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <div className="flex items-center space-x-2  justify-center">
                    {project?.technologies.map((technology)=> (
                        
                        <Image
                        className="h-10 w-10"
                        height="20"
                        width="20"
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt=""
                        />
                        ))}
                </div>
                <p className="text-lg text-center h-32 bg-blue-400/10 overflow-y-scroll  scrollbar-track-gray-400/20 scrollbar-thumb-indigo-400 md:text-left sm:h-48 sm:pb-20 ">
                {project.summary}
                  {/* The Fullcourt App is the first of its kind. It aims to solve
                  the issues of the pick-up basketball scene. Often it can be
                  hard to find basketball games on your schedule and on demand.
                  Most people who love basketball have to move their schedules
                  around just to make runs or games and even when they do find
                  one, it may not be quality or very fair. Busy basketball
                  players either quit trying to find games because its just too
                  hard to find quality or just deal with what they are given...
                  Fullcourt enables the community to take control by providing
                  the tools to organize games and build up thier communities in
                  a way where people with simlilar schedules and personalities
                  can get fun cardio on demand! */}
                </p>
                </div>
              </div>
            </motion.div>
            ))}
            </div>
            
            <div className="w-full absolute top-[30%] bg-[#30f1e1fa]/10 left-0 h-[500px] -skew-y-12" />
            </motion.div>
    );
    }

export default Projects;