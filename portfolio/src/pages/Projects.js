import React from "react";
import GroupsBackground from "../components/common/GroupsBackground";
import ProjectCard from "../components/project/ProjectCard";


const Projects = ({ darkMode }) => {
  const techStackProj1 = [
    { name: "FIGMA", icon: "figma-icon.png" },
    { name: "HTML", icon: "html-icon.png" },
    { name: "CSS", icon: "css-icon.png" },
    { name: "BOOTSTRAP", icon: "bootstrap-icon.png" },
    { name: "REACT", icon: "react-icon.png" },
    { name: "PHP", icon: "php-icon.png" },
    { name: "MYSQL", icon: "mysql-icon.png" },
  ];

  const techStackProj2 = [
    { name: "FIGMA", icon: "figma-icon.png" },
    { name: "HTML", icon: "html-icon.png" },
    { name: "CSS", icon: "css-icon.png" },
    { name: "BOOTSTRAP", icon: "bootstrap-icon.png" },
    { name: "REACT", icon: "react-icon.png" },
    { name: "PHP", icon: "php-icon.png" },
    { name: "MYSQL", icon: "mysql-icon.png" },
  ];

  const techStackProj3 = [
    { name: "FIGMA", icon: "figma-icon.png" },
    { name: "HTML", icon: "html-icon.png" },
    { name: "CSS", icon: "css-icon.png" },
    { name: "BOOTSTRAP", icon: "bootstrap-icon.png" },
    { name: "REACT", icon: "react-icon.png" },
    { name: "PHP", icon: "php-icon.png" },
    { name: "MYSQL", icon: "mysql-icon.png" },
    { name: "FIREBASE", icon: "firebase-icon.png" },
  ];

  const techStackProj4 = [
    { name: "FIGMA", icon: "figma-icon.png" },
    { name: "HTML", icon: "html-icon.png" },
    { name: "CSS", icon: "css-icon.png" },
    { name: "BOOTSTRAP", icon: "bootstrap-icon.png" },
    { name: "PHP", icon: "php-icon.png" },
    { name: "MYSQL", icon: "mysql-icon.png" },
  ];

  const techStackProj5 = [
    { name: "FIGMA", icon: "figma-icon.png" },
    { name: "HTML", icon: "html-icon.png" },
    { name: "CSS", icon: "css-icon.png" },
    { name: "BOOTSTRAP", icon: "bootstrap-icon.png" },
    { name: "PHP", icon: "php-icon.png" },
    { name: "MYSQL", icon: "mysql-icon.png" },
  ];

  return (
    <div className={`z-5 relative mx-1 sm:mx-4 md:mx-6 lg:mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

      <h1 className={`text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-widest  bg-clip-text text-transparent ${darkMode ? "bg-gradient-to-b from-[#ffffff]/80 to-[#ffffff]/0" : "bg-gradient-to-b from-[#59453F]/80 to-[#DAB9AF]/0"}`}>
        OUR WORK
      </h1>

       {/* First Project */}
       <ProjectCard
          darkMode={darkMode}
          agenda="Professional Networking Platform"
          title="JOBCONNEXT"
          description="Our platform focuses exclusively on the unique needs of the Philippines, empowering local blue-collar workers to find meaningful work and clients to locate skilled professionals within their community. This local approach means faster response times, more culturally attuned interactions, and a stronger support system for everyone involved."
          features={[
            "Exclusive for Blue-collar Workers",
            "Create and Publish Job Opportunity",
            "Can track previous jobs, employers, and worker's ratings ",
          ]}
          image="projimg3.png"
          techStack={techStackProj1}
        />

        {/* Second Project with reversed layout */}
        <ProjectCard
          darkMode={darkMode}
          agenda="Stock-Integrated Queue Management"
          title="QUEUING SYSTEM"
          description="The Queueing Management System for School Uniform Purchasing and Fitting at Cavite State University – Imus Campus, it is an Arduino and website-based system. It lets students choose between buying uniforms or lining up for fitting. Arduino handles
          ticketing and queue assignments, while the website displays real-time queue numbers and stock updates, ensuring a smoother and more organized process."
          features={[
            "Real-Time Queue Display",
            "Fitting & Purchasing Schedule Viewer",
            "Live Stock Availability",
            "Visual insights for admins",
            "Printed Queue Number",
            
          ]}
          image="projimg4.png"
          techStack={techStackProj2}
          reverse
        />

        {/* Second Project with reversed layout */}
        <ProjectCard
          darkMode={darkMode}
           agenda="Health & Fitness Application"
          title="EMPOWER FITNESS APP"
          description="Empower Fitness is a mobile application designed to support a healthier and more disciplined lifestyle by tracking and motivating users through structured workouts. The app offers a variety of activities focused on upper body, core, and lower body exercises, each with built-in timers and intensity levels. Workout performance is automatically recorded and stored in the database, 
          allowing users to monitor their ongoing progress. The Empower Fitness app generates a personalized goal weight based on the user's current weight to help guide and motivate them toward their fitness goals."

          features={[
            "User Account Management",
            "Mobile responsiveness",
            "Goal Weight Recommendation",
            "Workout Categories",
            "Timed Workouts with Intensity Levels",
            "Progress Tracking",
            "History Log",
            "Automatic Fitness Stats Update",

          ]}
          image="projimg5.png"
          techStack={techStackProj3}
        />

        {/* Second Project with reversed layout */}
        <ProjectCard
          darkMode={darkMode}
           agenda="Scholarship Tracking System Website"
          title="SCHOLARSHIP SYSTEM"
          description="The Scholarship Management System is a web-based platform for Cavite State University (CvSU) students to track available and upcoming scholarships, view requirements, receive updates, and submit documents online. It streamlines the application process and helps students stay informed, organized, and efficient in managing their scholarship opportunities."
          features={[
            "Scholarship Listings",
            "Requirements Overview",
            "Mobile responsiveness",
            "Online Document Submission",
            "Application Status Tracking",
            "Real-Time Announcements and Updates",
            "User-Friendly Interface",
            
          ]}
          image="projimg.png"
          techStack={techStackProj4}
          reverse
        />

        {/* Second Project with reversed layout */}
        <ProjectCard
          darkMode={darkMode}
           agenda="Alumni Engagement Portal"
          title="Alumni Management System "
          description="A school campus navigation system that helps new students find buildings, services, and events with ease. The system offers live viewing for the upcoming events of the campus"
          features={[
            "Event Calendar",
            "Newsletters & Email Blasts",
            "Resume & Interview Prep Resources",
            "Campaign Pages",
            "Dashboard Metrics for total alumni",
            "Advanced Search & Filters",
          ]}
          image="projimg2.png"
          techStack={techStackProj5}
        />




      </div>
    </div>
  );
};

export default Projects;
