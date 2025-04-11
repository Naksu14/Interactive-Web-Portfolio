import React, { useState } from "react";
import GroupsBackground from "../components/GroupsBackground";

// Reduced Space
import AnimeDaniela from "../assets/Anime_Members/Anime_Daniela1.png";
import AnimeFred from "../assets/Anime_Members/Anime_Fred1.png";
import AnimeRhanel from "../assets/Anime_Members/Anime_Rhanel1.png";
import AnimeLoel from "../assets/Anime_Members/Anime_Loel1.png";
import AnimeLance from "../assets/Anime_Members/Anime_Lance1.png";

// Outlined Social Icons
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import twitter from "../assets//twitter.png";
import github from "../assets//github.png";

const Contact = ({ darkMode }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>
        <div className="flex flex-col md:flex-row justify-between items-center h-full">
          {/* Left text content */}
          <div className="flex flex-col justify-end items-start h-full max-w-[500px] space-y-6 ml-10 mb-20">
            <p className="text-lg font-medium mt-4">Interested In Working With Us?</p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight whitespace-nowrap">
              SEND US A MESSAGE !
            </h1>
            <p className="text-base">We’re Just One Message Away<span className="text-[#FF8A65]"> !</span></p>
            <button
              className={`bg-transparent border-2 ${darkMode ? "border-white" : "border-[#59453F]"} font-semibold px-10 py-3 rounded-full shadow-md hover:bg-[#59453F] hover:${darkMode ? "border-white" : "border-[#59453F]"} hover:text-white hover:scale-105 transition-all`}
            >
              Contact Us
            </button>
          </div>

          {/* Right image and icons */}
          <div className="flex items-center justify-center w-[1600px] h-[500px] relative">
            {/* Floating icons */}
            <img src={gmail} alt="Gmail" className="absolute top-[145px] left-[300px] w-15 h-15 animate-float" />
            <img src={linkedin} alt="LinkedIn" className="absolute bottom-[40px] right-[65px] w-15 h-15 animate-float" />
            <img src={facebook} alt="facebook" className="absolute top-[130px] right-[40px] w-15 h-15 animate-float" />
            <img src={twitter} alt="Twitter" className="absolute bottom-[20px] left-[330px] w-15 h-15 animate-float" />
            <img src={github} alt="GitHub" className="absolute top-[-40px] right-[530px] w-10 h-10 animate-float" />

            {/* Character images */}
            <img
              src={AnimeDaniela}
              alt="Daniela"
              className={`w-[370px] h-[390px] mr-[320px] mt-[320px] ml-[290px] z-50 transition duration-300 hover:brightness-125 ${hovered && hovered !== 'Daniela' ? 'blur-[1.5px]' : ''}`}
              onMouseEnter={() => setHovered('Daniela')}
              onMouseLeave={() => setHovered(null)}
            />
            <img
              src={AnimeLoel}
              alt="Loel"
              className={`w-[300px] h-[490px] ml-[-450px] mt-[220px] z-50 transition duration-300 hover:brightness-125 ${hovered && hovered !== 'Loel' ? 'blur-[1.5px]' : ''}`}
              onMouseEnter={() => setHovered('Loel')}
              onMouseLeave={() => setHovered(null)}
            />
            <img
              src={AnimeFred}
              alt="Fred"
              className={`w-[300px] h-[400px] ml-[-450px] mt-[40px] z-0 transition duration-300 hover:brightness-125 ${hovered && hovered !== 'Fred' ? 'blur-[1.5px]' : ''}`}
              onMouseEnter={() => setHovered('Fred')}
              onMouseLeave={() => setHovered(null)}
            />
            <img
              src={AnimeRhanel}
              alt="Rhanel"
              className={`w-[310px] h-[400px] mt-[310px] ml-[30px] z-40 transition duration-300 hover:brightness-125 ${hovered && hovered !== 'Rhanel' ? 'blur-[1.5px]' : ''}`}
              onMouseEnter={() => setHovered('Rhanel')}
              onMouseLeave={() => setHovered(null)}
            />
            <img
              src={AnimeLance}
              alt="Lance"
              className={`w-[280px] h-[420px] ml-[-320px] mt-[-120px] z-0 transition duration-300 hover:brightness-125 ${hovered && hovered !== 'Lance' ? 'blur-[1.5px]' : ''}`}
              onMouseEnter={() => setHovered('Lance')}
              onMouseLeave={() => setHovered(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
