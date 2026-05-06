"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ── Floating Bubbles ── */
const FooterBubbles = () => {
  const [bubbles, setBubbles] = useState<
    { size: number; left: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: 25 }).map(() => ({
        size: Math.random() * 22 + 4,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 7,
      }))
    );
  }, []);

  if (!bubbles.length) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(2px)",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -(window?.innerHeight ?? 700) * 1.2],
            opacity: [0, 0.8, 0.8, 0],
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

/* ── Inflatable Pool Ring Tube (proper donut with colored segments) ── */
type TubeProps = { size: number; colors: string[]; segments?: number };

const InflatableTube = ({ size, colors, segments = 8 }: TubeProps) => {
  const cx = size / 2;
  const cy = size / 2;
  const rx = size * 0.40;
  const ry = size * 0.18;
  const thickness = size * 0.14;
  const gap = 0.15; // gap fraction between segments (in radians fraction of full slice)

  const arcSegments = Array.from({ length: segments }).map((_, i) => {
    const sliceAngle = (2 * Math.PI) / segments;
    const startAngle = i * sliceAngle + gap / 2;
    const endAngle = (i + 1) * sliceAngle - gap / 2;

    // Round to 4dp so SSR and client produce identical strings
    const r4 = (n: number) => Math.round(n * 10000) / 10000;
    const x1 = r4(cx + rx * Math.cos(startAngle));
    const y1 = r4(cy + ry * Math.sin(startAngle));
    const x2 = r4(cx + rx * Math.cos(endAngle));
    const y2 = r4(cy + ry * Math.sin(endAngle));
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const rxR = r4(rx);
    const ryR = r4(ry);

    return { d: `M ${x1} ${y1} A ${rxR} ${ryR} 0 ${largeArc} 1 ${x2} ${y2}`, color: colors[i % colors.length] };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        {arcSegments.map((_, i) => (
          <radialGradient key={i} id={`seg-grad-${size}-${i}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="40%" stopColor={arcSegments[i].color} stopOpacity="0.95" />
            <stop offset="100%" stopColor={arcSegments[i].color} stopOpacity="0.6" />
          </radialGradient>
        ))}
      </defs>

      {/* Shadow underneath entire ring */}
      <ellipse cx={cx} cy={cy + size * 0.04} rx={rx} ry={ry * 0.4}
        fill="rgba(0,0,0,0.25)" filter="blur(4px)" />

      {/* Segment arcs — back half (draw first so front half overlaps) */}
      {arcSegments.map((seg, i) => (
        <path key={`back-${i}`} d={seg.d} fill="none"
          stroke={`url(#seg-grad-${size}-${i})`}
          strokeWidth={thickness}
          strokeLinecap="round"
          opacity={0.6}
        />
      ))}

      {/* Segment arcs — full opacity front */}
      {arcSegments.map((seg, i) => (
        <path key={`front-${i}`} d={seg.d} fill="none"
          stroke={`url(#seg-grad-${size}-${i})`}
          strokeWidth={thickness}
          strokeLinecap="round"
        />
      ))}

      {/* Glossy highlight band running across top of ring */}
      <ellipse cx={cx} cy={cy - ry * 0.1} rx={rx * 0.9} ry={ry * 0.6}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth={thickness * 0.25}
      />

      {/* Centre hole dark shadow */}
      <ellipse cx={cx} cy={cy} rx={rx * 0.55} ry={ry * 0.55}
        fill="rgba(0,0,0,0.18)" />
    </svg>
  );
};

const tubeInstances = [
  { left: "4%",  top: "72%", size: 140, rotate: -15, delay: 0,   dur: 4.5, colors: ["#00509E","#ffffff","#00509E","#ffffff","#00509E","#ffffff","#00509E","#ffffff"] },
  { left: "18%", top: "60%", size: 100, rotate:  12, delay: 1,   dur: 5,   colors: ["#0066CC","#7ec8e3","#0066CC","#7ec8e3","#0066CC","#7ec8e3","#0066CC","#7ec8e3"] },
  { left: "72%", top: "68%", size: 160, rotate:  -8, delay: 0.5, dur: 4,   colors: ["#00509E","#ffffff","#003f80","#ffffff","#00509E","#ffffff","#003f80","#ffffff"] },
  { left: "86%", top: "55%", size: 90,  rotate:  22, delay: 1.5, dur: 3.8, colors: ["#0A2540","#60b4ff","#0A2540","#60b4ff","#0A2540","#60b4ff","#0A2540","#60b4ff"] },
  { left: "48%", top: "80%", size: 120, rotate:   5, delay: 0.8, dur: 5.2, colors: ["#0099CC","#ffffff","#0099CC","#ffffff","#0099CC","#ffffff","#0099CC","#ffffff"] },
];

const AirTubes = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    {tubeInstances.map((t, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: t.left, top: t.top, rotate: t.rotate }}
        animate={{ y: [0, -12, 4, 0], rotate: [t.rotate, t.rotate + 5, t.rotate - 4, t.rotate] }}
        transition={{ duration: t.dur, repeat: Infinity, delay: t.delay, ease: "easeInOut" }}
      >
        <InflatableTube size={t.size} colors={t.colors} />
      </motion.div>
    ))}
  </div>
);

/* ── Animated Surface Waves ──
 * Extends 160px ABOVE the footer top via a large negative top value.
 * overflow-x-hidden on the footer is kept; overflow-y is NOT hidden so
 * this div can bleed upward into the page section above seamlessly.
 * The solid background-colored top half erases the dark gradient;
 * the animated SVG waves then cut into it.
 */
const WaterSurface = () => (
  <div
    className="absolute left-0 w-full pointer-events-none"
    style={{ top: -160, height: 280, zIndex: 30 }}
  >
    {/* Solid page-background fill: covers everything above the wave crests */}
    <div
      className="absolute top-0 left-0 w-full"
      style={{ height: 170, background: "var(--background)" }}
    />

    <svg
      viewBox="0 0 1440 280"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Primary wave — page-color fill sweeps down to the wave crest */}
      <motion.path
        animate={{
          d: [
            "M0,160 C200,130 400,190 600,160 C800,130 1000,190 1200,160 C1320,145 1400,172 1440,160 L1440,0 L0,0 Z",
            "M0,160 C200,190 400,130 600,160 C800,190 1000,130 1200,160 C1320,175 1400,145 1440,160 L1440,0 L0,0 Z",
            "M0,160 C200,130 400,190 600,160 C800,130 1000,190 1200,160 C1320,145 1400,172 1440,160 L1440,0 L0,0 Z",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        fill="var(--background)"
      />
      {/* Second wave — white foam */}
      <motion.path
        animate={{
          d: [
            "M0,185 C240,160 480,210 720,185 C960,160 1200,205 1440,185 L1440,0 L0,0 Z",
            "M0,185 C240,210 480,160 720,185 C960,210 1200,160 1440,185 L1440,0 L0,0 Z",
            "M0,185 C240,160 480,210 720,185 C960,160 1200,205 1440,185 L1440,0 L0,0 Z",
          ],
        }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        fill="rgba(255,255,255,0.07)"
      />
      {/* Third wave — deep tint */}
      <motion.path
        animate={{
          d: [
            "M0,210 C180,196 360,222 540,210 C720,198 900,220 1080,210 C1260,200 1380,216 1440,210 L1440,0 L0,0 Z",
            "M0,210 C180,222 360,196 540,210 C720,222 900,198 1080,210 C1260,220 1380,204 1440,210 L1440,0 L0,0 Z",
            "M0,210 C180,196 360,222 540,210 C720,198 900,220 1080,210 C1260,200 1380,216 1440,210 L1440,0 L0,0 Z",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        fill="rgba(0,80,158,0.15)"
      />
    </svg>

    {/* Caustic shimmer at the waterline */}
    <motion.div
      className="absolute left-0 w-full h-[2px] bg-white/30 blur-sm"
      style={{ top: 158 }}
      animate={{ scaleX: [1, 1.04, 0.97, 1], opacity: [0.4, 0.9, 0.2, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute left-[8%] w-[55%] h-[1px] bg-white/20 blur-sm"
      style={{ top: 178 }}
      animate={{ scaleX: [1, 0.88, 1.1, 1], opacity: [0.2, 0.5, 0.1, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
  </div>
);

/* ── Caustic light rays diagonal beams ── */
// Fixed values instead of Math.random() — prevents SSR/client hydration mismatch
const RAY_STYLES = [
  { left: "10%", width: "28px", rotate: "-3.2deg" },
  { left: "25%", width: "38px", rotate: "2.5deg" },
  { left: "45%", width: "24px", rotate: "-4.1deg" },
  { left: "60%", width: "44px", rotate: "1.8deg" },
  { left: "75%", width: "32px", rotate: "-2.8deg" },
  { left: "88%", width: "20px", rotate: "3.4deg" },
];

const LightRays = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
    {RAY_STYLES.map((ray, i) => (
      <motion.div
        key={i}
        className="absolute top-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent"
        style={{
          left: ray.left,
          width: ray.width,
          height: "70%",
          transform: `rotate(${ray.rotate})`,
          transformOrigin: "top center",
        }}
        animate={{ opacity: [0.2, 0.6, 0.1, 0.4, 0.2] }}
        transition={{
          duration: 3 + i * 0.7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
      />
    ))}
  </div>
);

/* ── Seabed sand dunes ── */
const Seabed = () => (
  <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,60 C120,40 240,70 360,60 C480,50 600,68 720,60 C840,52 960,65 1080,60 C1200,55 1320,62 1440,58 L1440,80 L0,80 Z"
        fill="rgba(10,37,64,0.6)"
      />
      <path
        d="M0,70 C180,62 360,75 540,70 C720,65 900,74 1080,70 C1260,66 1380,73 1440,70 L1440,80 L0,80 Z"
        fill="rgba(2,11,20,0.8)"
      />
    </svg>
    {/* Small pebble dots */}
    {[8, 20, 33, 47, 58, 70, 82, 91].map((l, i) => (
      <motion.div
        key={i}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
        className="absolute rounded-full bg-white/10"
        style={{
          left: `${l}%`,
          bottom: `${4 + (i % 3) * 6}px`,
          width: `${6 + (i % 4) * 4}px`,
          height: `${4 + (i % 3) * 3}px`,
        }}
      />
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer
      className="relative overflow-x-hidden text-white pt-52 pb-16"
      style={{ background: "linear-gradient(to bottom, #0d3b6e 0%, #093057 30%, #051f3a 65%, #020b14 100%)" }}
    >
      <WaterSurface />
      <LightRays />
      <FooterBubbles />
      <Seabed />
      <AirTubes />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-20">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/">
            <span className="font-heading text-4xl font-bold tracking-[0.2em] text-white block mb-6 uppercase drop-shadow-lg">
              AQUA
            </span>
          </Link>
          <p className="text-sm font-medium text-white/70 leading-relaxed mb-6">
            A sanctuary of luxury and serenity, offering an unparalleled escape where high-speed thrills meet serene indulgence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary text-white/70 transition-colors text-xs tracking-widest uppercase">Instagram</a>
            <a href="#" className="hover:text-primary text-white/70 transition-colors text-xs tracking-widest uppercase">Facebook</a>
            <a href="#" className="hover:text-primary text-white/70 transition-colors text-xs tracking-widest uppercase">Twitter</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading uppercase text-sm tracking-[0.2em] text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm font-medium text-white/75">
            <li><Link href="/attractions" className="hover:text-primary transition-colors">Attractions</Link></li>
            <li><Link href="/accommodations" className="hover:text-primary transition-colors">Accommodations</Link></li>
            <li><Link href="/dining" className="hover:text-primary transition-colors">Dining</Link></li>
            <li><Link href="/wellness" className="hover:text-primary transition-colors">Wellness &amp; Spa</Link></li>
            <li><Link href="/experiences" className="hover:text-primary transition-colors">Experiences</Link></li>
            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading uppercase text-sm tracking-[0.2em] text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-medium text-white/75">
            <li>123 Serenity Boulevard,<br />Paradise Island, PI 00000</li>
            <li>+1 (555) 123-4567</li>
            <li>reservations@aquaresort.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading uppercase text-sm tracking-[0.2em] text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm font-medium mb-4 text-white/70">Subscribe to receive exclusive offers and news.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/10 border border-white/25 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors shadow-xl backdrop-blur-sm rounded-sm"
            />
            <button type="submit" className="bg-primary text-white px-4 py-3 uppercase tracking-[0.2em] text-xs font-bold hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/15 text-xs font-light flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
        <p className="text-white/50">&copy; {new Date().getFullYear()} Aqua Water Park Resort. All rights reserved.</p>
        <div className="flex gap-6 text-white/50">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -8, scale: 1.1 }}
        className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-primary/80 border border-primary text-white flex justify-center items-center shadow-2xl z-20 cursor-pointer backdrop-blur-sm"
        title="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.button>
    </footer>
  );
}
