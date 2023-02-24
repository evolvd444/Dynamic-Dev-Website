import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import type { Social } from 'types'

export interface HomePageProps {
  socials?: Social[]
}

export default function HomePageHead({ socials }: HomePageProps) {
  return (
    <>
      <Head>
        <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center ">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center"
          >
            {/* Social Icons */}
            {socials?.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
              />
            ))}

            {/* <SocialIcon
              url="https://www.youtube.com/@thedynamicdev"
              fgColor="gray"
              bgColor="transparent"
            />

            <SocialIcon
              url="https://www.youtube.com/@thedynamicdev"
              fgColor="gray"
              bgColor="transparent"
            />

            <SocialIcon
              url="https://www.youtube.com/@thedynamicdev"
              fgColor="gray"
              bgColor="transparent"
            /> */}
          </motion.div>
          <Link href="#contact">
            <motion.div
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex cursor-pointer flex-row items-center text-gray-300"
            >
              <SocialIcon
                url="https://www.youtube.com/@thedynamicdev"
                className="cursor-pointer"
                network="email"
                fgColor="gray"
                bgColor="transparent"
              />
              <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
                {' '}
                Get in Touch
              </p>
            </motion.div>
          </Link>
        </header>
      </Head>
    </>
  )
}
