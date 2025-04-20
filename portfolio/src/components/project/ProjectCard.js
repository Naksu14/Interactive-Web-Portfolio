import React from "react";

const ProjectBlock = ({
  darkMode,
  title,
  description,
  features,
  image,
  techStack,
  agenda,
  reverse = false,
}) => {
  const textColor = darkMode ? "text-[#ffffff]" : "text-[#59453F]";
  const dropShadow = darkMode
    ? "drop-shadow-[0_0_40px_white]"
    : "drop-shadow-[0_0_10px_white]";

  return (
    <div
      className={`mt-5 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-3 gap-4 px-4 md:px-8 lg:px-16`}
    >
      {/* Image + Title */}
      <div
        className={`${
            reverse ? "order-1 lg:order-2" : "order-1"
        } col-span-1 md:col-span-2 lg:col-span-3 row-span-3`}
        >
        <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-[#18161F] rounded-lg p-4 border-t border-white border-b border-gray-400">
          <div className="w-full h-full relative rounded-lg p-4 bg-gradient-to-b from-[#FB6E6E] to-[#F1B4B4]">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest mb-4 text-[#FEF2F2]">
              <span className="block">{agenda}</span>
            </div>
            <img
              src={require(`../../assets/projectsImages/${image}`)}
              alt={title}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-auto max-w-[90%] h-auto object-contain ${dropShadow}`}
            />
          </div>
        </div>
      </div>

      {/* Description + Tech */}
      <div
        className={`${
            reverse ? "order-2 lg:order-1" : "order-2"
        } col-span-1 md:col-span-2 lg:col-span-2 row-span-3 text-white p-4 sm:p-6 text-left`}
        >

        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor}`}>
          {title}
        </h1>
        <br />
        <p className={`text-sm md:text-base ${textColor}`}>
          
          
          {description}
        </p>
        <br />
        <ul className={`list-disc px-5 md:px-10 text-sm md:text-base ${textColor}`}>
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
        <br />
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-[#59453F] rounded-xl px-3 py-2 flex flex-row items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <img
                src={require(`../../assets/iconProject/${tech.icon}`)}
                alt={`${tech.name} Logo`}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <p className="font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
