"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  { icon: MapPin, label: "Location", value: "123 Serenity Boulevard\nParadise Island, PI 00000" },
  { icon: Phone, label: "Direct Line", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "VIP Concierge", value: "concierge@aquaresort.com" },
  { icon: Clock, label: "Concierge Hours", value: "24 Hours · 7 Days" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/concierge_desk_1778085860608.png" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="uppercase tracking-[0.4em] text-[11px] text-primary font-bold mb-4 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-heading uppercase text-white leading-[0.85] tracking-tighter">
              <span className="font-light">At Your</span><br />
              <span className="font-bold text-primary italic">Service.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Detail Strip */}
      <section className="w-full bg-[#0A2540]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {contactDetails.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-3 p-8 lg:p-12"
            >
              <item.icon size={20} className="text-primary" />
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</p>
              <p className="text-white font-light text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map — 50/50 */}
      <section className="w-full bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center p-10 lg:p-16 xl:p-24"
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4 block">Inquiries</span>
            <h2 className="text-4xl lg:text-5xl font-heading uppercase tracking-tighter leading-none mb-12">
              Send an <span className="font-bold italic text-primary">Inquiry</span>
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="fname" className="peer w-full bg-transparent border-b border-muted py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="fname" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-primary">First Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="lname" className="peer w-full bg-transparent border-b border-muted py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lname" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-primary">Last Name</label>
                </div>
              </div>

              <div className="relative">
                <input type="email" id="email" className="peer w-full bg-transparent border-b border-muted py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent" placeholder="Email" />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-primary">Email Address</label>
              </div>

              <div className="relative">
                <select id="subject" defaultValue="" className="peer w-full bg-transparent border-b border-muted py-3 text-foreground appearance-none focus:outline-none focus:border-primary transition-colors">
                  <option value="" disabled hidden></option>
                  <option>General Inquiry</option>
                  <option>VIP Transfers</option>
                  <option>Private Events</option>
                  <option>Reservations</option>
                </select>
                <label htmlFor="subject" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40">Subject</label>
              </div>

              <div className="relative mt-12">
                <textarea id="message" rows={4} className="peer w-full bg-transparent border-b border-muted py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder-transparent resize-none" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/40 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-primary">Your Message</label>
              </div>

              <button type="button" className="group flex items-center gap-6 mt-8">
                <div className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Send strokeWidth={1.5} size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-foreground">Send Message</span>
              </button>
            </form>
          </motion.div>

          {/* Map / Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden min-h-[500px] bg-[#0A2540]"
          >
            <img src="/images/concierge_desk_1778085860608.png" alt="Aqua Headquarters" className="w-full h-full object-cover opacity-50 absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/80 to-transparent" />
            <div className="absolute bottom-12 left-12 text-white">
              <h3 className="text-3xl font-heading uppercase tracking-tighter mb-6 font-light">Aqua <span className="font-bold italic text-primary">HQ</span></h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                123 Serenity Boulevard<br />
                Paradise Island, PI 00000
              </p>
              <p className="text-primary font-bold text-sm mt-4 uppercase tracking-widest">Private Island Resort</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
