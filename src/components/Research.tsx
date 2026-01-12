"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const researchProjects = [
  {
    title: "Project SPARK",
    role: "Team Lead, Graduate Research Assistant",
    institution: "Wayne State University",
    pi: "Valerie Simon, Ph.D.",
    period: "2025 – Present",
    description:
      "Leading protocol development for Project Simulating Partner Activities for Relationship Knowledge (SPARK), including IRB writing, physiological and virtual reality data collection training, and measure identification.",
  },
  {
    title: "Project SOAR",
    role: "Graduate Research Assistant",
    institution: "Wayne State University",
    pi: "Valerie Simon, Ph.D.",
    period: "2024 – Present",
    description:
      "Conducting confirmatory factor analysis and manuscript preparation for cross-sectional data of sexual and gender minority young adults.",
  },
  {
    title: "Project MiSTAR",
    role: "Graduate Research Assistant",
    institution: "Wayne State University",
    pi: "Valerie Simon, Ph.D.",
    period: "2023 – Present",
    description:
      "Analyzing longitudinal data on teenage girls exposed to interpersonal violence, focusing on literature review, data analysis, and manuscript development.",
  },
  {
    title: "DYAD Study",
    role: "Project Coordinator",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2020 – Present",
    description:
      "Coordinating research on young adult couples' interactions and dating concepts, examining healthy and unhealthy dating behaviors, substance use, and mental health outcomes.",
  },
  {
    title: "NSF ADVANCE Grant",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Michael Horvath, Ph.D.",
    period: "2022 – 2023",
    description:
      "Contributing to gender equity research among STEM faculty through statistical analysis, literature review, and conference submissions for the FLAGS program.",
  },
];

const clinicalExperience = [
  {
    title: "Wayne State Psychology Clinic",
    role: "Clinical Psychology Student Trainee",
    period: "2023 – Present",
    description: "Conducting psychological assessments on children, adolescents, and adults (ages 6-33) including battery selection, administration, scoring, and report writing.",
  },
  {
    title: "Faust Psychological Services",
    role: "Practicum Placement",
    period: "Dec 2022 – May 2023",
    description: "Provided comprehensive psychological assessments and psychotherapy services for children, adolescents, and adults seeking social security disability evaluations.",
  },
  {
    title: "Cuyahoga County Juvenile Justice Center",
    role: "Practicum Placement",
    period: "Aug 2022 – Nov 2022",
    description: "Administered psychological assessments for juveniles' competency evaluations and custody cases referred from Child Protective Services.",
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"research" | "clinical">("research");

  return (
    <section id="research" className="py-32 bg-[--background] relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] block mb-4">
            Experience
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light mb-8">
            Research &
            <br />
            <span className="font-medium gradient-text">Clinical Practice</span>
          </h2>

          {/* Tab toggle */}
          <div className="inline-flex border border-[#e5e5e5] rounded-sm overflow-hidden">
            {(["research", "clinical"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 font-[family-name:var(--font-inter)] text-sm tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#f5f5f5] text-[#6b6b6b] hover:bg-[#e5e5e5] hover:text-[#1a1a1a]"
                }`}
              >
                {tab === "research" ? "Research" : "Clinical"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Research Projects */}
        {activeTab === "research" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {researchProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group bg-white p-8 border border-[--border] hover:border-[--accent] transition-all duration-500 hover:shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div>
                    <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent] block mb-2">
                      {project.period}
                    </span>
                    <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium group-hover:text-[--accent] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mt-1">
                      {project.role}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <p className="font-[family-name:var(--font-inter)] text-sm font-medium">
                      {project.institution}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                      PI: {project.pi}
                    </p>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] leading-relaxed">
                  {project.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Clinical Experience */}
        {activeTab === "clinical" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Clinical hours highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 p-8 bg-white border border-[--border]"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-6xl font-light gradient-text">
                750+
              </span>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mt-2 tracking-wide">
                Total Supervised Clinical Hours
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-1">
                Children, Adolescents & Adults
              </p>
            </motion.div>

            <div className="grid gap-6">
              {clinicalExperience.map((exp, index) => (
                <motion.article
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group bg-white p-8 border border-[--border] hover:border-[--accent] transition-all duration-500 hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium group-hover:text-[--accent] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted] leading-relaxed">
                    {exp.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
