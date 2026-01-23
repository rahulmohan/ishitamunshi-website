"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Count-up animation component with suffix support
function CountUpWithSuffix({ value, isInView }: { value: string; isInView: boolean }) {
  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      // For small numbers, use step-based animation
      // For larger numbers, use time-based animation
      if (numValue <= 50) {
        // Step through each number with a delay
        let current = 0;
        const stepDelay = Math.max(50, 1500 / numValue); // At least 50ms per step

        const stepUp = () => {
          current++;
          setDisplayValue(current);
          if (current < numValue) {
            setTimeout(stepUp, stepDelay);
          }
        };
        stepUp();
      } else {
        // Use smooth animation for larger numbers
        let startTime: number;
        const duration = 1500;

        const animateValue = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(eased * numValue));

          if (progress < 1) {
            requestAnimationFrame(animateValue);
          }
        };

        requestAnimationFrame(animateValue);
      }
    }
  }, [isInView, numValue]);

  return <>{displayValue}{suffix}</>;
}

const education = [
  {
    degree: "Ph.D. in Psychology",
    field: "Psychology",
    institution: "Wayne State University",
    year: "2023 – 2028 (Expected)",
    major: "Developmental Psychology",
    minors: "Clinical & Quantitative Psychology",
  },
  {
    degree: "M.A. in Clinical Psychology",
    field: "Clinical Psychology",
    institution: "Cleveland State University",
    year: "2021 – 2023",
  },
  {
    degree: "B.A. in Psychology",
    field: "Psychology",
    institution: "University of Delhi",
    year: "2017 – 2020",
  },
];

const researchInterests = [
  "Dating Relationships",
  "Intimate Partner Violence (IPV)",
  "Technology & Relationships",
  "Adverse Childhood Experiences (ACEs)",
  "AI & Relationships",
  "Sexual Health and Behavior",
];

const populationsOfInterest = [
  "Adolescents",
  "Emerging Adults",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[--border] to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] block mb-4">
            About
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light">
            Passion for Understanding
            <br />
            <span className="font-medium gradient-text">Human Development</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 font-[family-name:var(--font-inter)] text-[--muted] font-light leading-relaxed">
              <p>
                I am a doctoral candidate in Psychology at Wayne State University,
                where my research focuses on understanding the complex pathways through which
                early life experiences shape adolescent relationship dynamics. I have obtained
                interdisciplinary training in developmental, clinical, and quantitative psychology.
              </p>
              <p>
                My work integrates perspectives from developmental psychology, clinical science,
                and quantitative methodology to examine how childhood adversity influences
                dating relationship patterns, with particular attention to violence prevention
                and healthy relationship development. I am also interested in understanding how
                artificial intelligence impacts human development and behavior.
              </p>
              <p>
                As a Pre-Doctoral Fellow at the Merrill Palmer Skillman Institute, I engage in
                interdisciplinary research and community outreach, translating scientific
                findings into actionable insights for youth and families.
              </p>
            </div>

            {/* Research interests */}
            <div className="mt-12">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-6">
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="px-4 py-2 bg-[--background] border border-[--border] text-sm font-[family-name:var(--font-inter)] text-[--muted] hover:border-[--accent] hover:text-[--accent] transition-colors duration-300"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Populations of Interest */}
            <div className="mt-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-6">
                Populations of Interest
              </h3>
              <div className="flex flex-wrap gap-2">
                {populationsOfInterest.map((population, index) => (
                  <motion.span
                    key={population}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="px-4 py-2 bg-[--background] border border-[--border] text-sm font-[family-name:var(--font-inter)] text-[--muted] hover:border-[--accent] hover:text-[--accent] transition-colors duration-300"
                  >
                    {population}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-8">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group relative pl-8 border-l border-[--border] hover:border-[--accent] transition-colors duration-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[4.5px] bg-white border border-[--border] group-hover:border-[--accent] group-hover:bg-[--accent] transition-colors duration-300" />

                  <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent] block mb-1">
                    {edu.year}
                  </span>
                  <h4 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-1">
                    {edu.degree}
                  </h4>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mb-1">
                    {edu.institution}
                  </p>
                  {edu.major && (
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                      Major: {edu.major}
                    </p>
                  )}
                  {edu.minors && (
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                      Minors: {edu.minors}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { number: "6+", label: "Publications" },
                { number: "19+", label: "Citations" },
                { number: "37+", label: "Presentations" },
                { number: "750+", label: "Clinical Hours" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light gradient-text">
                    <CountUpWithSuffix value={stat.number} isInView={isInView} />
                  </span>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
