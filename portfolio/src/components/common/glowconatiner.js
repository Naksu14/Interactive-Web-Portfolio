import React, { useRef, useState, useEffect } from 'react';

const ContainerBg = `
  relative overflow-hidden
  bg-white bg-opacity-20 border border-white/20
  p-10 rounded-[15px] tracking-wide backdrop-blur-lg
`;

function GlowingContainer({ children }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Optional: Reset position when hover ends
  useEffect(() => {
    if (!isHovered) {
      setPosition({ x: -100, y: -100 }); // Reset position when mouse leaves
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className={ContainerBg}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      {/* Neon Glow Follower */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 delay-50"
        style={{
          background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, rgba(255, 81, 0, 0.3), transparent 70%)`,
          opacity: isHovered ? 1 : 0, // Fade effect based on hover state
          zIndex: 0
        }}
      />
      
      {/* Actual content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlowingContainer;
