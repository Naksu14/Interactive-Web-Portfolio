// import React, { useEffect, useState } from 'react';

// const GroupsBackground = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Use effect hook to monitor changes in sessionStorage
//   useEffect(() => {
//     // Define a function to retrieve the selected member from sessionStorage
//     const updateMemberFromSessionStorage = () => {
//       const storedMember = sessionStorage.getItem('selectedMember');
//       if (storedMember) {
//         const member = JSON.parse(storedMember);
//         setSelectedMember(member);
//       } else {
//         console.log("No member selected");
//       }
//     };

//     // Initial update when the component mounts
//     updateMemberFromSessionStorage();

//     // Listen to the 'storage' event to update when sessionStorage changes
//     window.addEventListener('storage', updateMemberFromSessionStorage);

//     // Cleanup the event listener on unmount
//     return () => {
//       window.removeEventListener('storage', updateMemberFromSessionStorage);
//     };
//   }, []);

//   // If no selected member, return a default background
//   if (!selectedMember) {
//     return (
//       <div className="fixed inset-0 -z-10">
//         {/* Default Background Image when no member is selected */}
//         <div className="absolute inset-0 bg-cover bg-center animate-slide-up"
//              style={{ backgroundImage: `url(${require("../assets/Anime_Loel.png")})` }}>
//         </div>
//         <div className="absolute inset-0 backdrop-blur-lg"></div>
//       </div>
//     );
//   }

//   // Define background images for each member
//   const backgroundImages = {
//     1: require("../assets/Anime_Daniela.png"),
//     2: require("../assets/Anime_Loel.png"),
//     3: require("../assets/Anime_Lance.png"),
//     4: require("../assets/Anime_Fred.png"),
//     5: require("../assets/Anime_Rhanel.png")
//   };

//   // Check if selectedMember.id exists and use it to get the appropriate background image
//   const memberKey = selectedMember.id || 2; // Fallback to "LOEL" if no id is found
//   const backgroundImage = backgroundImages[memberKey] || backgroundImages[2]; // Default to "LOEL"

//   return (
//     <div className="fixed inset-0 -z-10">
//       {/* Background Image - dynamically changes based on selected member */}
//       <div
//         className="absolute inset-0 bg-cover bg-center animate-slide-up"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//       </div>

//       {/* Blur Layer */}
//       <div className="absolute inset-0 backdrop-blur-lg"></div>
//     </div>
//   );
// };

// export default GroupsBackground;

import React, { useEffect, useState } from 'react';

const GroupsBackground = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to update the selected member from sessionStorage
  const updateMemberFromSessionStorage = () => {
    const storedMember = sessionStorage.getItem('selectedMember');
    if (storedMember) {
      const member = JSON.parse(storedMember);
      setSelectedMember(member);
    } else {
      console.log("No member selected");
    }
  };

  useEffect(() => {
    // Initial update when the component mounts
    updateMemberFromSessionStorage();

    // Poll for changes in sessionStorage every 500ms
    const interval = setInterval(updateMemberFromSessionStorage, 100);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  // If no selected member, return a default background
  if (!selectedMember) {
    return (
      <div className="fixed inset-0 -z-10">
        {/* Default Background Image when no member is selected */}
        <div className="absolute inset-0 bg-cover bg-center animate-slide-up"
             style={{ backgroundImage: `url(${require("../assets/Anime_Loel.png")})` }}>
        </div>
        <div className="absolute inset-0 backdrop-blur-lg"></div>
      </div>
    );
  }

  // Define background images for each member
  const backgroundImages = {
    1: require("../assets/Anime_Daniela.png"),
    2: require("../assets/Anime_Loel.png"),
    3: require("../assets/Anime_Lance.png"),
    4: require("../assets/Anime_Rhanel.png"),
    5: require("../assets/Anime_Fred.png")
  };

  // Check if selectedMember.id exists and use it to get the appropriate background image
  const memberKey = selectedMember.id || 2; // Fallback to "LOEL" if no id is found
  const backgroundImage = backgroundImages[memberKey] || backgroundImages[2]; // Default to "LOEL"

  return (
    <div className="fixed inset-0 -z-10">
      {/* Background Image - dynamically changes based on selected member */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slide-up"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      </div>

      {/* Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-lg"></div>
    </div>
  );
};

export default GroupsBackground;

