import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import TeamMembers from './pages/TeamMembers';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/common/Navbar';
import CustomCursor from "./components/common/CustomCursor";
import Chatbot from "./components/chatbot/Chatbot"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className="App">
        {/* Navigation bar */}
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />

        <CustomCursor /> {/* Include Custom Cursor */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homepage darkMode={darkMode} />} />
          <Route path="/about" element={<AboutUs darkMode={darkMode} />} />
          <Route path="/team" element={<TeamMembers darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>

        {/* <Chatbot />  remove mo ung ocmment tag*/} 
        <Chatbot darkMode={darkMode}/> 
      </div>
    </Router>
  );
}

export default App;