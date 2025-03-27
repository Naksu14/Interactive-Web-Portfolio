import React from "react";
import backgroundImage from "../assets/Anime_Groups.png"; // Import the image

const GroupsBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Blur Layer */}
      <div className="absolute inset-0  backdrop-blur-lg"></div>
    </div>
  );
};

export default GroupsBackground;
