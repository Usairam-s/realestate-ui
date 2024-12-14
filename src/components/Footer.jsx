import React from "react";
import { assets } from "../../public/assets/assets";

const Footer = () => {
  return (
    <div
      classNameName="flex  items-center justify-between mx-auto container p-14 md:px-24  w-full overflow-hidden"
      //   id="About"
    >
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <img className="mx-auto" src={assets.logo} alt="logo" />
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Find your next dream house with our help
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6">Premium</a>
            </li>

            <li>
              <a className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6">FAQs</a>
            </li>
            <li>
              <a className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©2024{" "}
            <a href="#" className="hover:underline">
              Usairam Saleem™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
