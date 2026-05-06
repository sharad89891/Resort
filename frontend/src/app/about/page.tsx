"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const timeline = [
  { year: "2008", title: "The Vision", desc: "Founded by marine architect Marco de Silva with a dream to build the world's first luxury water resort." },
  { year: "2012", title: "Breaking Ground", desc: "Construction begins on a previously uninhabited private island, preserving 60% of natural coral reefs." },
  { year: "2016", title: "Aqua Opens", desc: "Grand opening with 12 signature attractions, 3 restaurants, and 80 premium suites." },
  { year: "2020", title: "Expansion", desc: "The Abyssal underwater restaurant and Aqua Spa open to critical acclaim." },
  { year: "2024", title: "World Class", desc: "Ranked #1 Water Resort in the World by Luxury Travel Magazine for the fourth consecutive year." },
];

const values = [
  { icon: "🌊", title: "Water First", desc: "Every design decision starts with water — its power, its beauty, its healing." },
  { icon: "🌿", title: "Sustainability", desc: "Solar-powered, desalinated water systems, and zero single-use plastics across the entire resort." },
  { icon: "💎", title: "Uncompromising Quality", desc: "We obsess over the smallest details so our guests can focus on the extraordinary." },
  { icon: "🤝", title: "Genuine Hospitality", desc: "Not scripted service. Real human connections that make guests feel truly at home." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/overwater_villa_1778085641218.png" alt="About Aqua" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">Born of</span><br />
              <span className="font-bold text-primary italic">The Sea.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Brand Story — full-bleed two-tone */}
      <section className="w-full bg-[#0A2540]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-center p-10 lg:p-16 xl:p-24">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-6 block">Who We Are</span>
            <h2 className="text-4xl lg:text-5xl font-heading uppercase text-white tracking-tighter font-light leading-tight mb-8">
              More Than a Resort. <br />
              <span className="font-bold italic text-primary">A Phenomenon.</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base mb-6">
              Aqua was born from a single obsession: what would happen if the world's greatest architects, chefs, and experience designers collaborated on one radical idea — a resort where water is not just a backdrop, but the entire philosophy?
            </p>
            <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">
              The answer was Aqua. Fifteen years later, our private island continues to redefine what a resort can be.
            </p>
          </div>
          <div className="relative overflow-hidden min-h-[380px]">
            <img src="/images/catchy_hero.png" alt="Aqua Resort" className="w-full h-full object-cover absolute inset-0 opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="w-full bg-primary py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/20">
          {[
            { n: "15+", l: "Years of Excellence" },
            { n: "200K+", l: "Guests Welcomed" },
            { n: "#1", l: "World Ranking" },
            { n: "4", l: "Michelin Stars" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center py-8 px-4 text-center"
            >
              <span className="text-5xl font-heading font-bold text-white">{s.n}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold mt-2">{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Grid */}
      <section className="w-full bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">What We Stand For</span>
            <h2 className="text-5xl font-heading uppercase tracking-tighter font-light">Our <span className="font-bold italic text-primary">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-muted">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-r border-muted p-10 hover:bg-[#F7F9FC] transition-colors"
              >
                <span className="text-4xl block mb-6">{v.icon}</span>
                <h3 className="text-xl font-heading uppercase tracking-tighter mb-4 font-bold text-foreground">{v.title}</h3>
                <p className="text-foreground/60 text-sm font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-[#0A2540] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Our Journey</span>
            <h2 className="text-5xl font-heading uppercase text-white tracking-tighter font-light">The <span className="font-bold italic text-primary">Timeline</span></h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                  <span className="text-primary text-3xl font-heading font-bold block mb-2">{t.year}</span>
                  <h3 className="text-white font-heading uppercase text-lg tracking-tight mb-2">{t.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{t.desc}</p>
                </div>
                <div className="absolute left-6 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary border-4 border-[#0A2540] -translate-x-1/2 flex-shrink-0" />
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading uppercase text-white tracking-tighter font-light mb-8">
            Join Our <span className="font-bold italic">Story.</span>
          </h2>
          <Link href="/reserve" className="inline-flex items-center gap-6 bg-white text-primary uppercase tracking-[0.3em] text-[11px] font-bold px-12 py-5 hover:bg-[#F0F4F8] transition-colors shadow-2xl">
            Reserve Your Stay <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
