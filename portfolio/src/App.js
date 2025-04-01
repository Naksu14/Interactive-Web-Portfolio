import './App.css';
import Homepage from './pages/Homepage';
import CustomCursor from "./components/CustomCursor"; // Import Custom Cursor

function App() {
  return (
    <div className="App">
      <CustomCursor /> {/* Include Custom Cursor */}
      <Homepage />
     
    </div>
  );
};

export default App;
