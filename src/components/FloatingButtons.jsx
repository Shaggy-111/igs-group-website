import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
      {/* WhatsApp - Branded Color */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          WhatsApp Us
        </span>
      </a>

      {/* Call - Corporate Dark Blue */}
      <a
        href="tel:+91XXXXXXXXXX"
        className="bg-[#0B1F3A] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        title="Call Support"
      >
        <Phone size={28} />
        <span className="absolute right-16 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Call Experts
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;