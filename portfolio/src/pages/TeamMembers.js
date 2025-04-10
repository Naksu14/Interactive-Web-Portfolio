// TeamMembers.js
import React, { useState } from "react";
import MemberBackground from "../components/BackgroundMembers";
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import ImageGallery from '../components/ImageHover'; // Updated import

const TeamMembers = ({ darkMode }) => {
  const [selectedMember, setSelectedMember] = useState({
    image: require("../assets/Anime_Loel.png"),
    name: "LOEL CAMPAÑA",
    title: "Project Manager, Frontend Developer, Designer",
    skills: [
      "LANGUAGE: JS, Java, Python, C++, PHP",
      "FRONTEND: CSS, HTML",
      "FRAMEWORK: React",
      "DATABASE: MYSQL",
      "DEVOPS: GIT",
      "WIREFRAME: FIGMA"
    ],
    github: "https://github.com/Naksu14",
    facebook:"https://www.facebook.com/loelcamp14",
    email:"mailto:ic.loel.campana@cvsu.edu.ph"
  });

  const handleMemberSelect = (member) => {
    // Store the selected member in sessionStorage
    sessionStorage.setItem('selectedMember', JSON.stringify({
      id: member.id,
      nn: member.name.toUpperCase(),
      name: member.name,
    }));
    
  
    // Update the state locally (optional, depending on whether you want immediate UI updates)
    setSelectedMember({
      image: member.src,
      name: member.name.toUpperCase(),
      title: member.title || selectedMember.title,
      skills: member.skills || selectedMember.skills,
      github: member.github,
      facebook: member.facebook,
      email: member.email,
    });
  };
  

  const buttonStyles = {
    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(109, 109, 109, 0.1)',
    '&:hover': { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.3)', transform: 'scale(1.1)' },
    borderRadius: '50%',
    width: 56,
    height: 56,
    transition: 'all 0.3s ease'
  };

  const icondarkmode = {
       color: darkMode ? '#ffffff' : '#59453F', fontSize: '2rem'
  }
  

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <MemberBackground />

      {/* Content Wrapper */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

      {/* Centered Image - now perfectly centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
          <img 
              src={require("../assets/Innovatebg.png")} 
              alt="Innovate bg" 
              className="w-[1300px] h-[100%] object-contain -z-9 opacity-50"
            />
        </div>
        
        {/* Main Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src={selectedMember.image} 
            alt={selectedMember.name} 
            className={`-z-9 object-contain ${
              selectedMember.name === "DANIELA ROMANA CASTAÑEDA" ? 'w-[1200px] h-[1150px]' : 
              selectedMember.name === "LOEL CAMPAÑA" ? 'max-w-[95%] max-h-[1050px]' : 
              selectedMember.name === "LANCE LISTANA" ? 'max-w-[95%] max-h-[800px]' : 
              selectedMember.name === "RHANEL SEIGHMONE BUCLARES" ? 'max-w-[92%] max-h-[980px]' : 
              selectedMember.name === "FREDDRICK TROPICO" ? 'max-w-[92%] max-h-[800px]' : 
              'max-w-[100%] max-h-[1050px]'
            }`}
            style={{ 
              transform: selectedMember.name === "DANIELA ROMANA CASTAÑEDA" ? 'translate(-8%, -16%)' : 
                        selectedMember.name === "LOEL CAMPAÑA" ? 'translate(-10%, -13%)' : 
                        selectedMember.name === "LANCE LISTANA" ? 'translate(-15%, -1%)' : 
                        selectedMember.name === "RHANEL SEIGHMONE BUCLARES" ? 'translate(-5%, -10%)' : 
                        selectedMember.name === "FREDDRICK TROPICO" ? 'translate(-17%, -1%)' : 
                        'translate(-10%, -13%)' 
            }}
          />
        </div>

        {/* Image Gallery - pass the handler */}
        <div className="absolute right-20 top-20 ">
          <ImageGallery onSelect={handleMemberSelect} darkMode={darkMode} />

          <div className="absolute right-20 mt-10 flex flex-row ">
            <b className="text-2xl">MEMBERS </b>
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
            <b>Skills </b>
            <ul>
              {selectedMember.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </p>
        </div>

        {/* Fixed Social Icons Container */}
        <div className="fixed z-10 left-20 bottom-10 w-auto max-w-[400px] px-4">
          <div className="flex justify-center gap-4">

            {/* GitHub Icon */}
            <IconButton 
              href={selectedMember?.github || "https://github.com/"} // Default GitHub
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonStyles}
            >
              <GitHubIcon sx={icondarkmode} />
            </IconButton>

            <IconButton 
              href={selectedMember?.facebook || "https://facebook.com/"} // Default GitHub
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonStyles}
            >
              <FacebookIcon sx={icondarkmode} />
            </IconButton>

            <IconButton 
              href={`mailto:${selectedMember?.email || "example@gmail.com"}`}// Default GitHub
              target="_blank"
              rel="noopener noreferrer"
              sx={buttonStyles}
            >
              <EmailIcon sx={icondarkmode} />
            </IconButton>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamMembers;

// import React, { useState } from "react";
// import GroupsBackground from "../components/BackgroundMembers";
// import { IconButton } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import EmailIcon from '@mui/icons-material/Email';
// import ImageHover from '../components/ImageHover'
// const TeamMembers = ({ darkMode }) => {

//   return (
//     <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
//       {/* Background Image Component */}
//       <GroupsBackground />

//       {/* Background Wrapper */}
//       <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

//       {/* Content Wrapper (Scrollable) */}
//       <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>
//         {/* Centered Image - now perfectly centered */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
//         <img 
//           src={require("../assets/Innovatebg.png")} 
//           alt="Innovate bg" 
//           className="w-[1300px] h-[100%] object-contain -z-9 opacity-50"
//         />
//       </div>

//          {/* Centered Image - now perfectly centered */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ marginBottom: 0 }}>
//         <img 
//           src={require("../assets/Anime_Loel.png")} 
//           alt="Loel Campaña" 
//           className="max-w-[100%] max-h-[1050px] object-contain -z-9"
//           style={{ 
//             transform: 'translate(-10%, -13%)',
//           }}
//         />
        
//       </div>
        
//        {/* Members selection in the right side*/} 
//       <div className="absolute right-20 top-20 flex flex-row">
//           <ImageHover />
//       </div>




//       <div className="relative z-10 w-full lg:w-[500px] bg-white bg-opacity-10 border border-[#ffffff]/30 p-6 rounded-[15px] text-left tracking-wide backdrop-blur-lg mr-auto mb-24 ml-0 lg:ml-12">          
//         <p className="text-2xl">
//             <b>LOEL CAMPAÑA</b> 
//             <br />
//             Project Manager, Frontend Developer, Designer
//           </p>
//         </div>
        

//         <div className="relative z-10 w-full lg:w-[400px] bg-white bg-opacity-10 border border-[#ffffff]/30 p-6 rounded-[15px] text-left tracking-wide backdrop-blur-lg mt-40 ml-0 lg:ml-12 mb-12 lg:mb-12"> 
//           <p className="text-xl">
//             <b>Skills </b>
//             <ul>
//               <li><span className="font-semibold">LANGUAGE:</span> JS, Java, Python, C++, PHP</li>
//               <li><span className="font-semibold">FRONTEND:</span> CSS, HTML</li>
//               <li><span className="font-semibold">FRAMEWORK:</span> React</li>
//               <li><span className="font-semibold">DATABASE:</span> MYSQL</li>
//               <li><span className="font-semibold">DEVOPS:</span> GIT</li>
//               <li><span className="font-semibold">WIREFRAME:</span> FIGMA</li>
//             </ul>
//           </p>
//         </div>

//         <div className=" relative z-10 w-full lg:w-[400px] text-left tracking-wide mt-20 ml-0 lg:ml-12 flex gap-4 ">
//           {/* GitHub Logo */}
//           <IconButton 
//             href="https://github.com/Naksu14" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 hover:bg-gray-700 text-white"
//             sx={{
//               backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
//               '&:hover': { 
//                 backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)' 
//               },
//               borderRadius: '50%',
//               width: 56,
//               height: 56,
//               '&:hover': {
//                 transform: 'scale(1.1)',
//                 transition: 'transform 0.3s ease'
//               }
//             }}
//           >
//              <GitHubIcon sx={{ 
//                           color: darkMode ? '#ffffff' : '#59453F',
//                           fontSize: '2rem' 
//                         }} />
//           </IconButton>

//           {/* Facebook Logo */}
//           <IconButton 
//             href="https://www.facebook.com/loelcamp14" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-600 hover:bg-blue-500 text-white"
//             sx={{
//               backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
//               '&:hover': { 
//                 backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)' 
//               },
//               borderRadius: '50%',
//               width: 56,
//               height: 56,
//               '&:hover': {
//                 transform: 'scale(1.1)',
//                 transition: 'transform 0.3s ease'
//               }
//             }}
//           >
//             <FacebookIcon sx={{ 
//                           color: darkMode ? '#ffffff' : '#59453F',
//                           fontSize: '2rem' 
//                         }} />
//           </IconButton>

//           {/* Gmail Logo */}
//           <IconButton 
//             href="mailto:ic.loel.campana@cvsu.edu.ph"
//             className="bg-red-500 hover:bg-red-400 text-white"
//             sx={{
//               backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)',
//               '&:hover': { 
//                 backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)' 
//               },
//               borderRadius: '50%',
//               width: 56,
//               height: 56,
//               '&:hover': {
//                 transform: 'scale(1.1)',
//                 transition: 'transform 0.3s ease'
//               }
//             }}
//           >
//             <EmailIcon sx={{ 
//                           color: darkMode ? '#ffffff' : '#59453F',
//                           fontSize: '2rem' 
//                         }} />
//           </IconButton>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default TeamMembers;
