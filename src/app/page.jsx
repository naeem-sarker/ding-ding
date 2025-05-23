import React from "react";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/home/HeroSection";

const Home = () => {
  return (
    <div className="bg-[#E65127] h-screen">
      <div className="flex flex-col justify-center items-center px-5">
        <div className="max-w-[1080px] h-screen">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
