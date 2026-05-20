// src/components/SiteFooter.jsx

import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Globe,
  Smartphone,
  Send,
} from "lucide-react";

const COMPANY_PHONE = "6366920007";
const COMPANY_PHONE_DISPLAY = "+91 6366 920 007";
const WHATSAPP_URL = `https://wa.me/91${COMPANY_PHONE}`;
const COMPANY_EMAIL = "info@igsgroup.in";

const SiteFooter = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 lg:px-20 text-white font-sans border-t border-white/5 relative z-[200] pointer-events-auto">
      <div className="max-w-[1400px] mx-auto">
        {/* Upper Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-20">
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-black tracking-tighter italic text-white leading-none">
                IGS <span className="text-blue-500">GROUP</span>
              </h1>

              <p className="text-slate-500 text-[12px] font-bold leading-relaxed pr-4">
                Our business specializes in supplying a wide range of
                housekeeping materials, office stationery, and computer
                accessories to corporates and institutions across India.
              </p>
            </div>

            {/* Social / Contact Icons */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://igsgroup.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Globe size={16} />
              </a>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Mail size={16} />
              </a>

              <a
                href={`tel:+91${COMPANY_PHONE}`}
                className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Phone size={16} />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Send size={16} />
              </a>

              <a
                href={`tel:+91${COMPANY_PHONE}`}
                className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Smartphone size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Housekeeping */}
          <div>
            <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
              Housekeeping
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
            </h5>

            <ul className="space-y-4">
              {[
                "Air Fresheners",
                "Taski Chemicals",
                "Cleaning Tools",
                "Tissue Items",
                "Cleaning Aids",
                "Equipment",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/housekeeping"
                    className="flex items-center gap-2 text-slate-400 text-[12px] font-black uppercase tracking-tight hover:text-blue-500 transition-colors cursor-pointer w-fit"
                  >
                    <ChevronRight
                      size={12}
                      className="text-blue-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </Link>
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

            <ul className="space-y-4">
              {[
                "Registers/Pads",
                "Pen/Markers",
                "Desk Accessories",
                "Files & Folders",
                "Whiteboards",
                "Packaging",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/stationery"
                    className="inline-flex items-center gap-2 text-slate-400 text-[12px] font-black uppercase tracking-tight hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    <ChevronRight
                      size={12}
                      className="text-blue-500 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations */}
          <div>
            <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
              Locations
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
            </h5>

            <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
              {[
                "Noida",
                "Greater Noida",
                "Ghaziabad",
                "Faridabad",
                "Gurugram",
                "Delhi NCR",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                >
                  <MapPin size={12} className="text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div>
            <h5 className="text-white font-black text-[13px] uppercase tracking-wider mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-500"></span>
            </h5>

            <ul className="space-y-4 text-slate-400 text-[12px] font-black uppercase tracking-tight">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/housekeeping" },
                { label: "Industries", to: "/industries" },
                { label: "Contact", to: "/enquiry" },
                { label: "Get Quotation", to: "/enquiry" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                  >
                    <ChevronRight
                      size={12}
                      className="text-blue-500"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-y border-white/5 mb-10">
          

          {/* Email */}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Mail size={20} />
            </div>

            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                Send Email
              </p>
              <p className="text-sm font-bold text-white">
                {COMPANY_EMAIL}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:+91${COMPANY_PHONE}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Phone size={20} />
            </div>

            <div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                Call Any Time
              </p>
              <p className="text-xl font-black text-blue-500">
                {COMPANY_PHONE_DISPLAY}
              </p>
            </div>
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">
            © 2026 INDIAN GLOBAL SOURCING GROUP — TO MEET LOCAL NEEDS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;