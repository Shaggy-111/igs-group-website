import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Housekeeping from "./pages/Housekeeping";
import Stationery from "./pages/Stationery";
import ComputerAccessories from "./pages/ComputerAccessories";
import Industries from "./pages/Industries";
import Enquiry from "./pages/Enquiry";

function App() {
  // Safe location to initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        {/* Navigation Bar */}
        <Navbar />

        {/* Floating WhatsApp and Call Buttons */}
        <FloatingButtons />

        {/* Main Content */}
        <main className="flex-grow pt-[72px]">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Product Pages */}
            <Route path="/housekeeping" element={<Housekeeping />} />
            <Route path="/stationery" element={<Stationery />} />
            <Route
              path="/computer-accessories"
              element={<ComputerAccessories />}
            />

            {/* Other Pages */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;