/**
 * COPPER TRAIL PLUMBING — Drain Cleaning Service Page
 * Desert Craftsman Theme | Photography-forward, copper motifs
 */

import { Phone, CheckCircle, Droplets, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CopperPipeDivider } from "@/components/ServicePageTemplate";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export default function DrainCleaning() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-0 text-white overflow-hidden" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
                Mesa, AZ Drain Services
              </p>
              <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white leading-tight mb-4">
                Drain Cleaning<br />
                <span style={{ color: "oklch(0.62 0.12 55)" }}>Done Right</span><br />
                in Mesa, AZ
              </h1>
              <CopperPipeDivider />
              <p className="font-['Source_Serif_4'] text-xl text-white/80 mt-4 mb-8">
                Slow drains and stubborn clogs cleared fast. We use professional-grade equipment to clear the entire line — not just push the clog further down.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 text-lg">
                  <Phone size={20} /> Call {PHONE}
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-['Oswald'] font-600 text-base uppercase tracking-wide text-white border-2 border-white/30 hover:border-white/70 transition-colors">
                  Free Estimate
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                {["Same-Day Service", "All Drain Types", "Hydro-Jetting", "Sewer Camera"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/70 font-['Inter'] text-sm">
                    <CheckCircle size={13} style={{ color: "oklch(0.62 0.12 55)" }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative self-end">
              <img
                src="/images/drain_cleaning.jpg"
                alt="Professional drain cleaning service in Mesa AZ"
                className="w-full rounded-t-xl shadow-2xl object-cover object-top"
                style={{ maxHeight: "420px" }}
              />
              <div className="absolute inset-0 rounded-t-xl" style={{ background: "linear-gradient(to top, oklch(0.22 0.07 255 / 0.3) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ marginBottom: "-1px" }}>
          <path d="M0,60 L1440,0 L1440,60 Z" fill="oklch(0.99 0.008 75)" />
        </svg>
      </section>

      {/* Problem + Warning signs */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.15)" }}>
                  <AlertTriangle size={16} style={{ color: "oklch(0.62 0.12 55)" }} />
                </div>
                <span className="font-['Inter'] text-xs font-600 uppercase tracking-widest" style={{ color: "oklch(0.62 0.12 55)" }}>Why It Happens</span>
              </div>
              <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>
                Why Mesa Drains Clog So Often
              </h2>
              <CopperPipeDivider />
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mt-4 mb-5" style={{ color: "oklch(0.35 0.005 0)" }}>
                Mesa's hard water leaves mineral deposits inside pipes over time. Combined with kitchen grease, bathroom hair, and soap scum, these deposits narrow the pipe diameter and catch debris. What starts as a slow drain becomes a full blockage faster in Mesa than in softer-water cities.
              </p>
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
                Many homeowners reach for chemical drain cleaners first. These products can temporarily clear a clog, but they don't remove the buildup that caused it — and repeated use damages pipes. A professional drain cleaning removes the entire blockage and leaves the pipe walls clean.
              </p>
            </div>
            <div className="p-7 rounded-xl border-l-4" style={{ backgroundColor: "oklch(0.96 0.015 75)", borderLeftColor: "oklch(0.62 0.12 55)" }}>
              <h3 className="font-['Oswald'] font-700 text-2xl mb-5" style={{ color: "oklch(0.22 0.07 255)" }}>
                Signs You Need Drain Cleaning
              </h3>
              <ul className="space-y-3">
                {[
                  "Water drains slowly in sinks, tubs, or showers",
                  "Gurgling sounds from drains or toilet",
                  "Foul odors coming from drains",
                  "Multiple drains backing up at the same time",
                  "Toilet overflows or backs up frequently",
                  "Water backing up into other fixtures when you flush",
                ].map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
                    <span className="font-['Source_Serif_4'] text-base" style={{ color: "oklch(0.35 0.005 0)" }}>{sign}</span>
                  </li>
                ))}
              </ul>
              <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 mt-6 w-full">
                <Phone size={16} /> Call Now — Same-Day Available
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Methods — Navy */}
      <section className="py-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-['Inter'] text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>Our Methods</p>
            <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl text-white">
              Professional Drain Cleaning Equipment
            </h2>
            <CopperPipeDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Droplets, title: "Drain Snaking", desc: "A motorized auger breaks through and removes clogs in kitchen sinks, bathroom drains, and toilets. Best for standard blockages." },
              { icon: Droplets, title: "Hydro-Jetting", desc: "High-pressure water (up to 4,000 PSI) blasts away grease, scale, and roots. Restores pipes to near-original diameter." },
              { icon: Droplets, title: "Sewer Camera", desc: "We send a camera through the line to see exactly what's causing the problem — roots, collapsed pipe, or buildup." },
              { icon: Droplets, title: "Root Removal", desc: "Tree roots invade sewer lines through joints and cracks. We cut and remove roots and assess whether pipe repair is needed." },
            ].map((method) => (
              <div key={method.title} className="p-5 rounded-xl" style={{ backgroundColor: "oklch(0.28 0.07 255)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.2)" }}>
                  <method.icon size={18} style={{ color: "oklch(0.62 0.12 55)" }} />
                </div>
                <h3 className="font-['Oswald'] font-600 text-lg text-white mb-2">{method.title}</h3>
                <p className="font-['Source_Serif_4'] text-sm text-white/70 leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid — sand */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="font-['Inter'] text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>Full Service List</p>
              <h2 className="font-['Oswald'] font-700 text-3xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>We Clear All Drains</h2>
              <CopperPipeDivider />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {["Kitchen sink drains", "Bathroom sink drains", "Shower & tub drains", "Toilet clogs", "Floor drains", "Main sewer line", "Laundry drain lines", "Outdoor drains", "Grease trap cleaning", "Hydro-jetting service", "Sewer camera inspection", "Root intrusion removal"].map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle size={15} style={{ color: "oklch(0.62 0.12 55)" }} />
                    <span className="font-['Inter'] text-sm" style={{ color: "oklch(0.35 0.005 0)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="p-6 rounded-xl text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
                <h3 className="font-['Oswald'] font-700 text-xl mb-3">Drain Clogged?</h3>
                <p className="font-['Source_Serif_4'] text-white/80 text-sm mb-5">We clear drains fast. Same-day service available throughout Mesa.</p>
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 w-full">
                  <Phone size={16} /> {PHONE}
                </a>
              </div>
              <div className="p-5 rounded-xl border-l-4 bg-white" style={{ borderLeftColor: "oklch(0.62 0.12 55)" }}>
                <p className="font-['Source_Serif_4'] text-base italic" style={{ color: "oklch(0.35 0.005 0)" }}>
                  "Kitchen drain completely blocked. They came out the same afternoon, cleared it in 30 minutes. No mess left behind."
                </p>
                <p className="font-['Inter'] text-xs mt-2 font-600" style={{ color: "oklch(0.62 0.12 55)" }}>
                  — Mesa homeowner, Superstition Springs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: "oklch(0.62 0.12 55)" }}>
        <div className="container">
          <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-3">Drain Clogged? We Clear It Today.</h2>
          <p className="font-['Source_Serif_4'] text-xl text-white/90 mb-7 max-w-xl mx-auto">
            Same-day drain cleaning throughout Mesa. Call now for a straight answer and a fair price.
          </p>
          <a href={PHONE_HREF} className="inline-flex items-center gap-3 bg-white font-['Oswald'] font-700 text-xl px-8 py-4 rounded transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] shadow-lg" style={{ color: "oklch(0.22 0.07 255)" }}>
            <Phone size={22} /> {PHONE}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
