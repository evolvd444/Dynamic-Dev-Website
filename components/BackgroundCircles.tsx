import React from 'react'
import {motion} from "framer-motion"

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
    initial= {{
        opacity: 0,
    }}
    animate= {{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2,0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "30%", "50%", "80%", "20%"]
    }}
    transition= {{
        duration: 2.5,
    }}
    
    className= "relative  flex justify-center items-center">
        <div className="absolute border border-[#06f1f18a] rounded-full  h-[168px] w-[168px] mt-48 animate-pulse "/>
        <div className="absolute border border-[#bc0afd91] rounded-full  h-[170px] w-[170px] mt-48 animate-pulse "/>
        <div className="absolute border border-[#a80afd52] rounded-full  h-[179px] w-[179px] mt-48 animate-ping "/>
        <div className=" absolute rounded-full border border-[#06b0f31b] opacity-20  h-[350px] w-[350px] mt-48 animate-pulse " />
        <div className=" absolute border border-[#d225f51a] rounded-full opacity-20 h-[500px] w-[500px] mt-48 z-0 animate-pulse "/>
        <div className=" absolute border border-[#07f9e112] rounded-full opacity=20 h-[650px] w-[650px] mt-48  "/>
        <div className=" absolute border border-[#3336f433] rounded-full opacity-10 h-[800px] w-[800px] mt-48 animate-pulse" />
    </motion.div>
  )
}

export default BackgroundCircles