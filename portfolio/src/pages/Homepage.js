import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import Navbar from '../components/Navbar';
import GroupsBackground from "../components/GroupsBackground";

const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Intersection observer hook for detecting visibility
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when element is in view
    threshold: 0.5,     // Trigger when at least 50% of the element is visible
  });

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        {/* Navigation bar */}
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

        {/* Team name and logo Brief introduction of the team */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0 h-[680px]">
          {/* Team name and logo Section */}
          <div className="w-full lg:w-[680px] h-auto lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 flex-1">
            <img 
              src={darkMode ? require("../assets/Whomelogo.png") : require("../assets/bhomelogo.png")} 
              alt="InnoVate Logo" 
              className="w-[680px] h-[469px] mx-auto"
            />
          </div>

          {/* Text Section of Brief introduction of the team */}
          <div className="w-full lg:w-[800px] bg-white bg-opacity-20 border border-gray p-6 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-6 md:mx-12 mb-12 md:mb-0 mt-6 md:mt-0 flex-1">
            <p className="text-3xl">
              <b>We are InnoVate</b>, a team of five passionate developers and designers committed to creating seamless and innovative digital experiences. Our goal is to build functional, user-friendly, and visually engaging websites that bring ideas to life.
            </p>
          </div>
        </div>

        <br />

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-[800px]">
          {/* Mission Statement Title and Text Section */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[85%] p-6">
            {/* Mission Statement Title */}
            <div className="text-3xl text-left w-full max-w-[800px] mx-auto">
              <b>
                MISSION <br />
                STATEMENT
              </b>
              <div className={`h-[2px] w-[170px] ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"}`}></div>
            </div>
            <br />

            {/* Text Section of Mission */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[800px] bg-white bg-opacity-20 border border-gray p-10 rounded-[15px] tracking-wide backdrop-blur-lg mx-auto mb-8 md:mb-0 mt-6 md:mt-0">
                <p className="text-3xl text-center">
                  We develop innovative and promising projects that solve real-world problems by constructing efficient programs with enhanced user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Image Section */}
          <div 
            ref={ref} 
            className={`w-full lg:w-[15%] flex flex-col justify-center items-center lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 
              ${inView ? 'animate-rslide-in' : 'animate-rslide-out'}`} 
            style={{ transition: 'transform 1s ease-out' }} // Apply animation based on visibility
          >
            <img 
              src={darkMode ? require("../assets/arrowwhite.png") : require("../assets/arrow 1.png")} 
              alt="Mission Arrow" 
              className="w-[80px] h-[100px] mb-4"
            />
            <img 
              src={darkMode ? require("../assets/missionwhite.png") : require("../assets/mission.png")} 
              alt="Mission Image" 
              className="w-[200px] h-[400px]"
            />
          </div>
        </div>
        <br />

       {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-[800px]">
          {/* Vision Image Section (Now on the left) */}
          <div 
            ref={ref} 
            className={`w-full lg:w-[15%] flex flex-col justify-center items-center mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 
              ${inView ? 'animate-lslide-in' : 'animate-lslide-out'}`} 
            style={{ transition: 'transform 1s ease-out' }} 
          >
            <img 
              src={darkMode ? require("../assets/arrowwhite.png") : require("../assets/arrow 1.png")} 
              alt="Vision Arrow" 
              className="w-[80px] h-[100px] mb-4"
            />
            <img 
              src={darkMode ? require("../assets/missionwhite.png") : require("../assets/mission.png")} 
              alt="Vision Image" 
              className="w-[200px] h-[400px]"
            />
          </div>

          {/* Vision Statement Title and Text Section (Now on the right) */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[85%] p-6">
            {/* Vision Statement Title */}
            <div className="text-3xl text-right w-full max-w-[800px] mx-auto">
              <b>
                VISION <br />
                STATEMENT
              </b>
              <div className={`h-[2px] w-[170px] ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"} ml-auto`}></div>

            </div>
            <br />

            {/* Text Section of Vision */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[800px] bg-white bg-opacity-20 border border-gray p-10 rounded-[15px] tracking-wide backdrop-blur-lg mx-auto mb-8 md:mb-0 mt-6 md:mt-0">
                <p className="text-3xl text-left">
                  To alter our technology by developing progressive solutions that simplify real-world challenges and set new standards for user experience.
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Homepage;
