import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Leaf,
  Users2,
  CheckCircle2,
  ArrowRight,
  Award,
  Globe2,
  BriefcaseBusiness,
  Sparkles,
  Target,
  Zap,
  Building2,
  Truck,
  Clock3,
  PackageCheck,
} from "lucide-react";

const About = () => {

  const coreValues = [
    {
      title: "Quality & Reliability",
      desc: "We deliver durable housekeeping, pantry and stationery solutions designed for modern workplaces and corporate environments.",
      icon: <Award size={30} />,
    },

    {
      title: "Integrity & Honesty",
      desc: "Transparent pricing, ethical sourcing and long-term business relationships are the foundation of IGS Group.",
      icon: <ShieldCheck size={30} />,
    },

    {
      title: "Environmental Responsibility",
      desc: "We prioritize eco-conscious products and sustainable sourcing practices for a cleaner and safer tomorrow.",
      icon: <Leaf size={30} />,
    },

    {
      title: "Customer First",
      desc: "We actively understand client needs and provide quick procurement support with professional responsiveness.",
      icon: <Users2 size={30} />,
    },

    {
      title: "Safety & Hygiene",
      desc: "Our products follow high sanitation and workplace safety standards to ensure healthy environments.",
      icon: <CheckCircle2 size={30} />,
    },

    {
      title: "Fast Supply Network",
      desc: "Strong delivery and sourcing operations across Noida & NCR help businesses stay stocked and operational.",
      icon: <Truck size={30} />,
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden pt-20">

      {/* HERO SECTION */}
      <section className="relative bg-[#050816] overflow-hidden px-6 lg:px-20 py-24">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600"
            alt="bg"
            className="w-full h-full object-cover opacity-[0.06]"
          />
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="max-w-[1500px] mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div className="pt-8">

            <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.25em] font-black mb-8">
              <Sparkles size={14} />
              About IGS Group
            </div>

            <h1 className="text-5xl md:text-[90px] font-black leading-[0.92] tracking-[-4px] text-white mb-8">
              Building Better <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
                Workspaces
              </span>

              <br />

              Across NCR
            </h1>

            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-10">
              IGS Group is a growing startup focused on
              simplifying housekeeping, pantry and office
              procurement for modern businesses. We help
              offices, institutions and commercial spaces
              maintain clean, productive and fully equipped
              work environments with reliable sourcing and
              professional service.
            </p>

            <div className="flex flex-wrap gap-5 mb-14">

              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-white hover:text-black transition-all text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl flex items-center gap-3 shadow-2xl shadow-blue-500/20"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                className="border border-white/10 hover:bg-white hover:text-black transition-all text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl"
              >
                Explore Products
              </Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

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

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200"
                alt="Cleaning"
                className="w-full h-[700px] object-cover"
              />

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 bg-white rounded-[2rem] shadow-2xl p-8 w-[320px] z-20">

              <div className="flex items-center gap-4 mb-5">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <PackageCheck size={28} />
                </div>

                <div>
                  <h4 className="text-xl font-black text-slate-950">
                    Trusted Supply
                  </h4>

                  <p className="text-slate-500 text-sm">
                    Reliable sourcing for businesses
                  </p>
                </div>

              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">
                    Product Availability
                  </span>

                  <span className="font-black text-slate-950">
                    98%
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-blue-600 rounded-full"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* COMPANY STORY */}
      <section className="py-24 px-6 lg:px-20 bg-white">

        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* IMAGE */}
          <div className="relative">

            <div className="rounded-[3rem] overflow-hidden shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200"
                alt="Office Team"
                className="w-full h-[650px] object-cover"
              />

            </div>

            <div className="absolute -bottom-10 -right-10 bg-[#001e3d] w-64 h-64 rounded-[3rem] -z-10"></div>

          </div>

          {/* CONTENT */}
          <div className="pt-10">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-[3px] bg-blue-600"></div>

              <span className="text-blue-600 uppercase tracking-[0.25em] font-black text-xs">
                Our Journey
              </span>

            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[1] tracking-[-3px] text-slate-950 mb-10">
              A Startup Focused On Smart Procurement
            </h2>

            <div className="space-y-8 text-slate-600 text-lg leading-relaxed">

              <p>
                IGS Group started with a simple vision —
                help businesses manage housekeeping,
                hygiene and office procurement through one
                reliable partner.
              </p>

              <p>
                We understand how difficult it can be for
                companies to coordinate multiple vendors for
                pantry items, cleaning chemicals,
                stationery, safety products and daily office
                essentials. Our goal is to simplify this
                process through dependable sourcing and
                professional support.
              </p>

              <p>
                As a growing startup, we are focused on
                building long-term client relationships,
                ensuring quality consistency and creating a
                modern procurement experience for offices
                across Noida and Delhi NCR.
              </p>

            </div>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-8 mt-14">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock3 size={24} />
                </div>

                <div>
                  <h4 className="text-xl font-black text-slate-950 mb-2">
                    Fast Response
                  </h4>

                  <p className="text-slate-500 leading-relaxed">
                    Quick quotation and procurement support
                    for urgent requirements.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <Building2 size={24} />
                </div>

                <div>
                  <h4 className="text-xl font-black text-slate-950 mb-2">
                    Corporate Supply
                  </h4>

                  <p className="text-slate-500 leading-relaxed">
                    Supporting offices, institutions and
                    commercial spaces across NCR.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 py-24 px-6 lg:px-20 border-y border-slate-100">

        <div className="max-w-[1500px] mx-auto">

          <div className="mb-20 text-left">

            <span className="text-blue-600 uppercase tracking-[0.25em] font-black text-xs">
              Core Values
            </span>

            <h2 className="text-5xl md:text-7xl font-black tracking-[-3px] leading-[1] text-slate-950 mt-6 mb-8">
              Values That Drive Our Business
            </h2>

            <p className="text-slate-500 text-xl leading-relaxed max-w-4xl">
              We believe strong business relationships are
              built on consistency, transparency and
              service excellence. These values define the
              way we work every day.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {coreValues.map((item, i) => (

              <div
                key={i}
                className="bg-white rounded-[2.5rem] p-10 border border-slate-200 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 group"
              >

                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-950 mb-5">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-base leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* VISION + MISSION */}
      <section className="py-24 px-6 lg:px-20 bg-white">

        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div className="space-y-12 pt-10">

            <div>

              <Target
                className="text-blue-600 mb-5"
                size={42}
              />

              <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] text-slate-950 mb-6">
                Our Vision
              </h2>

              <p className="text-slate-600 text-xl leading-relaxed">
                To become the most dependable procurement
                and facility support partner for modern
                workplaces by combining smart sourcing,
                professional service and scalable supply
                operations.
              </p>

            </div>

            <div className="w-full h-[1px] bg-slate-100"></div>

            <div>

              <BriefcaseBusiness
                className="text-blue-600 mb-5"
                size={42}
              />

              <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] text-slate-950 mb-6">
                Our Mission
              </h2>

              <p className="text-slate-600 text-xl leading-relaxed">
                We aim to simplify housekeeping, pantry and
                office supply procurement through reliable
                delivery, transparent business practices and
                a customer-first approach.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
                alt="Team"
                className="w-full h-[700px] object-cover"
              />

            </div>

            <div className="absolute -bottom-10 -left-10 bg-slate-950 w-full h-full rounded-[3rem] -z-10"></div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24 px-6 lg:px-20 bg-white">

        <div className="max-w-[1500px] mx-auto bg-[#050816] rounded-[4rem] overflow-hidden relative p-14 lg:p-24">

          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">

            <div className="max-w-3xl">

              <span className="text-blue-400 uppercase tracking-[0.25em] font-black text-xs">
                Let’s Build Together
              </span>

              <h2 className="text-5xl md:text-7xl font-black tracking-[-3px] leading-[1] text-white mt-6 mb-8">
                Ready To Simplify Your Workplace Procurement?
              </h2>

              <p className="text-slate-400 text-xl leading-relaxed">
                Partner with IGS Group for reliable
                housekeeping, pantry and office supply
                solutions tailored for growing businesses.
              </p>

            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-4 bg-blue-600 hover:bg-white hover:text-black transition-all text-white font-black uppercase tracking-widest text-xs px-12 py-6 rounded-2xl shadow-2xl"
            >
              Start Partnership
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;