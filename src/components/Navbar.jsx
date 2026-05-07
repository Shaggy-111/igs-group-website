import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Housekeeping", path: "/housekeeping" },
    { name: "Pantry & Stationery", path: "/pantry" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "bg-white/95 shadow-sm py-4" : "bg-white py-6"
    } border-b border-slate-100 px-6 lg:px-16 backdrop-blur-md`}>
      
      {/* Container removed max-w to match SS1 edge-to-edge feel */}
      <div className="w-full flex justify-between items-center">
        
        {/* --- BRANDING (Large like SS1) --- */}
        <Link to="/" className="flex flex-col items-start group shrink-0">
          <div className="flex gap-2 mb-2">
            <div className="w-12 h-[5px] bg-[#FF9933] rounded-full"></div>
            <div className="w-12 h-[5px] bg-slate-300 rounded-full"></div>
            <div className="w-12 h-[5px] bg-[#138808] rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-none">
              IGS <span className="text-blue-600">GROUP</span>
            </h1>
            <p className="text-[10px] md:text-[12px] text-slate-500 font-black uppercase tracking-[0.4em] mt-2">
              Indian Global Sourcing Group
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="h-[1px] w-4 bg-blue-600"></span>
              <p className="text-[10px] text-blue-600 font-black italic uppercase tracking-widest">
                To Meet Local Needs
              </p>
            </div>
          </div>
        </Link>

        {/* --- DESKTOP MENU (Right Aligned like SS1) --- */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10 font-black text-[12px] uppercase tracking-widest text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-all border-b-2 pb-1 ${
                  isActive(link.path) 
                    ? "text-blue-600 border-blue-600" 
                    : "border-transparent hover:text-blue-600 hover:border-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>

          <Link 
            to="/enquiry" 
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black text-[12px] uppercase tracking-widest hover:bg-slate-950 transition-all shadow-xl shadow-blue-200 flex items-center gap-2"
          >
            GET QUOTATION <ArrowRight size={16} />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 flex flex-col gap-6 lg:hidden shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-black text-base uppercase tracking-widest ${isActive(link.path) ? "text-blue-600" : "text-slate-600"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/enquiry" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white text-center py-5 rounded-xl font-black text-sm uppercase tracking-widest">
            GET QUOTATION
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;