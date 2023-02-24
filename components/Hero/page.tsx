

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

import  {urlFor}  from '../../lib/urlFor'
import ProfileImage from '../../public/199C99F5-5514-4967-93ED-175312928B64.png'
import {PageInfo} from '../../types' 
import BackgroundCircles from "../BackgroundCircles/page"
import Bottom from "../Bottom/page"

type Props = {
  pageInfo: PageInfo

}

const HomePage = ({pageInfo}: Props) => {

    const [text,count] = useTypewriter({
        words: [
            `{ name: ${pageInfo?.name} `,
            " Software Developer who_Loves: ",
            " Self Development,"
            
           
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className=" h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />

        <Image

          src= {ProfileImage}
        
          alt= "image of Omar"
          width={200}
          height={200}
          className=" rounded-full pb-0 h-40  w-40 ring-2 ring-indigo-500 object-cover z-80 "
        /> 
     
       <div className= " z-20">
        <h2 className="text-l uppercase text-gray-500 pb-2 pt-5 tracking-[15px]"> {pageInfo?.role}</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">

        <span className="mr-3 sm:w-[90%]"> {text}</span>
        <Cursor cursorColor="green"/>

        </h1>
        <div className="pt-9 ">
            <Link href=" #about" >
            
            <button className="heroButton"> About </button>
            </Link>
            <Link href=" #experience">
            
            <button className="heroButton"> Experience </button>
            </Link>
            <Link href=" #skills">
            
            <button className="heroButton"> Skills </button>
            </Link>
            
            <Link href="#projects">
            
            <button className="heroButton"> Projects </button>
            </Link>
            
            
        </div>
       
       </div>
       
    </div>
  )
}

export default HomePage