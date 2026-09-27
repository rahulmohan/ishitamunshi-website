"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { presentations, presentationCounts } from "../data/presentations";

// Count-up animation component - must be outside main component to prevent re-creation
function CountUp({ value, isInView }: { value: number; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      let startTime: number;
      const duration = 1500;

      const animateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(eased * value));

        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };

      requestAnimationFrame(animateValue);
    }
  }, [isInView, value]);

  return <>{displayValue}</>;
}

const stats = [
  { label: "Paper Presentations", value: 17 },
  { label: "Poster Presentations", value: presentationCounts.poster },
  { label: "Symposia", value: presentationCounts.symposium },
];

const typeLabels = {
  symposium: "Symposium",
  paper: "Paper",
  poster: "Poster",
  workshop: "Workshop",
  "data-blitz": "Data Blitz",
};

export default function Presentations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<"all" | "symposium" | "paper" | "poster" | "workshop" | "data-blitz">("all");
  const [showAll, setShowAll] = useState(false);

  const filteredPresentations = presentations.filter(
    (p) => activeFilter === "all" || p.type === activeFilter
  );

  const displayedPresentations = showAll
    ? filteredPresentations
    : filteredPresentations.slice(0, 8);

  return (
    <section
      id="presentations"
      className="py-20 bg-[--background] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[--accent]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[--accent-light]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] mb-4">
            Academic Presentations
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light mb-4">
            Conference Symposia &{" "}
            <span className="gradient-text">Presentations</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-3 sm:p-6 bg-white border border-[--border] rounded-sm"
            >
              <div className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light text-[--accent] mb-2">
                <CountUp value={stat.value} isInView={isInView} />
              </div>
              <div className="font-[family-name:var(--font-inter)] text-[10px] sm:text-xs tracking-wider uppercase text-[--muted]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {(["all", "symposium", "paper", "poster", "workshop", "data-blitz"] as const).map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs tracking-wide transition-all duration-300 border ${
                  activeFilter === filter
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-[#f5f5f5] border-[#e5e5e5] text-[#6b6b6b] hover:border-[#8b7355] hover:text-[#8b7355]"
                }`}
              >
                {filter === "all" ? "All" : typeLabels[filter]} ({presentationCounts[filter]})
              </button>
            )
          )}
        </motion.div>

        {/* Presentations Grid */}
        <div className="grid gap-6 mb-8">
          {displayedPresentations.map((presentation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="group relative bg-white p-8 border border-[--border] hover:border-[--accent] transition-all duration-300"
            >
              {/* Type Badge */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-[--accent]/10 text-[--accent] font-[family-name:var(--font-inter)] text-[10px] tracking-wider uppercase">
                {typeLabels[presentation.type]}
              </div>

              {/* Year Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-[--background] text-[--muted] font-[family-name:var(--font-inter)] text-xs">
                {presentation.month ? `${presentation.month}, ` : ""}{presentation.year}
              </div>

              <div className="mt-8">
                {/* Title */}
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-3 pr-16 group-hover:text-[--accent] transition-colors">
                  {presentation.title}
                </h3>

                {/* Authors */}
                <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mb-2">
                  {presentation.authors}
                </p>

                {/* Conference */}
                <p className="font-[family-name:var(--font-inter)] text-sm text-[--foreground] mb-1">
                  {presentation.conference}
                </p>

                {/* Location */}
                <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                  {presentation.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredPresentations.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase px-8 py-4 border border-[--accent] text-[--accent] hover:bg-[--accent] hover:text-white transition-all duration-300"
            >
              {showAll
                ? "Show Less"
                : `Show All ${filteredPresentations.length} Presentations`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
