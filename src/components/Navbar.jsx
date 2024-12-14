import React, { useState } from "react";
import { assets } from "../../public/assets/assets";
const Navbar = () => {
  const [toggle, isToggle] = useState(false);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="conatiner mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />
        <ul className="hidden md:flex gap-7 items-center text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          onClick={() => isToggle(true)}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/* Mobil Mneu */}
      {toggle && (
        <div className="md:hidden fixed right-0 top-0 bottom-0 overflow-hidden w-full bg-white">
          <div
            onClick={() => isToggle(false)}
            className="flex justify-end p-6 cursor-pointer"
          >
            <img className="w-6" src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium transition-all">
            <a
              onClick={() => isToggle(false)}
              href="#Header"
              className="px-4 my-2 rounded-full inline-block"
            >
              Home
            </a>
            <a
              onClick={() => isToggle(false)}
              href="#About"
              className="px-4 my-2 rounded-full inline-block"
            >
              About{" "}
            </a>
            <a
              onClick={() => isToggle(false)}
              href="#Projects"
              className="px-4 my-2 rounded-full inline-block"
            >
              Projects{" "}
            </a>
            <a
              onClick={() => isToggle(false)}
              href="#Testimonials"
              className="px-4 my-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
