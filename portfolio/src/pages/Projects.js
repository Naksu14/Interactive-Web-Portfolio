import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import GroupsBackground from "../components/GroupsBackground";

const Projects = ({ darkMode }) => {

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        <h1 className="text-8xl font-extrabold tracking-widest">
        LATEST PROJECTS
        </h1>

        <div className="grid grid-cols-5 grid-rows-3 gap-4 px-16">
          {/* Left side (3 columns) */}
          <div className="col-span-3 row-span-3">
            <div className="w-full h-[600px] bg-[#18161F] rounded-lg p-4 border-t border-t-white border-b border-b-gray-400">
              <div className="w-full h-full relative rounded-lg p-4 bg-gradient-to-b from-[#FB6E6E] to-[#F1B4B4]">
                {/* Text */}
                <div className="text-4xl font-bold uppercase tracking-widest mb-4">
                  <span className="text-white block">Website Agenda</span>
                  <span className="text-white block">Website Agenda</span>
                </div>

                {/* Image at bottom center */}
                <img
                  src={require("../assets/projectsImages/projimg3.png")}
                  alt="Project 1"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto max-w-[90%] h-auto object-contain drop-shadow-[0_0_25px_white]"
                />
              </div>
            </div>
          </div>

          {/* Right side (2 columns) */}
          <div className="col-span-2 row-span-3 text-2xl text-left p-6">
            <h1 className="text-white font-bold">PROJECT TITLE</h1>
            <br />
            <p>
              <span>project description</span>
              <br/> 
              lore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            <br />
            <ul class="list-disc px-10">
              <li>Website notable feature</li>
              <li>Website notable feature</li>
              <li>Website notable feature</li>
            </ul>
            <br />
            <div className="relative flex flex-row w-3/5 px-4">
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">FIGMA</p>
              </div>
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">HTML</p>
              </div>
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">CSS</p>
              </div>
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">BOOTSTRAP</p>
              </div>
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">REACT</p>
              </div>
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">PHP</p>
              </div>
              <div className="bg-[#FEA3A3] rounded-xl max-w-[150px] text-center p-3 mx-1">
                <div>{/*ICON*/}</div>
                <p className="text-base">MYSQL</p>
              </div>
            </div>
            

          </div>
        </div>




      </div>
    </div>
  );
};

export default Projects;
