import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

function Card({ imageSrc, service, learnmore }) {
  return (
    <div className=" h-[400px] w-[250px]">
      <div className="h-[300px] ">
        <Image
          src={imageSrc}
          alt="cardImg"
          className="h-full w-full object-cover rounded-tl-3xl rounded-br-3xl"
          height={400}
          width={400}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-6">
        <h3 className="text-xl uppercase font-semibold tracking-wider">
          {service}
        </h3>
        <Link
          href={learnmore}
          className="flex items-center tracking-wide gap-x-1 text-violet-600"
        >
          LEARN MORE <RiArrowRightUpLine size={26} />
        </Link>
      </div>
    </div>
  );
}
export default Card;
