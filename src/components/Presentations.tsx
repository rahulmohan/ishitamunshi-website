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
  status: "presented" | "under-review";
}

const presentations: Presentation[] = [
  // Conference Symposia
  {
    title: "FLAGS: Faculty Leaders Advancing Gender Equity",
    authors: "Horvath, M. et. al.",
    conference: "ADVANCE-ing Gender Equity Among STEM Professors Through I-O Psychology [symposium]. Society for Industrial and Organizational Psychology Annual Conference",
    year: "2023",
    location: "Boston, MA, United States",
    type: "symposium",
    status: "presented",
  },
  {
    title: "Prior victimization and sexuality education among diverse young adults: Associations with dating sexual abuse victimization and perpetration",
    authors: "Munshi, I., Goncy, E. A., Clonan-Roy, K., Fuller, K. A., & Naser, S.",
    conference: "Exploring the risk factors for intimate partner violence in sexual and gender minority individuals [Symposium]. Association of Behavioral and Cognitive Therapy annual convention",
    year: "2022",
    location: "New York, NY, United States",
    type: "symposium",
    status: "presented",
  },

  // Conference Paper Presentations
  {
    title: "Moral Disengagement in Human–AI Interaction: Evidence from 500,000 Naturalistic ChatGPT Conversations",
    authors: "Munshi, I., & Mohan, R.",
    conference: "Association for Psychological Science",
    year: "2026",
    location: "Barcelona, Spain",
    type: "paper",
    status: "under-review",
  },
  {
    title: "Synergistic Role of ACEs: Alcohol & Impulsivity Predicting Dating Aggression",
    authors: "Munshi, I., Basting, E., Reich, K., Goncy, E.A.",
    conference: "Midwestern Psychological Association conference 2025",
    year: "2025",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Pathways from Childhood Victimization to Adolescent Dating Aggression: The Role of Caregiver Relationship Quality",
    authors: "Munshi, I., Palmer C., Simon V.A.",
    conference: "Graduate Research Symposium 2025",
    year: "2025",
    location: "Wayne State University",
    type: "paper",
    status: "presented",
  },
  {
    title: "Dating Sexual Perpetration & Alcohol Use Moderated by Child Sexual Abuse",
    authors: "Munshi, I., Hochman, P., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Alcohol and Drug Use Predicting Pandemic Cyber Dating Abuse",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Gender, Childhood Abuse & Sexuality Education Associate with Emotional Dating Abuse",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Social Support's Impact on Depression Symptomatology in Dating Abuse Victims",
    authors: "Hochman, P., Munshi, I., Brooks, B., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Are child sexual abuse and sexual related misdemeanor involvement related?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2022",
    year: "2022",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Associations between romantic satisfaction and dating abuse among dating couples",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2021",
    year: "2021",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Perceptions of trauma severity following rape relate to fewer rape myth",
    authors: "Munshi, I., Wheatley, G. & Goncy, E. A.",
    conference: "Society for Prevention Research conference 2022",
    year: "2022",
    location: "Seattle, WA",
    type: "paper",
    status: "presented",
  },
  {
    title: "Associations of family structure with age of onset, lifetime, and recent substance use among emerging adults",
    authors: "Munshi, I., Letizio, H., & Goncy, E. A.",
    conference: "Society for Prevention Research conference 2022",
    year: "2022",
    location: "Seattle, WA",
    type: "paper",
    status: "presented",
  },
  {
    title: "Trauma symptoms and dating abuse perpetration and victimization: Examination of gender, sexual orientation, and race as moderators among emerging adults",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Society for the Study of Emerging Adulthood conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
    status: "presented",
  },
  {
    title: "Associations of physical and sexual assault on subsequent young adult dating abuse",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "American Society of Criminology conference 2021",
    year: "2021",
    location: "Chicago, IL",
    type: "paper",
    status: "presented",
  },
  {
    title: "Influence of parental attachment on teen sexual education received from family",
    authors: "Ishaq, J., Liebhardt, B., Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
    status: "presented",
  },
  {
    title: "Is social media jealousy in romantic relationships related to depression?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association annual conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
    status: "presented",
  },
  {
    title: "Does maternal or paternal attachment improve teen access to contraceptives?",
    authors: "Munshi, I., Ishaq, J., Liebhardt, B., & Goncy, E. A.",
    conference: "Midwestern Psychological Association annual conference 2021",
    year: "2021",
    location: "Virtual",
    type: "paper",
    status: "presented",
  },

  // Conference Poster Presentations
  {
    title: "Psychometric Properties of the Conflict in Dating Relationships Inventory (Short-Form) Among Lesbian, Gay, and Bisexual Young Adults",
    authors: "Munshi, I., Palmer, C., Simon, V. A.",
    conference: "Association for Psychological Science",
    year: "2026",
    location: "Barcelona, Spain",
    type: "poster",
    status: "under-review",
  },
  {
    title: "Disentangling Gender from Career Prioritization",
    authors: "Horvath. M., Bracken, C. M., Munshi, I., Dong, L., & Goodell, J. E.",
    conference: "Society for Industrial and Organizational Psychology Annual Conference",
    year: "2026",
    location: "New Orleans, LA, United States",
    type: "poster",
    status: "presented",
  },
  {
    title: "Pathways from Childhood Victimization to Adolescent Dating Aggression: The Role of Caregiver Relationship Quality",
    authors: "Munshi, I., Palmer C., Simon V.A.",
    conference: "Society for Research in Child Development Biennial Meeting 2025",
    year: "2025",
    location: "Minneapolis, MN",
    type: "poster",
    status: "presented",
  },
  {
    title: "Parent-child relationship buffers the association between depressive symptoms and physically aggressive behavior in adolescents",
    authors: "Munshi, I., & Goncy, E.A.",
    conference: "Society for Research in Child Development Biennial Meeting 2025",
    year: "2025",
    location: "Minneapolis, MN",
    type: "poster",
    status: "presented",
  },
  {
    title: "Young adults suggested interventions for different dating abuse scenarios",
    authors: "Jiang, A., Welk, V.-J., Munshi, I., & Goncy, E. A.",
    conference: "Resilience.con annual conference 2024",
    year: "2024",
    location: "Nashville, TN",
    type: "poster",
    status: "presented",
  },
  {
    title: "The relationship between the big five personality traits and beliefs about rape prevention",
    authors: "Wheatley, G., Matthews, I. J. Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "poster",
    status: "presented",
  },
  {
    title: "Childhood Cancer, Posttraumatic Stress Symptoms, and Contributing Factors",
    authors: "Wheatley, G., Matthews, I. J. Munshi, I., & Goncy, E. A.",
    conference: "Midwestern Psychological Association Conference 2023",
    year: "2023",
    location: "Chicago, IL",
    type: "poster",
    status: "presented",
  },
  {
    title: "Sexual trauma and self-efficacy for help-seeking in dating abuse",
    authors: "Munshi, I., Wheatley, G., & Goncy, E. A.",
    conference: "Association of Behavioral and Cognitive Therapy conference, 2022",
    year: "2022",
    location: "New York, NY",
    type: "poster",
    status: "presented",
  },
  {
    title: "Does Childhood Psychological or Physical Maltreatment by Mothers or Fathers Predict Subsequent Intimate Partner Violence in Romantic Relationships?",
    authors: "Munshi, I. & Yaroslavsky I.",
    conference: "Association of Behavioral and Cognitive Therapy conference, 2022",
    year: "2022",
    location: "New York, NY",
    type: "poster",
    status: "presented",
  },
  {
    title: "The Impact of Adverse Childhood Experiences on Assault",
    authors: "Wheatley, G., Munshi, I., Goncy, E.A.",
    conference: "American Society for Criminology conference 2022",
    year: "2022",
    location: "Atlanta, GA",
    type: "poster",
    status: "presented",
  },
  {
    title: "Parenting style and onset of adolescent cigarette, vapor, alcohol, and marijuana use",
    authors: "Munshi, I., Letizio, H., Ishaq, J., Hutcherson, R., & Goncy, E. A.",
    conference: "Society for Research on Adolescence conference, 2022",
    year: "2022",
    location: "Virtual",
    type: "poster",
    status: "presented",
  },
  {
    title: "Does depression and affect relate to dating abuse perpetration and victimization history among emerging adults?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "Society for the Study of Emerging Adulthood conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "poster",
    status: "presented",
  },
  {
    title: "Gender, attachment, and romantic relationship satisfaction: Testing novel methodology",
    authors: "Munshi, I., Cowan, J., & Goncy, E. A.",
    conference: "American Psychological Association conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "poster",
    status: "presented",
  },
  {
    title: "Do self-blaming and catastrophizing associate with dating abuse victimization and perpetration in dating young adults?",
    authors: "Munshi, I., & Goncy, E. A.",
    conference: "British Psychological Society Division of Counselling Psychology conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "poster",
    status: "presented",
  },

  // Conference Professional Workshops
  {
    title: "Dating abuse among teens: Implications for mental health intervention",
    authors: "Goncy, E. A., & Munshi, I.",
    conference: "2022 Ohio Psychological Association",
    year: "2022",
    location: "Virtual",
    type: "workshop",
    status: "presented",
  },

  // Conference Data Blitz
  {
    title: "Juvenile Transfer Evaluations: The Utility of the RSTI Treatment Amenability Scale",
    authors: "Williams, L., Cook, S., Munshi, I., & Goncy, E.",
    conference: "American Psychology-Law Society Conference 2023",
    year: "2023",
    location: "Philadelphia, PA",
    type: "data-blitz",
    status: "presented",
  },
  {
    title: "Perspectives of emerging adult women on quality of school sexual education to prevent teen pregnancies and STIs",
    authors: "Liebhardt, B., Munshi, I., Ishaq, J., & Goncy, E. A.",
    conference: "Society for the Study of Emerging Adulthood annual conference, 2021",
    year: "2021",
    location: "Virtual",
    type: "data-blitz",
    status: "presented",
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
  { label: "Paper Presentations", value: 18 },
  { label: "Poster Presentations", value: 14 },
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
      className="py-32 bg-[--background] relative overflow-hidden"
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
          className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white border border-[--border] rounded-sm"
            >
              <div className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[--accent] mb-2">
                <CountUp value={stat.value} isInView={isInView} />
              </div>
              <div className="font-[family-name:var(--font-inter)] text-xs tracking-wider uppercase text-[--muted]">
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

              {/* Status Badge (if under review) */}
              {presentation.status === "under-review" && (
                <div className="absolute top-14 right-6 px-3 py-1 bg-amber-100 text-amber-800 font-[family-name:var(--font-inter)] text-[10px] tracking-wider uppercase">
                  Under Review
                </div>
              )}

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
