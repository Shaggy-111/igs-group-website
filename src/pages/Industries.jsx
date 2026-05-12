// src/pages/Industries.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Hospital,
  Factory,
  ShoppingBag,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Truck,
  Award,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

function Industries() {
  // Replace the `industries` array in Industries.jsx with this enhanced version

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description:
      "Complete housekeeping, hygiene, and facility supplies for offices, IT parks, and corporate workplaces.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description:
      "Professional cleaning chemicals, infection-control products, and hygiene solutions for healthcare environments.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Factory,
    title: "Industries",
    description:
      "Heavy-duty cleaning equipment and maintenance products for factories, warehouses, and industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commercial Spaces",
    description:
      "Washroom solutions, cleaning tools, and facility essentials for malls, showrooms, and commercial establishments.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Reliable bulk supply of cleaning and hygiene products for schools, colleges, and universities.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
];

  const strengths = [
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      description:
        "Premium products sourced from trusted manufacturers and verified suppliers.",
    },
    {
      icon: Truck,
      title: "Pan India Delivery",
      description:
        "Fast and dependable logistics support for bulk orders across India.",
    },
    {
      icon: Award,
      title: "Professional Support",
      description:
        "Dedicated assistance for product selection, quotations, and order fulfillment.",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* HERO SECTION */}
      <section className="px-6 lg:px-16 pt-12 pb-16">
        <div className="w-full bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 rounded-[32px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 min-h-[520px]">
            {/* Left Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-black uppercase tracking-[0.25em] w-fit mb-8">
                Industry Solutions
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white mb-8">
                INDUSTRIES
                <br />
                <span className="text-blue-400">WE SERVE</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                IGS delivers premium housekeeping, hygiene, and facility supply
                solutions to corporates, hospitals, industries, retail spaces,
                and educational institutions across India.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/enquiry"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black uppercase tracking-[0.15em] text-sm transition-all shadow-xl shadow-blue-600/20"
                >
                  Get Custom Quote
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                <div>
                  <p className="text-blue-400 text-2xl font-black">5+</p>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                    Industries
                  </p>
                </div>
                <div>
                  <p className="text-blue-400 text-2xl font-black">1000+</p>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                    Products
                  </p>
                </div>
                <div>
                  <p className="text-blue-400 text-2xl font-black">PAN India</p>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                    Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
                alt="Industries We Serve"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="px-6 lg:px-16 pb-20">
        <div className="w-full">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[3px] bg-blue-600 rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                Industry Coverage
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950">
              Trusted Across
              <br />
              Multiple Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                    <Icon size={30} className="text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 lg:px-16 pb-20">
        <div className="w-full bg-white border border-slate-200 rounded-[32px] p-10 lg:p-16 shadow-sm">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[3px] bg-blue-600 rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                Why Choose IGS
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-950">
              Your Trusted
              <br />
              Facility Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-5">
                    <Icon size={26} className="text-blue-600" />
                  </div>

                  <h3 className="text-2xl font-black text-slate-950 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 lg:px-16 pb-24">
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-[32px] p-10 lg:p-16 text-white shadow-2xl shadow-blue-200">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              Need Industry-Specific
              <br />
              Supply Solutions?
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Get a customized quotation for your organization’s housekeeping,
              hygiene, and facility requirements.
            </p>

            <Link
              to="/enquiry"
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-black uppercase tracking-[0.15em] text-sm hover:bg-slate-100 transition-all"
            >
              Request Custom Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

export default Industries;