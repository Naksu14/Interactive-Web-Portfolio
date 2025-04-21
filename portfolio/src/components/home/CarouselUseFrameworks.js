import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import reactLogo from "../../assets/frameworks/react.png";
import htmlLogo from "../../assets/frameworks/html.png";
import cssLogo from "../../assets/frameworks/css.png";
import tailwindLogo from "../../assets/frameworks/tailwind.png";
import materialLogo from "../../assets/frameworks/material.png";
import jsLogo from "../../assets/frameworks/javascript.png";
import domLogo from "../../assets/frameworks/react-dom.png";

const frameworks = [
  { name: "React.js", image: reactLogo,
    description: "Used as the main JavaScript library to build the interactive UI components of the website."},
  { name: "React DOM", image: domLogo, description: "Handles rendering of React components to the browser’s DOM efficiently."},
  { name: "HTML5", image: htmlLogo , description: "Provides the basic structure of the webpage, forming the skeleton for all components."},
  { name: "CSS3", image: cssLogo , description: "Used to style base elements and customize visual layouts when utility classes are not enough"},
  { name: "Tailwind CSS", image: tailwindLogo , description: "Enables rapid UI styling with utility-first classes for responsive and modern design."},
  { name: "Material UI", image: materialLogo , description: "Provides prebuilt components for consistent design and user experience in complex UI parts."},
  { name: "JavaScript", image: jsLogo , description: "Drives the website’s dynamic behavior, interactivity, and logic alongside React."},
];


const CarouselCardFrameworkds = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? frameworks.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === frameworks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = frameworks[index];

  return (
    <div className="relative group md:row-span-1 bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg flex flex-col justify-center items-center">
      
      {/* Hover Description Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent text-white flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[15px] z-10 pointer-events-none">
        <p className="text-sm absolute top-10 px-12">{current.description}</p>
      </div>


        {/* Image */}
        <img
          className="w-[100px] h-[100px] object-contain mb-4 z-0"
          src={current.image}
          alt={current.name}
        />

        {/* Content */}
        <div className="mt-4 flex items-center justify-between w-full px-4 z-0">
          <button
            className="w-10 h-10 rounded-full bg-white/40 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
            onClick={prev}
            aria-label="Previous"
          >
            <ChevronLeft />
          </button>

          <p className="text-md font-semibold text-center">{current.name}</p>

          <button
            className="w-10 h-10 rounded-full bg-white/40 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
            onClick={next}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
  );
};

export default CarouselCardFrameworkds;