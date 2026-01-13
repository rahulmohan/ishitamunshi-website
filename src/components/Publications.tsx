"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const publications = [
  {
    authors: "Munshi, I., Basting, E. J., Reich, K., & Goncy, E. A.",
    year: "In Press",
    title: "Synergy effect of childhood maltreatment: When problematic alcohol use and impulsive emotional dysregulation predict dating aggression perpetration",
    journal: "Journal of Interpersonal Violence",
    type: "journal",
  },
  {
    authors: "Munshi, I., Basting, E. J., Dongarra, M., Harangozo, J., & Goncy, E. A.",
    year: "2024",
    title: "Emerging adult perceptions of costs and benefits of using information and communication technology in dating relationships",
    journal: "Personal Relationships, 31(3), 855–882",
    doi: "10.1111/pere.12566",
    type: "journal",
  },
  {
    authors: "Munshi, I., Ishaq, J. K., Liebhardt, B., & Goncy, E. A.",
    year: "2023",
    title: "Maternal communication about sexual content and ease of access to contraceptives",
    journal: "Archives of Sexual Behavior, 52(4), 1607–1616",
    doi: "10.1007/s10508-022-02476-4",
    type: "journal",
  },
  {
    authors: "Basting, E. J., Munshi, I., Harangozo, J., Dongarra, M. S., & Goncy, E. A.",
    year: "2023",
    title: "When does technology use within dating relationships cross the line? A thematic content analysis of semi-structured interviews with young adults",
    journal: "Psychology of Violence, 13(6), 488–496",
    doi: "10.1037/vio0000479",
    type: "journal",
  },
  {
    authors: "Ishaq, J. K., Munshi, I., Liebhardt, B., & Goncy, E. A.",
    year: "2023",
    title: "Identifying gaps in sexual health and prevention education: What women learned and what women wish they learned",
    journal: "American Journal of Sexuality Education, 18(4), 523–539",
    doi: "10.1080/15546128.2023.2169975",
    type: "journal",
  },
  {
    authors: "Gupta A., Munshi I., & Bagga J. K.",
    year: "2021",
    title: "The Skin Color Preference of Lighter and Darker Skin Colored Males and Females",
    journal: "International Journal of Indian Psychology, 9(3), 615-633",
    doi: "10.25215/0903.059",
    type: "journal",
  },
];

const underReview = [
  {
    authors: "Munshi, I., & Mohan, R.",
    title: "Prompting the Prohibited: A Large-Scale Thematic Analysis of Toxic Information Behavior on ChatGPT",
    journal: "Online Information Review",
  },
  {
    authors: "Cosby, J., Simon, V.A., & Munshi, I.",
    title: "Longitudinal Associations between Posttraumatic Stress and Close Friendship Quality among Violence-Exposed Adolescent Girls",
    journal: "Journal of Interpersonal Violence",
  },
  {
    authors: "Horvath. M., Bracken, C. M., Munshi, I., Dong, L., & Goodell, J. E.",
    title: "Is gender a proxy for career prioritization? Exploring relationships between gender, career prioritization, and work-life outcomes",
    journal: "Community, Work, and Family",
  },
];

// Count-up animation hook
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

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedPublications = showAll ? publications : publications.slice(0, 4);

  return (
    <section id="publications" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="lines" patternUnits="userSpaceOnUse" width="10" height="10">
            <path d="M 0 10 L 10 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lines)" />
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
            Scholarly Work
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light">
            Selected
            <br />
            <span className="font-medium gradient-text">Publications</span>
          </h2>
        </motion.div>

        {/* Publication stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:gap-8 mb-16 max-w-xl mx-auto"
        >
          {[
            { number: 7, label: "Journal", sublabel: "Articles" },
            { number: 3, label: "Under", sublabel: "Review" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-4 sm:p-6 border border-[--border] hover:border-[--accent] transition-colors duration-300"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light gradient-text">
                <CountUp value={stat.number} isInView={isInView} />
              </span>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-2 tracking-wide">
                {stat.label}
                <br />
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications list */}
        <div className="space-y-6">
          {displayedPublications.map((pub, index) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group relative bg-[--background] p-8 border-l-2 border-[--border] hover:border-[--accent] transition-all duration-300"
            >
              {/* Year badge */}
              <span className="absolute top-8 right-8 font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent]">
                {pub.year}
              </span>

              <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mb-2 pr-16">
                {pub.authors}
              </p>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-3 leading-relaxed group-hover:text-[--accent] transition-colors">
                {pub.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] italic mb-3">
                {pub.journal}
              </p>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-xs text-[--accent] hover:underline"
                >
                  <span>DOI: {pub.doi}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.article>
          ))}
        </div>

        {/* Show more button */}
        {publications.length > 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-[family-name:var(--font-inter)] text-sm text-[--accent] hover:underline"
            >
              {showAll ? "Show Less" : `Show All ${publications.length} Publications`}
            </button>
          </motion.div>
        )}

        {/* Under review section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20"
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-center mb-8">
            Under Review
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {underReview.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="p-6 border border-dashed border-[--border] hover:border-[--accent] transition-colors duration-300"
              >
                <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mb-2">
                  {pub.authors}
                </p>
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2 line-clamp-3">
                  {pub.title}
                </h4>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[--accent] italic">
                  {pub.journal}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scholar links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex justify-center gap-8 mt-12"
        >
          <a
            href="https://scholar.google.com/citations?user=byB4oeIAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-[--muted] hover:text-[--accent] transition-colors elegant-underline"
          >
            Google Scholar
          </a>
          <a
            href="https://www.researchgate.net/profile/Ishita-Munshi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-[family-name:var(--font-inter)] text-sm text-[--muted] hover:text-[--accent] transition-colors elegant-underline"
          >
            ResearchGate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
