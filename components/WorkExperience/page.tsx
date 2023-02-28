
import {ChevronRightIcon } from "@heroicons/react/24/outline"
import {motion} from 'framer-motion'
import React from 'react'

import { Experience } from '../../types'
import ExperienceCard from '../ExperienceCard/page'
type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div 
    initial= {{
      opacity:0
  }}
  transition= {{
      duration:1.5
  }}
  whileInView= {{ opacity:1
}}
  viewport={{
      once:true
  }}
    
    className="h-screen flex sm:-ml-3 sm:-mb-[23.5%] lg:py-5 relative overflow-hidden flex-col text-left md:flex-row max-w-full px-0 justify-evenly mx-auto items-center">
     
     <h3 className="absolute z-30 uppercase md:-mt-[75vh] lg:-mt-[75vh] tracking-[20px] text-gray-500 text-2xl sm:ml-[10%] sm:-m-[0%] sm:top-20"> Experience</h3>
    
      <ChevronRightIcon className="h-10 w-10 z-40 absolute ml-[90vw] text-blue-400/20 animate-ping"/>
    <div className="w-full sm:pt-10 flex sm:-mb-[11px] sm:ml-7 space-x-5 lg:space-x-15 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-purple-700">
    {experiences?.map(experience => (
    <ExperienceCard key={experience._id} experience={experience}/>
    ))}
    
   

    </div>
    
    </motion.div>
  )
}

export default WorkExperience

