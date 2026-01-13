"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const teachingExperience = [
  {
    course: "PSY 3993",
    title: "Laboratory in Experimental Psychology",
    semester: "Fall 2025",
    institution: "Wayne State University",
    current: true,
  },
  {
    course: "PSY 3310",
    title: "Abnormal Psychology",
    semester: "Spring–Summer 2025",
    institution: "Wayne State University",
  },
  {
    course: "PSY 1030",
    title: "Introductory Psychology Laboratory",
    semester: "Fall 2024 – Spring 2025",
    institution: "Wayne State University",
    recurring: true,
  },
  {
    course: "PSY 1010",
    title: "Introductory Psychology",
    semester: "Fall 2023 – Winter 2024",
    institution: "Wayne State University",
  },
  {
    course: "PSY 312",
    title: "Research Methods",
    semester: "Spring 2022",
    institution: "Cleveland State University",
  },
  {
    course: "PSY 317",
    title: "Behavioral Science Statistics: Inference",
    semester: "Fall 2021",
    institution: "Cleveland State University",
  },
];

const workshops = [
  {
    title: "Dating abuse among teens: Implications for mental health intervention",
    venue: "Ohio Psychological Association",
    year: "2022",
    coPresenter: "Elizabeth A. Goncy, Ph.D.",
  },
];

// Count-up animation hook with suffix support
function CountUpWithSuffix({ value, isInView }: { value: string; isInView: boolean }) {
  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
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
        setDisplayValue(Math.round(eased * numValue));

        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };

      requestAnimationFrame(animateValue);
    }
  }, [isInView, numValue]);

  return <>{displayValue}{suffix}</>;
}

export default function Teaching() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="teaching" className="py-32 bg-[--background] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-[--accent]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] block mb-4">
            Educator
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-light">
            Teaching
            <br />
            <span className="font-medium gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Teaching philosophy quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light italic text-[--muted] leading-relaxed">
            &ldquo;Teaching is the art of illuminating pathways to understanding,
            nurturing curiosity, and empowering students to become critical thinkers.&rdquo;
          </p>
        </motion.blockquote>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-12 mb-16 py-8 border-y border-[--border]"
        >
          {[
            { value: "12+", label: "Course Sections" },
            { value: "200+", label: "Students Taught" },
            { value: "6", label: "Unique Courses" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <span className="font-[family-name:var(--font-cormorant)] text-4xl font-light gradient-text">
                <CountUpWithSuffix value={stat.value} isInView={isInView} />
              </span>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-2 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingExperience.map((course, index) => (
            <motion.article
              key={`${course.course}-${course.semester}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.08 }}
              className={`group relative bg-white p-6 border border-[--border] hover:border-[--accent] transition-all duration-300 hover:shadow-lg ${
                course.current ? "ring-1 ring-[--accent]" : ""
              }`}
            >
              {course.current && (
                <span className="absolute -top-3 left-4 px-2 py-1 bg-[--accent] text-white text-[10px] tracking-wider uppercase">
                  Current
                </span>
              )}

              <div className="flex items-start justify-between mb-4">
                <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent]">
                  {course.course}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[10px] text-[--muted]">
                  {course.semester}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-medium mb-3 group-hover:text-[--accent] transition-colors">
                {course.title}
              </h3>

              <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted]">
                {course.institution}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Workshop section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20"
        >
          <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-center mb-8">
            Professional Workshops
          </h3>
          <div className="max-w-2xl mx-auto">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="p-6 bg-white border border-[--border] hover:border-[--accent] transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-medium mb-2">
                      {workshop.title}
                    </h4>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[--muted]">
                      {workshop.venue}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-1">
                      Co-presented with {workshop.coPresenter}
                    </p>
                  </div>
                  <span className="font-[family-name:var(--font-inter)] text-xs tracking-wider text-[--accent]">
                    {workshop.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
