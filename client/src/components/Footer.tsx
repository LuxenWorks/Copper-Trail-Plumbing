/**
 * COPPER TRAIL PLUMBING — Footer Component
 * Desert Craftsman Theme: Deep Navy background, Copper accents
 */

import { Link } from "wouter";
import { Phone, MapPin, Clock, Facebook, Star } from "lucide-react";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.18 0.07 255)" }}>
      {/* CTA Band */}
      <div
        className="py-12 text-white text-center"
        style={{ backgroundColor: "oklch(0.62 0.12 55)" }}
      >
        <div className="container">
          <h2 className="font-['Oswald'] text-3xl md:text-4xl font-bold mb-3">
            Plumbing Problem? We Fix It Today.
          </h2>
          <p className="font-['Source_Serif_4'] text-white/90 text-lg mb-6">
            Mesa's trusted plumber — available 24/7 for emergencies.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-[oklch(0.22_0.07_255)] font-['Oswald'] font-700 text-xl px-8 py-4 rounded transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] shadow-lg"
          >
            <Phone size={22} />
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="/images/logo.png"
            alt="Copper Trail Plumbing"
            className="h-16 w-auto object-contain mb-4"
          />
          <p className="font-['Source_Serif_4'] text-white/70 text-sm leading-relaxed">
            Serving Mesa, AZ homeowners with honest, reliable plumbing since 2010. 
            We have helped over a thousand East Valley families keep their plumbing running right.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ backgroundColor: "oklch(0.28 0.07 255)" }}
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.google.com/maps/search/Copper+Trail+Plumbing+Mesa+AZ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ backgroundColor: "oklch(0.28 0.07 255)" }}
              aria-label="Google Reviews"
            >
              <Star size={16} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-['Oswald'] text-white font-600 text-lg mb-4 uppercase tracking-wide">
            Our Services
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Water Heater Repair & Install", href: "/services/water-heater" },
              { label: "Drain Cleaning", href: "/services/drain-cleaning" },
              { label: "Slab Leak Detection", href: "/services/slab-leak-detection" },
              { label: "Repiping", href: "/services/repiping" },
              { label: "Water Treatment", href: "/services/water-treatment" },
              { label: "All Services", href: "/services" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-['Inter'] text-sm text-white/60 hover:text-[oklch(0.62_0.12_55)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-['Oswald'] text-white font-600 text-lg mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Service Areas", href: "/contact#service-areas" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-['Inter'] text-sm text-white/60 hover:text-[oklch(0.62_0.12_55)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-['Oswald'] text-white font-600 text-lg mb-4 uppercase tracking-wide">
            Contact Us
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
              <div>
                <a href={PHONE_HREF} className="font-['Oswald'] text-white text-lg font-600 hover:opacity-80 transition-opacity">
                  {PHONE}
                </a>
                <p className="font-['Inter'] text-white/50 text-xs mt-0.5">24/7 Emergency Service</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
              <div>
                <p className="font-['Inter'] text-white/70 text-sm">506 E Juanita Ave</p>
                <p className="font-['Inter'] text-white/70 text-sm">Mesa, AZ 85204</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock size={16} className="mt-0.5 shrink-0" style={{ color: "oklch(0.62 0.12 55)" }} />
              <div>
                <p className="font-['Inter'] text-white/70 text-sm">Mon–Fri: 7am–7pm</p>
                <p className="font-['Inter'] text-white/70 text-sm">Sat: 8am–5pm</p>
                <p className="font-['Inter'] text-white/70 text-sm">Emergency: 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-['Inter'] text-white/40 text-xs">
            © {new Date().getFullYear()} Copper Trail Plumbing. All rights reserved. | Mesa, AZ
          </p>
          <p className="font-['Inter'] text-white/40 text-xs">
            Licensed & Insured | ROC #XXXXXX | Serving Mesa, Gilbert, Chandler, Tempe
          </p>
        </div>
      </div>
    </footer>
  );
}
