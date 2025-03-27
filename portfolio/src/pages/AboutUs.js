import React from "react";
import Navbar from '../components/Navbar';
import GroupsBackground from "../components/GroupsBackground";


const Homepage = () => {
  return (
    <div className="z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ">
      {/* Background Wrapper */}
      <div className="absolute inset-0 bg-orange-500/60"></div>
      
      {/* Content Wrapper (Scrollable) */}
      <div className="relative p-6 overflow-auto h-full custom-scrollbar" >
        <Navbar />
        <h1 className="text-white text-3xl font-bold">Welcome to Homepage</h1>
      </div>
    </div>
  );
};

export default Homepage;
