import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Package,
  PenTool,
  FileText,
  ClipboardList,
  FolderOpen,
  Printer,
  BookOpen,
} from "lucide-react";
import SiteFooter from "../components/SiteFooter";

const categories = [
  "All Products",
  "Writing Instruments",
  "Paper Products",
  "Office Files",
  "Registers & Notebooks",
  "Desk Essentials",
  "Printer Supplies",
];

const categoryIcons = {
  "All Products": Package,
  "Writing Instruments": PenTool,
  "Paper Products": FileText,
  "Office Files": FolderOpen,
  "Registers & Notebooks": BookOpen,
  "Desk Essentials": ClipboardList,
  "Printer Supplies": Printer,
};

const productsData = [
  {
    name: "Ball Pen Pack",
    category: "Writing Instruments",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "A4 Copier Paper",
    category: "Paper Products",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lever Arch Files",
    category: "Office Files",
    image:
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Executive Register",
    category: "Registers & Notebooks",
    image:
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Stapler & Pins",
    category: "Desk Essentials",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Toner Cartridge",
    category: "Printer Supplies",
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Highlighter Set",
    category: "Writing Instruments",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sticky Notes",
    category: "Desk Essentials",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
  },
];

function ProductCard({ product }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
          Wholesale
        </span>
      </div>

      <div className="p-6">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-600 mb-3">
          {product.category}
        </p>

        <h3 className="text-2xl font-black text-slate-950 mb-6 leading-tight">
          {product.name}
        </h3>

        <Link
          to="/enquiry"
          className="block text-center bg-slate-950 hover:bg-blue-600 text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
}

function Stationery() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="px-6 lg:px-10 xl:px-16 pt-10 pb-16">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-slate-950 text-white p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 rounded-full px-5 py-2 mb-8 w-fit">
                <Package size={14} className="text-blue-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-300">
                  Corporate Office Supply Partner
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tight mb-8">
                OFFICE
                <br />
                <span className="text-blue-500">STATIONERY</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Premium office stationery, paper products, writing instruments,
                printer consumables, and desk essentials for corporates,
                institutions, and commercial businesses.
              </p>

              <Link
                to="/enquiry"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all w-fit"
              >
                Get Bulk Pricing
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80"
                alt="Office Stationery"
                className="w-full h-full min-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 lg:px-10 xl:px-16 pb-20">
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
                    const Icon = categoryIcons[category] || Package;

                    return (
                      <button
                        key={category}
                        type="button"
                        className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl font-bold text-sm transition-all text-left ${
                          category === "All Products"
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
                  Reliable Office Supply Partner
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Premium stationery, competitive pricing, and dependable
                  delivery for all your corporate requirements.
                </p>
              </div>
            </aside>

            {/* Products Grid */}
            <div>
              <div className="bg-white border border-slate-200 rounded-3xl px-6 py-5 mb-8 shadow-sm">
                <p className="text-slate-600 font-medium">
                  Showing <span className="font-black">8</span> products in All
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

export default Stationery;
