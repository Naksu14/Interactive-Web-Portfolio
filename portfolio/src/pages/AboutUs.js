import React from "react";
import AboutsBackground from "../components/about/AboutsBackground";

const AboutUs = ({ darkMode }) => {

  return (
    <div className={`z-5 relative mx-1 sm:mx-4 md:mx-6 lg:mx-8 mt-[104px] h-[calc(100vh-130px)] overflow-hidden rounded-b-[2rem] ${darkMode ? 'bg-[#D74925]/60' : 'bg-[#f0b6a2]/60'}`}>
      {/* Background Image Component */}
        <AboutsBackground darkMode={darkMode} />
      {/* Background Wrapper */}
      <div className={`absolute ${darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"}`}></div>

      {/* Content Wrapper (Scrollable) */}
      <div className={`relative p-6 overflow-auto h-full custom-scrollbar ${darkMode ? "text-[#ffffff]" : "text-[#59453F]"}`}>

          {/* Top Section: Text +  Image */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-4  px-6">
         
          {/* Intro Text bg-white bg-opacity-30 border border-white/20 rounded-[15px] backdrop-blur-lg*/}
          <div className="w-full lg:w-3/5 w-4/5 p-10 text-left tracking-wide ">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              <b>We are InnoVate</b>, a team of five passionate developers and designers committed to creating seamless and innovative digital experiences. Our goal is to build functional, user-friendly, and visually engaging websites that bring ideas to life.
            </p>
          </div>

          {/* Fixed Vertical Logo on Right */}
          <div className="fixed top-[150px] right-20 z-0">
            <img
              src={darkMode ? require("../assets/commonIcons/verticallighlogo.png") : require("../assets/commonIcons/verticaldarklogo.png")} 
              alt="Innovate Logo"
              className="w-[50px] hidden xl:block"
            />
          </div>

          

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 max-w-[1400px] px-16">
          {[
            {
              title: "Web Development",
              desc: "Building dynamic and responsive websites.",
              video: require("../assets/videos/webdev-loop.mp4"),
            },
            {
              title: "UI/UX Design",
              desc: "Crafting intuitive and modern user experiences.",
              video: require("../assets/videos/uiux-loop.mp4"),
            },
            {
              title: "E-commerce & CMS",
              desc: "Developing scalable online platforms.",
              video: require("../assets/videos/cms-loop.mp4"),
            },
            {
              title: "SEO & Optimization",
              desc: "Enhancing your online presence and visibility.",
              video: require("../assets/videos/seo-loop.mp4"),
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-30 backdrop-blur-md rounded-xl shadow-md border border-white/30 overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.09] p-1"
            >
              {/* Video Container */}
              <div className="relative h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden rounded-t-xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={card.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play Button Icon */}
                <div className="absolute bottom-2 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <img
                    src={require("../assets/commonIcons/play.png")}
                    alt="Play Icon"
                    className="w-[20px]"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-left">{card.title}</h3>
                <p className="text-sm mt-1 text-left text-ellipsis overflow-hidden">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
};

export default AboutUs;
