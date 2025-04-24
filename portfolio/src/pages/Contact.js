import React, { useState } from "react";
import GroupsBackground from "../components/common/GroupsBackground";
import Footer from "../components/common/Footer";
import SendEmail from "../components/contact/SendEmail";

import bmail from "../assets/commonIcons/black-mail.png";
import location from "../assets/commonIcons/location.png";
import twitter1 from "../assets/commonIcons/twitter1.png";
import telephone from "../assets/commonIcons/telephone.png";
import logo from "../assets/commonIcons/logo_black.png";

import fred from "../assets/Anime_Members/eyef.png";
import daniela from "../assets/Anime_Members/eyed.png";
import rhanel from "../assets/Anime_Members/eyer.png";
import lance from "../assets/Anime_Members/eyel.png";
import loel from "../assets/Anime_Members/loel.png"; 






const images = [daniela, fred, loel, lance, rhanel];


const Contact = ({ darkMode }) => {

  const [showMap, setShowMap] = useState(false);
  const [isMapVisible] = useState(true); // State to track map visibility

  

  return (
    <div className={`z-5 relative mx-1 sm:mx-4 md:mx-6 lg:mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        <div className="h-full flex items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mt-[10px]">
            <h1 className="text-2xl sm:text3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">CONTACT US</h1>

            <p className="text-2xl mt-[10px]">Let's &nbsp;connect&nbsp; and &nbsp;make &nbsp;things &nbsp;happen!</p>




            {/* Shapes Row */}
            <div className={`mt-6 flex gap-4 mt-[60px] flex-wrap justify-center ${darkMode ? 'text-white' : 'text-[#59453F]'}`}>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[100px] sm:w-[120px] md:w-[150px] h-[30px] border-[0.5px] 
                 ${darkMode ? 'border-white' : 'border-[#59453F]'} transform -skew-x-[50deg] bg-transparent 
                 relative overflow-hidden group`}
                >
                  <img
                    src={images[i]}
                    alt={`Shape Image ${i}`}
                    className={`w-full h-full object-cover transform skew-x-[50deg] filter grayscale opacity-50 
                   ${darkMode ? 'group-hover:grayscale-0 group-hover:opacity-100' : 'group-hover:grayscale-0 group-hover:opacity-100'} 
                   transition-all duration-300 glitch-effect`}
                  />
                </div>
              ))}
            </div>









            <div className="flex justify-center mt-40 cursor-pointer" onClick={() => {
              document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <div className={`flex flex-col items-center ${darkMode ? 'text-white' : 'text-[#59453F]'}`}>
                {/* Mouse body */}
                <div className={`w-8 h-12 border-2 ${darkMode ? 'border-white' : 'border-[#59453F]'} rounded-full flex justify-center items-start relative animate-float`}>
                  <div className={`w-1 h-2 ${darkMode ? 'bg-white' : 'bg-[#59453F]'} rounded-full mt-2 animate-scroll`} />
                </div>
                <span className={`text-sm mt-2 ${darkMode ? 'text-white' : 'text-[#59453F]'}`}>Scroll down</span>
                <span className={`mt-2 w-4 h-4 ${darkMode ? 'text-white' : 'text-[#59453F]'} animate-bounce`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>


          </div>

        </div>
        {/* Form and Info Section */}
        <div id="contact-section" className="space-y-6 mx-auto px-4 sm:px-6 lg:px-40 max-w-none py-8">


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Form Section (larger on big screens) */}
            <div className="space-y-6 lg:col-span-7 w-full">
              {/* Header */}
              <div className="text-left">
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#59453F]'}`}>
                  GET IN TOUCH
                </h2>
                <p className={`text-lg ${darkMode ? 'text-white' : 'text-[#59453F]'} mt-2`}>
                  Send us a message and let’s talk!
                </p>
              </div>

              {/* Contact Form */}
             <SendEmail />
            </div>

            {/* Info Section */}
            <div
              className={`space-y-6 min-h-[400px] p-10 rounded-md mt-5
            ${darkMode ? 'text-white bg-white bg-opacity-5' : 'text-[#59453F] bg-white bg-opacity-30'}
            w-full sm:w-full md:w-[90%] lg:w-[75%] xl:w-[545%] text-center lg:text-left flex flex-col items-center lg:items-start`}
                      style={{
                        boxShadow: darkMode
                          ? '0 0 0 1px rgba(255, 255, 255, 0.5)'
                          : '0 0 0 1px rgba(255, 255, 255, 0.5)'
                      }}
                    >

              {/* Address Section */}
              <div>
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-4">Address</h3>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2">Site: Palico IV Imus City Cavite</p>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-4">Contact</h3>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2">Phone: + 0951-525-4884</p>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2">Email: teaminnovate@gmail.com</p>
              </div>

              {/* Links Section */}
              <div>
                <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold mb-4">Links</h3>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2">Facebook: Team Innovate Inc.</p>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl mb-2">Twitter: @Teaminnovate</p>

                {/* Social Icons */}
                <div className="flex gap-6 mt-10 flex-wrap justify-center lg:justify-start">
                  {[telephone, bmail, twitter1, location].map((icon, idx) => (
                    <div
                      key={idx}
                      className={`w-16 h-10 rounded-full border flex items-center justify-center 
                ${darkMode ? 'border-white bg-transparent' : 'border-[#59453F] bg-transparent'}`}
                    >
                      <img
                        src={icon}
                        alt="icon"
                        className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
                  ${darkMode ? "invert brightness-0" : ""}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Google Map Section */}


        {isMapVisible && (
          <div
            className={`mt-10 overflow-hidden transition-all duration-500 ease-in-out ${showMap ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="w-[80%] mx-auto relative"> {/* Controls the width */}
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.9773641771453!2d120.94455757367999!3d14.428468081270656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d25e0e88d16b%3A0xc2f8607cd4512597!2sCavite%20State%20University%20-%20Imus%20Campus!5e0!3m2!1sen!2sph!4v1744643741400!5m2!1sen!2sph"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="w-full rounded-xl mt-4"
              ></iframe>

              {/* Pinned label and photo */}
              <div className="absolute top-[50%] left-[53%] transform -translate-x-1/2 -translate-y-full text-center">
                <div className="text-white text-sm bg-black bg-opacity-100 mr-20 px-5 py-2 mb-1 shadow-lg rounded-lg relative">

                  We are here!
                  {/* Tail of the speech bubble */}
                  <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rotate-45"></div>
                </div>
                <img
                  src={logo}
                  alt="We're here!"
                  className="w-12 h-12 rounded-full border-2 border-black shadow-lg"
                />
              </div>
            </div>
          </div>


        )}
        <button
          onClick={() => setShowMap(prev => !prev)}
          className={`px-10 py-2 mt-10 rounded-sm border transition duration-300 
    ${darkMode ? 'border-white text-white hover:bg-white hover:text-[#59453F]' : 'border-[#59453F] text-[#59453F] hover:bg-[#59453F] hover:text-white'}`}
        >
          {showMap ? "Hide" : "Show Map"}
        </button>

        {/* FOOTER IMPORT*/}    
        <Footer  darkMode={darkMode}/>
        
      </div>
    </div>
  );
};

export default Contact;
