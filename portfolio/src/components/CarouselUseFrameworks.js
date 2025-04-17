import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import reactLogo from "../assets/frameworks/react.png";
import htmlLogo from "../assets/frameworks/html.png";
import cssLogo from "../assets/frameworks/css.png";
import tailwindLogo from "../assets/frameworks/tailwind.png";
import materialLogo from "../assets/frameworks/material.png";
import jsLogo from "../assets/frameworks/javascript.png";
import domLogo from "../assets/frameworks/react-dom.png";

const frameworks = [
  { name: "React.js", image: reactLogo },
  { name: "React DOM", image: domLogo },
  { name: "HTML5", image: htmlLogo },
  { name: "CSS3", image: cssLogo },
  { name: "Tailwind CSS", image: tailwindLogo },
  { name: "Material UI", image: materialLogo },
  { name: "JavaScript", image: jsLogo },
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
    <div className="md:row-span-1 bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg flex flex-col justify-center items-center p-4 rounded-xl relative">
      {/* Image */}
      <img
        className="w-[100px] h-[100px] object-contain mb-4"
        src={current.image}
        alt={current.name}
        />


      {/* Content */}
      <div className="mt-4 flex items-center justify-between w-full px-4">
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
