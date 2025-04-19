import Image from "next/image";
import Link from "next/link";
import React from "react";
import DingDing from "../../app/l.png";

const Navbar = () => {
  return (
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
          href={"/login"}
          className="border rounded-full px-6 py-2 hover:text-gray-200"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
