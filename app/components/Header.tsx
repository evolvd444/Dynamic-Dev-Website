import React from 'react'
import {SocialIcon} from "react-social-icons"
import {motion} from "framer-motion"
import Link from 'next/link'
import { Social } from '../../typings'

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

    
    const socials: Social[] = await res.json();

    console.log("fetching", socials);

    return socials;
}
export default async function Header() {
    const socials = await fetchSocials();

  return (
    <header className= "sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration:1.5,
        }}
        className= "flex flex-row items-center">
            {/* Social Icons*/}
            {socials.map((social) => (
            <SocialIcon
            key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor='transparent'
            />
            ))}
           
            {/* <SocialIcon url= "https://www.youtube.com/@thedynamicdev" 
            fgColor="gray" 
            bgColor= "transparent"/>

                <SocialIcon url= "https://www.youtube.com/@thedynamicdev" 
            fgColor="gray" 
            bgColor= "transparent"/>

                <SocialIcon url= "https://www.youtube.com/@thedynamicdev" 
            fgColor="gray" 
            bgColor= "transparent"/> */}
             </motion.div>
            <Link href= "#contact">
            <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity:1,
                scale: 1,
            }}
            transition={{
                duration:1.5
            }}
            className= "flex flex-row items-center text-gray-300 cursor-pointer">

                <SocialIcon url= "https://www.youtube.com/@thedynamicdev" 
            className= "cursor-pointer"
            network="email"
            fgColor="gray" 
            bgColor= "transparent"/>
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400"> Get in Touch</p>

            </motion.div>
            </Link>

    </header>
  )
}
