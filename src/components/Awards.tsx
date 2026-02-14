"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const awards = [
  {
    title: "Pre-Doctoral Rumble Fellowship Award",
    source: "Wayne State University",
    year: "2026–2027",
    amount: "$20,000 + Tuition",
    description: "Prestigious university fellowship supporting Ph.D. students with a $20,000 stipend and tuition scholarship to optimize performance at each stage of doctoral training.",
    type: "fellowship",
  },
  {
    title: "Pre-Doctoral Fellowship",
    source: "Merrill Palmer Skillman Institute",
    year: "2025",
    amount: "$3,000",
    description: "Competitive fellowship emphasizing interdisciplinary research, advanced training, and community outreach in psychology.",
    type: "fellowship",
  },
  {
    title: "NSF Sponsored Research Assistantship",
    source: "National Science Foundation via Cleveland State University",
    year: "2022–2023",
    amount: "$8,400 + Tuition",
    description: "External research funding supporting graduate research in STEM gender equity.",
    type: "grant",
  },
  {
    title: "Graduate Student Research Award",
    source: "Cleveland State University",
    year: "2023",
    amount: "$2,471",
    description: "Principal Investigator grant supporting master's thesis on intimate partner violence and alcohol use during COVID-19.",
    type: "grant",
  },
  {
    title: "Outstanding Psychology Graduate Student",
    source: "Cleveland State University",
    year: "2022",
    description: "Department-wide recognition for academic excellence and research contributions.",
    type: "honor",
  },
  {
    title: "Excellent Achievement Award in Research",
    source: "CSU College of Graduate Studies",
    year: "2022",
    amount: "$250",
    description: "Recognition for excellence in social sciences research.",
    type: "honor",
  },
  {
    title: "Dr. James M. Schuerger Endowment Fund",
    source: "Cleveland State University",
    year: "2021, 2022",
    amount: "$2,194",
    description: "Competitive endowment supporting psychology graduate students.",
    type: "scholarship",
  },
];

const affiliations = [
  { name: "Merrill Palmer Skillman Institute", role: "Fellow", year: "2025" },
  { name: "Society for Research in Child Development", role: "Member", year: "2025" },
  { name: "Association for Behavioral and Cognitive Therapies", role: "Member", year: "2022" },
  { name: "American Psychological Association", role: "Member", year: "2021" },
  { name: "Psi-Chi International Honor Society", role: "Member", year: "2022" },
  { name: "Society for Research on Adolescence", role: "Member", year: "2022" },
];

// Count-up animation for dollar amounts - must be outside main component
function CountUpDollar({ value, isInView }: { value: number; isInView: boolean }) {
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

  return <>${displayValue.toLocaleString()}+</>;
}

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "fellowship", label: "Fellowships" },
    { id: "grant", label: "Grants" },
    { id: "honor", label: "Honors" },
  ];

  const filteredAwards = activeFilter === "all"
    ? awards
    : awards.filter((a) => a.type === activeFilter);

  return (
    <section id="awards" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="award-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#award-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] block mb-4">
            Recognition
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light">
            Awards &
            <br />
            <span className="font-medium gradient-text">Honors</span>
          </h2>
        </motion.div>

        {/* Total funding highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-6xl sm:text-7xl font-light gradient-text">
            <CountUpDollar value={36000} isInView={isInView} />
          </span>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mt-4 tracking-wide">
            Total Research Funding & Awards
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs tracking-wide transition-all duration-300 border ${
                activeFilter === filter.id
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-[#f5f5f5] border-[#e5e5e5] text-[#6b6b6b] hover:border-[#8b7355] hover:text-[#8b7355]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Awards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredAwards.map((award) => (
            <article
              key={award.title}
              className="group relative bg-[#fafafa] p-8 border border-[#e5e5e5] hover:border-[#8b7355] transition-all duration-300 hover:shadow-lg"
            >
              {/* Type badge */}
              <span className="absolute top-6 right-6 px-2 py-1 bg-[--accent]/10 text-[--accent] font-[family-name:var(--font-inter)] text-[10px] tracking-wider uppercase">
                {award.type}
              </span>

              <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent] block mb-3">
                {award.year}
              </span>

              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium mb-2 group-hover:text-[--accent] transition-colors pr-16">
                {award.title}
              </h3>

              <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mb-3">
                {award.source}
              </p>

              {award.amount && (
                <p className="font-[family-name:var(--font-cormorant)] text-xl font-medium gradient-text mb-3">
                  {award.amount}
                </p>
              )}

              {award.description && (
                <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] leading-relaxed">
                  {award.description}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Professional affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24"
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-center mb-12">
            Professional Affiliations
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="group flex items-center gap-4 p-4 bg-[--background] border border-[--border] hover:border-[--accent] transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-[--border] group-hover:border-[--accent] transition-colors">
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[--accent]">
                    {affiliation.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-inter)] text-sm font-medium">
                    {affiliation.name}
                  </h4>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                    {affiliation.role} · {affiliation.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
