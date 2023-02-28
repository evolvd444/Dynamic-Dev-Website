import {motion} from "framer-motion"
import React from 'react'
const BackgroundCircles = () => {
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
          <div className="absolute border border-[#06f1f140] ring-[#0afdf544] ring-2 rounded-full  h-[147px] w-[147px] mt-[205px] animate-pulse "/>
          <div className="absolute border ring-[#bc0afd3d] ring-2 border-[#bc0afd5a] rounded-full  h-[150px] w-[150px] mt-[205px] animate-pulse -z-30"/>
          <div className="absolute border border-[#a80afd52] rounded-full  h-[179px] w-[179px] mt-48 animate-ping "/>
          <div className=" absolute rounded-full border border-[#10b7f985] opacity-20  h-[350px] w-[350px] mt-48  " />
          <div className=" absolute border border-[#11d2f445] rounded-full opacity-20 h-[500px] w-[500px] mt-48 z-0  "/>
          <div className=" absolute border border-[#fd39ae2a] rounded-full opacity=20 h-[650px] w-[650px] mt-48  "/>
          <div className=" absolute border border-[#00d4fe3c] rounded-full opacity-10 h-[800px] w-[800px] mt-48 animate-pulse" />
      </motion.div>
    )
  }
  
  export default BackgroundCircles