/**
 * COPPER TRAIL PLUMBING — Home Page
 * Desert Craftsman Theme: Copper #B87333, Navy #1A2744, Warm Sand #F5EFE6
 * Target keyword: "Plumber Mesa AZ"
 * Structure: Hero → Trust Bar → Services → About Snippet → Why Us → FAQ → CTA
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle, Star, Wrench, Droplets, Flame, Shield, Clock, Award, ChevronDown, ChevronUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

const services = [
  {
    icon: Flame,
    title: "Water Heater Services",
    desc: "Mesa's hard water destroys water heaters fast. We repair, replace, and install tank and tankless systems. Same-day service available.",
    href: "/services/water-heater",
    img: "/images/water_heater.jpg",
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    desc: "Slow drains and stubborn clogs cleared with professional-grade equipment. We don't just push the clog down — we clear it completely.",
    href: "/services/drain-cleaning",
    img: "/images/drain_cleaning.jpg",
  },
  {
    icon: Shield,
    title: "Slab Leak Detection",
    desc: "Shifting clay soils crack copper lines under your slab. We use electronic detection equipment to find leaks without tearing up your floor.",
    href: "/services/slab-leak-detection",
    img: "/images/slab_leak.jpg",
  },
  {
    icon: Wrench,
    title: "Repiping",
    desc: "Old galvanized or failing pipes replaced with durable copper or PEX. We repipe whole homes with minimal disruption.",
    href: "/services/repiping",
    img: "/images/repiping.jpg",
  },
  {
    icon: Droplets,
    title: "Water Treatment",
    desc: "Mesa water runs 12–22 grains per gallon of hardness. We install whole-house softeners and filtration systems that protect your pipes and appliances.",
    href: "/services/water-treatment",
    img: "/images/water_softener.jpg",
  },
  {
    icon: Wrench,
    title: "Toilet & Fixture Repair",
    desc: "Running toilets, dripping faucets, and broken fixtures fixed right. We carry common parts on the truck so most repairs are done in one visit.",
    href: "/services",
    img: "/images/toilet_repair.jpg",
  },
];

const faqs = [
  {
    q: "How quickly can you get to my home in Mesa?",
    a: "For most calls in Mesa, we arrive within 2–4 hours. Emergency calls — burst pipes, no hot water, flooding — get priority same-day response. We serve all Mesa zip codes including 85201, 85202, 85203, 85204, 85205, 85206, 85207, 85208, 85209, 85210, 85212, 85213, 85215.",
  },
  {
    q: "Why does my water heater keep running out of hot water?",
    a: "In Mesa, sediment from hard water builds up at the bottom of the tank and insulates the heating element. The heater works harder and heats less water. Annual flushing helps, but if your unit is over 10 years old, replacement is often more cost-effective. We'll give you an honest assessment.",
  },
  {
    q: "What are signs I have a slab leak?",
    a: "Watch for warm spots on your floor, the sound of running water when nothing is on, unexplained spikes in your water bill, or cracks in your flooring or walls. Mesa's expansive clay soils shift with temperature changes and monsoons, putting constant stress on pipes embedded in concrete.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. We provide free estimates on most plumbing work. For diagnostic calls (finding a leak, inspecting a sewer line), there may be a service fee that gets credited toward the repair if you proceed with us.",
  },
  {
    q: "Are you licensed and insured in Arizona?",
    a: "Yes. Copper Trail Plumbing is fully licensed and insured in the state of Arizona. We carry both liability insurance and worker's compensation to protect your home and our team.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "oklch(0.88 0.01 75)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center py-5 gap-4">
        <h3 className="font-['Oswald'] font-600 text-lg" style={{ color: "oklch(0.22 0.07 255)" }}>
          {q}
        </h3>
        {open ? (
          <ChevronUp size={20} className="shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
        ) : (
          <ChevronDown size={20} className="shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
        )}
      </div>
      {open && (
        <p className="font-['Source_Serif_4'] text-base pb-5 leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
          {a}
        </p>
      )}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  const servicesSec = useInView();
  const whySec = useInView();
  const faqSec = useInView();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Professional plumber working in Mesa AZ home"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.22 0.07 255 / 0.88) 0%, oklch(0.22 0.07 255 / 0.55) 60%, transparent 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative container pt-40 pb-24 lg:pt-48 lg:pb-32">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-['Inter'] font-600 uppercase tracking-widest mb-6 slide-in-left"
              style={{ backgroundColor: "oklch(0.62 0.12 55)", color: "white" }}
            >
              <Star size={12} fill="white" />
              Mesa's Trusted Plumber
            </div>

            <h1
              className="font-['Oswald'] font-700 text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              Your Pipes.<br />
              <span style={{ color: "oklch(0.62 0.12 55)" }}>Our Problem.</span><br />
              Fixed Today.
            </h1>

            <p
              className="font-['Source_Serif_4'] text-white/85 text-xl leading-relaxed mb-8 slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              Copper Trail Plumbing serves Mesa, AZ homeowners with fast, honest plumbing repairs. 
              We've helped over a thousand East Valley families since 2010 — no runaround, no surprise charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 slide-in-left" style={{ animationDelay: "0.3s" }}>
              <a
                href={PHONE_HREF}
                className="btn-copper rounded flex items-center justify-center gap-3 text-lg"
              >
                <Phone size={20} />
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded font-['Oswald'] font-600 text-lg uppercase tracking-wide text-white border-2 border-white/40 hover:border-white/80 transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-5 mt-10 slide-in-left" style={{ animationDelay: "0.4s" }}>
              {["Licensed & Insured", "24/7 Emergency", "Upfront Pricing", "Same-Day Service"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/80 font-['Inter'] text-sm">
                  <CheckCircle size={14} style={{ color: "oklch(0.62 0.12 55)" }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,80 L1440,20 L1440,80 Z" fill="oklch(0.99 0.008 75)" />
          </svg>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-10" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "1,000+", label: "Mesa Homes Served" },
              { num: "15+", label: "Years in the Valley" },
              { num: "24/7", label: "Emergency Service" },
              { num: "5★", label: "Google Rating" },
            ].map((stat, i) => (
              <div key={i} className="fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                <div
                  className="font-['Oswald'] font-700 text-4xl mb-1"
                  style={{ color: "oklch(0.62 0.12 55)" }}
                >
                  {stat.num}
                </div>
                <div className="font-['Inter'] text-sm font-500 uppercase tracking-wide" style={{ color: "oklch(0.45 0.005 0)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        ref={servicesSec.ref}
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.96 0.015 75)" }}
      >
        <div className="container">
          <div className="mb-14">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              What We Fix
            </p>
            <h2 className="font-['Oswald'] font-700 text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.07 255)" }}>
              Plumbing Services in Mesa, AZ
            </h2>
            <div className="w-16 h-1 mt-4 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.href + i}
                href={svc.href}
                className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${servicesSec.inView ? `fade-up fade-up-delay-${i + 1}` : "opacity-0"}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div
                    className="absolute bottom-3 left-3 p-2 rounded"
                    style={{ backgroundColor: "oklch(0.62 0.12 55)" }}
                  >
                    <svc.icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="font-['Oswald'] font-600 text-xl mb-2 group-hover:text-[oklch(0.62_0.12_55)] transition-colors"
                    style={{ color: "oklch(0.22 0.07 255)" }}
                  >
                    {svc.title}
                  </h3>
                  <p className="font-['Source_Serif_4'] text-sm leading-relaxed" style={{ color: "oklch(0.45 0.005 0)" }}>
                    {svc.desc}
                  </p>
                  <div
                    className="mt-4 font-['Inter'] text-xs font-600 uppercase tracking-wide flex items-center gap-1"
                    style={{ color: "oklch(0.62 0.12 55)" }}
                  >
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
                About Us
              </p>
              <h2 className="font-['Oswald'] font-700 text-4xl md:text-5xl mb-6" style={{ color: "oklch(0.22 0.07 255)" }}>
                Mesa's Plumber Since 2010
              </h2>
              <div className="w-16 h-1 mb-8 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-5" style={{ color: "oklch(0.35 0.005 0)" }}>
                We started Copper Trail Plumbing because we were tired of seeing Mesa homeowners get overcharged and underserved. 
                The name comes from the copper pipes that run through every home in this valley — and the trail of honest work we leave behind.
              </p>
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-8" style={{ color: "oklch(0.35 0.005 0)" }}>
                We know Mesa's plumbing challenges better than anyone. The hard water that runs 12–22 grains per gallon. 
                The clay soils that crack slab pipes. The summer heat that pushes water heaters past their limits. 
                We've fixed all of it, in every neighborhood from Dobson Ranch to Red Mountain.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Licensed & Insured in AZ",
                  "Upfront, flat-rate pricing",
                  "No overtime charges",
                  "Background-checked techs",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
                    <span className="font-['Inter'] text-sm" style={{ color: "oklch(0.35 0.005 0)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-copper rounded inline-flex items-center gap-2">
                Our Story →
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/team_truck.jpg"
                alt="Copper Trail Plumbing service truck in Mesa AZ"
                className="w-full rounded-xl shadow-2xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div
                className="absolute -bottom-5 -left-5 p-5 rounded-xl shadow-xl"
                style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
              >
                <div className="font-['Oswald'] font-700 text-3xl text-white">15+</div>
                <div className="font-['Inter'] text-xs text-white/70 uppercase tracking-wide">Years Serving Mesa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section
        ref={whySec.ref}
        className="py-20 md:py-28 text-white"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      >
        <div className="container">
          <div className="text-center mb-14">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Why Choose Us
            </p>
            <h2 className="font-['Oswald'] font-700 text-4xl md:text-5xl text-white">
              The Copper Trail Difference
            </h2>
            <div className="w-16 h-1 mt-4 rounded mx-auto" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "We Show Up On Time",
                desc: "We give you a 2-hour arrival window and call when we're 30 minutes out. Your time matters.",
              },
              {
                icon: Shield,
                title: "Upfront Pricing",
                desc: "You get the price before we start. No surprise charges at the end. No 'diagnostic fees' that disappear into the bill.",
              },
              {
                icon: Award,
                title: "We Fix It Right",
                desc: "We don't patch problems — we fix the root cause. Our work is backed by a satisfaction guarantee.",
              },
              {
                icon: Phone,
                title: "Real People Answer",
                desc: "Call us at any hour and a real person picks up. No voicemail maze, no callback queue for emergencies.",
              },
              {
                icon: Wrench,
                title: "Local Mesa Expertise",
                desc: "We know Mesa's water hardness, soil conditions, and the plumbing quirks of homes built in every decade from the 1960s to today.",
              },
              {
                icon: CheckCircle,
                title: "Clean Work, Clean Home",
                desc: "We wear shoe covers, lay drop cloths, and clean up completely before we leave. Your home stays your home.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl ${whySec.inView ? `fade-up fade-up-delay-${i + 1}` : "opacity-0"}`}
                style={{ backgroundColor: "oklch(0.28 0.07 255)" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.2)" }}
                >
                  <item.icon size={22} style={{ color: "oklch(0.62 0.12 55)" }} />
                </div>
                <h3 className="font-['Oswald'] font-600 text-xl text-white mb-2">{item.title}</h3>
                <p className="font-['Source_Serif_4'] text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl" style={{ color: "oklch(0.22 0.07 255)" }}>
              Serving All of Mesa & the East Valley
            </h2>
            <p className="font-['Source_Serif_4'] text-lg mt-3" style={{ color: "oklch(0.45 0.005 0)" }}>
              We cover every Mesa neighborhood plus nearby Gilbert, Chandler, and Tempe.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Mesa 85201", "Mesa 85202", "Mesa 85203", "Mesa 85204", "Mesa 85205",
              "Mesa 85206", "Mesa 85207", "Mesa 85208", "Mesa 85209", "Mesa 85210",
              "Mesa 85212", "Mesa 85213", "Mesa 85215", "Gilbert", "Chandler", "Tempe",
              "Dobson Ranch", "Red Mountain", "Eastmark", "Superstition Springs",
            ].map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 rounded-full font-['Inter'] text-sm font-500"
                style={{ backgroundColor: "white", color: "oklch(0.22 0.07 255)", border: "1px solid oklch(0.88 0.01 75)" }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        ref={faqSec.ref}
        className="py-20 md:py-28"
        style={{ backgroundColor: "oklch(0.99 0.008 75)" }}
      >
        <div className="container max-w-3xl">
          <div className="mb-12">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Common Questions
            </p>
            <h2 className="font-['Oswald'] font-700 text-4xl md:text-5xl" style={{ color: "oklch(0.22 0.07 255)" }}>
              Mesa Plumbing FAQ
            </h2>
            <div className="w-16 h-1 mt-4 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
          </div>
          <div className={faqSec.inView ? "fade-up" : "opacity-0"}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-24 text-white overflow-hidden"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/images/mesa_az_bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container text-center">
          <h2 className="font-['Oswald'] font-700 text-4xl md:text-5xl text-white mb-4">
            Ready to Fix Your Plumbing?
          </h2>
          <p className="font-['Source_Serif_4'] text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Call us now or request a free estimate. We answer 24/7 — even on weekends and holidays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="btn-copper rounded flex items-center justify-center gap-3 text-xl"
            >
              <Phone size={22} />
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded font-['Oswald'] font-600 text-lg uppercase tracking-wide text-white border-2 border-white/40 hover:border-white/80 transition-colors"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
