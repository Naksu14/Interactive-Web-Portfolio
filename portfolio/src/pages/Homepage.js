import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamlogo from "../assets/bhomelogo2.png";
import GroupsBackground from "../components/GroupsBackground";
import CarouselCard from "../components/CarouselMembers";
import CarouselCardFrameworkds from "../components/CarouselUseFrameworks";
import Projectsimage from "../components/projectsAlbumbutton";
import ViewContactButton from "../components/viewContact";

// Reduced Space
import AnimeDaniela from "../assets/Anime_Members/Anime_Daniela1.png";
import AnimeFred from "../assets/Anime_Members/Anime_Fred1.png";
import AnimeRhanel from "../assets/Anime_Members/Anime_Rhanel1.png";
import AnimeLoel from "../assets/Anime_Members/Anime_Loel1.png";
import AnimeLance from "../assets/Anime_Members/Anime_Lance1.png";

// Outlined Social Icons
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import twitter from "../assets//twitter.png";
import github from "../assets//github.png";

const Homepage = ({ darkMode }) => {

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
              src={darkMode ? require("../assets/homelogonew.png") : require("../assets/homelogodark.png")}
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


            {/* dark icons 
            <img
              src={gmail}
              alt="Gmail"
              className={`absolute top-[145px] left-[-200px] w-15 h-15 animate-float ${darkMode ? '' : 'filter invert'} transition-all duration-300 ease-in-out`}
            />
            <img
              src={linkedin}
              alt="LinkedIn"
              className={`absolute bottom-[40px] right-[-200px] w-15 h-15 animate-float ${darkMode ? '' : 'filter invert'} transition-all duration-300 ease-in-out`}
            />
            <img
              src={facebook}
              alt="Facebook"
              className={`absolute top-[130px] right-[40px] w-15 h-15 animate-float ${darkMode ? '' : 'filter invert'} transition-all duration-300 ease-in-out`}
            />
            <img
              src={twitter}
              alt="Twitter"
              className={`absolute bottom-[20px] left-[-100px] bottom-[200px] w-15 h-15 animate-float ${darkMode ? '' : 'filter invert'} transition-all duration-300 ease-in-out`}
            />
            <img
              src={github}
              alt="GitHub"
              className={`absolute top-[-40px] right-[530px] w-10 h-10 animate-float ${darkMode ? '' : 'filter invert'} transition-all duration-300 ease-in-out`}
            />
            */}



            {/* Daniela */}
            <div className="relative z-10 flex justify-center">
              <img
                src={AnimeDaniela}
                alt="Daniela"
                className={`w-[350px] xs:w-[350px] sm:w-[300px] md:w-[320px] lg:w-[350px] xl:w-[380px] h-auto object-contain transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Daniela' ? 'blur-[1.8px]' : ''}`}
                onMouseEnter={() => setHovered('Daniela')}
                onMouseLeave={() => setHovered(null)}
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f8f8] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Fred */}
            <div className="relative z-0 -ml-[150px] mb-[120px] xs:-ml-[150px] sm:-ml-[180px] md:-ml-[170px] -mt-[100px] lg:-ml-[220px] xl:-ml-[250px]">
              <img
                src={AnimeFred}
                alt="Fred"
                className={`w-[200px] xs:w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[320px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Fred' ? 'blur-[1.8px]' : ''}`}
                onMouseEnter={() => setHovered('Fred')}
                onMouseLeave={() => setHovered(null)}
              />
            </div>

            {/* Loel */}
            <div className="relative z-40 -ml-[140px] xs:-ml-[140px] sm:-ml-[130px] md:-ml-[160px] lg:-ml-[170px] xl:-ml-[180px]">
              <img
                src={AnimeLoel}
                alt="Loel"
                className={`w-[200px] xs:w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Loel' ? 'blur-[1.8px]' : ''}`}
                onMouseEnter={() => setHovered('Loel')}
                onMouseLeave={() => setHovered(null)}
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f8f8] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Lance */}
            <div className="relative z-10 mb-[190px] -ml-[100px] xs:-ml-[100px] sm:-ml-[100px] mt-[-30px] md:-ml-[125px] lg:-ml-[140px] xl:-ml-[140px]">
              <img
                src={AnimeLance}
                alt="Lance"
                className={`w-[120px] xs:w-[120px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[270px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Lance' ? 'blur-[1.8px]' : ''}`}
                onMouseEnter={() => setHovered('Lance')}
                onMouseLeave={() => setHovered(null)}
              />
            </div>

            {/* Rhanel */}
            <div className="relative z-10 -ml-[150px] xs:-ml-[150px] sm:-ml-[150px] md:-ml-[200px] lg:-ml-[220px] xl:-ml-[240px]">
              <img
                src={AnimeRhanel}
                alt="Rhanel"
                className={`w-[180px] xs:w-[180px] sm:w-[250px] md:w-[280px] lg:w-[300px] xl:w-[320px] h-auto transition-all duration-300 ease-in-out hover:brightness-150 ${hovered && hovered !== 'Rhanel' ? 'blur-[1.8px]' : ''}`}
                onMouseEnter={() => setHovered('Rhanel')}
                onMouseLeave={() => setHovered(null)}
              />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f8f8] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        <br />
        <br />
        <br />

        {/* Team name and logo Brief introduction of the team */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0 mt-10 px-6">

          <div className="w-full max-w-[680px] lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 flex-1">
            <img
              src={darkMode ? require("../assets/Whomelogo.png") : require("../assets/bhomelogo.png")}
              alt="InnoVate Logo"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <div className="w-full lg:w-[800px] bg-white bg-opacity-20 border border-[#ffffff]/30 p-10 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-4 sm:mx-6 md:mx-12 mb-4 sm:mb-6 md:mb-0 mt-4 sm:mt-6 md:mt-0 flex-1">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
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

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full px-6">
          {/* Mission Statement Title and Text Section */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[85%] p-6">
            {/* Mission Statement Title */}
            <div className="sm:text-2xl md:text-3xl lg:text-4xl text-left w-full max-w-[800px] mx-auto">
              <b>
                MISSION <br />
                STATEMENT
              </b>
              <div className={`h-[2px] sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"}`}></div>
            </div>
            <br />

            {/* Text Section of Mission */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[800px] bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg mx-auto mb-8 md:mb-0 mt-6 md:mt-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
                  We develop innovative and promising projects that solve real-world problems by constructing efficient programs with enhanced user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Image Section */}
          <div
            ref={ref}
            className={`hidden lg:flex flex-col justify-center items-center lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 animate-rslide-in`}
            style={{ transition: 'transform 1s ease-out' }}
          >
            <img
              src={darkMode ? require("../assets/arrowwhite.png") : require("../assets/arrow 1.png")}
              alt="Mission Arrow"
              className="w-40% h-40%"
            />
            <img
              src={darkMode ? require("../assets/missionwhite.png") : require("../assets/mission.png")}
              alt="Mission Image"
              className="w-60% h-60%"
            />
          </div>

        </div>
        <br />

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full px-6">
          {/* Vision Image Section (Now on the left) */}
          <div
            ref={ref}
            className={`hidden lg:flex flex-col justify-center items-center mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 animate-lslide-in`}
            style={{ transition: 'transform 1s ease-out' }}
          >
            <img
              src={darkMode ? require("../assets/arrowwhite.png") : require("../assets/arrow 1.png")}
              alt="Vision Arrow"
              className="w-40% h-40%"
            />
            <img
              src={darkMode ? require("../assets/missionwhite.png") : require("../assets/mission.png")}
              alt="Vision Image"
              className="w-60% h-60%"
            />

          </div>


          {/* Vision Statement Title and Text Section (Now on the right) */}
          <div className="flex flex-col items-center justify-center w-full lg:w-[85%] p-6">
            {/* Vision Statement Title */}
            <div className="sm:text-2xl md:text-3xl lg:text-4xl text-right w-full max-w-[800px] mx-auto">
              <b>
                VISION <br />
                STATEMENT
              </b>
              <div className={`h-[2px] sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-[#ffffff]" : "bg-[#59453F]"} ml-auto`}></div>

            </div>
            <br />

            {/* Text Section of Vision */}
            <div className="w-full flex justify-center">
              <div className="w-full md:w-[800px] bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg mx-auto mb-8 md:mb-0 mt-6 md:mt-0">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center">
                  To alter our technology by developing progressive solutions that simplify real-world challenges and set new standards for user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />

        {/* Gridd Contennt */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 gap-4 px-4 md:px-16 lg:px-32 py-4">
          {/* Mission Statement */}
          <div className={`md:col-span-2 md:row-span-1 ${ContainerBg} p-6 rounded-xl`}>
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

          {/* Sun Image */}
          <div className={`md:row-span-1 ${ContainerBg} flex justify-center items-center p-4 px-6 rounded-xl`}>
            <img className="w-16 md:w-32 lg:w-48" src={require("../assets/sunsspng.png")} alt="Sun" />
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
            <img className="w-16 md:w-32 lg:w-48 mb-2" src={require("../assets/gitpng.png")} alt="GitHub" />
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
          <div className={`md:col-span-2 md:row-span-1 ${ContainerBg} p-6 rounded-xl`}>
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
          <div className="w-[80%] mx-auto flex md:justify-between items-center  justify-center mb-6">
            <div className="flex flex-col items-start gap-2">
              {/* logo in bottom */}
              <div className="w-full flex justify-center">
                <img
                  src={darkMode ? require("../assets/Whomelogo2.png") : require("../assets/bhomelogo2.png")}
                  alt="logo2 Image"
                  className="w-[120px] h-[80]"
                />
              </div>

              <p className="text-sm ">Innovating Digital Experience.</p>
            </div>
          </div>

          {/* Border and social icons */}
          <div
            className={`w-[80%] mx-auto border-t-[2px] ${darkMode ? "border-white" : "border-[#59453F]"} mt-20`} />

          <div className="w-[80%] mx-auto flex md:justify-between items-center justify-center mt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} INNOVATE, All rights reserved.</p>
            <div className="flex gap-7">


            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Homepage;
