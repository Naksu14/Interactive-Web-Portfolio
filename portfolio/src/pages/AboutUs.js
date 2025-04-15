import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import AboutsBackground from "../components/AboutsBackground";

const AboutUs = ({ darkMode }) => {

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
        <AboutsBackground />
      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

      {/* Team name and logo Brief introduction of the team */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0 mt-10 px-6">
          
          {/* Team name and logo Section */}
          <div className="w-full max-w-[680px] lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 flex-1">
            <img 
              src={darkMode ? require("../assets/Whomelogo.png") : require("../assets/bhomelogo.png")} 
              alt="InnoVate Logo" 
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <div className="w-full lg:w-[800px] bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-4 sm:mx-6 md:mx-12 mb-4 sm:mb-6 md:mb-0 mt-4 sm:mt-6 md:mt-0 flex-1">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              <b>We are InnoVate</b>, a team of five passionate developers and designers committed to creating seamless and innovative digital experiences. Our goal is to build functional, user-friendly, and visually engaging websites that bring ideas to life.
            </p>
          </div>


        </div>

      </div>
    </div>
  );
};

export default AboutUs;
