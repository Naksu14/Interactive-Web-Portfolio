import React, { useState } from 'react';

function ImageHover({ imageSrc, altText, position = '50% 20%', zoom = 1, name, onClick, darkMode, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-[100px] sm:h-[200px] md:h-[200px] lg:h-[500px] bg-white ${darkMode ? 'bg-opacity-10' : 'bg-opacity-20'
        } border border-[#ffffff]/30 overflow-hidden mx-1 transition-all duration-300 ${isHovered || isSelected ? 'sm:w-[120px] w-[100px]' : 'w-[100px]'
        } ${isSelected ? 'ring-2 ring-white/50 ' : ''}`}
      style={{
        borderTopLeftRadius: '50px',
        borderBottomRightRadius: '50px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Black overlay when selected */}
      {isSelected && (
        <div className={`absolute inset-0 ${darkMode ? 'bg-[#f0b6a2]/30' : 'bg-[#D74925]/30'} bg-opacity-50 pointer-events-none z-10`}></div>
      )}

      {/* Black overlay (visible when not hovered/selected) */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${isHovered || isSelected ? 'opacity-0' : darkMode ? 'opacity-30 bg-black' : 'opacity-20 bg-black'
        }`} />

      <img
        src={imageSrc}
        alt={altText}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-transform transform skew-x-[50deg] duration-500 hover:scale-110 
    ${isHovered || isSelected ? 'grayscale-0' : 'grayscale opacity-80'} `}
        style={{
          objectPosition: position,
          transform: `scale(${zoom})`,
          borderTopLeftRadius: '50px',
          borderBottomRightRadius: '50px'
        }}
      />


      {/* Hover Name Overlay */}
      {isHovered && !isSelected && (
        <div className={`absolute bottom-0 left-0 right-0 z-20 p-2 text-left text-white transition-opacity duration-300 bg-gradient-to-t from-[#000000]/70 to-[#ffffff]/0 opacity-100`}>
          <span className="text-sm font-medium">{name}</span>
        </div>
      )}

      {/* Selected Name Overlay */}
      {isSelected && (
        <div className={`absolute bottom-0 left-0 right-0 z-20 p-2 text-left text-white transition-opacity duration-300
          ${darkMode ? 'bg-gradient-to-t from-[#f0b6a2] to-[#ffffff]/0' : 'bg-gradient-to-t from-[#A9543E] to-[#ffffff]/0'} opacity-100`}>
          <span className="text-sm font-semibold tracking-wide">{name}</span>
        </div>
      )}

    </div>
  );
}

function ImageGallery({ onSelect, darkMode, selectedMember }) {
  const teamMembers = [
    {
      id: 1,
      src: require("../../assets/Anime_Members/Anime_Daniela.png"),
      alt: "Daniela",
      name: "DANIELA ROMANA CASTAÑEDA",
      nn: "DANIELA",
      github: "https://github.com/dnlrmn09",
      facebook: "https://www.facebook.com/kumarii14",
      email: "mailto:ic.danielaromana.castaneda@cvsu.edu.ph",
      title: "UI/UX Designer",
      skills: [
        "LANGUAGE: JS, Python, C++, PHP",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: React, BOOTSTRAP",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      cv: "/cv/CV_Castañeda-Daniela.pdf",
      position: '48% 20%',
      zoom: 1.4
    },
    {
      id: 2,
      src: require("../../assets/Anime_Members/Anime_Loel.png"),
      alt: "Loel",
      name: "LOEL CAMPAÑA",
      nn: "LOEL",
      github: "https://github.com/Naksu14",
      facebook: "https://www.facebook.com/loelcamp14",
      email: "mailto:ic.loel.campana@cvsu.edu.ph",
      title: "Full-Stack Developer",
      skills: [
        "LANGUAGE: JS, Java, Python, C++, PHP",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: React, BOOTSTRAP",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      cv: "/cv/CV_Campaña-Loel.pdf",
      position: '50% 20%',
      zoom: 1.4
    },
    {
      id: 3,
      src: require("../../assets/Anime_Members/Anime_Lance.png"),
      alt: "lance",
      name: "LANCE LISTANA",
      nn: "LANCE",
      github: "https://github.com/L-iVANS",
      facebook: "https://www.facebook.com/share/1KWs2goyk6/",
      email: "mailto: lanceivan.listana@cvsu.edu.ph",
      title: "QA Tester, Designer",
      skills: [
        "LANGUAGE: C, C++, Java, PHP, JS",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: BOOTSTRAP, Bulma, React, Tailwind",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      cv: "/cv/CV_Listana-Lance.pdf",
      position: '30% 10%',
      zoom: 1.0
    },
    {
      id: 4,
      src: require("../../assets/Anime_Members/Anime_Rhanel.png"),
      alt: "Rhanel",
      nn: "RHANEL",
      github: "https://github.com/sytheprogrammer",
      facebook: "https://www.facebook.com/Seighmone",
      email: "mailto:rhanelseighmone.buclares@cvsu.edu.ph",
      name: "RHANEL SEIGHMONE BUCLARES",
      title: "Frontend Developer, Designer",
      skills: [
        "LANGUAGE: C, C++, Java, PHP, JS",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: BOOTSTRAP, Bulma",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      cv: "/cv/CV_Buclares-Rhanel.pdf",
      position: '45% 20%',
      zoom: 1.0
    },
    {
      id: 5,
      src: require("../../assets/Anime_Members/Anime_Fred.png"),
      alt: "Fred",
      nn: "FREDDRICK",
      name: "FREDDRICK TROPICO",
      github: "https://github.com/iRengo",
      facebook: "https://www.facebook.com/freddricktropico14",
      email: "mailto: ic.freddrick.tropico@cvsu.edu.ph",
      title: "Frontend Developer, Designer",
      skills: [
        "LANGUAGE: C, C++, Java, PHP, JS",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: BOOTSTRAP, Bulma",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      cv: "/cv/CV_Tropico-Freddrick.pdf",
      position: '40% 20%',
      zoom: 1.0
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-0 gap-y-4 p-4 w-full">
      {teamMembers.map((member) => (
        <ImageHover
          key={member.id}
          imageSrc={member.src}
          altText={member.alt}
          position={member.position}
          zoom={member.zoom}
          name={member.nn}
          onClick={() => onSelect(member)}
          darkMode={darkMode}
          isSelected={selectedMember?.name === member.name} 
        />
        
      ))}
    </div>

  );
}

export default ImageGallery;