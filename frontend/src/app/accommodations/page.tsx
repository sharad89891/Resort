"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Ocean View Suite",
    nameA: "Ocean View",
    nameB: "Suite",
    tag: "Signature",
    price: "From $480/night",
    desc: "Floor-to-ceiling panoramic windows overlooking the private lagoon. Features a private infinity plunge pool, butler service, and bespoke turn-down rituals.",
    image: "/images/suite.png",
    amenities: ["Private Pool", "Butler 24/7", "Ocean View", "King Bed"],
  },
  {
    id: 2,
    name: "Aqua Villa",
    nameA: "Aqua",
    nameB: "Villa",
    tag: "Overwater",
    price: "From $680/night",
    desc: "Suspended directly over the turquoise lagoon. Step from your bedroom directly onto your private sun deck and into the warm, crystal water below.",
    image: "/images/ocean_villa_1778085767696.png",
    amenities: ["Overwater Deck", "Glass Floor Panel", "Private Dock", "Spa Bath"],
  },
  {
    id: 3,
    name: "Underwater Suite",
    nameA: "Underwater",
    nameB: "Suite",
    tag: "Ultra Premium",
    price: "From $1,200/night",
    desc: "The world's most exclusive stay. Sleep below the surface surrounded by a live coral reef aquarium. Fully pressurised for complete comfort.",
    image: "/images/underwater_suite_1778085791994.png",
    amenities: ["360° Aquarium View", "Reef Access", "Private Butler", "Chef's Table"],
  },
  {
    id: 4,
    name: "Cabana Retreat",
    nameA: "Cabana",
    nameB: "Retreat",
    tag: "Family",
    price: "From $320/night",
    desc: "A spacious open-plan retreat with a private shaded terrace, tropical garden, and direct access to the resort's main pool zone.",
    image: "/images/cabana_lounge_1778085811590.png",
    amenities: ["Garden Terrace", "Park Access", "2 Bedrooms", "Open Kitchen"],
  },
];

const amenityIcons = [
  { icon: "🏊", label: "6 Pools" },
  { icon: "🍽️", label: "Fine Dining" },
  { icon: "💆", label: "Full Spa" },
  { icon: "🏋️", label: "Fitness Center" },
  { icon: "🛎️", label: "Butler Service" },
  { icon: "🚁", label: "Helipad" },
  { icon: "🎾", label: "Sports Courts" },
  { icon: "🌅", label: "Sunset Terrace" },
];

export default function Accommodations() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── Full-bleed Hero ── */}
      <section className="relative w-full h-[75vh] min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/suite.png" alt="Luxury Accommodations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Luxury Stays</span>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">Stay</span><br />
              <span className="font-bold text-primary italic">Awhile.</span>
            </h1>
            <p className="text-white/70 max-w-md font-light tracking-wide text-sm leading-relaxed mt-6">
              Every room is a private sanctuary. Experience unmatched luxury where the water is always within reach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Amenities Strip ── */}
      <section className="w-full bg-[#0A2540] py-10 overflow-x-auto">
        <div className="flex gap-0 min-w-max mx-auto px-6 divide-x divide-white/10">
          {amenityIcons.map((a, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-8 py-4 text-white/70 hover:text-primary transition-colors">
              <span className="text-2xl">{a.icon}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">{a.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Room Cards Grid ── */}
      <section className="w-full bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Our Rooms</span>
            <h2 className="text-5xl font-heading uppercase tracking-tighter font-light">
              Choose Your <span className="font-bold italic text-primary">Sanctuary</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.9 }}
                className="group relative overflow-hidden"
              >
                {/* Photo */}
                <div className="relative h-[380px] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/30 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{room.tag}</span>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-4 py-2">{room.price}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-white border border-muted p-8">
                  <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">0{room.id} — {room.tag}</span>
                  <h3 className="text-3xl font-heading uppercase tracking-tighter leading-none mb-4">
                    <span className="font-light">{room.nameA}</span> <span className="font-bold text-primary italic">{room.nameB}</span>
                  </h3>
                  <p className="text-foreground/60 text-sm font-light leading-relaxed mb-6">{room.desc}</p>

                  {/* Amenities pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.amenities.map((a) => (
                      <span key={a} className="text-[10px] uppercase tracking-wider font-bold text-foreground/60 border border-muted px-3 py-1">
                        {a}
                      </span>
                    ))}
                  </div>

                  <Link href="/reserve" className="inline-flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-foreground font-bold hover:text-primary transition-colors group/btn">
                    <span className="border-b border-foreground pb-1 group-hover/btn:border-primary transition-colors">Book This Room</span>
                    <ArrowRight size={13} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed Photo Feature ── */}
      <section className="w-full bg-[#0A2540]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          <div className="relative overflow-hidden min-h-[380px]">
            <img src="/images/ocean_villa_1778085767696.png" alt="Overwater Villa" className="w-full h-full object-cover absolute inset-0 opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/80 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-10 lg:p-20">
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-6 block">Included With Every Stay</span>
            <h2 className="text-4xl lg:text-5xl font-heading uppercase text-white tracking-tighter font-light leading-tight mb-10">
              More Than a Room. <br /><span className="font-bold italic text-primary">A World.</span>
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Unlimited Park Access", "Private Beach Section",
                "Daily Breakfast", "24/7 Concierge",
                "Airport Transfer", "Welcome Amenity",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-white/70 text-sm font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="w-full bg-background py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block">Guest Review</span>
          <blockquote className="text-3xl md:text-4xl font-heading text-foreground font-light italic tracking-tight leading-snug mb-8">
            "The Aqua Villa was beyond anything I've ever experienced. Absolute perfection above the water."
          </blockquote>
          <p className="text-foreground/40 text-sm uppercase tracking-widest font-bold">— Sarah M., Aqua Villa Guest</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-primary py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-heading uppercase text-white tracking-tighter font-light mb-8">
            Your Room <span className="font-bold italic">Awaits.</span>
          </h2>
          <Link href="/reserve" className="inline-flex items-center gap-6 bg-white text-primary uppercase tracking-[0.3em] text-[11px] font-bold px-12 py-5 hover:bg-[#F0F4F8] transition-colors shadow-2xl">
            Book Your Ticket <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
