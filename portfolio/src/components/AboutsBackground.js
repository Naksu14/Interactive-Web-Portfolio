import React from "react";
import logoDark from "../assets/logo_white.png";
import logoLight from "../assets/brown-logo.png";

const AboutsBackground = ({ darkMode }) => {
  console.log("darkMode in AboutsBackground:", darkMode); // ✅ move here

  return (
    <div className="fixed inset-0 -z-10">
      {/* Background Image */}
      <img
        src={darkMode ? logoDark : logoLight}
        alt="Background"
        className="w-full h-[130%] object-cover absolute inset-0"
      />

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-xl"></div>
    </div>
  );
};

export default AboutsBackground;
