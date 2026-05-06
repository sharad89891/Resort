"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const restaurants = [
  {
    name: "The Abyssal",
    tag: "Michelin Starred",
    desc: "Underwater dining experience surrounded by a 180° panoramic aquarium featuring sharks and manta rays. Exquisitely crafted oceanic cuisine.",
    image: "/images/dining.png",
    hours: "6 PM – 11 PM",
    dress: "Smart Elegant",
    accent: "bg-[#0A2540]",
  },
  {
    name: "Liquid Lounge",
    tag: "Swim-Up Bar",
    desc: "Never leave the water. Our iconic swim-up bar serves tropical cocktails and fresh light bites right inside the Tsunami Wave Pool.",
    image: "/images/lazy_river_cave_1778085829476.png",
    hours: "10 AM – 10 PM",
    dress: "Swimwear",
    accent: "bg-[#00509E]",
  },
  {
    name: "Surfside Shack",
    tag: "Casual Dining",
    desc: "Giant loaded nachos, towering burgers, fresh-cut fries and ice-cold drinks. The ultimate fuel station between your next adrenaline fix.",
    image: "/images/casual_dining_1778085878168.png",
    hours: "9 AM – 8 PM",
    dress: "Casual",
    accent: "bg-[#003366]",
  },
];

export default function Dining() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-[75vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/dining.png" alt="Dining" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Culinary Journeys</span>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">Taste</span><br />
              <span className="font-bold text-primary italic">The Ocean.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Restaurants — full-bleed alternating 50/50 */}
      {restaurants.map((r, i) => (
        <section key={r.name} className={`w-full ${i % 2 === 0 ? "bg-background" : "bg-[#F7F9FC]"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`relative overflow-hidden min-h-[360px] ${i % 2 !== 0 ? "lg:order-2" : ""}`}
            >
              <img src={r.image} alt={r.name} className="w-full h-full object-cover absolute inset-0" />
              <div className={`absolute inset-0 ${r.accent} opacity-40`} />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{r.tag}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col justify-center p-10 lg:p-16 xl:p-24 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
            >
              <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">0{i + 1} — {r.tag}</span>
              <h2 className="text-4xl lg:text-6xl font-heading uppercase tracking-tighter leading-none mb-6 font-light">
                {r.name.split(" ")[0]} <span className="font-bold text-primary italic">{r.name.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-10 font-light text-sm lg:text-base max-w-md">{r.desc}</p>
              <div className="flex gap-10 mb-10 pt-6 border-t border-muted/50">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Hours</p>
                  <p className="font-bold text-foreground text-sm">{r.hours}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 mb-1">Dress Code</p>
                  <p className="font-bold text-primary text-sm uppercase">{r.dress}</p>
                </div>
              </div>
              <Link href="/reserve" className="inline-flex items-center gap-4 uppercase tracking-[0.2em] text-[10px] text-foreground font-bold hover:text-primary transition-colors group w-fit">
                <span className="border-b border-foreground pb-1 group-hover:border-primary transition-colors">Book a Table</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Menu Highlights */}
      <section className="w-full bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Chef's Selections</span>
            <h2 className="text-5xl font-heading uppercase text-white tracking-tighter font-light">Signature <span className="font-bold italic text-primary">Dishes</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10 border border-white/10">
            {[
              { dish: "Blue Fin Tartare", from: "The Abyssal", price: "$48" },
              { dish: "Glazed Mahi Mahi", from: "The Abyssal", price: "$72" },
              { dish: "Mango Tequila Sunrise", from: "Liquid Lounge", price: "$18" },
              { dish: "Double Smash Burger", from: "Surfside Shack", price: "$24" },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 hover:bg-white/5 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">{d.from}</p>
                <h3 className="text-lg font-heading text-white font-light tracking-tight mb-2">{d.dish}</h3>
                <p className="text-2xl font-bold text-white/30">{d.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading uppercase text-white tracking-tighter font-light mb-8">
            Reserve a <span className="font-bold italic">Table.</span>
          </h2>
          <Link href="/reserve" className="inline-flex items-center gap-6 bg-white text-primary uppercase tracking-[0.3em] text-[11px] font-bold px-12 py-5 hover:bg-[#F0F4F8] transition-colors shadow-2xl">
            Make a Reservation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
