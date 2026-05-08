'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, ArrowDown } from 'lucide-react';

export const Overlay: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Section 1: Hero (0 to 0.08 scroll progress)
  const opacity1 = useTransform(scrollYProgress, [0, 0.02, 0.06, 0.09], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.09], [0, -60]);

  // Section 2: About & Internship (0.09 to 0.18 scroll progress)
  const opacity2 = useTransform(scrollYProgress, [0.09, 0.12, 0.16, 0.19], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.09, 0.12, 0.16, 0.19], [50, 0, 0, -50]);

  // Section 3: Academic Excellence (0.19 to 0.28 scroll progress)
  const opacity3 = useTransform(scrollYProgress, [0.19, 0.22, 0.26, 0.29], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.19, 0.22, 0.26, 0.29], [50, 0, 0, -50]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 flex flex-col justify-between p-4 sm:p-6 md:p-12">
      {/* 1. Hero Section */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-16"
      >
        {/* Top Action Badge (Full Stack MERN Specialist - Transparent BG) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-16 md:mt-12 pointer-events-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#DCCB9A]/40 bg-transparent backdrop-blur-md px-3.5 py-1.5 shadow-sm w-fit">
            <Code2 className="h-3.5 w-3.5 text-[#C99A2E]" />
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
              Full Stack MERN Specialist
            </span>
          </div>
        </div>

        {/* Bottom Panel (Transparent Glass) */}
        <div className="mb-2 sm:mb-8 max-w-2xl p-5 sm:p-8 rounded-3xl bg-transparent backdrop-blur-md border border-[#DCCB9A]/40 shadow-xl pointer-events-auto">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#1C1C1C] leading-tight">
            Kurasa John Wesly <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C1C] via-[#C99A2E] to-[#E7C66A]">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#1C1C1C] font-medium leading-relaxed drop-shadow-sm">
            Data Science &amp; Engineering Student at NIAT (9.32 CGPA) • Building production-ready MERN web platforms with scalable architectures.
          </p>

          <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-[#DCCB9A]/40 pt-3 sm:pt-4 text-[11px] sm:text-xs font-mono">
            <div className="flex items-center gap-2 text-[#C99A2E] font-extrabold">
              <span className="h-2 w-2 rounded-full bg-[#C99A2E] animate-pulse" />
              <span>INTERNSHIPS</span>
            </div>
            <div className="flex items-center gap-2 text-[#C99A2E] font-extrabold">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. About & Internship Experience */}
      <motion.div
        id="about-overlay"
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-4 sm:px-12 md:px-24 max-w-2xl mx-auto sm:mx-0"
      >
        <div className="p-5 sm:p-8 rounded-3xl bg-transparent backdrop-blur-md border border-[#DCCB9A]/40 shadow-xl pointer-events-auto w-full">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="p-2 sm:p-2.5 rounded-xl bg-transparent backdrop-blur-md text-[#C99A2E] border border-[#DCCB9A]/40">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
              ABOUT &amp; INTERNSHIP EXPERIENCE
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight">
            Mother N Toddler <br />
            <span className="text-[#C99A2E] text-base sm:text-lg font-mono font-semibold">Web Development Intern</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#1C1C1C] font-medium leading-relaxed drop-shadow-sm">
            Engineered a production-ready MERN Stack retail e-commerce platform with React.js, Node.js, Express, MongoDB Atlas, auth, cart, wishlist, and admin portals.
          </p>

          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 border-t border-[#DCCB9A]/40 pt-3 sm:pt-4">
            <div>
              <span className="text-base sm:text-2xl font-extrabold text-[#1C1C1C] font-mono">MERN Stack</span>
              <p className="text-[10px] sm:text-xs text-[#1C1C1C] font-medium">Full-Stack Retail Platform</p>
            </div>
            <div>
              <span className="text-base sm:text-2xl font-extrabold text-[#C99A2E] font-mono">June–July 2026</span>
              <p className="text-[10px] sm:text-xs text-[#1C1C1C] font-medium">Certified Intern</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Academic Excellence */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col justify-center items-center md:items-end px-4 sm:px-12 md:px-24"
      >
        <div className="p-5 sm:p-8 rounded-3xl bg-transparent backdrop-blur-md border border-[#DCCB9A]/40 shadow-xl max-w-2xl text-left md:text-right pointer-events-auto w-full">
          <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-start md:justify-end">
            <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#C99A2E] font-bold uppercase">
              ACADEMIC EXCELLENCE
            </span>
            <div className="p-2 sm:p-2.5 rounded-xl bg-transparent backdrop-blur-md text-[#C99A2E] border border-[#DCCB9A]/40">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] leading-tight text-left md:text-right">
            B.Tech Data Science &amp; Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C99A2E] to-[#E7C66A]">
              9.32 / 10 CGPA
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-[#1C1C1C] font-medium leading-relaxed text-left md:text-right drop-shadow-sm">
            NxtWave Institute of Advanced Technology (NIAT). Mastering Python, C++, SQL, Algorithms, and full-stack software development.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-wrap justify-start md:justify-end gap-1.5 sm:gap-2">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'C++', 'SQL'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-transparent backdrop-blur-md text-[#C99A2E] font-bold border border-[#DCCB9A]/40"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
