import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  Brush,
  Wind,
  Package,
  LayoutGrid,
  List,
  ShieldCheck,
  ArrowRight,
  Truck,
  Zap,
  Award,
  CheckCircle2,
  Star,
  Target,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

// Replace all image imports with these exact imports (matching your .jfif files)

// Use these exact imports based on your current file names and extensions

import automaticAirFreshener from "../assets/housekeeping/automatic-air-freshener.jfif";
import automaticSoapDispenser from "../assets/housekeeping/automatic-soap-dispenser.jfif";
import cFoldTissuePaper from "../assets/housekeeping/c-fold-tissue-paper.jfif";
import floorScrubBrush from "../assets/housekeeping/floor-scrub-brush.jfif";
import garbageBagsBlack from "../assets/housekeeping/garbage-bags-black.webp";
import glassCleaningSpray from "../assets/housekeeping/glass-cleaning-spray.jfif";
import industrialHardBroom from "../assets/housekeeping/industrial-hard-broom.jfif";
import lizolFloorCleaner from "../assets/housekeeping/lizol-floor-cleaner.jfif";
import phenylConcentrate from "../assets/housekeeping/phenyl-concentrate.jfif";
import taskiR1ToiletCleaner from "../assets/housekeeping/taski-r1-toilet-cleaner.webp";
// Replace this import with the correct .jfif extension

import toiletCleaningBrush from "../assets/housekeeping/toilet-cleaning-brush.jfif";
import toiletRollPack from "../assets/housekeeping/toilet-roll-pack.jfif";

const Housekeeping = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // CLIENT-ALIGNED CATEGORIES
  const categoriesData = [
    { name: "Cleaning Chemicals", icon: <Droplets size={18} /> },
    { name: "Housekeeping Tools", icon: <Brush size={18} /> },
    { name: "Waste Management Solutions", icon: <Package size={18} /> },
    { name: "Hygiene & Washroom Solutions", icon: <Wind size={18} /> },
  ];

  // CLIENT-ALIGNED PRODUCTS
  const productsData = [
  // Cleaning Chemicals
  {
    name: "Taski R1 Toilet Cleaner",
    cat: "Cleaning Chemicals",
    image: taskiR1ToiletCleaner,
  },
  {
    name: "Lizol Floor Cleaner",
    cat: "Cleaning Chemicals",
    image: lizolFloorCleaner,
  },
  {
    name: "Glass Cleaning Spray",
    cat: "Cleaning Chemicals",
    image: glassCleaningSpray,
  },
  {
    name: "Phenyl Concentrate",
    cat: "Cleaning Chemicals",
    image: phenylConcentrate,
  },

  // Housekeeping Tools
  {
    name: "Industrial Hard Broom",
    cat: "Housekeeping Tools",
    image: industrialHardBroom,
  },
  {
    name: "Toilet Cleaning Brush",
    cat: "Housekeeping Tools",
    image: toiletCleaningBrush,
  },
  {
    name: "Floor Scrub Brush",
    cat: "Housekeeping Tools",
    image: floorScrubBrush,
  },

  // Waste Management Solutions
  {
    name: "C Fold Tissue Paper",
    cat: "Waste Management Solutions",
    image: cFoldTissuePaper,
  },
  {
    name: "Garbage Bags Black",
    cat: "Waste Management Solutions",
    image: garbageBagsBlack,
  },
  {
    name: "Toilet Roll Pack",
    cat: "Waste Management Solutions",
    image: toiletRollPack,
  },

  // Hygiene & Washroom Solutions
  {
    name: "Automatic Soap Dispenser",
    cat: "Hygiene & Washroom Solutions",
    image: automaticSoapDispenser,
  },
  {
    name: "Automatic Air Freshener",
    cat: "Hygiene & Washroom Solutions",
    image: automaticAirFreshener,
  },
];

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.cat === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[88vh] flex items-center px-6 lg:px-20 overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Office"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <ShieldCheck size={14} />
            Premium Facility Supply Partner
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter uppercase mb-6">
            Housekeeping <br />
            <span className="text-blue-500">Supply Solutions</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed border-l-4 border-blue-500 pl-6">
            Noida & NCR&apos;s trusted supplier for commercial
            cleaning chemicals, tissue products, dispensers & facility hygiene
            solutions.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/enquiry"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
            >
              Get Quote
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 mt-14 text-sm text-slate-400 font-bold uppercase tracking-wider border-t border-white/10 pt-8">
            <span>✔ Direct Factory Sourcing</span>
            <span>✔ ISO Certified Supply</span>
            <span>✔ Pan India Logistics</span>
          </div>
        </div>
      </section>

      {/* FEATURE BAR */}
      <div className="relative -mt-10 z-20 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "PAN Noida NCR Delivery",
              icon: <Truck />,
            },
            {
              title: "Competitive Pricing",
              icon: <Zap />,
            },
            {
              title: "ISO Quality Standards",
              icon: <Award />,
            },
            {
              title: "Corporate Supplies",
              icon: <CheckCircle2 />,
            },
          ].map((feat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl py-5 px-6 flex items-center justify-center gap-4 border border-slate-200 shadow-sm hover:bg-blue-600 group transition-all"
            >
              <div className="text-blue-600 group-hover:text-white">
                {React.cloneElement(feat.icon, {
                  size: 22,
                })}
              </div>

              <span className="text-[11px] font-black uppercase text-slate-900 group-hover:text-white tracking-wider text-center">
                {feat.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <section className="bg-slate-50 py-24 px-6 lg:px-16 mt-10 border-t border-slate-100">
        {/* HEADING */}
        <div className="max-w-[1650px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 w-10 h-[3px]"></div>

              <span className="text-blue-600 font-black uppercase tracking-widest text-[11px]">
                Industrial Catalog
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight">
              What Do We Supply?
            </h3>
          </div>
        </div>

        {/* GRID AREA */}
        <div className="max-w-[1650px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* SIDEBAR */}
          <aside className="lg:w-[280px] space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 sticky top-[100px]">
              <h5 className="font-black text-sm uppercase tracking-widest text-slate-950 mb-8 border-b border-slate-100 pb-5">
                Product Categories
              </h5>

              <div className="space-y-3">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-bold transition-all text-sm ${
                    activeCategory === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <LayoutGrid size={18} />
                  All Products
                </button>

                {categoriesData.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl font-bold transition-all text-sm ${
                      activeCategory === cat.name
                        ? "bg-blue-600 text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* TRUST BLOCK */}
            <div className="bg-[#001e3d] text-white p-8 rounded-2xl space-y-5 shadow-xl">
              <ShieldCheck className="text-green-400" size={38} />

              <h4 className="font-black text-2xl leading-tight">
                Reliable Vendor Partnership
              </h4>

              <p className="text-slate-300 text-sm leading-relaxed">
                Dedicated logistics support & industrial grade certified
                facility solutions.
              </p>

              <Target className="text-white/20 pt-2" size={50} />
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="flex-1">
            {/* TOP BAR */}
            <div className="flex justify-between items-center mb-10 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-slate-500 font-semibold text-sm md:text-base">
                Showing{" "}
                <span className="font-black text-slate-900">
                  {filteredProducts.length}
                </span>{" "}
                products in {activeCategory}
              </p>

              <div className="flex gap-2">
                <div className="p-3 bg-blue-600 rounded-lg text-white">
                  <LayoutGrid size={18} />
                </div>

                <div className="p-3 bg-slate-100 rounded-lg text-slate-400">
                  <List size={18} />
                </div>
              </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {filteredProducts.map((prod, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-all duration-300 overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="h-[240px] bg-white p-6 flex items-center justify-center border-b border-slate-100 relative">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />

                
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 text-left">
                    <span className="text-[11px] text-blue-600 font-bold uppercase tracking-wider">
                      {prod.cat}
                    </span>

                    <h3 className="text-[16px] leading-6 font-bold text-slate-900 mt-2 mb-5 min-h-[48px]">
                      {prod.name}
                    </h3>

                    <div className="flex gap-3">
                      <Link
                        to="/enquiry"
                        className="flex-1 bg-[#002147] text-white py-3 rounded-lg text-center text-[12px] font-bold uppercase hover:bg-blue-600 transition-all"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-28 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* IMAGE */}
          <div className="w-full md:w-[45%] relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80"
              alt="Facility products"
              className="w-full h-auto rounded-[2rem] shadow-2xl"
            />

            <div className="absolute -bottom-10 -right-10 w-[70%] border-[10px] border-white rounded-[2rem] shadow-2xl overflow-hidden hidden xl:block">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80"
                alt="Cleaning solutions"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-500 w-10 h-[3px]"></div>

                <span className="text-blue-600 font-black uppercase tracking-widest text-[11px]">
                  IGS Supply Advantage
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight mb-6">
                Your Trusted Facility Partner
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                Rapid deliveries, industrial grade products, safety certified
                chemicals & best competitive pricing for corporate and commercial
                spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              {[
                {
                  title: "Quick Bulk Quotation",
                  desc: "MSME Registered & ISO Certified supplier partner.",
                  icon: <Star />,
                },
                {
                  title: "PAN Noida NCR Logistics",
                  desc: "Fast delivery support with direct factory sourcing.",
                  icon: <CheckCircle2 />,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="shrink-0 w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    {React.cloneElement(item.icon, {
                      size: 24,
                    })}
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-slate-950 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Housekeeping;