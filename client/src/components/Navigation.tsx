/**
 * COPPER TRAIL PLUMBING — Navigation Component
 * Desert Craftsman Theme: Deep Navy background, Copper accents
 * Sticky header with scroll-aware background transition
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const PHONE = "(520) 348-0490";
const PHONE_HREF = "tel:5203480490";

const services = [
  { label: "Water Heater Services", href: "/services/water-heater" },
  { label: "Drain Cleaning", href: "/services/drain-cleaning" },
  { label: "Slab Leak Detection", href: "/services/slab-leak-detection" },
  { label: "Repiping", href: "/services/repiping" },
  { label: "Water Treatment", href: "/services/water-treatment" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || !isHome
            ? "oklch(0.22 0.07 255 / 0.97)"
            : "transparent",
          backdropFilter: scrolled || !isHome ? "blur(12px)" : "none",
          boxShadow: scrolled || !isHome ? "0 2px 20px oklch(0 0 0 / 0.2)" : "none",
        }}
      >
        {/* Top bar */}
        <div
          className="text-white text-sm py-2 px-4 flex justify-end items-center gap-4"
          style={{ backgroundColor: "oklch(0.62 0.12 55)" }}
        >
          <span className="hidden sm:block font-['Inter'] text-xs font-medium tracking-wide">
            506 E Juanita Ave, Mesa, AZ 85204
          </span>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 font-['Oswald'] font-600 text-white hover:opacity-90 transition-opacity phone-pulse"
          >
            <Phone size={14} />
            <span>{PHONE}</span>
          </a>
        </div>

        {/* Main nav */}
        <nav className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Copper Trail Plumbing Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="font-['Inter'] font-medium text-white/90 hover:text-white transition-colors text-sm tracking-wide"
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 font-['Inter'] font-medium text-white/90 hover:text-white transition-colors text-sm tracking-wide">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg overflow-hidden shadow-2xl"
                  style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 text-sm font-['Inter'] text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="font-['Inter'] font-medium text-white/90 hover:text-white transition-colors text-sm tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-['Inter'] font-medium text-white/90 hover:text-white transition-colors text-sm tracking-wide"
            >
              Contact
            </Link>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="hidden md:flex items-center gap-2 btn-copper rounded text-sm"
            >
              <Phone size={16} />
              Call Now
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 pt-32"
          style={{ backgroundColor: "oklch(0.22 0.07 255 / 0.98)" }}
        >
          <div className="container flex flex-col gap-2">
            <Link href="/" className="py-4 text-white font-['Oswald'] text-xl border-b border-white/10">
              Home
            </Link>
            <div className="py-4 border-b border-white/10">
              <p className="text-white/60 font-['Inter'] text-xs uppercase tracking-widest mb-3">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-2 text-white/80 font-['Inter'] hover:text-white transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href="/about" className="py-4 text-white font-['Oswald'] text-xl border-b border-white/10">
              About
            </Link>
            <Link href="/contact" className="py-4 text-white font-['Oswald'] text-xl border-b border-white/10">
              Contact
            </Link>
            <a
              href={PHONE_HREF}
              className="mt-6 btn-copper rounded flex items-center justify-center gap-2 text-lg"
            >
              <Phone size={20} />
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
