"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Presentation {
  title: string;
  authors: string;
  conference: string;
  year: string;
  location: string;
  type: "symposium" | "paper" | "poster" | "workshop" | "data-blitz";
}

const presentations: Presentation[] = [
  // 2026
  {
    title: "Psychometric Properties of the Conflict in Dating Relationships Inventory (Short-Form) Among Lesbian, Gay, and Bisexual Young Adults",
    authors: "Munshi, I., Palmer, C., Simon, V. A.",
    conference: "Association for Psychological Science",
    year: "2026",
    location: "Barcelona, Spain",
    type: "poster",
  },
  {
    title: "Disentangling Gender from Career Prioritization",
    authors: "Horvath. M., Bracken, C. M., Munshi, I., Dong, L., & Goodell, J. E.",
    conference: "Society for Industrial and Organizational Psychology Annual Conference",
    year: "2026",
    location: "New Orleans, LA, United States",
    type: "poster",
  },

  // 2025
  {
    title: "Synergistic Role of ACEs: Alcohol & Impulsivity Predicting Dating Aggression",
    authors: "Munshi, I., Basting, E., Reich, K., Goncy, E.A.",
    conference: "Midwestern Psychological Association conference 2025",
    year: "2025",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Pathways from Childhood Victimization to Adolescent Dating Aggression: The Role of Caregiver Relationship Quality",
    authors: "Munshi, I., Palmer C., Simon V.A.",
    conference: "Graduate Research Symposium 2025",
    year: "2025",
    location: "Wayne State University",
    type: "paper",
  },
  {
    title: "Pathways from Childhood Victimization to Adolescent Dating Aggression: The Role of Caregiver Relationship Quality",
    authors: "Munshi, I., Palmer C., Simon V.A.",
    conference: "Society for Research in Child Development Biennial Meeting 2025",
    year: "2025",
    location: "Minneapolis, MN",
    type: "poster",
  },
  {
    title: "Parent-Child Relationship Buffers the Association Between Depressive Symptoms and Physically Aggressive Behavior in Adolescents",
    authors: "Munshi, I., & Goncy, E.A.",
    conference: "Society for Research in Child Development Biennial Meeting 2025",
    year: "2025",
    location: "Minneapolis, MN",
    type: "poster",
  },

  // 2024
  {
    title: "Young Adults Suggested Interventions for Different Dating Abuse Scenarios",
    authors: "Jiang, A., Welk, V.-J., Munshi, I., & Goncy, E. A.",
    conference: "Resilience.con annual conference 2024",
    year: "2024",
    location: "Nashville, TN",
    type: "poster",
  },

  // 2023
  {
    title: "FLAGS: Faculty Leaders Advancing Gender Equity",
    authors: "Horvath, M. et. al.",
    conference: "ADVANCE-ing Gender Equity Among STEM Professors Through I-O Psychology [symposium]. Society for Industrial and Organizational Psychology Annual Conference",
    year: "2023",
    location: "Boston, MA, United States",
    type: "symposium",
  },
  {
    title: "Dating Sexual Perpetration & Alcohol Use Moderated by Child Sexual Abuse",
    authors: "Munshi, I., Hochman, P., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Alcohol and Drug Use Predicting Pandemic Cyber Dating Abuse",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Gender, Childhood Abuse & Sexuality Education Associate with Emotional Dating Abuse",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Social Support's Impact on Depression Symptomatology in Dating Abuse Victims",
    authors: "Hochman, P., Munshi, I., Brooks, B., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "The Relationship Between the Big Five Personality Traits and Beliefs About Rape Prevention",
    authors: "Wheatley, G., Matthews, I. J. Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "poster",
  },
  {
    title: "Childhood Cancer, Posttraumatic Stress Symptoms, and Contributing Factors",
    authors: "Wheatley, G., Matthews, I. J. Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association Conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "poster",
  },
  {
    title: "Juvenile Transfer Evaluations: The Utility of the RSTI Treatment Amenability Scale",
    authors: "Williams, L., Cook, S., Munshi, I., & Goncy, E.",
    conference: "American Psychology-Law Society Conference 2023",
    year: "2023",
    location: "Philadelphia, PA",
    type: "data-blitz",
  },

  // 2022
  {
    title: "Prior Victimization and Sexuality Education Among Diverse Young Adults: Associations with Dating Sexual Abuse Victimization and Perpetration",
    authors: "Munshi, I., Goncy, E. A., Clonan-Roy, K., Fuller, K. A., & Naser, S.",
    conference: "Exploring the risk factors for intimate partner violence in sexual and gender minority individuals [Symposium]. Association of Behavioral and Cognitive Therapy annual convention",
    year: "2022",
    location: "New York, NY, United States",
    type: "symposium",
  },
  {
    title: "Are Child Sexual Abuse and Sexual Related Misdemeanor Involvement Related?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2022",
    year: "2022",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Sexual Trauma and Self-Efficacy for Help-Seeking in Dating Abuse",
    authors: "Munshi, I., Wheatley, G., & Goncy, E. A.",
    conference: "Association of Behavioral and Cognitive Therapy conference, 2022",
    year: "2022",
    location: "New York, NY",
    type: "poster",
  },
  {
    title: "Does Childhood Psychological or Physical Maltreatment by Mothers or Fathers Predict Subsequent Intimate Partner Violence in Romantic Relationships?",
    authors: "Munshi, I. & Yaroslavsky I.",
    conference: "Association of Behavioral and Cognitive Therapy conference, 2022",
    year: "2022",
    location: "New York, NY",
    type: "poster",
  },
  {
    title: "The Impact of Adverse Childhood Experiences on Assault",
    authors: "Wheatley, G., Munshi, I., Goncy, E.A.",
    conference: "American Society for Criminology conference 2022",
    year: "2022",
    location: "Atlanta, GA",
    type: "poster",
  },
  {
    title: "Parenting Style and Onset of Adolescent Cigarette, Vapor, Alcohol, and Marijuana Use",
    authors: "Munshi, I., Letizio, H., Ishaq, J., Hutcherson, R., & Goncy, E. A.",
    conference: "Society for Research on Adolescence conference, 2022",
    year: "2022",
    location: "Virtual",
    type: "poster",
  },
  {
    title: "Dating Abuse Among Teens: Implications for Mental Health Intervention",
    authors: "Goncy, E. A., & Munshi, I.",
    conference: "2022 Ohio Psychological Association",
    year: "2022",
    location: "Virtual",
    type: "workshop",
  },

  // 2021
  {
    title: "Associations Between Romantic Satisfaction and Dating Abuse Among Dating Couples",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2021",
    year: "2021",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Trauma Symptoms and Dating Abuse Perpetration and Victimization: Examination of Gender, Sexual Orientation, and Race as Moderators Among Emerging Adults",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Society for the Study of Emerging Adulthood conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
  },
  {
    title: "Associations of Physical and Sexual Assault on Subsequent Young Adult Dating Abuse",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "American Society of Criminology conference 2021",
    year: "2021",
    location: "Chicago, IL",
    type: "paper",
  },
  {
    title: "Influence of Parental Attachment on Teen Sexual Education Received from Family",
    authors: "Ishaq, J., Liebhardt, B., Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
  },
  {
    title: "Is Social Media Jealousy in Romantic Relationships Related to Depression?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association annual conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
  },
  {
    title: "Does Maternal or Paternal Attachment Improve Teen Access to Contraceptives?",
    authors: "Munshi, I., Ishaq, J., Liebhardt, B., & Goncy, E. A.",
    conference: "Midwestern Psychological Association annual conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
  },
  {
    title: "Does Depression and Affect Relate to Dating Abuse Perpetration and Victimization History Among Emerging Adults?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Society for the Study of Emerging Adulthood conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "poster",
  },
  {
    title: "Gender, Attachment, and Romantic Relationship Satisfaction: Testing Novel Methodology",
    authors: "Munshi, I., Cowan, J., & Goncy, E. A.",
    conference: "American Psychological Association conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "poster",
  },
  {
    title: "Do Self-Blaming and Catastrophizing Associate with Dating Abuse Victimization and Perpetration in Dating Young Adults?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "British Psychological Society Division of Counselling Psychology conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "poster",
  },
  {
    title: "Perspectives of Emerging Adult Women on Quality of School Sexual Education to Prevent Teen Pregnancies and STIs",
    authors: "Liebhardt, B., Munshi, I., Ishaq, J., & Goncy, E. A.",
    conference: "Society for the Study of Emerging Adulthood annual conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "data-blitz",
  },
];

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
  { label: "Paper Presentations", value: 16 },
  { label: "Poster Presentations", value: 15 },
  { label: "Symposia", value: 2 },
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
                {filter === "all" ? "All" : typeLabels[filter]}
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
                {presentation.year}
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
