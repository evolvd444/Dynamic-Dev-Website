import Image from "next/image"
import Link from "next/link"
import Logo from "public/FAACD828-E87A-4C20-99C8-2A9D0A22521D.png"
import React from "react";



const Bottom = () => {
  return (
    <div className=" sticky -bottom-0 sm:-bottom-3 cursor-pointer">
      <Link href="#hero">
        <div >
          <div className="flex items-center justify-center ">
            <Image
              className=" filter grayscale  sticky bottom-3 hover:grayscale-0 cursor-pointer"
              src={Logo}
              height={160}
              width={300}
              alt=""
            />
          </div>
        </div>
      </Link>
  
    </div>
  );
};

export default Bottom;
