import React from "react";
import { useInView } from 'react-intersection-observer';  // Intersection Observer hook
import { ChevronLeft, ChevronRight } from "lucide-react";
import GroupsBackground from "../components/GroupsBackground";
import CarouselCard from "../components/CarouselMembers";
import CarouselCardFrameworkds from "../components/CarouselUseFrameworks";
import Projectsimage from "../components/projectsAlbumbutton";
import ViewContactButton from "../components/viewContact";

const Homepage = ({ darkMode }) => {

  // Intersection observer hook for detecting visibility
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when element is in view
    threshold: 0.5,     // Trigger when at least 50% of the element is visible
  });

  const ContainerBg =
    'bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg'
  ;

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        {/* Team name and logo Brief introduction of the team */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 md:space-y-0 mt-10 px-6">
          
          {/* Team name and logo Section */}
          <div className="w-full max-w-[680px] lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 flex-1">
            <img 
              src={darkMode ? require("../assets/Whomelogo.png") : require("../assets/bhomelogo.png")} 
              alt="InnoVate Logo" 
              className="w-full h-auto object-contain mx-auto"
            />
          </div>

          <div className="w-full lg:w-[800px] bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] text-left tracking-wide backdrop-blur-lg mx-4 sm:mx-6 md:mx-12 mb-4 sm:mb-6 md:mb-0 mt-4 sm:mt-6 md:mt-0 flex-1">
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl">
              <b>We are InnoVate</b>, a team of five passionate developers and designers committed to creating seamless and innovative digital experiences. Our goal is to build functional, user-friendly, and visually engaging websites that bring ideas to life.
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
            <div className="sm:text-3xl md:text-4xl lg:text-5xl text-left w-full max-w-[800px] mx-auto">
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
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
                  We develop innovative and promising projects that solve real-world problems by constructing efficient programs with enhanced user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Image Section */}
          <div 
            ref={ref} 
            className={`hidden lg:flex flex-col justify-center items-center lg:order-1 mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 
              ${inView ? 'animate-rslide-in' : 'animate-rslide-out'}`} 
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
            className={`hidden lg:flex flex-col justify-center items-center mb-8 md:mb-10 mx-6 md:mx-12 mt-6 md:mt-0 animate-lslide-in
              ${inView ? 'animate-lslide-in' : 'animate-lslide-out'}`} 
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
            <div className="sm:text-3xl md:text-4xl lg:text-5xl text-right w-full max-w-[800px] mx-auto">
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
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-center">
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                MISSION <br /> STATEMENT
              </h2>
              <div className={`h-[2px] mt-1 sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-white" : "bg-[#59453F]"}`}></div>
            </div>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-left">
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
              <p className="text-lg font-medium mx-auto px-8">Repository</p>
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
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                VISION <br /> STATEMENT
              </h2>
              <div className={`h-[2px] mt-1 sm:w-[170px] md:w-[200px] lg:w-[270px] ${darkMode ? "bg-white" : "bg-[#59453F]"} ml-auto`}></div>
              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-right">
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


        

        {/* logo in bottom */}      
        <div className="w-full flex justify-center">
            <img 
              src={darkMode ? require("../assets/Whomelogo2.png") : require("../assets/bhomelogo2.png")} 
              alt="logo2 Image" 
              className="w-[120px] h-[80]"
            />
        </div>

      </div>
    </div>
  );
};

export default Homepage;
