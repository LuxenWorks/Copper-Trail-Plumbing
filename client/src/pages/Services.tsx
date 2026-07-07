/**
 * COPPER TRAIL PLUMBING — Services Overview Page
 * Desert Craftsman Theme
 */

import { Link } from "wouter";
import { Phone, Flame, Droplets, Shield, Wrench, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

const services = [
  {
    icon: Flame,
    title: "Water Heater Repair & Installation",
    desc: "Mesa's hard water is brutal on water heaters. Sediment builds up fast, causing noisy operation, inconsistent hot water, and early failure. We repair all brands and install tank and tankless systems. We carry parts for most common units on our trucks, so same-day repair is usually possible.",
    href: "/services/water-heater",
    img: "/images/water_heater.jpg",
    bullets: ["Tank & tankless water heaters", "Same-day repair available", "Annual flush & maintenance", "Energy-efficient upgrades"],
  },
  {
    icon: Droplets,
    title: "Drain Cleaning & Sewer Service",
    desc: "Kitchen grease, bathroom hair, and hard water minerals make drain clogs a constant problem in Mesa homes. We use professional-grade equipment — not just a plunger — to clear the line completely. For serious blockages, our hydro-jetting service blasts away years of buildup.",
    href: "/services/drain-cleaning",
    img: "/images/drain_cleaning.jpg",
    bullets: ["Drain snaking & augering", "Hydro-jetting service", "Sewer camera inspection", "Root intrusion removal"],
  },
  {
    icon: Shield,
    title: "Slab Leak Detection & Repair",
    desc: "Mesa's expansive clay soils shift with every monsoon and temperature swing, putting constant stress on copper pipes embedded in concrete slabs. We use electronic leak detection equipment to pinpoint the problem without tearing up your floor. Early detection saves thousands.",
    href: "/services/slab-leak-detection",
    img: "/images/slab_leak.jpg",
    bullets: ["Electronic leak detection", "Non-invasive diagnosis", "Pipe rerouting options", "Trenchless repair methods"],
  },
  {
    icon: Wrench,
    title: "Repiping Services",
    desc: "Homes built before the 1990s often have galvanized steel pipes that rust from the inside out, reducing water pressure and contaminating your water. We repipe whole homes with durable copper or PEX piping, restoring full water pressure and giving you decades of reliable service.",
    href: "/services/repiping",
    img: "/images/repiping.jpg",
    bullets: ["Whole-home repiping", "Copper & PEX options", "Minimal drywall damage", "Pressure restoration"],
  },
  {
    icon: Droplets,
    title: "Water Treatment & Softeners",
    desc: "Mesa water runs 12–22 grains per gallon of hardness — officially classified as 'very hard.' That mineral buildup destroys water heaters, clogs pipes, and ruins appliances. A whole-house water softener pays for itself in extended appliance life and reduced repair bills.",
    href: "/services/water-treatment",
    img: "/images/water_softener.jpg",
    bullets: ["Whole-house water softeners", "Reverse osmosis systems", "Water filtration", "Scale prevention"],
  },
  {
    icon: Wrench,
    title: "Toilet & Fixture Repair",
    desc: "Running toilets waste hundreds of gallons per month. Dripping faucets add up fast on your water bill. We repair and replace all types of toilets, faucets, showerheads, and fixtures. Most repairs are completed in a single visit because we stock common parts on our trucks.",
    href: "/services",
    img: "/images/toilet_repair.jpg",
    bullets: ["Toilet repair & replacement", "Faucet & fixture repair", "Showerhead installation", "Garbage disposal service"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Page Hero */}
      <section
        className="pt-40 pb-20 text-white"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      >
        <div className="container">
          <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
            Mesa, AZ
          </p>
          <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white mb-4">
            Plumbing Services
          </h1>
          <p className="font-['Source_Serif_4'] text-xl text-white/80 max-w-2xl">
            From water heater repair to whole-home repiping, Copper Trail Plumbing handles every plumbing need for Mesa homeowners.
          </p>
          <a href={PHONE_HREF} className="btn-copper rounded inline-flex items-center gap-2 mt-8">
            <Phone size={18} />
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center"
                      style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.15)" }}
                    >
                      <svc.icon size={20} style={{ color: "oklch(0.62 0.12 55)" }} />
                    </div>
                    <span className="font-['Inter'] text-xs font-600 uppercase tracking-widest" style={{ color: "oklch(0.62 0.12 55)" }}>
                      Service
                    </span>
                  </div>
                  <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                    {svc.title}
                  </h2>
                  <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.005 0)" }}>
                    {svc.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <CheckCircle size={14} style={{ color: "oklch(0.62 0.12 55)" }} />
                        <span className="font-['Inter'] text-sm" style={{ color: "oklch(0.35 0.005 0)" }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link href={svc.href} className="btn-copper rounded inline-flex items-center gap-2 text-sm">
                      Learn More
                    </Link>
                    <a href={PHONE_HREF} className="font-['Oswald'] font-600 text-sm uppercase tracking-wide flex items-center gap-2 hover:opacity-80 transition-opacity" style={{ color: "oklch(0.22 0.07 255)" }}>
                      <Phone size={14} /> Call Now
                    </a>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full rounded-xl shadow-xl object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
