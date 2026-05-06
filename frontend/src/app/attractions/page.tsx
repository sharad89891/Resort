"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const attractions = [
  {
    id: 1,
    name: "The Zenith Drop",
    tag: "Extreme",
    intensity: "Extreme",
    height: '48"',
    desc: "Our signature 150-foot near-vertical drop. Reach speeds of 60mph through a transparent acrylic tube submerged in a shark-filled lagoon.",
    image: "/images/catchy_attr.png",
    color: "from-[#0A2540] to-[#00509E]",
  },
  {
    id: 2,
    name: "Tsunami Surge",
    tag: "High Intensity",
    intensity: "High",
    height: '42"',
    desc: "The world's largest artificial wave pool. 10-foot cresting waves for surfers, or gentle swells for families.",
    image: "/images/waterpark_hero.png",
    color: "from-[#003366] to-[#0066CC]",
  },
  {
    id: 3,
    name: "Tropical River",
    tag: "Family",
    intensity: "Low",
    height: 'All Ages',
    desc: "A 1,200-foot lazy river winding through lush tropical gardens, hidden grottos, and cascading waterfalls.",
    image: "/images/lazy_river_cave_1778085829476.png",
    color: "from-[#004080] to-[#0099CC]",
  },
];

const stats = [
  { num: "25+", label: "World-Class Rides" },
  { num: "4K", label: "Guests Daily" },
  { num: "150ft", label: "Tallest Drop" },
  { num: "12", label: "Unique Experiences" },
];

export default function Attractions() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Full-bleed Hero ── */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/catchy_attr.png" alt="Attractions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Signature Rides</span>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">Thrill</span><br />
              <span className="font-bold text-primary italic">Seekers.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="w-full bg-[#0A2540] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
            >
              <span className="text-4xl font-heading font-bold text-primary">{s.num}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold mt-1">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Attractions ── */}
      {attractions.map((attr, index) => (
        <section key={attr.id} className={`w-full ${index % 2 === 0 ? "bg-background" : "bg-[#F7F9FC]"}`}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[520px] ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`relative overflow-hidden min-h-[360px] ${index % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <img src={attr.image} alt={attr.name} className="w-full h-full object-cover absolute inset-0" />
              <div className={`absolute inset-0 bg-gradient-to-br ${attr.color} opacity-50`} />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{attr.tag}</span>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col justify-center p-10 lg:p-16 xl:p-24 ${index % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">0{attr.id} — Signature Experience</span>
              <h2 className="text-4xl lg:text-6xl font-heading uppercase tracking-tighter leading-none mb-6">
                <span className="font-light block">{attr.name.split(" ")[0]}</span>
                <span className="font-bold text-primary italic">{attr.name.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-10 font-light text-sm lg:text-base max-w-lg">{attr.desc}</p>
              <div className="flex gap-8 mb-10 pt-6 border-t border-muted/50">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Intensity</p>
                  <p className="font-bold text-primary text-sm uppercase">{attr.intensity}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Min Height</p>
                  <p className="font-bold text-foreground text-sm">{attr.height}</p>
                </div>
              </div>
              <Link href="/reserve" className="inline-flex items-center gap-4 uppercase tracking-[0.2em] text-[10px] text-foreground font-bold hover:text-primary transition-colors group w-fit">
                <span className="border-b border-foreground pb-1 group-hover:border-primary transition-colors">Book This Experience</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── More Rides Grid ── */}
      <section className="w-full bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">All Attractions</span>
            <h2 className="text-5xl font-heading uppercase text-white tracking-tighter font-light">Even More <span className="font-bold italic text-primary">Awaits</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              { name: "AquaKids Zone", desc: "Safe, fun water play areas for children under 10.", tag: "Family" },
              { name: "The Vortex", desc: "A mind-bending half-pipe that sends riders spinning 360°.", tag: "Thrill" },
              { name: "Sky Bridge", desc: "A 200-foot suspended glass walkway above the water park.", tag: "Scenic" },
              { name: "FlowRider", desc: "A stationary wave machine for surfing practice.", tag: "Sport" },
              { name: "Aqua Racer", desc: "6-lane side-by-side racing slides. May the fastest win.", tag: "Competitive" },
              { name: "Night Glow", desc: "Rides transformed with neon lights every Friday night.", tag: "Premium" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 p-8 hover:bg-white/5 transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-4 block">{item.tag}</span>
                <h3 className="text-xl font-heading uppercase tracking-tighter text-white mb-3 font-light group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading uppercase text-white tracking-tighter font-light mb-8">
            Ready to <span className="font-bold italic">Ride?</span>
          </h2>
          <Link href="/reserve" className="inline-flex items-center gap-6 bg-white text-primary uppercase tracking-[0.3em] text-[11px] font-bold px-12 py-5 hover:bg-background/90 transition-colors shadow-2xl">
            Get Your Passes <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
