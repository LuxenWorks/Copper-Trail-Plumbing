/**
 * COPPER TRAIL PLUMBING — About Page
 * Desert Craftsman Theme | Target: "plumber Mesa AZ about"
 */

import { Link } from "wouter";
import { Phone, CheckCircle, Award, Users, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-20 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="font-['Inter'] text-sm font-600 uppercase tracking-widest mb-3" style={{ color: "oklch(0.62 0.12 55)" }}>
              Our Story
            </p>
            <h1 className="font-['Oswald'] font-700 text-5xl md:text-6xl text-white mb-5">
              About Copper Trail Plumbing
            </h1>
            <p className="font-['Source_Serif_4'] text-xl text-white/80">
              Mesa's plumber since 2010. We built this company because we believed Mesa homeowners deserved better — 
              honest pricing, reliable service, and a plumber who actually shows up on time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.008 75)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                Why We Started Copper Trail
              </h2>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-5" style={{ color: "oklch(0.35 0.005 0)" }}>
                The name Copper Trail Plumbing comes from two things: the copper pipes that run through every home in the East Valley, 
                and the trail of honest work we leave behind in every neighborhood we serve.
              </p>
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-5" style={{ color: "oklch(0.35 0.005 0)" }}>
                We started this company in 2010 after years of watching homeowners get overcharged and underserved by plumbers 
                who treated Mesa like a quick-money market. We knew Mesa's plumbing challenges — the hard water, the clay soils, 
                the summer heat — better than anyone. We decided to build a company that actually served this community.
              </p>
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed" style={{ color: "oklch(0.35 0.005 0)" }}>
                Today, we've served over a thousand Mesa families. We know the neighborhoods — Dobson Ranch, Red Mountain, 
                Eastmark, Superstition Springs, Las Sendas. We know the homes built in the 1970s with galvanized pipes, 
                the 1990s subdivisions with early copper that's starting to fail, and the newer homes where hard water 
                is already taking its toll on water heaters.
              </p>
            </div>
            <div>
              <img
                src="/images/team_truck.jpg"
                alt="Copper Trail Plumbing truck in Mesa AZ neighborhood"
                className="w-full rounded-xl shadow-2xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl" style={{ color: "oklch(0.22 0.07 255)" }}>
                How We Do Business
              </h2>
              <div className="w-12 h-1 mt-4 rounded mx-auto" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Honest Pricing",
                  desc: "We give you the price before we start. No diagnostic fees that vanish into the bill. No surprise charges when the job is done. What we quote is what you pay.",
                },
                {
                  icon: Users,
                  title: "Respect for Your Home",
                  desc: "We wear shoe covers, lay drop cloths, and clean up completely before we leave. We treat your home the way we'd want ours treated.",
                },
                {
                  icon: MapPin,
                  title: "Local Expertise",
                  desc: "We live and work in Mesa. We know the water, the soil, the homes. That local knowledge means faster diagnosis and better repairs.",
                },
              ].map((value) => (
                <div key={value.title} className="p-7 rounded-xl" style={{ backgroundColor: "oklch(0.96 0.015 75)" }}>
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: "oklch(0.62 0.12 55 / 0.15)" }}
                  >
                    <value.icon size={22} style={{ color: "oklch(0.62 0.12 55)" }} />
                  </div>
                  <h3 className="font-['Oswald'] font-700 text-xl mb-3" style={{ color: "oklch(0.22 0.07 255)" }}>
                    {value.title}
                  </h3>
                  <p className="font-['Source_Serif_4'] text-base leading-relaxed" style={{ color: "oklch(0.45 0.005 0)" }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/repiping.jpg"
                alt="Licensed plumber working on copper pipes in Mesa AZ"
                className="w-full rounded-xl shadow-xl object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            <div>
              <h2 className="font-['Oswald'] font-700 text-3xl md:text-4xl mb-4" style={{ color: "oklch(0.22 0.07 255)" }}>
                Licensed, Insured & Accountable
              </h2>
              <div className="w-12 h-1 mb-6 rounded" style={{ backgroundColor: "oklch(0.62 0.12 55)" }} />
              <p className="font-['Source_Serif_4'] text-lg leading-relaxed mb-6" style={{ color: "oklch(0.35 0.005 0)" }}>
                Every technician we send to your home is background-checked, drug-tested, and trained to Arizona state standards. 
                We carry full liability insurance and worker's compensation — protecting your home and our team on every job.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Licensed plumbing contractor in Arizona",
                  "Fully insured — liability & worker's comp",
                  "Background-checked technicians",
                  "Ongoing training & certification",
                  "Satisfaction guarantee on all work",
                  "Permits pulled when required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: "oklch(0.62 0.12 55)" }} />
                    <span className="font-['Source_Serif_4'] text-base" style={{ color: "oklch(0.35 0.005 0)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={PHONE_HREF} className="btn-copper rounded inline-flex items-center gap-2">
                <Phone size={18} /> Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 text-white" style={{ backgroundColor: "oklch(0.22 0.07 255)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "2010", label: "Year Founded" },
              { num: "1,000+", label: "Mesa Homes Served" },
              { num: "15+", label: "Years Experience" },
              { num: "5★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-['Oswald'] font-700 text-4xl mb-2" style={{ color: "oklch(0.62 0.12 55)" }}>
                  {stat.num}
                </div>
                <div className="font-['Inter'] text-sm uppercase tracking-wide text-white/70">
                  {stat.label}
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
