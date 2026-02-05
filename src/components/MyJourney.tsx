"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const photos = [
  // Row 1
  {
    src: "/photos/graduation.jpg",
    alt: "Graduation celebration",
    caption: "MA Clinical Psychology - Graduation Day, 2023",
    rotate: -3,
    size: "large",
    position: { top: "0%", left: "5%" },
    mobileOrder: 1,
  },
  {
    src: "/photos/nyc-skyline.jpg",
    alt: "NYC Skyline",
    caption: "NYC nights - ABCT 2022",
    rotate: 4,
    size: "medium",
    position: { top: "5%", left: "42%" },
    mobileOrder: 2,
  },
  {
    src: "/photos/award.jpg",
    alt: "Graduate Student Award",
    caption: "Excellent Achievement Award Day!",
    rotate: -2,
    size: "small",
    position: { top: "2%", left: "70%" },
    mobileOrder: 3,
  },
  {
    src: "/photos/exploring_minny_2025.JPG",
    alt: "Exploring Minneapolis",
    caption: "Exploring Minneapolis - SRCD 2025",
    rotate: 3,
    size: "medium",
    position: { top: "10%", left: "85%" },
    mobileOrder: 4,
  },
  // Row 2
  {
    src: "/photos/cleveland-sign.jpg",
    alt: "Cleveland Sign",
    caption: "First 10 days in the U.S, 2021",
    rotate: 5,
    size: "medium",
    position: { top: "18%", left: "0%" },
    mobileOrder: 5,
  },
  {
    src: "/photos/presenting_mpa.JPG",
    alt: "Presenting at MPA",
    caption: "Presenting at MPA Conference",
    rotate: -3,
    size: "medium",
    position: { top: "70%", left: "5%" },
    mobileOrder: 6,
  },
  {
    src: "/photos/csu-campus.jpg",
    alt: "Cleveland State University",
    caption: "First day of classes in the U.S.",
    rotate: 2,
    size: "small",
    position: { top: "17%", left: "58%" },
    mobileOrder: 7,
  },
  {
    src: "/photos/chicago.jpg",
    alt: "Chicago",
    caption: "Exploring Chi-town during APS 2021",
    rotate: -4,
    size: "large",
    position: { top: "26%", left: "75%" },
    mobileOrder: 8,
  },
  // Row 3
    {
    src: "/photos/chicago_views_mpa_2025.JPG",
    alt: "Chicago views MPA 2025",
    caption: "Chicago views - MPA 2025",
    rotate: -5,
    size: "small",
    position: { top: "34%", left: "5%" },
    mobileOrder: 9,
  },
  {
    src: "/photos/conference-poster-1.jpg",
    alt: "Conference presentation",
    caption: "ABCT 2022, NYC",
    rotate: -4,
    size: "small",
    position: { top: "36%", left: "32%" },
    mobileOrder: 10,
  },
  {
    src: "/photos/presenting_mpa_2023.JPG",
    alt: "Full room at MPA",
    caption: "Full house at MPA 2023!",
    rotate: 3,
    size: "medium",
    position: { top: "33%", left: "52%" },
    mobileOrder: 11,
  },
  // Row 4
  {
    src: "/photos/presenting.jpg",
    alt: "Presenting at conference",
    caption: "First in-person conference, ASC, Chicago, 2021",
    rotate: 3,
    size: "large",
    position: { top: "45%", left: "2%" },
    mobileOrder: 12,
  },
  {
    src: "/photos/presenting_mpa_2025.jpg",
    alt: "Presenting at MPA 2025",
    caption: "Presenting at MPA 2025",
    rotate: -2,
    size: "small",
    position: { top: "60%", left: "22%" },
    mobileOrder: 13,
  },
  {
    src: "/photos/outstanding_grad_student_award_clinical_psych_with_drGoncy.JPG",
    alt: "Outstanding Graduate Student Award with Dr. Goncy <3",
    caption: "Outstanding Graduate Student Award - with Dr. Goncy 💚",
    rotate: 2,
    size: "large",
    position: { top: "50%", left: "45%" },
    mobileOrder: 14,
  },
  {
    src: "/photos/presenting_srcd_2025.JPG",
    alt: "SRCD 2025 Poster",
    caption: "Poster session at SRCD 2025",
    rotate: -2,
    size: "large",
    position: { top: "48%", left: "72%" },
    mobileOrder: 15,
  },
  // Row 5
  {
    src: "/photos/wayne-state.jpg",
    alt: "Wayne State University",
    caption: "Starting PhD at Wayne State University, 2023",
    rotate: -3,
    size: "medium",
    position: { top: "20%", left: "28%" },
    mobileOrder: 16,
  },
  {
    src: "/photos/presenting_srcd_2025_minny.JPG",
    alt: "SRCD Minneapolis",
    caption: "SRCD 2025, Minneapolis",
    rotate: 5,
    size: "medium",
    position: { top: "72%", left: "35%" },
    mobileOrder: 17,
  },
  {
    src: "/photos/psychology-dept.jpg",
    alt: "Psychology Department",
    caption: "Cleveland State University Psychology Department",
    rotate: -2,
    size: "small",
    position: { top: "74%", left: "65%" },
    mobileOrder: 18,
  },
  {
    src: "/photos/conference-poster-2.jpg",
    alt: "Research poster presentation",
    caption: "ABCT 2022, NYC",
    rotate: -3,
    size: "small",
    position: { top: "73%", left: "85%" },
    mobileOrder: 19,
  },
  {
    src: "/photos/undergrad_delhi.JPG",
    alt: "Undergrad in New Delhi",
    caption: "First day out in undergrad, New Delhi, India, 2017",
    rotate: 2,
    size: "medium",
    position: { top: "86%", left: "40%" },
    mobileOrder: 20,
    objectPosition: "top",
  },
  {
    src: "/photos/prom_queen_2017.JPG",
    alt: "Prom Queen 2017",
    caption: "Prom Queen, High School, 2017",
    rotate: -2,
    size: "medium",
    position: { top: "86%", left: "65%" },
    mobileOrder: 21,
  },
];

const sizeClasses = {
  small: "w-40 h-48 md:w-44 md:h-52",
  medium: "w-48 h-56 md:w-56 md:h-64",
  large: "w-56 h-64 md:w-72 md:h-80",
};

export default function MyJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-[#faf9f7] via-[#f5f3f0] to-[#faf9f7] relative overflow-hidden">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.span
            className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[--accent] mb-4 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Moments & Memories
          </motion.span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl lg:text-6xl font-light mb-6">
            My <span className="font-medium gradient-text italic">Scrapbook</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[--muted] text-sm max-w-xl mx-auto leading-relaxed">
            Snapshots from conferences, campus life, and city adventures
          </p>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { number: "2", label: "Continents" },
              { number: "3", label: "Universities" },
              { number: "∞", label: "Memories" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light gradient-text">
                  {stat.number}
                </span>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[--muted] mt-1 tracking-widest uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Collage Container - Desktop */}
        <div className="hidden md:block relative h-[2100px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.8, rotate: photo.rotate * 2 }}
              animate={isInView ? {
                opacity: 1,
                scale: hoveredIndex === index ? 1.05 : 1,
                rotate: hoveredIndex === index ? 0 : photo.rotate,
                zIndex: hoveredIndex === index ? 50 : index,
              } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                scale: { duration: 0.3 },
                rotate: { duration: 0.3 },
              }}
              className={`absolute ${sizeClasses[photo.size as keyof typeof sizeClasses]} cursor-pointer`}
              style={{
                top: photo.position.top,
                left: photo.position.left,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Polaroid frame */}
              <div className="relative w-full h-full bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{
                  boxShadow: hoveredIndex === index
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    : '0 10px 40px -10px rgba(0, 0, 0, 0.15)',
                }}
              >
                {/* Photo */}
                <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden bg-gray-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: photo.objectPosition || "center" }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Handwritten caption */}
                <div className="absolute bottom-1 left-0 right-0 text-center">
                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-[--foreground]/80 italic">
                    {photo.caption}
                  </p>
                </div>

                {/* Tape effect on some photos */}
                {index % 3 === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-[#d4c5a9]/60 -rotate-2" />
                )}
                {index % 3 === 1 && (
                  <>
                    <div className="absolute -top-2 left-4 w-8 h-4 bg-[#c9b896]/50 rotate-12" />
                    <div className="absolute -top-2 right-4 w-8 h-4 bg-[#c9b896]/50 -rotate-12" />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {[...photos]
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative bg-white p-1.5 shadow-md">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: photo.objectPosition || "center" }}
                    sizes="50vw"
                  />
                </div>
                <p className="mt-1.5 pb-1 px-1 text-center font-[family-name:var(--font-cormorant)] text-sm text-[--foreground]/80 italic leading-tight">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: selectedPhoto.rotate * 2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Large polaroid frame */}
              <div className="bg-white p-4 pb-20 shadow-2xl max-w-[90vw] max-h-[85vh]">
                <div className="relative w-[80vw] max-w-2xl aspect-[4/3] overflow-hidden">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    className="object-contain bg-gray-100"
                    sizes="80vw"
                  />
                </div>
                <p className="absolute bottom-6 left-0 right-0 text-center font-[family-name:var(--font-cormorant)] text-xl text-[--foreground]/80 italic">
                  {selectedPhoto.caption}
                </p>
              </div>

              {/* Close hint */}
              <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-[family-name:var(--font-inter)]">
                click anywhere to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
