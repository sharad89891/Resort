"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/* 
  Decorative Water Slide SVG that sweeps across the bottom of the navbar.
  A small raft animates along the slide path using SVG animateMotion.
*/
const WaterSlideDecor = ({ dark }: { dark: boolean }) => (
  <div className="absolute bottom-0 left-0 w-full h-12 pointer-events-none z-0 overflow-hidden">
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define slide path */}
      <defs>
        <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00509E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0A2540" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Outer tube body */}
      <path
        id="slide-path"
        d="M-10,40 C180,8 320,42 480,20 C640,-2 760,44 960,18 C1120,-2 1280,40 1450,14"
        fill="none"
        stroke={dark ? "rgba(0,80,158,0.35)" : "rgba(255,255,255,0.25)"}
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Inner highlight (top of tube) */}
      <path
        d="M-10,40 C180,8 320,42 480,20 C640,-2 760,44 960,18 C1120,-2 1280,40 1450,14"
        fill="none"
        stroke={dark ? "rgba(0,130,255,0.25)" : "rgba(255,255,255,0.35)"}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Animated raft (small rounded rect) sliding along the tube */}
      <g>
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          path="M-10,40 C180,8 320,42 480,20 C640,-2 760,44 960,18 C1120,-2 1280,40 1450,14"
          rotate="auto"
        />
        {/* Raft body */}
        <rect x="-10" y="-5" width="20" height="10" rx="5"
          fill={dark ? "#00509E" : "rgba(255,255,255,0.9)"}
          opacity="0.9"
        />
        {/* Rider bump */}
        <ellipse cx="0" cy="-6" rx="5" ry="4"
          fill={dark ? "#0A2540" : "rgba(0,80,158,0.8)"}
          opacity="0.8"
        />
        {/* Splash dots ahead of raft */}
        <circle cx="14" cy="0" r="1.5" fill={dark ? "#00509E" : "white"} opacity="0.7" />
        <circle cx="18" cy="-2" r="1" fill={dark ? "#00509E" : "white"} opacity="0.5" />
      </g>

      {/* Second faster raft (delayed) */}
      <g>
        <animateMotion
          dur="6s"
          begin="-3s"
          repeatCount="indefinite"
          path="M-10,40 C180,8 320,42 480,20 C640,-2 760,44 960,18 C1120,-2 1280,40 1450,14"
          rotate="auto"
        />
        <rect x="-8" y="-4" width="16" height="8" rx="4"
          fill={dark ? "#003f80" : "rgba(255,255,255,0.7)"}
          opacity="0.75"
        />
        <ellipse cx="0" cy="-5" rx="4" ry="3"
          fill={dark ? "#0A2540" : "rgba(0,80,158,0.7)"}
          opacity="0.7"
        />
      </g>
    </svg>
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const useDarkText = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Attractions", href: "/attractions" },
    { name: "Accommodations", href: "/accommodations" },
    { name: "Dining", href: "/dining" },
    { name: "Wellness", href: "/wellness" },
    { name: "Experiences", href: "/experiences" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 overflow-hidden ${
        isScrolled || !isHomePage
          ? "bg-white/97 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-[#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      {/* Water Slide running along bottom of navbar */}
      <WaterSlideDecor dark={useDarkText} />

      <div className="max-w-8xl mx-auto px-8 h-20 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 flex-shrink-0">
          <span className={`font-heading text-3xl font-light tracking-[0.25em] uppercase transition-colors ${useDarkText ? "text-primary" : "text-white drop-shadow-md"}`}>
            AQUA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-[11px] uppercase tracking-[0.12em] font-bold transition-colors group ${
                  useDarkText
                    ? isActive ? "text-primary" : "text-[#0A2540] hover:text-primary"
                    : isActive ? "text-primary" : "text-white/90 hover:text-white drop-shadow-md"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA — Attractive Book Your Ticket Button */}
        <div className="hidden lg:block flex-shrink-0">
          <Link
            href="/reserve"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[11px] uppercase tracking-[0.15em] text-white overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #00509E 0%, #0099CC 50%, #00d4ff 100%)",
              boxShadow: "0 4px 20px rgba(0,212,255,0.35), 0 2px 8px rgba(0,80,158,0.4)",
            }}
          >
            {/* Shimmer sweep on hover */}
            <span
              className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              🎟️ Book Your Ticket
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden z-50 transition-colors ${useDarkText ? "text-[#0A2540]" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} className="text-[#0A2540]" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 lg:hidden shadow-2xl z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-heading text-[#0A2540] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reserve"
              className="mt-6 px-10 py-4 bg-primary text-white uppercase tracking-[0.2em] text-sm font-bold shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Your Ticket
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
