import React, { useState } from "react";
import GroupsBackground from "../components/GroupsBackground";

import bmail from "../assets/black-mail.png";
import location from "../assets/location.png";
import twitter from "../assets/twitter.png";
import telephone from "../assets/telephone.png";
import send from "../assets/sendm.png";
import logo from "../assets/logo_black.png";
import pin from "../assets/pinlocreal.png";

import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';



import loel from "../assets/Anime_Members/loel.png";
import fred from "../assets/Anime_Members/eyef.png";
import daniela from "../assets/Anime_Members/eyed.png";
import rhanel from "../assets/Anime_Members/eyer.png";
import lance from "../assets/Anime_Members/eyel.png";


const images = [loel, fred, daniela, rhanel, lance];


const Contact = ({ darkMode }) => {

  const [hovered, setHovered] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(true); // State to track map visibility
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

  const toggleMapVisibility = () => {
    setIsMapVisible(!isMapVisible); // Toggle map visibility
  };

  return (
    <div className={`z-5 relative mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
      <GroupsBackground />

      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

        <div className="h-full flex items-center justify-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mt-[-200px]">
            <h1 className="text-6xl font-bold">CONTACT US</h1>

            <p className="text-2xl mt-[10px]">Let's connect and make things happen!</p>




            {/* Shapes Row */}
            <div className="mt-6 flex gap-10 mt-[100px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-50 h-10 border-[0.5px] border-[#59453F] transform -skew-x-[40deg] bg-transparent relative overflow-hidden"
                >
                  <img
                    src={images[i]}
                    alt={`Shape Image ${i}`}
                    className="w-full h-full object-cover transform skew-x-[40deg]"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
        {/* Form and Info Section */}
        <div className="space-y-6 mx-auto max-w-10xl mt-10">
          {/* Form and Info Section with Flexbox */}
          <div className="flex justify-center gap-20 items-start">

            {/* Left Section with Header and Form */}
            <div className="w-1/2 space-y-6">
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
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name :"
                    className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm
                    ${darkMode
                        ? 'text-white placeholder-white'
                        : 'text-[#59453F] placeholder-[#59453F]'}`}
                    style={{
                      boxShadow: darkMode
                        ? '0 0 0 1px rgba(255, 255, 255, 0.5)'
                        : '0 0 0 1px rgba(255, 255, 255, 0.5)'
                    }}
                  />



                  <input
                    type="text"
                    placeholder="Last Name :"
                    className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm
                    ${darkMode
                        ? 'text-white placeholder-white'
                        : 'text-[#59453F] placeholder-[#59453F]'}`}
                    style={{
                      boxShadow: darkMode
                        ? '0 0 0 1px rgba(255, 255, 255, 0.5)'
                        : '0 0 0 1px rgba(255, 255, 255, 0.5)'
                    }}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Email :"
                  className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm
                    ${darkMode
                      ? 'text-white placeholder-white'
                      : 'text-[#59453F] placeholder-[#59453F]'}`}
                  style={{
                    boxShadow: darkMode
                      ? '0 0 0 1px rgba(255, 255, 255, 0.5)'
                      : '0 0 0 1px rgba(255, 255, 255, 0.5)'
                  }}
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className={`p-3 rounded-[3px] w-full bg-white bg-opacity-30 text-sm h-[300px]
    ${darkMode
                      ? 'text-white placeholder-white'
                      : 'text-[#59453F] placeholder-[#59453F]'}`}
                  style={{
                    boxShadow: darkMode
                      ? '0 0 0 1px rgba(255, 255, 255, 0.2)'
                      : '0 0 0 1px rgba(89, 69, 63, 0.2)'
                  }}
                ></textarea>


                <button
                  type="submit"
                  className={`group px-6 py-3 rounded-md font-semibold w-full flex items-center justify-center gap-2 transition
    ${darkMode
                      ? 'text-white bg-white bg-opacity-5 hover:bg-white hover:text-[#59453F]'
                      : 'text-[#59453F] bg-white bg-opacity-30 hover:bg-[#59453F] hover:text-white'}`}
                  style={{
                    boxShadow: darkMode
                      ? '0 0 0 1px rgba(255, 255, 255, 0.2)'
                      : '0 0 0 1px rgba(89, 69, 63, 0.2)'
                  }}
                >
                  Send Message
                  <img
                    src={send}
                    alt="Send"
                    className={`w-5 h-5 transition 
      ${darkMode
                        ? 'filter invert group-hover:invert-0'
                        : 'group-hover:invert'}`}
                  />
                </button>



              </form>
            </div>

            {/* Info Section */}
            <div
              className={`space-y-6 min-h-[400px] text-left p-10 w-1/4 rounded-md
                ${darkMode
                  ? 'text-white bg-white bg-opacity-5'
                  : 'text-[#59453F] bg-white bg-opacity-30'
                }`}
              style={{
                boxShadow: darkMode
                  ? '0 0 0 1px rgba(255, 255, 255, 0.5)'
                  : '0 0 0 1px rgba(255, 255, 255, 0.5)'
              }}
            >




              {/* Address Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Address</h3>
                <p className="text-xl mb-2">Site: 123 Main Street, Bacoor, Cavite</p>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-xl mb-2"> Address: 123 Main Street, Bacoor, Cavite</p>
                <p className="text-xl mb-2">Phone: +63 912 345 6789</p>
                <p className="text-xl mb-2">Email: info@example.com</p>
              </div>

              {/* Links Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Links</h3>
                <p className="text-xl mb-2">Facebook: +63 912 345 6789</p>
                <p className="text-xl mb-2">Twitter: info@example.com</p>

                {/* Social Icons */}
                <div className="flex gap-6 mt-10">
                  <div className={`w-20 h-10 rounded-full border flex items-center justify-center ${darkMode ? 'border-white bg-transparent' : 'border-[#59453F] bg-transparent'}`}>
                    <img src={telephone} alt="telephone" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
                  </div>
                  <div className={`w-20 h-10 rounded-full border flex items-center justify-center ${darkMode ? 'border-white bg-transparent' : 'border-[#59453F] bg-transparent'}`}>
                    <img src={bmail} alt="mail" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
                  </div>
                  <div className={`w-20 h-10 rounded-full border flex items-center justify-center ${darkMode ? 'border-white bg-transparent' : 'border-[#59453F] bg-transparent'}`}>
                    <img src={twitter} alt="twitter" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
                  </div>
                  <div className={`w-20 h-10 rounded-full border flex items-center justify-center ${darkMode ? 'border-white bg-transparent' : 'border-[#59453F] bg-transparent'}`}>
                    <img src={location} alt="location" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
                  </div>
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
          className="px-10 py-2 mt-10  rounded-sm border border-[#59453F] text-[#59453F] bg-transparent 
             hover:bg-[#59453F] hover:text-white transition duration-300"
        >
          {showMap ? "Hide" : "Show Map"}
        </button>


        <footer className={`mt-10 py-6 text-left ${darkMode ? "text-white" : "text-[#59453F]"}`}>
          <div className="w-[80%] mx-auto flex justify-between items-center mb-6">

          </div>


          {/* Border and social icons */}
          <div
            className={`w-[80%] mx-auto border-t-[2px] ${darkMode ? "border-white" : "border-[#59453F]"} mt-20`} />


          <div className="w-[80%] mx-auto flex justify-between items-center mt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} INNOVATE, All rights reserved.</p>
            <div className="flex gap-7">
              <IconButton
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={buttonStyles}
              >
                <GitHubIcon sx={icondarkmode} />
              </IconButton>

              <IconButton
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={buttonStyles}
              >
                <FacebookIcon sx={icondarkmode} />
              </IconButton>

              <IconButton
                href="mailto:example@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={buttonStyles}
              >
                <EmailIcon sx={icondarkmode} />
              </IconButton>
            </div>
          </div>
        </footer>










      </div>
    </div>
  );
};

export default Contact;
