"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Droplet } from "lucide-react";

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState<{size: number, left: number, delay: number, duration: number}[]>([]);

  useEffect(() => {
    setBubbles(Array.from({ length: 15 }).map(() => ({
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5
    })));
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: "120vh", x: 0, opacity: 0 }}
          animate={{ 
            y: "-20vh", 
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.5, 0] 
          }}
          transition={{ 
            duration: b.duration, 
            repeat: Infinity, 
            delay: b.delay,
            ease: "linear"
          }}
          className="absolute rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          style={{ width: b.size, height: b.size, left: `${b.left}%` }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden text-foreground">
      
      {/* Editorial Hero Section */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden clip-diagonal">
        
        {/* Deep Parallax Background */}
        <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[120%] z-0 origin-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/40 to-black/80 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/videos/homepagevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        
        <FloatingBubbles />

        {/* Abstract Floating Typography */}
        <div className="relative z-20 px-6 w-full max-w-7xl mx-auto flex flex-col justify-center h-full">
          <div className="flex items-center gap-6 mb-12">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-[1px] bg-primary"
            />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="uppercase tracking-[0.4em] text-[10px] text-white font-bold"
            >
              The Pinnacle of Aquatic Luxury
            </motion.span>
          </div>

          <div className="relative">
            {/* Watermark Background Text */}
            <motion.div 
              style={{ x: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
              className="absolute -top-16 md:-top-32 -left-4 md:-left-10 text-[6rem] md:text-[15rem] font-heading font-bold text-stroke-light whitespace-nowrap z-0 pointer-events-none select-none"
            >
              AQUA
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[9rem] font-heading text-white uppercase tracking-tighter leading-[0.85] font-light relative z-10"
            >
              Redefining <br/> 
              <span className="ml-12 md:ml-32 font-bold text-primary italic">Thrills.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-base md:text-lg text-white/80 font-light mt-12 md:mt-16 max-w-md tracking-wide pl-6 md:pl-32 border-l border-white/20"
          >
            An architectural marvel suspended over the ocean. Where adrenaline meets absolute serenity.
          </motion.p>
        </div>

        {/* Animated Water Drop Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/50 font-bold mb-4">Drop In</span>
          <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
             <motion.div 
               animate={{ y: [0, 80] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "circIn" }}
               className="w-1.5 h-4 bg-primary absolute -left-[2px] top-0 rounded-full blur-[1px]"
             />
          </div>
        </motion.div>
        
        {/* SVG Wave Divider at the bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none transform translate-y-[1px]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[50px] md:h-[100px] fill-background">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Asymmetrical Attractions Showcase */}
      <section className="pt-20 lg:pt-40 pb-32 lg:pb-60 relative bg-background">
        {/* Giant Watermark */}
        <div className="absolute top-10 lg:top-20 right-0 text-[6rem] lg:text-[12rem] font-heading font-bold text-stroke whitespace-nowrap z-0 pointer-events-none transform rotate-90 origin-right opacity-50">
          THE ZENITH
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Overlapping Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative z-20 pt-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <Droplet className="text-primary" size={24} strokeWidth={1} />
                <span className="uppercase tracking-[0.3em] text-[10px] text-muted-foreground font-bold">Signature Drop</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-heading uppercase font-light text-foreground mb-8 leading-none tracking-tight">
                Zero <br/>
                <span className="font-bold text-primary italic ml-8">Gravity.</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-12 font-light tracking-wide text-sm md:text-base pr-8">
                Suspended 150 feet above the crystal lagoons, The Zenith provides an unparalleled free-fall experience wrapped in cutting-edge transparent aquariums. It is an engineering masterpiece built for pure adrenaline.
              </p>
              
              <Link href="/attractions" className="inline-flex items-center gap-4 uppercase tracking-[0.2em] text-[10px] text-foreground hover:text-primary transition-colors font-bold group">
                <span className="border-b border-primary pb-1">Discover The Zenith</span>
                <div className="w-10 h-[1px] bg-foreground group-hover:bg-primary transition-colors group-hover:w-16 duration-300"></div>
              </Link>
            </motion.div>

            {/* Edge-to-Edge Image with Negative Margin Overlap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative h-[400px] lg:h-[700px] mt-10 lg:mt-0 lg:-ml-12 lg:-mt-32 z-10"
            >
              <div className="absolute inset-0 bg-primary/10 transform -translate-x-4 translate-y-4"></div>
              <img 
                src="/images/catchy_attr.png" 
                alt="Steep Water Slide" 
                className="w-full h-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.15)] filter saturate-150" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Abstract Sanctuaries Section (Diagonal Divider) */}
      <section className="relative py-40 clip-diagonal-reverse -mt-32 bg-[#F0FBFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Multi-layered Image Composition */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative h-[500px] lg:h-[800px] w-full"
            >
              <img 
                src="/images/wave_pool_wide_1778085845907.png" 
                alt="Wave Pool" 
                className="absolute top-0 right-0 w-4/5 h-[350px] lg:h-[600px] object-cover shadow-2xl z-10" 
              />
              <motion.img 
                style={{ y: ySlow }}
                src="/images/ocean_villa_1778085767696.png" 
                alt="Ocean Villa" 
                className="absolute bottom-0 left-0 w-2/3 h-[250px] lg:h-[400px] object-cover shadow-2xl z-20 border-4 lg:border-8 border-[#F0FBFC]" 
              />
            </motion.div>
            
            {/* Typographical Layout */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="relative z-30 lg:pl-12"
            >
              <h2 className="text-6xl lg:text-8xl font-heading uppercase text-foreground mb-12 tracking-tighter leading-[0.9]">
                <span className="font-light block mb-4">Absolute</span>
                <span className="font-bold text-primary">Seclusion.</span>
              </h2>
              <div className="flex gap-6 mb-12">
                <div className="w-[1px] h-32 bg-primary"></div>
                <p className="text-foreground/70 leading-relaxed font-light text-sm lg:text-base tracking-wide max-w-sm pt-2">
                  Beyond the exhilarating attractions lies an oasis of calm. Our premium cabanas and ultra-luxury overwater suites are designed to provide the ultimate reset. Immerse yourself in refined comfort, dedicated butler service, and flawless execution.
                </p>
              </div>
              <Link href="/accommodations" className="group flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ArrowRight strokeWidth={1} size={24} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-foreground">Explore Suites</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Edge-to-Edge Nightlife Banner */}
      <section className="relative h-[90vh] overflow-hidden flex items-center clip-diagonal -mt-20">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="/images/catchy_nightlife.png" 
          alt="Nightlife" 
          className="absolute inset-0 w-full h-full object-cover transform scale-110" 
        />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-8 block">After Dark</span>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-heading uppercase text-white tracking-tighter font-light leading-none mb-12 drop-shadow-2xl">
              Electric <br/>
              <span className="font-bold italic">Nights.</span>
            </h2>
            <Link href="/experiences" className="inline-block bg-primary hover:bg-primary/90 text-white transition-all uppercase tracking-[0.3em] text-[10px] px-12 py-5 font-bold">
              Discover Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Abstract Culinary Section */}
      <section className="py-40 bg-background relative overflow-hidden -mt-20">
         <div className="absolute top-1/4 left-0 w-1/2 h-[1px] bg-muted"></div>
         <div className="absolute bottom-1/4 right-0 w-1/2 h-[1px] bg-muted"></div>
         
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="order-2 md:order-1"
              >
                <h3 className="text-5xl lg:text-7xl font-heading uppercase text-foreground font-light tracking-tighter leading-none mb-8">
                  Culinary <br/>
                  <span className="font-bold text-primary italic">Mastery.</span>
                </h3>
                <p className="text-sm text-foreground/70 font-light mb-12 max-w-sm leading-relaxed">
                  From Michelin-starred oceanic cuisine in The Abyssal underwater restaurant to massive loaded nachos at the Surfside Shack. Refuel without ever leaving the water.
                </p>
                <Link href="/dining" className="uppercase tracking-[0.2em] text-[10px] font-bold text-foreground hover:text-primary transition-colors flex items-center gap-4">
                  View Menus <ArrowRight size={14} />
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="order-1 md:order-2 relative h-[400px] lg:h-[600px] w-full"
              >
                {/* Organic masking shape instead of rounded corners */}
                <div className="w-full h-full" style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
                  <img 
                    src="/images/casual_dining_1778085878168.png" 
                    alt="Dining" 
                    className="w-full h-full object-cover filter contrast-125" 
                  />
                </div>
              </motion.div>
              
            </div>
         </div>
      </section>

    </div>
  );
}
