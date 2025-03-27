import React from "react";
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    
    <div className="bg-orange-500/60 mx-8 p-6 min-h-screen mt-[104px] overflow-hidden">
        <Navbar />
      <h1 className="text-white text-3xl font-bold">Welcome to Homepage</h1>
    </div>
  );
};

export default Homepage;
