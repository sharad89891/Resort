"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const treatments = [
  { name: "Hydrotherapy Circuit", duration: "90 min", price: "$220", desc: "Alternating thermal journeys between ice plunges, warm mineral pools, and hydro-massage waterfalls." },
  { name: "Deep Tissue Fusion", duration: "60 min", price: "$180", desc: "A bespoke combination of traditional deep tissue and hot stone therapy for complete muscular reset." },
  { name: "Aqua Luminescence Facial", duration: "75 min", price: "$160", desc: "Marine extract infusion treatment that restores luminosity and deep hydration to sun-exposed skin." },
  { name: "Couples Ritual", duration: "120 min", price: "$480", desc: "A private candlelit suite experience with synchronised massages, bath ritual, and champagne service." },
];

export default function Wellness() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/spa_treatment_1778085701488.png" alt="Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Restore & Revitalize</span>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">Find Your</span><br />
              <span className="font-bold text-primary italic">Balance.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full bg-[#0A2540] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl lg:text-6xl font-heading uppercase text-white tracking-tighter leading-none font-light mb-8">
              Water Heals. <br /><span className="font-bold italic text-primary">Always Has.</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base">
              For centuries, civilisations have known the transformative power of water. At Aqua Spa, we harness its full potential — from thermal mineral pools to cryotherapy plunges — in a sanctuary engineered for complete restoration.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "18+", l: "Spa Treatments" }, { n: "6", l: "Private Suites" },
              { n: "3", l: "Thermal Pools" }, { n: "100%", l: "Organic Products" }
            ].map((s, i) => (
              <div key={i} className="border border-white/10 p-8 text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">{s.n}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa section — alternating */}
      <section className="w-full bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden min-h-[400px]"
          >
            <img src="/images/spa_treatment_1778085701488.png" alt="Spa" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-[#0A2540]/30" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col justify-center p-10 lg:p-16 xl:p-20"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">Signature Treatments</span>
            <h2 className="text-4xl lg:text-5xl font-heading uppercase tracking-tighter leading-none mb-8">
              <span className="font-light">Hydrotherapy</span><br />
              <span className="font-bold text-primary italic">Circuit</span>
            </h2>
            <div className="space-y-4 mb-10">
              {treatments.map((t) => (
                <div key={t.name} className="flex items-start gap-4 py-4 border-b border-muted/40 group">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">{t.name}</h3>
                      <span className="text-primary font-bold text-sm flex-shrink-0 ml-4">{t.price}</span>
                    </div>
                    <p className="text-xs text-foreground/50 font-light">{t.duration} · {t.desc.slice(0, 60)}…</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/reserve" className="inline-flex items-center gap-4 uppercase tracking-[0.2em] text-[10px] text-foreground font-bold hover:text-primary transition-colors group w-fit">
              <span className="border-b border-foreground pb-1 group-hover:border-primary transition-colors">Book a Treatment</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fitness section */}
      <section className="w-full bg-[#F7F9FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col justify-center p-10 lg:p-16 xl:p-20 order-2 lg:order-1"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">Active Recovery</span>
            <h2 className="text-4xl lg:text-5xl font-heading uppercase tracking-tighter leading-none mb-6">
              <span className="font-light">Movement</span><br />
              <span className="font-bold text-primary italic">Studio</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed font-light text-sm lg:text-base max-w-md">
              Sunrise yoga on the beach. Glass-walled fitness center overlooking the entire water park. Personal training, aqua aerobics, and breath-work sessions available daily.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden min-h-[380px] order-1 lg:order-2"
          >
            <img src="/images/fitness_center_1778085721169.png" alt="Fitness" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-[#0A2540]/20" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading uppercase text-white tracking-tighter font-light mb-8">
            Begin Your <span className="font-bold italic">Journey.</span>
          </h2>
          <Link href="/reserve" className="inline-flex items-center gap-6 bg-white text-primary uppercase tracking-[0.3em] text-[11px] font-bold px-12 py-5 hover:bg-[#F0F4F8] transition-colors shadow-2xl">
            Book a Spa Session <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
