import React, { useEffect } from "react";
import { assets, projectsData } from "../../public/assets/assets";

const TestimonialCard = ({ image, name, role, rating, text }) => {
  return (
    <div
      className="p-8 border shadow-lg flex flex-col gap-4
     justify-center items-center"
    >
      <img src={image} alt="Testimonial" className="w-20 h-20 rounded-full" />
      <div className="flex flex-col items-center gap-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-400">{role}</p>
      </div>
      {/* stars */}
      <div className="flex items-center gap-1">
        {/* Dynamically generate stars based on the rating */}
        {Array.from({ length: rating }, (_, index) => (
          <img
            key={index}
            src={assets.star_icon} // Replace with your actual star icon path
            alt="Star"
            className="w-5 h-5"
          />
        ))}
      </div>

      <p className="text-center text-gray-400">{text}</p>
    </div>
  );
};

export default TestimonialCard;
