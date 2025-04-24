import Navbar from "@/components/shared/Navbar";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#E65127]">
      <div className="flex flex-col justify-center items-center px-5">
        <div className="max-w-[1080px] h-screen w-full">
          <Navbar />
          <div className="flex flex-col justify-center mt-10">
            <h1 className="text-center text-white text-2xl">
              Welcome Back DingDing
            </h1>
            <form>
              <div className="flex flex-col justify-center items-center mt-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="p-2 rounded-md text-gray-700 outline-none bg-gray-200 w-full max-w-[400px]"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 rounded-md bg-gray-200 text-gray-700 outline-none w-full max-w-[400px] mt-3"
                />
                <button className="bg-white cursor-pointer text-[#E65127] p-2 rounded-md w-full max-w-[400px] mt-3">
                  Login
                </button>
              </div>
              <Link href="/register">
                <p className="text-center text-white mt-3 cursor-pointer hover:underline">
                  Don't have an account? Register
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
