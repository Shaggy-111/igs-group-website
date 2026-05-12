import React from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Keyboard,
  HardDrive,
  Wifi,
  Printer,
  ShieldCheck,
  Truck,
  Headphones,
  ArrowRight,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

const categories = [
  "All Products",
  "Monitors",
  "Keyboards & Mice",
  "Storage Devices",
  "Networking",
  "Printers & Scanners",
  "Audio Accessories",
];

const productsData = [
  {
    name: "Dell 24-inch LED Monitor",
    cat: "Monitors",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wireless Keyboard & Mouse Combo",
    cat: "Keyboards & Mice",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "External SSD 1TB",
    cat: "Storage Devices",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dual Band Wi-Fi Router",
    cat: "Networking",
    image:
      "https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Laser Printer",
    cat: "Printers & Scanners",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Noise Cancelling Headset",
    cat: "Audio Accessories",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mechanical Keyboard",
    cat: "Keyboards & Mice",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Wireless Optical Mouse",
    cat: "Keyboards & Mice",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Portable HDD 2TB",
    cat: "Storage Devices",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "UPS Power Backup",
    cat: "Networking",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Webcam Full HD",
    cat: "Audio Accessories",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "USB-C Docking Station",
    cat: "Storage Devices",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
  },
];

const categoryIcons = {
  "All Products": Monitor,
  Monitors: Monitor,
  "Keyboards & Mice": Keyboard,
  "Storage Devices": HardDrive,
  Networking: Wifi,
  "Printers & Scanners": Printer,
  "Audio Accessories": Headphones,
};

function ProductCard({ product }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-52 bg-slate-50 overflow-hidden">
        <span className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
          Wholesale
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-600 mb-3">
          {product.cat}
        </p>

        <h3 className="text-xl font-black text-slate-900 leading-tight min-h-[56px]">
          {product.name}
        </h3>

        <Link
          to="/enquiry"
          className="mt-6 inline-flex items-center justify-center w-full bg-slate-950 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

function ComputerAccessories() {
    return (
        <div className="bg-slate-50 min-h-screen pt-36 pb-24">
            {/* Hero Section */}
            <section className="px-0 mb-16">
                <div className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-blue-700 overflow-hidden">
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="p-10 lg:p-16 text-white">
                            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
                                <ShieldCheck size={16} className="text-blue-400" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">
                                    Corporate IT Supply Partner
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight mb-6">
                                COMPUTER
                                <span className="block text-blue-400">ACCESSORIES</span>
                            </h1>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
                                IGS supplies monitors, keyboards, storage devices, networking
                                products, printers, and essential IT accessories for offices,
                                institutions, and enterprise environments.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <Link
                                    to="/enquiry"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all"
                                >
                                    Get Bulk Pricing
                                    <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-black text-slate-300">
                                    <Truck size={14} className="text-blue-400" />
                                    PAN India Delivery
                                </div>
                                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-black text-slate-300">
                                    <ShieldCheck size={14} className="text-blue-400" />
                                    Quality Assured
                                </div>
                                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-black text-slate-300">
                                    <Monitor size={14} className="text-blue-400" />
                                    Corporate IT Supplies
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block h-full">
                            <img
                                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                                alt="Computer Accessories"
                                className="w-full h-full object-cover min-h-[620px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 lg:px-10 xl:px-16">
                <div className="w-full">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-[3px] bg-blue-600 rounded-full"></span>
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                Industrial Catalog
                            </span>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <h2 className="text-5xl lg:text-6xl font-black tracking-tight text-slate-950">
                                What Do We Supply?
                            </h2>

                            <Link
                                to="/enquiry"
                                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all"
                            >
                                Enquire For Custom Quote
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[300px_1fr] gap-8">
                        {/* Sidebar */}
                        <aside className="space-y-6">
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-black text-slate-950 mb-6">
                                    Product Categories
                                </h3>

                                <div className="space-y-3">
                                    {categories.map((category) => {
                                        const Icon = categoryIcons[category] || Monitor;

                                        return (
                                            <button
                                                key={category}
                                                type="button"
                                                className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl font-bold text-sm transition-all text-left ${category === "All Products"
                                                        ? "bg-blue-600 text-white shadow-lg"
                                                        : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                                                    }`}
                                            >
                                                <Icon size={18} />
                                                <span>{category}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="bg-slate-950 text-white rounded-3xl p-8 shadow-xl">
                                <ShieldCheck size={40} className="text-blue-400 mb-6" />
                                <h3 className="text-3xl font-black leading-tight mb-4">
                                    Reliable IT Supply Partner
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Enterprise-grade accessories, competitive pricing, and dependable
                                    delivery for your business needs.
                                </p>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div>
                            <div className="bg-white border border-slate-200 rounded-3xl px-6 py-5 mb-8 shadow-sm">
                                <p className="text-slate-600 font-medium">
                                    Showing <span className="font-black">12</span> products in All
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {productsData.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SiteFooter />
        </div>
    );
}

export default ComputerAccessories;