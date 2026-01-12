"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-[--accent-light]">
              Ishita Munshi
            </span>
            <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 mt-1">
              Developmental Psychologist
            </p>
          </motion.div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Research", "Publications", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-[family-name:var(--font-inter)] text-xs text-white/50 hover:text-[--accent-light] transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-[family-name:var(--font-inter)] text-xs text-white/30">
            © {currentYear} Ishita Munshi
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Back to top */}
        <motion.a
          href="#"
          whileHover={{ y: -3 }}
          className="flex flex-col items-center gap-2 mt-8 text-white/30 hover:text-[--accent-light] transition-colors"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase">
            Back to Top
          </span>
        </motion.a>
      </div>
    </footer>
  );
}
