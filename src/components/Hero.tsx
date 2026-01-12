"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(196,167,125,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,115,85,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[--accent] to-transparent mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--muted] mb-6"
        >
          Developmental Psychologist
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-[family-name:var(--font-cormorant)] text-6xl sm:text-7xl md:text-8xl font-light tracking-tight mb-6"
        >
          <span className="block">Ishita</span>
          <span className="block gradient-text font-medium">Munshi</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[family-name:var(--font-inter)] text-base sm:text-lg font-light text-[--muted] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Ph.D. Candidate at Wayne State University exploring the intersections of
          adolescent development, interpersonal relationships, psychological resilience, and
          artificial intelligence's impact on human development and behavior.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#research"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-3 bg-[#1a1a1a] text-white font-[family-name:var(--font-inter)] text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10">View Research</span>
            <motion.div
              className="absolute inset-0 bg-[--accent]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 border border-[--border] text-[--foreground] font-[family-name:var(--font-inter)] text-sm tracking-wide hover:border-[--accent] hover:text-[--accent] transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[--accent] to-transparent mx-auto mt-16"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[--muted]">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[--accent] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
