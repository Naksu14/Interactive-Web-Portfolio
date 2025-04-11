import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Projectsimage = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 flex items-center justify-between">
      <p className="text-lg font-medium mx-auto px-8">Team Projects</p>
      <button
        className="w-10 h-10 rounded-full bg-white/40 shadow-md flex items-center justify-center hover:bg-gray-200 transition"
        aria-label="Next"
        onClick={() => navigate("/projects")} // Better for SPA routing
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Projectsimage;
