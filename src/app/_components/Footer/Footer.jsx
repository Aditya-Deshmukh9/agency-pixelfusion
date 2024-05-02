import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <div className="sm:h-[400px] grid grid-cols-2 grid-rows-2 gap-4 content-center sm:grid-cols-5 px-4 sm:px-20 py-8 border-t  ">
        <div className="flex flex-col sm:items-start items-center justify-center sm:justify-start gap-y-2 col-span-2">
          <div className="flex items-center text-[#B91708] space-x-1">
            <Image
              src={"/pixelfusion_logo-removebg-preview (1) (1).png"}
              alt="logo"
              height={100}
              width={100}
              className="h-8 w-8"
            />
            <h2 className="text-xl font-extrabold">PIXEL FUSION</h2>
          </div>
          <p className="text-sm mt-7">
            Reach us Monday {"-"}
            <br /> Friday from 9 am to 6 pm
          </p>
          <p className="text-sm">+1 001 234 5678</p>
          <button className="bg-[#FEE801] px-8 py-2 mt-4 rounded-full text-black">
            Book A Consultation
          </button>
        </div>
        <div className="">
          <h2 className="font-bold">COMPANY</h2>
          <div className="flex flex-col gap-y-3 mt-4 sm:mt-12">
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Agency</Link>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold">Services</h2>
          <div className="flex flex-col gap-y-3 mt-4 sm:mt-12">
            <Link href={"#"}>Animated videos </Link>
            <Link href={"#"}>Website design</Link>
            <Link href={"#"}>Illustration</Link>
            <Link href={"#"}>Social Media</Link>
            <Link href={"#"}>Brochure </Link>
            <Link href={"#"}>Logo </Link>
          </div>
        </div>
        <div className="">
          <h2 className="font-bold">Connect with us</h2>
          <div className=" mt-4 sm:mt-12 flex gap-x-4">
            <RiLinkedinBoxLine size={35} />
            <RiInstagramLine size={35} />
          </div>
        </div>
      </div>
      <footer className="h-10 bg-violet-500 text-white flex items-center justify-center">
        Copyright © 2024 ThemeGenix
      </footer>
    </div>
  );
}

export default Footer;
