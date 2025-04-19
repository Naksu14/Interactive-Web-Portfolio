import React, { useState, useEffect } from "react";
import MemberBackground from "../components/members/BackgroundMembers";
import { IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageGallery from '../components/members/ImageHover';

const TeamMembers = ({ darkMode }) => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedMember");


    if (stored) {
      setSelectedMember(JSON.parse(stored)); // Directly set the retrieved member


    } else {
      setSelectedMember({
        src: require("../assets/Anime_Members/Anime_Loel.png"),
        name: "LOEL CAMPAÑA",
        title: "Full-Stack Developer",
        skills: [
          "LANGUAGE: JS, Java, Python, C++, PHP",
          "FRONTEND: CSS, HTML",
          "FRAMEWORK: React",
          "DATABASE: MYSQL",
          "DEVOPS: GIT",
          "WIREFRAME: FIGMA"
        ],
        github: "https://github.com/",
        facebook: "https://facebook.com/",
        email: "example@gmail.com",
        cv: "/cv/CV_Campaña-Loel.pdf",
      });
    }
  }, []);
  const handleMemberSelect = (member) => {
    sessionStorage.setItem('selectedMember', JSON.stringify(member));
    setSelectedMember({
      id: member.id, // Ensure ID is stored
      src: member.src,
      name: member.name.toUpperCase(),
      title: member.title,
      skills: member.skills,
      github: member.github,
      facebook: member.facebook,
      email: member.email,
      cv: member.cv,
    });
  };

  const getImageClassAndStyle = (name = "") => {
    const normalized = name.toUpperCase().trim();
    if (normalized === "DANIELA ROMANA CASTAÑEDA") {
      return { className: 'w-[1200px] h-[1150px]', style: { transform: 'translate(-8%, -16%)' } };
    } else if (normalized === "LOEL CAMPAÑA") {
      return { className: 'max-w-[95%] max-h-[1050px]', style: { transform: 'translate(-10%, -13%)' } };
    } else if (normalized === "LANCE LISTANA") {
      return { className: 'max-w-[95%] max-h-[800px]', style: { transform: 'translate(-15%, -1%)' } };
    } else if (normalized === "RHANEL SEIGHMONE BUCLARES") {
      return { className: 'max-w-[92%] max-h-[980px]', style: { transform: 'translate(-5%, -10%)' } };
    } else if (normalized === "FREDDRICK TROPICO") {
      return { className: 'max-w-[92%] max-h-[800px]', style: { transform: 'translate(-17%, -1%)' } };
    } else {
      return { className: 'max-w-[100%] max-h-[1050px]', style: { transform: 'translate(-10%, -13%)' } };
    }
  };

  const buttonStyles = {
    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(109, 109, 109, 0.1)',
    '&:hover': {
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.3)',
      transform: 'scale(1.1)'
    },
    borderRadius: '50%',
    width: 56,
    height: 56,
    transition: 'all 0.3s ease'
  };

  const icondarkmode = {
    color: darkMode ? '#ffffff' : '#59453F',
    fontSize: '2rem'
  };

  if (!selectedMember) return null;

  const { className: imgClass, style: imgStyle } = getImageClassAndStyle(selectedMember.name);

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      <MemberBackground />

      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={require("../assets/commonIcons/Innovatebg.png")}
            alt="Innovate bg"
            className="w-[1300px] h-[100%] object-contain -z-9 opacity-50"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={selectedMember.src}
            alt={selectedMember.name}
            className={`-z-9 object-contain ${imgClass}`}
            style={imgStyle}
          />
        </div>

        <div className="absolute right-20 top-20">
          <ImageGallery
            onSelect={handleMemberSelect}
            darkMode={darkMode}
            selectedMember={selectedMember}
          />


          <div className="absolute right-20 mt-10 flex flex-row">
            <b className="text-xl">Meet the team</b>
            <div className={`h-[2px] w-[270px] ml-5 mt-4 ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"}`}></div>
          </div>
        </div>

        {/* Member Info */}
        <div className="relative z-10 w-full max-w-[500px] bg-white bg-opacity-10 border border-white/30 p-6 rounded-xl text-left tracking-wide backdrop-blur-lg ml-4 lg:ml-12 mb-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
            <b className="text-base sm:text-xl md:text-2xl lg:text-3xl">{selectedMember.name}</b>
            <br />
            {selectedMember.title}
          </p>
        </div>

        {/* Skills */}
        <div className="relative z-10 w-full max-w-[400px] bg-white bg-opacity-10 border border-white/30 p-6 rounded-xl text-left tracking-wide backdrop-blur-lg mt-12 ml-4 lg:ml-12 mb-12">
          <p className="sm:text-base md:text-lg lg:text-xl">
            <b>Skills</b>
            <ul>
              {selectedMember.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </p>
        </div>

        {/* Social Icons */}
        <div className="fixed z-10 left-20 bottom-10 w-auto max-w-[400px] px-4">
          <div className="flex justify-center gap-4">
            <Tooltip title="View Github">
              <IconButton href={selectedMember.github} target="_blank" rel="noopener noreferrer" sx={buttonStyles}>
                <GitHubIcon sx={icondarkmode} />
              </IconButton>
            </Tooltip>

            <Tooltip title="View Facebook">
              <IconButton href={selectedMember.facebook} target="_blank" rel="noopener noreferrer" sx={buttonStyles}>
                <FacebookIcon sx={icondarkmode} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Contact on Email">
              <IconButton href={`mailto:${selectedMember.email}`} target="_blank" rel="noopener noreferrer" sx={buttonStyles}>
                <EmailIcon sx={icondarkmode} />
              </IconButton>
            </Tooltip>

            <Tooltip title="View Resume">
              <IconButton href={selectedMember.cv} target="_blank" rel="noopener noreferrer" sx={buttonStyles}>
                <DescriptionIcon sx={icondarkmode} />
              </IconButton>
            </Tooltip>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamMembers;
