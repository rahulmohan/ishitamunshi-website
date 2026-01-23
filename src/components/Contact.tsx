"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = {
  email: "ishita.munshi@wayne.edu",
  location: "Detroit, MI",
  institution: "Wayne State University",
  department: "Department of Psychology",
  address: "4830 Cass Avenue",
};

const links = [
  { name: "Google Scholar", url: "https://scholar.google.com/citations?user=byB4oeIAAAAJ&hl=en" },
  { name: "ResearchGate", url: "https://www.researchgate.net/profile/Ishita-Munshi" },
  { name: "MPSI Profile", url: "https://mpsi.wayne.edu/profile/hp1342" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ishita-munshi-80606015b" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[--accent]/30 to-transparent" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-5"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent-light] block mb-4">
            Connect
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light">
            Let&apos;s Start a
            <br />
            <span className="font-medium text-[--accent-light]">Conversation</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-[family-name:var(--font-inter)] text-white/70 font-light leading-relaxed mb-8">
              I&apos;m always interested in connecting with fellow researchers, collaborators,
              and anyone passionate about understanding human development and promoting
              healthy relationships.
            </p>

            {/* Email */}
            <motion.a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center gap-3 mb-8"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-[--accent-light] transition-colors">
                <svg className="w-5 h-5 text-[--accent-light]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 tracking-wider uppercase mb-1">
                  Email
                </p>
                <span className="font-[family-name:var(--font-cormorant)] text-xl text-white group-hover:text-[--accent-light] transition-colors">
                  {contactInfo.email}
                </span>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="w-12 h-12 flex items-center justify-center border border-white/20">
                <svg className="w-5 h-5 text-[--accent-light]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 tracking-wider uppercase mb-1">
                  Location
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-xl">
                  {contactInfo.location}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/70">
                  {contactInfo.institution}
                </p>
              </div>
            </motion.div>

            {/* Academic links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-8 border-t border-white/10"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white/20 font-[family-name:var(--font-inter)] text-sm text-white/70 hover:border-[--accent-light] hover:text-[--accent-light] transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[--accent]/20 to-transparent blur-3xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-10">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[--accent] to-[--accent-light] flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-4xl font-medium text-white">
                    IM
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium mb-2">
                  Ishita Munshi
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/70">
                  Ph.D. Candidate
                </p>
                <p className="font-[family-name:var(--font-inter)] text-xs text-white/50 mt-1">
                  Psychology
                </p>
              </div>

              <div className="space-y-4 text-center">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/70">
                  {contactInfo.department}
                </p>
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/70">
                  {contactInfo.institution}
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block mt-8 w-full py-4 bg-gradient-to-r from-[--accent] to-[--accent-light] text-white font-[family-name:var(--font-inter)] text-sm tracking-wide text-center hover:opacity-90 transition-opacity"
              >
                Send Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
