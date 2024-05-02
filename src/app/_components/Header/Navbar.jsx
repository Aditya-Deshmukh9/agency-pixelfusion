"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import Button from "../Style/Button";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const navtext = [
    { text: "Home", href: "/home" },
    { text: "Agency", href: "/agency" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <div className="h-[80px] w-full flex items-center justify-between px-4 sm:px-12 border-b shadow-sm">
      <div className="flex items-center text-[#B91708] space-x-1">
        <Image
          src={"/pixelfusion_logo-removebg-preview (1) (1).png"}
          alt="logo"
          height={100}
          width={100}
          className="h-8 w-8 bg-yellow-300"
        />
        <h2 className="text-xl font-extrabold">PIXEL FUSION</h2>
      </div>
      <div className="hidden lg:flex items-center justify-evenly gap-12">
        {navtext.map((e, index) => (
          <Link href={e.href} key={index}>
            <p>{e.text}</p>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center">
        {/* <button className="bg-[#FEE801] px-8 py-2 rounded-full text-black">
          Book A Consultation
        </button> */}
        <Button>Contact Now</Button>
      </div>
      <div
        className={`bg-white h-screen w-full ${
          openMenu ? "visible" : "hidden"
        } lg:hidden absolute z-10 top-0 left-0`}
      >
        <div className="flex justify-end pt-7 px-5 transition duration-200">
          <IoCloseCircleOutline
            size={25}
            color="black"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
        <ul className="text-black flex flex-col items-center justify-center h-1/2 py-8 px-4 gap-y-4">
          <li className="py-2">Menu Item 1</li>
          <li className="py-2">Menu Item 2</li>
          <li className="py-2">Menu Item 3</li>
        </ul>
      </div>
      <div className="lg:hidden transition duration-200">
        <RiMenu3Fill size={25} onClick={() => setOpenMenu(!openMenu)} />
      </div>
    </div>
  );
}

export default Navbar;
