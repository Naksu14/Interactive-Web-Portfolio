import React, { useState } from "react";
import GroupsBackground from "../components/GroupsBackground";

import github from "../assets/gitpng.png";
import teamlogo from "../assets/bhomelogo2.png";
import mail from "../assets/mail-circle.png";
import bmail from "../assets/black-mail.png";
import facebook from "../assets/facebook-circle.png";
import location from "../assets/location.png";
import twitter from "../assets/twitter.png";
import telephone from "../assets/telephone.png";
import send from "../assets/sendm.png";


import loel from "../assets/Anime_Members/loel.png";
import fred from "../assets/Anime_Members/eyef.png";
import daniela from "../assets/Anime_Members/eyed.png";
import rhanel from "../assets/Anime_Members/eyer.png";
import lance from "../assets/Anime_Members/eyel.png";



const images = [loel, fred, daniela, rhanel, lance];

const Contact = ({ darkMode }) => {
  const [hovered, setHovered] = useState(null);

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
                    placeholder="First Name"
                    className={`p-3 rounded-[3px] w-full bg-transparent border-[0.5px] 
                 ${darkMode ? 'border-white text-white placeholder-white' : 'border-[#59453F] text-[#59453F] placeholder-[#59453F]'}`}
                  />


                  <input
                    type="text"
                    placeholder="Last Name"
                    className={`p-3 rounded-[3px] w-full bg-transparent border-[0.5px] 
                 ${darkMode ? 'border-white text-white placeholder-white' : 'border-[#59453F] text-[#59453F] placeholder-[#59453F]'}`}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className={`p-3 rounded-[3px] w-full bg-transparent border-[0.5px] 
               ${darkMode ? 'border-white text-white placeholder-white' : 'border-[#59453F] text-[#59453F] placeholder-[#59453F]'}`}
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className={`p-3 rounded-[3px] w-full bg-transparent border-[0.5px] 
               ${darkMode ? 'border-white text-white placeholder-white' : 'border-[#59453F] text-[#59453F] placeholder-[#59453F]'} h-[300px]`}
                ></textarea>

                <button
                  type="submit"
                  className={`px-6 py-3 rounded-md bg-transparent font-semibold 
     ${darkMode ? 'text-white border-white hover:bg-white hover:text-[#59453F]' : 'text-[#59453F] border-[#59453F] hover:bg-[#59453F] hover:text-white'} 
     border w-full transition`}
                >
                  Send Message
                  <img
                    src={send}
                    alt="Send"
                    className={`mr-2 w-5 h-5 ml-2 inline-block 
      ${darkMode ? 'filter invert' : ''}`}
                  />
                </button>


              </form>
            </div>

            {/* Info Section */}
            <div className={`space-y-6 min-h-[400px] 
                ${darkMode ? 'text-white border-white' : 'text-[#59453F] border-[#59453F]'} 
                border rounded-md text-left p-10 w-1/4`}>
              {/* Address Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Address</h3>
                <p className="text-xl mb-2"><strong>Site:</strong> 123 Main Street, Bacoor, Cavite</p>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-xl mb-2"><strong>Address:</strong> 123 Main Street, Bacoor, Cavite</p>
                <p className="text-xl mb-2"><strong>Phone:</strong> +63 912 345 6789</p>
                <p className="text-xl mb-2"><strong>Email:</strong> info@example.com</p>
              </div>

              {/* Links Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Links</h3>
                <p className="text-xl mb-2"><strong>Facebook:</strong> +63 912 345 6789</p>
                <p className="text-xl mb-2"><strong>Twitter:</strong> info@example.com</p>

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
        <div className="flex justify-center mt-20 h-[360px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30922.216701008873!2d120.96333722978045!3d14.443805191751115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce4e2a0a4823%3A0x64071c34efc65ff9!2sBacoor%2C%20Cavite!5e0!3m2!1sen!2sph!4v1713085415327!5m2!1sen!2sph"
            width="80%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md border border-[#59453F]"
          ></iframe>
        </div>

        <footer className={`mt-10 py-6 text-left ${darkMode ? "text-white" : "text-[#59453F]"}`}>
          <div className="w-[80%] mx-auto flex justify-between items-center mb-6">
            <div className="flex flex-col items-start gap-2">
              <img
                src={teamlogo} alt="Logo" className={`w-29 h-20 ${darkMode ? "invert brightness-0" : ""}`} />

              <p className="text-md ">Innovating Digital Experience.</p>
            </div>

            <div className="flex gap-[200px]">
              <div>
                <h4 className="font-semibold text-2xl relative">
                  Quick Links
                  <span
                    className={`absolute bottom-[-4px] left-0 w-full h-[3px] mt-5 ${darkMode ? "bg-white" : "bg-[#59453F]"
                      }`}
                  />
                </h4>
                <ul className="mt-4">
                  <li><a href="/homepage" className="text-lg">Homepage</a></li>
                  <li><a href="/about-us" className="text-lg">About Us</a></li>
                  <li><a href="/team-members" className="text-lg">Team Members</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-2xl relative">
                  Services
                  <span
                    className={`absolute bottom-[-4px] left-0 w-full h-[3px] mt-5 ${darkMode ? "bg-white" : "bg-[#59453F]"
                      }`}
                  />
                </h4>
                <ul className="mt-4">
                  <li><a href="/our-services" className="text-lg">Our Services</a></li>
                  <li><a href="/case-studies" className="text-lg">Case Studies</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-2xl relative">
                  Support
                  <span
                    className={`absolute bottom-[-4px] left-0 w-full h-[3px] mt-5 ${darkMode ? "bg-white" : "bg-[#59453F]"
                      }`}
                  />
                </h4>
                <ul className="mt-4">
                  <li><a href="/faq" className="text-lg">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Border and social icons */}
          <div
            className={`w-[80%] mx-auto border-t-[2px] ${darkMode ? "border-white" : "border-[#59453F]"} mt-20`} />

          <div className="w-[80%] mx-auto flex justify-between items-center mt-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} INNOVATE, All rights reserved.</p>
            <div className="flex gap-7">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={mail} alt="Email" className={`w-7 h-7 ${darkMode ? "invert brightness-0" : ""}`} />
              </a>
            </div>
          </div>
        </footer>










      </div>
    </div>
  );
};

export default Contact;
