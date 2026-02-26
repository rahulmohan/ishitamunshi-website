"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 sm:pt-20">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-4 sm:mb-8"
        >
          {/* Decorative ring */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-40 h-40 sm:w-80 sm:h-80 mx-auto rounded-full"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, var(--accent) 25%, transparent 50%, var(--accent) 75%, transparent 100%)",
              opacity: 0.3,
            }}
          />
          {/* Photo container */}
          <div className="relative w-36 h-36 sm:w-72 sm:h-72 mx-auto rounded-full overflow-hidden border-2 border-[--accent]/20 shadow-xl">
            <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
              <Image
                src="/photos/ishita-headshot.jpg"
                alt="Ishita Munshi"
                fill
                className="object-cover object-[center_20%] scale-[1.1]"
                priority
              />
            </div>
          </div>
          {/* Decorative dots - hidden on mobile */}
          <div className="hidden sm:block absolute top-0 right-1/4 w-2 h-2 rounded-full bg-[--accent]/40" />
          <div className="hidden sm:block absolute bottom-4 left-1/4 w-1.5 h-1.5 rounded-full bg-[--accent]/30" />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[--accent] to-transparent mx-auto mb-4 sm:mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-inter)] text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[--muted] mb-3 sm:mb-6"
        >
          Psychologist in the Making
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-6xl md:text-7xl font-light tracking-tight mb-4 sm:mb-6"
        >
          Ishita <span className="gradient-text font-medium">Munshi</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-[family-name:var(--font-inter)] text-xs sm:text-sm font-light text-[--muted] max-w-lg mx-auto leading-relaxed mb-6 sm:mb-8 px-4"
        >
          Ph.D. Candidate in Psychology at Wayne State University exploring
          dating relationships, with a focus on how technology—particularly
          AI—shapes love, attachment, and romantic connections with AI chatbots.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.a
            href="#research"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-5 sm:px-8 py-2.5 sm:py-3 bg-[#1a1a1a] text-white font-[family-name:var(--font-inter)] text-xs sm:text-sm tracking-wide overflow-hidden"
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
            className="px-5 sm:px-8 py-2.5 sm:py-3 border border-[--border] text-[--foreground] font-[family-name:var(--font-inter)] text-xs sm:text-sm tracking-wide hover:border-[--accent] hover:text-[--accent] transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[--accent] to-transparent mx-auto mt-8 sm:mt-16"
        />
      </div>

    </section>
  );
}
