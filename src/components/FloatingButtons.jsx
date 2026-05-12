import React from "react";
import { Phone, MessageCircle } from "lucide-react";

// Company Contact Details
const PHONE_NUMBER = "6366920007"; // Without +91 for wa.me
const COUNTRY_CODE = "91";

// Pre-filled WhatsApp message
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello IGS Group, I would like to enquire about your products and services."
);

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${COUNTRY_CODE}${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-200">
          WhatsApp Us
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:+${COUNTRY_CODE}${PHONE_NUMBER}`}
        className="bg-[#0B1F3A] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 group relative"
        title="Call Support"
        aria-label="Call Support"
      >
        <Phone size={28} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-200">
          Call Experts
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;