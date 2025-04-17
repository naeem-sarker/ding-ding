import Image from "next/image";
import Link from "next/link";
import React from "react";
import DingDing from "./l.png";
import Hero from "./h.png";

const Home = () => {
  return (
    <div>
      <div className="bg-[#E65127] px-20">
        <nav className="flex justify-between items-center">
          <Link href={"/"} className="flex items-center">
            <Image
              src={DingDing}
              width={60}
              alt="
            DingDing is a social media platform."
            />
            <span className="text-white text-2xl font-bold">DingDing</span>
          </Link>
          <div className="flex gap-4 text-gray-300  text-md items-center">
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
        <div></div>
      </div>

      <div className="bg-[#E65127] p-20 flex justify-between gap-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl text-white">
            Connect with friends and
            <br />
            the world around you
          </h1>
          <h3 className="text-xl text-gray-200">
            Sign up to share updates, interact with others, <br /> and staty
            connected to your social cicle.
          </h3>
          <div className="mt-8">
            <Link
              href={"/"}
              className="text-[#E65127] bg-white py-4 px-40 text-xl rounded-md"
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
  );
};

export default Home;
