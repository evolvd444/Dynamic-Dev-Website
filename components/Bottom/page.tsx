import Image from "next/image"
import Link from "next/link"
import Logo from "public/FAACD828-E87A-4C20-99C8-2A9D0A22521D.png"
import React from "react";



const Bottom = () => {
  return (
    <div className=" sticky -bottom-3 sm:bottom-10 cursor-pointer">
      <Link href="#hero">
        
          <div className="flex items-center justify-center ">
            <Image
              className=" -bottom-0 md:top-20 sm:bottom-10 hover:grayscale-0 cursor-pointer"
              src={Logo}
              height={160}
              width={300}
              alt=""
            />
          </div>
        
      </Link>
  
    </div>
  );
};

export default Bottom;
