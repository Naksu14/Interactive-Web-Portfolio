import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import GroupsBackground from "../components/GroupsBackground";
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import backgroundImage from "../assets/Anime_Members/Anime_Groups.png"; // Import the image


const Contact = ({ darkMode }) => {

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
            {/* Left text content */}
            <p className="text-lg font-medium">Interested In Working With Us?</p>
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
          <div className="relative mt-10 md:mt-0">
            <img src={backgroundImage} alt="Group" className="w-[400px] md:w-[500px]" />


            {/* Floating icons */}
            <div className="absolute top-2 left-4">
              <IconButton color="primary" className="bg-white shadow-md">
                <EmailIcon />
              </IconButton>
            </div>

            <div className="absolute top-0 right-8">
              <IconButton color="error" className="bg-white shadow-md">
                <GitHubIcon />
              </IconButton>
            </div>

            <div className="absolute bottom-6 right-4">
              <IconButton color="primary" className="bg-white shadow-md">
                <FacebookIcon />
              </IconButton>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
