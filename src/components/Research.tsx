"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      "Conducting literature review, confirmatory factor analysis, data management, and manuscript preparation examining cross-sectional data of sexual and gender minority young adults.",
  },
  {
    title: "Project MiSTAR",
    role: "Graduate Research Assistant",
    institution: "Wayne State University",
    pi: "Valerie Simon, Ph.D.",
    period: "2023 – Present",
    description:
      "Analyzing longitudinal data on teenage girls (predominantly Black) exposed to interpersonal violence from an urban Midwest city. Working on literature review, data analysis, data management, and two in-preparation manuscripts.",
  },
  {
    title: "CADRI Pronoun Study",
    role: "Team Lead, Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2022 – Present",
    description:
      "Examining pronoun-specific usage and validity of the Conflict in Adolescent Dating Relationship Inventory (CADRI), investigating alcohol and drug use, adverse childhood experiences, attitudes towards intimate partner violence, and mental health outcomes. Leading data cleaning, abstract writing, and undergraduate/graduate RA training.",
  },
  {
    title: "DYAD-2: Dating in Young Adults (Couples Perspective)",
    role: "Project Coordinator & Co-Investigator",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2020 – Present",
    description:
      "Coordinating research examining how young adult couples interact and understand dating concepts including dating abuse and the role of technology in an in-person lab setting. Wave II is a post-COVID-19 re-examination observing pandemic impacts on dating behaviors, substance use, and mental health. Responsible for IRB preparation, study design, data collection, and analysis.",
  },
  {
    title: "DYAD: Dating in Young Adults Study",
    role: "Team Lead for Qualitative Coding, Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2020 – Present",
    description:
      "Leading qualitative coding for mixed-method study investigating dating relationships in young adults. Conducted interview transcription, content analyses using NVivo examining definitions of dating violence, technology and relationships, dating abuse perpetration/victimization, cognitive emotion regulation, and mental health outcomes.",
  },
  {
    title: "EPPA: Early Pregnancy and Parent Attachment Study",
    role: "Team Lead, Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2020 – Present",
    description:
      "Leading retrospective cross-sectional study of women who became parents during teenage years examining their relationships with parents, sex education (contraceptive education), and access to sexual health resources. Conducting manuscript writing, qualitative coding, content analyses, and data analysis.",
  },
  {
    title: "Rape Vignettes Study",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2021 – 2022",
    description:
      "Assessing college students' perceptions and myths about different types of sexual assault and rape. Conducted IRB preparation, study design, vignette construction, data collection via online survey examining rape myth acceptance, sexual double standards, and personality factors.",
  },
  {
    title: "Parental Support and Romantic Relationships Study",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2021",
    description:
      "Evaluating associations between parental acceptance/rejection and romantic relationships (including LGBTQ+ youth) using online retrospective survey. Examining constructs including romantic satisfaction and romantic attachment.",
  },
  {
    title: "PSU: Parenting and Substance Use Study",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2020 – 2022",
    description:
      "Investigating links between substance use in young adults (alcohol, marijuana, cigarettes, cocaine) and parenting styles during childhood. Conducting data compilation, codebook drafting, data analyses, and advising undergraduate students.",
  },
  {
    title: "RARA: Risk and Resilience in Adolescence Study",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Elizabeth A. Goncy, Ph.D.",
    period: "2020 – 2021",
    description:
      "Examining risk factors (childhood abuse), resilience, and protective factors (parent-child communication) in understanding dating relationships, mental health, and sexual health outcomes for high school adolescents.",
  },
  {
    title: "NSF ADVANCE Adaptation Grant (FLAGS Program)",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Michael Horvath, Ph.D.",
    period: "2022 – 2023",
    description:
      "Contributing to Faculty Leaders Advancing Gender Equity in STEM (FLAGS) program aimed at improving gender equity among STEM faculty. Conducting literature review, statistical analyses using SPSS and AMOS, writing summaries/memos, data cleaning/management, and aiding conference submissions on work-life balance and gender equity.",
  },
  {
    title: "Mood and Emotion Regulation (MER) Lab",
    role: "Graduate Research Assistant",
    institution: "Cleveland State University",
    pi: "Ilya Yaroslavsky, Ph.D.",
    period: "2022",
    description:
      "Worked on two studies: (1) Coding naturalistic observational data from clinical and community samples using Electronically Activated Recording method, and (2) Online survey on internalizing problems, emotion regulation, interpersonal differences, and mental health outcomes.",
  },
];

const clinicalExperience = [
  {
    title: "Wayne State Psychology Clinic",
    role: "Clinical Psychology Student Trainee",
    period: "2023 – 2025",
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

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"research" | "clinical">("research");

  return (
    <section id="research" className="py-20 bg-[--background] relative">
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
                <CountUp value={750} isInView={isInView} />+
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
