import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
    pageInfo: PageInfo;
  };
  
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
  
const ContactMe = ({ pageInfo }: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
      };

  return (
    <motion.div className= " h-screen flex sm:px-10 relative sm:flex-col flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
     <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl drop-shadow-md ">Contact</h3>
        <div className="flex flex-col space-y-10 sm:mt-10 sm:space-y-9 sm:mb-2">
        <h4 className=" text-4xl font-semibold text-center ">Like what you see?{" "}
        <span className= "decoration-[#34f5d5]/50 underline animate-pulse"> Lets Talk. </span>
        </h4>
        <div className= "flex justify-center pr-3.5 items-center flex-col space-y-10 sm:space-y-5">
            <div className= "flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-6 w-6 text-blue-500 animate-pulse " />
            <p className="text-2xl"> +1234567890 </p>

            </div>
            {/* <div className= "flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-6 w-6 text-purple-500 animate-bounce " />
            <p className="text-2xl"> +1234567890 </p>

            </div> */}
            <div className= "flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-6 w-6 text-purple-500 animate-pulse " />
            <p className="text-2xl"> omar@thedynamic.dev </p>

            </div>
        </div>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className= "flex flex-col space-y-2 sm:mr-5 w-fit mx-auto sm:w-[90vw] sm:flex-col"
        >
            <div className=" flex sm:flex-col sm:space-y-2 sm:w-[90vw] sm:space-x-0 space-x-2">

            <input {...register('name')} placeholder="Name" type="text"  className= " contactInput "/> 
            <input {...register('email')} placeholder="Email" type="email" className= "contactInput " />
            </div>
            <input {...register('subject')} placeholder="Subject" type="text" className= "contactInput "/>
            <textarea {...register('message')} placeholder="Message" className= "contactInput "/>
            <button type="submit" className="bg-teal-400/60 py-5 px-10 rounded-md text-white font-bold text-lg">Submit</button>
        </form>
        </div>
    </motion.div>
  )
}

export default ContactMe