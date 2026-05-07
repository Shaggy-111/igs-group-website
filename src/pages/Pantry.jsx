import React from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  PenTool,
  ArrowRight,
  PackageCheck,
  ShoppingCart,
  Clock3,
  Sparkles,
  ClipboardList,
  CoffeeIcon,
  BriefcaseBusiness,
} from "lucide-react";

const Pantry = () => {
  const sections = [
    {
      title: "Pantry Essentials",
      subtitle: "Complete pantry solutions for offices, institutions and commercial workspaces.",
      icon: <Coffee size={40} />,
      accent: "from-orange-600 to-amber-500",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200",
      categories: [
        {
          name: "Tea & Coffee",
          items: ["Nescafe Coffee", "Premium Tea", "Green Tea", "Coffee Sachets", "Vending Machine Supplies"],
        },
        {
          name: "Snacks & Refreshments",
          items: ["Biscuits", "Namkeen", "Healthy Snacks", "Instant Noodles", "Packaged Juices"],
        },
        {
          name: "Disposable Supplies",
          items: ["Paper Cups", "Paper Plates", "Wooden Spoons", "Napkins & Tissue", "Disposable Glasses"],
        },
      ],
    },
    {
      title: "Corporate Stationery",
      subtitle: "Daily office essentials designed for productivity and smooth workplace operations.",
      icon: <PenTool size={40} />,
      accent: "from-blue-700 to-indigo-500",
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=1200",
      categories: [
        {
          name: "Writing Essentials",
          items: ["Pens & Pencils", "Whiteboard Markers", "Permanent Markers", "Highlighters", "Correction Pens"],
        },
        {
          name: "Office Paper Products",
          items: ["A4 Paper Bundles", "Sticky Notes", "Registers", "Notebooks", "Files & Folders"],
        },
        {
          name: "Desk Accessories",
          items: ["Staplers", "Calculators", "Desk Organizers", "Tape Dispensers", "Paper Punch Machines"],
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfc] overflow-hidden">
      {/* --- HERO SECTION: FULL HEIGHT SPLIT --- */}
      <section className="relative min-h-screen flex flex-col lg:flex-row bg-[#02040a]">
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 py-20 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-orange-400 px-6 py-3 rounded-xl text-xs uppercase tracking-[0.4em] font-black mb-8 backdrop-blur-xl">
            <Sparkles size={18} className="animate-pulse" />
            Full-Service Procurement
          </div>
          
          <h1 className="text-6xl lg:text-[120px] font-black leading-[0.85] tracking-tighter text-white mb-8">
            Pantry & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-white to-blue-500">Stationery</span>
            <br />Supply Hub.
          </h1>

          <p className="text-slate-400 text-2xl leading-relaxed max-w-2xl mb-12 border-l-4 border-orange-500 pl-8">
            IGS Group simplifies your workspace logistics. From coffee beans to A4 sheets, 
            we keep your corporate wheels turning 24/7.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <Link to="/enquiry" className="group bg-blue-600 hover:bg-white text-white hover:text-black transition-all duration-500 font-black uppercase tracking-widest text-sm px-14 py-7 rounded-2xl flex items-center gap-4 shadow-2xl">
              Get Corporate Rates <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
            {[{v: "500+", l: "Products"}, {v: "100+", l: "Corporates"}, {v: "24/7", l: "Support"}, {v: "NCR", l: "Network"}].map((s, i) => (
              <div key={i} className="border border-white/10 p-6 rounded-3xl bg-white/5 backdrop-blur-sm">
                <div className="text-3xl font-black text-white">{s.v}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative hidden lg:block overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover scale-110" 
            alt="Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-transparent to-transparent"></div>
        </div>
      </section>

      {/* --- CONTENT AREA: NO EMPTY SPACE --- */}
      <section className="relative z-20 -mt-20">
        <div className="max-w-[1700px] mx-auto px-6 lg:px-10">
          {sections.map((section, idx) => (
            <div key={idx} className="mb-40">
              {/* SECTION TOP PART: Split Content & Image */}
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 mb-20`}>
                <div className="flex-1 space-y-8">
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-gradient-to-br ${section.accent} flex items-center justify-center text-white shadow-3xl`}>
                    {section.icon}
                  </div>
                  <h2 className="text-7xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-none">
                    {section.title}
                  </h2>
                  <p className="text-slate-500 text-3xl font-medium leading-tight max-w-2xl italic">
                    "{section.subtitle}"
                  </p>
                </div>
                <div className="flex-1 w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
                  <img src={section.image} className="w-full h-full object-cover" alt={section.title} />
                </div>
              </div>

              {/* SECTION GRID: 3 BIG CARDS */}
              <div className="grid lg:grid-cols-3 gap-8">
                {section.categories.map((cat, cidx) => (
                  <div key={cidx} className="bg-white rounded-[3.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-500 transition-all duration-700 group">
                    <div className="text-4xl font-black text-slate-900 mb-8 border-b border-slate-100 pb-8 group-hover:text-blue-600 transition-colors">
                      {cat.name}
                    </div>
                    <ul className="space-y-6 mb-12">
                      {cat.items.map((item, iidx) => (
                        <li key={iidx} className="flex items-center gap-4 text-xl text-slate-500 font-bold">
                          <span className="w-3 h-3 rounded-full bg-orange-400 group-hover:scale-150 transition-transform"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to="/enquiry" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-widest bg-slate-50 group-hover:bg-blue-600 group-hover:text-white px-10 py-6 rounded-2xl w-full justify-between transition-all">
                      Bulk Enquiry <ArrowRight size={20} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BENEFITS BENTO BOX --- */}
      <section className="bg-white py-40 px-6 lg:px-20 border-t border-slate-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm">Why Choose Us</span>
            <h2 className="text-6xl lg:text-9xl font-black tracking-tighter">Reliable Supply Chain</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 h-full">
            <div className="bg-[#f8fafc] p-16 rounded-[4rem] flex flex-col justify-between group hover:bg-slate-900 transition-colors duration-700">
              <BriefcaseBusiness size={60} className="text-blue-600 group-hover:text-white" />
              <div>
                <h3 className="text-4xl font-black mb-6 group-hover:text-white">Corporate <br />Assistance</h3>
                <p className="text-xl text-slate-500 group-hover:text-slate-400">Dedicated managers for every account to handle high-volume procurement.</p>
              </div>
            </div>
            
            <div className="lg:col-span-1 bg-blue-600 p-16 rounded-[4rem] text-white flex flex-col justify-between shadow-2xl shadow-blue-500/50">
              <Clock3 size={60} />
              <div>
                <h3 className="text-4xl font-black mb-6">Express <br />24Hr Delivery</h3>
                <p className="text-xl text-blue-100">Your office never runs out. We offer 24-hour fulfillment for existing corporate clients.</p>
              </div>
            </div>

            <div className="bg-[#fef2f2] p-16 rounded-[4rem] flex flex-col justify-between border-2 border-orange-100">
              <ShoppingCart size={60} className="text-orange-500" />
              <div>
                <h3 className="text-4xl font-black mb-6 text-slate-900">Wholesale <br />Bulk Advantage</h3>
                <p className="text-xl text-slate-500">Unbeatable pricing for bulk orders of pantry and stationery consumables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL MASSIVE CTA --- */}
      <section className="px-6 lg:px-20 pb-40">
        <div className="max-w-[1600px] mx-auto bg-slate-950 rounded-[6rem] p-20 lg:p-40 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[200px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 space-y-12">
            <h2 className="text-7xl lg:text-[130px] font-black leading-[0.8] tracking-tighter text-white">
              Upgrade Your <br />
              <span className="text-orange-500">Workplace</span> Now.
            </h2>
            <p className="text-slate-400 text-3xl font-light max-w-4xl mx-auto">
              Ready to transform your procurement process? Join 100+ top-tier corporate clients in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <Link to="/enquiry" className="bg-white text-black font-black uppercase tracking-widest text-sm px-20 py-10 rounded-[2.5rem] hover:bg-orange-500 hover:text-white transition-all shadow-3xl">
                Get Your Free Quote
              </Link>
              <Link to="/contact" className="border-2 border-white/20 text-white font-black uppercase tracking-widest text-sm px-20 py-10 rounded-[2.5rem] hover:bg-white/5 transition-all">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pantry;