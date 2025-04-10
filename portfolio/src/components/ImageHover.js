// import React, { useState } from 'react';

// function ImageHover({ imageSrc, altText, position = '50% 20%', zoom = 1, name }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className={`relative h-[500px] bg-white bg-opacity-20 border border-[#ffffff]/30 overflow-hidden mx-1 transition-all duration-300 ${
//         isHovered ? 'w-[120px]' : 'w-[100px]'
//       }`}
//       style={{
//         borderTopLeftRadius: '50px',
//         borderBottomRightRadius: '50px'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Black overlay (visible when not hovered) */}
//       <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${
//         isHovered ? 'opacity-0' : 'opacity-20 bg-black'
//       }`} />
      
//       <img 
//         src={imageSrc} 
//         alt={altText} 
//         className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
//         style={{ 
//           objectPosition: position,
//           transform: `scale(${zoom})`,
//           borderTopLeftRadius: '50px',
//           borderBottomRightRadius: '50px'
//         }}
//       />

//       {/* Name overlay - appears on hover */}
//       <div className={`absolute bottom-0 left-0 right-0 z-20 p-2 text-center text-white bg-black bg-opacity-60 transition-opacity duration-300 ${
//         isHovered ? 'opacity-100' : 'opacity-0'
//       }`}>
//         <span className="text-sm font-medium">{name}</span>
//       </div>
//     </div>
//   );
// }

// function ImageGallery() {
//   const images = [
//     { 
//       src: require("../assets/Anime_Daniela.png"), 
//       alt: "Daniela",
//       name: "Daniela",
//       position: '48% 20%',
//       zoom: 1.1
//     },
//     { 
//       src: require("../assets/Anime_Loel.png"), 
//       alt: "Loel",
//       name: "Loel",
//       position: '50% 20%',
//       zoom: 1.0
//     },
//     { 
//       src: require("../assets/Anime_Lance.png"), 
//       alt: "Lance",
//       name: "Lance",
//       position: '5% 15%',
//       zoom: 1.3
//     },
//     { 
//       src: require("../assets/Anime_Fred.png"), 
//       alt: "Fred",
//       name: "Fred",
//       position: '30% 70%',
//       zoom: 1.0
//     },
//     { 
//       src: require("../assets/Anime_Rhanel.png"), 
//       alt: "Rhanel",
//       name: "Rhanel",
//       position: '46% 10%',
//       zoom: 1.0
//     }
//   ];

//   return (
//     <div className="flex justify-center items-center p-4">
//       {images.map((image, index) => (
//         <ImageHover 
//           key={index}
//           imageSrc={image.src}
//           altText={image.alt}
//           name={image.name}
//           position={image.position}
//           zoom={image.zoom}
//         />
//       ))}
//     </div>
//   );
// }

// export default ImageGallery;


// ImageGallery.js
import React, { useState } from 'react';

function ImageHover({ imageSrc, altText, position = '50% 20%', zoom = 1, name, onClick, darkMode, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative h-[500px] bg-white ${
        darkMode ? 'bg-opacity-10' : 'bg-opacity-20'
      } border border-[#ffffff]/30 overflow-hidden mx-1 transition-all duration-300 ${
        isHovered || isSelected ? 'w-[120px]' : 'w-[100px]'
      } ${isSelected ? 'ring-2 ring-white' : ''}`}
      style={{
        borderTopLeftRadius: '50px',
        borderBottomRightRadius: '50px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Black overlay (visible when not hovered/selected) */}
      <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${
        isHovered || isSelected ? 'opacity-0' : darkMode ? 'opacity-30 bg-black' : 'opacity-20 bg-black'
      }`} />
      
      <img 
        src={imageSrc} 
        alt={altText} 
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        style={{ 
          objectPosition: position,
          transform: `scale(${zoom})`,
          borderTopLeftRadius: '50px',
          borderBottomRightRadius: '50px'
        }}
      />

      {/* Name overlay - appears on hover/selection */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 p-2 text-left text-white  ${
        darkMode ? 'bg-black/50' : 'bg-black/40'
      } transition-opacity duration-300 ${
        isHovered || isSelected ? 'opacity-100' : 'opacity-0'
      }`}>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
}

function ImageGallery({ onSelect, darkMode, selectedMember }) {
  const teamMembers = [
    { 
      id: 1,
      src: require("../assets/Anime_Daniela.png"), 
      alt: "Daniela",
      name: "DANIELA ROMANA CASTAÑEDA",
      nn: "DANIELA",
      github: "",
      facebook:"",
      email:"",
      title: "UI/UX Designer",
      skills: [
       "LANGUAGE: JS, Java, Python, C++, PHP",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: React",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      position: '48% 20%',
      zoom: 1.4
    },
    { 
      id: 2,
      src: require("../assets/Anime_Loel.png"), 
      alt: "Loel",
      name: "LOEL CAMPAÑA",
      nn: "LOEL",
      github: "https://github.com/Naksu14",
      facebook:"https://www.facebook.com/loelcamp14",
      email:"mailto:ic.loel.campana@cvsu.edu.ph",
      title: "Project Manager, Frontend Developer, Designer",
      skills: [
        "LANGUAGE: JS, Java, Python, C++, PHP",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: React",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
      ],
      position: '50% 20%',
      zoom: 1.4
    },
    { 
        id: 3,
        src: require("../assets/Anime_Lance.png"), 
        alt: "lance",
        name: "LANCE LISTANA",
        nn: "LANCE",
        github: "",
        facebook:"",
        email:"",
        title: "Project Manager, Frontend Developer",
        skills: [
          "LANGUAGE: JS, Java, Python, C++, PHP",
        "FRONTEND: CSS, HTML",
        "FRAMEWORK: React",
        "DATABASE: MYSQL",
        "DEVOPS: GIT",
        "WIREFRAME: FIGMA"
        ],
        position: '15% 10%',
        zoom: 1.0
      },
      { 
        id: 4,
        src: require("../assets/Anime_Rhanel.png"), 
        alt: "Rhanel",
        nn: "RHANEL",
        github: "",
        facebook:"",
        email:"",
        name: "RHANEL SEIGHMONE BUCLARES",
        title: "Project Manager, Frontend Developer",
        skills: [
          "LANGUAGE: JS, Java, Python, C++, PHP",
            "FRONTEND: CSS, HTML",
            "DATABASE: MYSQL",
            "WIREFRAME: FIGMA"
        ],
        position: '45% 20%',
        zoom: 1.0
      },
      { 
        id: 5,
        src: require("../assets/Anime_Fred.png"), 
        alt: "Fred",
        nn: "FREDDRICK",
        name: "FREDDRICK TROPICO",
        github: "",
        facebook:"",
        email:"",
        title: "Project Manager, Frontend Developer",
        skills: [
          "LANGUAGE: Python, C++, PHP",
            "FRONTEND: CSS, HTML",
            "FRAMEWORK: React",
            "DATABASE: MYSQL",
            "DEVOPS: GIT",
            "WIREFRAME: FIGMA"
        ],
        position: '30% 20%',
        zoom: 1.0
      },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {teamMembers.map((member) => (
        <ImageHover 
          key={member.id}
          imageSrc={member.src}
          altText={member.alt}
          name={member.nn}
          position={member.position}
          zoom={member.zoom}
          onClick={() => onSelect(member)}
          darkMode={darkMode}
          isSelected={selectedMember?.id === member.id}
        />
      ))}
    </div>
  );
}

export default ImageGallery;