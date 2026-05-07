import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Housekeeping from "./pages/Housekeeping";
import Pantry from "./pages/Pantry";
import Enquiry from "./pages/Enquiry";
import About from "./pages/About";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* Navigation Bar */}
        <Navbar />
        
        {/* Sticky WhatsApp/Call Buttons */}
        <FloatingButtons />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-[72px]"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* NOTE: Yahan se purana footer hta diya gaya hai. 
          Ab sirf Home.jsx wala premium dark footer hi dikhega.
        */}
      </div>
    </Router>
  );
}

export default App;