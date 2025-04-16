import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import GroupsBackground from "../components/GroupsBackground";
import ProjectCard from "../components/ProjectCard";


const Projects = ({ darkMode }) => {
  const techStack = [
    { name: "FIGMA", icon: "figma-icon.png" },
    { name: "HTML", icon: "html-icon.png" },
    { name: "CSS", icon: "css-icon.png" },
    { name: "BOOTSTRAP", icon: "bootstrap-icon.png" },
    { name: "REACT", icon: "react-icon.png" },
    { name: "PHP", icon: "php-icon.png" },
    { name: "MYSQL", icon: "mysql-icon.png" },
  ];

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

      <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-widest  bg-clip-text text-transparent ${darkMode ? "bg-gradient-to-b from-[#ffffff]/60 to-[#ffffff]/0" : "bg-gradient-to-b from-[#59453F]/60 to-[#DAB9AF]/0"}`}>
        PROJECTS
      </h1>

       {/* First Project */}
       <ProjectCard
          darkMode={darkMode}
          title="JOBCONNEXT"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          features={[
            "Website notable feature",
            "Website notable feature",
            "Website notable feature",
          ]}
          image="projimg3.png"
          techStack={techStack}
        />

        {/* Second Project with reversed layout */}
        <ProjectCard
          darkMode={darkMode}
          title="SCHOLARSHIP SYSTEM"
          description="A school campus navigation system that helps new students find buildings, services, and events with ease."
          features={[
            "Interactive map integration",
            "Building search and details",
            "Mobile responsiveness",
          ]}
          image="projimg.png"
          techStack={techStack}
          reverse
        />

        {/* Second Project with reversed layout */}
        <ProjectCard
          darkMode={darkMode}
          title="CVSU ALUMNI"
          description="A school campus navigation system that helps new students find buildings, services, and events with ease."
          features={[
            "Interactive map integration",
            "Building search and details",
            "Mobile responsiveness",
          ]}
          image="projimg2.png"
          techStack={techStack}
        />




      </div>
    </div>
  );
};

export default Projects;
