

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactPlayer from 'react-player'

import { urlFor } from "../../lib/urlFor";
import {Project} from "../../types"

type Props = {
    projects: Project[];
    
};

function Projects({projects}: Props) {
  

  return (
  <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0"
  >  
      <h3 className="absolute top-12 uppercase tracking-[20px]  text-gray-500 text-2xl   z-30 lg:top-[5%] sm:top-20">
        Projects
      </h3>
      <div className="relative w-full flex sm:[w-100%] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 sm:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-purple-700 ">
        {projects?.map((project, i ) => (
         <motion.div 
          key={project._id}
          className=" w-screen  flex-shrink-0 flex-wrap snap-center flex-row flex  items-center overflow-y-scroll justify-center p-2 md:p-7 h-screen sm:w-[100%] xl:mt-12  "
         >
            
            <Link key={project._id} className= "h-[20%] -mt-12 -mb-20" href={project.linkToBuild}>     
           <motion.div
                key={project._id}
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className=" object-center shadow-proj shadow-purple-400/50  -z-10 md:w-[80vw] md:h-[40vh] md:mt-12vh sm:h-[53vw] sm:w-[92vw] sm:mt-12  sm:mr-3  mt-0 justify-center items-center mb-10 flex lg:mt-[0px] lg:w-[47vw] lg:h-[47vh] xl:mt-10 xl:h-[40vh] xl:w-[40vw]"
          >
              
           
                     <ReactPlayer
            streamType="on-demand"
            key={project._id}
            url={project?.promoVideo}
            height= '100%'
            width='100%'
            alt="Project Promo"
           
             />
              
            

          </motion.div>
          </Link>
          
              <div className="space-y-5 xl:pb-20  px-0 md:px-10 sm:px-1 max-w-6xl sm-z-40 sm:-mt-10 sm:h-[300px] lg:mt-10 lg:-mb-12 z-30">
                <h4 className="text-4xl font-semibold text-center">
                  <span className=" underline decoration-[#34f5d5]/70">
                    {" "}
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <div className="flex items-center space-x-2 lg:-mt-10 justify-center"
                >
                    {project?.technologies.map((technology)=> (
                        
                        <Image
                       width={10}
                       height={10}
                        className="h-10 w-10"
                        key={technology._id}
                        src={urlFor(technology.image).url()}
                        alt=""
                        />
                    ))}
                </div>
                <p className="text-lg text-center h-32 bg-gray-700/20 overflow-y-scroll  scrollbar-track-gray-400/20 scrollbar-thumb-indigo-400  px-5 md:text-left sm:h-48 sm:pb-20 ">
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
          
             </motion.div>
                  ))}
        </div>
            <div className="w-full absolute top-[30%] bg-[#30f1e1fa]/10 left-0 h-[500px] -skew-y-12" />
        
       </motion.div>
       
  );
  
};

export default Projects;