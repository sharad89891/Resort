"use client";

import { motion } from "framer-motion";
import { Ticket, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Reserve() {
  const [ticketType, setTicketType] = useState('day');

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden text-foreground">
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Giant Watermark */}
        <div className="absolute top-0 right-0 text-[6rem] md:text-[15rem] font-heading font-bold text-stroke-light whitespace-nowrap z-0 pointer-events-none opacity-50">
          SECURE
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 pt-20 mb-32"
        >
          <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Access & Reservations</span>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading uppercase text-foreground leading-[0.85] tracking-tighter mb-8">
            <span className="font-light">Secure Your</span> <br/>
            <span className="font-bold text-primary italic">Pass.</span>
          </h1>
          <div className="flex gap-6">
             <div className="w-[1px] h-20 bg-primary"></div>
             <p className="text-foreground/70 max-w-sm font-light tracking-wide text-sm leading-relaxed pt-2">
               Purchase park passes or reserve exclusive cabanas. Due to high demand, advance booking is strictly required to guarantee entry.
             </p>
          </div>
        </motion.div>

        {/* Custom Ticket Toggle */}
        <div className="flex justify-start mb-20 relative z-10">
          <div className="flex border-b border-muted w-full max-w-2xl gap-8">
            <button 
              onClick={() => setTicketType('day')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${ticketType === 'day' ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'}`}
            >
              Day Passes
              {ticketType === 'day' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />}
            </button>
            <button 
              onClick={() => setTicketType('season')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${ticketType === 'season' ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'}`}
            >
              Season Passes
              {ticketType === 'season' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />}
            </button>
            <button 
              onClick={() => setTicketType('cabana')}
              className={`pb-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${ticketType === 'cabana' ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'}`}
            >
              VIP Cabanas
              {ticketType === 'cabana' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          
          {/* Left Column: Interactive Form */}
          <div className="col-span-1 lg:col-span-8 pr-0 lg:pr-12">
            <h2 className="text-3xl font-heading uppercase tracking-tighter mb-8 font-light mt-10 lg:mt-0">Select <span className="font-bold italic text-primary">Experience</span></h2>
            
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="date" id="date" className="peer w-full bg-transparent border-b border-muted py-2 text-foreground focus:outline-none focus:border-primary transition-colors uppercase text-sm tracking-widest" required />
                  <label htmlFor="date" className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50">Visit Date</label>
                </div>
                
                <div className="relative">
                  <select id="guests" className="peer w-full bg-transparent border-b border-muted py-2 text-foreground appearance-none focus:outline-none focus:border-primary transition-colors text-sm tracking-widest uppercase">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>2 Adults, 2 Children</option>
                    <option>Group (5+)</option>
                  </select>
                  <label htmlFor="guests" className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50">Guests</label>
                </div>
              </div>

              {ticketType === 'cabana' && (
                <div className="space-y-6 pt-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 block">Cabana Location</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     <div className="border border-primary bg-primary/5 p-6 cursor-pointer relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-full flex items-start justify-end p-1"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div></div>
                        <p className="text-xs uppercase tracking-widest text-foreground font-bold mb-2">Wave Pool</p>
                        <p className="text-[10px] text-primary font-bold tracking-widest">+ $450</p>
                     </div>
                     <div className="border border-muted hover:border-primary/50 p-6 cursor-pointer transition-all">
                        <p className="text-xs uppercase tracking-widest text-foreground/70 font-bold mb-2">Lazy River</p>
                        <p className="text-[10px] text-foreground/50 font-bold tracking-widest">+ $300</p>
                     </div>
                     <div className="border border-muted hover:border-primary/50 p-6 cursor-pointer transition-all">
                        <p className="text-xs uppercase tracking-widest text-foreground/70 font-bold mb-2">Zenith Tower</p>
                        <p className="text-[10px] text-foreground/50 font-bold tracking-widest">+ $800</p>
                     </div>
                  </div>
                </div>
              )}

              <div className="pt-10 mt-10 border-t border-muted">
                <button type="button" className="group flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ArrowRight strokeWidth={1} size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-foreground">Proceed to Checkout</span>
                </button>
              </div>
            </form>
          </div>

          {/* Minimal Summary Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 lg:col-span-4 relative z-10 lg:-ml-10 mt-10 lg:mt-20"
          >
            <div className="bg-[#F0FBFC] p-8 lg:p-20 shadow-2xl relative" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
               <h3 className="text-xl font-heading uppercase text-foreground tracking-tighter mb-10 font-light">
                 Order <span className="font-bold italic text-primary">Summary</span>
               </h3>
               
               <div className="space-y-6 mb-12">
                  <div className="flex justify-between items-center border-b border-muted/50 pb-4">
                     <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/70">{ticketType === 'day' ? 'Day Pass (Adult)' : ticketType === 'season' ? 'Season Pass' : 'VIP Cabana'} x 1</span>
                     <span className="text-sm font-heading font-bold text-foreground">{ticketType === 'day' ? '$120' : ticketType === 'season' ? '$450' : '$450'}</span>
                  </div>
                  {ticketType === 'day' && (
                    <div className="flex justify-between items-center border-b border-muted/50 pb-4">
                       <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/70">Fast Track Add-on</span>
                       <span className="text-sm font-heading font-bold text-foreground">$40</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-b border-muted/50 pb-4">
                     <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/70">Taxes & Fees</span>
                     <span className="text-sm font-heading font-bold text-foreground">$15</span>
                  </div>
               </div>

               <div className="flex justify-between items-end mb-12">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-bold">Total USD</span>
                  <span className="text-5xl font-heading text-primary tracking-tighter leading-none">${ticketType === 'day' ? '175' : ticketType === 'season' ? '465' : '465'}</span>
               </div>

               <div className="flex gap-4 items-start bg-white p-6 shadow-sm">
                  <Ticket className="text-primary mt-1" size={20} strokeWidth={1.5} />
                  <p className="text-[10px] uppercase tracking-widest text-foreground/50 leading-relaxed font-bold">
                    Passes are delivered instantly via email and can be added to Apple or Google Wallet.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
