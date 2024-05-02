import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="min-h-screen object-cover w-full">
      <div className="h-screen">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center text-[#B91708] space-x-1">
            <Image
              src={"/pixelfusion_logo-removebg-preview (1) (1).png"}
              alt="logo"
              height={100}
              width={100}
              className="h-8 w-8"
            />
            <h2 className="text-xl font-extrabold">PIXEL FUSION</h2>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl mt-4 text-nowrap font-semibold text-center overflow-hidden">
            WE BUILD DIGITAL
            <br /> EXPERIENCES
          </h1>

          <div className="flex justify-center items-center gap-x-3">
            <h2 className="text-sm sm:text-lg lg:text-xl font-semibold">
              WEBSITES
            </h2>
            <span className="text-green-600 text-4xl font-bold mb-5">.</span>
            <h2 className="text-sm sm:text-lg lg:text-xl  font-semibold">
              {" "}
              BRANDING{" "}
            </h2>{" "}
            <span className="text-green-600 text-4xl font-bold mb-5">
              .
            </span>{" "}
            <h2 className="text-sm sm:text-lg lg:text-xl  font-semibold">
              {" "}
              LOGO
            </h2>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Banner;
