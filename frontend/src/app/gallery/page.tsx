"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Gallery() {
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const images = [
    { src: "/images/wave_pool_wide_1778085845907.png", alt: "Wave Pool", col: "col-span-12 lg:col-span-8", height: "h-[600px]", offset: "mt-0" },
    { src: "/images/dj_pool_party_1778085753008.png", alt: "Nightlife", col: "col-span-12 lg:col-span-4", height: "h-[400px]", offset: "lg:mt-32 lg:-ml-16 z-10" },
    { src: "/images/ocean_villa_1778085767696.png", alt: "Ocean Villa", col: "col-span-12 lg:col-span-5", height: "h-[500px]", offset: "mt-20 lg:-mt-20 z-0" },
    { src: "/images/flowrider_surf_1778085735589.png", alt: "Surfing", col: "col-span-12 lg:col-span-7", height: "h-[700px]", offset: "mt-12 lg:mt-0 z-10 lg:-ml-12" },
    { src: "/images/underwater_suite_1778085791994.png", alt: "Underwater Suite", col: "col-span-12 lg:col-span-6", height: "h-[600px]", offset: "mt-20 z-0 lg:-mt-40" },
    { src: "/images/casual_dining_1778085878168.png", alt: "Dining", col: "col-span-12 lg:col-span-6", height: "h-[500px]", offset: "mt-12 lg:mt-20 z-10 lg:-ml-20" },
    { src: "/images/lazy_river_cave_1778085829476.png", alt: "Lazy River Cave", col: "col-span-12", height: "h-[80vh]", offset: "mt-20 z-0", clip: true },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Giant Watermark */}
        <div className="absolute top-0 left-0 text-[8rem] md:text-[15rem] font-heading font-bold text-stroke-light whitespace-nowrap z-0 pointer-events-none opacity-50">
          MOMENTS
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 pt-20 mb-32"
        >
          <span className="uppercase tracking-[0.4em] text-[10px] text-primary font-bold mb-4 block">Visual Journey</span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-heading uppercase text-foreground leading-[0.85] tracking-tighter mb-8">
            <span className="font-light">The Aqua</span> <br/>
            <span className="font-bold text-primary italic">Gallery.</span>
          </h1>
          <div className="flex gap-6">
             <div className="w-[1px] h-20 bg-primary"></div>
             <p className="text-foreground/70 max-w-sm font-light tracking-wide text-sm leading-relaxed pt-2">
               Immerse yourself in the Aqua experience before you even arrive. A collection of our most iconic moments.
             </p>
          </div>
        </motion.div>

        {/* Abstract Overlapping Grid */}
        <div className="grid grid-cols-12 gap-0 relative">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: index % 2 === 0 ? 0 : 0.2 }}
              style={index % 3 === 0 ? { y: ySlow } : index % 2 === 0 ? { y: yFast } : {}}
              className={`${img.col} ${img.height} ${img.offset} relative group`}
            >
              <div 
                className="w-full h-full relative overflow-hidden"
                style={img.clip ? { clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)' } : {}}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
