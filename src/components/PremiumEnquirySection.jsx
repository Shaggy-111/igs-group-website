import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  Building2,
  Phone,
  Mail,
  Package,
  MessageSquare,
  CheckCircle2,
  Truck,
  Zap,
  Clock,
  Headphones,
} from "lucide-react";

const PremiumEnquirySection = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    whatsapp: "",
    email: "",
    category: "Housekeeping Materials",
    requirement: "",
  });

  const categories = [
    "Housekeeping Materials",
    "Computer Accessories",
    "Stationery Supplies",
    "Pantry Essentials",
    "Custom Requirement",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = () => {
    const message = `
*Bulk Requirement Request*

Organization Name: ${formData.companyName}
WhatsApp Number: ${formData.whatsapp}
Corporate Email: ${formData.email}
Supply Category: ${formData.category}
Detailed Requirement: ${formData.requirement}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6366920007?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const features = [
    {
      icon: <Package size={18} />,
      title: "Direct Factory & Wholesale Sourcing",
    },
    {
      icon: <Truck size={18} />,
      title: "Fast Delivery Across Noida & NCR",
    },
    {
      icon: <CheckCircle2 size={18} />,
      title: "GST Billing & Professional Support",
    },
    {
      icon: <Clock size={18} />,
      title: "Quick Quotation Within Few Hours",
    },
  ];

  return (
    <section className="relative py-28 px-4 md:px-10 xl:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80"
          alt="Corporate Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/88"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-blue-950/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md text-[11px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck size={14} />
            Premium Procurement Partner
          </div>

          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black leading-tight tracking-tighter text-white">
            Got Your Hands On{" "}
            <span className="text-blue-500">Best Quality</span>
            <br />
            Housekeeping & IT Supplies At Lowest Price
          </h2>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl bg-slate-950/70">
          <div className="grid lg:grid-cols-2">
            {/* Left Panel */}
            <div className="p-10 lg:p-14 border-r border-white/5 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                  <Headphones size={20} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                    Direct Support
                  </p>
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
                Still Confused?
                <br />
                <span className="text-blue-500 italic">Let Us Help You.</span>
              </h3>

              <p className="text-slate-300 leading-8 text-base mb-10 max-w-lg">
                IGS Group is a trusted corporate procurement partner in Noida &
                NCR for housekeeping materials, stationery, computer accessories
                and complete facility management supplies.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-xl font-black uppercase tracking-wider text-[11px] hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl"
              >
                Connect With Us
                <ArrowRight size={16} />
              </Link>

              {/* Feature List */}
              <div className="mt-12 pt-10 border-t border-white/10 space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-slate-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                      {feature.icon}
                    </div>
                    <span className="font-semibold text-sm">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-10 lg:p-14 bg-slate-950/95 text-white">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-6 mb-8 shadow-2xl">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-100 mb-2">
                  IGS Group Enterprises
                </p>

                <h3 className="text-3xl font-black leading-tight">
                  Get Best Price Quotation
                </h3>

                <p className="text-blue-100 text-sm mt-1">
                  Professional Bulk Supply Solutions
                </p>
              </div>

              {/* Organization Name */}
              <div className="mb-5">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Organization Name
                </label>
                <div className="relative">
                  <Building2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 font-semibold border-0 outline-none"
                  />
                </div>
              </div>

              {/* WhatsApp + Email */}
              <div className="grid md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+91 Number"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 font-semibold border-0 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Corporate Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 font-semibold border-0 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="mb-5">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Supply Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl bg-white text-slate-900 font-semibold border-0 outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Requirement */}
              <div className="mb-6">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Detailed Requirement
                </label>
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="absolute left-4 top-4 text-slate-400"
                  />
                  <textarea
                    rows="4"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Mention products, quantities or specific requirements..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-slate-900 font-semibold border-0 outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-[0_15px_40px_rgba(37,99,235,0.35)] flex items-center justify-center gap-3"
              >
                Generate Quote
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumEnquirySection;