import { assets } from "@/Assests/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="logo" width={180} className="w-[130px] sm:w-[150px] md:w-[160px] lg:w-[180px]" />
        <button type="submit" className="flex items-center gap-2 font-medium py-1 px-3 sm:py-2 sm:px-4 border border-black shadow-[-3px_3px_0px_#000000] sm:shadow-[-7px_7px_0px_#000000]">
          Get Started
          <Image src={assets.arrow} alt="img"/>
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-5 max-w-[740px] m-auto sm:mt-10 text-xs sm:text-base ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nisi odit minus veniam temporibus! Perspiciatis obcaecati fugiat fugit esse non sit repudiandae atque dignissimos neque.</p>
        <form className="flex flex-col sm:flex-row justify-between max-w-[600px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" action="">
          <input className="text-center sm:text-left outline-none py-2 px-4 sm:pl-4" placeholder="Enter your email" type="email" />
          <button className=" border-t sm:border-l border-black py-2 px-4 sm:px-6 font-medium hover:bg-gray-600 hover:text-white w-full sm:w-auto"type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
