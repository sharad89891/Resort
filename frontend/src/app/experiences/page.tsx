"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Experiences() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/dj_pool_party_1778085753008.png" alt="Experiences" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Beyond the Slides</span>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">Curated</span><br />
              <span className="font-bold text-primary italic">Vibes.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Neon Nights — full bleed */}
      <section className="w-full bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden min-h-[400px]"
          >
            <img src="/images/dj_pool_party_1778085753008.png" alt="Neon Nights" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-[#0A2540]/40" />
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">After Dark</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col justify-center p-10 lg:p-16 xl:p-24"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">01 — After Dark</span>
            <h2 className="text-4xl lg:text-6xl font-heading uppercase tracking-tighter leading-none mb-6">
              <span className="font-light">Neon</span><br />
              <span className="font-bold text-primary italic">Nights</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-6 font-light text-sm lg:text-base max-w-md">
              When the sun sets, the wave pool transforms into the island's hottest venue. International guest DJs, laser shows, and glowing cocktails at the Liquid Lounge.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-10">Fridays & Saturdays · 9 PM – 2 AM</p>
            <Link href="/reserve" className="inline-flex items-center gap-4 uppercase tracking-[0.2em] text-[10px] text-foreground font-bold hover:text-primary transition-colors group w-fit">
              <span className="border-b border-foreground pb-1 group-hover:border-primary transition-colors">Reserve VIP Table</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Surf Simulator */}
      <section className="w-full bg-[#F7F9FC]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex flex-col justify-center p-10 lg:p-16 xl:p-24 order-2 lg:order-1"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">02 — Active Adventure</span>
            <h2 className="text-4xl lg:text-6xl font-heading uppercase tracking-tighter leading-none mb-6">
              <span className="font-light">Pro Surfing</span><br />
              <span className="font-bold text-primary italic">Simulator</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed font-light text-sm lg:text-base max-w-md">
              Catch the perfect wave every time. Our cutting-edge FlowRider simulator and private lessons in the Tsunami Pool mean beginners can learn safely while experts perfect their tricks.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden min-h-[380px] order-1 lg:order-2"
          >
            <img src="/images/flowrider_surf_1778085735589.png" alt="Surf Simulator" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-[#0A2540]/20" />
          </motion.div>
        </div>
      </section>

      {/* More Events Grid */}
      <section className="w-full bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Weekly Calendar</span>
            <h2 className="text-5xl font-heading uppercase text-white tracking-tighter font-light">Always Something <span className="font-bold italic text-primary">On</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
            {[
              { event: "Sunrise Yoga", day: "Daily · 6:30 AM", type: "Wellness" },
              { event: "Kids Splash Olympics", day: "Tues & Thurs · 10 AM", type: "Family" },
              { event: "Aqua Aerobics", day: "Mon / Wed / Fri · 8 AM", type: "Fitness" },
              { event: "Private Surf Lessons", day: "By Appointment", type: "Sport" },
              { event: "Neon Pool Party", day: "Fri & Sat · 9 PM", type: "Nightlife" },
              { event: "Starlight Cinema", day: "Every Sunday · 8 PM", type: "Entertainment" },
            ].map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border border-white/10 p-8 hover:bg-white/5 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3 block">{e.type}</span>
                <h3 className="text-xl font-heading uppercase tracking-tighter text-white font-light mb-2">{e.event}</h3>
                <p className="text-white/40 text-xs uppercase tracking-wider font-bold">{e.day}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading uppercase text-white tracking-tighter font-light mb-8">
            Live the <span className="font-bold italic">Experience.</span>
          </h2>
          <Link href="/reserve" className="inline-flex items-center gap-6 bg-white text-primary uppercase tracking-[0.3em] text-[11px] font-bold px-12 py-5 hover:bg-[#F0F4F8] transition-colors shadow-2xl">
            Plan My Visit <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
