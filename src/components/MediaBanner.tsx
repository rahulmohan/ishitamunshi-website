"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mediaFeatures = [
  {
    publication: "The Detroit News",
    title: "AI is replacing support for teens. Michigan isn't ready",
    date: "January 2026",
    url: "https://www.detroitnews.com/story/opinion/2026/01/07/munshi-ai-is-replacing-support-for-teens-michigan-isnt-ready/88046239007/?gnt-cfr=1&gca-cat=p&gca-uir=true&gca-epti=z124166e124166v000050g0000xxd--55--b--55--&gca-ft=226&gca-ds=sophi",
    type: "Opinion",
  },
  {
    publication: "Psychology Today",
    title: "How Do Young Adults Use Technology in Their Relationships?",
    date: "September 2024",
    url: "https://www.psychologytoday.com/us/blog/close-encounters/202409/how-do-young-adults-use-technology-in-their-relationships",
    type: "Featured Research",
  },
];

export default function MediaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[--background] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="media-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#media-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[--accent]">
            Featured In
          </span>
        </motion.div>

        {/* Media cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {mediaFeatures.map((feature, index) => (
            <motion.a
              key={feature.publication}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-white p-5 sm:p-6 md:p-8 border border-[--border] hover:border-[--accent] transition-all duration-500 hover:shadow-xl"
            >
              {/* Type badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 px-2 sm:px-3 py-1 bg-[--accent]/10 text-[--accent] font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-wider uppercase">
                {feature.type}
              </div>

              {/* Publication name */}
              <div className="flex items-start gap-2.5 sm:gap-3 mb-3 sm:mb-4 pr-16 sm:pr-20 md:pr-24">
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[--accent]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[--accent]/10 transition-colors">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[--accent]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl font-medium text-[--foreground] group-hover:text-[--accent] transition-colors break-words leading-tight">
                    {feature.publication}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-1">
                    {feature.date}
                  </p>
                </div>
              </div>

              {/* Article title */}
              <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] leading-relaxed mb-3 sm:mb-4">
                {feature.title}
              </p>

              {/* Read more link */}
              <div className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs text-[--accent] group-hover:gap-3 transition-all">
                <span>Read Article</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <svg className="w-full h-full text-[--accent]/5" viewBox="0 0 100 100">
                  <circle cx="100" cy="100" r="80" fill="currentColor" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-[1px] bg-gradient-to-r from-[--accent] to-transparent mx-auto mt-12"
        />
      </div>
    </section>
  );
}
