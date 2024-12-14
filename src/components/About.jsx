import React from "react";
import { assets } from "../../public/assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center mx-auto container lg:px-32 p-14 md:px-24  w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl text-center sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          Our Brand
        </span>
      </h1>
      <p className="text-grey-500 text-center mx-auto max-w-80 text-gray-400 mb-8 ">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row items-center md:gap-20 md:justify-start">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        {/* right section */}
        <div
          className="flex flex-col gap-10
       items-center md:items-start mt-10 text-grey-600"
        >
          {/* statistics */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
            <div>
              <p className="text-3xl font-semibold">10+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">12 +</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-semibold"> 20+</p>
              <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">25+</p>
              <p className="text-gray-600">Ongoing Projects</p>
            </div>
          </div>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button
            className="bg-blue-600 text-white px-8 py-2 rounded-sm
        "
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
