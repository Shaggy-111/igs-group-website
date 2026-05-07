import React, { useState } from "react";

import {
  Send,
  CheckCircle,
  MessageSquare,
  PhoneCall,
  Building2,
  ShieldCheck,
  Truck,
  Clock3,
  PackageCheck,
  Sparkles,
  ArrowRight,
  ClipboardList,
  Users2,
  BadgeCheck,
} from "lucide-react";

const Enquiry = () => {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    category: "Housekeeping Materials",
    company: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e) => {

    e.preventDefault();

    const phoneNumber = "91XXXXXXXXXX";

    const text =
      `*New Business Enquiry - IGS Group*%0A` +
      `━━━━━━━━━━━━━━━%0A` +
      `*Company:* ${formData.company}%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*City:* ${formData.city}%0A` +
      `*Category:* ${formData.category}%0A` +
      `*Requirement:* ${formData.message}%0A` +
      `━━━━━━━━━━━━━━━%0A` +
      `_Sent via IGS Group Web Portal_`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (

    <div className="min-h-screen bg-white overflow-hidden pt-20">

      {/* HERO */}
      <section className="relative bg-[#050816] overflow-hidden px-6 lg:px-20 py-24">

        {/* BG */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600"
            alt="office"
            className="w-full h-full object-cover opacity-[0.06]"
          />

        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-[1500px] mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div className="pt-10">

            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-blue-400 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.25em] font-black mb-8">

              <Sparkles size={14} />

              Corporate Procurement Support

            </div>

            <h1 className="text-5xl md:text-[90px] font-black leading-[0.92] tracking-[-4px] text-white mb-8">

              Let’s Build
              <br />

              Your Supply
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
                Network
              </span>

            </h1>

            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-12">

              Get customized bulk quotations for
              housekeeping, pantry and stationery supplies.
              We help startups, offices and commercial
              spaces simplify procurement with fast
              delivery and reliable sourcing support.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">

              {[
                {
                  value: "500+",
                  label: "Products",
                },

                {
                  value: "100+",
                  label: "Clients",
                },

                {
                  value: "24/7",
                  label: "Support",
                },

                {
                  value: "NCR",
                  label: "Supply",
                },
              ].map((item, i) => (

                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >

                  <h3 className="text-3xl font-black text-blue-400 mb-2">
                    {item.value}
                  </h3>

                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

            {/* FEATURES */}
            <div className="space-y-6">

              {[
                {
                  icon: <PackageCheck size={22} />,
                  text: "Direct Factory & Wholesale Sourcing",
                },

                {
                  icon: <Truck size={22} />,
                  text: "Fast Delivery Across Noida & NCR",
                },

                {
                  icon: <ShieldCheck size={22} />,
                  text: "GST Billing & Professional Support",
                },

                {
                  icon: <Clock3 size={22} />,
                  text: "Quick Quotation Within Few Hours",
                },
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-5"
                >

                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>

                  <p className="text-white font-bold tracking-wide">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="relative">

            <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.4)] relative z-10">

              {/* TOP */}
              <div className="flex items-start justify-between gap-5 mb-12">

                <div>

                  <span className="text-blue-600 uppercase tracking-[0.25em] font-black text-xs">
                    Requirement Form
                  </span>

                  <h2 className="text-4xl md:text-5xl font-black tracking-[-2px] text-slate-950 mt-4 leading-[1]">
                    Request A Bulk Quote
                  </h2>

                </div>

                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg">

                  <ClipboardList size={30} />

                </div>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="space-y-2">

                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 transition-all"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                    />

                  </div>

                  <div className="space-y-2">

                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Mobile Number
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 transition-all"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobile: e.target.value,
                        })
                      }
                    />

                  </div>

                </div>

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-6">

                  <div className="space-y-2">

                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      Company Name
                    </label>

                    <input
                      type="text"
                      placeholder="Ex: ABC Pvt Ltd"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 transition-all"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company: e.target.value,
                        })
                      }
                    />

                  </div>

                  <div className="space-y-2">

                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="Noida / Delhi"
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 transition-all"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          city: e.target.value,
                        })
                      }
                    />

                  </div>

                </div>

                {/* SELECT */}
                <div className="space-y-2">

                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Procurement Category
                  </label>

                  <select
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 appearance-none cursor-pointer"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                  >

                    <option>
                      Housekeeping Materials
                    </option>

                    <option>
                      Pantry & Refreshments
                    </option>

                    <option>
                      Office Stationery
                    </option>

                    <option>
                      Cleaning Chemicals
                    </option>

                    <option>
                      Corporate Bulk Orders
                    </option>

                  </select>

                </div>

                {/* TEXTAREA */}
                <div className="space-y-2">

                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Detailed Requirement
                  </label>

                  <textarea
                    required
                    rows="5"
                    placeholder="Mention products, quantities or specific requirements..."
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none font-bold text-slate-900 transition-all resize-none"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  ></textarea>

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group w-full bg-blue-600 hover:bg-slate-950 transition-all text-white py-6 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-4 shadow-2xl shadow-blue-200"
                >

                  Confirm via WhatsApp

                  <Send
                    size={22}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />

                </button>

              </form>

              {/* FOOTER */}
              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center">
                    <BadgeCheck size={26} />
                  </div>

                  <div>

                    <h4 className="font-black text-slate-950">
                      Trusted Business Support
                    </h4>

                    <p className="text-slate-500 text-sm">
                      Fast response with professional assistance
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="w-14 h-14 rounded-2xl bg-slate-100 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-slate-700"
                  >

                    <PhoneCall size={22} />

                  </a>

                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    className="w-14 h-14 rounded-2xl bg-green-500 hover:bg-slate-950 transition-all flex items-center justify-center text-white"
                  >

                    <MessageSquare size={22} />

                  </a>

                </div>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-[2rem] shadow-2xl p-7 w-[280px] z-20 border border-slate-100 hidden lg:block">

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">

                  <Users2 size={28} />

                </div>

                <div>

                  <h4 className="text-xl font-black text-slate-950">
                    Startup Friendly
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Flexible bulk procurement
                  </p>

                </div>

              </div>

              <div className="space-y-3">

                <div className="flex items-center justify-between">

                  <span className="text-slate-500 text-sm">
                    Client Satisfaction
                  </span>

                  <span className="font-black text-slate-950">
                    97%
                  </span>

                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">

                  <div className="w-[97%] h-full bg-blue-600 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
};

export default Enquiry;