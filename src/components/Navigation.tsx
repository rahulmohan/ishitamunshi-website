"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Presentations", href: "#presentations" },
  { name: "Teaching", href: "#teaching" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className="font-[family-name:var(--font-cormorant)] text-2xl font-medium tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="gradient-text">IM</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  className="font-[family-name:var(--font-inter)] text-sm font-light tracking-wide text-[--muted] hover:text-[--foreground] transition-colors duration-300 elegant-underline"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute w-6 h-[1px] bg-[--foreground] transition-colors"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-6 h-[1px] bg-[--foreground]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="absolute w-6 h-[1px] bg-[--foreground] transition-colors"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-wide text-[--foreground] hover:text-[--accent] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
