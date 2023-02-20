import React from "react";
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/A2EF22D9-F376-4A90-89BE-85B4C8F4.png"



const Footer = () => {
  return (
    <div>
      <Link href="#hero">
        <div className=" sticky bottom-3 sm:-bottom-3 cursor-pointer">
          <footer className="flex items-center justify-center ">
            <Image
              className="  rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={Logo}
              height={222}
              width={444}
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

export default Footer;
