import Navbar from "@/components/shared/Navbar";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#E65127]">
      <div className="flex flex-col justify-center items-center px-5">
        <div className="max-w-[1080px] h-screen w-full">
          <Navbar />
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-white text-2xl">
              Welcome Back DingDing
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
