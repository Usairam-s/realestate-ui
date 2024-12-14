import React, { useEffect } from "react";
import { assets, projectsData } from "../../public/assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currIndex, setCurrIndex] = React.useState(0);
  const [showProject, setShowProject] = React.useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setShowProject(projectsData.length);
      } else {
        setShowProject(1);
      }
    };

    updateCardToShow();

    window.addEventListener("resize", updateCardToShow);
    return () => {
      window.removeEventListener("resize", updateCardToShow);
    };
  }, []);

  const nextPoject = () => {
    setCurrIndex((prev) => (prev + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className=" mx-auto my-20 container p-14 md:px-24 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl text-center sm:text-4xl font-bold mb-2">
        Projects{" "}
        <span className="underline underline-offset-4 font-light decoration-1 under">
          Completed
        </span>
      </h1>
      <p className="text-grey-500 max-w-80 mx-auto text-center text-gray-400 mb-8 ">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Slider */}
      <div className="flex justify-end items-center mb-8 w-full gap-4">
        <button onClick={prevProject} className="p-3 bg-gray-200 rounded">
          <img src={assets.left_arrow} alt="Pevious Arrow" />
        </button>
        <button onClick={nextPoject} className="p-3 bg-gray-200 rounded">
          <img src={assets.right_arrow} alt="Pevious Arrow" />
        </button>
      </div>

      {/* Slider */}

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currIndex * 100) / showProject}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div className="w-full sm:w-1/4 relative flex-shrink-0" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="bg-white inline-block px-4 py-2 w-3/4 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span></span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
