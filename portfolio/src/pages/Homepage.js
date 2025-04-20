import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import { ChevronLeft, ChevronRight } from "lucide-react";
import GroupsBackground from "../components/common/GroupsBackground";
import CarouselCard from "../components/home/CarouselMembers";
import CarouselCardFrameworkds from "../components/home/CarouselUseFrameworks";
import Projectsimage from "../components/home/projectsAlbumbutton";
import ViewContactButton from "../components/home/viewContact";
import { useNavigate } from 'react-router-dom';

// Reduced Space
import AnimeDaniela from "../assets/Anime_Members/Anime_Daniela1.png";
import AnimeFred from "../assets/Anime_Members/Anime_Fred1.png";
import AnimeRhanel from "../assets/Anime_Members/Anime_Rhanel1.png";
import AnimeLoel from "../assets/Anime_Members/Anime_Loel1.png";
import AnimeLance from "../assets/Anime_Members/Anime_Lance1.png";

// Outlined Social Icons
import facebook from "../assets/commonIcons/facebook.png";
import linkedin from "../assets/commonIcons/linkedin.png";
import gmail from "../assets/commonIcons/gmail.png";
import twitter from "../assets/commonIcons/twitter.png";
import github from "../assets/commonIcons/github.png";


import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';




const Homepage = ({ darkMode }) => {
  const navigate = useNavigate();


  // Hover state
  const [hovered, setHovered] = useState(null);

  // Intersection observer hook for detecting visibility
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const ContainerBg =
    'bg-white bg-opacity-30 border border-[#ffffff]/30 p-10 rounded-[15px] tracking-wide backdrop-blur-lg'
    ;

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
    };

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        {/* Team Section Wrapper */}
        <div className="relative w-full h-[700px] flex items-end justify-center overflow-hidden">

          {/* Team Logo - Centered and behind */}
          <div className="absolute inset-0 flex items-center justify-center z-0 blur-sm">
            <img
              src={darkMode ? require("../assets/commonIcons/homelogonew.png") : require("../assets/commonIcons/homelogodark.png")}
              alt="InnoVate Logo"
              className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] h-auto opacity-80"
            />
          </div>


          {/* Team Characters Group */}
          <div className="relative z-10 flex items-end justify-center scale-[0.8] sm:scale-95 md:scale-105 transition-all duration-300 ease-in-out">

            {/* Floating icons */}

            {/* white icons */}
            <img src={gmail} alt="Gmail" className="absolute top-[145px] left-[-200px] w-15 h-15 animate-float" />
            <img src={linkedin} alt="LinkedIn" className="absolute bottom-[40px] right-[-200px] w-15 h-15 animate-float" />
            <img src={facebook} alt="Facebook" className="absolute top-[130px] right-[40px] w-15 h-15 animate-float" />
            <img src={twitter} alt="Twitter" className="absolute bottom-[20px] left-[-100px] bottom-[200px] w-15 h-15 animate-float" />
            <img src={github} alt="GitHub" className="absolute top-[-40px] right-[530px] w-10 h-10 animate-float" />


            {/* Daniela */}
            <div
              onClick={() => {
                sessionStorage.setItem('selectedMember', JSON.stringify({
                  id: 1,
                  name: 'DANIELA ROMANA CASTAÑEDA',
                  title: "UI/UX Designer",
                  image: require('../assets/Anime_Members/Anime_Daniela.png'),
                  skills: [
                    "LANGUAGE: JS, Python, C++, PHP",
                    "FRONTEND: CSS, HTML",
                    "FRAMEWORK: React, BOOTSTRAP",
                    "DATABASE: MYSQL",
                    "DEVOPS: GIT",
                    "WIREFRAME: FIGMA"
                  ],
                  cv: "cv/CV_Castañeda-Daniela.pdf",
                  github: "https://github.com/dnlrmn09",
                  facebook: "https://www.facebook.com/kumarii14",
                  email: "mailto:ic.danielaromana.castaneda@cvsu.edu.ph"
                }));
                navigate('/team');
              }}
              onMouseEnter={() => setHovered('Daniela')}
              onMouseLeave={() => setHovered(null)}
              className="relative z-20"
            >
              {hovered === 'Daniela' && (
                <div className="absolute top-[-50px] left-[-200px] z-50">
                  <div className={`relative bg-white ${darkMode ? "bg-white/10" : "bg-white/20"} px-8 py-6 rounded-lg backdrop-blur-md border ${darkMode ? "border-white" : "border-white/70"} shadow-md text-left animate-bounce`}>
                    <div className={`text-md font-bold leading-tight ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      DANIELA ROMANA CASTAÑEDA
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      UI/UX Designer
                    </div>
                    <div className={`absolute right-[10px] bottom-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent ${darkMode ? "border-t-white" : "border-t-white/80"}`} />
                  </div>
                </div>
              )}
              <img
                src={AnimeDaniela}
                alt="Daniela"
                className={`w-[350px] xs:w-[350px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] h-auto object-contain transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Daniela' ? 'blur-[1.8px]' : ''}`}
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f8f8] via-transparent to-transparent pointer-events-none" />
            </div>



            <div
              onClick={() => {
                sessionStorage.setItem('selectedMember', JSON.stringify({
                  id: 5,
                  name: "FREDDRICK TROPICO",
                  title: "Frontend Developer, Designer",
                  src: require('../assets/Anime_Members/Anime_Fred.png'),
                  skills: [
                    "LANGUAGE: C, C++, Java, PHP, JS",
                    "FRONTEND: CSS, HTML",
                    "FRAMEWORK: BOOTSTRAP, Bulma",
                    "DATABASE: MYSQL",
                    "DEVOPS: GIT",
                    "WIREFRAME: FIGMA"
                  ],
                  cv: "cv/CV_Tropico-Freddrick.pdf",
                  github: "https://github.com/iRengo",
                  facebook: "https://www.facebook.com/freddricktropico14",
                  email: "mailto: ic.freddrick.tropico@cvsu.edu.ph",
                }));
                navigate('/team');
              }}
              onMouseEnter={() => setHovered('Fred')}
              onMouseLeave={() => setHovered(null)}
              className="relative z-0 -ml-[150px] mb-[120px] xs:-ml-[150px] sm:-ml-[180px] md:-ml-[170px] -mt-[100px] lg:-ml-[220px] xl:-ml-[250px]"
            >
              {/* Floating name box */}
              {hovered === 'Fred' && (
                <div className="absolute top-[-50px] left-[-200px] z-50">
                  <div className={`relative bg-white ${darkMode ? "bg-white/10" : "bg-white/20"} px-8 py-6 rounded-lg backdrop-blur-md border ${darkMode ? "border-white" : "border-white/70"} shadow-md text-left animate-bounce`}>
                    <div className={`text-md font-bold leading-tight ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      FREDDRICK TROPICO
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      Frontend Developer, Designer
                    </div>
                    <div className={`absolute right-[10px] bottom-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent ${darkMode ? "border-t-white" : "border-t-white/80"}`} />
                  </div>
                </div>
              )}

              <img
                src={AnimeFred}
                alt="Fred"
                className={`w-[200px] xs:w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[320px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Fred' ? 'blur-[1.8px]' : ''}`}
              />
            </div>


            {/* Loel */}
            <div
              onClick={() => {
                sessionStorage.setItem('selectedMember', JSON.stringify({
                  id: 2,
                  name: "LOEL CAMPAÑA",
                  title: "Full-Stack Developer",
                  src: require('../assets/Anime_Members/Anime_Loel.png'),
                  skills: [
                    "LANGUAGE: JS, Java, Python, C++, PHP",
                    "FRONTEND: CSS, HTML",
                    "FRAMEWORK: React, BOOTSTRAP",
                    "DATABASE: MYSQL",
                    "DEVOPS: GIT",
                    "WIREFRAME: FIGMA"
                  ],
                  cv: "cv/CV_Campaña-Loel.pdf",
                  github: "https://github.com/Naksu14",
                  facebook: "https://www.facebook.com/loelcamp14",
                  email: "mailto:ic.loel.campana@cvsu.edu.ph",
                }));
                navigate('/team');
              }}
              onMouseEnter={() => setHovered('Loel')}
              onMouseLeave={() => setHovered(null)}
              className="relative z-40 -ml-[140px] xs:-ml-[140px] sm:-ml-[130px] md:-ml-[160px] lg:-ml-[170px] xl:-ml-[180px]"
            >
              {hovered === 'Loel' && (
                <div className="absolute top-[-100px] left-[-80px] z-50">
                  <div className={`relative bg-white ${darkMode ? "bg-white/10" : "bg-white/20"} px-8 py-6 rounded-lg backdrop-blur-md border ${darkMode ? "border-white" : "border-white/70"} shadow-md text-left animate-bounce`}>
                    <div className={`text-md font-bold leading-tight ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      LOEL CAMPAÑA
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      Full-Stack Developer
                    </div>
                    <div className={`absolute right-[10px] bottom-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent ${darkMode ? "border-t-white" : "border-t-white/80"}`} />
                  </div>
                </div>
              )}
              <img
                src={AnimeLoel}
                alt="Loel"
                className={`w-[200px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Loel' ? 'blur-[1.8px]' : ''}`}
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f8f8] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Lance */}
            <div
              onClick={() => {
                sessionStorage.setItem('selectedMember', JSON.stringify({
                  id: 3,
                  name: "LANCE LISTANA",
                  title: "QA Tester",
                  src: require('../assets/Anime_Members/Anime_Lance.png'),
                  skills: [
                    "LANGUAGE: C, C++, Java, PHP, JS",
                    "FRONTEND: CSS, HTML",
                    "FRAMEWORK: BOOTSTRAP, Bulma, React, Tailwind",
                    "DATABASE: MYSQL",
                    "DEVOPS: GIT",
                    "WIREFRAME: FIGMA"
                  ],
                  cv: "cv/CV_Listana-Lance.pdf",
                  github: "https://github.com/L-iVANS",
                  facebook: "https://www.facebook.com/share/1KWs2goyk6/",
                  email: "mailto: lanceivan.listana@cvsu.edu.ph",
                }));
                navigate('/team');
              }}
              onMouseEnter={() => setHovered('Lance')}
              onMouseLeave={() => setHovered(null)}
              className="relative z-10 mb-[190px] -ml-[100px] xs:-ml-[100px] sm:-ml-[100px] mt-[-30px] md:-ml-[125px] lg:-ml-[140px] xl:-ml-[140px]"
            >
              {hovered === 'Lance' && (
                <div className="absolute top-[-50px] left-[80px] z-50">
                  <div className={`relative bg-white ${darkMode ? "bg-white/10" : "bg-white/20"} px-8 py-6 rounded-lg backdrop-blur-md border ${darkMode ? "border-white" : "border-white/70"} shadow-md text-left animate-bounce`}>
                    <div className={`text-md font-bold leading-tight ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      LANCE LISTANA
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      QA Tester
                    </div>
                    <div className={`absolute right-[150px] bottom-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent ${darkMode ? "border-t-white" : "border-t-white/80"}`} />
                  </div>
                </div>
              )}
              <img
                src={AnimeLance}
                alt="Lance"
                className={`w-[120px] xs:w-[120px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[270px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Lance' ? 'blur-[1.8px]' : ''}`}
              />
            </div>

            {/* Rhanel */}
            <div
              onClick={() => {
                sessionStorage.setItem('selectedMember', JSON.stringify({
                  id: 4,
                  name: "RHANEL SEIGHMONE BUCLARES",
                  title: "Frontend Developer, Designer",
                  src: require('../assets/Anime_Members/Anime_Rhanel.png'),
                  skills: [
                    "LANGUAGE: C, C++, Java, PHP, JS",
                    "FRONTEND: CSS, HTML",
                    "FRAMEWORK: BOOTSTRAP, Bulma",
                    "DATABASE: MYSQL",
                    "DEVOPS: GIT",
                    "WIREFRAME: FIGMA"
                  ],
                  cv: "cv/CV_Buclares-Rhanel.pdf",
                  github: "https://github.com/sytheprogrammer",
                  facebook: "https://www.facebook.com/Seighmone",
                  email: "mailto:rhanelseighmone.buclares@cvsu.edu.ph",
                }));
                navigate('/team');
              }}
              onMouseEnter={() => setHovered('Rhanel')}
              onMouseLeave={() => setHovered(null)}
              className="relative z-10 -ml-[150px] xs:-ml-[150px] sm:-ml-[150px] md:-ml-[200px] lg:-ml-[220px] xl:-ml-[240px]"
            >
              {hovered === 'Rhanel' && (
                <div className="absolute top-[-70px] right-[-200px] z-50">
                  <div className={`relative bg-white ${darkMode ? "bg-white/10" : "bg-white/20"} px-8 py-6 rounded-lg backdrop-blur-md border ${darkMode ? "border-white" : "border-white/70"} shadow-md text-left animate-bounce`}>
                    <div className={`text-md font-bold leading-tight ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      RHANEL SEIGHMONE BUCLARES
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? "text-white" : "text-[#59453F]"}`}>
                      Frontend Developer, Designer
                    </div>
                    <div className={`absolute right-[280px] bottom-[-10px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent ${darkMode ? "border-t-white" : "border-t-white/80"}`} />
                  </div>
                </div>
              )}
              <img
                src={AnimeRhanel}
                alt="Rhanel"
                className={`w-[180px] xs:w-[180px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Rhanel' ? 'blur-[1.8px]' : ''}`}
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f8f8] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>






        {/* Team name and logo Brief introduction of the team */}
        <div className="h-full flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0 mt-10 px-6">

          {/* Team name and logo Section */}
          <div className="w-full max-w-[680px] lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 flex-1">
            <img
              src={darkMode ? require("../assets/commonIcons/Whomelogo.png") : require("../assets/commonIcons/bhomelogo.png")}
              alt="InnoVate Logo"
              className="w-full h-auto object-contain mx-auto"
            />
          </div> 

          <div className="w-full lg:w-[800px] bg-white bg-opacity-20 border border-[#ffffff]/30 p-10 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-4 sm:mx-6 md:mx-12 mb-4 sm:mb-6 md:mb-0 mt-4 sm:mt-6 md:mt-0 flex-1">
            <p className="text-xl sm:text-2xl md:text3xl lg:text-4xl">
              <span>What We think - <b className={`${darkMode ? "hover:text-[#f0b6a2]" : "hover:text-[#D74925]"}`}>is What You click</b></span>
              <br />
              <br />
              <b>InnoVate</b> crafts clean, intuitive, and engaging digital solutions that bring ideas to life.
            </p>
          </div>

        </div>

        <br />
        <br />
        <br />

        {/* Gridd Contennt */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-4 px-4 md:px-16 lg:px-32 py-4">
          {/* Mission Statement */}
          <div className={`md:col-span-2 md:row-span-1 ${ContainerBg} p-4 rounded-xl`}>
            <div className="text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                MISSION <br /> STATEMENT
              </h2>
              <div className={`h-[2px] mt-1 sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-white" : "bg-[#59453F]"}`}></div>
            </div>
            <p className="mt-4 text-base sm:text-md md:text-lg lg:text-xl text-left">
              Our mission is to develop innovative and promising projects that address real-world challenges by building efficient, reliable, and scalable programs with enhanced user experiences. We are committed to delivering practical solutions that improve lives, empower communities, and make technology more intuitive and accessible for everyone.
            </p>
          </div>

          <div className={`md:row-span-1 ${ContainerBg} flex justify-center items-center p-4 px-6 rounded-xl`}>
  <div className="w-32 h-32 rounded-full flex justify-center items-center animate-gradient-slow bg-[conic-gradient(at_top_left,_#ec4899,_#8b5cf6,_#3b82f6,_#ec4899)] transition-all duration-300">
    <img
      className="w-20"
      src={
        darkMode
          ? require("../assets/commonIcons/half-moon.png")
          : require("../assets/commonIcons/sunny.png")
      }
      alt="Sun or Moon"
    />
  </div>
</div>




          <div className={`md:row-span-2 ${ContainerBg} flex flex-col items-center justify-center p-4 rounded-xl text-center`}>
            {/* Stack of project previews */}
            <div className="relative w-4/5 mx-auto h-64">
              {/* Back layer */}
              <img
                src={require("../assets/projectsImages/projimg3.png")}
                alt="Project 1"
                className="absolute top-0 left-0 w-full h-auto max-h-60 object-cover shadow-md"
              />
              {/* Middle layer */}
              <img
                src={require("../assets/projectsImages/projimg2.png")}
                alt="Project 2"
                className="absolute top-6 left-3 w-full h-auto max-h-60 object-cover shadow-lg"
              />
              {/* Front layer */}
              <img
                src={require("../assets/projectsImages/projimg.png")}
                alt="Project 3"
                className="absolute top-12 left-6 w-full h-auto max-h-60 object-cover shadow-xl"
              />
            </div>

            <Projectsimage />
          </div>


          {/* React Logo */}
          <CarouselCardFrameworkds />

          {/* GitHub Logo */}
          <div className={`md:col-span-1 md:row-span-1 ${ContainerBg} flex flex-col justify-center items-center p-4 rounded-xl`}>
            <img className="w-32 mb-2" src={require("../assets/commonIcons/gitpng.png")} alt="GitHub" />
            <div className="mt-6 flex items-center justify-between">
              <p className="text-md font-medium mx-auto px-8">Repository</p>
              <a href="https://github.com/Naksu14/Interactive-Web-Portfolio" target="_blank" rel="noopener noreferrer">
                <button
                  className="w-10 h-10 rounded-full bg-white/40 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
                  aria-label="Next"
                >
                  <ChevronRight />
                </button>
              </a>
            </div>

          </div>

          {/* Vision Statement */}
          <div className={`md:col-span-2 md:row-span-1 ${ContainerBg} p-4 rounded-xl`}>
            <div className="text-right">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                VISION <br /> STATEMENT
              </h2>
              <div className={`h-[2px] mt-1 sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-white" : "bg-[#59453F]"} ml-auto`}></div>
              <p className="mt-4 text-base sm:text-md md:text-lg lg:text-xl text-right">
                To transform technology into a force for good by crafting progressive, user-centered solutions that not only simplify real-world challenges but also elevate everyday experiences. We aim to set new benchmarks in innovation and usability, empowering individuals and organizations through intuitive, impactful, and forward-thinking design.
              </p>
            </div>
          </div>

          {/* Member */}
          <CarouselCard />

          {/* Map */}
          <div className={`md:col-span-2 md:row-span-1 ${ContainerBg} p-4 rounded-xl`}>
            <div className="w-full h-[200px] md:h-[250px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.9773641782062!2d120.94455221095788!3d14.428468081208967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d25e0e88d16b%3A0xc2f8607cd4512597!2sCavite%20State%20University%20-%20Imus%20Campus!5e0!3m2!1sen!2sph!4v1744292649013!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CvSU Imus Location"
              ></iframe>
            </div>
            <ViewContactButton />
          </div>
        </div>

        <br />
        <br />



        <footer className={`mt-10 py-6 text-left ${darkMode ? "text-white" : "text-[#59453F]"}`}>
          <div className="w-[80%] mx-auto flex justify-between items-center mb-6">

          </div>


          {/* Border and social icons */}
          <div
            className={`w-[80%] mx-auto border-t-[2px] ${darkMode ? "border-white" : "border-[#59453F]"} mt-20`} />


          <div className="w-[80%] mx-auto flex justify-between items-center mt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} INNOVATE, All rights reserved.</p>
            <div className="flex gap-7">
            <Tooltip title="View Github">
              <IconButton
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={buttonStyles}
                >
                  <GitHubIcon sx={icondarkmode} />
              </IconButton>  
            </Tooltip> 
            <Tooltip title="View Facebook">
              <IconButton
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={buttonStyles}
                >
                <FacebookIcon sx={icondarkmode} />
              </IconButton>
            </Tooltip> 

            <Tooltip title="Contact on Email">
              <IconButton
                  href="mailto:example@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={buttonStyles}
                >
                <EmailIcon sx={icondarkmode} />
              </IconButton>
            </Tooltip>
              
            </div>
          </div>
        </footer>


        

      </div>
    </div>
  );
};

export default Homepage;
