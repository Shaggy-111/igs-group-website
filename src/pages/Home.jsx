import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  // Navigation & UI
  Link as RouterLink, ArrowRight, ChevronRight, CheckCircle2, 
  
  // Features & Icons
  Package, ShieldCheck, Users, Globe, Award, Sparkles, 
  Monitor, Coffee, PenTool, Truck, Zap, Star,
  
  // Industries
  Building2, Factory, Hotel, ShoppingBag, Landmark, GraduationCap,
  
  // Tech & Contact
  Mouse, HardDrive, Smartphone, MapPin, Mail, Phone, Send,
  
  // Added for "Why Choose Us" section
  HeartHandshake, Headphones 
} from "lucide-react";

import FloatingButtons from "../components/FloatingButtons";


const slides = [
  {
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070", // Modern Office/Stationery vibe
    title: "Trusted by Professionals",
    subtitle: "One Stop Solution - 10000+ Products supplies to fulfill all your Office needs - Stationery Items",
    badge: "Professional Stationery Products Supplier Since 2024"
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070", // Cleaning products vibe
    title: "#1 Wholesale Supplier",
    subtitle: "for Corporate Offices & all Other Industries in Noida Delhi NCR Professional Cleaning Products",
    badge: "Professional Cleaning Products Supplier Since 2024"
  }
];


const industries = [
  { 
    name: "Hospitals", 
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Priority Sanitization" 
  },
  { 
    name: "Hotels", 
    image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Premium Experience" 
  },
  { 
    name: "Residential", 
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Society Maintenance" 
  },
  { 
    name: "Factories", 
    image: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Industrial Grade" 
  },
  { 
    name: "Corporate", 
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Office Hygiene" 
  },
  { 
    name: "Institutes", 
    image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Student Safety" 
  },
  { 
    name: "Banks", 
    image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Secure Cleaning" 
  },
  { 
    name: "Malls", 
    image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=500", 
    desc: "Public Spaces" 
  },
];

const Home = () => {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Redirecting to WhatsApp...");
  };

  // Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []); // slides static hai toh [] chalega

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="w-full font-sans bg-white text-slate-900 overflow-x-hidden">
      <FloatingButtons />

      {/* --- BLOCK 1: NAVIGATION --- */}
      

      {/* --- BLOCK 2: HERO SLIDER (PEROTO STYLE) --- */}
      <section className="relative h-[85vh] w-full overflow-hidden mt-[80px] bg-[#001e3d]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Background with Professional Images */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms]"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              {/* Strong Left Gradient for extreme left alignment readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001e3d] via-[#001e3d]/70 to-transparent"></div>
            </div>

            {/* Content Container - Shifted further left with px-4 lg:px-12 */}
            <div className="relative h-full w-full flex items-center px-6 lg:px-16">
              <div className="w-full">

                {/* Left Side: Text Content - No grid restriction for more left space */}
                <div className="text-white space-y-6 z-10 max-w-4xl">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight uppercase">
                      IGS <span className="font-black text-blue-400">GROUP</span>™
                    </h2>
                  </div>

                  <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-slate-200 font-bold max-w-xl leading-relaxed italic border-l-4 border-blue-500 pl-6">
                    {slide.subtitle}
                  </p>

                  {/* Certifications (MSME, ISO, Google style) */}
                  <div className="flex flex-wrap gap-8 pt-8 items-center">
                    <div className="flex flex-col">
                      <span className="text-3xl font-black">ISO</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold">9001:2015 Certified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black">MSME</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold">Registered Firm</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-black text-yellow-500">★★★★★</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">Google Rated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- FEATURE BAR (Niche Wale White Buttons) --- */}
      <div className="relative -mt-10 z-30 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { title: "Free Delivery", icon: <Truck /> },
            { title: "Large Variety", icon: <Package /> },
            { title: "Wholesale Price", icon: <Zap /> },
            { title: "Discount Deals", icon: <Sparkles /> },
            { title: "Premium Quality", icon: <Award /> },
            { title: "Easy Returns", icon: <CheckCircle2 /> },
          ].map((feat, i) => (
            <div key={i} className="bg-white shadow-2xl rounded-full py-5 px-6 flex items-center justify-center gap-3 border border-slate-100 hover:bg-blue-600 group transition-all cursor-pointer">
              <div className="text-blue-600 group-hover:text-white transition-colors">
                {React.cloneElement(feat.icon, { size: 20 })}
              </div>
              <span className="text-[10px] font-black uppercase text-slate-800 group-hover:text-white tracking-widest whitespace-nowrap">
                {feat.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- BLOCK 2.5: WELCOME / INTRO SECTION (EXTENDED RIGHT) --- */}
      <section className="py-24 px-6 lg:px-20 bg-white w-full">
        <div className="max-w-[100%] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left Side: Images (Peroto Aligned) */}
          <div className="w-full lg:w-[40%] relative shrink-0">
            <div className="relative z-10 w-[90%]">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80"
                alt="Cleaning Supplies"
                className="w-full h-auto rounded-[3rem] shadow-2xl"
              />
            </div>

            {/* Stationery Overlay */}
            <div className="absolute -bottom-10 -right-4 z-20 w-[65%] border-[12px] border-white rounded-[2.5rem] shadow-2xl overflow-hidden hidden xl:block">
              <img
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80"
                alt="Office Stationery"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Right Side: Content (Extended to Right) */}
          <div className="flex-1 w-full flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-3">
              <div className="bg-green-500 p-2 rounded-full text-white shadow-lg shadow-green-100">
                <Sparkles size={14} fill="currentColor" />
              </div>
              <span className="text-[11px] font-black text-blue-900 uppercase tracking-[0.2em]">
                About IGS Group Office Supply Products
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight w-full">
              Housekeeping Material <br />
              <span className="text-blue-600">Supplier In Noida & NCR</span>
            </h2>

            <div className="space-y-6 w-full">
              <p className="text-xl text-slate-600 font-medium leading-relaxed w-full">
                Welcome to <span className="font-black text-slate-900">IGS</span>, your trusted partner in creating immaculate and efficient workplaces.
                With a strong commitment to quality and service, we specialize in offering an extensive range of housekeeping materials—including
                cleaning chemicals, tissue products, and safety items—alongside a complete portfolio of corporate stationery.
              </p>
              <p className="text-lg text-slate-500 font-medium leading-relaxed w-full">
                Serving corporate offices, industries, and commercial spaces, we ensure that your premises remain hygienic and your employees
                have the necessary tools to perform at their best. Our focus remains on providing quality supplies that are safe and easy to use.
              </p>
            </div>

            {/* Features Grid - Full Width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-16 w-full pt-4 border-t border-slate-100">
              {[
                "Best quality products",
                "24*7 support",
                "Quick delivery",
                "Trusted by professionals"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="bg-green-500 rounded-lg p-1 text-white group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-800 text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 w-full">
              <Link
                to="/about"
                className="inline-flex items-center gap-5 bg-[#001e3d] text-white px-14 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.25em] hover:bg-blue-600 transition-all shadow-2xl hover:shadow-blue-200 hover:-translate-y-1 active:scale-95 group"
              >
                Continue Reading
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* --- BLOCK 3: WHAT DO WE SUPPLY? (FULL SCREEN WIDTH) --- */}
      <section className="py-24 px-4 md:px-10 lg:px-16 bg-slate-50 border-y border-slate-200 w-full">
        <div className="max-w-[100%] mx-auto"> {/* Max width removed to fit screen */}
          <div className="flex flex-col items-start mb-16 ml-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-500 p-1.5 rounded-full text-white">
                <Sparkles size={12} fill="currentColor" />
              </div>
              <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">Products We Deal In</span>
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter">What Do We Supply?</h3>
          </div>

          {/* Grid updated to gap-4 for tighter fit on large screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              {
                title: "HouseKeeping Materials",
                img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
                desc: "Elevate the charm and grace of your workspace with our premium items, crafted to match your refined taste and simplify your daily tasks."
              },
              {
                title: "Office Stationery",
                img: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80",
                desc: "Discover premium stationery essentials from IGS Group, crafted for exceptional performance and unmatched quality in every professional setting."
              },
              {
                title: "Pantry Items",
                img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80",
                desc: "Our store offers a comprehensive selection of pantry essentials, each carefully chosen for superior quality and exceptional flavor to energize your team."
              },
              {
                title: "Computer Accessories",
                img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
                desc: "Enhance productivity with our high-end IT peripherals, premium keyboards, mice, and essential hardware tailored for modern corporate infrastructure."
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                {/* Image Section - Increased height for full look */}
                <div className="h-72 overflow-hidden bg-slate-50">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={item.title}
                  />
                </div>

                {/* Content Section - Aligned Left for Pro Look */}
                <div className="p-8 flex flex-col flex-grow items-start text-left">
                  <h4 className="text-2xl font-black mb-4 text-blue-900 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm mb-8">
                    {item.desc}
                  </p>

                  {/* Button - Full Width like Peroto */}
                  <div className="mt-auto w-full">
                    <Link to="/products" className="inline-flex items-center justify-center gap-3 w-full bg-[#001e3d] text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] group-hover:bg-blue-600 transition-all">
                      SEE MORE PRODUCTS <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BLOCK 4: INDUSTRIES WE SERVE (INFINITE SCROLL) --- */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="px-6 lg:px-20 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 w-10 h-[2px]"></div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Industries We Serve</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
              Housekeeping Solutions For All sectors
            </h3>
          </div>
          <Link to="/industries" className="bg-[#001e3d] text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center gap-2 shrink-0">
            VIEW ALL <ArrowRight size={14} />
          </Link>
        </div>

        {/* Scroll Container */}
        <div className="relative flex overflow-hidden group">
          {/* First Set + Second Set for Seamless loop */}
          <div className="flex animate-infinite-scroll gap-6">
            {[...industries, ...industries].map((ind, i) => (
              <div
                key={i}
                className="w-[300px] shrink-0 group/card relative rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                {/* Image Layer */}
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay - Blue Bottom like reference */}
                <div className="absolute bottom-0 w-full bg-[#001e3d] p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-black uppercase tracking-tighter text-lg">{ind.name}</h4>
                    <div className="text-blue-400 group-hover/card:translate-x-2 transition-transform">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                  <p className="text-slate-400 text-[10px] font-bold mt-1 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* --- BLOCK 5 & 6: CTA & ENQUIRY SECTION (PREMIUM GLASS-OVERLAY STYLE) --- */}
<section className="relative py-32 px-4 md:px-10 lg:px-16 w-full overflow-hidden">
  
  {/* Background Layer: Image with Professional Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
      className="w-full h-full object-cover"
      alt="Office Background"
    />
    {/* Gradient Overlay for depth and text contrast */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-900/90 backdrop-blur-[2px]"></div>
  </div>

  <div className="relative z-10 max-w-[1400px] mx-auto text-left mb-16 px-4">
    <div className="inline-flex items-center gap-2 mb-4 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full backdrop-blur-md">
       <Sparkles size={14} className="text-blue-400" />
       <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px]">Premium Procurement Partner</span>
    </div>
    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
      Got Your Hands On <span className="text-blue-500">Best Quality</span> <br />
      Housekeeping & IT Supplies At Lowest Price
    </h3>
  </div>

  {/* Main Glassmorphism Card Container */}
  <div className="relative z-10 max-w-[1300px] mx-auto bg-slate-950/40 backdrop-blur-xl rounded-[3.5rem] shadow-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row">
    
    {/* LEFT SIDE: Content & Call to Action */}
    <div className="lg:w-[40%] p-10 lg:p-16 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-white/5">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
            <Phone size={18} fill="currentColor" />
          </div>
          <span className="text-white font-black text-xs uppercase tracking-[0.3em]">Direct Support</span>
        </div>

        <h4 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">
          Still Confused? <br />
          <span className="text-blue-500 italic">Let Us Help You.</span>
        </h4>
        
        <p className="text-slate-300 text-lg mb-12 font-medium leading-relaxed opacity-90">
          IGS Group is known as the best office supply partner in Noida & NCR. 
          We provide specialized procurement for housekeeping, stationery, and IT hardware.
        </p>

        <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-2xl group">
          Connect With Us <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
        
        <div className="mt-16 flex gap-8 items-center border-t border-white/10 pt-8">
           <div className="text-white/50 font-black text-[10px] uppercase tracking-widest">Trusted By</div>
           <div className="text-white/20 font-black text-xl italic tracking-tighter">CORPORATES • INDUSTRIES • BANKS</div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE: High-Contrast Form */}
    <div className="lg:w-[60%] p-8 lg:p-16 bg-[#000d1a]/80">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] p-8 mb-10 flex items-center justify-between shadow-2xl relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        
        <div className="text-white relative z-10">
          <p className="text-[10px] font-bold uppercase opacity-80 tracking-[0.3em] mb-2">IGS Group Enterprises</p>
          <p className="text-2xl font-black">Get Best Price Quotation</p>
          <p className="text-xs opacity-80 mt-1 font-medium">Professional Bulk Supply Solutions</p>
        </div>
        <Package className="text-white/20 relative z-10" size={60} />
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-blue-400 tracking-widest ml-1">Organization Name</label>
          <input 
            type="text" 
            placeholder="Enter Company Name" 
            className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 text-slate-950 font-bold placeholder:text-slate-400 transition-all border border-slate-200" 
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-blue-400 tracking-widest ml-1">WhatsApp Number</label>
            <div className="flex gap-0">
              <div className="bg-slate-100 px-4 flex items-center rounded-l-2xl border border-r-0 border-slate-200 font-bold text-slate-600">
                  +91
              </div>
              <input 
                type="tel" 
                placeholder="Number" 
                className="w-full p-5 bg-white rounded-r-2xl outline-none focus:ring-4 focus:ring-blue-500/20 text-slate-950 font-bold placeholder:text-slate-400 transition-all border border-slate-200" 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-blue-400 tracking-widest ml-1">Corporate Email</label>
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 text-slate-950 font-bold placeholder:text-slate-400 transition-all border border-slate-200" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-blue-400 tracking-widest ml-1">Supply Category</label>
          <select className="w-full p-5 bg-white rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 text-slate-950 font-bold cursor-pointer appearance-none border border-slate-200">
            <option>Housekeeping Materials</option>
            <option>Corporate Stationery</option>
            <option>Pantry & Snacks</option>
            <option>Computer Accessories</option>
          </select>
        </div>

        <button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-sm transition-all shadow-xl shadow-blue-600/30 uppercase tracking-[0.3em] mt-4 flex items-center justify-center gap-3">
          GENERATE QUOTE <ChevronRight size={20} />
        </button>
      </form>
    </div>
  </div>
</section>


      {/* --- NEW BLOCK: WHY CHOOSE US (PEROTO STYLE) --- */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side: Text & Features */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1.5 rounded-full text-white">
                  <CheckCircle2 size={12} fill="currentColor" />
                </div>
                <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px]">Why Do People Choose Us?</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
                Made Housekeeping <br />
                <span className="text-blue-600">Easy With Us</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                You know? People call us the best wholesale cleaning product dealer in Noida.
                Our products are capturing the housekeeping market with rapid speed because we
                deal in quality and safety. Whether you want industrial-grade chemicals or
                basic supplies, we've got everything for you.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-8 pt-4">
              {[
                {
                  title: "Team of Expert HouseKeeping Staff",
                  desc: "Our housekeeping staff are highly trained and provide the best service to maintain your professional standards.",
                  icon: <Users className="text-blue-600" size={24} />,
                  bgColor: "bg-blue-50"
                },
                {
                  title: "Affordability",
                  desc: "You will get the finest housekeeping products at the lowest price range in the NCR region.",
                  icon: <Zap className="text-blue-600" size={24} />,
                  bgColor: "bg-blue-50"
                },
                {
                  title: "Expert Support",
                  desc: "Call us anytime and we will assist you with all our might. Our dedicated team is here for your procurement needs.",
                  icon: <Headphones className="text-blue-600" size={24} />,
                  bgColor: "bg-blue-50"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`shrink-0 w-14 h-14 ${item.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Promotional Banner Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 group">
              {/* Banner Image */}
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80"
                alt="Warehouse Staff"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Top Badge Overlay */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-700 to-blue-900 py-4 px-8 flex justify-between items-center">
                <span className="text-white font-black text-[10px] tracking-[0.2em] uppercase">Get Best Price Quotation</span>
                <div className="bg-green-500 text-white text-[9px] font-black px-3 py-1 rounded-full animate-pulse">
                  Trusted by 1000+ Customers
                </div>
              </div>

              {/* Center Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-[2rem] shadow-2xl border border-white/20 transform -rotate-2">
                  <h3 className="text-2xl md:text-3xl font-light text-slate-800">Office supplies products chahiye?</h3>
                  <p className="text-4xl md:text-6xl font-black text-blue-900 mt-2 tracking-tighter">Sab mil jayega</p>
                </div>
              </div>

              {/* Bottom Contact Overlay */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2">
                <div className="bg-green-500 p-6 flex flex-col items-center justify-center text-white">
                  <p className="text-[10px] font-bold opacity-80 uppercase">Call Now For Bulk Orders</p>
                  <p className="text-xl font-black">+91 9211709819</p>
                </div>
                <div className="bg-blue-600 p-6 flex items-center justify-center text-white">
                  <span className="text-2xl font-black italic tracking-tighter uppercase">Apka apna Vendor</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      {/* --- BLOCK 7: ULTRA-PREMIUM DARK FOOTER (PEROTO INSPIRED) --- */}
      <footer className="bg-black pt-24 pb-12 px-6 lg:px-20 text-white font-sans border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Upper Section: 6 Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-20">
            
            {/* Column 1: Brand & Socials */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-black tracking-tighter italic text-white leading-none">
                  IGS <span className="text-blue-500">GROUP</span>
                </h1>
                <p className="text-slate-500 text-[12px] font-bold leading-relaxed pr-4">
                  Our business specializes in manufacturing and supplying a wide range of
                  housekeeping materials since 2024.
                </p>
              </div>
              
              {/* Social Icons - Clean White Boxes */}
              <div className="flex flex-wrap gap-2">
                {[Smartphone, Globe, Mail, Phone, Send].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Housekeeping */}
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
                Housekeeping
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h5>
              <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
                {["Air Fresheners", "Taski Chemicals", "Cleaning Tools", "Tissue Items", "Cleaning Aids", "Equipment"].map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors group">
                    <ChevronRight size={12} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Stationery */}
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
                Stationery
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h5>
              <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
                {["Registers/Pads", "Pen/Markers", "Desk Accessories", "Files Folders", "Whiteboards", "Packaging"].map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors group">
                    <ChevronRight size={12} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Pantry Items */}
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
                Pantry Items
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h5>
              <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
                {["Coffee/Tea", "Milk/Sugar", "Biscuits/Snacks", "Disposable Items", "Crockery Items"].map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors group">
                    <ChevronRight size={12} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Locations */}
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
                Locations
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h5>
              <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
                {["Noida", "Greater Noida", "Ghaziabad", "Faridabad", "Gurugram", "Delhi NCR"].map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors group">
                    <MapPin size={12} className="text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Quick Links */}
            <div>
              <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
              </h5>
              <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
                {["About Us", "Blogs", "Gallery", "Contact", "Terms", "Privacy"].map((item) => (
                  <li key={item} className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors group">
                    <ChevronRight size={12} className="text-blue-500 group-hover:translate-x-1 transition-transform" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Strip: Icons + Info (Blue Highlight) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-10">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Office Address</p>
                <p className="text-sm font-bold text-white">Sector-62, Noida, Uttar Pradesh</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Send Email</p>
                <p className="text-sm font-bold text-white">info@igsgroup.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Call Any Time</p>
                <p className="text-xl font-black text-blue-500">+91 99999 99999</p>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Only */}
          <div className="text-center">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
              © 2026 INDIAN GLOBAL SOURCING GROUP — TO MEET LOCAL NEEDS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;