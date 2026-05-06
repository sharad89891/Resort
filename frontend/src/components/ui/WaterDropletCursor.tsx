"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function WaterDropletCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const rippleId = useRef(0);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Cursor snaps instantly
  const snapX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const snapY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  // Outer ring lags for a trailing effect
  const lagX = useSpring(mouseX, { stiffness: 80, damping: 16 });
  const lagY = useSpring(mouseY, { stiffness: 80, damping: 16 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); setVisible(true); };
    const down = (e: MouseEvent) => {
      setClicking(true);
      const id = rippleId.current++;
      setRipples(p => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 900);
    };
    const up = () => setClicking(false);
    const hover = (e: MouseEvent) => {
      setHovering(!!(e.target as HTMLElement).closest("a,button,[role=button],input,textarea,select"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", hover);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", hover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* ── Click Splash Ripples ── */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          className="fixed pointer-events-none z-[9999] rounded-full"
          style={{
            left: r.x, top: r.y,
            translateX: "-50%", translateY: "-50%",
            border: "2px solid #00d4ff",
            boxShadow: "0 0 12px #00d4ff, 0 0 30px rgba(0,212,255,0.4)",
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 80, height: 80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* ── Lagging outer glow ring ── */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{ x: lagX, y: lagY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: hovering ? 2.2 : clicking ? 0.7 : 1,
          opacity: hovering ? 0.6 : 0.35,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div
          className="rounded-full"
          style={{
            width: 44,
            height: 44,
            border: "1.5px solid #00d4ff",
            boxShadow: "0 0 10px #00d4ff, 0 0 28px rgba(0,212,255,0.35), inset 0 0 10px rgba(0,212,255,0.1)",
            background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ── Sharp inner cursor core ── */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{ x: snapX, y: snapY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: clicking ? 0.5 : hovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 28 }}
      >
        {/* Outer bright ring */}
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: 18,
            height: 18,
            background: "radial-gradient(circle, #00d4ff 0%, #00509E 60%, transparent 100%)",
            boxShadow: "0 0 8px #00d4ff, 0 0 20px rgba(0,212,255,0.7), 0 0 40px rgba(0,80,158,0.4)",
          }}
        >
          {/* Bright white center dot */}
          <div
            className="rounded-full"
            style={{ width: 5, height: 5, background: "#fff", boxShadow: "0 0 6px #fff" }}
          />
        </div>
      </motion.div>
    </>
  );
}
