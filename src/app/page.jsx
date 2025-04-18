import Image from "next/image";
import Link from "next/link";
import React from "react";
import DingDing from "./l.png";
import Hero from "./h.png";

const Home = () => {
  return (
    <div className="bg-[#E65127]">
      <div className="flex flex-col justify-center items-center px-5">
        <div className="max-w-[1080px]">
          <nav className="flex justify-between items-center py-4">
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={DingDing} width={50} alt="DingDing Logo" />
              <span className="text-white text-xl sm:text-2xl font-bold">
                DingDing
              </span>
            </Link>
            <div className="hidden md:flex gap-4 text-gray-300 text-md items-center">
              <Link href={"/"} className="hover:text-gray-200">
                Home
              </Link>
              <Link href={"/"} className="hover:text-gray-200">
                About
              </Link>
              <Link href={"/"} className="hover:text-gray-200">
                Contact
              </Link>
              <Link
                href={"/"}
                className="border rounded-full px-6 py-2 hover:text-gray-200"
              >
                Log in
              </Link>
            </div>
          </nav>

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
        </div>
      </div>
    </div>
  );
};

export default Home;
