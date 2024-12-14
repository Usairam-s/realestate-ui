import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/assets/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="conatiner py-6 px-6 md:px-20 lg:px-32 mx-auto text-center"
      >
        <h2 className="text-4xl tracking-wider md:text-5xl lg:text-6xl text-white text-center shadow-md font-semibold max-w-3xl leading-tight">
          Explore homes that fit your dreams
        </h2>
        <div className="my-8 flex items-center gap-8 mx-auto w-fit">
          <a className=" bg-white px-8 py-2 rounded-full" href="#Projects">
            Projects
          </a>
          <a className=" bg-white px-8 py-2 rounded-full" href="#Contact">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
