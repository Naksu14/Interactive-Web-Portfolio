import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const members = [
  {
    name: "LOEL CAMPAÑA",
    image: require("../assets/Anime_Members/Anime_Loel.png"),
    link: "/team"
  },
  {
    name: "DANIELA ROMANA CASTAÑEDA",
    image: require("../assets/Anime_Members/Anime_Daniela.png"),
    link: "/team"
  },
  {
    name: "LANCE LISTANA",
    image: require("../assets/Anime_Members/Anime_Lance.png"),
    link: "/team"
  },
  {
    name: "RHANEL BUCLARES",
    image: require("../assets/Anime_Members/Anime_Rhanel.png"),
    link: "/team"
  },
  {
    name: "FREDDRICK TROPICO",
    image: require("../assets/Anime_Members/Anime_Fred.png"),
    link: "/team"
  },
];

const CarouselCard = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
  };

  const current = members[index];

  return (
    <div className={`md:row-span-1 bg-white bg-opacity-30 border border-[#ffffff]/20 p-10 rounded-[15px] tracking-wide backdrop-blur-lg flex flex-col justify-center items-center p-4 rounded-xl relative`}>
      
      {/* Image */}
      <img className="w-[200px] h-[200px] mb-2" src={current.image} alt="Member" />

      {/* Content */}
      <div className="mt-6 flex items-center justify-between w-full px-4">
        <button
          className="w-10 h-10 rounded-full bg-white/40 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
          onClick={prev}
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>

        <p className="text-md font-medium text-center">{current.name}</p>

        <button
          className="w-10 h-10 rounded-full bg-white/40 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
          onClick={next}
          aria-label="Next"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Navigate Button */}
      <button
        className="mt-4 text-sm hover:text-blue-800 transition"
        onClick={() => navigate(current.link)}
      >
        <p className="text-md font-bold mx-auto px-8 hover:text-[#ececec]">Check Us Out</p>
      </button>
    </div>
  );
};

export default CarouselCard;
