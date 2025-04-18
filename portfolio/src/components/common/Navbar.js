import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";  // Import Sun icon
import clsx from "clsx";
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const Navbar = ({ setDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Get the current location (URL)
  const location = useLocation();

  // Set active tab based on current URL
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "HOME";
    if (path === "/about") return "ABOUT US";
    if (path === "/team") return "TEAM MEMBERS";
    if (path === "/projects") return "PROJECTS";
    if (path === "/contact") return "CONTACT";
    return "HOME"; // Default
  };

  // Track active tab state based on URL changes
  const [activeTab, setActiveTab] = useState(getActiveTab());

  // Update activeTab when the URL changes
  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location]);

  useEffect(() => {
    document.body.style.transition = "background-color 0.3s ease-in-out, color 0.3s ease-in-out";
    document.body.style.backgroundColor = darkMode ? "#646464" : "#FFFFFF";
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav 
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 mx-8 mt-6 flex items-center justify-between px-8 py-4 rounded-t-[2rem] text-[#59453F]",
        darkMode ? "bg-[#D74925]/60" : "bg-[#f0b6a2]/60"
      )}
    >
      
      {/* Logo */}
      <div className="flex items-center gap-8">
        <img 
          src={darkMode ? require("../../assets/commonIcons/logo_white.png") : require("../../assets/commonIcons/brown-logo.png")} 
          alt="Logo" 
          className="w-12 h-12" 
        />
      </div>

      {/* Mobile Menu Button & Dark Mode Toggle */}
      <div className="flex lg:hidden items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Sun className="w-6 h-6  text-white" />  // Sun icon for dark mode
          ) : (
            <Moon className="w-6 h-6" />  // Moon icon for light mode
          )}
        </button>
        <button
          className={`text-${darkMode ? 'white' : 'brown-600'}`} // Adjust button text color based on dark mode
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={30} className={darkMode ? 'text-white' : 'text-[#59453F]'} /> // Adjust X icon color
          ) : (
            <Menu size={30} className={darkMode ? 'text-white' : 'text-[#59453F]'} /> // Adjust Menu icon color
          )}
        </button>
      </div>

      
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-9 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Navigation Links (Desktop & Mobile) */}
      <div
        className={clsx(
          "lg:flex gap-16 transition-all duration-300 ease-in-out z-10",
          menuOpen
            ? clsx(
                "flex flex-col absolute top-20 left-0 right-0 p-6",
                darkMode ? "bg-[#D74925]/80" : "bg-[#f0b6a2]/80"
              )
            : "hidden lg:flex"
        )}
      >
        {[ 
          { tab: "HOME", path: "/" },
          { tab: "ABOUT US", path: "/about" },
          { tab: "TEAM MEMBERS", path: "/team" },
          { tab: "PROJECTS", path: "/projects" },
          { tab: "CONTACT", path: "/contact" }
        ].map(({ tab, path }) => (
          <div key={tab} className="relative flex items-center transition-all duration-300 ease-in-out">
            
            {/* FULL WIDTH BACKGROUND (COVER CURVES) */}
            {activeTab === tab && (
              <div className="absolute -top-4 left-[-1.5rem] w-[calc(100%+3rem)] h-6 z-0 transition-all duration-300 ease-in-out backdrop-blur-md"
                style={{ backgroundColor: darkMode ? "#646464" : "#FFFFFF" }} />
            )}

            {/* LEFT CURVED DIV */}
            {activeTab === tab && (
              <div
                className="absolute -top-4 -left-6 w-6 h-6 z-10 rounded-tr-[5rem]"
                style={{
                  backgroundColor: darkMode
                    ? "rgba(215, 73, 37, 0.6)"
                    : "rgba(240, 182, 162, 0.6)",
                }}
              />
            )}

            {/* MAIN LINK */}
            <Link
              to={path}
              onClick={() => { setActiveTab(tab); setMenuOpen(false); }}
              className={clsx(
                "relative z-15 font-bold px-6 py-3 transition-all duration-200 ease-in-out",
                activeTab === tab
                  ? darkMode
                    ? "text-white bg-[#646464] rounded-b-3xl"
                    : "text-[#59453F] bg-white rounded-b-3xl"
                  : darkMode
                  ? "text-white hover:text-white"
                  : "text-[#59453F] hover:text-[#59453F]"
              )}
            >
              {tab}
            </Link>

            {/* RIGHT CURVED DIV */}
            {activeTab === tab && (
              <div className="absolute -top-4 -right-6 w-6 h-6 z-10 rounded-tl-[5rem]"
              style={{
                backgroundColor: darkMode
                ? "rgba(215, 73, 37, 0.6)"
                : "rgba(240, 182, 162, 0.6)",
              }} />
            )}
          </div>
        ))}
      </div>

      {/* Dark Mode Toggle (Desktop Only) */}
      <button onClick={() => setDarkMode(!darkMode)} className="hidden lg:block">
        {darkMode ? (
          <Sun className="w-6 h-6 text-white" />  // Sun icon for dark mode
        ) : (
          <Moon className="w-6 h-6" />  // Moon icon for light mode
        )}
      </button>
    </nav>
  );
};

export default Navbar;

