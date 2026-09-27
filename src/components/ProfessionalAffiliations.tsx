"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const affiliations = [
  { name: "Association for Psychological Science", role: "Member", year: "2025–2027" },
  { name: "Merrill Palmer Skillman Institute", role: "Co-President & Pre-Doctoral Fellow", year: "2025–Present" },
  { name: "Society for Research in Child Development", role: "Member", year: "2025" },
  { name: "Association for Behavioral and Cognitive Therapies", role: "Member", year: "2022" },
  { name: "American Psychological Association", role: "Member", year: "2021, 2022" },
  { name: "Psi-Chi, International Honor Society in Psychology", role: "Member", year: "2022" },
  { name: "Society for Research on Adolescence", role: "Member", year: "2022" },
  { name: "NextGen Psych Scholars Program", role: "Mentee", year: "2022–2023" },
  { name: "Midwestern Psychological Association", role: "Member", year: "2020" },
  { name: "Mental Health Foundation–India", role: "Member", year: "2018" },
];

export default function ProfessionalAffiliations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="affiliations" aria-labelledby="affiliations-heading" ref={ref} className="py-20 bg-white relative scroll-mt-20">
        {/* Professional affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 id="affiliations-heading" className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-center mb-12">
            Professional Affiliations
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="group flex items-center gap-4 p-4 bg-[--background] border border-[--border] hover:border-[--accent] transition-colors duration-300"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-white border border-[--border] group-hover:border-[--accent] transition-colors">
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-medium text-[--accent]">
                    {affiliation.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-sm font-medium">
                    {affiliation.name}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                    {affiliation.role} · {affiliation.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
    </section>
  );
}
