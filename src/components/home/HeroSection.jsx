import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../app/h.png";

const HeroSection = () => {
  return (
    <div className="w-full py-10 flex md:flex-row flex-col items-center md:justify-between gap-8">
      <div className="flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight">
          Connect with friends <br /> and the world around you
        </h1>
        <h3 className="text-md sm:text-lg text-gray-200">
          Sign up to share updates, interact with others, <br /> and stay
          connected to your social circle.
        </h3>
        <div className="mt-6">
          <Link
            href={"/"}
            className="text-[#E65127] bg-white py-3 px-10 sm:px-16 md:px-24 text-lg rounded-md inline-block"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div>
        <Image
          src={Hero}
          width={350}
          alt="Chat on DingDing"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default HeroSection;
