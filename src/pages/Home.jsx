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
import PremiumEnquirySection from "../components/PremiumEnquirySection";
import SiteFooter from "../components/SiteFooter";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    title: "Complete Facility & Housekeeping Solutions",
    subtitle:
      "Indian Global Services (IGS) delivers high-quality housekeeping materials, cleaning equipment, hygiene solutions, and facility essentials for corporates, industries, hospitals, and institutions.",
    badge: "Professional Facility Supply Solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    title: "Your Trusted Housekeeping Partner",
    subtitle:
      "Delivering clean and efficient workspaces with reliable supply, competitive pricing, and professional customer support.",
    badge: "Complete Hygiene & Cleaning Solutions"
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
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            {
              title: "Reliable Supply",
              icon: <Package className="text-blue-600" size={24} />
            },
            {
              title: "Competitive Pricing",
              icon: <Zap className="text-blue-600" size={24} />
            },
            {
              title: "Timely Delivery",
              icon: <Truck className="text-blue-600" size={24} />
            },
            {
              title: "Quality Assured",
              icon: <Award className="text-blue-600" size={24} />
            },
            {
              title: "Customer Support",
              icon: <Headphones className="text-blue-600" size={24} />
            }
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
                About Indian Global Services
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
      <section className="py-24 px-6 lg:px-20 bg-slate-50 border-y border-slate-200 w-full">
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
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
                title: "Computer Accessories",
                img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
                desc: "Enhance productivity with our high-end IT peripherals, premium keyboards, mice, and essential hardware tailored for modern corporate infrastructure."
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500">
                {/* Image Section - Increased height for full look */}
                <div className="h-80 overflow-hidden bg-slate-50">
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
                    <Link
  to={
    item.title === "HouseKeeping Materials"
      ? "/housekeeping"
      : item.title === "Office Stationery"
  ? "/stationery"
      : "/computer-accessories"
  }
  className="inline-flex items-center justify-center gap-3 w-full bg-[#001e3d] text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] group-hover:bg-blue-600 transition-all"
>
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

    <PremiumEnquirySection />


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
                IGS delivers reliable housekeeping and facility solutions with quality-assured products,
  `               competitive pricing, timely delivery, and dedicated customer support for corporate requirements.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-8 pt-4">
              {[
                {
                  title: "Reliable Supply",
                  desc: "Consistent and dependable supply for corporate and institutional requirements.",
                  icon: <Package className="text-blue-600" size={24} />,
                  bgColor: "bg-blue-50"
                },
                {
                  title: "Competitive Pricing",
                  desc: "Cost-effective procurement solutions without compromising on quality.",
                  icon: <Zap className="text-blue-600" size={24} />,
                  bgColor: "bg-blue-50"
                },
                {
                  title: "Professional Customer Support",
                  desc: "Dedicated assistance for quotations, product selection, and order tracking.",
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
                  <h3 className="text-2xl md:text-3xl font-light text-slate-800">
                    Professional Facility
                  </h3>
                  <p className="text-4xl md:text-6xl font-black text-blue-900 mt-2 tracking-tighter">
                    Supply Solutions
                  </p>
                </div>
              </div>

              {/* Bottom Contact Overlay */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2">
                <div className="bg-green-500 p-6 flex flex-col items-center justify-center text-white">
                  <p className="text-[10px] font-bold opacity-80 uppercase">Call Now For Orders</p>
                  <p className="text-xl font-black">+91 6366920007</p>
                </div>
                <div className="bg-blue-600 p-6 flex items-center justify-center text-white">
                  <span className="text-2xl font-black italic tracking-tighter uppercase">
                    Trusted by Corporate Clients
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



<SiteFooter />
      
    </div>
  );
};

export default Home;