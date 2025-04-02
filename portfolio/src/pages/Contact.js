import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import GroupsBackground from "../components/GroupsBackground";

const Contact = ({ darkMode }) => {

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

      <h1 className="text-7xl">
        WELCOME TO CONTACT US
      </h1>

      </div>
    </div>
  );
};

export default Contact;
