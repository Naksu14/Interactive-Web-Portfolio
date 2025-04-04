import React from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import GroupsBackground from "../components/GroupsBackground";

const Homepage = ({ darkMode }) => {

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

        {/* Team name and logo Brief introduction of the team */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0 h-[680px]">
          
          {/* Team name and logo Section */}
          <div className="w-full lg:w-[680px] h-auto lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 flex-1">
            <img 
              src={darkMode ? require("../assets/Whomelogo.png") : require("../assets/bhomelogo.png")} 
              alt="InnoVate Logo" 
              className="md:w-[580px] md:h-[430px] sm:w-[380px] sm:h-[280px] w-[680px] h-[469px] mx-auto "
            />
          </div>

          {/* Text Section of Brief introduction of the team 
                    
<div className="w-full lg:w-[800px] bg-white bg-opacity-20 border border-[#ffffff]/20 p-4 sm:p-6 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-4 sm:mx-6 md:mx-12 mb-4 sm:mb-6 md:mb-0 mt-4 sm:mt-6 md:mt-0 flex-1">
          */}
          <div className="w-full lg:w-[800px] bg-white bg-opacity-20 border border-[#ffffff]/20 p-10 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-4 sm:mx-6 md:mx-12 mb-4 sm:mb-6 md:mb-0 mt-4 sm:mt-6 md:mt-0 flex-1">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              <b>We are InnoVate</b>, a team of five passionate developers and designers committed to creating seamless and innovative digital experiences. Our goal is to build functional, user-friendly, and visually engaging websites that bring ideas to life.
            </p>
          </div>


        </div>

        <br />
        <br />
        <br />

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          {/* Mission Statement Title and Text Section */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[85%] p-6">
            {/* Mission Statement Title */}
            <div className="sm:text-3xl md:text-4xl lg:text-5xl text-left w-full max-w-[800px] mx-auto">
              <b>
                MISSION <br />
                STATEMENT
              </b>
              <div className={`h-[2px] sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"}`}></div>
            </div>
            <br />

            {/* Text Section of Mission */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[800px] bg-white bg-opacity-20 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg mx-auto mb-8 md:mb-0 mt-6 md:mt-0">
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
                  We develop innovative and promising projects that solve real-world problems by constructing efficient programs with enhanced user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Image Section */}
          <div 
            ref={ref} 
            className={`hidden lg:flex flex-col justify-center items-center lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 
              ${inView ? 'animate-rslide-in' : 'animate-rslide-out'}`} 
            style={{ transition: 'transform 1s ease-out' }} 
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
        <div className="flex flex-col lg:flex-row items-center justify-center w-full">
          {/* Vision Image Section (Now on the left) */}
          <div 
            ref={ref} 
            className={`hidden lg:flex flex-col justify-center items-center mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 animate-lslide-in
              ${inView ? 'animate-lslide-in' : 'animate-lslide-out'}`} 
            style={{ transition: 'transform 1s ease-out' }} 
          >
            <img 
              src={darkMode ? require("../assets/arrowwhite.png") : require("../assets/arrow 1.png")} 
              alt="Vision Arrow" 
              className="lg:w-[80px] lg:h-[100px] mb-4"
            />
            <img 
                src={darkMode ? require("../assets/missionwhite.png") : require("../assets/mission.png")} 
                alt="Vision Image" 
                style={{
                  width: "200px",
                  height: "400px",
                  "@media (max-width: 1200px)": {
                    width: "200px",
                    height: "400px"
                  }
                }}
              />

          </div>


          {/* Vision Statement Title and Text Section (Now on the right) */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[85%] p-6">
            {/* Vision Statement Title */}
            <div className="sm:text-3xl md:text-4xl lg:text-5xl text-right w-full max-w-[800px] mx-auto">
              <b>
                VISION <br />
                STATEMENT
              </b>
              <div className={`h-[2px] sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"} ml-auto`}></div>

            </div>
            <br />

            {/* Text Section of Vision */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[800px] bg-white bg-opacity-20 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg mx-auto mb-8 md:mb-0 mt-6 md:mt-0">
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
                  To alter our technology by developing progressive solutions that simplify real-world challenges and set new standards for user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
            <img 
              src={darkMode ? require("../assets/Whomelogo2.png") : require("../assets/bhomelogo2.png")} 
              alt="logo2 Image" 
              className="w-[120px] h-[80]"
            />
        </div>

      </div>
    </div>
  );
};

export default Homepage;
