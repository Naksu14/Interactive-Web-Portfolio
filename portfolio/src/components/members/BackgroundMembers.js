import React, { useEffect, useState } from 'react';

const GroupsBackground = () => {
  const defaultMember = { id: 2, name: "Loel" };
  const [selectedMember, setSelectedMember] = useState(defaultMember);

  const updateMemberFromSessionStorage = () => {
    const storedMember = sessionStorage.getItem('selectedMember');
    if (storedMember) {
      const member = JSON.parse(storedMember);
      // Always setSelectedMember, even if the same ID
      setSelectedMember(prev => {
        // If same ID, return a new object to force re-render
        if (prev?.id === member?.id) {
          return { ...member };
        }
        return member;
      });
    } else {
      // Fallback to default (Loel)
      setSelectedMember({ ...defaultMember });
    }
  };
  

  useEffect(() => {
    updateMemberFromSessionStorage(); // Only update if session already has something
  
    const interval = setInterval(updateMemberFromSessionStorage, 100);
    return () => clearInterval(interval);
  }, []);
  

  const backgroundImages = {
    1: require("../../assets/Anime_Members/Anime_Daniela.png"),
    2: require("../../assets/Anime_Members/Anime_Loel.png"),
    3: require("../../assets/Anime_Members/Anime_Lance.png"),
    4: require("../../assets/Anime_Members/Anime_Rhanel.png"),
    5: require("../../assets/Anime_Members/Anime_Fred.png")
  };

  const memberKey = selectedMember?.id || 2;
  const backgroundImage = backgroundImages[memberKey] || backgroundImages[2];

  return (
    <div className="fixed inset-0 -z-10">
      <div
        key={memberKey}
        className="absolute inset-20 bg-cover bg-center animate-slide-up"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute inset-0 backdrop-blur-lg"></div>
    </div>
  );
};

export default GroupsBackground;



