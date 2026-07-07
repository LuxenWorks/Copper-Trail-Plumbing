/**
 * COPPER TRAIL PLUMBING — Water Heater Service Page
 * Desert Craftsman Theme | Target: "water heater repair Mesa AZ"
 * Style: Photography-forward, copper pipe motifs, problem→solution→CTA rhythm
 */

import { Link } from "wouter";
import { Phone, CheckCircle, Flame, Clock, Shield, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

// Copper pipe trail SVG motif
function CopperPipeDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="h-0.5 w-8 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="4" stroke="oklch(0.62 0.12 55)" strokeWidth="2" fill="none"/>
        <line x1="0" y1="10" x2="6" y2="10" stroke="oklch(0.62 0.12 55)" strokeWidth="2"/>
        <line x1="14" y1="10" x2="20" y2="10" stroke="oklch(0.62 0.12 55)" strokeWidth="2"/>
      </svg>
      <div className="h-0.5 flex-1 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.3)" }} />
    </div>
  );
}

export default function WaterHeater() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero — Photography-forward with service image */}
      <section
        className="relative pt-40 pb-0 text-white overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      >
        <div className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
                Mesa, AZ Water Heater Services
              </p>
              <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white leading-tight mb-5">
                Water Heater<br />
                <span style={{ color: "oklch(0.62 0.12 55)" }}>Repair & Installation</span><br />
                in Mesa
              </h1>
              <CopperPipeDivider />
              <p className="font-['Source_Serif_4'] text-xl text-white/80 mt-4 mb-8">
                Mesa's hard water destroys water heaters faster than anywhere else in the country. 
                We repair, flush, and replace tank and tankless systems — same-day service available.
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
                {["Same-Day Service", "All Brands", "Tank & Tankless", "Licensed & Insured"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-white/70 font-['Inter'] text-sm">
                    <CheckCircle size={13} style={{ color: "oklch(0.62 0.12 55)" }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            {/* Hero image — rises from bottom of section */}
            <div className="relative self-end">
              <img
                src="/images/water_heater.jpg"
                alt="Professional water heater installation in Mesa AZ"
                className="w-full rounded-t-xl shadow-2xl object-cover object-top"
                style={{ maxHeight: "420px" }}
              />
              <div className="absolute inset-0 rounded-t-xl" style={{ background: "linear-gradient(to top, oklch(0.22 0.07 255 / 0.3) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
        {/* Diagonal cut */}
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block" style={{ marginBottom: "-1px" }}>
          <path d="M0,60 L1440,0 L1440,60 Z" fill="oklch(0.99 0.008 75)" />
        </svg>
      </section>

      {/* Problem section — warm sand */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.15)" }}>
                  <AlertTriangle size={16} style={{ color: "oklch(0.62 0.12 55)" }} />
                </div>
                <span className="font-['Inter'] text-xs font-600 uppercase tracking-widest" style={{ color: "oklch(0.62 0.12 55)" }}>The Problem</span>
              </div>
              <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>
                Why Mesa Water Heaters Fail Early
              </h2>
              <CopperPipeDivider />
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mt-4 mb-5" style={{ color: "oklch(0.35 0.005 0)" }}>
                Mesa's water supply runs 12–22 grains per gallon of hardness — officially "very hard." 
                That mineral content settles as sediment at the bottom of your tank, insulating the heating element 
                and forcing it to work harder and longer. The result: higher bills, inconsistent hot water, 
                and a heater that fails years before it should.
              </p>
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
                A standard tank water heater should last 10–12 years. In Mesa, without annual maintenance, 
                many fail in 6–8 years. Annual flushing removes sediment and extends the life of your unit significantly.
              </p>
            </div>
            <div
              className="p-7 rounded-xl border-l-4"
              style={{ backgroundColor: "oklch(0.96 0.015 75)", borderLeftColor: "oklch(0.62 0.12 55)" }}
            >
              <h3 className="font-['Oswald'] font-700 text-2xl mb-5" style={{ color: "oklch(0.22 0.07 255)" }}>
                Signs Your Water Heater Needs Service
              </h3>
              <ul className="space-y-3">
                {[
                  "Running out of hot water faster than usual",
                  "Popping, rumbling, or banging sounds from the tank",
                  "Rusty or discolored water from hot taps",
                  "Water pooling around the base of the unit",
                  "Your unit is over 10 years old",
                  "Pilot light keeps going out (gas units)",
                  "Inconsistent water temperature",
                  "Significantly higher energy bills",
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

      {/* Solution — Navy authority panel */}
      <section className="py-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="font-['Inter'] text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Our Solution
            </p>
            <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl text-white">
              Tank vs. Tankless: Which Is Right for Your Mesa Home?
            </h2>
            <CopperPipeDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Tank Water Heaters",
                img: "/images/water_heater.jpg",
                pros: ["Lower upfront cost", "Simple installation", "Works during power outages (gas)", "Familiar technology"],
                cons: ["Standby heat loss", "Shorter lifespan in hard water", "Limited hot water supply"],
                best: "Best for: Budget-conscious homeowners or smaller households",
              },
              {
                title: "Tankless Water Heaters",
                img: "/images/repiping.jpg",
                pros: ["Endless hot water", "Energy efficient", "Longer lifespan (20+ years)", "Space saving"],
                cons: ["Higher upfront cost", "May need gas line upgrade", "Requires water softener in Mesa"],
                best: "Best for: Larger families or homeowners planning to stay long-term",
              },
            ].map((option) => (
              <div
                key={option.title}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: "oklch(0.28 0.07 255)" }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={option.img} alt={option.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.22 0.07 255 / 0.8), transparent)" }} />
                  <h3 className="absolute bottom-3 left-4 font-['Oswald'] font-700 text-xl text-white">{option.title}</h3>
                </div>
                <div className="p-5">
                  <div className="space-y-1 mb-4">
                    {option.pros.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-sm font-['Inter'] text-white/80">
                        <span style={{ color: "oklch(0.62 0.12 55)" }}>✓</span> {p}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1 mb-4">
                    {option.cons.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm font-['Inter'] text-white/50">
                        <span>–</span> {c}
                      </div>
                    ))}
                  </div>
                  <p className="font-['Inter'] text-xs font-600 uppercase tracking-wide" style={{ color: "oklch(0.62 0.12 55)" }}>
                    {option.best}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="font-['Source_Serif_4'] text-white/70 text-lg mb-6">
              Not sure which is right for your home? We'll give you an honest recommendation — no upselling.
            </p>
            <a href={PHONE_HREF} className="btn-copper rounded inline-flex items-center gap-2 text-lg">
              <Phone size={20} /> Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Services list — warm sand */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="font-['Inter'] text-xs font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
                Full Service List
              </p>
              <h2 className="font-['Oswald'] font-700 text-3xl mb-2" style={{ color: "oklch(0.22 0.07 255)" }}>
                Everything We Do for Water Heaters
              </h2>
              <CopperPipeDivider />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Water heater repair (all brands)",
                  "Tank water heater installation",
                  "Tankless water heater installation",
                  "Annual flush & sediment removal",
                  "Anode rod inspection & replacement",
                  "Pressure relief valve service",
                  "Expansion tank installation",
                  "Gas line connections & upgrades",
                  "Electric water heater service",
                  "Heat pump water heater install",
                  "Water heater relocation",
                  "Emergency water heater service",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <CheckCircle size={15} style={{ color: "oklch(0.62 0.12 55)" }} />
                    <span className="font-['Inter'] text-sm" style={{ color: "oklch(0.35 0.005 0)" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-5">
              <div className="p-6 rounded-xl text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} style={{ color: "oklch(0.62 0.12 55)" }} />
                  <span className="font-['Oswald'] font-600 text-lg text-white">Same-Day Available</span>
                </div>
                <p className="font-['Source_Serif_4'] text-white/80 text-sm mb-5">
                  Most water heater repairs and replacements can be completed the same day you call. 
                  We carry parts for common brands on our trucks.
                </p>
                <a href={PHONE_HREF} className="btn-copper rounded flex items-center justify-center gap-2 w-full">
                  <Phone size={16} /> {PHONE}
                </a>
              </div>

              <div className="p-6 rounded-xl bg-white border" style={{ borderColor: "oklch(0.88 0.01 75)" }}>
                <h3 className="font-['Oswald'] font-600 text-lg mb-3" style={{ color: "oklch(0.22 0.07 255)" }}>
                  Brands We Service
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Rheem", "Bradford White", "A.O. Smith", "State", "Navien", "Rinnai", "Noritz", "Bosch"].map((brand) => (
                    <span
                      key={brand}
                      className="px-2.5 py-1 rounded font-['Inter'] text-xs font-500"
                      style={{ backgroundColor: "oklch(0.96 0.015 75)", color: "oklch(0.35 0.005 0)" }}
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl border-l-4" style={{ backgroundColor: "white", borderLeftColor: "oklch(0.62 0.12 55)" }}>
                <p className="font-['Source_Serif_4'] text-base italic" style={{ color: "oklch(0.35 0.005 0)" }}>
                  "Our water heater failed on a Saturday morning. Copper Trail had a new one installed by 2pm. 
                  Fair price, clean work."
                </p>
                <p className="font-['Inter'] text-xs mt-2 font-600" style={{ color: "oklch(0.62 0.12 55)" }}>
                  — Mesa homeowner, Dobson Ranch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: "oklch(0.62 0.12 55)" }}>
        <div className="container">
          <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-3">
            Water Heater Problem? We Fix It Today.
          </h2>
          <p className="font-['Source_Serif_4'] text-xl text-white/90 mb-7 max-w-xl mx-auto">
            Same-day service available throughout Mesa. Call now and we'll give you a straight answer and a fair price.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white font-['Oswald'] font-700 text-xl px-8 py-4 rounded transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] shadow-lg"
            style={{ color: "oklch(0.22 0.07 255)" }}
          >
            <Phone size={22} />
            {PHONE}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
