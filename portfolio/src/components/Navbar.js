import { useState, useEffect } from "react";
import { Moon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/logo.svg";
import clsx from "clsx";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("HOME");

  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
    if (darkMode) {
      document.body.style.backgroundColor = "#646464";
      document.body.classList.add("dark");
    } else {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
  className={clsx(
    "fixed top-0 left-0 right-0 z-50 mx-8 mt-6 flex items-center justify-between px-8 py-4 rounded-b-[3rem] text-white"
  )}
  style={{
    borderTopLeftRadius: "2rem",
    borderTopRightRadius: "2rem",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    backgroundColor: "rgba(252, 126, 19, 0.6)",
  }}
>
      <div className="flex items-center gap-8">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
      <div className="relative flex gap-16">
      {["HOME", "ABOUT US", "TEAM MEMBERS", "PROJECTS", "CONTACT"].map((tab) => (
  <div key={tab} className="relative flex items-center transition-all duration-300  ease-in-out">
    
    {/* FULL WIDTH WHITE BACKGROUND TO COVER CURVES */}
    {activeTab === tab && (
      <div
        className="absolute -top-4 left-[-1.5rem] w-[calc(100%+3rem)] h-6 z-0 transition-all duration-300  ease-in-out"
        style={{
          backgroundColor: darkMode ? "#646464" : "#FFFFFF",
        }}
      ></div>
    )}

    {/* LEFT CURVED DIV */}
    {activeTab === tab && (
      <div
        className="absolute -top-4 -left-6 w-6 h-6 z-10 rounded-tr-[5rem] "
        style={{
            backgroundColor: "rgba(252, 126, 19, 0.6)",
        }}
      ></div>
    )}

    {/* MAIN BUTTON (ON TOP OF CURVES) */}
    <button
      onClick={() => setActiveTab(tab)}
      className={clsx(
        "relative z-15 font-semibold px-6 py-3 transition-all duration-200  ease-in-out",
        activeTab === tab
          ? darkMode
            ? "text-white bg-[#646464] rounded-b-3xl"
            : "text-orange-500 bg-white rounded-b-3xl"
          : darkMode
          ? "text-white hover:text-orange-300"
          : "text-orange hover:text-orange-500"
      )}
    >
      {tab}
    </button>

    {/* RIGHT CURVED DIV */}
    {activeTab === tab && (
      <div
        className="absolute -top-4 -right-6 w-6 h-6 z-10 rounded-tl-[5rem] "
        style={{
            backgroundColor: "rgba(252, 126, 19, 0.6)",
        }}
      ></div>
    )}
  </div>
))}




      </div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ) : (
          <Moon className="w-6 h-6" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;