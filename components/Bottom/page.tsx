import Image from "next/image"
import Link from "next/link"
import Logo from "public/FAACD828-E87A-4C20-99C8-2A9D0A22521D.png"
import React from "react";



const Bottom = () => {
  return (
    <div className=" sticky -bottom-7 sm:-bottom-3 cursor-pointer">
      <Link href="#hero">
        <div >
          <footer className="flex items-center justify-center ">
            <Image
              className=" filter grayscale  sticky bottom-3 hover:grayscale-0 cursor-pointer"
              src={Logo}
              height={160}
              width={300}
              alt=""
            />
          </footer>
        </div>
      </Link>
      <h6 className="flex bg-black snap-center justify-bottom object-center">
        <a
          href="https://iconscout.com/icons/typescript"
          target="_blank"
          rel="noreferrer"
        >
          Typescript Icon
        </a>{" "}
        by{" "}
        <a
          href="https://iconscout.com/contributors/icon-54"
          target="_blank"
          rel="noreferrer"
        >
          Icon 54
        </a>
      </h6>
    </div>
  );
};

export default Bottom;
