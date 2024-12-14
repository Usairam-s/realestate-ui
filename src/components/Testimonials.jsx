import React, { useEffect } from "react";
import {
  assets,
  projectsData,
  testimonialsData,
} from "../../public/assets/assets";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className=" mx-auto my-20 container p-14 md:px-24 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl text-center sm:text-4xl font-bold mb-2">
        Customer{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          Testimonials
        </span>
      </h1>
      <p className="text-grey-500 max-w-80 mx-auto text-center text-gray-400 mb-8 ">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((item, index) => (
          <TestimonialCard
            image={item.image}
            name={item.name}
            role={item.title}
            rating={item.rating}
            text={item.text}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
