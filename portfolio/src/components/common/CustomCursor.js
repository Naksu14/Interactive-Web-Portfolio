import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      const newTile = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setTiles((prevTiles) => [...prevTiles, newTile]);

      // Remove the tile after animation
      setTimeout(() => {
        setTiles((prevTiles) => prevTiles.filter((tile) => tile.id !== newTile.id));
      }, 500);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-50">
      {tiles.map((tile) => (
        <div
          key={tile.id}
          className="absolute w-4 h-4 bg-[#f0b6a2]/60 border border-white-100 opacity-80 animate-tile-fade"
          style={{
            left: `${tile.x}px`,
            top: `${tile.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
